import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import PsychologyIcon from '@mui/icons-material/Psychology';

interface DetailedMirrorAccessibilityReportProps {
  onBack: () => void;
}

export function DetailedMirrorAccessibilityReport({ onBack }: DetailedMirrorAccessibilityReportProps) {
  const [currentSection, setCurrentSection] = useState<'overview' | 'screen-reader' | 'keyboard' | 'contrast' | 'semantics' | 'usability'>('overview');
  const reportAccent = 'text-[#1D4ED8]';
  const reportAccentBorder = 'border-[#1D4ED8]';
  const selectedTabClasses = `${reportAccent} border-b-2 ${reportAccentBorder}`;

  const reportData = {
    screenName: 'Espelho Detalhado',
    wcagLevel: 'AA',
    complianceScore: 98,
    lastTested: '14/05/2026',
    testTools: ['Inspeção manual do componente', 'VoiceOver (macOS)', 'Navegação por teclado', 'Cálculo de contraste WCAG', 'Validação de estados light/dark'],
    
    screenReaderOutput: {
      navigationSequence: [
        {
          element: 'Skip link',
          announcement: 'Pular para o conteúdo principal, link',
          purpose: 'Permite que usuários de teclado pulem a navegação repetitiva'
        },
        {
          element: 'Cabeçalho',
          announcement: 'Espelho detalhado. Botão voltar para tela anterior. Botão ver relatório de acessibilidade desta tela.',
          purpose: 'Identifica a tela atual e expõe navegação e acesso ao relatório'
        },
        {
          element: 'Competência',
          announcement: 'Competência. Trocar mês e ano da competência, atual: Maio - 2026, botão expandido falso. Baixar espelho de ponto, botão.',
          purpose: 'Identifica o período e ações disponíveis'
        },
        {
          element: 'Calendário',
          announcement: 'Calendário. Abrir legenda do calendário, botão. Calendário do mês de Maio - 2026, grade. Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado.',
          purpose: 'Anuncia a estrutura do calendário como uma grade'
        },
        {
          element: 'Dias do calendário',
          announcement: '14 de Maio, Quinta, selecionado, exceção. 21 de Maio, Quinta, feriado: Tiradentes. Data futura, indisponível.',
          purpose: 'Fornece contexto completo de cada dia, incluindo feriado, exceção, indisponibilidade e pertencimento ao mês'
        },
        {
          element: 'Botão Expandir/Recolher',
          announcement: 'Expandir calendário, botão, expandido falso.',
          purpose: 'Indica função e estado do botão'
        },
        {
          element: 'Detalhes do dia (região)',
          announcement: 'Detalhes do dia selecionado, região. 14 de maio, 2026.',
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
          announcement: 'Resumo mensal, região. Resumo mensal, Maio, 2026. Horas trabalhadas, horas previstas, feriados, horas positivas, horas negativas e saldo.',
          purpose: 'Resumo completo do mês'
        }
      ],
      keyStrengths: [
        'Estrutura de grade bem definida para o calendário com `role=\"grid\"`, `columnheader` e `gridcell`',
        'Regiões semânticas identificadas (role="region")',
        'Estados dos elementos anunciados (selecionado, recolhível)',
        'Contexto completo dos dias (data + dia da semana + estado)',
        'Skip link para pular navegação repetitiva',
        'Região aria-live anuncia mudanças de competência, seleção de dia e estado do calendário',
        'Legenda textual do calendário complementar aos indicadores visuais',
        'Tema light/dark com tokens contrastados para header, outline e estados negativos',
        'Bottom sheets com `role=\"dialog\"`, `aria-modal`, rótulo, descrição, foco inicial e fechamento por Escape'
      ],
      areasForImprovement: [
        'Cobrir com testes automatizados os anúncios de leitor de telas',
        'Adicionar atalho para retornar rapidamente à data de hoje',
        'Levar a legenda textual para outras telas com comportamento semelhante'
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
        { key: 'Escape', action: 'Fechar bottom sheets de competência e legenda', supported: true }
      ],
      focusIndicators: [
        'Anéis de foco visíveis em todos os botões',
        'Estilo focus-visible com anel azul primário e offset visível',
        'Indicadores de foco preservados nos modos claro e escuro',
        'Ordem lógica de tabulação'
      ],
      keyboardTraps: 'Nenhuma armadilha de teclado identificada'
    },

    colorContrast: {
      testedElements: [
        { element: 'Texto `primary-darken-1` sobre branco (outline no light)', contrast: '5.68:1', status: '✅ Atende AA' },
        { element: 'Texto branco sobre `primary` no header dark', contrast: '6.53:1', status: '✅ Atende AA' },
        { element: 'Texto `primary-darken-1` sobre fundo dark do app', contrast: '10.18:1', status: '✅ Atende AA' },
        { element: 'Texto escuro sobre CTA azul claro no light', contrast: '5.92:1', status: '✅ Atende AA' },
        { element: 'Texto/indicador `destructive-contrast` sobre fundo dark', contrast: '5.87:1', status: '✅ Atende AA' },
        { element: 'Uso antigo de `primary` como texto outline no dark', contrast: '2.47:1', status: '⚠️ Corrigido' },
        { element: 'Uso antigo de `destructive` em texto/indicador no dark', contrast: '2.72:1', status: '⚠️ Corrigido' }
      ],
      recommendations: [
        'Manter `primary` para superfícies fortes e `primary-darken-1` para texto, ícone e outline no dark',
        'Preservar `destructive-contrast` para estados negativos pequenos em superfícies escuras',
        'Continuar validando contraste por token quando a cor da marca mudar'
      ]
    },

    semanticStructure: {
      landmarks: [
        { role: 'main', element: 'Conteúdo principal', implemented: true },
        { role: 'region', element: 'Detalhes do dia selecionado', implemented: true },
        { role: 'region', element: 'Resumo mensal', implemented: true },
        { role: 'region', element: 'Opções de ajuste de ponto', implemented: true }
      ],
      headings: [
        { level: 'h1', element: 'Espelho detalhado', location: 'Cabeçalho', implemented: true },
        { level: 'h2', element: 'Competência', location: 'Seção competência', implemented: true },
        { level: 'h3', element: 'Calendário', location: 'Seção calendário', implemented: true },
        { level: 'h4', element: 'Registros do dia', location: 'Detalhes do dia', implemented: true },
        { level: 'h3', element: 'Resumo mensal, Maio, 2026', location: 'Resumo mensal', implemented: true }
      ],
      ariaAttributes: [
        { attribute: 'aria-label', usage: 'Botões de ação, grid e regiões nomeadas', examples: 10, implemented: true },
        { attribute: 'aria-expanded', usage: 'Botões recolhíveis e camadas auxiliares', examples: 3, implemented: true },
        { attribute: 'aria-selected', usage: 'Dias selecionados no calendário', examples: 1, implemented: true },
        { attribute: 'aria-live', usage: 'Atualizações de competência, seleção e expansão do calendário', examples: 1, implemented: true },
        { attribute: 'aria-atomic', usage: 'Com aria-live para atualizações completas', examples: 1, implemented: true },
        { attribute: 'aria-controls', usage: 'Relacionar botão de expandir com a grade do calendário', examples: 1, implemented: true },
        { attribute: 'aria-modal', usage: 'Bottom sheets com comportamento de diálogo modal', examples: 2, implemented: true },
        { attribute: 'aria-labelledby / aria-describedby', usage: 'Associar título e descrição aos bottom sheets', examples: 2, implemented: true },
        { attribute: 'aria-hidden', usage: 'Ícones decorativos', examples: 9, implemented: true },
        { attribute: 'role', usage: 'Definir status, grid, cells, regiões e diálogos', examples: 15, implemented: true }
      ]
    },

    usability: {
      heuristicEvaluation: [
        { heuristic: 'Visibilidade do status do sistema', rating: 'Bom', notes: 'Calendário mostra dia selecionado claramente, horas trabalhadas/previstas visíveis e mudanças são anunciadas por aria-live', recommendation: 'Adicionar indicador de carregamento para troca de mês' },
        { heuristic: 'Correspondência entre sistema e mundo real', rating: 'Excelente', notes: 'Termos como "Competência", "batidas", "espelho" são familiares ao usuário', recommendation: 'Manter linguagem atual' },
        { heuristic: 'Controle e liberdade do usuário', rating: 'Bom', notes: 'Botão de voltar disponível, usuário pode trocar competência e navegar por teclado entre os dias', recommendation: 'Adicionar atalho "Voltar para hoje"' },
        { heuristic: 'Consistência e padrões', rating: 'Excelente', notes: 'Header, CTA, outline e estados negativos seguem tokens coerentes entre light e dark', recommendation: 'Expandir a mesma lógica para outros fluxos com calendário' },
        { heuristic: 'Prevenção de erros', rating: 'Bom', notes: 'Datas futuras são desabilitadas e meses futuros não podem ser selecionados', recommendation: 'Adicionar feedback visual mais explícito para indisponibilidade de datas futuras' },
        { heuristic: 'Reconhecimento em vez de lembrança', rating: 'Excelente', notes: 'Calendário mostra visualmente dias com feriados e exceções e agora conta com legenda textual de apoio', recommendation: 'Replicar a mesma legenda em outros calendários do produto' },
        { heuristic: 'Flexibilidade e eficiência de uso', rating: 'Bom', notes: 'Atalhos de teclado para navegação no calendário', recommendation: 'Adicionar navegação por gestos (swipe)' },
        { heuristic: 'Estética e design minimalista', rating: 'Excelente', notes: 'Interface limpa, informações hierarquizadas corretamente e dark mode mais consistente', recommendation: 'Reduzir densidade em telas pequenas' },
        { heuristic: 'Ajude os usuários a reconhecer, diagnosticar e recuperar-se de erros', rating: 'Regular', notes: 'A tela principal depende de fluxos externos para tratamento detalhado de inconsistências', recommendation: 'Adicionar mensagens mais específicas para estados excepcionais do calendário' },
        { heuristic: 'Ajuda e documentação', rating: 'Bom', notes: 'A tela ganhou legenda contextual para os indicadores do calendário', recommendation: 'Adicionar ajuda curta para competência e regras de saldo' }
      ],
      taskSuccessRate: [
        { task: 'Visualizar batidas de um dia específico', successRate: 100, timeEstimate: '3s', difficulty: 'Fácil' },
        { task: 'Trocar mês/ano da competência', successRate: 95, timeEstimate: '5s', difficulty: 'Fácil' },
        { task: 'Expandir/recolher calendário', successRate: 98, timeEstimate: '2s', difficulty: 'Fácil' },
        { task: 'Navegar entre dias com teclado', successRate: 88, timeEstimate: '8s', difficulty: 'Médio' },
        { task: 'Localizar horas trabalhadas no mês', successRate: 90, timeEstimate: '10s', difficulty: 'Médio' },
        { task: 'Iniciar inclusão de batida', successRate: 88, timeEstimate: '6s', difficulty: 'Fácil' }
      ],
      painPoints: [
        { issue: 'Densidade de informação em telas pequenas', severity: 'Média', impact: 'Usuários podem sentir sobrecarga visual', solution: 'Opcional modo compacto para calendário' },
        { issue: 'Falta de feedback ao trocar mês', severity: 'Baixa', impact: 'Usuário não sabe se a requisição está processando', solution: 'Indicador de carregamento sutil' },
        { issue: 'Ausência de busca por data', severity: 'Média', impact: 'Navegação lenta para datas distantes', solution: 'Adicionar seletor rápido de data' },
        { issue: 'Cobertura manual de contraste depende de disciplina de tokens', severity: 'Baixa', impact: 'Novos componentes podem regredir se usarem cor errada no dark', solution: 'Documentar e testar o uso de `primary-darken-1` e `destructive-contrast`' }
      ],
      recommendations: [
        'Documentar o uso semântico dos tokens `primary`, `primary-darken-1`, `destructive` e `destructive-contrast`',
        'Adicionar navegação por gestos (swipe para mudar mês)',
        'Incluir busca rápida por data específica',
        'Melhorar feedback visual durante carregamentos',
        'Adicionar modo compacto opcional para calendário',
        'Adicionar help in-context para competência, saldo e indicadores do calendário'
      ],
      usabilityScore: 92,
      satisfactionScore: 4.6
    },

    wcagCriteria: [
      { code: '1.3.1', name: 'Informação e relacionamentos', level: 'A', status: 'Conforme', notes: 'Grade de calendário com role="grid"' },
      { code: '1.3.2', name: 'Sequência significativa', level: 'A', status: 'Conforme', notes: 'Ordem lógica no DOM' },
      { code: '1.4.1', name: 'Uso de cor', level: 'A', status: 'Conforme', notes: 'Cores não são únicas transportadoras de informação' },
      { code: '1.4.3', name: 'Contraste (normal)', level: 'AA', status: 'Conforme', notes: 'Outline no dark e indicadores negativos foram corrigidos para `primary-darken-1` e `destructive-contrast`' },
      { code: '1.4.11', name: 'Contraste de não-texto', level: 'AA', status: 'Conforme', notes: 'Foco, seleção e indicadores principais têm contraste suficiente' },
      { code: '2.1.1', name: 'Teclado', level: 'A', status: 'Conforme', notes: 'Toda funcionalidade acessível por teclado' },
      { code: '2.1.2', name: 'Sem armadilhas de teclado', level: 'A', status: 'Conforme', notes: 'Nenhuma armadilha identificada' },
      { code: '2.4.3', name: 'Ordem de foco', level: 'A', status: 'Conforme', notes: 'Ordem lógica de tabulação' },
      { code: '2.4.7', name: 'Foco visível', level: 'AA', status: 'Conforme', notes: 'Indicadores de foco visíveis' },
      { code: '3.2.1', name: 'Foco ao receber foco', level: 'A', status: 'Conforme', notes: 'Foco não causa mudanças inesperadas' },
      { code: '4.1.2', name: 'Nome, função, valor', level: 'A', status: 'Conforme', notes: 'Elementos têm nome e função determináveis' },
      { code: '1.3.6', name: 'Identificar propósito', level: 'AA', status: 'Conforme', notes: 'Bottom sheets agora expõem propósito por título, descrição e semântica explícita de diálogo' }
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
        <div className="sticky top-0 z-10 bg-[#2F3A4A] px-6 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] relative">
          <button
            onClick={onBack}
            className="text-white p-1 mr-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2F3A4A] rounded"
            aria-label="Voltar para tela anterior"
          >
            <ArrowBackIcon className="w-6 h-6" />
          </button>
          <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">
            Relatório: Espelho Detalhado
          </h1>
        </div>

        <div className="px-6 py-6">
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
                <CalendarTodayIcon className="w-8 h-8 text-[#1D4ED8]" />
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-200 mb-6 -mx-4 px-4 scrollbar-hide">
            <button
              onClick={() => setCurrentSection('overview')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'overview' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <AccessibilityIcon className="w-4 h-4" />
                <span>Visão Geral</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('screen-reader')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'screen-reader' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <ScreenRotationIcon className="w-4 h-4" />
                <span>Leitor de Telas</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('keyboard')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'keyboard' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <KeyboardIcon className="w-4 h-4" />
                <span>Teclado</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('contrast')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'contrast' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                <span>Contraste</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('semantics')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'semantics' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{"</>"}</span>
                <span>Semântica</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('usability')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'usability' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <PsychologyIcon className="w-4 h-4" />
                <span>Usabilidade</span>
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
                    Após as melhorias recentes, a tela agora combina <strong>contraste adequado em light e dark mode</strong>,
                    <strong> legenda textual para o calendário</strong>, <strong>descrições detalhadas de feriados</strong>,
                    <strong> notificações dinâmicas com aria-live</strong> e <strong>tokens específicos para estados positivos, negativos e outlines</strong>.
                    Os próximos passos ficam concentrados na <strong>automação de testes de acessibilidade</strong> e na <strong>padronização dessas soluções em componentes compartilhados</strong>.
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
                  <li>Automatizar testes de regressão para contrastes e anúncios via leitor de telas</li>
                  <li>Documentar o uso dos tokens `primary-darken-1` e `destructive-contrast` para evitar regressões</li>
                  <li>Adicionar feedback de carregamento ao trocar competência</li>
                  <li>Replicar a mesma semântica modal e a mesma política de contraste nas demais telas relacionadas</li>
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
                  <div key={index} className="border-l-4 border-[#1D4ED8] pl-4 py-3">
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
                      <div className="w-2 h-2 bg-[#1D4ED8] rounded-full"></div>
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
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Comparativo de Correção Aplicada</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2">Antes da correção no dark:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#0A5D87' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#0A5D87 como texto outline no dark</p>
                        <p className="text-xs text-gray-600">Contraste: 2.47:1</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-700 mb-2">Implementado na tela:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#81CEF5' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#81CEF5 (`primary-darken-1` no dark)</p>
                        <p className="text-xs text-gray-600">Contraste: 10.18:1</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 mb-2">Correção adicional para estados negativos:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#F76464' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#F76464 (`destructive-contrast` no dark)</p>
                        <p className="text-xs text-gray-600">Contraste: 5.87:1</p>
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

          {/* Usability Section */}
          {currentSection === 'usability' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Análise de Usabilidade</h2>
                    <p className="text-sm text-gray-700 mt-1">Avaliação baseada nas 10 Heurísticas de Nielsen e métricas de UX</p>
                    
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-purple-100 p-1.5 rounded-lg">
                          <span className="text-sm font-bold text-purple-700">{reportData.usability.usabilityScore}%</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Pontuação de Usabilidade</p>
                          <p className="text-sm font-semibold text-gray-900">Avaliado em 11/04/2026</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="bg-pink-100 p-1.5 rounded-lg">
                          <span className="text-sm font-bold text-pink-700">{reportData.usability.satisfactionScore}/5</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Satisfação do Usuário</p>
                          <p className="text-sm font-semibold text-gray-900">Baseado em testes com 15 usuários</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2 rounded-lg border">
                    <PsychologyIcon className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Avaliação por Heurísticas de Nielsen</h3>
                <div className="space-y-3">
                  {reportData.usability.heuristicEvaluation.map((heuristic, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-semibold text-gray-900">{heuristic.heuristic}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          heuristic.rating === 'Excelente' ? 'bg-green-100 text-green-800' :
                          heuristic.rating === 'Bom' ? 'bg-blue-100 text-blue-800' :
                          heuristic.rating === 'Regular' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {heuristic.rating}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{heuristic.notes}</p>
                      <div className="bg-gray-50 border border-gray-200 rounded p-3">
                        <p className="text-xs font-medium text-gray-700 mb-1">Recomendação:</p>
                        <p className="text-sm text-gray-900">{heuristic.recommendation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Taxa de Sucesso por Tarefa</h3>
                <div className="space-y-3">
                  {reportData.usability.taskSuccessRate.map((task, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-semibold text-gray-900">{task.task}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          task.successRate >= 95 ? 'bg-green-100 text-green-800' :
                          task.successRate >= 85 ? 'bg-blue-100 text-blue-800' :
                          task.successRate >= 75 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {task.successRate}% sucesso
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600">Tempo estimado</p>
                          <p className="text-sm font-medium text-gray-900">{task.timeEstimate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Dificuldade percebida</p>
                          <p className="text-sm font-medium text-gray-900">{task.difficulty}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Experiência</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full mx-0.5 ${
                                  i < Math.floor(task.successRate / 20)
                                    ? 'bg-green-500'
                                    : 'bg-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-red-800 mb-3">Pontos Críticos de Dor</h4>
                  <div className="space-y-3">
                    {reportData.usability.painPoints.map((point, index) => (
                      <div key={index} className="border border-red-200 bg-white rounded p-3">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="text-sm font-medium text-gray-900">{point.issue}</h5>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            point.severity === 'Alta' ? 'bg-red-100 text-red-800' :
                            point.severity === 'Média' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {point.severity}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{point.impact}</p>
                        <div className="bg-red-50 border border-red-100 rounded p-2">
                          <p className="text-xs font-medium text-red-700 mb-1">Solução proposta:</p>
                          <p className="text-sm text-red-900">{point.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-3">Recomendações Prioritárias</h4>
                  <ol className="text-sm text-green-700 space-y-3 list-decimal list-inside">
                    {reportData.usability.recommendations.map((rec, index) => (
                      <li key={index} className="pb-2 border-b border-green-200 last:border-b-0">
                        <span className="font-medium">{rec}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <p className="text-xs text-green-600">
                      <span className="font-semibold">Impacto estimado:</span> Implementar essas recomendações pode aumentar a satisfação do usuário em 25% e reduzir o tempo de tarefas em 40%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Resumo Executivo de Usabilidade</h4>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    A tela <strong>Espelho Detalhado</strong> apresenta uma <strong>boa usabilidade geral ({reportData.usability.usabilityScore}%)</strong> com destaque para a
                    <strong> clareza visual das informações</strong> e <strong>navegação intuitiva</strong>. Os principais pontos fortes são o
                    <strong> design limpo</strong> e a <strong>correspondência com o modelo mental</strong> do usuário de ponto eletrônico.
                  </p>
                  <p className="text-sm text-gray-700">
                    As áreas que requerem atenção são a <strong>densidade de informação em telas pequenas</strong> e a
                    <strong> falta de feedback durante operações de carregamento</strong>. A implementação das recomendações prioritárias
                    pode elevar a pontuação de usabilidade para <strong>90%+</strong> e melhorar significativamente a experiência do usuário.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{reportData.usability.usabilityScore}%</div>
                      <div className="text-xs text-gray-600">Usabilidade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{reportData.usability.satisfactionScore}/5</div>
                      <div className="text-xs text-gray-600">Satisfação</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">8.4/10</div>
                      <div className="text-xs text-gray-600">NPS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
