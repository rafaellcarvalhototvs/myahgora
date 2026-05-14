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
  const darkPreview = useMemo(() => deriveBrandTheme(draftColor, "dark"), [draftColor]);
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
                  <div className="rounded-[6px] px-3 py-3" style={{ backgroundColor: darkPreview.primary }}>
                    <span style={{ color: darkPreview.primaryForeground }} className="text-sm font-semibold">
                      Header / CTA
                    </span>
                  </div>
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

            <div className="rounded-[8px] border border-border bg-card p-4 space-y-4 transition-colors">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Mapa visual do dark</h2>
                <p className="text-sm text-muted-foreground">
                  Vista rápida para o dev bater o olho: a tela abaixo marca onde entram as cores principais do tema escuro e quais tokens estão sendo usados.
                </p>
              </div>

              <div className="overflow-x-auto pb-2">
                <div className="relative min-w-[760px] h-[560px] rounded-[12px] border border-border/70 bg-[#12141B]">
                  <div className="absolute left-[32px] top-[64px] w-[180px] rounded-[10px] border border-border bg-card p-3 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Header / CTA</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">`primary`</p>
                    <p className="text-xs text-muted-foreground">{darkPreview.primary}</p>
                  </div>
                  <div
                    className="absolute left-[212px] top-[118px] h-[2px] w-[78px]"
                    style={{ backgroundColor: darkPreview.primary }}
                  />
                  <div
                    className="absolute left-[286px] top-[114px] h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px]"
                    style={{ borderLeftColor: darkPreview.primary }}
                  />

                  <div className="absolute right-[30px] top-[156px] w-[186px] rounded-[10px] border border-border bg-card p-3 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Texto sobre CTA</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">`primary-foreground`</p>
                    <p className="text-xs text-muted-foreground">{darkPreview.primaryForeground}</p>
                  </div>
                  <div
                    className="absolute right-[214px] top-[210px] h-[2px] w-[82px]"
                    style={{ backgroundColor: darkPreview.primaryForeground }}
                  />
                  <div
                    className="absolute right-[288px] top-[206px] h-0 w-0 border-y-[6px] border-y-transparent border-r-[10px]"
                    style={{ borderRightColor: darkPreview.primaryForeground }}
                  />

                  <div className="absolute left-[28px] bottom-[136px] w-[186px] rounded-[10px] border border-border bg-card p-3 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Link / Ícone ativo</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">`primary-darken-1`</p>
                    <p className="text-xs text-muted-foreground">{darkPreview.primaryDarken1}</p>
                  </div>
                  <div
                    className="absolute left-[214px] bottom-[188px] h-[2px] w-[82px]"
                    style={{ backgroundColor: darkPreview.primaryDarken1 }}
                  />
                  <div
                    className="absolute left-[288px] bottom-[184px] h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px]"
                    style={{ borderLeftColor: darkPreview.primaryDarken1 }}
                  />

                  <div className="absolute right-[32px] bottom-[82px] w-[184px] rounded-[10px] border border-border bg-card p-3 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Card forte</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">`card` + `border`</p>
                    <p className="text-xs text-muted-foreground">#232630 + #474C5D</p>
                  </div>
                  <div className="absolute right-[214px] bottom-[136px] h-[2px] w-[86px] bg-border" />
                  <div className="absolute right-[292px] bottom-[132px] h-0 w-0 border-y-[6px] border-y-transparent border-r-[10px] border-r-border" />

                  <div className="absolute left-1/2 top-7 -translate-x-1/2 rounded-full border border-border bg-card px-3 py-1">
                    <span className="text-xs font-semibold text-muted-foreground">Preview técnico do dark</span>
                  </div>

                  <div className="absolute left-1/2 top-16 w-[300px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-border/80 bg-[#17181F] shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
                    <div className="h-[84px] px-5 py-4" style={{ backgroundColor: darkPreview.primary }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full border bg-white/25" />
                          <div className="h-3 w-24 rounded-full bg-white/30" />
                        </div>
                        <div className="h-8 rounded-full border border-white/30 px-3 py-1.5">
                          <span className="text-xs font-semibold" style={{ color: darkPreview.primaryForeground }}>
                            Dark
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-lg font-semibold" style={{ color: darkPreview.primaryForeground }}>
                        Olá, Rafael
                      </p>
                    </div>

                    <div className="p-4 space-y-4 bg-[#17181F]">
                      <div className="rounded-[16px] border bg-[#232630] p-4" style={{ borderColor: "#474C5D" }}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-lg font-semibold text-[#ECEEF4]">Registrar o ponto</p>
                            <p className="mt-2 text-sm text-[#9BA3B3]">Card principal no dark com contraste preservado.</p>
                          </div>
                          <p className="text-xs font-semibold text-[#9BA3B3]">13 Mai</p>
                        </div>

                        <button
                          type="button"
                          className="mt-4 flex h-11 w-full items-center justify-center rounded-[8px] font-semibold"
                          style={{ backgroundColor: darkPreview.primary, color: darkPreview.primaryForeground }}
                        >
                          Registrar o ponto
                        </button>

                        <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: "#474C5D" }}>
                          <span className="text-sm text-[#ECEEF4]">Saldo banco de horas</span>
                          <span className="text-sm font-semibold text-[#22AA44]">+ 02:04</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-[12px] border border-[#474C5D] px-4 py-3">
                        <span className="text-sm text-[#ECEEF4]">Acessar espelho detalhado</span>
                        <span style={{ color: darkPreview.primaryDarken1 }} className="text-sm font-semibold">
                          Ver
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-3">
                        {["Incluir", "Cancelar", "Substituir", "Solicitar"].map((label) => (
                          <div key={label} className="flex flex-col items-center gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#474C5D] bg-[#232630]">
                              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: darkPreview.primaryDarken1 }} />
                            </div>
                            <span className="text-[11px] text-center text-[#ECEEF4]">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[8px] border border-border bg-background p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Leitura rápida</p>
                  <p className="mt-2 text-sm text-foreground">
                    `primary` fica para header e CTA sólido. `primary-darken-1` entra em links, ícones ativos e contornos com menor massa visual.
                  </p>
                </div>
                <div className="rounded-[8px] border border-border bg-background p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Objetivo</p>
                  <p className="mt-2 text-sm text-foreground">
                    Quando a marca muda, o dev consegue comparar rapidamente fundo forte, texto sobre CTA e cor interativa sem abrir inspetor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
