import svgPaths from "./svg-s596vfjoep";

function PointInfo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Point Info">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a33] text-[16px] tracking-[0.024px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px]">Registrar o ponto</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a33] text-[14px] tracking-[0.035px] whitespace-nowrap">
          <p className="leading-[18px]">02 de Jan, 2025</p>
        </div>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute bg-[#19d] left-[30px] overflow-clip rounded-[10px] size-[16px] top-0" data-name="Check">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Check Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7.32917 5.5875">
          <path d={svgPaths.p25113000} fill="var(--fill-0, #ECECF0)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Batida() {
  return (
    <div className="bg-[#eaf8ff] content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[19px] relative rounded-[168px] shrink-0 size-[48px]" data-name="batida">
      <div aria-hidden="true" className="absolute border border-[#19d] border-solid inset-0 pointer-events-none rounded-[168px]" />
      <Check />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#3a3a45] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        08:01
      </p>
    </div>
  );
}

function Check1() {
  return (
    <div className="absolute bg-white left-[30px] overflow-clip rounded-[10px] size-[16px] top-0" data-name="Check">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Check Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p32f50700} fill="var(--fill-0, #3A3A45)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Batida1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[19px] relative rounded-[168px] shrink-0 size-[48px]" data-name="batida">
      <div aria-hidden="true" className="absolute border border-[#c2c2cd] border-solid inset-0 pointer-events-none rounded-[168px]" />
      <Check1 />
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3a3a45] text-[14px]">18:01</p>
    </div>
  );
}

function Batidas() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="batidas">
      <Batida />
      <Batida1 />
    </div>
  );
}

function SaldoTotal() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative" data-name="Saldo Total">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a33] text-[14px] tracking-[0.035px] whitespace-nowrap">
          <p className="leading-[18px]">Saldo total banco de horas</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#19993a] text-[14px] tracking-[0.035px] whitespace-nowrap">
          <p className="leading-[18px]">+ 02:04</p>
        </div>
      </div>
    </div>
  );
}

function BalanceBank() {
  return (
    <div className="relative rounded-[3px] shrink-0 w-full" data-name="Balance Bank">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Balance Icon">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13.3333">
              <path d={svgPaths.p1bedd480} fill="var(--fill-0, #3A3A45)" id="Union" />
            </svg>
          </div>
          <SaldoTotal />
        </div>
      </div>
    </div>
  );
}

function BalanceInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Balance Info">
      <div className="h-0 relative shrink-0 w-full" data-name="Linha 87">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 322 1.00003">
            <path d={svgPaths.pa647c0} id="Linha 87" stroke="var(--stroke-0, #DDDDDD)" strokeOpacity="0.72" />
          </svg>
        </div>
      </div>
      <BalanceBank />
    </div>
  );
}

function RegistrarPonto() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[8px] p-[16px] rounded-[4px] top-0 w-[354px]" data-name="Registrar Ponto">
      <div aria-hidden="true" className="absolute border border-[#d5d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <PointInfo />
      <Batidas />
      <div className="bg-[#19d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#f9f9f9] text-[15px] tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Registrar o ponto
              </p>
            </div>
          </div>
        </div>
      </div>
      <BalanceInfo />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="bg-[rgba(97,97,97,0.9)] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tooltip">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.05px] whitespace-nowrap">
        <p className="leading-[15px]">
          Primeira batida
          <br aria-hidden="true" />
          registrada
        </p>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <RegistrarPonto />
      <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[6px]" data-name="<Tooltip>">
        <Tooltip />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[6px] relative w-[12px]" data-name="Arrow">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
                <path d="M6 0L12 6H0L6 0Z" fill="var(--fill-0, #616161)" fillOpacity="0.9" id="Arrow" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}