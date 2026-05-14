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
  background?: string;
  text?: string;
  border?: string;
  left: number;
  top: number;
  width: number;
  height: number;
  mouseX: number;
  mouseY: number;
}

const InspectModeContext = createContext<InspectModeContextValue | null>(null);

function isTransparent(color: string) {
  const normalized = color.replace(/\s+/g, "").toLowerCase();
  return !normalized || normalized === "transparent" || normalized === "rgba(0,0,0,0)";
}

function channelToHex(value: number) {
  return Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0").toUpperCase();
}

function cssColorToHex(color: string) {
  if (!color) return null;
  const normalized = color.trim();

  if (normalized.startsWith("#")) {
    const hex = normalized.slice(1);
    if (hex.length === 3) {
      return `#${hex.split("").map((char) => char + char).join("").toUpperCase()}`;
    }
    return `#${hex.toUpperCase()}`;
  }

  const match = normalized.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;

  const [r, g, b, alpha] = match[1].split(",").map((part) => Number(part.trim()));
  if ([r, g, b].some((channel) => Number.isNaN(channel))) return null;

  if (typeof alpha === "number" && !Number.isNaN(alpha) && alpha < 1) {
    return `#${channelToHex(r)}${channelToHex(g)}${channelToHex(b)}${channelToHex(alpha * 255)}`;
  }

  return `#${channelToHex(r)}${channelToHex(g)}${channelToHex(b)}`;
}

function InspectOverlay({ enabled }: { enabled: boolean }) {
  const [details, setDetails] = useState<InspectDetails | null>(null);

  useEffect(() => {
    if (!enabled) {
      setDetails(null);
      return;
    }

    const updateFromPoint = (clientX: number, clientY: number) => {
      const target = document.elementFromPoint(clientX, clientY) as HTMLElement | null;
      if (!target || target.dataset.inspectorUi === "true") {
        setDetails(null);
        return;
      }

      const styles = window.getComputedStyle(target);
      const rect = target.getBoundingClientRect();

      const nextDetails: InspectDetails = {
        tag: target.tagName.toLowerCase(),
        background: isTransparent(styles.backgroundColor) ? undefined : cssColorToHex(styles.backgroundColor) ?? undefined,
        text: isTransparent(styles.color) ? undefined : cssColorToHex(styles.color) ?? undefined,
        border:
          Number.parseFloat(styles.borderTopWidth) > 0 && !isTransparent(styles.borderTopColor)
            ? cssColorToHex(styles.borderTopColor) ?? undefined
            : undefined,
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        mouseX: clientX,
        mouseY: clientY,
      };

      if (!nextDetails.background && !nextDetails.text && !nextDetails.border) {
        setDetails(null);
        return;
      }

      setDetails(nextDetails);
    };

    const handleMouseMove = (event: MouseEvent) => updateFromPoint(event.clientX, event.clientY);
    const handleScroll = () => {
      if (details) {
        updateFromPoint(details.mouseX, details.mouseY);
      }
    };
    const handleLeave = () => setDetails(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [enabled, details]);

  if (!enabled || !details) return null;

  const tooltipLeft = Math.min(details.mouseX + 16, window.innerWidth - 180);
  const tooltipTop = Math.max(details.mouseY + 16, 16);

  return (
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
        {details.background && <p className="mt-1 text-xs text-[#0F172A]">BG: {details.background}</p>}
        {details.text && <p className="text-xs text-[#0F172A]">Text: {details.text}</p>}
        {details.border && <p className="text-xs text-[#0F172A]">Border: {details.border}</p>}
      </div>
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
      className={`fixed bottom-24 right-4 z-[130] flex h-11 items-center gap-2 rounded-full border px-3 shadow-lg transition-colors ${
        context.enabled
          ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
          : "border-[#CBD5E1] bg-white text-[#334155]"
      }`}
      aria-label={context.enabled ? "Desativar modo lupa" : "Ativar modo lupa"}
      title={context.enabled ? "Desativar modo lupa" : "Ativar modo lupa"}
    >
      <Pipette className="h-4 w-4" />
      <span className="text-xs font-semibold leading-none">{context.enabled ? "Lupa on" : "Lupa"}</span>
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
