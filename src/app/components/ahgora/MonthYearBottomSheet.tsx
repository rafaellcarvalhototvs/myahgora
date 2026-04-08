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

  // Handle year navigation
  const handlePrevYear = () => {
    setSelectedYear(prev => prev - 1);
  };

  const handleNextYear = () => {
    setSelectedYear(prev => prev + 1);
  };

  const handleMonthSelect = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
    onSelect(monthIndex, selectedYear);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-end justify-center animate-in fade-in duration-200 font-['Open_Sans']">
      <div className="bg-white relative rounded-t-[8px] w-full max-w-md overflow-hidden animate-in slide-in-from-bottom-full fade-in duration-300 shadow-xl">
        {/* Header + Body */}
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                {/* Title */}
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-['Open_Sans'] font-semibold leading-[30px] relative shrink-0 text-[#3a3a45] text-[20px] tracking-[0.03px] whitespace-pre-wrap">
                    Selecionar competência
                  </p>
                </div>
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="content-stretch flex flex-col items-center relative shrink-0 p-1 hover:bg-gray-100 rounded-full"
                >
                  <CloseIcon sx={{ color: '#3A3A45', fontSize: 20 }} />
                </button>
              </div>
            </div>
            {/* Description */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className="font-['Open_Sans'] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">
                Selecione o ano e o mês desejado para visualizar o espelho.
              </p>
            </div>
          </div>

          {/* Year Selector */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <button 
                onClick={handlePrevYear}
                className="content-stretch flex items-center justify-center p-2 hover:bg-gray-100 rounded-full"
              >
                <ChevronLeftIcon sx={{ color: '#3A3A45', fontSize: 20 }} />
              </button>
              <div className="content-stretch flex flex-col items-center relative shrink-0">
                <p className="font-['Open_Sans'] font-semibold leading-[26px] relative shrink-0 text-[18px] text-[#3a3a45] tracking-[0.024px]">
                  {selectedYear}
                </p>
              </div>
              <button 
                onClick={handleNextYear}
                className="content-stretch flex items-center justify-center p-2 hover:bg-gray-100 rounded-full"
              >
                <ChevronRightIcon sx={{ color: '#3A3A45', fontSize: 20 }} />
              </button>
            </div>

            {/* Months Grid */}
            <div className="grid grid-cols-3 gap-3 w-full">
              {months.map((month, index) => (
                <button
                  key={month}
                  onClick={() => handleMonthSelect(index)}
                  className={`
                    content-stretch flex flex-col items-center justify-center p-4 relative rounded-lg border
                    ${selectedMonth === index 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-white border-gray-200 text-[#3a3a45] hover:bg-gray-50'
                    }
                    transition-colors
                  `}
                >
                  <p className="font-['Open_Sans'] font-medium leading-[20px] relative shrink-0 text-[14px] tracking-[0.024px]">
                    {month}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[rgba(42,42,51,0.12)] border-solid border-t inset-0 pointer-events-none" />
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