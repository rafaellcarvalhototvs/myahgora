import svgPaths from "../../../imports/svg-xrhe7qzgal";

interface HeaderProps {
  userName: string;
  avatarUrl: string;
  onNotificationClick?: () => void;
  onAvatarClick?: () => void;
}

export function Header({ userName, avatarUrl, onNotificationClick, onAvatarClick }: HeaderProps) {
  return (
    <div className="bg-primary flex flex-col items-start w-full relative transition-colors border-b border-transparent">
      <div className="flex flex-col gap-2 items-start px-6 py-4 w-full">
        {/* User Details Row */}
        <div className="flex items-start justify-between w-full">
          {/* Avatar */}
          <button
            onClick={onAvatarClick}
            className="flex items-start relative shrink-0 w-11 h-11 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-full"
            aria-label={`Perfil de ${userName}. Clique para ver relatório de acessibilidade`}
          >
            <div className="relative shrink-0 w-11 h-11 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                alt={`Foto de perfil de ${userName}`} 
                className="absolute inset-0 w-full h-full object-cover" 
                src={avatarUrl} 
              />
            </div>
          </button>

          {/* Icons / Notifications */}
          <div className="flex items-center justify-end relative shrink-0 gap-1">
            {/* Megaphone Icon */}
            <button 
              onClick={onNotificationClick}
              className="flex flex-col items-center justify-center p-2 relative rounded-full w-12 h-12 shrink-0 text-primary-foreground hover:bg-primary-foreground/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Notificações"
            >
               <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
                 <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d={svgPaths.p37fe6f00} fill="currentColor" />
                 </svg>
               </div>
            </button>

            {/* Message Icon with Badge */}
            <button 
              className="flex flex-col items-center justify-center p-2 relative rounded-full w-12 h-12 shrink-0 text-primary-foreground hover:bg-primary-foreground/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Mensagens (4 novas)"
            >
               <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d={svgPaths.p2a5aec00} fill="currentColor" />
                 </svg>
                 {/* Badge */}
                 <div className="absolute -top-1 -right-1 bg-card rounded-[4px] border border-primary flex flex-col items-center justify-center px-1 py-0.5 min-w-[14px] h-[14px]">
                    <span className="text-[10px] font-semibold text-card-foreground leading-none">4</span>
                 </div>
               </div>
            </button>

            {/* Bell Icon */}
            <button 
              onClick={onNotificationClick}
              className="flex flex-col items-center justify-center p-2 relative rounded-full w-12 h-12 shrink-0 text-primary-foreground hover:bg-primary-foreground/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Lembretes"
            >
               <div className="relative w-6 h-6 shrink-0 flex items-center justify-center overflow-hidden">
                 <svg width="16" height="20" viewBox="0 0 15.1726 19.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d={svgPaths.p3a8aac80} fill="currentColor" />
                 </svg>
               </div>
            </button>
          </div>
        </div>

        {/* User Greeting */}
        <div className="flex items-center relative shrink-0 w-full mt-2">
           <h1 className="text-xl font-semibold text-primary-foreground">
             Olá, {userName}
           </h1>
        </div>
      </div>
    </div>
  );
}
