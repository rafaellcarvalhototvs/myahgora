import { useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AhgoraButton } from "../AhgoraButton";
import { useBrandTheme } from "../../ui/brand-theme-provider";
import { deriveBrandTheme, normalizeHex } from "../../../lib/brand-theme";

interface ProfileSettingsScreenProps {
  onBack: () => void;
  onAccessibilityReport: () => void;
}

export function ProfileSettingsScreen({ onBack, onAccessibilityReport }: ProfileSettingsScreenProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { brandColor, setBrandColor, resetBrandColor } = useBrandTheme();
  const [draftColor, setDraftColor] = useState(brandColor);
  const mode = resolvedTheme === "dark" ? "dark" : "light";
  const preview = useMemo(() => deriveBrandTheme(draftColor, mode), [draftColor, mode]);
  const validColor = Boolean(normalizeHex(draftColor));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-background flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen">
      <div className="w-full max-w-md bg-background h-full relative shadow-2xl dark:shadow-none flex flex-col transition-colors">
        <div className="bg-primary px-6 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] z-10 relative">
          <button onClick={onBack} className="text-white p-1 mr-2" aria-label="Voltar para tela inicial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
            </svg>
          </button>
          <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Perfil e tema</h1>
        </div>

        <div className="flex-1 overflow-y-auto bg-background transition-colors">
          <div className="p-6 flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-foreground">Aparência da marca</h2>
              <p className="text-sm text-muted-foreground">
                Informe a cor principal da marca. O app ajusta automaticamente texto, botões e a versão profunda do dark mode para manter contraste.
              </p>
            </div>

            <div className="rounded-[8px] border border-border bg-card p-4 space-y-4 transition-colors">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground block">Cor da marca</label>
                <div className="flex gap-3 items-center">
                  <input
                    type="color"
                    value={normalizeHex(draftColor) ?? brandColor}
                    onChange={(e) => setDraftColor(e.target.value)}
                    className="h-12 w-14 rounded-[4px] border border-border bg-transparent p-1"
                    aria-label="Selecionar cor da marca"
                  />
                  <input
                    type="text"
                    value={draftColor}
                    onChange={(e) => setDraftColor(e.target.value)}
                    placeholder="#1199DD"
                    className="flex-1 h-12 rounded-[4px] border border-border bg-card px-4 text-foreground placeholder:text-muted-foreground"
                    aria-label="Código hexadecimal da cor da marca"
                  />
                </div>
                {!validColor && <p className="text-xs text-destructive">Use um hexadecimal válido como `#1199DD`.</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[8px] border border-border p-3 bg-background">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Light</p>
                  <div className="rounded-[6px] px-3 py-3" style={{ backgroundColor: mode === "light" ? preview.primary : deriveBrandTheme(draftColor, "light").primary }}>
                    <span style={{ color: mode === "light" ? preview.primaryForeground : deriveBrandTheme(draftColor, "light").primaryForeground }} className="text-sm font-semibold">
                      Header / CTA
                    </span>
                  </div>
                </div>
                <div className="rounded-[8px] border border-border p-3 bg-background">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Dark</p>
                  {(() => {
                    const darkPreview = deriveBrandTheme(draftColor, "dark");
                    return (
                      <div className="rounded-[6px] px-3 py-3" style={{ backgroundColor: darkPreview.primary }}>
                        <span style={{ color: darkPreview.primaryForeground }} className="text-sm font-semibold">
                          Header / CTA
                        </span>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <div className="flex gap-3">
                <AhgoraButton
                  variant="primary"
                  size="md"
                  onClick={() => validColor && setBrandColor(draftColor)}
                  disabled={!validColor}
                  className="flex-1"
                >
                  Aplicar cor
                </AhgoraButton>
                <AhgoraButton variant="outline" size="md" onClick={() => { resetBrandColor(); setDraftColor("#1199DD"); }} className="flex-1">
                  Restaurar
                </AhgoraButton>
              </div>
            </div>

            <div className="rounded-[8px] border border-border bg-card p-4 space-y-4 transition-colors">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Tema</h2>
                <p className="text-sm text-muted-foreground">
                  Troque entre claro e escuro. A cor da marca é recalculada automaticamente para manter contraste em cada modo.
                </p>
              </div>

              <div className="flex gap-3">
                <AhgoraButton
                  variant={mode === "light" ? "primary" : "outline"}
                  size="md"
                  onClick={() => setTheme("light")}
                  leftIcon={<Sun className="w-4 h-4" />}
                  className="flex-1"
                >
                  Claro
                </AhgoraButton>
                <AhgoraButton
                  variant={mode === "dark" ? "primary" : "outline"}
                  size="md"
                  onClick={() => setTheme("dark")}
                  leftIcon={<Moon className="w-4 h-4" />}
                  className="flex-1"
                >
                  Escuro
                </AhgoraButton>
              </div>
            </div>

            <div className="rounded-[8px] border border-border bg-card p-4 space-y-3 transition-colors">
              <h2 className="text-base font-semibold text-foreground">Acessibilidade</h2>
              <p className="text-sm text-muted-foreground">
                Consulte o relatório atual de acessibilidade e contraste para acompanhar as decisões visuais da interface.
              </p>
              <AhgoraButton variant="outline" size="md" onClick={onAccessibilityReport}>
                Abrir relatório
              </AhgoraButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
