import svgPaths from "./svg-vmhtgl8dcm";

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

function Frame() {
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
          <p className="leading-[28px]">Enviar mensagem</p>
        </div>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative shrink-0 w-[391px]" data-name="User Info">
      <Frame />
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

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">Data da inclusão</p>
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
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="event-note">
            <div className="absolute inset-[4.17%_12.5%_12.5%_12.5%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                <path d={svgPaths.p34058100} fill="var(--fill-0, #58586B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#58586b] text-[14px] tracking-[0.1246px]">
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
      <Label />
      <div className="content-stretch flex items-center max-h-[48px] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Typography">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.1246px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[16px]">Mensagem</p>
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
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Typography">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[18px] min-h-px min-w-px not-italic relative text-[#58586b] text-[14px] tracking-[0.1246px] whitespace-pre-wrap">
              <p className="mb-0">Exemplo: Preciso atualizar meus dados cadastrais.</p>
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Label1 />
      <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Box1 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content1 />
      </div>
      <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Help Text">
        <Content2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[0px] text-[14px] tracking-[0.035px] w-full whitespace-pre-wrap">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold mb-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Use esta tela para enviar mensagens gerais ao RH ou gestor.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Vector 5" stroke="var(--stroke-0, #D5D5DC)" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Input">
        <Content />
      </div>
      <Frame1 />
    </div>
  );
}

function Content3() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[4px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="attach-file">
                <div className="absolute bottom-[4.15%] left-[29.17%] right-1/4 top-[4.17%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 18.3359">
                    <path d={svgPaths.p277ec32} fill="var(--fill-0, #0C6D9E)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0c6d9e] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Adicionar anexo (Opcional)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Help Text">
        <Content3 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#19d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Enviar mensagem
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
    <div className="absolute bg-white content-stretch flex flex-col h-[734px] items-start justify-between p-[24px] right-0 top-[118px] w-[393px]" data-name="Body">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

export default function EnviarMensagemFormularioInicial() {
  return (
    <div className="bg-white relative size-full" data-name="Enviar mensagem – Formulário inicial">
      <Header />
      <Body />
    </div>
  );
}