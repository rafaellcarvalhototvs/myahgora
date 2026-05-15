import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Moon, Pipette, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const STORAGE_KEY = "myahgora-inspect-mode";

interface InspectModeContextValue {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  toggle: () => void;
}

interface ColorLabel {
  hex: string;
  token?: string;
  cssVar?: string;
}

interface TypographyDetails {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
  textTransform?: string;
}

interface SpacingDetails {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

interface InternalSpacingDetails {
  horizontal?: string;
  vertical?: string;
}

interface InspectDetails {
  tag: string;
  containerTag?: string;
  background?: ColorLabel;
  text?: ColorLabel;
  border?: ColorLabel;
  borderWidth?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  typography?: TypographyDetails;
  spacing?: SpacingDetails;
  internalSpacing?: InternalSpacingDetails;
  left: number;
  top: number;
  width: number;
  height: number;
  mouseX: number;
  mouseY: number;
}

interface MeasurementDetails {
  fromTag: string;
  toTag: string;
  horizontal: string;
  vertical: string;
  alignedX: boolean;
  alignedY: boolean;
}

interface ParsedColor {
  hex: string;
  alpha: number;
  rgbHex: string;
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
  ["--text-darken-2", "text-darken-2"],
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

function formatBoxValues(styles: CSSStyleDeclaration, prefix: "padding" | "margin") {
  const top = styles.getPropertyValue(`${prefix}-top`).trim();
  const right = styles.getPropertyValue(`${prefix}-right`).trim();
  const bottom = styles.getPropertyValue(`${prefix}-bottom`).trim();
  const left = styles.getPropertyValue(`${prefix}-left`).trim();
  return `${top} ${right} ${bottom} ${left}`;
}

function formatCssSize(value: number) {
  return `${Math.round(value)}px`;
}

function hasOverlap(startA: number, endA: number, startB: number, endB: number) {
  return Math.min(endA, endB) - Math.max(startA, startB) > 0;
}

function getSiblingSpacing(element: HTMLElement): SpacingDetails | undefined {
  const parent = element.parentElement;
  if (!parent) return undefined;

  const rect = element.getBoundingClientRect();
  const nearest: { direction: keyof SpacingDetails; distance: number }[] = [];

  for (const sibling of Array.from(parent.children)) {
    if (!(sibling instanceof HTMLElement) || sibling === element || sibling.dataset.inspectorUi === "true") {
      continue;
    }

    const siblingStyles = window.getComputedStyle(sibling);
    if (siblingStyles.display === "none" || siblingStyles.visibility === "hidden") continue;

    const siblingRect = sibling.getBoundingClientRect();
    if (siblingRect.width === 0 || siblingRect.height === 0) continue;

    if (siblingRect.bottom <= rect.top && hasOverlap(siblingRect.left, siblingRect.right, rect.left, rect.right)) {
      nearest.push({ direction: "top", distance: rect.top - siblingRect.bottom });
    }
    if (siblingRect.top >= rect.bottom && hasOverlap(siblingRect.left, siblingRect.right, rect.left, rect.right)) {
      nearest.push({ direction: "bottom", distance: siblingRect.top - rect.bottom });
    }
    if (siblingRect.right <= rect.left && hasOverlap(siblingRect.top, siblingRect.bottom, rect.top, rect.bottom)) {
      nearest.push({ direction: "left", distance: rect.left - siblingRect.right });
    }
    if (siblingRect.left >= rect.right && hasOverlap(siblingRect.top, siblingRect.bottom, rect.top, rect.bottom)) {
      nearest.push({ direction: "right", distance: siblingRect.left - rect.right });
    }
  }

  const spacing: SpacingDetails = {};
  for (const direction of ["top", "right", "bottom", "left"] as const) {
    const candidates = nearest.filter((item) => item.direction === direction).sort((a, b) => a.distance - b.distance);
    if (candidates[0]) {
      spacing[direction] = formatCssSize(candidates[0].distance);
    }
  }

  return Object.keys(spacing).length > 0 ? spacing : undefined;
}

function getInternalSpacing(element: HTMLElement): InternalSpacingDetails | undefined {
  const children = Array.from(element.children).filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement &&
      child.dataset.inspectorUi !== "true" &&
      window.getComputedStyle(child).display !== "none" &&
      window.getComputedStyle(child).visibility !== "hidden",
  );

  if (children.length < 2) return undefined;

  let minHorizontal = Number.POSITIVE_INFINITY;
  let minVertical = Number.POSITIVE_INFINITY;

