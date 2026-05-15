export interface BrandThemeTokens {
  primary: string;
  primaryForeground: string;
  primaryDarken1: string;
  surfaceStrong: string;
  ring: string;
  accent: string;
  accentForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
}

type RGB = { r: number; g: number; b: number };

const SYSTEM_LIGHT_PRIMARY = "#1199DD";
const SYSTEM_DARK_PRIMARY = "#42B6F0";
const SYSTEM_DARK_PRIMARY_FOREGROUND = "#0A0A0C";
const SYSTEM_DARK_ACCENT = "#2A4A5F";
const SYSTEM_DARK_ACCENT_FOREGROUND = "#C2E4FF";
const WHITE = "#F4F4F6";
const BLACK = "#0A0A0C";
const DARK_BG = "#25252D";
const DARK_SURFACE = "#2A2A33";
const LIGHT_BG = "#FFFFFF";

export function normalizeHex(input: string): string | null {
  const value = input.trim().replace("#", "");
  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    return `#${value.split("").map((char) => char + char).join("").toUpperCase()}`;
  }
  if (/^[0-9a-fA-F]{6}$/.test(value)) {
    return `#${value.toUpperCase()}`;
  }
  return null;
}

function hexToRgb(hex: string): RGB {
  const normalized = normalizeHex(hex);
  if (!normalized) throw new Error(`Invalid hex color: ${hex}`);
  const value = normalized.slice(1);
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (channel: number) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function mix(colorA: string, colorB: string, ratio: number): string {
  const a = hexToRgb(colorA);
  const b = hexToRgb(colorB);
  const clamped = Math.max(0, Math.min(1, ratio));
  return rgbToHex({
    r: a.r + (b.r - a.r) * clamped,
    g: a.g + (b.g - a.g) * clamped,
    b: a.b + (b.b - a.b) * clamped,
  });
}

function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const toLinear = (channel: number) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  const [lr, lg, lb] = [toLinear(r), toLinear(g), toLinear(b)];
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

function contrastRatio(a: string, b: string): number {
  const l1 = relativeLuminance(a);
  const l2 = relativeLuminance(b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function chooseForeground(background: string): string {
  return contrastRatio(background, WHITE) >= contrastRatio(background, BLACK) ? WHITE : BLACK;
}

function ensureAccessibleBackground(
  base: string,
  preferredForeground?: string,
  preference: "darken" | "lighten" = "darken",
): { color: string; foreground: string } {
  let candidate = normalizeHex(base) ?? "#1199DD";
  let foreground = preferredForeground ?? chooseForeground(candidate);

  if (contrastRatio(candidate, foreground) >= 4.5) {
    return { color: candidate, foreground };
  }

  const fallbackForeground = foreground === WHITE ? BLACK : WHITE;
  if (contrastRatio(candidate, fallbackForeground) > contrastRatio(candidate, foreground)) {
    foreground = fallbackForeground;
    if (contrastRatio(candidate, foreground) >= 4.5) {
      return { color: candidate, foreground };
    }
  }

  for (let step = 1; step <= 18; step++) {
    const ratio = step * 0.05;
    const target = preference === "darken" ? "#000000" : "#FFFFFF";
    const mixed = mix(candidate, target, ratio);
    if (contrastRatio(mixed, foreground) >= 4.5) {
      return { color: mixed, foreground };
    }
  }

  const emergencyForeground = chooseForeground(candidate);
  return { color: candidate, foreground: emergencyForeground };
}

function ensureAccessibleText(base: string, background: string, preference: "darken" | "lighten"): string {
  let candidate = normalizeHex(base) ?? "#1199DD";
  if (contrastRatio(candidate, background) >= 4.5) {
    return candidate;
  }

  for (let step = 1; step <= 18; step++) {
    const ratio = step * 0.05;
    const target = preference === "darken" ? "#000000" : "#FFFFFF";
    const mixed = mix(candidate, target, ratio);
    if (contrastRatio(mixed, background) >= 4.5) {
      return mixed;
    }
  }

  return preference === "darken" ? BLACK : WHITE;
}

function toRgba(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`;
}

export function deriveBrandTheme(brandHex: string, mode: "light" | "dark"): BrandThemeTokens {
  const normalized = normalizeHex(brandHex) ?? SYSTEM_LIGHT_PRIMARY;

  if (mode === "light") {
    const primary = ensureAccessibleBackground(normalized, undefined, "darken");
    const accent = ensureAccessibleText(mix(normalized, "#FFFFFF", 0.08), LIGHT_BG, "darken");
    return {
      primary: primary.color,
      primaryForeground: primary.foreground,
      primaryDarken1: ensureAccessibleText(mix(normalized, "#000000", 0.22), LIGHT_BG, "darken"),
      surfaceStrong: primary.color,
      ring: toRgba(accent, 0.40),
      accent,
      accentForeground: chooseForeground(accent),
      sidebarPrimary: primary.color,
      sidebarPrimaryForeground: primary.foreground,
    };
  }

  const brandedPrimaryBase = mix(SYSTEM_DARK_PRIMARY, normalized, 0.35);
  const primary = ensureAccessibleBackground(brandedPrimaryBase, SYSTEM_DARK_PRIMARY_FOREGROUND, "lighten");
  const highlightBase = mix(SYSTEM_DARK_PRIMARY, normalized, 0.45);
  const highlight = ensureAccessibleText(highlightBase, DARK_BG, "lighten");
  const accentBase = mix(SYSTEM_DARK_ACCENT, normalized, 0.18);
  const accent = ensureAccessibleBackground(accentBase, SYSTEM_DARK_ACCENT_FOREGROUND, "darken");

  return {
    primary: primary.color,
    primaryForeground: primary.foreground,
    primaryDarken1: highlight,
    surfaceStrong: DARK_SURFACE,
    ring: toRgba(highlight, 0.45),
    accent: accent.color,
    accentForeground: accent.foreground,
    sidebarPrimary: primary.color,
    sidebarPrimaryForeground: primary.foreground,
  };
}
