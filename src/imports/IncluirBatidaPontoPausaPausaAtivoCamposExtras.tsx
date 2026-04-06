import svgPaths from "./svg-69fxijbj0g";

function Statusbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Statusbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3a3a45] text-[17px] text-center tracking-[-0.4px] w-[80px] whitespace-pre-wrap">9:41</p>
          <div className="bg-[#3a3a45] h-[36px] rounded-[18px] shrink-0 w-[124px]" data-name="Dynamic Island" />
          <div className="content-stretch flex gap-[7.33px] items-center justify-center relative shrink-0 w-[80px]" data-name="Status/Pro">
            <div className="h-[12.333px] relative shrink-0 w-[19.333px]" data-name="Cellular">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 12.3333">
                <g id="Cellular">
                  <path d={svgPaths.p8bdef00} fill="var(--fill-0, #3A3A45)" />
                  <path d={svgPaths.p12dc6500} fill="var(--fill-0, #3A3A45)" />
                  <path d={svgPaths.p5f0ea00} fill="var(--fill-0, #3A3A45)" />
                  <path d={svgPaths.p189c4440} fill="var(--fill-0, #3A3A45)" />
                </g>
              </svg>
            </div>
            <div className="h-[12.333px] relative shrink-0 w-[17px]" data-name="Wifi">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.3333">
                <path clipRule="evenodd" d={svgPaths.p70af300} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
            <div className="h-[13.667px] relative shrink-0 w-[27.333px]" data-name="Battery/Percentage">
              <div className="-translate-y-1/2 absolute bg-[#3a3a45] h-[9px] left-[2px] rounded-[2.667px] top-1/2 w-[10.333px]" data-name="percent" />
              <div className="-translate-y-1/2 absolute h-[13px] left-0 top-1/2 w-[27.333px]" data-name="battery">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3333 13">
                  <g id="battery" opacity="0.4">
                    <path clipRule="evenodd" d={svgPaths.p2b410900} fill="var(--fill-0, #3A3A45)" fillRule="evenodd" />
                    <path d={svgPaths.p2c79ba00} fill="var(--fill-0, #3A3A45)" />
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

