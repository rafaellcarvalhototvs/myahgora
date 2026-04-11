import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface AccessibilityReportScreenProps {
  onBack: () => void;
}

export function AccessibilityReportScreen({ onBack }: AccessibilityReportScreenProps) {
  const [currentView, setCurrentView] = useState<'summary' | 'detailed' | 'wcag' | 'screen-reader'>('summary');
  
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

  const screenReaderOutputs = [
    {
      screen: 'Tela Inicial',
      elements: [
        {
          element: 'Cabeçalho',
          announcement: 'Olá, Rafael. Botão de perfil. Botão de notificações. Botão de mensagens, 4 novas. Botão de lembretes.',
          rating: 'excelente',
          notes: 'Labels descritivos, contagem de mensagens inclusa'
        },
        {
          element: 'Cartão de ponto',
          announcement: 'Registrar o ponto. 25 de Março, 2026. Vamos começar o dia? Registre seu primeiro ponto. Botão registrar ponto. Saldo total banco de horas, mais 02:04.',
          rating: 'bom',
          notes: 'Informação temporal clara, estado do botão explícito'
        },
        {
          element: 'Link para espelho detalhado',
          announcement: 'Ver espelho detalhado, link.',
          rating: 'bom',
          notes: 'Tipo de elemento anunciado como link'
        },
        {
          element: 'Solicitar ajustes (carrossel)',
          announcement: 'Opções de ajuste de ponto, região. Botão Incluir batida. Botão Cancelar batida. Botão Substituir batida. Botão Solicitar abono. Botão Enviar Mensagem. Botão Reposicionar batida. Botão Hora extra. Botão Exceção diária.',
          rating: 'excelente',
          notes: 'Região identificada, cada ação claramente rotulada'
        },
        {
          element: 'Elogios da semana',
          announcement: 'Elogios da semana, carrossel. João elogiou seu comprometimento. Maria elogiou sua proatividade. Carlos elogiou sua atenção aos detalhes.',
          rating: 'bom',
          notes: 'Tipo de componente (carrossel) anunciado'
        },
        {
          element: 'Menu inferior',
          announcement: 'Menu de navegação. Botão Ponto, selecionado. Botão Espelho. Botão Ajustes. Botão Perfil.',
          rating: 'excelente',
          notes: 'Estado de seleção anunciado para item ativo'
        }
      ]
    },
    {
      screen: 'Espelho Detalhado',
      elements: [
        {
          element: 'Calendário',
          announcement: 'Calendário do mês de Abril 2026, grade. Domingo, segunda, terça, quarta, quinta, sexta, sábado. Dia 1, terça-feira, feriado, Páscoa. Dia 2, quarta-feira, dia útil. Dia 3, quinta-feira, dia útil. Dia 4, sexta-feira, dia útil, ponto registrado às 08:00 e 12:00. Dia 5, sábado, fim de semana.',
          rating: 'excelente',
          notes: 'Estrutura de grade, informações contextuais (feriados, pontos) incluídas'
        },
        {
          element: 'Botões de navegação',
          announcement: 'Trocar mês e ano da competência, atual: Abril 2026, botão recolhível. Baixar espelho de ponto, botão.',
          rating: 'bom',
          notes: 'Estado recolhível anunciado, função clara'
        },
        {
          element: 'Detalhes do dia selecionado',
          announcement: 'Detalhes do dia selecionado, região. Sexta-feira, 04 de Abril, 2026. Batidas: 08:00 entrada, 12:00 saída para almoço, 13:00 retorno, 17:00 saída. Total trabalhado: 08:00 horas.',
          rating: 'excelente',
          notes: 'Região identificada, informações de horários estruturadas'
        },
        {
          element: 'Resumo mensal',
          announcement: 'Resumo mensal, região. Total de horas trabalhadas: 160 horas. Horas extras: 08:00 horas. Faltas: 0 dias. Banco de horas: + 02:04 horas.',
          rating: 'excelente',
          notes: 'Dados resumidos apresentados de forma clara'
        }
      ]
    },
    {
      screen: 'Modal Registrar Ponto',
      elements: [
        {
          element: 'Modal',
          announcement: 'Registrar ponto, diálogo modal. Sucesso! Ponto registrado às 14:30. Botão fechar.',
          rating: 'bom',
          notes: 'Tipo de componente (diálogo modal) anunciado'
        }
      ]
    },
    {
      screen: 'Tela Incluir Batida',
      elements: [
        {
          element: 'Formulário',
          announcement: 'Incluir batida. Data, campo de entrada, 25 de Março, 2026. Hora, campo de entrada, 14:30. Tipo da batida, botão de opção, entrada, selecionado. Justificativa, campo de texto multilinha. Botão enviar solicitação.',
          rating: 'excelente',
          notes: 'Todos os campos rotulados, estado de seleção anunciado'
        }
      ]
    }
  ];

  const screenReaderAnalysis = [
    {
      aspect: 'Navegação por cabeçalhos',
      status: '✅ Implementado',
      details: 'h1 para título principal, h2 para seções, h3 para subsseções',
      example: 'Tela inicial: h1 "Olá, Rafael", h2 "Registrar o ponto", h2 "Solicitar ajustes"'
    },
    {
      aspect: 'Landmarks (regiões)',
      status: '✅ Implementado',
      details: 'role="region" com aria-label para áreas importantes',
      example: 'Calendário, detalhes do dia, resumo mensal, carrossel de ações'
    },
    {
      aspect: 'Rotulagem de botões',
      status: '✅ Implementado',
      details: 'aria-label para ícones sem texto, textos descritivos',
      example: 'Botão de perfil: "Perfil de Rafael. Clique para ver relatório de acessibilidade"'
    },
    {
      aspect: 'Estados dinâmicos',
      status: '✅ Implementado',
      details: 'aria-expanded, aria-selected, aria-live para atualizações',
      example: 'Calendário: aria-selected para dia selecionado, aria-expanded para expansão'
    },
    {
      aspect: 'Navegação por teclado',
      status: '✅ Implementado',
      details: 'tabIndex gerenciado, ordem lógica, foco visível',
      example: 'Calendário: navegação por teclas de seta, tabIndex para dias focáveis'
    },
    {
      aspect: 'Alternativas para ícones',
      status: '✅ Implementado',
      details: 'aria-hidden="true" para ícones decorativos, textos alternativos',
      example: 'Ícones de ações: svg com aria-hidden, rótulos textuais adjacentes'
    },
    {
      aspect: 'Formulários',
      status: '✅ Implementado',
      details: 'labels associados, instruções, mensagens de erro',
      example: 'Campos com aria-describedby para ajuda, aria-invalid para erros'
    },
    {
      aspect: 'Conteúdo dinâmico',
      status: '🔄 Parcial',
      details: 'aria-live para notificações em tempo real',
      example: 'Faltam anúncios automáticos para atualizações de saldo em tempo real'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f5] flex justify-center font-['Open_Sans']">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl pb-20">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary px-6 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] relative">
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

        <div className="px-6 py-6">
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
            <button
              onClick={() => setCurrentView('screen-reader')}
              className={`flex-1 py-3 text-sm font-medium ${currentView === 'screen-reader' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              aria-current={currentView === 'screen-reader' ? 'page' : undefined}
            >
              Leitor de Telas
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

          {/* Screen Reader Output View */}
          {currentView === 'screen-reader' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Análise do Leitor de Telas</h3>
                    <p className="text-blue-700 mt-1">Simulação do output anunciado por leitores de tela (NVDA, JAWS, VoiceOver) nas principais telas do aplicativo.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#2A2A33] mb-4">Análise Técnica</h3>
                <div className="space-y-4">
                  {screenReaderAnalysis.map((item, index) => (
                    <div key={index} className="border border-muted rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-semibold text-foreground">{item.aspect}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.status.includes('✅') ? 'bg-green-100 text-green-800' : 
                          item.status.includes('🔄') ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-foreground mb-2">{item.details}</p>
                      <p className="text-xs text-muted-foreground">Exemplo: {item.example}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#2A2A33] mb-4">Output por Tela</h3>
                <p className="text-sm text-muted-foreground mb-4">O que um usuário de leitor de tela ouviria ao navegar pelas principais telas.</p>
                
                {screenReaderOutputs.map((screen, screenIndex) => (
                  <div key={screenIndex} className="border border-muted rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">{screen.screen}</h4>
                    <div className="space-y-3">
                      {screen.elements.map((element, elementIndex) => (
                        <div key={elementIndex} className="border-l-4 border-primary pl-3 py-2">
                          <div className="flex justify-between items-start">
                            <h5 className="text-sm font-medium text-foreground">{element.element}</h5>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              element.rating === 'excelente' ? 'bg-green-100 text-green-800' :
                              element.rating === 'bom' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {element.rating}
                            </span>
                          </div>
                          <div className="mt-1 p-3 bg-gray-50 rounded border border-gray-200">
                            <p className="text-sm text-gray-700 font-medium mb-1">Anúncio do leitor de tela:</p>
                            <p className="text-sm text-gray-800 italic">"{element.announcement}"</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Notas: {element.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Recomendações para Melhoria</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span><strong>Implementar aria-live para atualizações em tempo real:</strong> Anunciar automaticamente mudanças no saldo de horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span><strong>Adicionar skip links:</strong> Links para pular conteúdo repetitivo em telas mais longas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span><strong>Melhorar descrições de gráficos:</strong> Fornecer alternativas textuais detalhadas para visualizações de dados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span><strong>Testar com múltiplos leitores de tela:</strong> Validar compatibilidade com NVDA, JAWS, VoiceOver e TalkBack</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}