  for (let index = 0; index < children.length - 1; index += 1) {
    const currentRect = children[index].getBoundingClientRect();
    const nextRect = children[index + 1].getBoundingClientRect();

    const horizontalGap = nextRect.left - currentRect.right;
    const verticalGap = nextRect.top - currentRect.bottom;

    if (horizontalGap >= 0 && horizontalGap < minHorizontal) {
      minHorizontal = horizontalGap;
    }

    if (verticalGap >= 0 && verticalGap < minVertical) {
      minVertical = verticalGap;
    }
  }

  const spacing: InternalSpacingDetails = {};
  if (Number.isFinite(minHorizontal)) spacing.horizontal = formatCssSize(minHorizontal);
  if (Number.isFinite(minVertical)) spacing.vertical = formatCssSize(minVertical);

  return Object.keys(spacing).length > 0 ? spacing : undefined;
}

function getTypographyDetails(styles: CSSStyleDeclaration): TypographyDetails | undefined {
  const details: TypographyDetails = {
    fontFamily: styles.fontFamily || undefined,
    fontSize: styles.fontSize || undefined,
    fontWeight: styles.fontWeight || undefined,
    lineHeight: styles.lineHeight || undefined,
    letterSpacing: styles.letterSpacing && styles.letterSpacing !== "normal" ? styles.letterSpacing : undefined,
    textAlign: styles.textAlign && styles.textAlign !== "start" ? styles.textAlign : undefined,
    textTransform: styles.textTransform && styles.textTransform !== "none" ? styles.textTransform : undefined,
  };

  return Object.values(details).some(Boolean) ? details : undefined;
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
  const frameStyles = window.getComputedStyle(elementToFrame);

  if (!containerBackground && !containerBorder && !text) {
    return null;
  }

  return {
    tag: target.tagName.toLowerCase(),
    containerTag: elementToFrame.tagName.toLowerCase(),
    background: containerBackground,
    text,
    border: containerBorder,
    borderWidth:
      Number.parseFloat(frameStyles.borderTopWidth) > 0
        ? `${frameStyles.borderTopWidth} ${frameStyles.borderRightWidth} ${frameStyles.borderBottomWidth} ${frameStyles.borderLeftWidth}`
        : undefined,
    borderRadius: frameStyles.borderRadius !== "0px" ? frameStyles.borderRadius : undefined,
    padding: formatBoxValues(frameStyles, "padding"),
    margin: formatBoxValues(frameStyles, "margin"),
    gap: frameStyles.gap && frameStyles.gap !== "normal" && frameStyles.gap !== "0px" ? frameStyles.gap : undefined,
    typography: getTypographyDetails(textStyles),
    spacing: getSiblingSpacing(elementToFrame),
    internalSpacing: getInternalSpacing(elementToFrame),
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    mouseX: clientX,
    mouseY: clientY,
  };
}

function getElementFromPoint(clientX: number, clientY: number) {
  return document
    .elementsFromPoint(clientX, clientY)
    .find((element) => element instanceof HTMLElement && (element as HTMLElement).dataset.inspectorUi !== "true") as
    | HTMLElement
    | undefined;
}

function measureBetweenElements(from: InspectDetails, to: InspectDetails): MeasurementDetails {
  const fromRight = from.left + from.width;
  const toRight = to.left + to.width;
  const fromBottom = from.top + from.height;
  const toBottom = to.top + to.height;

  let horizontal = 0;
  if (to.left >= fromRight) horizontal = to.left - fromRight;
  else if (from.left >= toRight) horizontal = from.left - toRight;

  let vertical = 0;
  if (to.top >= fromBottom) vertical = to.top - fromBottom;
  else if (from.top >= toBottom) vertical = from.top - toBottom;

  return {
    fromTag: from.tag,
    toTag: to.tag,
    horizontal: formatCssSize(horizontal),
    vertical: formatCssSize(vertical),
    alignedX: hasOverlap(from.left, fromRight, to.left, toRight),
    alignedY: hasOverlap(from.top, fromBottom, to.top, toBottom),
  };
}

function InspectOverlay({ enabled }: { enabled: boolean }) {
  const [details, setDetails] = useState<InspectDetails | null>(null);
  const [anchorDetails, setAnchorDetails] = useState<InspectDetails | null>(null);
  const [measurement, setMeasurement] = useState<MeasurementDetails | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDetails(null);
      setAnchorDetails(null);
      setMeasurement(null);
      return;
    }

