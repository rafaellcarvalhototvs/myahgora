import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface AccessibilityReportScreenProps {
  onBack: () => void;
}

export function AccessibilityReportScreen({ onBack }: AccessibilityReportScreenProps) {
  const [currentView, setCurrentView] = useState<'summary' | 'detailed' | 'wcag'>('summary');
  
  const improvements = [
    {
      id: 1,
      title: 'Semântica HTML',
      description: 'Estrutura adequada de cabeçalhos (h1, h2, h3), uso de landmarks e elementos semânticos',
      status: 'implementado',
      impact: 'alto'
    },
    {
      id: 2,
      title: 'Navegação por teclado',
      description: 'Todos os elementos interativos são focáveis com Tab, com indicadores de foco visuais',
      status: 'implementado',
      impact: 'alto'
    },
    {
      id: 3,
      title: 'Atributos ARIA',
      description: 'aria-label, aria-expanded, aria-live para conteúdo dinâmico',
      status: 'implementado',
      impact: 'alto'
    },
    {
      id: 4,
      title: 'Calendário acessível',
      description: 'role="grid", aria-labels para dias, indicadores visuais com descrições textuais',
      status: 'implementado',
      impact: 'alto'
    },
    {
      id: 5,
      title: 'Contraste de cores',
      description: 'Verificação e ajuste de contraste para atender WCAG AA',
      status: 'implementado',
      impact: 'alto'
    },
    {
      id: 6,
      title: 'Alternativas textuais',
      description: 'alt para imagens, descrições para ícones e elementos visuais',
      status: 'implementado',
      impact: 'médio'
    },
    {
      id: 7,
      title: 'Ordem de tabulação lógica',
      description: 'Navegação sequencial e intuitiva pelo teclado',
      status: 'implementado',
      impact: 'médio'
    },
    {
      id: 8,
      title: 'Suporte a leitores de tela',
      description: 'Compatibilidade com NVDA, JAWS, VoiceOver',
      status: 'implementado',
      impact: 'alto'
    }
  ];

  const wcagCriteria = [
    {
      code: '1.1.1',
      name: 'Conteúdo não textual',
      level: 'A',
      status: 'conforme',
      description: 'Todo conteúdo não textual tem alternativa textual'
    },
    {
      code: '1.3.1',
      name: 'Informação e relacionamentos',
      level: 'A',
      status: 'conforme',
      description: 'Informação, estrutura e relacionamentos podem ser determinados por software'
    },
    {
      code: '1.3.2',
      name: 'Sequência significativa',
      level: 'A',
      status: 'conforme',
      description: 'Quando a sequência na qual o conteúdo é apresentado afeta seu significado'
    },
    {
      code: '1.4.1',
      name: 'Uso de cor',
      level: 'A',
      status: 'conforme',
      description: 'A cor não é usada como único meio visual de transmitir informação'
    },
    {
      code: '1.4.3',
      name: 'Contraste',
      level: 'AA',
      status: 'conforme',
      description: 'Contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande'
    },
    {
      code: '2.1.1',
      name: 'Teclado',
      level: 'A',
      status: 'conforme',
      description: 'Toda funcionalidade é operável por teclado'
    },
    {
      code: '2.1.2',
      name: 'Sem armadilhas de teclado',
      level: 'A',
      status: 'conforme',
      description: 'Foco do teclado pode sair de todos os componentes'
    },
    {
      code: '2.4.1',
      name: 'Ignorar blocos',
      level: 'A',
      status: 'conforme',
      description: 'Mecanismo para ignorar blocos de conteúdo repetitivos'
    },
    {
      code: '2.4.3',
      name: 'Ordem de foco',
      level: 'A',
      status: 'conforme',
      description: 'Ordem de tabulação sequencial e lógica'
    },
    {
      code: '2.4.7',
      name: 'Foco visível',
      level: 'AA',
      status: 'conforme',
      description: 'Indicador de foco do teclado é claramente visível'
    },
    {
      code: '4.1.2',
      name: 'Nome, função, valor',
      level: 'A',
      status: 'conforme',
      description: 'Para todos os componentes da interface, o nome e a função podem ser determinados por software'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f5] flex justify-center font-['Open_Sans']">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl pb-20">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary px-4 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] relative">
          <button
            onClick={onBack}
            className="text-white p-1 mr-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
            aria-label="Voltar para tela anterior"
          >
            <ArrowBackIcon className="w-6 h-6" />
          </button>
          <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">
            Relatório de Acessibilidade
          </h1>
        </div>

        <div className="px-4 py-6">
          {/* Navigation Tabs */}
          <div className="flex border-b border-muted mb-6">
            <button
              onClick={() => setCurrentView('summary')}
              className={`flex-1 py-3 text-sm font-medium ${currentView === 'summary' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              aria-current={currentView === 'summary' ? 'page' : undefined}
            >
              Resumo
            </button>
            <button
              onClick={() => setCurrentView('detailed')}
              className={`flex-1 py-3 text-sm font-medium ${currentView === 'detailed' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              aria-current={currentView === 'detailed' ? 'page' : undefined}
            >
              Melhorias
            </button>
            <button
              onClick={() => setCurrentView('wcag')}
              className={`flex-1 py-3 text-sm font-medium ${currentView === 'wcag' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              aria-current={currentView === 'wcag' ? 'page' : undefined}
            >
              WCAG
            </button>
          </div>

          {/* Summary View */}
          {currentView === 'summary' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Tela Espelho Detalhado - Acessível</h3>
                    <p className="text-green-700 mt-1">Esta tela foi revisada e aprimorada para atender aos padrões de acessibilidade WCAG 2.1 AA.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">Nível de conformidade</p>
                  <p className="text-2xl font-bold text-blue-800 mt-1">WCAG 2.1 AA</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-purple-700">Critérios atendidos</p>
                  <p className="text-2xl font-bold text-purple-800 mt-1">11/11</p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#2A2A33] mb-4">Principais aprimoramentos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">Calendário com navegação por teclado e descrições textuais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">Contraste de cores ajustado para atender WCAG AA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">Atributos ARIA para conteúdo dinâmico e estados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">Indicadores de foco visíveis para navegação por teclado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Como usar recursos de acessibilidade</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Use <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Tab</kbd> para navegar entre elementos</li>
                  <li>• Use <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Shift+Tab</kbd> para navegar para trás</li>
                  <li>• Use <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Enter</kbd> ou <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Space</kbd> para ativar botões</li>
                  <li>• Use as teclas de seta para navegar no calendário</li>
                </ul>
              </div>
            </div>
          )}

          {/* Detailed Improvements View */}
          {currentView === 'detailed' && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[#2A2A33] mb-2">Melhorias implementadas</h3>
              <p className="text-sm text-muted-foreground mb-4">Lista de aprimoramentos de acessibilidade aplicados à tela Espelho Detalhado.</p>
              
              {improvements.map((improvement) => (
                <div key={improvement.id} className="border border-muted rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-semibold text-foreground">{improvement.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      improvement.status === 'implementado' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {improvement.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground mb-3">{improvement.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Impacto: {improvement.impact}</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      ID: {improvement.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* WCAG Criteria View */}
          {currentView === 'wcag' && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[#2A2A33] mb-2">Critérios WCAG 2.1 atendidos</h3>
              <p className="text-sm text-muted-foreground mb-4">Conformidade com os critérios de sucessos das Diretrizes de Acessibilidade para Conteúdo Web.</p>
              
              {wcagCriteria.map((criterion) => (
                <div key={criterion.code} className="border border-muted rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{criterion.code} - {criterion.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          criterion.level === 'A' 
                            ? 'bg-blue-100 text-blue-800' 
                            : criterion.level === 'AA'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          Nível {criterion.level}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          criterion.status === 'conforme' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {criterion.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground">{criterion.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}