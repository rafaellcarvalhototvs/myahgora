import svgPaths from "./svg-7c0x5wnhbb";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[148.5px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.028px] whitespace-nowrap">
          <p className="leading-[20px]">446851aa30edaa30edaa30....jpg (10KB)</p>
        </div>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Text + Icon">
      <Text />
    </div>
  );
}

function Content() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#d5d5dc] border-b border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-[8px] px-[16px] relative w-full">
          <TextIcon />
          <div className="content-stretch flex flex-col items-start shrink-0" data-name="filter-chip2" />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
            <div className="absolute inset-[22.53%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.185 13.185">
                <path d={svgPaths.p33b4ff00} fill="var(--fill-0, #3A3A45)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[148.5px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.028px] whitespace-nowrap">
          <p className="leading-[20px]">atestado_medico_rafaelCar...pdf (1.2MB)</p>
        </div>
      </div>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Text + Icon">
      <Text1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#d5d5dc] border-b border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-[8px] px-[16px] relative w-full">
          <TextIcon1 />
          <div className="content-stretch flex flex-col items-start shrink-0" data-name="filter-chip2" />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
            <div className="absolute inset-[22.53%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.185 13.185">
                <path d={svgPaths.p33b4ff00} fill="var(--fill-0, #3A3A45)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Attachment List">
        <Content />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Attachment List">
        <Content1 />
      </div>
    </div>
  );
}