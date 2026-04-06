import svgPaths from "./svg-dyuczewt9y";

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] size-full" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="relative shrink-0 w-full" data-name=".base-button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / Material / attach">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[22px] left-[calc(50%+0.5px)] top-1/2 w-[10.999px]" data-name="vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9985 22">
                  <path d={svgPaths.p2b111a00} fill="var(--fill-0, #1199DD)" id="vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#19d] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Adicionar anexo (Opcional)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}