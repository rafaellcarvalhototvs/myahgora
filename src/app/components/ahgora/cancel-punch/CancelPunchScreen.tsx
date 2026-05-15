import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';

interface Punch {
  id: string;
  time: string;
  date: string;
  status?: 'pending' | 'completed';
}

const PUNCHES: Punch[] = [
  { id: '1', time: '12:00', date: '06 de Set, 2025' },
  { id: '2', time: '13:00', date: '06 de Set, 2025' },
  { id: '3', time: '12:00', date: '06 de Set, 2025' },
  { id: '4', time: '18:01', date: '06 de Set, 2025', status: 'pending' },
];

const REASONS = [
  { id: 'indevida', label: 'Marcação indevida' },
  { id: 'duplicada', label: 'Marcação duplicada' },
  { id: 'teste', label: 'Teste de sistema' },
  { id: 'outro', label: 'Outro motivo' },
];

interface CancelPunchScreenProps {
  onBack: () => void;
}

export function CancelPunchScreen({ onBack }: CancelPunchScreenProps) {
  const [selectedPunchId, setSelectedPunchId] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showReasonDropdown, setShowReasonDropdown] = useState(false);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedPunchId) newErrors.punch = 'Seleção Obrigatória.';
    if (!reason) newErrors.reason = 'Motivo obrigatório.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccessModal(true);
    }
  };

  const handleSelectReason = (value: string) => {
    setReason(value);
    setShowReasonDropdown(false);
    setErrors({ ...errors, reason: '' });
  };

  const handleSelectPunch = (id: string) => {
    setSelectedPunchId(id);
    setErrors({ ...errors, punch: '' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-background flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen">
      <div className="w-full max-w-md bg-background h-full relative shadow-2xl dark:shadow-none flex flex-col transition-colors">
        {/* Header */}
        <div className="bg-primary px-6 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] z-10 relative">
        <button onClick={onBack} className="text-primary-foreground p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-primary-foreground font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Desconsiderar batida</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto w-full bg-background relative scroll-smooth transition-colors">
        <div className="p-6 pb-[40px] flex flex-col gap-6 w-full min-h-full bg-background transition-colors">
        {/* Info Text */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Solicite a desconsideração de uma batida registrada incorretamente. A batida não será apagada, mas marcada para ser desconsiderada no cálculo após aprovação do gestor.</p>
          <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
        </div>

        <div className="h-px bg-text-lighten-3 w-full shrink-0" />

        {/* Punch Selection */}
        <div className={`border rounded-[4px] p-4 ${errors.punch ? 'border-destructive border-2' : 'border-muted'}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-foreground text-base">Selecione a batida</h3>
            <span className="text-sm text-foreground">06 de Set, 2025</span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 items-center">
            {PUNCHES.length === 0 ? (
              <p className="text-muted-foreground text-sm">Não há batidas</p>
            ) : (
              PUNCHES.map((punch) => {
                const isSelected = selectedPunchId === punch.id;
                return (
                  <button
                    key={punch.id}
                    onClick={() => handleSelectPunch(punch.id)}
                    className={`
                      relative w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 transition-all duration-200
                      ${isSelected ? 'bg-[#eaf8ff] border border-primary' : 'bg-transparent border border-muted hover:bg-muted/20'}
                    `}
                  >
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-card flex items-center justify-center border border-border/60 shadow-sm z-10 overflow-hidden">
                        <div className="w-full h-full bg-card flex items-center justify-center">
                           <CheckIcon sx={{ fontSize: 12, color: '#78788F' }} />
                        </div>
                      </div>
                    )}
                    <span className={`text-sm ${isSelected ? 'font-semibold text-foreground' : 'font-normal text-foreground'}`}>
                      {punch.time}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
        {errors.punch && <p className="text-xs text-destructive font-medium -mt-4">{errors.punch}</p>}

        {/* Reason Selection */}
        <div className="space-y-2 relative">
          <label className="text-sm font-semibold text-foreground block">Motivo</label>
          <button
            onClick={() => setShowReasonDropdown(!showReasonDropdown)}
            className={`w-full border rounded-[4px] px-4 py-3 flex justify-between items-center bg-card ${errors.reason ? 'border-destructive border-2' : 'border-border'}`}
          >
            <span className={`text-sm ${reason ? 'text-foreground' : 'text-muted-foreground'}`}>
              {REASONS.find(r => r.id === reason)?.label || 'Selecione o motivo'}
            </span>
            <div className="flex items-center gap-2">
              {errors.reason && <ErrorOutlineIcon className="text-destructive" sx={{ fontSize: 20 }} />}
              <KeyboardArrowDownIcon className="text-muted-foreground" />
            </div>
          </button>
          {errors.reason && <p className="text-xs text-destructive font-medium">{errors.reason}</p>}

          {/* Dropdown Menu */}
          {showReasonDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border/60 rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
              {REASONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => handleSelectReason(r.id)}
                  className="w-full text-left px-4 py-3 hover:bg-muted/20 text-sm text-foreground border-b border-text-lighten-3 last:border-0"
                >
                  {r.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Box - Approval Flow */}
        <div className="bg-[#ebf3fc] flex gap-[8px] items-start p-[16px] rounded-[4px] w-full">
          <div className="shrink-0 text-[#1166CC]">
            <InfoIcon color="inherit" />
          </div>
          <div className="flex flex-col gap-[4px] text-foreground">
            <p className="font-semibold text-[16px] leading-[24px]">
              Fluxo de aprovação
            </p>
            <p className="text-[14px] leading-[20px]">
              Sua solicitação será enviada ao gestor para aprovação. Acompanhe o status no espelho detalhado: <span className="font-semibold text-[#FFAA00]">Amarelo</span> (pendente), <span className="font-semibold text-[#22aa44]">Verde</span> (aprovada) ou <span className="font-semibold text-destructive">Vermelho</span> (recusada).
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* Footer - Fixed Action Button */}
      <div className="shrink-0 px-6 pt-[16px] pb-[24px] bg-[var(--surface-elevated)] border-t border-text-lighten-3 transition-colors z-20">
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-primary-foreground rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
        >
          Enviar solicitação
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                 </div>
                 
                 <div className="space-y-2">
                   <h3 className="text-xl font-semibold text-foreground leading-tight">Solicitação enviada com sucesso</h3>
                   <p className="text-sm text-muted-foreground">Confira o resultado no espelho detalhado.</p>
                 </div>
               </div>
             </div>
             
             <div className="p-4 pt-2 flex gap-4 border-t border-text-lighten-3">
               <button 
                 onClick={() => {
                   setShowSuccessModal(false);
                   onBack();
                 }}
                 className="flex-1 border-2 border-primary text-primary py-2 rounded-[4px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors flex items-center justify-center"
               >
                 Ver espelho
               </button>
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
