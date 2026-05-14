import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface MonthYearBottomSheetProps {
  onClose: () => void;
  onSelect: (month: number, year: number) => void; // month: 0-11, year: e.g., 2026
  isVisible: boolean;
  currentMonth: number; // 0-11
  currentYear: number;
}

export function MonthYearBottomSheet({ 
  onClose, 
  onSelect, 
  isVisible, 
  currentMonth,
  currentYear 
}: MonthYearBottomSheetProps) {
  if (!isVisible) return null;

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(currentMonth);

  // Get current date for comparison
  const today = new Date();
  const currentYearToday = today.getFullYear();
  const currentMonthToday = today.getMonth();

  // Check if a month/year is in the future
  const isFutureMonth = (monthIndex: number, year: number): boolean => {
    if (year > currentYearToday) return true;
    if (year === currentYearToday && monthIndex > currentMonthToday) return true;
    return false;
  };

  // Handle year navigation
  const handlePrevYear = () => {
    setSelectedYear(prev => prev - 1);
  };

  const handleNextYear = () => {
    // Only allow navigating to future years if we want to allow seeing future months (disabled)
    // For now, restrict to current year
    if (selectedYear < currentYearToday) {
      setSelectedYear(prev => prev + 1);
    }
  };

  const handleMonthSelect = (monthIndex: number) => {
    // Don't allow selecting future months
    if (isFutureMonth(monthIndex, selectedYear)) return;
    
    setSelectedMonth(monthIndex);
    onSelect(monthIndex, selectedYear);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-end justify-center animate-in fade-in duration-200 font-['Open_Sans']">
      <div className="bg-card border border-border/70 relative rounded-t-[8px] w-full max-w-md overflow-hidden animate-in slide-in-from-bottom-full fade-in duration-300 shadow-xl dark:shadow-[0px_16px_32px_0px_rgba(0,0,0,0.35)] transition-colors">
        {/* Header + Body */}
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                {/* Title */}
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-['Open_Sans'] font-semibold leading-[30px] relative shrink-0 text-foreground text-[20px] tracking-[0.03px] whitespace-pre-wrap">
                    Selecionar competência
                  </p>
                </div>
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="content-stretch flex flex-col items-center relative shrink-0 p-1 hover:bg-muted/40 rounded-full text-foreground"
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
            {/* Description */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className="font-['Open_Sans'] leading-[20px] not-italic relative shrink-0 text-muted-foreground text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">
                Selecione o ano e o mês desejado para visualizar o espelho.
              </p>
            </div>
          </div>

          {/* Year Selector */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <button 
                onClick={handlePrevYear}
                className="content-stretch flex items-center justify-center p-2 hover:bg-muted/40 rounded-full text-foreground"
              >
                <ChevronLeftIcon sx={{ fontSize: 20 }} />
              </button>
              <div className="content-stretch flex flex-col items-center relative shrink-0">
                <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[18px] text-foreground tracking-[0.024px]">
                  {selectedYear}
                </p>
              </div>
              <button 
                onClick={handleNextYear}
                disabled={selectedYear >= currentYearToday}
                className={`content-stretch flex items-center justify-center p-2 hover:bg-muted/40 rounded-full text-foreground ${
                  selectedYear >= currentYearToday ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                <ChevronRightIcon sx={{ fontSize: 20 }} />
              </button>
            </div>

            {/* Months Grid */}
            <div className="grid grid-cols-3 gap-3 w-full">
              {months.map((month, index) => {
                const future = isFutureMonth(index, selectedYear);
                return (
                  <button
                    key={month}
                    onClick={() => handleMonthSelect(index)}
                    disabled={future}
                    className={`
                      content-stretch flex flex-col items-center justify-center p-4 relative rounded-lg border
                      ${future 
                        ? 'bg-muted/50 border-border text-muted-foreground cursor-not-allowed'
                        : selectedMonth === index 
                          ? 'bg-primary border-primary text-white' 
                          : 'bg-card border-border text-foreground hover:bg-muted/30'
                      }
                      transition-colors
                    `}
                  >
                    <p className={`font-['Open_Sans'] font-medium leading-[20px] relative shrink-0 text-[14px] tracking-[0.024px] ${future ? 'opacity-60' : ''}`}>
                      {month}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[var(--surface-elevated)] relative shrink-0 w-full transition-colors">
          <div aria-hidden="true" className="absolute border-border/70 border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-end p-[24px] relative w-full">
             <button 
               onClick={onClose}
               className="bg-primary content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full hover:bg-primary/90 transition-colors"
             >
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                      <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[16px] text-white tracking-[0.46px]">
                        Cancelar
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
