import svgPaths from "./svg-ta5p30a5r2";
import imgImage1 from "figma:asset/84f75eae0939274676344c8882d0ca51a4c2107d.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-[827.75px]">
      <div className="absolute bg-white h-[24px] left-0 top-[827.75px] w-[393px]" data-name="Gesture bar">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#2a2a33] h-[4px] left-1/2 rounded-[12px] top-1/2 w-[108px]" data-name="handle" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[38.824px] items-center ml-0 mt-0 p-[16px] relative row-1 w-[393px]" data-name="Header">
      <div className="bg-[#2a2a33] h-[4px] rounded-[100px] shrink-0 w-[32px]" data-name="Drag handle" />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#eaf8ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="attach-file">
        <div className="absolute bottom-[4.17%] left-[29.17%] right-1/4 top-[4.17%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11 22">
            <path d={svgPaths.p220b770} fill="var(--fill-0, #0C6D9E)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#19d] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative rounded-[4px]" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="camera-alt">
                <div className="absolute inset-[37.5%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.p969ae00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                    <path d={svgPaths.p1d901b00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Camera
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#19d] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative rounded-[4px]" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="folder">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                    <path d={svgPaths.p16576880} fill="var(--fill-0, #F4F4F6)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Arquivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2a33] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">Escolha uma opção abaixo para adicionar seu anexo.</p>
      <Frame />
    </div>
  );
}

function TitleSubtitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Title + Subtitle">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#2a2a33] text-[20px] tracking-[0.03px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Adicionar anexo
      </p>
      <Frame1 />
    </div>
  );
}

function IconeETitulo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Ícone e Título">
      <Icon />
      <TitleSubtitle />
    </div>
  );
}

function Slot() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[40px] h-[291.176px] items-center ml-0 mt-[38.82px] overflow-clip px-[24px] py-[16px] relative row-1 w-[393px]" data-name=".Slot">
      <IconeETitulo />
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-[362px]" data-name="button">
        <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#19d] text-[16px] tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Voltar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative w-full">
      <Header />
      <Slot />
    </div>
  );
}

function BottomSheet() {
  return (
    <div className="absolute bg-white bottom-[24px] content-stretch flex flex-col h-[330px] items-start left-0 overflow-clip rounded-tl-[28px] rounded-tr-[28px] w-[393px]" data-name="Bottom Sheet">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[0.25px] contents left-0">
      <Group />
      <BottomSheet />
    </div>
  );
}

export default function EnviarMensagemAdicionarAnexoBottomSheet() {
  return (
    <div className="bg-[#2a2a33] relative size-full" data-name="Enviar mensagem – Adicionar anexo (bottom sheet)">
      <div className="absolute h-[852px] left-0 top-0 w-[393px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage1} />
      </div>
      <Group1 />
    </div>
  );
}