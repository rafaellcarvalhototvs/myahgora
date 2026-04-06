import svgPaths from "./svg-d5nyt5t4em";

export default function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Input">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="Label">
          <div className="content-stretch flex flex-[1_0_0] gap-[2px] h-full items-center min-h-px min-w-px relative" data-name="Label">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
              <div className="flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap">
                <p className="leading-[18px]">Label</p>
              </div>
            </div>
            <div className="content-stretch flex h-[19px] items-center relative shrink-0" data-name="Asterisk">
              <p className="font-['Open_Sans:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px]">*</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
              <div aria-hidden="true" className="absolute border border-[#dd1818] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
                    <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#78788f] text-[14px] tracking-[0.1246px]">
                      <p className="leading-[18px] whitespace-pre-wrap">Placeholder text</p>
                    </div>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / Material / warning">
                    <div className="absolute inset-[8.33%_4.17%_12.5%_4.17%]" data-name="Vector">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
                        <path d={svgPaths.p21dabb00} fill="var(--fill-0, #DD1818)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Help Text">
        <div className="content-stretch flex gap-[6px] h-[22px] items-center relative shrink-0" data-name="Content">
          <p className="font-['Open_Sans:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#dd1818] text-[14px] tracking-[0.4382px]">Enter your helper text here</p>
        </div>
      </div>
    </div>
  );
}