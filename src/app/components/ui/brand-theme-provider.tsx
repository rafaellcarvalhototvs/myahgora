import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { deriveBrandTheme, normalizeHex } from "../../lib/brand-theme";

const STORAGE_KEY = "myahgora-brand-color";
const STORAGE_VERSION = 1;

interface PersistedBrandTheme {
  version: number;
  color: string;
}

interface BrandThemeContextValue {
  brandColor: string | null;
  hasCustomBrand: boolean;
  setBrandColor: (color: string) => void;
  resetBrandColor: () => void;
}

const BrandThemeContext = createContext<BrandThemeContextValue | null>(null);

export function BrandThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [brandColor, setBrandColorState] = useState<string | null>(null);

  useEffect(() => {
    const stored = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as PersistedBrandTheme;
      if (parsed.version !== STORAGE_VERSION) {
        globalThis.localStorage?.removeItem(STORAGE_KEY);
        return;
      }

      const normalized = normalizeHex(parsed.color);
      if (normalized) {
        setBrandColorState(normalized);
        return;
      }
    } catch {
      // Legacy persisted raw hex values came from the experimental phase.
      // We intentionally discard them so the official system palette is the default baseline.
    }

    globalThis.localStorage?.removeItem(STORAGE_KEY);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (!brandColor) {
      root.style.removeProperty("--primary");
      root.style.removeProperty("--primary-foreground");
      root.style.removeProperty("--primary-darken-1");
      root.style.removeProperty("--surface-strong");
      root.style.removeProperty("--ring");
      root.style.removeProperty("--accent");
      root.style.removeProperty("--accent-foreground");
      root.style.removeProperty("--sidebar-primary");
      root.style.removeProperty("--sidebar-primary-foreground");
      return;
    }

    const mode = resolvedTheme === "dark" ? "dark" : "light";
    const tokens = deriveBrandTheme(brandColor, mode);

    root.style.setProperty("--primary", tokens.primary);
    root.style.setProperty("--primary-foreground", tokens.primaryForeground);
    root.style.setProperty("--primary-darken-1", tokens.primaryDarken1);
    root.style.setProperty("--surface-strong", tokens.surfaceStrong);
    root.style.setProperty("--ring", tokens.ring);
    root.style.setProperty("--accent", tokens.accent);
    root.style.setProperty("--accent-foreground", tokens.accentForeground);
    root.style.setProperty("--sidebar-primary", tokens.sidebarPrimary);
    root.style.setProperty("--sidebar-primary-foreground", tokens.sidebarPrimaryForeground);
  }, [brandColor, resolvedTheme]);

  const setBrandColor = (input: string) => {
    const normalized = normalizeHex(input);
    if (!normalized) return;
    setBrandColorState(normalized);
    globalThis.localStorage?.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: STORAGE_VERSION,
        color: normalized,
      } satisfies PersistedBrandTheme),
    );
  };

  const resetBrandColor = () => {
    setBrandColorState(null);
    globalThis.localStorage?.removeItem(STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      brandColor,
      hasCustomBrand: Boolean(brandColor),
      setBrandColor,
      resetBrandColor,
    }),
    [brandColor],
  );

  return <BrandThemeContext.Provider value={value}>{children}</BrandThemeContext.Provider>;
}

export function useBrandTheme() {
  const context = useContext(BrandThemeContext);
  if (!context) {
    throw new Error("useBrandTheme must be used within BrandThemeProvider");
  }
  return context;
}
