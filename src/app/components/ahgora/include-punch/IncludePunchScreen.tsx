import { useState } from 'react';
import { AhgoraInput } from '../AhgoraInput';
import { AttachmentBottomSheet } from '../AttachmentBottomSheet';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

interface IncludePunchScreenProps {
  onBack: () => void;
}

export function IncludePunchScreen({ onBack }: IncludePunchScreenProps) {
  const [punchType, setPunchType] = useState<'point' | 'pause'>('point');
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    observation: '',
    justification: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.date) newErrors.date = 'Data de inclusão obrigatória.';
    if (!formData.time) newErrors.time = 'Horário obrigatório.';
    if (!formData.observation) newErrors.observation = 'Observação obrigatória.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setShowSuccessModal(true);
    }
  };

  const handleFileSelect = (source: string) => {
    const newFile = new File(["dummy content"], `anexo_${Date.now()}.jpg`, { type: "image/jpeg" });
    setFiles([...files, newFile]);
    setShowAttachmentModal(false);
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
          <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Incluir batida</h1>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto w-full bg-background relative scroll-smooth transition-colors">
          <div className="p-6 pb-[40px] flex flex-col gap-6 w-full min-h-full bg-background transition-colors">
            {/* Info Text */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-foreground mb-6">Use esta tela para incluir batidas não gravadas ou esquecidas.</p>
              <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
            </div>

            <div className="h-px bg-text-lighten-3 w-full shrink-0" />

            {/* Punch Type Selection */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-2">Escolha o tipo da batida</label>
              <div className="flex gap-4 items-center">
                <button 
                  className="flex items-center gap-2 group"
                  onClick={() => setPunchType('point')}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${punchType === 'point' ? 'border-primary' : 'border-muted group-hover:border-primary/50'}`}>
                    {punchType === 'point' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                  </div>
                  <span className="text-sm text-foreground">Batida de ponto</span>
                </button>
                
                <button 
                  className="flex items-center gap-2 group"
                  onClick={() => setPunchType('pause')}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${punchType === 'pause' ? 'border-primary' : 'border-muted group-hover:border-primary/50'}`}>
                    {punchType === 'pause' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                  </div>
                  <span className="text-sm text-foreground">Batida de pausa</span>
                </button>
              </div>
            </div>

            {/* Pause Info Box */}
            {punchType === 'pause' && (
              <div className="bg-[#ebf3fc] flex gap-[8px] items-start p-[16px] rounded-[4px] w-full">
                <div className="shrink-0 text-[#1166CC]">
                  <InfoIcon color="inherit" />
                </div>
                <div className="flex flex-col gap-[4px] text-foreground">
                  <p className="font-semibold text-[16px] leading-[24px]">
                    Indicado para pausas regulamentadas
                  </p>
                  <p className="text-[14px] leading-[20px]">
                    Geralmente usada por setores como call center ou atendimento, conforme a NR17.
                  </p>
                </div>
              </div>
            )}

            {/* Date Input */}
            <AhgoraInput
              label="Data da Inclusão"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              placeholder="Selecione uma data"
              startIcon={<CalendarTodayIcon className="text-[#58586B]" />}
              endIcon={errors.date ? <ErrorIcon className="text-destructive" /> : null}
              error={!!errors.date}
              helperText={errors.date}
              containerClassName="w-full"
            />

            {/* Time Input */}
            <AhgoraInput
              label="Horário"
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              placeholder="Selecione um horário"
              startIcon={<AccessTimeIcon className="text-[#58586B]" />}
              endIcon={errors.time ? <ErrorIcon className="text-destructive" /> : null}
              error={!!errors.time}
              helperText={errors.time}
              containerClassName="w-full"
            />

            {/* Observation */}
            <div>
              <AhgoraInput
                label="Observação"
                multiline
                value={formData.observation}
                onChange={(e) => setFormData({...formData, observation: e.target.value})}
                placeholder="Exemplo: esqueci de marcar entrada"
                maxLength={250}
                error={!!errors.observation}
                helperText={errors.observation}
              />
              <div className="flex justify-end mt-[12px]">
                <span className="text-xs text-muted-foreground">Máx. 250 caracteres</span>
              </div>
            </div>

            {/* Attachments Button */}
            <div>
              <button 
                onClick={() => setShowAttachmentModal(true)}
                className="w-full h-[40px] border-2 border-primary rounded-[4px] py-2 flex items-center justify-center gap-2 text-primary font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors"
              >
                <AttachFileIcon className="transform rotate-45" />
                Adicionar anexo (Opcional)
              </button>
              <p className="text-xs text-center text-muted-foreground mt-[12px]">Arquivos: PDF, JPG, PNG (máx. 5MB).</p>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="flex flex-col w-full">
                {files.map((file, index) => (
                  <div key={index} className="relative w-full">
                    <div className="flex items-center justify-between pb-[16px] pt-[8px] px-[16px] border-b border-text-lighten-3 w-full">
                      <span className="text-foreground text-[14px] leading-[20px] truncate pr-4">
                        {file.name} ({Math.max(1, Math.round(file.size / 1024))}KB)
                      </span>
                      <button 
                        onClick={() => setFiles(files.filter((_, i) => i !== index))}
                        className="text-foreground hover:text-destructive shrink-0"
                      >
                        <CloseIcon sx={{ fontSize: 20 }} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer - Fixed Action Buttons */}
        <div className="shrink-0 px-6 pt-[16px] pb-[24px] bg-[var(--surface-elevated)] border-t border-text-lighten-3 transition-colors space-y-[16px] z-20">
          <button 
            onClick={handleSubmit}
            className="w-full bg-primary text-white rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
          >
            Enviar solicitação
          </button>
          <button 
            onClick={onBack}
            className="w-full border-2 border-primary text-primary rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors flex items-center justify-center"
          >
            Cancelar
          </button>
        </div>
      </div>

      {/* Attachment Modal */}
      <AttachmentBottomSheet 
        isVisible={showAttachmentModal} 
        onClose={() => setShowAttachmentModal(false)}
        onSelect={handleFileSelect}
      />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border/70 w-full max-w-xs rounded-[16px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
             <div className="p-6 pb-0 flex flex-col items-center text-center">
               <div className="w-[64px] h-[64px] bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon sx={{ color: '#22aa44', fontSize: 32 }} />
               </div>
               
               <h3 className="text-[18px] font-semibold text-foreground mb-2">Batida incluída com sucesso</h3>
               <p className="text-[14px] text-muted-foreground mb-6">Confira os detalhes no espelho detalhado.</p>
             </div>
             
             <div className="p-4 pt-0 border-t border-text-lighten-3 bg-muted/20 dark:bg-muted/10 flex gap-3">
               <button 
                 onClick={onBack}
                 className="flex-1 border-2 border-primary text-primary py-2 rounded-[4px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 flex items-center justify-center"
               >
                 Ver espelho
               </button>
               <button 
                 onClick={() => {
                   setShowSuccessModal(false);
                   onBack();
                 }}
                 className="flex-1 bg-primary text-white py-2 rounded-[4px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 flex items-center justify-center shadow-sm"
               >
                 Salvar
               </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
