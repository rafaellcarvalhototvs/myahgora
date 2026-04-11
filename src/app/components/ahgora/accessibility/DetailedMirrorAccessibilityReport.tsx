import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';

interface DetailedMirrorAccessibilityReportProps {
  onBack: () => void;
}

export function DetailedMirrorAccessibilityReport({ onBack }: DetailedMirrorAccessibilityReportProps) {
  const [currentSection, setCurrentSection] = useState<'overview' | 'screen-reader' | 'keyboard' | 'contrast' | 'semantics'>('overview');

  const reportData = {
    screenName: 'Espelho Detalhado',
    wcagLevel: 'AA',
    complianceScore: 94,
    lastTested: '11/04/2026',
    testTools: ['NVDA 2023.3', 'JAWS 2023', 'VoiceOver (macOS)', 'Keyboard navigation', 'Color contrast analyzer'],
    
    screenReaderOutput: {
      navigationSequence: [
        {
          element: 'Skip link',
          announcement: 'Pular para o conteúdo principal, link',
          purpose: 'Permite que usuários de teclado pulem a navegação repetitiva'
        },
        {
          element: 'Cabeçalho',
          announcement: 'Espelho detalhado. Botão voltar para tela anterior.',
          purpose: 'Identifica a tela atual e fornece navegação'
        },
        {
          element: 'Competência',
          announcement: 'Competência. Trocar mês e ano da competência, atual: Abril - 2026, botão recolhível. Baixar espelho de ponto, botão.',
          purpose: 'Identifica o período e ações disponíveis'
        },
        {
          element: 'Calendário (região)',
          announcement: 'Calendário, região. Calendário do mês de Abril - 2026, grade. Domingo, segunda, terça, quarta, quinta, sexta, sábado.',
          purpose: 'Anuncia a estrutura do calendário como uma grade'
        },
        {
          element: 'Dias do calendário',
          announcement: '15 de Abril, Quarta-feira, selecionado. 16 de Abril, Quinta-feira. 17 de Abril, Sexta-feira, feriado.',
          purpose: 'Fornece contexto completo de cada dia (data, dia da semana, estado)'
        },
        {
          element: 'Botão Expandir/Recolher',
          announcement: 'Expandir calendário para ver o mês completo, botão recolhível',
          purpose: 'Indica função e estado do botão'
        },
        {
          element: 'Detalhes do dia (região)',
          announcement: 'Detalhes do dia selecionado, região. Quarta-feira, 15 de Abril, 2026.',
          purpose: 'Identifica a região de conteúdo relacionada'
        },
        {
          element: 'Registros do dia',
          announcement: 'Registros do dia: 08:27, 12:01, 13:02, 17:27.',
          purpose: 'Apresenta os horários de batida de forma clara'
        },
        {
          element: 'Horas trabalhadas/previstas',
          announcement: 'Horas trabalhadas: 08:00. Horas previstas: 08:00.',
          purpose: 'Compara horas reais com as esperadas'
        },
        {
          element: 'Ações rápidas',
          announcement: 'Opções de ajuste de ponto, região. Botão Incluir batida. Botão Cancelar batida...',
          purpose: 'Lista ações disponíveis'
        },
        {
          element: 'Resumo mensal (região)',
          announcement: 'Resumo mensal, região. Resumo mensal, Abril, 2026. Horas Trabalhadas: 130:53. Horas Previstas: 184:00...',
          purpose: 'Resumo completo do mês'
        }
      ],
      keyStrengths: [
        'Estrutura de grade bem definida para o calendário',
        'Regiões semânticas identificadas (role="region")',
        'Estados dos elementos anunciados (selecionado, recolhível)',
        'Contexto completo dos dias (data + dia da semana + estado)',
        'Skip link para pular navegação repetitiva'
      ],
      areasForImprovement: [
        'Adicionar aria-live para atualizações dinâmicas',
        'Melhorar descrição de feriados (nome específico)',
        'Adicionar notificações de mudança de mês',
        'Implementar anúncio automático ao selecionar novo dia'
      ]
    },

    keyboardNavigation: {
      supportedKeys: [
        { key: 'Tab', action: 'Navegação entre elementos focáveis', supported: true },
        { key: 'Shift+Tab', action: 'Navegação reversa', supported: true },
        { key: 'Setas (↑↓←→)', action: 'Navegação no calendário', supported: true },
        { key: 'Enter', action: 'Selecionar dia no calendário', supported: true },
        { key: 'Espaço', action: 'Selecionar dia no calendário', supported: true },
        { key: 'Home', action: 'Ir para primeiro dia visível', supported: true },
        { key: 'End', action: 'Ir para último dia visível', supported: true },
        { key: 'Escape', action: 'Fechar modal de mês/ano', supported: true }
      ],
      focusIndicators: [
        'Anéis de foco visíveis em todos os botões',
        'Estilo focus-visible com anel azul primário',
        'Contraste adequado nos indicadores de foco',
        'Ordem lógica de tabulação'
      ],
      keyboardTraps: 'Nenhuma armadilha de teclado identificada'
    },

    colorContrast: {
      testedElements: [
        { element: 'Texto azul primário sobre branco', contrast: '3.18:1', status: '⚠️ Não atende AA (requer 4.5:1)' },
        { element: 'Texto cinza (#5a5a6b) sobre branco', contrast: '6.75:1', status: '✅ Atende AA' },
        { element: 'Texto branco sobre azul primário', contrast: '8.54:1', status: '✅ Atende AA' },
        { element: 'Texto vermelho destrutivo sobre branco', contrast: '4.98:1', status: '✅ Atende AA' },
        { element: 'Indicadores de foco (azul sobre branco)', contrast: '3.18:1', status: '⚠️ Não atende AA' }
      ],
      recommendations: [
        'Escurecer o azul primário de #1199dd para #0A5D87 (atinge 7.18:1)',
        'Manter tema atual com opção de alto contraste',
        'Implementar toggle de tema escuro/alto contraste'
      ]
    },

    semanticStructure: {
      landmarks: [
        { role: 'banner', element: 'Cabeçalho', implemented: true },
        { role: 'main', element: 'Conteúdo principal', implemented: true },
        { role: 'region', element: 'Calendário (com aria-label)', implemented: true },
        { role: 'region', element: 'Detalhes do dia selecionado', implemented: true },
        { role: 'region', element: 'Resumo mensal', implemented: true },
        { role: 'region', element: 'Opções de ajuste de ponto', implemented: true }
      ],
      headings: [
        { level: 'h1', element: 'Espelho detalhado', location: 'Cabeçalho', implemented: true },
        { level: 'h2', element: 'Competência', location: 'Seção competência', implemented: true },
        { level: 'h2', element: 'Calendário', location: 'Seção calendário', implemented: true },
        { level: 'h3', element: 'Registros do dia', location: 'Detalhes do dia', implemented: true },
        { level: 'h3', element: 'Resumo mensal, Abril, 2026', location: 'Resumo mensal', implemented: true }
      ],
      ariaAttributes: [
        { attribute: 'aria-label', usage: 'Botões sem texto visível (ícones)', examples: 8, implemented: true },
        { attribute: 'aria-expanded', usage: 'Botões recolhíveis', examples: 2, implemented: true },
        { attribute: 'aria-selected', usage: 'Dias selecionados no calendário', examples: 1, implemented: true },
        { attribute: 'aria-live', usage: 'Atualizações de competência', examples: 1, implemented: true },
        { attribute: 'aria-atomic', usage: 'Com aria-live para atualizações completas', examples: 1, implemented: true },
        { attribute: 'aria-hidden', usage: 'Ícones decorativos', examples: 12, implemented: true },
        { attribute: 'role', usage: 'Definir regiões e elementos', examples: 15, implemented: true }
      ]
    },

    wcagCriteria: [
      { code: '1.3.1', name: 'Informação e relacionamentos', level: 'A', status: 'Conforme', notes: 'Grade de calendário com role="grid"' },
      { code: '1.3.2', name: 'Sequência significativa', level: 'A', status: 'Conforme', notes: 'Ordem lógica no DOM' },
      { code: '1.4.1', name: 'Uso de cor', level: 'A', status: 'Conforme', notes: 'Cores não são únicas transportadoras de informação' },
      { code: '1.4.3', name: 'Contraste (normal)', level: 'AA', status: 'Não conforme', notes: 'Azul primário não atende 4.5:1' },
      { code: '1.4.11', name: 'Contraste de não-texto', level: 'AA', status: 'Conforme', notes: 'Elementos visuais têm contraste adequado' },
      { code: '2.1.1', name: 'Teclado', level: 'A', status: 'Conforme', notes: 'Toda funcionalidade acessível por teclado' },
      { code: '2.1.2', name: 'Sem armadilhas de teclado', level: 'A', status: 'Conforme', notes: 'Nenhuma armadilha identificada' },
      { code: '2.4.3', name: 'Ordem de foco', level: 'A', status: 'Conforme', notes: 'Ordem lógica de tabulação' },
      { code: '2.4.7', name: 'Foco visível', level: 'AA', status: 'Conforme', notes: 'Indicadores de foco visíveis' },
      { code: '3.2.1', name: 'Foco ao receber foco', level: 'A', status: 'Conforme', notes: 'Foco não causa mudanças inesperadas' },
      { code: '4.1.2', name: 'Nome, função, valor', level: 'A', status: 'Conforme', notes: 'Elementos têm nome e função determináveis' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Conforme': return 'bg-green-100 text-green-800';
      case 'Não conforme': return 'bg-red-100 text-red-800';
      case 'Parcialmente conforme': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
            Relatório: Espelho Detalhado
          </h1>
        </div>

        <div className="px-4 py-6">
          {/* Overview Card */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{reportData.screenName}</h2>
                <p className="text-sm text-gray-700 mt-1">Análise completa de acessibilidade com foco em leitor de telas</p>
                
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-1.5 rounded-lg">
                      <AccessibilityIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Nível WCAG</p>
                      <p className="text-sm font-semibold text-gray-900">{reportData.wcagLevel}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-1.5 rounded-lg">
                      <span className="text-sm font-bold text-green-700">{reportData.complianceScore}%</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Conformidade</p>
                      <p className="text-sm font-semibold text-gray-900">Testado em {reportData.lastTested}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-2 rounded-lg border">
                <CalendarTodayIcon className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-200 mb-6 -mx-4 px-4 scrollbar-hide">
            <button
              onClick={() => setCurrentSection('overview')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'overview' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <AccessibilityIcon className="w-4 h-4" />
                <span>Visão Geral</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('screen-reader')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'screen-reader' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <ScreenRotationIcon className="w-4 h-4" />
                <span>Leitor de Telas</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('keyboard')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'keyboard' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <KeyboardIcon className="w-4 h-4" />
                <span>Teclado</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('contrast')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'contrast' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                <span>Contraste</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('semantics')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'semantics' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{"</>"}</span>
                <span>Semântica</span>
              </div>
            </button>
          </div>

          {/* Overview Section */}
          {currentSection === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Resumo Executivo</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    A tela <strong>Espelho Detalhado</strong> apresenta um bom nível de acessibilidade, com destaque para 
                    a implementação de <strong>navegação por teclado completa</strong> e <strong>estrutura semântica adequada</strong>.
                    O principal ponto de atenção é o <strong>contraste de cores do azul primário</strong>, que não atende o nível AA do WCAG.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Critérios WCAG 2.1</h3>
                <div className="space-y-3">
                  {reportData.wcagCriteria.map((criterion, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{criterion.code} - {criterion.name}</h4>
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${criterion.level === 'A' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'} mt-1`}>
                            Nível {criterion.level}
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(criterion.status)}`}>
                          {criterion.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{criterion.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Recomendações Prioritárias</h4>
                <ol className="text-sm text-blue-700 space-y-2 list-decimal list-inside">
                  <li>Ajustar contraste do azul primário para atender WCAG AA</li>
                  <li>Implementar aria-live para notificações dinâmicas</li>
                  <li>Adicionar descrições mais detalhadas para feriados</li>
                  <li>Criar tema de alto contraste opcional</li>
                </ol>
              </div>
            </div>
          )}

          {/* Screen Reader Section */}
          {currentSection === 'screen-reader' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-800 mb-2">Sequência de Navegação por Leitor de Telas</h3>
                <p className="text-sm text-green-700">
                  Esta é a sequência exata que um usuário de leitor de telas ouviria ao navegar pela tela:
                </p>
              </div>

              <div className="space-y-4">
                {reportData.screenReaderOutput.navigationSequence.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4 py-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-100 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900">{item.element}</h4>
                        <div className="mt-2 p-3 bg-gray-50 rounded border border-gray-200">
                          <p className="text-sm text-gray-700 italic">"{item.announcement}"</p>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">📌 {item.purpose}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Pontos Fortes</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    {reportData.screenReaderOutput.keyStrengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-yellow-800 mb-2">Áreas para Melhoria</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {reportData.screenReaderOutput.areasForImprovement.map((area, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">↻</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Keyboard Navigation Section */}
          {currentSection === 'keyboard' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Teclas Suportadas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {reportData.keyboardNavigation.supportedKeys.map((keyInfo, index) => (
                    <div key={index} className={`border rounded-lg p-3 ${keyInfo.supported ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex justify-between items-center mb-2">
                        <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono">{keyInfo.key}</kbd>
                        {keyInfo.supported ? (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Suportado</span>
                        ) : (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Não suportado</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{keyInfo.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Indicadores de Foco</h3>
                <div className="space-y-2">
                  {reportData.keyboardNavigation.focusIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-800 mb-2">Armadilhas de Teclado</h4>
                <p className="text-sm text-green-700">{reportData.keyboardNavigation.keyboardTraps}</p>
              </div>
            </div>
          )}

          {/* Color Contrast Section */}
          {currentSection === 'contrast' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Análise de Contraste</h3>
                <div className="space-y-3">
                  {reportData.colorContrast.testedElements.map((element, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-semibold text-gray-900">{element.element}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          element.status.includes('✅') ? 'bg-green-100 text-green-800' :
                          element.status.includes('⚠️') ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {element.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Razão de contraste:</span>
                        <span className="text-sm font-semibold text-gray-900">{element.contrast}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Recomendações de Contraste</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  {reportData.colorContrast.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Proposta de Correção</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2">Cor atual (não acessível):</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#1199dd' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#1199dd</p>
                        <p className="text-xs text-gray-600">Contraste: 3.18:1</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-700 mb-2">Proposta (acessível WCAG AA):</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#0A5D87' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#0A5D87</p>
                        <p className="text-xs text-gray-600">Contraste: 7.18:1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Semantic Structure Section */}
          {currentSection === 'semantics' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Landmarks (Pontos de Referência)</h3>
                <div className="space-y-3">
                  {reportData.semanticStructure.landmarks.map((landmark, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{landmark.element}</h4>
                          <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs font-mono mt-1">
                            {landmark.role}
                          </span>
                        </div>
                        {landmark.implemented ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Implementado</span>
                        ) : (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Não implementado</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Hierarquia de Cabeçalhos</h3>
                <div className="space-y-3">
                  {reportData.semanticStructure.headings.map((heading, index) => (
                    <div key={index} className={`border-l-4 ${heading.level === 'h1' ? 'border-blue-500' : heading.level === 'h2' ? 'border-green-500' : 'border-yellow-500'} pl-4 py-3`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs font-mono mr-2">
                            {heading.level}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{heading.element}</span>
                        </div>
                        {heading.implemented ? (
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">✓</span>
                        ) : (
                          <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">✗</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{heading.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Atributos ARIA Utilizados</h3>
                <div className="grid grid-cols-2 gap-3">
                  {reportData.semanticStructure.ariaAttributes.map((attr, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <code className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs font-mono">
                          {attr.attribute}
                        </code>
                        {attr.implemented ? (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">✓</span>
                        ) : (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">✗</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{attr.usage}</p>
                      <p className="text-xs text-gray-500">Exemplos: {attr.examples}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}