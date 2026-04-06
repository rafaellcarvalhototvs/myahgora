import svgPaths from "./svg-7e75lmgfft";

function Icon() {
  return (
    <div className="h-[16.996px] relative shrink-0 w-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9995 16.9961">
        <g clipPath="url(#clip0_54_150)" id="Icon">
          <path d={svgPaths.p32656600} fill="var(--fill-0, #3A3A45)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_54_150">
            <rect fill="white" height="16.9961" width="19.9995" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[41.769px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#3a3a45] text-[16px] top-[-0.36px] tracking-[0.021px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Início
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[67.985px] relative rounded-[4px] shrink-0 w-[73.753px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-center py-[7.996px] relative size-full">
        <Container1 />
        <Text />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Icon / Material / receipt">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                <path d={svgPaths.pe1c4640} fill="var(--fill-0, #1199DD)" id="Vector" />
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
    <div className="h-[23.997px] relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[71.41px] text-[#19d] text-[16px] text-center top-[0.01px] tracking-[0.021px] w-[143px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Recibos
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] h-[67.985px] min-h-px min-w-px relative rounded-[4px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-center py-[7.996px] relative size-full">
        <Container2 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.761px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7609 19.9995">
        <g clipPath="url(#clip0_54_147)" id="Icon">
          <path d={svgPaths.p3eb1f180} fill="var(--fill-0, #3A3A45)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_54_147">
            <rect fill="white" height="19.9995" width="19.7609" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[49.347px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#3a3a45] text-[16px] top-[-0.36px] tracking-[0.021px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Config
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[67.985px] relative rounded-[4px] shrink-0 w-[81.331px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-center py-[7.996px] relative size-full">
        <Container3 />
        <Text2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[71.336px] pr-[71.346px] relative size-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}