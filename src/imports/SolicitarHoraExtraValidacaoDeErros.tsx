import svgPaths from "./svg-thwog6t7te";

function Statusbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Statusbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2a2a33] text-[17px] text-center tracking-[-0.4px] w-[80px] whitespace-pre-wrap">9:41</p>
          <div className="bg-[#2a2a33] h-[36px] rounded-[18px] shrink-0 w-[124px]" data-name="Dynamic Island" />
          <div className="content-stretch flex gap-[7.33px] items-center justify-center relative shrink-0 w-[80px]" data-name="Status/Pro">
            <div className="h-[12.333px] relative shrink-0 w-[19.333px]" data-name="Cellular">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 12.3333">
                <g id="Cellular">
                  <path d={svgPaths.p8bdef00} fill="var(--fill-0, #2A2A33)" />
                  <path d={svgPaths.p12dc6500} fill="var(--fill-0, #2A2A33)" />
                  <path d={svgPaths.p5f0ea00} fill="var(--fill-0, #2A2A33)" />
                  <path d={svgPaths.p189c4440} fill="var(--fill-0, #2A2A33)" />
                </g>
              </svg>
            </div>
            <div className="h-[12.333px] relative shrink-0 w-[17px]" data-name="Wifi">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.3333">
                <path clipRule="evenodd" d={svgPaths.p70af300} fill="var(--fill-0, #2A2A33)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
            <div className="h-[13.667px] relative shrink-0 w-[27.333px]" data-name="Battery/Percentage">
              <div className="-translate-y-1/2 absolute bg-[#2a2a33] h-[9px] left-[2px] rounded-[2.667px] top-1/2 w-[10.333px]" data-name="percent" />
              <div className="-translate-y-1/2 absolute h-[13px] left-0 top-1/2 w-[27.333px]" data-name="battery">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3333 13">
                  <g id="battery" opacity="0.4">
                    <path clipRule="evenodd" d={svgPaths.p2b410900} fill="var(--fill-0, #2A2A33)" fillRule="evenodd" />
                    <path d={svgPaths.p2c79ba00} fill="var(--fill-0, #2A2A33)" />
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
          <p className="leading-[28px]">Hora extra</p>
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

function PointInfo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Point Info">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a33] text-[16px] tracking-[0.024px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px]">06 de Set, 2025</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a33] text-[14px] tracking-[0.035px] whitespace-nowrap">
          <p className="leading-[18px]">06 de Set, 2025</p>
        </div>
      </div>
    </div>
  );
}

function RegistrarPonto() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Registrar Ponto">
      <div aria-hidden="true" className="absolute border border-[#d5d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <PointInfo />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">Hora inicial</p>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border-2 border-[#78788f] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="query-builder">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2ec5d300} fill="var(--fill-0, #58586B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap">
              <p className="leading-[18px]">Selecione</p>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="warning">
            <div className="absolute inset-[16.64%_10.29%_12.5%_10.29%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0627 17.0075">
                <path d={svgPaths.p37964000} fill="var(--fill-0, #DD1818)" id="Vector" />
              </svg>
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
      <Label />
      <div className="content-stretch flex items-center max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[22px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dd1818] text-[14px] tracking-[0.4382px] whitespace-nowrap">
          <p className="leading-[14px]">Hora inicial obrigatória.</p>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">Hora final</p>
        </div>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border-2 border-[#78788f] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="schedule">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2ec5d300} fill="var(--fill-0, #58586B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap">
              <p className="leading-[18px]">Selecione</p>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="warning">
            <div className="absolute inset-[16.64%_10.29%_12.5%_10.29%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0627 17.0075">
                <path d={svgPaths.p37964000} fill="var(--fill-0, #DD1818)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label1 />
      <div className="content-stretch flex items-center max-h-[46px] min-h-[46px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box1 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[22px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dd1818] text-[14px] tracking-[0.4382px] whitespace-nowrap">
          <p className="leading-[14px]">Hora final obrigatória.</p>
        </div>
      </div>
    </div>
  );
}

function TimeSelection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Time Selection">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content />
        <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Help Text">
          <Content1 />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content2 />
        <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Help Text">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">Observação</p>
        </div>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Box">
      <div aria-hidden="true" className="absolute border-2 border-[#78788f] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[18px] min-h-px min-w-px not-italic relative text-[#78788f] text-[14px] tracking-[0.1246px] whitespace-pre-wrap">
              <p className="mb-0">Exemplo: permaneci após o expediente para finalizar relatório.</p>
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

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label2 />
      <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box2 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[22px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start py-[5px] relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a33] text-[14px] tracking-[0.4382px] whitespace-nowrap">
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
        <Content4 />
      </div>
      <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Help Text">
        <Content5 />
      </div>
    </div>
  );
}

function FormContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#58586b] text-[0px] tracking-[0.035px] w-full">
        <p className="text-[14px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] tracking-[0.035px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Use esta tela para solicitar o registro de hora extra.
            <br aria-hidden="true" />
            {` `}
            <br aria-hidden="true" />
          </span>
          <span className="leading-[20px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</span>
        </p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Vector 5" stroke="var(--stroke-0, #D5D5DC)" />
          </svg>
        </div>
      </div>
      <RegistrarPonto />
      <TimeSelection />
      <Observation />
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Submit Button">
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

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] items-start p-[24px] right-0 top-[118px] w-[393px]" data-name="Body">
      <FormContainer />
      <SubmitButton />
    </div>
  );
}

export default function SolicitarHoraExtraValidacaoDeErros() {
  return (
    <div className="bg-white relative size-full" data-name="Solicitar hora extra – Validação de erros">
      <Header />
      <Body />
    </div>
  );
}