function EscrevaAqui() {
  return (
    <div className="bg-[#f4f5f8] content-stretch flex items-start p-[8px] relative rounded-[4px] shrink-0 w-[232px]" data-name="Escreva aqui">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[16px] text-black whitespace-pre-wrap">O nome do arquivo será composto com o nome dos 20 primeiros caracteres seguidos de (...) .extensão do arquivo</p>
    </div>
  );
}

export default function ProductNote() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full" data-name="Product note">
      <div aria-hidden="true" className="absolute border-[#363636] border-solid border-t-4 inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)]" />
      <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name=".Tags">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Comportamento</p>
      </div>
      <EscrevaAqui />
    </div>
  );
}