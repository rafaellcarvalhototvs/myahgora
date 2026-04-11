import { ExternalLink } from "lucide-react";
import svgPaths from "../../../imports/svg-e87qwrkf8p";

export function AppCard() {
  return (
    <div 
      className="bg-white rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] p-4 flex flex-col gap-6 mx-6 mt-6"
      data-name="MyAhgora Card"
    >
      {/* Header Section */}
      <div className="flex items-start justify-between w-full">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="w-[24px] h-[24px] relative">
            <svg 
              viewBox="0 0 24 24" 
              className="w-full h-full"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d={svgPaths.p3447f900} fill="#1199DD" />
                <path d={svgPaths.p30d3b9f0} fill="#1199DD" />
                <path d={svgPaths.p1e302170} fill="#1199DD" />
                <path d={svgPaths.p36098500} fill="#1199DD" />
              </g>
            </svg>
          </div>
          <span className="text-[#78788f] text-[16px] font-extrabold leading-normal">
            Multi
          </span>
        </div>

        {/* External Link Icon */}
        <div className="w-6 h-6 relative shrink-0">
          <svg 
            viewBox="0 0 18 18" 
            className="w-[18px] h-[18px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svgPaths.p1056d300} fill="#1199DD" />
          </svg>
        </div>
      </div>

      {/* Description and Action */}
      <p className="text-[14px] text-[#78788f] leading-normal font-normal">
        Seu aplicativo para registro de ponto por reconhecimento facial.{" "}
        <a href="#" className="text-[#19d] hover:underline font-normal">
          Acesse!
        </a>
      </p>
    </div>
  );
}
