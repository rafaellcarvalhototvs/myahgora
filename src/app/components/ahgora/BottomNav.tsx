import svgPaths from "../../../imports/svg-7e75lmgfft";

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div 
        className="w-full max-w-md bg-[var(--surface-elevated)] border-t border-border/70 flex shadow-[0px_-1px_5px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.28)] pb-safe pointer-events-auto h-[85px] transition-colors" 
        data-name="footer_bar_apps"
      >
        {/* Início Item */}
        <div className="flex-1 flex flex-col items-center justify-center py-2 gap-1 cursor-pointer hover:bg-muted/30 active:bg-muted/50 transition-colors" data-name="Início">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 20 17" className="w-5 h-[17px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.p32656600} fill="var(--primary-darken-1)" />
            </svg>
          </div>
          <span className="text-sm text-primary-darken-1 font-semibold leading-none">
            Início
          </span>
        </div>

        {/* Documentos Item */}
        <div className="flex-1 flex flex-col items-center justify-center py-2 gap-1 cursor-pointer hover:bg-muted/30 active:bg-muted/50 transition-colors" data-name="Documentos">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 18 20" className="w-[18px] h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.pe1c4640} fill="var(--foreground)" />
            </svg>
          </div>
          <span className="text-sm text-foreground font-semibold leading-none">
            Documentos
          </span>
        </div>
      </div>
    </div>
  );
}
