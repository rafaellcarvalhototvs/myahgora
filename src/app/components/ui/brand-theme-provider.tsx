import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { deriveBrandTheme, normalizeHex } from "../../lib/brand-theme";

const STORAGE_KEY = "myahgora-brand-color";
const DEFAULT_BRAND = "#1199DD";

interface BrandThemeContextValue {
  brandColor: string;
  setBrandColor: (color: string) => void;
  resetBrandColor: () => void;
}

const BrandThemeContext = createContext<BrandThemeContextValue | null>(null);

export function BrandThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [brandColor, setBrandColorState] = useState(DEFAULT_BRAND);

  useEffect(() => {
    const stored = globalThis.localStorage?.getItem(STORAGE_KEY);
    const normalized = stored ? normalizeHex(stored) : null;
    if (normalized) {
      setBrandColorState(normalized);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
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
    globalThis.localStorage?.setItem(STORAGE_KEY, normalized);
  };

  const resetBrandColor = () => {
    setBrandColorState(DEFAULT_BRAND);
    globalThis.localStorage?.setItem(STORAGE_KEY, DEFAULT_BRAND);
  };

  const value = useMemo(
    () => ({
      brandColor,
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
