import svgPaths from "./svg-xudaz6hqpj";

export default function ModalReposicionarBatida() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative size-full" data-name="Modal Reposicionar batida">
      <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Body">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name=".Header Modal">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Description + Icon">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".Container - Icon">
                <div className="bg-[#19d] content-stretch flex items-start p-[8px] relative rounded-[56px] shrink-0 size-[42px]" data-name="Icon Container">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="send">
                    <div className="absolute inset-[14.65%_10.59%_14.65%_8.33%]" data-name="Vector">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.079 18.3839">
                        <path d={svgPaths.p3cd2c800} fill="var(--fill-0, white)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
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
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] tracking-[0.03px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Enviar solicitação
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Typography">
              <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] tracking-[0.028px] w-full whitespace-pre-wrap">Você tem certeza que deseja enviar esta solicitação?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name=".footerModal">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-end p-[24px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative" data-name="Container Buttons">
              <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border-2 border-[#19d] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="relative shrink-0 w-full" data-name=".base-button">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
                      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#19d] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                        Cancelar
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
                        Enviar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(42,42,51,0.12)] border-solid border-t inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      </div>
    </div>
  );
}