    const updateFromPoint = (clientX: number, clientY: number) => {
      const target = getElementFromPoint(clientX, clientY);

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

  const tooltipLeft = details ? Math.min(details.mouseX + 16, window.innerWidth - 300) : 16;
  const tooltipTop = details ? Math.max(details.mouseY + 16, 16) : 16;

  const handleCopy = async () => {
    if (!details) return;

    const lines = [
      `tag: ${details.tag}`,
      details.containerTag && details.containerTag !== details.tag ? `container: ${details.containerTag}` : null,
      `size: ${Math.round(details.width)} x ${Math.round(details.height)}px`,
      details.padding ? `padding: ${details.padding}` : null,
      details.margin ? `margin: ${details.margin}` : null,
      details.borderWidth ? `border-width: ${details.borderWidth}` : null,
      details.borderRadius ? `border-radius: ${details.borderRadius}` : null,
      details.gap ? `gap: ${details.gap}` : null,
      details.spacing
        ? `spacing-around: T ${details.spacing.top ?? "--"} / R ${details.spacing.right ?? "--"} / B ${details.spacing.bottom ?? "--"} / L ${details.spacing.left ?? "--"}`
        : null,
      details.internalSpacing
        ? `spacing-inside: H ${details.internalSpacing.horizontal ?? "--"} / V ${details.internalSpacing.vertical ?? "--"}`
        : null,
      measurement ? `measure: ${measurement.fromTag} -> ${measurement.toTag} | H ${measurement.horizontal} / V ${measurement.vertical} | X ${measurement.alignedX ? "yes" : "no"} / Y ${measurement.alignedY ? "yes" : "no"}` : null,
      details.typography?.fontFamily ? `font-family: ${details.typography.fontFamily}` : null,
      details.typography?.fontSize || details.typography?.lineHeight
        ? `font-size-line-height: ${details.typography.fontSize ?? "--"} / ${details.typography.lineHeight ?? "--"}`
        : null,
      details.typography?.fontWeight ? `font-weight: ${details.typography.fontWeight}` : null,
      details.typography?.letterSpacing ? `letter-spacing: ${details.typography.letterSpacing}` : null,
      details.typography?.textAlign ? `text-align: ${details.typography.textAlign}` : null,
      details.typography?.textTransform ? `text-transform: ${details.typography.textTransform}` : null,
      details.background ? `background: ${details.background.token ? `${details.background.token} ` : ""}${details.background.cssVar ?? ""} ${details.background.hex}`.trim() : null,
      details.text ? `text: ${details.text.token ? `${details.text.token} ` : ""}${details.text.cssVar ?? ""} ${details.text.hex}`.trim() : null,
      details.border ? `border-color: ${details.border.token ? `${details.border.token} ` : ""}${details.border.cssVar ?? ""} ${details.border.hex}`.trim() : null,
    ].filter(Boolean).join("\n");

    await navigator.clipboard.writeText(lines);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <>
      <div
        aria-hidden="true"
        data-inspector-ui="true"
        className="fixed inset-0 z-[119] cursor-crosshair bg-transparent"
        onMouseMove={(event) => {
          const target = getElementFromPoint(event.clientX, event.clientY);

          if (!target) {
            setDetails(null);
            return;
          }

          setDetails(getInspectableDetails(target, event.clientX, event.clientY));
        }}
        onClick={(event) => {
          const target = getElementFromPoint(event.clientX, event.clientY);
          if (!target) return;

          const targetDetails = getInspectableDetails(target, event.clientX, event.clientY);
          if (!targetDetails) return;

          if (!anchorDetails || measurement) {
            setAnchorDetails(targetDetails);
            setMeasurement(null);
            setDetails(targetDetails);
            return;
          }

          setMeasurement(measureBetweenElements(anchorDetails, targetDetails));
          setDetails(targetDetails);
        }}
        onMouseLeave={() => setDetails(null)}
      />
      {anchorDetails && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed z-[120] rounded-[8px] border-2 border-[#7C3AED] bg-transparent"
            style={{
              left: anchorDetails.left,
              top: anchorDetails.top,
              width: anchorDetails.width,
              height: anchorDetails.height,
            }}
          />
        </>
      )}
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
            data-inspector-ui="true"
            className="fixed z-[121] min-w-[280px] max-w-[320px] rounded-[8px] border border-[#CBD5E1] bg-white px-3 py-2 font-['Open_Sans'] shadow-[0px_12px_24px_rgba(15,23,42,0.18)]"
            style={{ left: tooltipLeft, top: tooltipTop }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#475569]">{details.tag}</p>
                {details.containerTag && details.containerTag !== details.tag && (
                  <p className="text-[11px] text-[#64748B]">Container: {details.containerTag}</p>
                )}
              </div>
              <button
                type="button"
                data-inspector-ui="true"
                onClick={handleCopy}
                className="rounded border border-[#CBD5E1] px-2 py-1 text-[11px] font-medium text-[#334155] transition-colors hover:bg-[#F8FAFC]"
              >
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
            <p className="mt-1 text-[11px] text-[#64748B]">
              {measurement ? "Clique em um novo elemento para reiniciar a medição." : anchorDetails ? "Clique em um segundo elemento para medir a distância." : "Clique em um elemento para iniciar a medição."}
            </p>

            <div className="mt-1 border-t border-[#E2E8F0] pt-1">
              <p className="text-xs text-[#0F172A]">
                <span className="font-medium">Size:</span> <span className="font-mono">{Math.round(details.width)} x {Math.round(details.height)}px</span>
              </p>
              {details.padding && (
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Padding:</span> <span className="font-mono">{details.padding}</span>
                </p>
              )}
              {details.margin && (
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Margin:</span> <span className="font-mono">{details.margin}</span>
                </p>
              )}
              {details.borderWidth && (
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Border W:</span> <span className="font-mono">{details.borderWidth}</span>
                </p>
              )}
              {details.borderRadius && (
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Radius:</span> <span className="font-mono">{details.borderRadius}</span>
                </p>
              )}
              {details.gap && (
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Gap:</span> <span className="font-mono">{details.gap}</span>
                </p>
              )}
            </div>

            {details.spacing && (
              <div className="mt-1 border-t border-[#E2E8F0] pt-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#475569]">Spacing</p>
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Around:</span>{" "}
                  <span className="font-mono">
                    T {details.spacing.top ?? "--"} / R {details.spacing.right ?? "--"} / B {details.spacing.bottom ?? "--"} / L {details.spacing.left ?? "--"}
                  </span>
                </p>
                {details.internalSpacing && (
                  <p className="text-xs text-[#0F172A]">
                    <span className="font-medium">Inside:</span>{" "}
                    <span className="font-mono">
                      H {details.internalSpacing.horizontal ?? "--"} / V {details.internalSpacing.vertical ?? "--"}
                    </span>
                  </p>
                )}
              </div>
            )}

            {measurement && (
              <div className="mt-1 border-t border-[#E2E8F0] pt-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#475569]">Measure</p>
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">From/To:</span>{" "}
                  <span className="font-mono">{measurement.fromTag} → {measurement.toTag}</span>
                </p>
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Distance:</span>{" "}
                  <span className="font-mono">H {measurement.horizontal} / V {measurement.vertical}</span>
                </p>
                <p className="text-xs text-[#0F172A]">
                  <span className="font-medium">Align:</span>{" "}
                  <span className="font-mono">X {measurement.alignedX ? "yes" : "no"} / Y {measurement.alignedY ? "yes" : "no"}</span>
                </p>
              </div>
            )}

            {details.typography && (
              <div className="mt-1 border-t border-[#E2E8F0] pt-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#475569]">Typography</p>
                {details.typography.fontFamily && (
                  <p className="text-xs text-[#0F172A]">
                    <span className="font-medium">Family:</span> <span className="font-mono">{details.typography.fontFamily}</span>
                  </p>
                )}
                {(details.typography.fontSize || details.typography.lineHeight) && (
                  <p className="text-xs text-[#0F172A]">
                    <span className="font-medium">Size:</span>{" "}
                    <span className="font-mono">{details.typography.fontSize ?? "--"} / {details.typography.lineHeight ?? "--"}</span>
                  </p>
                )}
                {details.typography.fontWeight && (
                  <p className="text-xs text-[#0F172A]">
                    <span className="font-medium">Weight:</span> <span className="font-mono">{details.typography.fontWeight}</span>
                  </p>
                )}
                {details.typography.letterSpacing && (
                  <p className="text-xs text-[#0F172A]">
                    <span className="font-medium">Letter:</span> <span className="font-mono">{details.typography.letterSpacing}</span>
                  </p>
                )}
                {details.typography.textAlign && (
                  <p className="text-xs text-[#0F172A]">
                    <span className="font-medium">Align:</span> <span className="font-mono">{details.typography.textAlign}</span>
                  </p>
                )}
                {details.typography.textTransform && (
                  <p className="text-xs text-[#0F172A]">
                    <span className="font-medium">Transform:</span> <span className="font-mono">{details.typography.textTransform}</span>
                  </p>
                )}
              </div>
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

  return (
    <button
      type="button"
      data-inspector-ui="true"
      onClick={context.toggle}
      className={`fixed right-4 top-1/2 z-[130] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg transition-colors ${
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

function ThemeModeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      data-inspector-ui="true"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed right-4 top-[calc(50%-56px)] z-[130] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#334155] shadow-lg transition-colors hover:bg-[#F8FAFC]"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
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
      <ThemeModeButton />
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
