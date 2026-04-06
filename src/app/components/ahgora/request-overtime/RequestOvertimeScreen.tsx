import { useState } from 'react';
import { AhgoraInput } from '../AhgoraInput';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

interface RequestOvertimeScreenProps {
  onBack: () => void;
}

export function RequestOvertimeScreen({ onBack }: RequestOvertimeScreenProps) {
  const [formData, setFormData] = useState({
    date: '2025-09-06',
    startTime: '',
    endTime: '',
    observation: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.startTime) newErrors.startTime = 'Hora inicial obrigatória.';
    if (!formData.endTime) newErrors.endTime = 'Hora final obrigatória.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccessModal(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f0f0f5] flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen">
      <div className="w-full max-w-md bg-white h-full relative shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] z-10 relative">
        <button onClick={onBack} className="text-white p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Hora extra</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto w-full bg-white relative scroll-smooth">
        <div className="p-6 pb-[40px] flex flex-col gap-6 w-full min-h-full bg-white">
        {/* Info Text */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Use esta tela para solicitar o registro de horas extras. A aprovação do gestor é necessária para oficializar as horas no banco de horas ou pagamento.</p>
          <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
        </div>

        <div className="h-px bg-gray-200 w-full shrink-0" />

        {/* Date Field (Read-only for prototype) */}
        <div className="border border-muted rounded-[4px] px-4 py-3 bg-white">
          <p className="text-base font-semibold text-foreground">06 de Set, 2025</p>
        </div>

        {/* Start Time */}
        <AhgoraInput
          label="Hora inicial"
          type="time"
          value={formData.startTime}
          onChange={(e) => handleChange('startTime', e.target.value)}
          placeholder="Selecione"
          startIcon={<AccessTimeIcon className="text-muted-foreground" fontSize="small" />}
          endIcon={errors.startTime ? <ErrorOutlineIcon className="text-destructive" fontSize="small" /> : null}
          error={!!errors.startTime}
          helperText={errors.startTime}
          containerClassName="space-y-2"
        />

        {/* End Time */}
        <AhgoraInput
          label="Hora final"
          type="time"
          value={formData.endTime}
          onChange={(e) => handleChange('endTime', e.target.value)}
          placeholder="Selecione"
          startIcon={<AccessTimeIcon className="text-muted-foreground" fontSize="small" />}
          endIcon={errors.endTime ? <ErrorOutlineIcon className="text-destructive" fontSize="small" /> : null}
          error={!!errors.endTime}
          helperText={errors.endTime}
          containerClassName="space-y-2"
        />

        {/* Observation */}
        <div className="space-y-2">
           <AhgoraInput
              label="Observação"
              multiline
              value={formData.observation}
              onChange={(e) => handleChange('observation', e.target.value)}
              placeholder="Exemplo: permaneci após o expediente para finalizar relatório."
              maxLength={250}
           />
           <div className="flex justify-end">
             <span className="text-xs text-muted-foreground">Máx. 250 caracteres</span>
           </div>
        </div>

        {/* Info Box - Approval Flow and N.A. Status */}
        
        </div>
      </div>

      {/* Footer - Fixed Action Button */}
      <div className="shrink-0 px-6 pt-[16px] pb-[24px] bg-white border-t border-[#DDDDDD] z-20">
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-primary-foreground rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
        >
          Enviar solicitação
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-[80] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-xs rounded-[16px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
             <div className="p-6 pb-0 flex flex-col items-center text-center">
               <div className="w-[64px] h-[64px] bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon sx={{ color: '#22aa44', fontSize: 32 }} />
               </div>
               
               <h3 className="text-[18px] font-semibold text-foreground mb-2">Solicitação enviada com sucesso</h3>
               <p className="text-[14px] text-muted-foreground mb-6">As horas aparecerão como "N.A." no espelho até a aprovação do gestor.</p>
             </div>
             
             <div className="p-4 pt-0 border-t border-gray-100 bg-gray-50/50 flex gap-3">
               <button 
                 onClick={() => {
                   setShowSuccessModal(false);
                   onBack();
                 }}
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
    </div>
  );
}