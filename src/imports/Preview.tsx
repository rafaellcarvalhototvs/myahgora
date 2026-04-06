export default function Preview() {
  return (
    <div className="content-stretch cursor-pointer flex items-start pr-px relative size-full" data-name="Preview">
      <button className="content-stretch flex items-start mr-[-1px] px-[8px] py-[8.5px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Button group">
        <div aria-hidden="true" className="absolute border border-[#b6b6c2] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] text-left tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px]">Opção 1</p>
        </div>
      </button>
      <button className="bg-[#f4f4f6] content-stretch flex items-start mr-[-1px] px-[8px] py-[8.5px] relative shrink-0" data-name="Button group">
        <div aria-hidden="true" className="absolute border border-[#d5d5dc] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#d5d5dc] text-[14px] text-left tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px]">Opção 1</p>
        </div>
      </button>
      <button className="bg-[#b6b6c2] content-stretch flex items-start mr-[-1px] px-[8px] py-[8.5px] relative shrink-0" data-name="Button group">
        <div aria-hidden="true" className="absolute border border-[#aaa] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] text-left tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px]">Opção 1</p>
        </div>
      </button>
      <button className="bg-[#0c6d9e] content-stretch flex items-start mr-[-1px] px-[8px] py-[8.5px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Button group">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f4f4f6] text-[14px] text-left tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px]">Opção 1</p>
        </div>
      </button>
    </div>
  );
}