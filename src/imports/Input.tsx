import svgPaths from "./svg-tcizl12zzs";

export default function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Input">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="Label">
          <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Label">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
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
          <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
            <div className="flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap">
              <p className="leading-[18px]">Info</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
              <div aria-hidden="true" className="absolute border border-[#78788f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Symbols / search">
                    <div className="absolute inset-[13.56%]" data-name="vector">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 11.66">
                        <path d={svgPaths.p230ce80} fill="var(--fill-0, #3A3A45)" id="vector" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
                    <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#58586b] text-[14px] text-ellipsis tracking-[0.105px] whitespace-nowrap">
                      <p className="leading-[20px] overflow-hidden">Placeholder text</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="IconButton">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name=".base-button">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
                          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Start Icon">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15px] left-1/2 top-[calc(50%+0.5px)] w-[22px]" data-name="vector">
                              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
                                <path d={svgPaths.p359af7f0} fill="var(--fill-0, #3A3A45)" id="vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Help Text">
        <div className="content-stretch flex gap-[6px] h-[22px] items-center py-[2px] relative shrink-0" data-name="Content">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
            <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a45] text-[16px] tracking-[0.1424px] whitespace-nowrap">
              <p className="leading-[18px]">Enter your helper text here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}