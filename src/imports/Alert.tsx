import svgPaths from "./svg-tms0xo1r3m";

export default function Alert() {
  return (
    <div className="bg-[#ebf3fc] content-stretch flex gap-[8px] items-start overflow-clip p-[16px] relative rounded-[4px] size-full" data-name="Alert">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / Material / info">
        <div className="-translate-y-1/2 absolute h-[20px] left-[8.33%] right-[8.33%] top-1/2" data-name="vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p15dc4900} fill="var(--fill-0, #1166CC)" id="vector" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative text-[#3a3a45] whitespace-pre-wrap" data-name="Text">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] tracking-[0.1008px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Title
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.105px] w-full">Description</p>
      </div>
      <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative rounded-[4px] shrink-0" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#3a3a45] text-[12px] tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Label
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="IconButton">
        <div className="relative shrink-0 w-full" data-name=".base-icon-button">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[8px] relative w-full">
              <div className="overflow-clip relative rounded-[64px] shrink-0 size-[24px]" data-name="icon-button">
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p2ef87300} fill="var(--fill-0, #3A3A45)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}