import svgPaths from "./svg-1vhhzbbt5z";

function Statusbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Statusbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.4px] w-[80px] whitespace-pre-wrap">9:41</p>
          <div className="bg-black h-[36px] rounded-[18px] shrink-0 w-[124px]" data-name="Dynamic Island" />
          <div className="content-stretch flex gap-[7.33px] items-center justify-center relative shrink-0 w-[80px]" data-name="Status/Pro">
            <div className="h-[12.333px] relative shrink-0 w-[19.333px]" data-name="Cellular">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 12.3333">
                <g id="Cellular">
                  <path d={svgPaths.p8bdef00} fill="var(--fill-0, black)" />
                  <path d={svgPaths.p12dc6500} fill="var(--fill-0, black)" />
                  <path d={svgPaths.p5f0ea00} fill="var(--fill-0, black)" />
                  <path d={svgPaths.p189c4440} fill="var(--fill-0, black)" />
                </g>
              </svg>
            </div>
            <div className="h-[12.333px] relative shrink-0 w-[17px]" data-name="Wifi">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.3333">
                <path clipRule="evenodd" d={svgPaths.p70af300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
            <div className="h-[13.667px] relative shrink-0 w-[27.333px]" data-name="Battery/Percentage">
              <div className="-translate-y-1/2 absolute bg-black h-[9px] left-[2px] rounded-[2.667px] top-1/2 w-[10.333px]" data-name="percent" />
              <div className="-translate-y-1/2 absolute h-[13px] left-0 top-1/2 w-[27.333px]" data-name="battery">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3333 13">
                  <g id="battery" opacity="0.4">
                    <path clipRule="evenodd" d={svgPaths.p2b410900} fill="var(--fill-0, black)" fillRule="evenodd" />
                    <path d={svgPaths.p2c79ba00} fill="var(--fill-0, black)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar16Pro() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-center justify-between pb-[12px] pt-[14px] relative shrink-0 w-[391px]" data-name="Status Bar/ 16 Pro">
      <Statusbar />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="IconButton">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow_back">
                <div className="absolute inset-[16.67%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.pd1b3d80} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.027px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[28px]">Revise e confirme a alteração</p>
        </div>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative shrink-0 w-[391px]" data-name="User Info">
      <Frame2 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#19d] content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Header">
      <StatusBar16Pro />
      <UserInfo />
    </div>
  );
}

function Batida() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[19px] relative rounded-[168px] shrink-0 size-[48px]" data-name="batida">
      <div aria-hidden="true" className="absolute border border-[#c2c2cd] border-solid inset-0 pointer-events-none rounded-[168px]" />
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.035px]">18:01</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[106px]">
      <Batida />
    </div>
  );
}

function CardBatida() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Card Batida">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[40px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute bg-[#19d] left-[30px] overflow-clip rounded-[10px] size-[16px] top-0" data-name="Check">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Check Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49857 8.33398">
          <path d={svgPaths.p1c2d9f00} fill="var(--fill-0, #ECECF0)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Batida1() {
  return (
    <div className="bg-[#eaf8ff] content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[19px] relative rounded-[168px] shrink-0 size-[48px]" data-name="batida">
      <div aria-hidden="true" className="absolute border border-[#c2c2cd] border-solid inset-0 pointer-events-none rounded-[168px]" />
      <Check />
      <p className="font-['Open_Sans:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.035px]">13:00</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[106px]">
      <Batida1 />
    </div>
  );
}

function CardBatida1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Card Batida">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[40px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSwap() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex items-center justify-center left-[calc(50%+0.5px)] p-[8px] rounded-[28px] size-[32px] top-1/2" data-name="icon Swap">
      <div aria-hidden="true" className="absolute border border-[rgba(42,42,51,0.08)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="relative shrink-0 size-[24px]" data-name="iconContainer">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5909 17.575">
          <path d={svgPaths.p3955dc00} fill="var(--fill-0, #2A2A33)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function CardSwap() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Card Swap">
      <div aria-hidden="true" className="absolute border border-[rgba(42,42,51,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CardBatida />
      <CardBatida1 />
      <div className="-translate-y-1/2 absolute h-0 left-0 top-1/2 w-[354px]" data-name="Line">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354 1">
            <path d="M0 0.5H354" id="Line" stroke="var(--stroke-0, #2A2A33)" strokeOpacity="0.08" />
          </svg>
        </div>
      </div>
      <IconSwap />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CardSwap />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Typography">
        <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#78788f] text-[14px] tracking-[0.021px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[21px] whitespace-pre-wrap">Revise as alterações realizadas, comparando a batida original com a batida substituída</p>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
      <Frame4 />
    </div>
  );
}

function ActionsButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[355px]" data-name="Actions Button\'s">
      <div className="bg-[#19d] content-stretch flex flex-col h-[48px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Confirmar alteração
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#19d] text-[15px] tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cancelar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ActionsButtons />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] h-[734px] items-start p-[24px] right-0 top-[118px] w-[393px]" data-name="Body">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default function ReposicionarBatidaSemRegistros() {
  return (
    <div className="bg-white relative size-full" data-name="Reposicionar batida – Sem registros">
      <Header />
      <Body />
    </div>
  );
}