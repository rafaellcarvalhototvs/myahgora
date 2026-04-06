import svgPaths from "./svg-0h8aike6me";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p12c0c180} fill="var(--fill-0, #444444)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[48px] shrink-0" data-name="Container">
      <Icon />
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
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] text-left tracking-[0.105px]">Label</p>
    </div>
  );
}

export default function Checkbox() {
  return (
    <button className="content-stretch cursor-pointer flex items-center relative size-full" data-name="Checkbox">
      <Checkbox1 />
      <LabelWrapper />
    </button>
  );
}