import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

interface RegisterPointModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function RegisterPointModal({ isOpen, onClose, onConfirm }: RegisterPointModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (isOpen) {
      setCurrentDate(new Date());
      const timer = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const timeString = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  
  const weekday = currentDate.toLocaleDateString('pt-BR', { weekday: 'long' });
  const formattedWeekday = weekday
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');

  const dayAndMonth = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' });
  const formattedDate = dayAndMonth.replace(/ de (\w)/, (match, p1) => ` de ${p1.toUpperCase()}`);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-end justify-center animate-in fade-in duration-200 font-['Open_Sans']">
      <div 
        className="bg-card border border-border/70 relative rounded-t-[8px] w-full sm:max-w-md overflow-hidden animate-in slide-in-from-bottom-full fade-in duration-300 shadow-xl dark:shadow-[0px_16px_32px_0px_rgba(0,0,0,0.35)] transition-colors"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Main Content Area */}
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
             <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                {/* Icon */}
                <div className="bg-primary text-primary-foreground content-stretch flex items-center justify-center p-[8px] relative rounded-[56px] shrink-0 size-[42px]">
                   <AccessTimeIcon sx={{ color: 'currentColor', fontSize: 20 }} />
                </div>
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="content-stretch flex flex-col items-center relative shrink-0 p-1 hover:bg-muted/40 rounded-full text-foreground transition-colors"
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </button>
             </div>
             
             {/* Title & Subtitle */}
             <div className="flex flex-col gap-0 w-full">
                <p className="font-['Open_Sans'] font-semibold leading-[30px] text-foreground text-[20px] tracking-[0.03px]">
                  Confirme o registro de ponto
                </p>
                <p className="font-['Open_Sans'] leading-[20px] text-muted-foreground text-[14px] tracking-[0.028px] mt-1">
                  Verifique as informações antes de confirmar
                </p>
             </div>
          </div>

          {/* Date/Time Card */}
          <div className="relative rounded-[7px] shrink-0 w-full border border-border/70 bg-[var(--surface-elevated)] transition-colors">
             <div className="flex items-center justify-between px-[24px] py-[10px] w-full">
                <div className="flex flex-col gap-[2px]">
                   <p className="font-['Open_Sans'] font-semibold leading-[24px] text-[16px] tracking-[0.024px] text-foreground">
                      {formattedWeekday}
                   </p>
                   <p className="font-['Open_Sans'] leading-[20px] text-[14px] tracking-[0.035px] text-muted-foreground">
                      {formattedDate}
                   </p>
                </div>
                
                {/* Time Circle with Badge */}
                <div className="relative bg-[#eaf8ff] dark:bg-primary/15 flex items-center justify-center rounded-full size-[56px] shrink-0 transition-colors">
                   {/* Check Badge (Absolute Top-Rightish) */}
                   <div className="absolute top-0 right-0 flex h-[22px] w-[22px] translate-x-[-2px] translate-y-[-2px] items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                      <CheckIcon sx={{ color: 'currentColor', fontSize: 14 }} />
                   </div>
                   
                   <span className="font-['Open_Sans'] font-semibold text-[14px] text-foreground">
                      {timeString}
                   </span>
                </div>
             </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[var(--surface-elevated)] relative shrink-0 w-full transition-colors">
           <div aria-hidden="true" className="absolute border-border/70 border-solid border-t inset-0 pointer-events-none" />
           <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[24px] relative w-full">
              <button 
                onClick={onConfirm}
                className="w-full bg-primary text-primary-foreground font-semibold text-[14px] leading-[24px] tracking-[0.4px] py-2 rounded-[4px] hover:bg-primary/90 transition-colors shadow-sm"
              >
                Confirmar registro
              </button>
              
              <button 
                onClick={onClose}
                className="w-full bg-transparent border-2 border-primary text-primary font-semibold text-[14px] leading-[24px] tracking-[0.4px] py-2 rounded-[4px] hover:bg-primary/5 transition-colors"
              >
                Voltar
              </button>
           </div>
        </div>

      </div>
    </div>,
    document.body
  );
}
