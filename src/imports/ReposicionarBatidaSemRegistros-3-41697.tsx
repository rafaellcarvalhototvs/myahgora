import svgPaths from "./svg-l24u8ygyyl";

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

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Header">
      <StatusBar16Pro />
    </div>
  );
}

function Sucess() {
  return (
    <div className="relative shrink-0 size-[130px]" data-name="Sucess">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 130 130">
        <g id="Sucess">
          <rect fill="var(--fill-0, #1199DD)" height="130" id="Rectangle 331" opacity="0.1" rx="65" width="130" />
          <rect fill="var(--fill-0, #1199DD)" height="90" id="Rectangle 332" rx="45" width="90" x="20" y="20" />
          <path d="M47 66.125L58.5376 77L84 53" id="Vector 322" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Typography">
        <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[30px] min-h-px min-w-px relative text-[#2a2a33] text-[20px] text-center tracking-[0.03px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="mb-0">{`Substituição solicitada `}</p>
          <p>com sucesso!</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Typography">
        <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#78788f] text-[14px] text-center tracking-[0.035px]">
          <p className="leading-[20px] whitespace-pre-wrap">{` Aguardando aprovação do responsável. O status da solicitação será atualizado assim que houver uma resposta.`}</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <Sucess />
      <Text />
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
                Fechar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[734px] items-center justify-between left-0 p-[24px] top-[118px] w-[402px]">
      <Content />
      <ActionsButtons />
    </div>
  );
}

export default function ReposicionarBatidaSemRegistros() {
  return (
    <div className="bg-white relative size-full" data-name="Reposicionar batida – Sem registros">
      <Header />
      <Frame />
    </div>
  );
}