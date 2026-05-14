import { useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface CalendarLegendBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

export function CalendarLegendBottomSheet({
  isVisible,
  onClose,
}: CalendarLegendBottomSheetProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isVisible) {
      closeButtonRef.current?.focus();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[60] flex items-end justify-center animate-in fade-in duration-200 font-['Open_Sans']"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="calendar-legend-title"
        aria-describedby="calendar-legend-description"
        onKeyDown={handleKeyDown}
        onClick={(event) => event.stopPropagation()}
        className="bg-card border border-border/70 relative rounded-t-[8px] w-full max-w-md overflow-hidden animate-in slide-in-from-bottom-full fade-in duration-300 shadow-xl dark:shadow-[0px_16px_32px_0px_rgba(0,0,0,0.35)] transition-colors"
      >
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p
                  id="calendar-legend-title"
                  className="font-['Open_Sans'] font-semibold leading-[30px] relative shrink-0 text-[20px] tracking-[0.03px] whitespace-pre-wrap text-foreground"
                >
                  Legenda do calendário
                </p>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="content-stretch flex flex-col items-center relative shrink-0 p-1 rounded-full hover:bg-muted/30"
                aria-label="Fechar legenda do calendário"
              >
                <CloseIcon sx={{ color: '#3A3A45', fontSize: 20 }} />
              </button>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p
                id="calendar-legend-description"
                className="font-['Open_Sans'] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap text-foreground"
              >
                Entenda o significado visual dos indicadores exibidos no calendário do espelho detalhado.
              </p>
            </div>
          </div>

          <div className="w-full space-y-3">
            <div className="rounded-[4px] border p-3 border-[#bfe6fa] bg-[#f7fbff] dark:border-primary/30 dark:bg-primary/10">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true"></span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Feriado</p>
                  <p className="text-sm text-foreground">Dia sem expediente regular. O nome do feriado tambem e anunciado pelo leitor de telas.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[4px] border p-3 border-[#f3c2c2] bg-[#fff7f7] dark:border-destructive-contrast/35 dark:bg-destructive/10">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-destructive dark:bg-destructive-contrast" aria-hidden="true"></span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Excecao</p>
                  <p className="text-sm text-foreground">Indica ocorrencias como ajuste, inconsistencia ou pendencia relacionada ao dia.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[4px] border p-3 border-border/60 bg-card">
              <div className="flex items-start gap-3">
                <span className="inline-flex min-h-6 min-w-6 items-center justify-center rounded-md px-1 text-xs font-semibold bg-primary text-white" aria-hidden="true">15</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Dia selecionado</p>
                  <p className="text-sm text-foreground">Mostra qual data esta aberta na area de detalhes logo abaixo do calendario.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[4px] border p-3 border-border/60 bg-card">
              <div className="flex items-start gap-3">
                <span className="inline-flex min-h-6 min-w-6 items-center justify-center rounded-md border px-1 text-xs border-border text-muted-foreground opacity-60" aria-hidden="true">28</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Data futura ou fora do mes</p>
                  <p className="text-sm text-foreground">Essas datas aparecem com menor enfase visual e nao podem ser selecionadas quando estao no futuro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--surface-elevated)] border-t border-border/70 relative shrink-0 w-full transition-colors">
          <div className="content-stretch flex items-center justify-end p-[24px] relative w-full">
            <button
              onClick={onClose}
              className="bg-primary text-white hover:bg-primary/90 content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full transition-colors"
            >
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                    <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[16px] tracking-[0.46px]">
                      Fechar
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
