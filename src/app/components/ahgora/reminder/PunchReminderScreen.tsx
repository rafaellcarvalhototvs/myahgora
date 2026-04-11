import { useState } from 'react';
import { Checkbox } from '../../ui/checkbox';
import { AhgoraInput } from '../AhgoraInput';
import { Switch } from '../../ui/switch';
import { cn } from '../../ui/utils';
import { AhgoraButton } from '../AhgoraButton';

const arrowBackPath = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";

interface PunchReminderScreenProps {
  onBack: () => void;
}

export function PunchReminderScreen({ onBack }: PunchReminderScreenProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [duration, setDuration] = useState('60min');
  const [isRepeat, setIsRepeat] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#f0f0f5] flex justify-center font-['Open_Sans']">
        <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl pb-20 flex flex-col">
            {/* Header */}
            <div className="bg-primary px-6 py-3 flex items-center gap-2 sticky top-0 z-10 shadow-sm h-[62px]">
                <button onClick={onBack} className="text-white p-1 mr-2 cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d={arrowBackPath} />
                    </svg>
                </button>
                <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Lembrete de ponto</h1>
            </div>
            
            {/* Success Banner */}
            {showSuccess && (
                <div className="bg-[#22aa44] w-full py-3 px-6 text-center animate-in slide-in-from-top duration-300 fixed top-0 max-w-md z-20 shadow-md">
                    <p className="text-white font-semibold text-[14px]">Lembrete SALVO com sucesso</p>
                </div>
            )}

            <div className="p-6 flex flex-col flex-1 h-full">
                <div className="mb-6 shrink-0">
                    <p className="text-[14px] text-[#78788f] leading-[22px] tracking-[0.3px]">
                        Siga os passos abaixo para <span className="font-bold">configurar ou editar um lembrete</span> de retorno do intervalo:
                    </p>
                    <ol className="list-decimal pl-5 mt-4 space-y-1 text-[14px] text-[#78788f] font-semibold leading-[22px]">
                        <li>Ative o lembrete.</li>
                        <li>Escolha a duração do intervalo. Ex: 15min.</li>
                        <li>Selecione "Repetir" para receber notificações automáticas.</li>
                    </ol>
                    <p className="mt-4 text-[14px] text-[#78788f] leading-[22px] tracking-[0.3px]">
                        <span className="font-bold">Exemplo</span>: Se você definir 15min, receberá uma notificação 15 minutos após o início do intervalo.
                    </p>
                </div>

                <div className="h-px bg-[#DDDDDD] w-full mb-6 shrink-0" />

                <div 
                    className="flex items-center gap-2 cursor-pointer select-none mb-8 shrink-0 group"
                    onClick={() => setIsEnabled(!isEnabled)}
                >
                    <div className="relative w-6 h-6 flex items-center justify-center shrink-0 transition-transform active:scale-95">
                        {isEnabled ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM10 14.2002L7.40039 11.5996L6 13L10 17L18 9L16.5996 7.59961L10 14.2002Z" fill="#1199DD"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#444444"/>
                            </svg>
                        )}
                    </div>
                    <span className="font-['Open_Sans'] text-[14px] leading-[20px] text-[#3a3a45] tracking-[0.105px]">
                        Ativar lembrete
                    </span>
                </div>

                {isEnabled && (
                    <div className="flex flex-col flex-1 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="shrink-0">
                            <p className="text-[14px] text-[#78788f] mb-2">Defina a duração do intervalo:</p>
                            <div className="flex w-full isolate">
                                {['15min', '60min', '72min', '+Definir'].map((opt, idx, arr) => {
                                    const isSelected = duration === opt;
                                    const isFirst = idx === 0;
                                    const isLast = idx === arr.length - 1;
                                    
                                    return (
                                        <button
                                            key={opt}
                                            onClick={() => setDuration(opt)}
                                            className={cn(
                                                "relative flex-1 py-[8.5px] px-[8px] text-[14px] font-semibold leading-[24px] tracking-[0.4px] transition-all",
                                                "flex items-center justify-center",
                                                // Negative margin to merge borders
                                                "mr-[-1px]",
                                                // Rounded corners
                                                isFirst && "rounded-l-[4px]",
                                                isLast && "rounded-r-[4px]",
                                                // States
                                                isSelected 
                                                    ? "bg-[#0c6d9e] text-[#f4f4f6] z-10 border border-[#0c6d9e]" 
                                                    : "bg-white text-[#3a3a45] border border-[#b6b6c2] hover:bg-gray-50 z-0"
                                            )}
                                        >
                                            {opt}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {duration === '+Definir' && (
                            <AhgoraInput
                            label="Minutos"
                            type="number"
                            defaultValue="240"
                            helperText="Helper textHelper textHelper textHelper text"
                        />
                        )}

                        <div className="flex items-center space-x-3 shrink-0">
                             <Switch 
                                id="repeat-reminder"
                                checked={isRepeat}
                                onCheckedChange={setIsRepeat}
                             />
                             <label 
                                htmlFor="repeat-reminder"
                                className="text-[14px] text-[#58586b] font-normal cursor-pointer select-none"
                             >
                                Repetir lembrete de intervalo automaticamente
                             </label>
                        </div>

                        <div className="mt-auto pb-0">
                            <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white border-t border-[#DDDDDD] z-20 w-full max-w-md mx-auto">
                                <AhgoraButton
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    onClick={handleSave}
                                >
                                    Salvar lembrete
                                </AhgoraButton>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}