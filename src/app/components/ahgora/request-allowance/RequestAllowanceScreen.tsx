import { useState, useRef } from 'react';
import { SelectReasonScreen } from './SelectReasonScreen';
import { AhgoraInput } from '../AhgoraInput';
import { Checkbox } from '../../ui/checkbox';
import { AttachmentBottomSheet } from '../AttachmentBottomSheet';
import svgPathsInfo from "../../../../imports/svg-vy3cg0ui8h";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

interface Reason {
  id: string;
  label: string;
  category: string;
}

interface RequestAllowanceScreenProps {
  onBack: () => void;
}

export function RequestAllowanceScreen({ onBack }: RequestAllowanceScreenProps) {
  const [currentView, setCurrentView] = useState<'form' | 'reason-selection'>('form');
  const [selectedReason, setSelectedReason] = useState<Reason | null>(null);
  const [periodType, setPeriodType] = useState<'current-day' | 'range'>('current-day');
  const [isFullDay, setIsFullDay] = useState(false);
  const [formData, setFormData] = useState({
    observation: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    crm: '',
    cid: ''
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFileSelect = (source: string) => {
    // Mock file selection
    const newFile = new File(["dummy content"], `anexo_${Date.now()}.jpg`, { type: "image/jpeg" });
    setAttachments([...attachments, newFile]);
    setShowAttachmentModal(false);
  };

  const handleReasonSelect = (reason: Reason) => {
    setSelectedReason(reason);
    setCurrentView('form');
  };

  const handleBackFromReason = () => {
    setCurrentView('form');
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedReason) newErrors.reason = 'Motivo é obrigatório.';
    if (!formData.observation && selectedReason?.id !== 'med') newErrors.observation = 'Observação obrigatória.'; // Example logic
    // Add validation logic for dates/times based on periodType

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShowSuccessModal(true);
      onBack();
    }
  };

  if (currentView === 'reason-selection') {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden bg-[#f0f0f5] flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen">
        <div className="w-full max-w-md bg-white h-full relative shadow-2xl flex flex-col">
          <SelectReasonScreen onBack={handleBackFromReason} onSelect={handleReasonSelect} />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f0f0f5] flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen">
      <div className="w-full max-w-md bg-white h-full relative shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-primary px-6 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] z-10 relative">
        <button onClick={onBack} className="text-white p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Solicitar abono</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto w-full bg-white relative scroll-smooth">
        <div className="p-6 pb-[40px] flex flex-col gap-6 w-full min-h-full bg-white">
        {/* Info Text */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-6">Use esta tela para solicitar abono de ausências, atrasos ou saídas antecipadas. A solicitação será enviada para aprovação do seu gestor.</p>
          <p className="text-sm text-muted-foreground m-[0px]">Todos os campos são obrigatórios, exceto quando indicado como opcional.</p>
        </div>

        <div className="h-px bg-gray-200 w-full shrink-0" />

        {/* Reason Selector */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#2a2a33] block">Motivo</label>
          <button
            onClick={() => setCurrentView('reason-selection')}
            className={`w-full border rounded-md px-4 py-3 flex justify-between items-center bg-white ${errors.reason ? 'border-destructive' : 'border-[#78788f]'}`}
          >
            <span className={`text-sm ${selectedReason ? 'text-[#2a2a33]' : 'text-[#58586b]'}`}>
              {selectedReason?.label || 'Selecione o motivo'}
            </span>
            <KeyboardArrowDownIcon className="text-[#58586b]" />
          </button>
          {errors.reason && <p className="text-xs text-destructive mt-1">{errors.reason}</p>}
        </div>

        {/* Dynamic Fields based on Reason */}
        {selectedReason?.id === 'med' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 className="text-sm font-bold text-[#2a2a33]">Dados médicos (opcional)</h3>
            
            <AhgoraInput
              label="CRM"
              value={formData.crm}
              onChange={(e) => setFormData({...formData, crm: e.target.value})}
              placeholder="Ex.: 123456/SP"
              helperText="Conselho Regional de Medicina"
            />
            
            <AhgoraInput
              label="Código CID"
              value={formData.cid}
              onChange={(e) => setFormData({...formData, cid: e.target.value})}
              placeholder="Ex.: J06.9"
              helperText="Classificação Internacional de Doenças"
            />
          </div>
        )}

        {/* Period Selection (Visible if reason selected) */}
        {selectedReason && (
          <div className="border border-[#e7e7eb] rounded-[4px] p-6 space-y-6 animate-in fade-in duration-500">
            {/* Period Type Radio */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-[#58586b]">Período do abono</h3>
              <div className="flex gap-4 items-center mt-2">
                <button 
                  className="flex items-center gap-2"
                  onClick={() => setPeriodType('current-day')}
                >
                  {periodType === 'current-day' ? 
                    <RadioButtonCheckedIcon className="text-primary" sx={{ fontSize: 24 }} /> : 
                    <RadioButtonUncheckedIcon className="text-[#3a3a45]" sx={{ fontSize: 24 }} />
                  }
                  <span className="text-sm text-[#2a2a33]">Dia atual ({new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })})</span>
                </button>
                
                <button 
                  className="flex items-center gap-2"
                  onClick={() => setPeriodType('range')}
                >
                  {periodType === 'range' ? 
                    <RadioButtonCheckedIcon className="text-primary" sx={{ fontSize: 24 }} /> : 
                    <RadioButtonUncheckedIcon className="text-[#3a3a45]" sx={{ fontSize: 24 }} />
                  }
                  <span className="text-sm text-[#2a2a33]">Período de dias</span>
                </button>
              </div>
            </div>

            {/* Full Day Checkbox */}
            <div className="flex items-center gap-2">
              <Checkbox 
                id="is-full-day"
                checked={isFullDay}
                onCheckedChange={(checked) => setIsFullDay(!!checked)}
              />
              <label htmlFor="is-full-day" className="text-sm text-[#2a2a33] cursor-pointer select-none">
                Solicitar o abono por dia completo
              </label>
            </div>

            {/* Date/Time Inputs */}
            <div className="space-y-4 pt-2">
              {/* Start Date/Time */}
              <AhgoraInput
                label={periodType === 'range' ? 'Data inicial' : 'Hora inicial'}
                type={periodType === 'range' ? "date" : "time"}
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                placeholder="Selecione"
                startIcon={periodType === 'range' ? <CalendarTodayIcon className="text-[#3a3a45]" fontSize="small" /> : <AccessTimeIcon className="text-[#3a3a45]" fontSize="small" />}
                endIcon={errors.startDate ? <ErrorOutlineIcon className="text-destructive" fontSize="small" /> : null}
                error={!!errors.startDate}
              />

               {/* End Date/Time */}
               <AhgoraInput
                label={periodType === 'range' ? 'Data final' : 'Hora final'}
                type={periodType === 'range' ? "date" : "time"}
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                placeholder="Selecione"
                startIcon={periodType === 'range' ? <CalendarTodayIcon className="text-[#3a3a45]" fontSize="small" /> : <AccessTimeIcon className="text-[#3a3a45]" fontSize="small" />}
                endIcon={errors.endDate ? <ErrorOutlineIcon className="text-destructive" fontSize="small" /> : null}
                error={!!errors.endDate}
              />
            </div>

            {/* Info Box */}
            <div className="bg-[#ebf3fc] content-stretch flex gap-[8px] items-start overflow-clip p-[16px] relative rounded-[4px] w-full" data-name="Alert">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / Material / info">
                <div className="-translate-y-1/2 absolute h-[20px] left-[8.33%] right-[8.33%] top-1/2" data-name="vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPathsInfo.p15dc4900} fill="var(--fill-0, #1166CC)" id="vector" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative text-[#3a3a45] whitespace-pre-wrap" data-name="Text">
                <p className="leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.105px] w-full">
                  Você estará solicitando <span className="font-semibold">3 horas</span> de abono.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Observation */}
        <div className="space-y-2">
           <AhgoraInput
              label="Observação"
              multiline
              value={formData.observation}
              onChange={(e) => setFormData({...formData, observation: e.target.value})}
              placeholder={selectedReason ? "Exemplo: a ausência foi devido a uma consulta médica" : "Exemplo: esqueci de marcar entrada"}
              maxLength={250}
              error={!!errors.observation}
              helperText={errors.observation}
           />
           <div className="flex justify-end">
             <span className="text-xs text-[#2a2a33]">Máx. 250 caracteres</span>
           </div>
        </div>

        {/* Attachment Button */}
        <div className="space-y-2">
          <button 
            onClick={() => setShowAttachmentModal(true)}
            className="w-full border-2 border-primary rounded-[4px] py-2 flex items-center justify-center gap-2 text-primary font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/5 transition-colors group"
          >
            <AttachFileIcon fontSize="small" className="transform rotate-45" />
            Adicionar anexo (Opcional)
          </button>
          <p className="text-xs text-center text-[#2a2a33]">Arquivos: PDF, JPG, PNG (máx. 5MB).</p>
        </div>

        {/* File List */}
        {attachments.length > 0 && (
          <div className="flex flex-col w-full mb-4">
            {attachments.map((file, index) => (
              <div key={index} className="relative w-full">
                <div className="flex items-center justify-between pb-[16px] pt-[8px] px-[16px] border-b border-[#d5d5dc] w-full">
                  <span className="text-[#3a3a45] text-[14px] leading-[20px] font-['Open_Sans'] tracking-[0.028px] truncate pr-4">
                    {file.name} ({Math.max(1, Math.round(file.size / 1024))}KB)
                  </span>
                  <button 
                    onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                    className="text-[#3a3a45] hover:text-destructive shrink-0"
                  >
                    <CloseIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Box - Approval Flow */}
        
      </div>
      </div>

      {/* Submit Button */}
      <div className="shrink-0 px-6 pt-[16px] pb-[24px] bg-white border-t border-[#DDDDDD] space-y-[16px] z-20">
          <button 
            onClick={handleSubmit}
            className="w-full bg-primary text-primary-foreground rounded-[4px] py-2 font-semibold text-[14px] leading-[24px] tracking-[0.4px] hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center h-[40px]"
          >
            Enviar solicitação
          </button>
      </div>

      <AttachmentBottomSheet 
        isVisible={showAttachmentModal} 
        onClose={() => setShowAttachmentModal(false)} 
        onSelect={handleFileSelect} 
      />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-xs rounded-[16px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
             <div className="p-6 pb-0 flex flex-col items-center text-center">
               <div className="w-[64px] h-[64px] bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon sx={{ color: '#22aa44', fontSize: 32 }} />
               </div>
               
               <h3 className="text-[18px] font-semibold text-foreground mb-2">Solicitação enviada com sucesso</h3>
               <p className="text-[14px] text-muted-foreground mb-6">Acompanhe o status da sua solicitação no espelho detalhado.</p>
             </div>
             
             <div className="p-4 pt-0 border-t border-gray-100 bg-gray-50/50 flex gap-3">
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
    </div>
  );
}