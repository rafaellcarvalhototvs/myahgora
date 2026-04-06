import svgPaths from "./svg-t785vqdwyx";

function Indicators() {
  return (
    <div className="absolute content-stretch flex gap-[6.5px] items-center right-[18.7px] top-[23px]" data-name="Indicators">
      <div className="h-[12px] relative shrink-0 w-[19.971px]" data-name="Elements / Signal">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9707 12">
          <path d={svgPaths.pe92800} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.5px] relative shrink-0 w-[17px]" data-name="Elements / Connection">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.5001">
          <path d={svgPaths.p2b7cea80} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="h-[13px] relative shrink-0 w-[27.33px]" data-name="Elements / Battery">
        <div className="absolute inset-[0_8.53%_0_0]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p2eb707c0} fill="var(--fill-0, black)" id="Subtract" opacity="0.4" />
          </svg>
        </div>
        <div className="absolute inset-[34.62%_0_34.62%_95.13%]" data-name="Cap">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33 4">
            <path d={svgPaths.p1847ee80} fill="var(--fill-0, black)" id="Cap" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute inset-[15.38%_59.4%_15.38%_7.32%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.09473 9">
            <path d={svgPaths.p575f8f0} fill="var(--fill-0, #34C759)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute inset-[-1.49%_35.95%_-4.92%_31.06%]" data-name="􀋦">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01758 13.8326">
            <path d={svgPaths.p15161100} fill="var(--fill-0, black)" id="ô¦" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowBack24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back-24px (2)">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back-24px (2)">
          <g id="Caminho 1231" />
          <path d={svgPaths.p1d45ae00} fill="var(--fill-0, #58586B)" id="Caminho 1232" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <ArrowBack24Px />
      <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#58586b] text-[20px]">Lembrete de ponto</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex gap-[200px] items-start pb-[24px] pt-[16px] px-[16px] relative shrink-0 w-[360px]">
      <Frame1 />
      <div className="relative shrink-0 size-[24px]" data-name="shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p12e75200} fill="var(--fill-0, #58586B)" id="shape" opacity="0" />
        </svg>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p24085f00} fill="var(--fill-0, #0C6D9E)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[100px] shrink-0 w-[48px]" data-name="container">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
        <Container1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[10px] relative">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#58586b] text-[14px] whitespace-pre-wrap">Ativar lembrete</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div className="font-['Open_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#78788f] text-[14px] tracking-[0.3px] w-full whitespace-pre-wrap">
        <p className="mb-[16px]">
          <span className="leading-[22px]">{`Siga os passos abaixo para `}</span>
          <span className="font-['Open_Sans:Semibold',sans-serif] leading-[22px] not-italic">configurar ou editar um lembrete</span>
          <span className="leading-[22px]">{` de retorno do intervalo:`}</span>
        </p>
        <ol className="mb-[16px]" start="1">
          <li className="mb-0 ms-[21px]">
            <span className="font-['Open_Sans:Semibold',sans-serif] leading-[22px] not-italic">Ative o lembrete.</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="font-['Open_Sans:Semibold',sans-serif] leading-[22px] not-italic">Escolha a duração do intervalo. Ex: 15min.</span>
          </li>
          <li className="ms-[21px]">
            <span className="font-['Open_Sans:Semibold',sans-serif] leading-[22px] not-italic">{`Selecione "Repetir" para receber notificações automáticas.`}</span>
          </li>
        </ol>
        <p>
          <span className="font-['Open_Sans:Semibold',sans-serif] leading-[22px] not-italic">Exemplo</span>
          <span className="leading-[22px]">: Se você definir 15min, receberá uma notificação 15 minutos após o início do intervalo.</span>
        </p>
      </div>
      <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Checkbox">
        <div aria-hidden="true" className="absolute border-[#78788f] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
        <Container />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center relative rounded-[4px] shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Preview() {
  return (
    <div className="content-stretch cursor-pointer flex items-start pr-px relative shrink-0 w-full" data-name="Preview">
      <button className="flex-[1_0_0] min-h-px min-w-px mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px]" data-name="Button group">
        <div aria-hidden="true" className="absolute border border-[#aaa] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[8.5px] relative w-full">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#58586b] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="leading-[normal]">15min</p>
            </div>
          </div>
        </div>
      </button>
      <button className="flex-[1_0_0] min-h-px min-w-px mr-[-1px] relative" data-name="Button group">
        <div aria-hidden="true" className="absolute border border-[#aaa] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[8.5px] relative w-full">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#58586b] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="leading-[normal]">60min</p>
            </div>
          </div>
        </div>
      </button>
      <button className="flex-[1_0_0] min-h-px min-w-px mr-[-1px] relative" data-name="Button group">
        <div aria-hidden="true" className="absolute border border-[#aaa] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[8.5px] relative w-full">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#58586b] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="leading-[normal]">72min</p>
            </div>
          </div>
        </div>
      </button>
      <button className="flex-[1_0_0] min-h-px min-w-px mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px]" data-name="Button group">
        <div aria-hidden="true" className="absolute border border-[#aaa] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[8.5px] relative w-full">
            <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#58586b] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="leading-[normal]">+Definir</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_41.18%_16.67%_11.76%]" data-name="Group">
      <div className="absolute inset-[-12.5%_-18.75%_-25%_-18.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g filter="url(#filter0_d_28_6694)" id="Group">
            <path d={svgPaths.p28a80040} fill="var(--fill-0, white)" id="Rectangle" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_28_6694" width="22" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_28_6694" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_28_6694" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute contents inset-[16.67%_41.18%_16.67%_11.76%]" data-name="Shadow">
      <Group />
    </div>
  );
}

function Thumb() {
  return (
    <div className="absolute contents inset-[16.67%_41.18%_16.67%_11.76%]" data-name="Thumb">
      <Shadow />
    </div>
  );
}

function Normal() {
  return (
    <div className="absolute contents inset-[16.67%_11.76%]" data-name="normal">
      <div className="absolute inset-[29.17%_11.76%]" data-name="Track">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 26 10">
          <path d={svgPaths.p38c4e700} fill="var(--fill-0, #AAAAAA)" id="Track" />
        </svg>
      </div>
      <Thumb />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="switch">
        <div className="h-[24px] relative shrink-0 w-[34px]" data-name="switch">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="box" />
          </svg>
          <Normal />
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[10px] relative" data-name="switch/Frame 17">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#58586b] text-[14px] whitespace-pre-wrap">Repetir o lembrete todos os dias</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-end justify-end relative shrink-0 w-full" data-name="button-group">
      <div className="bg-[rgba(5,44,63,0.12)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="BTN">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[24px] relative w-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-[rgba(51,51,51,0.38)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Salvar lembrete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame9 />
      <ButtonGroup />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[16px] items-center left-1/2 rounded-[4px] top-[127px] w-[328px]">
      <Frame7 />
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#78788f] text-[14px] w-full whitespace-pre-wrap">Defina a duração do intervalo:</p>
      <Preview />
      <Frame3 />
    </div>
  );
}

export default function MyAhgoraConfigLembrete() {
  return (
    <div className="bg-white relative size-full" data-name="My-Ahgora-config-lembrete02">
      <div className="absolute content-stretch flex flex-col items-start left-0 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.16)] top-0" data-name="Header-mobile">
        <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-[360px]" data-name="Status Bar / iPhone 13 Mini">
          <Indicators />
          <div className="absolute left-[282px] size-[6px] top-[6px]" data-name="Mic & Cam">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Mic/Cam Indicator" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['SF_Pro_Text:Semibold',sans-serif] gap-[2px] items-center justify-center leading-[0] left-[calc(50%-131.5px)] not-italic text-black text-center top-[calc(50%+6px)] whitespace-nowrap" data-name="Elements / Time">
            <div className="flex flex-col justify-center relative shrink-0 text-[17px] tracking-[-0.5px]" style={{ fontFeatureSettings: "\'ss03\'" }}>
              <p className="leading-[17px]">9:41</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-[14px]">
              <p className="leading-[14px]">􀋑</p>
            </div>
          </div>
        </div>
        <Frame2 />
      </div>
      <Frame6 />
    </div>
  );
}