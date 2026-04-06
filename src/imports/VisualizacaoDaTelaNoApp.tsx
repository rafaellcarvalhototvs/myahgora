import imgImg1972 from "figma:asset/756cf8cc6d0783a5f5aaec45f276d1fe2d4e0cdc.png";
import imgCapturaDeTela20250919AS0844221 from "figma:asset/b8f7bb929fc68b616fe95236ccfc1d5567f96a1d.png";
import imgImg1973 from "figma:asset/6d6c7b1294cee5589ba929eee579db9d6917b648.png";

export default function VisualizacaoDaTelaNoApp() {
  return (
    <div className="relative size-full" data-name="Visualização da tela no app">
      <div className="absolute h-[2556px] left-0 top-0 w-[1179px]" data-name="IMG_1972">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1972} />
      </div>
      <div className="absolute h-[498px] left-0 top-[2058px] w-[1179px]" data-name="Captura de Tela 2025-09-19 à(s) 08.44.22 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[513.25%] left-0 max-w-none top-[-357.63%] w-full" src={imgCapturaDeTela20250919AS0844221} />
        </div>
      </div>
      <div className="absolute h-[2362px] left-0 top-[2399px] w-[1179px]" data-name="IMG_1973">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.21%] left-0 max-w-none top-[-7.66%] w-full" src={imgImg1973} />
        </div>
      </div>
    </div>
  );
}