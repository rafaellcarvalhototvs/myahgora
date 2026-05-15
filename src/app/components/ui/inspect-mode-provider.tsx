import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Pipette } from "lucide-react";

const STORAGE_KEY = "myahgora-inspect-mode";

interface InspectModeContextValue {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  toggle: () => void;
}

interface InspectDetails {
  tag: string;
  containerTag?: string;
  background?: ColorLabel;
  text?: ColorLabel;
  border?: ColorLabel;
  left: number;
  top: number;
  width: number;
  height: number;
  mouseX: number;
  mouseY: number;
}

interface ParsedColor {
  hex: string;
  alpha: number;
  rgbHex: string;
}

interface ColorLabel {
  hex: string;
  token?: string;
  cssVar?: string;
}

const THEME_TOKEN_LABELS: Array<[string, string]> = [
  ["--background", "background"],
  ["--foreground", "foreground"],
  ["--card", "card"],
  ["--card-foreground", "card-foreground"],
  ["--popover", "popover"],
  ["--popover-foreground", "popover-foreground"],
  ["--primary", "primary"],
  ["--primary-darken-1", "primary-darken-1"],
  ["--primary-foreground", "primary-foreground"],
  ["--primary-hover", "primary-hover"],
  ["--primary-active", "primary-active"],
  ["--secondary", "secondary"],
  ["--secondary-foreground", "secondary-foreground"],
  ["--muted", "muted"],
  ["--muted-foreground", "muted-foreground"],
  ["--text-lighten-3", "text-lighten-3"],
  ["--accent", "accent"],
  ["--accent-foreground", "accent-foreground"],
  ["--accent-hover", "accent-hover"],
  ["--info", "info"],
  ["--info-foreground", "info-foreground"],
  ["--info-hover", "info-hover"],
  ["--success", "success"],
  ["--success-foreground", "success-foreground"],
  ["--success-hover", "success-hover"],
  ["--warning", "warning"],
  ["--warning-foreground", "warning-foreground"],
  ["--warning-hover", "warning-hover"],
  ["--destructive", "destructive"],
  ["--destructive-contrast", "destructive-contrast"],
  ["--destructive-foreground", "destructive-foreground"],
  ["--destructive-hover", "destructive-hover"],
  ["--destructive-active", "destructive-active"],
  ["--disabled", "disabled"],
  ["--disabled-foreground", "disabled-foreground"],
  ["--border", "border"],
  ["--input", "input"],
  ["--input-background", "input-background"],
  ["--ring", "ring"],
  ["--surface-elevated", "surface-elevated"],
  ["--surface-strong", "surface-strong"],
  ["--chart-1", "chart-1"],
  ["--chart-2", "chart-2"],
  ["--chart-3", "chart-3"],
  ["--chart-4", "chart-4"],
  ["--chart-5", "chart-5"],
];

const InspectModeContext = createContext<InspectModeContextValue | null>(null);

function isTransparent(color: string) {
  const normalized = color.replace(/\s+/g, "").toLowerCase();
  return !normalized || normalized === "transparent" || normalized === "rgba(0,0,0,0)";
}

function channelToHex(value: number) {
  return Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0").toUpperCase();
}

function parseCssColor(color: string): ParsedColor | null {
  if (!color) return null;
  const normalized = color.trim();

  if (normalized.startsWith("#")) {
    const hex = normalized.slice(1);
    if (hex.length === 3) {
      const expanded = `#${hex.split("").map((char) => char + char).join("").toUpperCase()}`;
      return { hex: expanded, alpha: 1, rgbHex: expanded };
    }
    if (hex.length === 6) {
      const fullHex = `#${hex.toUpperCase()}`;
      return { hex: fullHex, alpha: 1, rgbHex: fullHex };
    }
    if (hex.length === 8) {
      const fullHex = `#${hex.toUpperCase()}`;
      return {
        hex: fullHex,
        alpha: Number.parseInt(hex.slice(6, 8), 16) / 255,
        rgbHex: `#${hex.slice(0, 6).toUpperCase()}`,
      };
    }
    return null;
  }

  const match = normalized.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;

  const [r, g, b, alpha] = match[1].split(",").map((part) => Number(part.trim()));
  if ([r, g, b].some((channel) => Number.isNaN(channel))) return null;

  const rgbHex = `#${channelToHex(r)}${channelToHex(g)}${channelToHex(b)}`;
  const resolvedAlpha = typeof alpha === "number" && !Number.isNaN(alpha) ? alpha : 1;

  if (resolvedAlpha < 1) {
    return {
      hex: `${rgbHex}${channelToHex(resolvedAlpha * 255)}`,
      alpha: resolvedAlpha,
      rgbHex,
    };
  }

  return { hex: rgbHex, alpha: 1, rgbHex };
}

