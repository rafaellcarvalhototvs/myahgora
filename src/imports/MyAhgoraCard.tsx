import svgPaths from "./svg-e87qwrkf8p";

export default function MyAhgoraCard() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start p-[16px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] size-full" data-name="MyAhgora Card">
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[296px]" data-name="card-header-new">
          <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0 w-[264px]" data-name="icone-titulo">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                <div className="content-stretch flex items-start pr-[8px] relative size-full">
                  <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px overflow-clip relative" data-name="Icon PD">
                    <div className="absolute contents inset-0" data-name="b">
                      <div className="absolute contents inset-0" data-name="c">
                        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.9981">
                          <g id="Group">
                            <path d={svgPaths.p3447f900} fill="var(--fill-0, #1199DD)" id="Vector" />
                            <path d={svgPaths.p30d3b9f0} fill="var(--fill-0, #1199DD)" id="Vector_2" />
                            <path d={svgPaths.p1e302170} fill="var(--fill-0, #1199DD)" id="Vector_3" />
                            <path d={svgPaths.p36098500} fill="var(--fill-0, #1199DD)" id="Vector_4" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Axiforma:Heavy',sans-serif] h-[18px] leading-[normal] not-italic relative shrink-0 text-[#78788f] text-[16px] w-[224px] whitespace-pre-wrap">Multi</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="icons">
            <div className="content-stretch flex items-start justify-end relative shrink-0">
              <div className="h-[23.773px] relative shrink-0 w-[24px]" data-name="ic_my_abrir-24px">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Caminho 4656" />
                </svg>
                <div className="absolute inset-[12.5%]" data-name="Caminho 4657">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.8294">
                    <path d={svgPaths.p1056d300} fill="var(--fill-0, #1199DD)" id="Caminho 4657" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[#78788f] text-[0px] w-[min-content]">
          <p className="text-[14px] whitespace-pre-wrap">
            <span className="leading-[normal]">{`Seu aplicativo para registro de ponto por reconhecimento facial. `}</span>
            <span className="font-['Open_Sans:Regular',sans-serif] leading-[normal] not-italic text-[#19d]">Acesse!</span>
          </p>
        </div>
      </div>
    </div>
  );
}