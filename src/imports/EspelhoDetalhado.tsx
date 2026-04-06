import svgPaths from "./svg-p2xlkv60gr";

function DetailedMirror() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Detailed Mirror">
      <div className="relative shrink-0 size-[18px]" data-name="Mirror Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
          <path d={svgPaths.p98bf600} fill="var(--fill-0, #2A2A33)" id="Union" />
        </svg>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a33] text-[14px] tracking-[0.035px] whitespace-nowrap">
          <p className="leading-[18px]">Acessar espelho detalhado</p>
        </div>
      </div>
    </div>
  );
}

export default function EspelhoDetalhado() {
  return (
    <div className="content-stretch flex gap-[10px] items-center p-[8px] relative size-full" data-name="Espelho detalhado">
      <div aria-hidden="true" className="absolute border-[rgba(42,42,51,0.08)] border-b border-solid border-t inset-0 pointer-events-none" />
      <DetailedMirror />
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative w-full">
              <div className="relative shrink-0 size-[18px]" data-name="End Icon">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93875 8.38125">
                  <path d={svgPaths.p306e3900} fill="var(--fill-0, black)" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}