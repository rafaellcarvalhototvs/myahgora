import { useState } from 'react';
import { AhgoraInput } from '../AhgoraInput';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import TimerIcon from '@mui/icons-material/Timer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import svgPaths from '../../../../imports/svg-tfeu5j8sdy';

interface DailyExceptionScreenProps {
  onBack: () => void;
}

type ExceptionType = 'exceptional-access' | 'extension' | 'convert-absence' | null;

export function DailyExceptionScreen({ onBack }: DailyExceptionScreenProps) {
  const [exceptionType, setExceptionType] = useState<ExceptionType>(null);
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    minutes: '',
    justification: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (exceptionType === 'exceptional-access') {
      if (!formData.date) newErrors.date = 'Data obrigatória.';
      if (!formData.startTime) newErrors.startTime = 'Hora inicial obrigatória.';
      if (!formData.endTime) newErrors.endTime = 'Hora final obrigatória.';
      if (!formData.justification) newErrors.justification = 'Justificativa obrigatória.';
    } else if (exceptionType === 'extension') {
      if (!formData.minutes) newErrors.minutes = 'Minutos obrigatórios.';
      if (!formData.justification) newErrors.justification = 'Justificativa obrigatória.';
    } else if (exceptionType === 'convert-absence') {
      if (!formData.date) newErrors.date = 'Data obrigatória.';
      if (!formData.justification) newErrors.justification = 'Justificativa obrigatória.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
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

  const handleTypeSelect = (type: ExceptionType) => {
    setExceptionType(type);
    setFormData({
      date: '',
      startTime: '',
      endTime: '',
      minutes: '',
      justification: ''
    });
    setErrors({});
  };

  const handleBack = () => {
    if (exceptionType) {
      // Se está em um formulário, volta para a seleção
      setExceptionType(null);
      setFormData({
        date: '',
        startTime: '',
        endTime: '',
        minutes: '',
        justification: ''
      });
      setErrors({});
    } else {
      // Se está na tela de seleção, fecha completamente
      onBack();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-background flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen">
      <div className="w-full max-w-md bg-background h-full relative shadow-2xl dark:shadow-none flex flex-col transition-colors">
        {/* Header */}
        <div className="bg-primary px-6 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] z-10 relative">
          <button onClick={handleBack} className="text-white p-1 mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
            </svg>
          </button>
          <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">
            {exceptionType === 'exceptional-access' && 'Acesso Excepcional'}
            {exceptionType === 'extension' && 'Extensão de Jornada'}
            {exceptionType === 'convert-absence' && 'Converter Ausência'}
            {!exceptionType && 'Exceção diária'}
          </h1>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto w-full bg-background relative scroll-smooth transition-colors">
          <div className="p-6 pb-[40px] flex flex-col gap-6 w-full min-h-full bg-background transition-colors">
            {/* Instructional Text */}
            {!exceptionType && (
              <>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-foreground mb-6">
                    Selecione o tipo de exceção que você precisa solicitar. Todas as solicitações requerem aprovação do gestor.
                  </p>
                  <p className="text-sm text-muted-foreground m-[0px]">Escolha uma das opções abaixo:</p>
                </div>

                <div className="h-px bg-border/60 w-full shrink-0" />

                {/* Exception Type Selection */}
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => handleTypeSelect('exceptional-access')}
                    className="border-2 border-primary bg-white rounded-[8px] p-4 hover:bg-primary/5 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CalendarTodayIcon className="text-primary" fontSize="small" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-base mb-1">Acesso Excepcional (Smartgate)</h3>
                        <p className="text-sm text-muted-foreground">Para trabalhar em dias sem expediente previsto, como folgas ou DSR.</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleTypeSelect('extension')}
                    className="border-2 border-primary bg-white rounded-[8px] p-4 hover:bg-primary/5 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <TimerIcon className="text-primary" fontSize="small" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-base mb-1">Extensão de Jornada (Smartgate)</h3>
                        <p className="text-sm text-muted-foreground">Para solicitar minutos extras durante sua jornada antes que o sistema bloqueie o acesso.</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleTypeSelect('convert-absence')}
                    className="border-2 border-primary bg-white rounded-[8px] p-4 hover:bg-primary/5 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <AccountBalanceWalletIcon className="text-primary" fontSize="small" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-base mb-1">Converter Ausência (Smartgate)</h3>
                        <p className="text-sm text-muted-foreground">Para converter uma ausência em horas trabalhadas.</p>
                      </div>
                    </div>
                  </button>
                </div>
              </>
            )}

            {/* Exceptional Access Form */}
            {exceptionType === 'exceptional-access' && (
              <>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-foreground mb-6">
                    Solicite acesso em dias sem expediente previsto. Se precisar de mais de um dia, faça solicitações separadas.
                  </p>
                  <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios.</p>
                </div>

                <div className="h-px bg-border/60 w-full shrink-0" />

                {/* Date Input */}
                <AhgoraInput
                  label="Data"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  startIcon={<CalendarTodayIcon className="text-muted-foreground" fontSize="small" />}
                  endIcon={errors.date ? <ErrorOutlineIcon className="text-destructive" fontSize="small" /> : null}
                  error={!!errors.date}
                  helperText={errors.date}
                  containerClassName="space-y-2"
                />

                {/* Start Time */}
                <AhgoraInput
                  label="Hora inicial"
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => handleChange('startTime', e.target.value)}
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
                  startIcon={<AccessTimeIcon className="text-muted-foreground" fontSize="small" />}
                  endIcon={errors.endTime ? <ErrorOutlineIcon className="text-destructive" fontSize="small" /> : null}
                  error={!!errors.endTime}
                  helperText={errors.endTime}
                  containerClassName="space-y-2"
                />

                {/* Justification */}
                <div className="space-y-2">
                  <AhgoraInput
                    label="Justificativa"
                    multiline
                    value={formData.justification}
                    onChange={(e) => handleChange('justification', e.target.value)}
                    placeholder="Exemplo: preciso finalizar relatório urgente no fim de semana"
                    maxLength={250}
                    error={!!errors.justification}
                    helperText={errors.justification}
                  />
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">Máx. 250 caracteres</span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-[#ebf3fc] flex gap-[8px] items-start p-[16px] rounded-[4px] w-full">
                  <div className="shrink-0 text-[#1166CC]">
                    <InfoIcon color="inherit" />
                  </div>
                  <div className="flex flex-col gap-[4px] text-foreground">
                    <p className="font-semibold text-[16px] leading-[24px]">
                      Aprovação obrigatória e trilha de auditoria
                    </p>
                    <p className="text-[14px] leading-[20px]">
                      Sua solicitação será enviada ao gestor via PontoWeb ou Ahgora Leader. A justificativa é obrigatória para conformidade legal. Acompanhe o status: <span className="font-semibold text-[#e6a840]">Amarelo</span> (pendente), <span className="font-semibold text-[#22aa44]">Verde</span> (aprovada) ou <span className="font-semibold text-destructive">Vermelho</span> (recusada).
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Extension Form */}
            {exceptionType === 'extension' && (
              <>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-foreground mb-6">
                    Solicite minutos extras para concluir suas atividades antes que o sistema bloqueie o acesso.
                  </p>
                  <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios.</p>
                </div>

                <div className="h-px bg-border/60 w-full shrink-0" />

                {/* Current Limit Info */}
                <div className="bg-[#f5f5fa] border border-muted rounded-[4px] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Limite disponível hoje</span>
                    <span className="text-base font-semibold text-primary">120 minutos</span>
                  </div>
                </div>

                {/* Minutes Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground block">Minutos solicitados</label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={formData.minutes}
                      onChange={(e) => handleChange('minutes', e.target.value)}
                      className={`w-full border rounded-[4px] px-4 py-3 text-sm ${
                        errors.minutes ? 'border-destructive border-2' : 'border-border'
                      }`}
                      placeholder="Ex: 30"
                    />
                  </div>
                  {errors.minutes && <p className="text-xs text-destructive font-medium">{errors.minutes}</p>}
                </div>

                {/* Justification */}
                <div className="space-y-2">
                  <AhgoraInput
                    label="Justificativa"
                    multiline
                    value={formData.justification}
                    onChange={(e) => handleChange('justification', e.target.value)}
                    placeholder="Exemplo: preciso de mais tempo para finalizar a análise de dados"
                    maxLength={250}
                    error={!!errors.justification}
                    helperText={errors.justification}
                  />
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">Máx. 250 caracteres</span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-[#ebf3fc] flex gap-[8px] items-start p-[16px] rounded-[4px] w-full">
                  <div className="shrink-0 text-[#1166CC]">
                    <InfoIcon color="inherit" />
                  </div>
                  <div className="flex flex-col gap-[4px] text-foreground">
                    <p className="font-semibold text-[16px] leading-[24px]">
                      Consumo imediato e aprovação
                    </p>
                    <p className="text-[14px] leading-[20px]">
                      O limite de minutos é consumido a partir desta solicitação, mesmo antes da aprovação. O gestor decidirá via PontoWeb ou Ahgora Leader. Acompanhe o status: <span className="font-semibold text-[#e6a840]">Amarelo</span> (pendente), <span className="font-semibold text-[#22aa44]">Verde</span> (aprovada) ou <span className="font-semibold text-destructive">Vermelho</span> (recusada).
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Convert Absence Form */}
            {exceptionType === 'convert-absence' && (
              <>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-foreground mb-6">
                    Solicite a conversão de uma ausência em horas trabalhadas.
                  </p>
                  <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios.</p>
                </div>

                <div className="h-px bg-border/60 w-full shrink-0" />

                {/* Date Input */}
                <AhgoraInput
                  label="Data"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  startIcon={<CalendarTodayIcon className="text-muted-foreground" fontSize="small" />}
                  endIcon={errors.date ? <ErrorOutlineIcon className="text-destructive" fontSize="small" /> : null}
                  error={!!errors.date}
                  helperText={errors.date}
                  containerClassName="space-y-2"
                />

                {/* Justification */}
                <div className="space-y-2">
                  <AhgoraInput
                    label="Justificativa"
                    multiline
                    value={formData.justification}
                    onChange={(e) => handleChange('justification', e.target.value)}
                    placeholder="Exemplo: preciso converter ausência em horas trabalhadas"
                    maxLength={250}
                    error={!!errors.justification}
                    helperText={errors.justification}
                  />
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">Máx. 250 caracteres</span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-[#ebf3fc] flex gap-[8px] items-start p-[16px] rounded-[4px] w-full">
                  <div className="shrink-0 text-[#1166CC]">
                    <InfoIcon color="inherit" />
                  </div>
                  <div className="flex flex-col gap-[4px] text-foreground">
                    <p className="font-semibold text-[16px] leading-[24px]">
                      Aprovação obrigatória e trilha de auditoria
                    </p>
                    <p className="text-[14px] leading-[20px]">
                      Sua solicitação será enviada ao gestor via PontoWeb ou Ahgora Leader. A justificativa é obrigatória para conformidade legal. Acompanhe o status: <span className="font-semibold text-[#e6a840]">Amarelo</span> (pendente), <span className="font-semibold text-[#22aa44]">Verde</span> (aprovada) ou <span className="font-semibold text-destructive">Vermelho</span> (recusada).
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer - Fixed Action Buttons */}
        {exceptionType && (
          <div className="shrink-0 px-6 pt-[16px] pb-[24px] bg-[var(--surface-elevated)] border-t border-border/70 transition-colors z-20 space-y-3">
            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-primary-foreground rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
            >
              Enviar solicitação
            </button>
            <button
              onClick={() => setExceptionType(null)}
              className="w-full border-2 border-primary text-primary rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors flex items-center justify-center"
            >
              Voltar
            </button>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-card border border-border/70 w-full max-w-xs rounded-[16px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="p-6 pb-0 flex flex-col items-center text-center">
                <div className="w-[64px] h-[64px] bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon sx={{ color: '#22aa44', fontSize: 32 }} />
                </div>
                
                <h3 className="text-[18px] font-semibold text-foreground mb-2">Solicitação enviada com sucesso</h3>
                <p className="text-[14px] text-muted-foreground mb-6">
                  {exceptionType === 'exceptional-access' 
                    ? 'Aguarde a aprovação do gestor para ter acesso no dia solicitado.'
                    : 'Os minutos foram consumidos do limite diário. Aguarde aprovação do gestor.'}
                </p>
              </div>
              
              <div className="p-4 pt-0 border-t border-border/60 bg-muted/20 dark:bg-muted/10 flex gap-3">
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