function getThemeTokenMap() {
  const rootStyles = window.getComputedStyle(document.documentElement);
  const tokenMap = new Map<string, { label: string; cssVar: string }>();

  for (const [cssVar, label] of THEME_TOKEN_LABELS) {
    const value = rootStyles.getPropertyValue(cssVar).trim();
    const parsed = parseCssColor(value);
    if (!parsed) continue;
    const meta = { label, cssVar };
    tokenMap.set(parsed.hex.toUpperCase(), meta);
    tokenMap.set(parsed.rgbHex.toUpperCase(), meta);
  }

  return tokenMap;
}

function resolveColorLabel(
  color: string,
  tokenMap: Map<string, { label: string; cssVar: string }>,
): ColorLabel | undefined {
  const parsed = parseCssColor(color);
  if (!parsed) return undefined;

  const exactToken = tokenMap.get(parsed.hex.toUpperCase()) ?? tokenMap.get(parsed.rgbHex.toUpperCase());
  if (exactToken) {
    const token = parsed.alpha < 1 ? `${exactToken.label} @ ${Math.round(parsed.alpha * 100)}%` : exactToken.label;
    return { hex: parsed.hex, token, cssVar: exactToken.cssVar };
  }

  return { hex: parsed.hex };
}

function getInspectableDetails(target: HTMLElement, clientX: number, clientY: number): InspectDetails | null {
  const tokenMap = getThemeTokenMap();
  const textStyles = window.getComputedStyle(target);
  const text = isTransparent(textStyles.color) ? undefined : resolveColorLabel(textStyles.color, tokenMap);

  let container: HTMLElement | null = target;
  let containerBackground: ColorLabel | undefined;
  let containerBorder: ColorLabel | undefined;

  while (container && container !== document.body) {
    const styles = window.getComputedStyle(container);
    const background = isTransparent(styles.backgroundColor) ? undefined : resolveColorLabel(styles.backgroundColor, tokenMap);
    const border =
      Number.parseFloat(styles.borderTopWidth) > 0 && !isTransparent(styles.borderTopColor)
        ? resolveColorLabel(styles.borderTopColor, tokenMap)
        : undefined;

    if (background || border) {
      containerBackground = background;
      containerBorder = border;
      break;
    }

    container = container.parentElement;
  }

  const elementToFrame = container ?? target;
  const rect = elementToFrame.getBoundingClientRect();

  if (!containerBackground && !containerBorder && !text) {
    return null;
  }

  return {
    tag: target.tagName.toLowerCase(),
    containerTag: elementToFrame.tagName.toLowerCase(),
    background: containerBackground,
    text,
    border: containerBorder,
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    mouseX: clientX,
    mouseY: clientY,
  };
}

