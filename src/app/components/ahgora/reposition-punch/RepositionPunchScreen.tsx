import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { AhgoraInput } from '../AhgoraInput';

interface Punch {
  id: string;
  time: string;
}

const PUNCHES: Punch[] = [
  { id: '1', time: '12:00' },
  { id: '2', time: '13:00' },
  { id: '3', time: '18:01' },
];

const DATES = [
  { id: '06-set', label: '06 de Set, 2025' },
  { id: '07-set', label: '07 de Set, 2025' },
  { id: '08-set', label: '08 de Set, 2025' },
];

interface RepositionPunchScreenProps {
  onBack: () => void;
}

export function RepositionPunchScreen({ onBack }: RepositionPunchScreenProps) {
  const [selectedPunchId, setSelectedPunchId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [justification, setJustification] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedPunchId) newErrors.punch = 'Seleção obrigatória.';
    if (!selectedDate) newErrors.date = 'Dia da batida obrigatório.';
    if (!newTime) newErrors.time = 'Novo horário obrigatório.';
    if (!justification) newErrors.justification = 'Justificativa obrigatória.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccessModal(true);
    }
  };

  const handleSelectDate = (value: string) => {
    setSelectedDate(value);
    setShowDateDropdown(false);
    setErrors({ ...errors, date: '' });
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
        <h1 className="text-primary-foreground font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Reposicionar batida</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto w-full bg-background relative scroll-smooth transition-colors">
        <div className="p-6 pb-[40px] flex flex-col gap-6 w-full min-h-full bg-background transition-colors">
        {/* Info Text */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Use esta tela para corrigir o horário de uma batida registrada incorretamente, mantendo a rastreabilidade e conformidade legal.</p>
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
                      <div className="absolute -top-1 -right-1 z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                        <CheckIcon sx={{ fontSize: 14, color: 'currentColor' }} />
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

        {/* Date Selection */}
        <div className="space-y-2 relative">
          <label className="text-sm font-semibold text-foreground block">Dia da batida</label>
          <button
            onClick={() => setShowDateDropdown(!showDateDropdown)}
            className={`w-full border rounded-[4px] px-4 py-3 flex justify-between items-center bg-card ${errors.date ? 'border-destructive border-2' : 'border-border'}`}
          >
            <span className={`text-sm ${selectedDate ? 'text-foreground' : 'text-muted-foreground'}`}>
              {DATES.find(d => d.id === selectedDate)?.label || 'Selecione o dia'}
            </span>
            <div className="flex items-center gap-2">
              {errors.date && <ErrorOutlineIcon className="text-destructive" sx={{ fontSize: 20 }} />}
              <KeyboardArrowDownIcon className="text-muted-foreground" />
            </div>
          </button>
          {errors.date && <p className="text-xs text-destructive font-medium">{errors.date}</p>}

          {/* Dropdown Menu */}
          {showDateDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border/60 rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
              {DATES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => handleSelectDate(d.id)}
                  className="w-full text-left px-4 py-3 hover:bg-muted/20 text-sm text-foreground border-b border-text-lighten-3 last:border-0"
                >
                  {d.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* New Time Input */}
        <div className="space-y-2">
          <AhgoraInput
            label="Novo horário"
            type="time"
            value={newTime}
            onChange={(e) => {
              setNewTime(e.target.value);
              if (errors.time) setErrors({ ...errors, time: '' });
            }}
            startIcon={<AccessTimeIcon className="text-foreground" fontSize="small" />}
            error={!!errors.time}
            helperText={errors.time}
          />
        </div>

        {/* Justification Input */}
        <div className="space-y-2">
          <AhgoraInput
            label="Justificativa"
            multiline
            value={justification}
            onChange={(e) => {
              setJustification(e.target.value);
              if (errors.justification) setErrors({ ...errors, justification: '' });
            }}
            placeholder="Exemplo: Registrei a batida no horário errado por engano"
            maxLength={250}
            error={!!errors.justification}
            helperText={errors.justification}
          />
          <div className="flex justify-end">
            <span className="text-xs text-foreground">Máx. 250 caracteres</span>
          </div>
        </div>

        {/* Info Box - Approval Flow and Data Integrity */}
        
        </div>
      </div>

      {/* Footer - Fixed Action Button */}
      <div className="shrink-0 px-6 pt-[16px] pb-[24px] bg-[var(--surface-elevated)] border-t border-text-lighten-3 transition-colors z-20">
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-primary-foreground rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
        >
          Reposicionar batida
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border/70 w-full max-w-xs rounded-[16px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
             <div className="p-6 pb-0 flex flex-col items-center text-center">
               <div className="w-[64px] h-[64px] bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon sx={{ color: '#22aa44', fontSize: 32 }} />
               </div>
               
               <h3 className="text-[18px] font-semibold text-foreground mb-2">Solicitação enviada com sucesso</h3>
               <p className="text-[14px] text-muted-foreground mb-6">Aguarde a aprovação do gestor. Acompanhe o status no espelho detalhado.</p>
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
                 className="flex-1 bg-primary text-primary-foreground py-2 rounded-[4px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 flex items-center justify-center shadow-sm"
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
