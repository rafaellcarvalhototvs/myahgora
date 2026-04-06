import { useState } from 'react';
import { AhgoraInput } from '../AhgoraInput';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

interface ReplacePunchScreenProps {
  onBack: () => void;
}

export function ReplacePunchScreen({ onBack }: ReplacePunchScreenProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>('success'); // Initial state check
  // Actually start at step 1
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 'success'>('success'); 
  // Let's reset to 1
  // But wait, user provided different steps as separate screens. I'll implement a wizard flow.

  // State
  const [selectedPunch, setSelectedPunch] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [newTime, setNewTime] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset to step 1 on mount (actually just use useState(1))
  const [viewState, setViewState] = useState<1 | 2 | 3 | 'success'>(1);

  const handleStep1Submit = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedPunch) newErrors.punch = 'Selecione uma batida.';
    if (!reason.trim()) newErrors.reason = 'Motivo obrigatório.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setViewState(2);
    }
  };

  const handleStep2Submit = () => {
    if (!newTime) {
      setErrors({ newTime: 'Horário obrigatório.' });
      return;
    }
    setViewState(3);
  };

  const handleFinalSubmit = () => {
    setViewState('success');
  };

  const renderStep1 = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-2 sticky top-0 z-10 shadow-sm shrink-0 h-[62px]">
        <button onClick={onBack} className="text-white p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Substituir batida</h1>
      </div>

      <div className="p-6 flex flex-col gap-6 w-full flex-1 max-w-md mx-auto overflow-y-auto">
        {/* Info Text */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Selecione a batida que deseja corrigir e informe o motivo da substituição.</p>
          <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
        </div>

        <div className="h-px bg-gray-200 w-full shrink-0" />

        {/* Date Field (Read-only) */}
        <div className="border border-[#d5d5dc] rounded-[4px] px-4 py-3 bg-white">
          <p className="text-base font-semibold text-[#2a2a33]">06 de Set, 2025</p>
        </div>

        {/* Punch Selection */}
        <div className="border border-[#d5d5dc] rounded-[4px] p-4 bg-white space-y-4">
          <label className="text-sm font-semibold text-[#2a2a33] block">Selecione a batida pré-existente</label>
          <div className="flex gap-3 flex-wrap">
            {['12:00', '13:00', '18:01'].map((time) => (
              <button
                key={time}
                onClick={() => {
                  setSelectedPunch(time);
                  if (errors.punch) setErrors({ ...errors, punch: '' });
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm border transition-colors ${
                  selectedPunch === time
                    ? 'bg-[#eaf8ff] border-primary text-primary font-semibold'
                    : 'bg-white border-[#c2c2cd] text-[#3a3a45] hover:bg-gray-50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          {errors.punch && <p className="text-xs text-destructive font-medium">{errors.punch}</p>}
        </div>

        {/* Reason Field */}
        <div className="space-y-2">
           <AhgoraInput
              label="Motivo da substituição"
              multiline
              value={reason}
              onChange={(e) => {
                 setReason(e.target.value);
                 if (errors.reason) setErrors({ ...errors, reason: '' });
              }}
              placeholder="Digite o motivo da substituição."
              maxLength={250}
              error={!!errors.reason}
              helperText={errors.reason}
           />
           <div className="flex justify-end">
             <span className="text-xs text-[#2a2a33]">Máx. 250 caracteres</span>
           </div>
        </div>

        {/* Next Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white border-t border-[#DDDDDD] z-20 w-full max-w-md mx-auto space-y-3">
          <button
            onClick={handleStep1Submit}
            className="w-full bg-primary text-primary-foreground rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
          >
            Continuar solicitação
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-2 sticky top-0 z-10 shadow-sm shrink-0 h-[62px]">
        <button onClick={() => setViewState(1)} className="text-white p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Selecione novo horário</h1>
      </div>

      <div className="p-6 flex flex-col gap-6 w-full flex-1 max-w-md mx-auto">
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Defina um novo horário para substituir a batida automática selecionada.</p>
          <p className="text-sm text-muted-foreground mb-6">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
        </div>

        {/* Time Input */}
        <div className="space-y-2 mt-4">
          <label className="text-sm font-semibold text-[#3a3a45] block">Horário</label>
          <div 
            onClick={() => setShowTimePicker(true)}
            className={`border rounded-[4px] px-4 py-3 flex items-center gap-2 bg-white cursor-pointer hover:border-primary transition-colors ${errors.newTime ? 'border-destructive border-2' : 'border-[#78788f]'}`}
          >
            <AccessTimeIcon className="text-[#78788f]" />
            <span className={`text-sm flex-1 ${newTime ? 'text-[#3a3a45]' : 'text-[#58586b]'}`}>
              {newTime || 'Selecione um horário'}
            </span>
          </div>
          {errors.newTime && <p className="text-xs text-destructive font-medium">{errors.newTime}</p>}
        </div>

        {/* Next Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white border-t border-[#DDDDDD] z-20 w-full max-w-md mx-auto space-y-3">
          <button
            onClick={handleStep2Submit}
            className="w-full bg-primary text-primary-foreground rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
          >
            Concluir
          </button>
        </div>
      </div>

      {/* Time Picker Modal (Mock) */}
      {showTimePicker && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60]" onClick={() => setShowTimePicker(false)} />
          <div className="fixed bottom-0 left-0 right-0 sm:max-w-md sm:mx-auto bg-white z-[70] rounded-t-[8px] overflow-hidden animate-in slide-in-from-bottom duration-300 shadow-xl font-['Open_Sans']">
            {/* Header + Body */}
            <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
              {/* Header */}
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                    {/* Blue Icon Circle */}
                    <div className="bg-primary content-stretch flex items-center justify-center p-[8px] relative rounded-[56px] shrink-0 size-[42px]">
                      <AccessTimeIcon sx={{ color: 'white', fontSize: 24 }} />
                    </div>
                    {/* Close Button */}
                    <button 
                      onClick={() => setShowTimePicker(false)}
                      className="content-stretch flex flex-col items-center relative shrink-0 p-1 hover:bg-gray-100 rounded-full"
                    >
                      <CloseIcon sx={{ color: '#3A3A45', fontSize: 20 }} />
                    </button>
                  </div>
                </div>
                {/* Title */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Open_Sans'] font-semibold leading-[30px] relative shrink-0 text-[#3a3a45] text-[20px] tracking-[0.03px] w-full whitespace-pre-wrap">
                    Selecionar Horário
                  </p>
                </div>
                {/* Description */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Open_Sans'] leading-[20px] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.028px] w-full whitespace-pre-wrap">
                    Defina o horário da nova batida.
                  </p>
                </div>
              </div>

              {/* Content: Time Input */}
              <div className="w-full">
                <AhgoraInput
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  containerClassName="mb-0"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[rgba(42,42,51,0.12)] border-solid border-t inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center justify-end p-[24px] relative w-full gap-3">
                 <button 
                   onClick={() => {
                     setNewTime('');
                     setShowTimePicker(false);
                   }}
                   className="flex-1 border-2 border-primary text-primary rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors flex items-center justify-center"
                 >
                   Cancelar
                 </button>
                 <button 
                   onClick={() => setShowTimePicker(false)}
                   className="flex-1 bg-primary text-white rounded-[4px] h-[40px] font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors flex items-center justify-center shadow-sm"
                 >
                   Selecionar
                 </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-2 sticky top-0 z-10 shadow-sm shrink-0 h-[62px]">
        <button onClick={() => setViewState(2)} className="text-white p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Revise e confirme a alteração</h1>
      </div>

      <div className="p-6 flex flex-col gap-6 w-full flex-1 max-w-md mx-auto">
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Revise as alterações realizadas, comparando a batida original com a batida substituída.</p>
          <p className="text-sm text-muted-foreground mb-6">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
        </div>

        {/* Comparison Card */}
        <div className="border border-[rgba(42,42,51,0.08)] rounded-[8px] bg-white mt-4 p-6">
          <div className="flex items-center justify-between gap-4">
            
            {/* Old Punch */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <span className="text-[12px] font-semibold text-[#78788f] tracking-[0.5px]">Anterior</span>
              <div className="w-[64px] h-[64px] rounded-full border border-[#e7e7eb] flex items-center justify-center bg-[#f9f9fb]">
                <span className="text-[16px] text-[#78788f] font-medium line-through decoration-[#ef4444]/40">{selectedPunch}</span>
              </div>
            </div>

            {/* Icon */}
            <div className="flex items-center justify-center pt-5 text-[#9ea1b9]">
               <SwapHorizIcon />
            </div>

            {/* New Punch */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <span className="text-[12px] font-bold text-primary tracking-[0.5px]">Novo</span>
              <div className="w-[64px] h-[64px] rounded-full border-2 border-primary bg-[#eaf8ff] flex items-center justify-center relative shadow-sm">
                <div className="absolute -top-1.5 -right-1.5 bg-primary rounded-full w-[22px] h-[22px] flex items-center justify-center text-white border-2 border-white shadow-sm">
                  <CheckIcon style={{ fontSize: 12 }} />
                </div>
                <span className="text-[16px] font-bold text-[#2a2a33]">{newTime}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="h-[70px]" />
        <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white border-t border-[#DDDDDD] z-20 w-full max-w-md mx-auto space-y-3">
          <button
            onClick={handleFinalSubmit}
            className="w-full bg-primary text-primary-foreground rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
          >
            Confirmar alteração
          </button>
          <button
            onClick={() => setViewState(1)}
            className="w-full border-2 border-primary text-primary rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors flex items-center justify-center"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="flex flex-col h-full bg-white animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 sticky top-0 z-10 shrink-0">
         {/* Empty header or custom one? Design shows white header with status bar only */}
      </div>

      <div className="p-6 flex flex-col items-center justify-center flex-1 w-full max-w-md mx-auto text-center">
        <div className="w-[130px] h-[130px] bg-primary/10 rounded-full flex items-center justify-center mb-8 relative">
          <div className="w-[90px] h-[90px] bg-primary rounded-full flex items-center justify-center">
             <CheckIcon className="text-white" style={{ fontSize: 40 }} />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-[#2a2a33] mb-2">Substituição solicitada com sucesso!</h2>
        
        <p className="text-sm text-[#78788f] max-w-[280px]">
          Aguardando aprovação do responsável. O status da solicitação será atualizado assim que houver uma resposta.
        </p>

        <div className="h-[70px]" />
        <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white border-t border-[#DDDDDD] z-20 w-full max-w-md mx-auto space-y-3">
           <button
            onClick={onBack}
            className="w-full bg-primary text-primary-foreground rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
          >
            Fechar
          </button>
           <button
            onClick={onBack}
            className="w-full border-2 border-primary text-primary rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
          >
            <CalendarTodayIcon fontSize="small" />
            Acessar espelho de ponto
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#f0f0f5] flex justify-center font-['Open_Sans']">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl pb-20 flex flex-col h-full">
        {viewState === 1 && renderStep1()}
        {viewState === 2 && renderStep2()}
        {viewState === 3 && renderStep3()}
        {viewState === 'success' && renderSuccess()}
      </div>
    </div>
  );
}