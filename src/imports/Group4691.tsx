import svgPaths from "./svg-k7ng44j9be";

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

function SaldoTotal() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[315px]" data-name="Saldo Total">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Typography">
        <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2a2a33] text-[14px] tracking-[0.035px]">
          <p className="leading-[20px] whitespace-pre-wrap">
            {`Vamos começar o dia? `}
            <br aria-hidden="true" />
            Registre seu primeiro ponto.
          </p>
        </div>
      </div>
    </div>
  );
}

function Batidas() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="batidas">
      <SaldoTotal />
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
                Registrar o ponto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaldoTotal1() {
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
          <SaldoTotal1 />
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
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-0 px-[16px] py-[18px] rounded-[4px] top-0 w-[354px]" data-name="Registrar Ponto">
      <div aria-hidden="true" className="absolute border border-[#d5d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <PointInfo />
      <Batidas />
      <Frame />
      <BalanceInfo />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <RegistrarPonto />
    </div>
  );
}