function InspectOverlay({ enabled }: { enabled: boolean }) {
  const [details, setDetails] = useState<InspectDetails | null>(null);

  useEffect(() => {
    if (!enabled) {
      setDetails(null);
      return;
    }

    const updateFromPoint = (clientX: number, clientY: number) => {
      const target = document
        .elementsFromPoint(clientX, clientY)
        .find((element) => element instanceof HTMLElement && (element as HTMLElement).dataset.inspectorUi !== "true") as
        | HTMLElement
        | undefined;

      if (!target) {
        setDetails(null);
        return;
      }
      setDetails(getInspectableDetails(target, clientX, clientY));
    };

    const handleScroll = () => {
      if (details) {
        updateFromPoint(details.mouseX, details.mouseY);
      }
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [enabled, details]);

  if (!enabled) return null;

  const tooltipLeft = details ? Math.min(details.mouseX + 16, window.innerWidth - 180) : 16;
  const tooltipTop = details ? Math.max(details.mouseY + 16, 16) : 16;

  return (
    <>
      <div
        aria-hidden="true"
        data-inspector-ui="true"
        className="fixed inset-0 z-[119] cursor-crosshair bg-transparent"
        onMouseMove={(event) => {
          const target = document
            .elementsFromPoint(event.clientX, event.clientY)
            .find((element) => element instanceof HTMLElement && (element as HTMLElement).dataset.inspectorUi !== "true") as
            | HTMLElement
            | undefined;

          if (!target) {
            setDetails(null);
            return;
          }

          setDetails(getInspectableDetails(target, event.clientX, event.clientY));
        }}
        onMouseLeave={() => setDetails(null)}
      />
      {details && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed z-[120] rounded-[8px] border-2 border-[#1D4ED8] bg-transparent"
            style={{
              left: details.left,
              top: details.top,
              width: details.width,
              height: details.height,
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed z-[121] min-w-[170px] rounded-[8px] border border-[#CBD5E1] bg-white px-3 py-2 font-['Open_Sans'] shadow-[0px_12px_24px_rgba(15,23,42,0.18)]"
            style={{ left: tooltipLeft, top: tooltipTop }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#475569]">{details.tag}</p>
            {details.containerTag && details.containerTag !== details.tag && (
              <p className="text-[11px] text-[#64748B]">Container: {details.containerTag}</p>
            )}
            {details.background && (
              <p className="mt-1 text-xs text-[#0F172A]">
                BG: {details.background.token ? `${details.background.token} ` : ""}
                {details.background.cssVar ? <span className="font-mono text-[11px]">{details.background.cssVar} </span> : ""}
                <span className="font-mono">{details.background.hex}</span>
              </p>
            )}
            {details.text && (
              <p className="text-xs text-[#0F172A]">
                Text: {details.text.token ? `${details.text.token} ` : ""}
                {details.text.cssVar ? <span className="font-mono text-[11px]">{details.text.cssVar} </span> : ""}
                <span className="font-mono">{details.text.hex}</span>
              </p>
            )}
            {details.border && (
              <p className="text-xs text-[#0F172A]">
                Border: {details.border.token ? `${details.border.token} ` : ""}
                {details.border.cssVar ? <span className="font-mono text-[11px]">{details.border.cssVar} </span> : ""}
                <span className="font-mono">{details.border.hex}</span>
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
}

function InspectModeButton() {
  const context = useInspectMode();

  if (!context.enabled) return null;

  return (
    <button
      type="button"
      data-inspector-ui="true"
      onClick={context.toggle}
      className={`fixed bottom-24 right-4 z-[130] flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-colors ${
        context.enabled
          ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
          : "border-[#CBD5E1] bg-white text-[#334155]"
      }`}
      aria-label={context.enabled ? "Desativar modo lupa" : "Ativar modo lupa"}
      title={context.enabled ? "Desativar modo lupa" : "Ativar modo lupa"}
    >
      <Pipette className="h-4 w-4" />
    </button>
  );
}

export function InspectModeProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabledState] = useState(false);

  useEffect(() => {
    const stored = globalThis.localStorage?.getItem(STORAGE_KEY);
    setEnabledState(stored === "true");
  }, []);

  const setEnabled = (value: boolean) => {
    setEnabledState(value);
    globalThis.localStorage?.setItem(STORAGE_KEY, String(value));
  };

  const toggle = () => setEnabled(!enabled);

  const value = useMemo(() => ({ enabled, setEnabled, toggle }), [enabled]);

  return (
    <InspectModeContext.Provider value={value}>
      {children}
      <InspectOverlay enabled={enabled} />
      <InspectModeButton />
    </InspectModeContext.Provider>
  );
}

export function useInspectMode() {
  const context = useContext(InspectModeContext);
  if (!context) {
    throw new Error("useInspectMode must be used within InspectModeProvider");
  }
  return context;
}
