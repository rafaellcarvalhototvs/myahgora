import { useState, useEffect } from "react";
import svgPaths from "../../../imports/svg-57z29ar908";
import { RegisterButton } from "./RegisterButton";
import CheckIcon from '@mui/icons-material/Check';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface BatidaProps {
  time: string;
  type: "completed" | "pending";
}

function Batida({ time, type }: BatidaProps) {
  const isCompleted = type === "completed";

  return (
    <div
      className={`
        relative w-12 h-12 rounded-full flex items-center justify-center shrink-0
        ${isCompleted ? "bg-[#eaf8ff] dark:bg-primary/15 border border-primary" : "bg-transparent border border-[#c2c2cd] dark:border-border"}
      `}
    >
      {/* Badge */}
      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full overflow-hidden flex items-center justify-center ${isCompleted ? "bg-primary" : "bg-white dark:bg-card"} z-10`}>
        {/* The badge background needs to mask the border of the main circle below it, which z-10 handles if bg is opaque */}
        
        {isCompleted ? (
          <CheckIcon sx={{ fontSize: 10, color: 'var(--primary-foreground)' }} />
        ) : (
          <InfoOutlinedIcon sx={{ fontSize: 14, color: 'currentColor' }} className="text-foreground" />
        )}
      </div>

      <span className={`text-sm ${isCompleted ? "font-semibold" : "font-normal"} text-foreground`}>
        {time}
      </span>
    </div>
  );
}

export function TimeCard() {
  const [punches, setPunches] = useState<{ time: string; type: "completed" | "pending" }[]>([]);
  const isPauseEnabled = false; 
  
  // Date state
  const [currentDateDisplay, setCurrentDateDisplay] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    // 'short' gives "jan.", "fev." etc in pt-BR
    const month = today.toLocaleString('pt-BR', { month: 'short' });
    const year = today.getFullYear();
    
    // Capitalize first letter and remove dot if present
    const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1).replace('.', '');
    
    setCurrentDateDisplay(`${day} de ${formattedMonth}, ${year}`);
  }, []);

  const handleRegisterSuccess = () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    setPunches([
      { time: currentTime, type: "completed" },
      { time: "18:01", type: "pending" }
    ]);
  };

  const hasPunches = punches.length > 0;

  return (
    <div className="bg-card rounded-lg p-4 border border-muted dark:border-border mx-6 mt-6 relative z-10 flex flex-col gap-4 transition-colors">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-foreground text-base">Registrar o ponto</h2>
        <span className="text-sm text-foreground">{currentDateDisplay}</span>
      </div>

      {/* Content Area - Conditional Rendering */}
      {hasPunches ? (
        <div className="flex gap-3 items-center relative">
          {punches.map((punch, index) => (
            <Batida key={index} time={punch.time} type={punch.type} />
          ))}
        </div>
      ) : (
        <div className="flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
            <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-foreground text-sm tracking-[0.035px]">
              <p className="leading-[20px] whitespace-pre-wrap">
                {`Vamos começar o dia? `}
                <br aria-hidden="true" />
                Registre seu primeiro ponto.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 w-full mt-2">
        <RegisterButton onRegisterSuccess={handleRegisterSuccess} />
        {isPauseEnabled && (
          <button className="flex-1 bg-transparent border-2 border-primary hover:bg-primary/5 text-primary font-semibold py-2 rounded-[4px] transition-colors text-[14px] leading-[24px] tracking-[0.4px] flex items-center justify-center cursor-pointer">
            Registrar pausa
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-text-lighten-3 my-1 relative"></div>

      {/* Footer Info */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
           <div className="w-4 h-5 flex items-center justify-center">
             <svg width="8" height="14" viewBox="0 0 8 13.3333" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d={svgPaths.p1bedd480} fill="var(--foreground)" />
             </svg>
           </div>
           <span className="text-sm text-foreground">Saldo total banco de horas</span>
        </div>
        <span className="text-sm font-bold text-[var(--chart-2)]">+ 02:04</span>
      </div>
    </div>
  );
}