function UserInfo1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="User Info">
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
          <p className="leading-[28px]">Incluir batida</p>
        </div>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative shrink-0 w-[391px]" data-name="User Info">
      <UserInfo1 />
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #3A3A45)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Container">
      <Icon />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Radio button">
      <Container4 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0" data-name="Label">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] text-left tracking-[0.105px]">Batida de ponto</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="icon_2">
            <path d={svgPaths.p26f9ce00} fill="#1199DD" />
            <path d={svgPaths.pee04100} fill="#1199DD" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Radio button">
      <Container5 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0" data-name="Label">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] text-left tracking-[0.105px]">Batida de pausa</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <button className="content-stretch flex items-center justify-center relative shrink-0" data-name="radio button">
        <RadioButton />
        <Label />
      </button>
      <button className="content-stretch flex items-center justify-center relative shrink-0" data-name="radio button">
        <RadioButton1 />
        <Label1 />
      </button>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-start pr-[8px] py-[8px] relative shrink-0" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / Material / info">
        <div className="-translate-y-1/2 absolute h-[20px] left-[8.33%] right-[8.33%] top-1/2" data-name="vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p15dc4900} fill="var(--fill-0, #1166CC)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[20px] min-h-px min-w-px overflow-clip py-[8px] relative text-[#07425f] text-[14px] whitespace-pre-wrap" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 tracking-[0.035px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Indicado para pausas regulamentadas
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] not-italic relative shrink-0 tracking-[0.028px] w-full">Geralmente usada por setores como call center ou atendimento, conforme a NR17.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[16px]">Escolha o tipo da batida</p>
      </div>
      <Container3 />
      <div className="bg-[#eaf8ff] relative rounded-[4px] shrink-0 w-full" data-name="<Alert>">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[16px] py-[4px] relative w-full">
            <IconContainer />
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">Data da Inclusão</p>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border border-[#78788f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar-today">
            <div className="absolute inset-[4.17%_8.33%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                <path d={svgPaths.p23caf740} fill="var(--fill-0, #78788F)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#3a3a45] text-[14px] tracking-[0.1246px]">
              <p className="leading-[18px] whitespace-pre-wrap">2 de setembro de 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label2 />
      <div className="content-stretch flex items-center max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p>
            <span className="leading-[16px]">{`Dia da batida `}</span>
            <span className="font-['Open_Sans:Bold',sans-serif] leading-[16px] not-italic">(Opcional)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border border-[#78788f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar-today">
            <div className="absolute inset-[4.17%_8.33%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                <path d={svgPaths.p23caf740} fill="var(--fill-0, #78788F)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#58586b] text-[14px] tracking-[0.1246px]">
              <p className="leading-[18px] whitespace-pre-wrap">Selecione o dia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label3 />
      <div className="content-stretch flex items-center max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box1 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[22px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-start py-[5px] relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.4382px] whitespace-nowrap">
          <p className="leading-[14px]">Informe se diferente da data da inclusão.</p>
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">{`Horário `}</p>
        </div>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border border-[#78788f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="access-time">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2ec5d300} fill="var(--fill-0, #78788F)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#58586b] text-[14px] tracking-[0.1246px]">
              <p className="leading-[18px] whitespace-pre-wrap">Selecione um horário</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label4 />
      <div className="content-stretch flex items-center max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box2 />
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">{`Justificativa `}</p>
        </div>
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border border-[#78788f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#58586b] text-[14px] tracking-[0.1246px]">
              <p className="leading-[18px] whitespace-pre-wrap">Selecione uma justificativa</p>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="keyboard-arrow-down">
            <div className="absolute inset-[37.49%_26.74%_35.07%_26.7%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9 8.78">
                <path d={svgPaths.p3689f880} fill="var(--fill-0, #3A3A45)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label5 />
      <div className="content-stretch flex items-center max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box3 />
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">Observação</p>
        </div>
      </div>
    </div>
  );
}

function Box4() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border border-[#78788f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap">
              <p className="mb-0">Exemplo: esqueci de marcar entrada</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label6 />
      <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box4 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[22px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start py-[5px] relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.4382px] whitespace-nowrap">
          <p className="leading-[14px]">Máx. 250 caracteres</p>
        </div>
      </div>
    </div>
  );
}

function Observation() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Observation">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content5 />
      </div>
      <div className="h-[20px] relative shrink-0 w-full" data-name="Help Text">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[22px] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start py-[5px] relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.4382px] whitespace-nowrap">
          <p className="leading-[14px]">Arquivos: PDF, JPG, PNG (máx. 5MB).</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="attach-file">
                <div className="absolute bottom-[4.15%] left-[29.17%] right-1/4 top-[4.17%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 18.3359">
                    <path d={svgPaths.p277ec32} fill="var(--fill-0, #07425F)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#07425f] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Adicionar anexo (Opcional)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Help Text">
        <Content7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[0px] text-[14px] tracking-[0.04px] w-full whitespace-pre-wrap">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold mb-0 tracking-[0.035px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Use esta tela para incluir batidas não gravadas ou esquecidas.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="tracking-[0.035px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Vector 5" stroke="var(--stroke-0, #DDDDDD)" />
          </svg>
        </div>
      </div>
      <Container2 />
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content1 />
        <div className="relative shrink-0 w-full" data-name="Help Text">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[16px] relative w-full">
              <Content2 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content3 />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content4 />
      </div>
      <Observation />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#19d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Enviar solicitação
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] items-start left-0 p-[24px] top-[118px] w-[393px]" data-name="Main Container">
      <Container />
      <Container8 />
    </div>
  );
}

export default function IncluirBatidaPontoPausaPausaAtivoCamposExtras() {
  return (
    <div className="bg-white relative size-full" data-name="Incluir Batida - Ponto/Pausa - Pausa Ativo - Campos extras">
      <Header />
      <MainContainer />
    </div>
  );
}