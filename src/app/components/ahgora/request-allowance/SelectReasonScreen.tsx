import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Reason {
  id: string;
  label: string;
  category: string;
}

const REASONS: Reason[] = [
  { id: 'mat', label: 'Licença maternidade', category: 'Licenças' },
  { id: 'pat', label: 'Licença paternidade', category: 'Licenças' },
  { id: 'cas', label: 'Licença casamento', category: 'Licenças' },
  { id: 'med', label: 'Atestado médico', category: 'Saúde' },
  { id: 'dec', label: 'Declaração de comparecimento', category: 'Saúde' },
  { id: 'exa', label: 'Exame periódico', category: 'Saúde' },
  { id: 'fer', label: 'Feriado', category: 'Eventos' },
  { id: 'ano', label: 'Folga Ano Novo', category: 'Eventos' },
  { id: 'nat', label: 'Folga Natal', category: 'Eventos' },
  { id: 'tre', label: 'Tribunal Regional Eleitoral', category: 'Órgãos externos' },
  { id: 'jus', label: 'Tribunal de Justiça', category: 'Órgãos externos' },
  { id: 'ext', label: 'Evento externo', category: 'Situações especiais' },
  { id: 'ser', label: 'Serviço externo', category: 'Situações especiais' },
  { id: 'bio', label: 'Abono - Problema biométrico', category: 'Situações especiais' },
  { id: 'gre', label: 'Greve - Transporte coletivo', category: 'Situações especiais' },
  { id: 'int', label: 'Descanso interjornada', category: 'Situações especiais' },
  { id: 'dis', label: 'Dispensado pela empresa', category: 'Situações especiais' },
  { id: 'obi', label: 'Óbito', category: 'Situações especiais' },
  { id: 'adm', label: 'Início admissão', category: 'Admissão' },
];

interface SelectReasonScreenProps {
  onBack: () => void;
  onSelect: (reason: Reason) => void;
}

export function SelectReasonScreen({ onBack, onSelect }: SelectReasonScreenProps) {
  // Group reasons by category
  const categories = Array.from(new Set(REASONS.map(r => r.category)));

  return (
    <div className="w-full h-full bg-background flex flex-col transition-colors">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-2 sticky top-0 z-10 shadow-sm shrink-0 h-[62px]">
        <button onClick={onBack} className="text-primary-foreground p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
          </svg>
        </button>
        <h1 className="text-primary-foreground font-semibold text-[18px] leading-[28px] tracking-[0.027px]">Selecionar motivo</h1>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto pb-8">
        {categories.map((category) => (
          <div key={category}>
            <div className="px-4 py-3 pt-6">
              <h2 className="text-foreground font-bold text-base">{category}</h2>
            </div>
            <div className="flex flex-col">
              {REASONS.filter(r => r.category === category).map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => onSelect(reason)}
                  className="px-4 py-4 border-b border-text-lighten-3 flex justify-between items-center active:bg-muted/20 transition-colors group"
                >
                  <span className="text-sm text-foreground">{reason.label}</span>
                  <KeyboardArrowRightIcon className="text-muted-foreground group-hover:text-primary" sx={{ fontSize: 20 }} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
