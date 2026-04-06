import svgPaths from "./svg-f2fkcukjsv";

function IconContainer() {
  return (
    <div className="bg-[#19d] content-stretch flex items-start p-[8px] relative rounded-[56px] shrink-0 size-[42px]" data-name="Icon Container">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="attach-file">
        <div className="absolute bottom-[4.15%] left-[29.17%] right-1/4 top-[4.17%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9167 23.8367">
            <path d={svgPaths.p1e4e9780} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DescriptionIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Description + Icon">
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".Container - Icon">
        <IconContainer />
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="IconButton">
          <div className="content-stretch flex items-center p-[4px] relative rounded-[48px] shrink-0" data-name="UnstyledIconButton">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Symbols / close">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p1986c580} fill="var(--fill-0, #3A3A45)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#3a3a45] text-[20px] tracking-[0.03px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Adicionar anexo
      </p>
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">Escolha uma opção abaixo para adicionar seu anexo.</p>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name=".Header Modal">
          <DescriptionIcon />
          <Typography />
          <Typography1 />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="grupo-botoes-anexo">
          <div className="bg-[#19d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
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
                    Câmera
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#19d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
            <div className="relative shrink-0 w-full" data-name=".base-button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="panorama">
                    <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
                        <path d={svgPaths.p5179700} fill="var(--fill-0, white)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Galeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#19d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="button">
            <div className="relative shrink-0 w-full" data-name=".base-button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="folder">
                    <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                        <path d={svgPaths.p16576880} fill="var(--fill-0, white)" id="Vector" />
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
      </div>
    </div>
  );
}

function ContainerButtons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative" data-name="Container Buttons">
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#19d] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Ver espelho
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#19d] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative rounded-[4px]" data-name="button">
        <div className="relative shrink-0 w-full" data-name=".base-button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative w-full">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[16px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cancelar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IncluirBatida() {
  return (
    <div className="bg-[#58586b] relative size-full" data-name="Incluir Batida">
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 overflow-clip w-[393px]" data-name="Modal - Incluir batida">
        <Body />
        <div className="bg-white relative shrink-0 w-full" data-name=".footerModal">
          <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-end p-[24px] relative w-full">
              <ContainerButtons />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[rgba(42,42,51,0.12)] border-solid border-t inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}