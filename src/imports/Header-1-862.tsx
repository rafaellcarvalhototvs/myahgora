import svgPaths from "./svg-xrhe7qzgal";
import imgAvatar from "figma:asset/9fa793b6b783495909c6bcc12299db8660256140.png";

function AvatarContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Avatar Container">
      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
        <img alt="" className="absolute block inset-0 max-w-none" height="44" src={imgAvatar} width="44" />
      </div>
    </div>
  );
}

function DisregardIconContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[48px] shrink-0 size-[48px]" data-name="Disregard Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Disregard Icon">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p37fe6f00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <DisregardIconContainer />
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bg-[#2a2a33] content-stretch flex flex-col inset-[-12.5%_-8.33%_45.83%_41.67%] items-center justify-center rounded-[14px]" data-name="Indicator">
      <div aria-hidden="true" className="absolute border border-[#19d] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[10px] justify-center leading-[0] relative shrink-0 text-[8px] text-center text-white w-[5px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function DisregardIconContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[48px] shrink-0 size-[48px]" data-name="Disregard Icon Container">
      <div className="relative shrink-0 size-[24px]" data-name="Message Icon Container">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p2a5aec00} fill="var(--fill-0, white)" id="Union" />
        </svg>
        <Indicator />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <DisregardIconContainer1 />
    </div>
  );
}

function DisregardIconContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[48px] shrink-0 size-[48px]" data-name="Disregard Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Disregard Icon">
        <div className="absolute inset-[10.42%_18.39%_8.33%_18.39%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1726 19.5">
            <path d={svgPaths.p3a8aac80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <DisregardIconContainer2 />
    </div>
  );
}

function NotificationContainer() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[176px]" data-name="Notification Container">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function UserDetails() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="User Details">
      <AvatarContainer />
      <NotificationContainer />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="User Info">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative w-full">
        <UserDetails />
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Typography">
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[0.027px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[28px]">Olá, Matheus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#19d] content-stretch flex flex-col items-start relative size-full" data-name="Header">
      <UserInfo />
    </div>
  );
}