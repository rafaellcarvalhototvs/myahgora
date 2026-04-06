import svgPaths from "./svg-57z29ar908";

function PointInfo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Point Info">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a33] text-[16px] tracking-[0.024px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px]">Registrar ponto</p>
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
      <div aria-hidden="true" className="absolute border-0 border-[#19d] border-solid inset-0 pointer-events-none rounded-[168px]" />
      <Check />
      <p className="font-['Open_Sans:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.035px]">08:01</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="absolute bg-white left-[30px] overflow-clip rounded-[10px] size-[16px] top-0" data-name="Check">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Check Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p37bfb100} fill="var(--fill-0, #3A3A45)" id="Union" />
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
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.035px]">12:00</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="absolute bg-white left-[30px] overflow-clip rounded-[10px] size-[16px] top-0" data-name="Check">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Check Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p37bfb100} fill="var(--fill-0, #3A3A45)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Batida2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[19px] relative rounded-[168px] shrink-0 size-[48px]" data-name="batida">
      <div aria-hidden="true" className="absolute border border-[#c2c2cd] border-solid inset-0 pointer-events-none rounded-[168px]" />
      <Check2 />
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.035px]">13:00</p>
    </div>
  );
}

function Check3() {
  return (
    <div className="absolute bg-white left-[30px] overflow-clip rounded-[10px] size-[16px] top-0" data-name="Check">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Check Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p37bfb100} fill="var(--fill-0, #3A3A45)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Batida3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[19px] relative rounded-[168px] shrink-0 size-[48px]" data-name="batida">
      <div aria-hidden="true" className="absolute border border-[#c2c2cd] border-solid inset-0 pointer-events-none rounded-[168px]" />
      <Check3 />
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.035px]">18:01</p>
    </div>
  );
}

function Batidas() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="batidas">
      <Batida />
      <Batida1 />
      <Batida2 />
      <Batida3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#19d] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative rounded-[4px]" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#f9f9f9] text-[15px] tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Registrar ponto
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative rounded-[4px]" data-name="button">
        <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#19d] text-[15px] tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Registrar pausa
              </p>
            </div>
          </div>
        </div>
      </div>
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
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#19993a] text-[14px] tracking-[0.035px] whitespace-nowrap">
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

export default function RegistrarPonto() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] size-full" data-name="Registrar Ponto">
      <div aria-hidden="true" className="absolute border border-[#d5d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <PointInfo />
      <Batidas />
      <Frame />
      <BalanceInfo />
    </div>
  );
}