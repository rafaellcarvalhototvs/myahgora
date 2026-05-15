import svgPaths from "../../../imports/svg-p2xlkv60gr";

interface DetailLinkProps {
  onClick?: () => void;
}

export function DetailLink({ onClick }: DetailLinkProps) {
  return (
    <div className="mx-6">
      <div 
        className="flex gap-2.5 items-center p-2 relative w-full border-t border-b border-text-lighten-3 cursor-pointer hover:bg-muted/20 transition-colors"
        onClick={onClick}
      >
        {/* Mirror Icon */}
        <div className="relative shrink-0 w-[18px] h-[18px] flex items-center justify-center">
          <svg width="14" height="15" viewBox="0 0 13.5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={svgPaths.p98bf600} fill="var(--foreground)" />
          </svg>
        </div>
        
        {/* Typography */}
        <div className="flex-1 flex items-center">
          <span className="text-sm font-normal text-foreground leading-[18px]">
            Acessar espelho detalhado
          </span>
        </div>

        {/* End Icon (Arrow) */}
        <div className="relative shrink-0 w-6 h-6 flex items-center justify-center rounded-[4px]">
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <svg width="5" height="9" viewBox="0 0 4.93875 8.38125" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.p306e3900} fill="var(--foreground)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
