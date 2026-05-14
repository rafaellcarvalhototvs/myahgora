import { useState, useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FolderIcon from '@mui/icons-material/Folder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import { AttachmentBottomSheet } from '../AttachmentBottomSheet';
import { AhgoraInput } from '../AhgoraInput';

interface SendMessageScreenProps {
  onBack: () => void;
}

export function SendMessageScreen({ onBack }: SendMessageScreenProps) {
  const [message, setMessage] = useState('');
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [attachment, setAttachment] = useState<{ name: string; size: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Use a fixed date for the prototype to match design, or current date
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  const handleSendMessage = () => {
    const newErrors: Record<string, string> = {};
    if (!message.trim()) newErrors.message = 'Mensagem obrigatória.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccessModal(true);
    }
  };

  const handleAddAttachment = (type: 'camera' | 'gallery' | 'files') => {
    // Mock attachment selection
    setAttachment({
      name: type === 'camera' ? 'foto_camera.jpg' : 'atestado_medico.pdf',
      size: type === 'camera' ? '2.5MB' : '1.2MB'
    });
    setShowBottomSheet(false);
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-background flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen">
      <div className="w-full max-w-md bg-background h-full relative shadow-2xl dark:shadow-none flex flex-col transition-colors">
        {/* Header */}
        <div className="bg-primary px-6 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] z-10 relative">
        <button onClick={onBack} className="text-white p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Enviar mensagem</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto w-full bg-background relative scroll-smooth transition-colors">
        <div className="p-6 pb-[40px] flex flex-col gap-6 w-full min-h-full bg-background transition-colors">
        {/* Info Text */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Use esta tela para enviar mensagens ao gestor ou RH, como justificativas de horas extras, banco de horas ou comunicações gerais sobre a jornada.</p>
          <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
        </div>

        <div className="h-px bg-border/60 w-full shrink-0" />

        {/* Date Field (Read-only) */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground block">Data da inclusão</label>
          <div className="border border-border rounded-[4px] px-4 py-3 flex items-center gap-2 bg-card">
            <CalendarTodayIcon className="text-muted-foreground" fontSize="small" />
            <span className="text-sm text-muted-foreground">{currentDate}</span>
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground block">Mensagem</label>
          <div className={`border rounded-[4px] px-4 py-3 bg-card ${errors.message ? 'border-destructive border-2' : 'border-border'}`}>
            <textarea
              className="w-full outline-none text-sm text-muted-foreground bg-transparent min-h-[100px] resize-none placeholder-[#78788f]"
              placeholder="Exemplo: Preciso atualizar meus dados cadastrais."
              maxLength={250}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors({ ...errors, message: '' });
              }}
            />
          </div>
          <div className="flex justify-between items-start">
             {errors.message ? (
               <p className="text-xs text-destructive font-medium">{errors.message}</p>
             ) : (
               <div /> 
             )}
             <span className="text-xs text-foreground">Máx. 250 caracteres</span>
          </div>
        </div>

        {/* Attachment Section */}
        <div className="space-y-2">
          {!attachment ? (
            <button 
              onClick={() => setShowBottomSheet(true)}
              className="w-full border-2 border-primary rounded-[4px] py-2 flex items-center justify-center gap-2 text-primary font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors group"
            >
              <AttachFileIcon fontSize="small" className="transform rotate-45" />
              Adicionar anexo (Opcional)
            </button>
          ) : (
            <div className="border-b border-border/60 py-2 flex justify-between items-center">
              <span className="text-sm text-foreground">{attachment.name} ({attachment.size})</span>
              <button onClick={handleRemoveAttachment} className="text-muted-foreground hover:text-destructive p-1">
                <CloseIcon fontSize="small" />
              </button>
            </div>
          )}
          <p className="text-xs text-center text-foreground">Arquivos: PDF, JPG, PNG (máx. 5MB).</p>
        </div>

        {/* Info Box - Response Tracking */}
        
      </div>
      </div>

        {/* Submit Button */}
        <div className="shrink-0 px-6 pt-[16px] pb-[24px] bg-[var(--surface-elevated)] border-t border-border/70 transition-colors space-y-[16px] z-20">
          <button
            onClick={handleSendMessage}
            className="w-full bg-primary text-primary-foreground rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center h-[40px]"
          >
            Enviar mensagem
          </button>
        </div>

      {/* Bottom Sheet for Attachment */}
      <AttachmentBottomSheet
        isVisible={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
        onSelect={handleAddAttachment}
      />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-[80] flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card border border-border/70 w-full max-w-sm rounded-lg overflow-hidden shadow-lg animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
             <div className="p-6 pb-4 relative">
               <button 
                 onClick={() => setShowSuccessModal(false)}
                 className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
               >
                 <CloseIcon fontSize="small" />
               </button>

               <div className="flex flex-col gap-4">
                 <div className="w-[42px] h-[42px] rounded-full bg-primary flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                 </div>
                 
                 <div className="space-y-2">
                   <h3 className="text-xl font-semibold text-foreground leading-tight">Mensagem enviada com sucesso</h3>
                   <p className="text-sm text-muted-foreground">O destinatário receberá sua mensagem em breve.</p>
                 </div>
               </div>
             </div>
             
             <div className="p-4 pt-2 flex gap-4 border-t border-border/40">
               <button 
                 onClick={() => {
                   setShowSuccessModal(false);
                   onBack();
                 }}
                 className="flex-1 bg-primary text-primary-foreground py-2 rounded-[4px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
               >
                 Salvar
               </button>
             </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
