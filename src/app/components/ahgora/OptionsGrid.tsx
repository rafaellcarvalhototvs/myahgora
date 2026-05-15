import svgPaths from "../../../imports/svg-o9hggzbldu";

const options = [
  {
    label: "Férias",
    viewBox: "0 0 17.5848 17.4161",
    path: (
      <path d={svgPaths.p19f9d6f0} fill="currentColor" />
    )
  },
  {
    label: "Demonstrativos\nfinanceiros",
    viewBox: "0 0 20 19.8104",
    path: (
      <path d={svgPaths.p3ae95480} fill="currentColor" />
    )
  },
  {
    label: "Timesheet",
    viewBox: "0 0 16.0005 19.3061",
    path: (
      <path d={svgPaths.p2540b80} fill="currentColor" />
    )
  },
  {
    label: "Sobreavisos",
    viewBox: "0 0 18 20.8016",
    path: (
      <path d={svgPaths.p391bd8a0} fill="currentColor" />
    )
  },
  {
    label: "Acesso Excepcional",
    viewBox: "0 0 22 11.8863",
    path: (
      <path d={svgPaths.pcc3e700} fill="currentColor" />
    )
  },
  {
    label: "Meu RH",
    viewBox: "0 0 24 11.0476",
    path: (
      <g clipPath="url(#clip_meurh)">
        <path d={svgPaths.p211e6700} fill="currentColor" />
        <path d={svgPaths.p313a1480} fill="currentColor" />
        <path d={svgPaths.p3be38200} fill="currentColor" />
        <path d={svgPaths.p2733e100} fill="currentColor" />
        <path d={svgPaths.p10f84f20} fill="currentColor" />
        <path d={svgPaths.pd7ecf00} fill="currentColor" />
        <defs>
          <clipPath id="clip_meurh">
            <rect width="24" height="11.0476" fill="white" />
          </clipPath>
        </defs>
      </g>
    )
  }
];

export function OptionsGrid() {
  return (
    <div className="flex flex-col mt-6 px-6 pt-[0px] pb-[32px]">
      <h3 className="font-semibold text-base mb-4 text-foreground tracking-[0.024px] leading-6">Outras opções</h3>
      
      <div className="grid grid-cols-2 gap-x-[17px] gap-y-4">
        {options.map((option, index) => (
          <div 
            key={index}
            className="bg-primary h-[88px] rounded-[8px] p-2 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-hover transition-colors text-primary-foreground"
          >
            {/* Icon positioned at top-right */}
            <div className="self-end opacity-100 w-6 h-6 flex items-center justify-center">
              <svg 
                viewBox={option.viewBox} 
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                {option.path}
              </svg>
            </div>
            
            {/* Label at bottom */}
            <span className="font-semibold text-sm leading-[21px] tracking-[0.021px] whitespace-pre-wrap">
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
