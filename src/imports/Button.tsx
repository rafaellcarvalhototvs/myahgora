export default function Button() {
  return (
    <div className="bg-[#19d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] size-full" data-name="button">
      <div className="relative shrink-0 w-full" data-name=".base-button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f4f4f6] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Confirmar e criar regras
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}