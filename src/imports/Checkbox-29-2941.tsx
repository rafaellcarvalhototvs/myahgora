import svgPaths from "./svg-1ehgn4aaqy";

function Container() {
  return (
    <div className="bg-[#81cef5] content-stretch flex items-center justify-center p-[8px] relative rounded-[48px] shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p28729d00} fill="var(--fill-0, #1199DD)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative shrink-0" data-name="Checkbox">
      <Container />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex items-center min-h-[40px] py-[8px] relative shrink-0" data-name="Label wrapper">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.105px]">Label</p>
    </div>
  );
}

export default function Checkbox() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Checkbox">
      <Checkbox1 />
      <LabelWrapper />
    </div>
  );
}