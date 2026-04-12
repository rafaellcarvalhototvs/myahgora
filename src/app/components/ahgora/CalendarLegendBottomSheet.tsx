import CloseIcon from '@mui/icons-material/Close';

interface CalendarLegendBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  isHighContrast?: boolean;
}

export function CalendarLegendBottomSheet({
  isVisible,
  onClose,
  isHighContrast = false,
}: CalendarLegendBottomSheetProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-end justify-center animate-in fade-in duration-200 font-['Open_Sans']">
      <div className={`${isHighContrast ? 'bg-black text-white border border-yellow-300' : 'bg-white'} relative rounded-t-[8px] w-full max-w-md overflow-hidden animate-in slide-in-from-bottom-full fade-in duration-300 shadow-xl`}>
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className={`font-['Open_Sans'] font-semibold leading-[30px] relative shrink-0 text-[20px] tracking-[0.03px] whitespace-pre-wrap ${isHighContrast ? 'text-yellow-300' : 'text-[#3a3a45]'}`}>
                  Legenda do calendário
                </p>
              </div>
              <button
                onClick={onClose}
                className={`content-stretch flex flex-col items-center relative shrink-0 p-1 rounded-full ${isHighContrast ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                aria-label="Fechar legenda do calendário"
              >
                <CloseIcon sx={{ color: isHighContrast ? '#fde047' : '#3A3A45', fontSize: 20 }} />
              </button>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className={`font-['Open_Sans'] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap ${isHighContrast ? 'text-white' : 'text-[#3a3a45]'}`}>
                Entenda o significado visual dos indicadores exibidos no calendário do espelho detalhado.
              </p>
            </div>
          </div>

          <div className="w-full space-y-3">
            <div className={`rounded-[4px] border p-3 ${isHighContrast ? 'border-yellow-300 bg-neutral-950' : 'border-[#bfe6fa] bg-[#f7fbff]'}`}>
              <div className="flex items-start gap-3">
                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${isHighContrast ? 'bg-yellow-300' : 'bg-primary'}`} aria-hidden="true"></span>
                <div>
                  <p className={`text-sm font-semibold ${isHighContrast ? 'text-yellow-300' : 'text-[#2A2A33]'}`}>Feriado</p>
                  <p className={`text-sm ${isHighContrast ? 'text-white' : 'text-[#3a3a45]'}`}>Dia sem expediente regular. O nome do feriado tambem e anunciado pelo leitor de telas.</p>
                </div>
              </div>
            </div>

            <div className={`rounded-[4px] border p-3 ${isHighContrast ? 'border-yellow-300 bg-neutral-950' : 'border-[#f3c2c2] bg-[#fff7f7]'}`}>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-destructive" aria-hidden="true"></span>
                <div>
                  <p className={`text-sm font-semibold ${isHighContrast ? 'text-yellow-300' : 'text-[#2A2A33]'}`}>Excecao</p>
                  <p className={`text-sm ${isHighContrast ? 'text-white' : 'text-[#3a3a45]'}`}>Indica ocorrencias como ajuste, inconsistencia ou pendencia relacionada ao dia.</p>
                </div>
              </div>
            </div>

            <div className={`rounded-[4px] border p-3 ${isHighContrast ? 'border-yellow-300 bg-neutral-950' : 'border-gray-200 bg-white'}`}>
              <div className="flex items-start gap-3">
                <span className={`inline-flex min-h-6 min-w-6 items-center justify-center rounded-md px-1 text-xs font-semibold ${isHighContrast ? 'bg-yellow-300 text-black' : 'bg-primary text-white'}`} aria-hidden="true">15</span>
                <div>
                  <p className={`text-sm font-semibold ${isHighContrast ? 'text-yellow-300' : 'text-[#2A2A33]'}`}>Dia selecionado</p>
                  <p className={`text-sm ${isHighContrast ? 'text-white' : 'text-[#3a3a45]'}`}>Mostra qual data esta aberta na area de detalhes logo abaixo do calendario.</p>
                </div>
              </div>
            </div>

            <div className={`rounded-[4px] border p-3 ${isHighContrast ? 'border-yellow-300 bg-neutral-950' : 'border-gray-200 bg-white'}`}>
              <div className="flex items-start gap-3">
                <span className={`inline-flex min-h-6 min-w-6 items-center justify-center rounded-md border px-1 text-xs ${isHighContrast ? 'border-white/50 text-gray-300' : 'border-border text-muted-foreground opacity-60'}`} aria-hidden="true">28</span>
                <div>
                  <p className={`text-sm font-semibold ${isHighContrast ? 'text-yellow-300' : 'text-[#2A2A33]'}`}>Data futura ou fora do mes</p>
                  <p className={`text-sm ${isHighContrast ? 'text-white' : 'text-[#3a3a45]'}`}>Essas datas aparecem com menor enfase visual e nao podem ser selecionadas quando estao no futuro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isHighContrast ? 'bg-black border-t border-yellow-300' : 'bg-white'} relative shrink-0 w-full`}>
          <div className="content-stretch flex items-center justify-end p-[24px] relative w-full">
            <button
              onClick={onClose}
              className={`${isHighContrast ? 'bg-yellow-300 text-black hover:bg-yellow-200' : 'bg-primary text-white hover:bg-primary/90'} content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full transition-colors`}
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
