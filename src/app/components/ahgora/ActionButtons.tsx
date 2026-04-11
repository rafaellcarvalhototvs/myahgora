import { useRef, useState } from "react";
import svgPaths from "../../../imports/svg-qfsous7tke";

const actions = [
  { 
    label: "Incluir batida", 
    path: svgPaths.p6549f00, 
    viewBox: "0 0 19.887 20.19",
    action: "include-punch"
  },
  { 
    label: "Cancelar batida", 
    path: svgPaths.p1619cdf0, 
    viewBox: "0 0 20.334 20.19",
    action: "cancel-punch"
  },
  { 
    label: "Substituir batida", 
    path: svgPaths.p296d7c80, 
    viewBox: "0 0 17.5738 12.5888",
    action: "replace-punch"
  },
  { 
    label: "Solicitar abono", 
    path: svgPaths.p3dfef000, 
    viewBox: "0 0 19 19",
    action: "request-allowance"
  },
  { 
    label: "Enviar Mensagem", 
    path: svgPaths.pa2d5500, 
    viewBox: "0 0 18 18",
    action: "send-message"
  },
  { 
    label: "Reposicionar batida", 
    path: svgPaths.p17bc1e00, 
    viewBox: "0 0 21 18",
    action: "reposition-punch"
  },
  { 
    label: "Hora extra", 
    // Using a simple path for a clock/plus icon since I don't have a specific imported one for this
    path: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z", 
    viewBox: "0 0 24 24",
    action: "request-overtime"
  },
  { 
    label: "Exceção diária", 
    path: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z", 
    viewBox: "0 0 24 24",
    action: "daily-exception"
  }
];

interface ActionButtonsProps {
  onAction?: (action: string) => void;
}

export function ActionButtons({ onAction }: ActionButtonsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mt-6 px-6">
      <h3 className="font-semibold text-base mb-4 text-[#2a2a33] tracking-[0.024px]">Solicitar ajustes</h3>
      
      {/* Native App-like Carousel with Scroll Snap & Drag Support */}
      <div 
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scroll-pl-6 overscroll-x-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
        role="region"
        aria-label="Opções de ajuste de ponto"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {actions.map((action, index) => (
          <button 
            key={index} 
            type="button"
            className="flex flex-col items-center gap-[10px] shrink-0 w-[84px] cursor-pointer group snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[8px]"
            onClick={(e) => {
              // Prevent click if we were dragging
              if (isDragging) {
                e.preventDefault();
                return;
              }
              if (action.action && onAction) {
                onAction(action.action);
              }
            }}
          >
            {/* Icon Container */}
            <div className="w-[48px] h-[48px] rounded-full bg-[#f4f4f6] flex items-center justify-center shrink-0 group-hover:bg-[#eaeaec] transition-colors pointer-events-none">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg 
                  viewBox={action.viewBox} 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path 
                    d={action.path} 
                    fill="#2A2A33" 
                    fillRule={action.label === "Solicitar abono" ? "evenodd" : "nonzero"}
                    clipRule={action.label === "Solicitar abono" ? "evenodd" : undefined}
                  />
                </svg>
              </div>
            </div>
            
            {/* Label */}
            <span className="text-sm text-foreground text-center font-normal leading-[20px] tracking-[0.035px] whitespace-pre-wrap pointer-events-none select-none">
              {action.label.replace(' ', '\n')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}