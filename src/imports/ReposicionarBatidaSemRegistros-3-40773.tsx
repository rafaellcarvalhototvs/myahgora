import svgPaths from "./svg-zskvguswyh";

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
          <p className="leading-[28px]">Escolha um nova batida</p>
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

function MinWidth() {
  return <div className="size-[40px]" data-name="min-width" />;
}

function AvatarWrapper() {
  return (
    <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Avatar Wrapper">
      <div className="bg-[rgba(182,182,194,0)] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0" data-name="<Avatar>">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="fingerprint">
          <div className="absolute inset-[8.33%_12.53%_8.33%_12.49%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9963 20">
              <path d={svgPaths.p272cc80} fill="var(--fill-0, #3A3A45)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <MinWidth />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#3a3a45] whitespace-pre-wrap" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        08:00
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.035px] w-full">Ter. 24 de Dez.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a33] text-[16px] tracking-[0.024px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">Batidas registradas pelos coletores</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<Card>">
        <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="<Paper>">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Card Elements">
              <div className="relative shrink-0 w-full" data-name="<CardHeader>">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[16px] relative w-full">
                    <AvatarWrapper />
                    <Text />
                    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Color=Primary, State=Enabled, Variant=Text/Ghosted">
                      <div className="relative shrink-0 w-full" data-name=".base-button">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[22px] py-[8px] relative w-full">
                            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="keyboard-arrow-right">
                              <div className="absolute inset-[26.74%_35.07%_26.7%_37.49%]" data-name="Vector">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78 14.9">
                                  <path d={svgPaths.p31be6a80} fill="var(--fill-0, #3A3A45)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)]" />
        </div>
      </div>
    </div>
  );
}

function MinWidth1() {
  return <div className="size-[40px]" data-name="min-width" />;
}

function AvatarWrapper1() {
  return (
    <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Avatar Wrapper">
      <div className="bg-[rgba(182,182,194,0)] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0" data-name="<Avatar>">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="fingerprint">
          <div className="absolute inset-[8.33%_12.53%_8.33%_12.49%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9963 20">
              <path d={svgPaths.p272cc80} fill="var(--fill-0, #3A3A45)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <MinWidth1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#3a3a45] whitespace-pre-wrap" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        08:00
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.035px] w-full">Ter. 24 de Dez.</p>
    </div>
  );
}

function MinWidth2() {
  return <div className="size-[40px]" data-name="min-width" />;
}

function AvatarWrapper2() {
  return (
    <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Avatar Wrapper">
      <div className="bg-[rgba(182,182,194,0)] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0" data-name="<Avatar>">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="fingerprint">
          <div className="absolute inset-[8.33%_12.53%_8.33%_12.49%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9963 20">
              <path d={svgPaths.p272cc80} fill="var(--fill-0, #3A3A45)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <MinWidth2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#3a3a45] whitespace-pre-wrap" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        08:00
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.035px] w-full">Ter. 24 de Dez.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<Card>">
        <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="<Paper>">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Card Elements">
              <div className="relative shrink-0 w-full" data-name="<CardHeader>">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[16px] relative w-full">
                    <AvatarWrapper1 />
                    <Text1 />
                    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Color=Primary, State=Enabled, Variant=Text/Ghosted">
                      <div className="relative shrink-0 w-full" data-name=".base-button">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[22px] py-[8px] relative w-full">
                            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="keyboard-arrow-right">
                              <div className="absolute inset-[26.74%_35.07%_26.7%_37.49%]" data-name="Vector">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78 14.9">
                                  <path d={svgPaths.p31be6a80} fill="var(--fill-0, #3A3A45)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<Card>">
        <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="<Paper>">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Card Elements">
              <div className="relative shrink-0 w-full" data-name="<CardHeader>">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[16px] relative w-full">
                    <AvatarWrapper2 />
                    <Text2 />
                    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Color=Primary, State=Enabled, Variant=Text/Ghosted">
                      <div className="relative shrink-0 w-full" data-name=".base-button">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[22px] py-[8px] relative w-full">
                            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="keyboard-arrow-right">
                              <div className="absolute inset-[26.74%_35.07%_26.7%_37.49%]" data-name="Vector">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78 14.9">
                                  <path d={svgPaths.p31be6a80} fill="var(--fill-0, #3A3A45)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)]" />
        </div>
      </div>
    </div>
  );
}

function MinWidth3() {
  return <div className="size-[40px]" data-name="min-width" />;
}

function AvatarWrapper3() {
  return (
    <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Avatar Wrapper">
      <div className="bg-[rgba(182,182,194,0)] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0" data-name="<Avatar>">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="add-alarm">
          <div className="absolute inset-[9.24%_10.27%_8.33%_10.27%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0728 19.7814">
              <path d={svgPaths.p8893100} fill="var(--fill-0, #3A3A45)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <MinWidth3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative text-[#3a3a45] whitespace-pre-wrap" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] tracking-[0.024px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Incluir Batida
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.035px] w-full">{`Selecionar um novo horário `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<Card>">
        <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="<Paper>">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Card Elements">
              <div className="relative shrink-0 w-full" data-name="<CardHeader>">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[16px] relative w-full">
                    <AvatarWrapper3 />
                    <Text3 />
                    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Color=Primary, State=Enabled, Variant=Text/Ghosted">
                      <div className="relative shrink-0 w-full" data-name=".base-button">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[22px] py-[8px] relative w-full">
                            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="keyboard-arrow-right">
                              <div className="absolute inset-[26.74%_35.07%_26.7%_37.49%]" data-name="Vector">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78 14.9">
                                  <path d={svgPaths.p31be6a80} fill="var(--fill-0, #3A3A45)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)]" />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a33] text-[16px] tracking-[0.024px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">Outros</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] h-[734px] items-start p-[24px] right-0 top-[118px] w-[393px]" data-name="Body">
      <Frame3 />
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