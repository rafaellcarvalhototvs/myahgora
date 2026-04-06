import { useState } from "react";
import { RegisterPointModal } from "./RegisterPointModal";

interface RegisterButtonProps {
  onRegisterSuccess?: () => void;
}

export function RegisterButton({ onRegisterSuccess }: RegisterButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  
  const handleConfirm = () => {
    // Logic to confirm registration would go here
    setIsModalOpen(false);
    if (onRegisterSuccess) {
      onRegisterSuccess();
    }
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-[4px] transition-colors text-[14px] leading-[24px] tracking-[0.4px] shadow-sm flex items-center justify-center cursor-pointer"
      >
        Registrar ponto
      </button>
      
      <RegisterPointModal 
        isOpen={isModalOpen} 
        onClose={handleClose} 
        onConfirm={handleConfirm} 
      />
    </>
  );
}
