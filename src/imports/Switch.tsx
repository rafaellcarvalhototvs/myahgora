function Thumb() {
  return <div className="bg-[#0c6d9e] rounded-[166px] shrink-0 size-[16px]" data-name="Thumb" />;
}

function ThumbWrapper() {
  return (
    <div className="content-stretch flex h-[10px] items-center justify-center relative shrink-0 w-[16px]" data-name="Thumb wrapper">
      <Thumb />
    </div>
  );
}

function Track() {
  return (
    <div className="bg-[#81cef5] content-stretch flex h-[10px] items-center justify-end relative rounded-[20px] shrink-0 w-[26px] z-[1]" data-name="Track">
      <ThumbWrapper />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex flex-col isolate items-center justify-center relative shrink-0 size-[40px] z-[1]" data-name="Toggle">
      <Track />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex flex-col isolate items-center justify-center p-[4px] relative shrink-0 z-[2]" data-name="Toggle">
      <Toggle1 />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 z-[1]" data-name="Label wrapper">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.105px]">Label</p>
    </div>
  );
}

export default function Switch() {
  return (
    <div className="content-stretch cursor-pointer flex isolate items-center relative size-full" data-name="switch">
      <Toggle />
      <LabelWrapper />
    </div>
  );
}