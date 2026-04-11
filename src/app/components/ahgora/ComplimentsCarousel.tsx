import { Smile, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export function ComplimentsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mt-6 p-[0px]">
      <div className="flex justify-between items-center px-6 mb-4">
        <h3 className="font-semibold text-lg text-foreground">Elogios</h3>
        <button className="text-primary text-sm font-semibold hover:underline">Ver todos</button>
      </div>
      
      <div 
        ref={scrollRef}
        className={`flex gap-4 px-6 pb-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${ isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory' } ml-0 mr-0 my-0`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* Card 1 */}
        <div className="min-w-[300px] bg-card rounded-lg p-4 border border-border/40 shadow-sm flex flex-col justify-between snap-start select-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold border-2 border-white text-gray-600">LD</div>
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold border-2 border-white text-gray-500">+81</div>
              </div>
              <div className="text-gray-400">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            
            <p className="text-sm text-gray-800 mb-2">
              De <span className="font-bold">LUIZ</span> para <span className="font-bold">ENGENHARIA</span>
            </p>
            
            <p className="text-sm text-gray-600 line-clamp-2">
              Parabéns aos colegas que estão apresentando seus produtos na Semana...
            </p>
            <button className="text-primary text-xs font-semibold mt-1">Mostrar mais</button>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <span className="text-xs text-gray-400">quarta-feira - 10/07/24</span>
            <Smile className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[300px] bg-card rounded-lg p-4 border border-border/40 shadow-sm flex flex-col justify-between opacity-60 snap-start select-none">
           <div>
            <div className="flex items-center gap-2 mb-3">
               <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold border-2 border-white text-gray-600">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64" className="w-full h-full rounded-full object-cover" alt="User avatar" />
               </div>
            </div>
             <p className="text-sm text-gray-800 mb-2">
              De <span className="font-bold">PAULA</span>
            </p>
             <p className="text-sm text-gray-600 line-clamp-2">
              Meu exemplo de dedicação...
            </p>
            <button className="text-primary text-xs font-semibold mt-1">Mostrar mais</button>
           </div>
             <div className="flex justify-between items-end mt-4">
            <span className="text-xs text-gray-400">sexta-feira - 12/07/24</span>
          </div>
        </div>
      </div>
    </div>
  );
}
