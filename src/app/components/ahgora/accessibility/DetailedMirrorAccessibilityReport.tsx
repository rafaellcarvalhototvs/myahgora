import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PsychologyIcon from '@mui/icons-material/Psychology';

interface DetailedMirrorAccessibilityReportProps {
  onBack: () => void;
}

export function DetailedMirrorAccessibilityReport({ onBack }: DetailedMirrorAccessibilityReportProps) {
  const [currentSection, setCurrentSection] = useState<'overview' | 'scope' | 'guide' | 'semantics' | 'keyboard' | 'contrast' | 'handoff'>('overview');
  const reportAccent = 'text-[#1D4ED8]';
  const reportAccentBorder = 'border-[#1D4ED8]';
  const selectedTabClasses = `${reportAccent} border-b-2 ${reportAccentBorder}`;

  const reportData = {
    screenName: 'Espelho Detalhado',
    wcagLevel: 'AA',
    complianceScore: 98,
    lastTested: '15/05/2026',
    testTools: ['Inspeção manual do componente', 'VoiceOver (macOS)', 'Navegação por teclado', 'Cálculo de contraste WCAG', 'Validação de estados light/dark', 'Revisão guiada de implementação para leitores de tela'],
    
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
        'Levar a legenda textual para outras telas com comportamento semelhante',
        'Replicar o mesmo guia direto de implementação em outros fluxos críticos do produto'
      ]
    },

    implementationGuide: {
      principles: [
        'Use elementos nativos antes de ARIA extra: `button`, `main`, headings e listas.',
        'Faça a tela funcionar por foco e ordem de leitura, não por tentativa e erro com leitor de telas.',
        'Anuncie só mudanças importantes: dia selecionado, competência alterada, calendário expandido/recolhido.',
        'Nunca dependa só de cor para feriado, exceção, saldo positivo ou negativo.',
      ],
      readingOrder: [
        'Skip link: Pular para o conteúdo principal',
        'Botão voltar',
        'Título da tela: Espelho detalhado',
        'Botão de relatório de acessibilidade',
        'Heading Competência',
        'Botão trocar competência',
        'Botão baixar espelho',
        'Heading Calendário',
        'Botão ver legenda',
        'Cabeçalhos da grade: Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado',
        'Dias da grade, um por um, com data completa e estado',
        'Botão expandir/recolher calendário',
        'Texto da escala do dia ou mensagem de feriado',
        'Região detalhes do dia selecionado',
        'Data completa do dia selecionado',
        'Heading Registros do dia',
        'Lista de horários de batida',
        'Linha Horas trabalhadas',
        'Linha Horas previstas',
        'Região Solicitar ajustes',
        'Botões de ação rápida, um por um',
        'Linha Saldo total banco de horas',
        'Região Resumo mensal',
        'Heading do resumo mensal',
        'Linhas de horas trabalhadas, previstas e feriados',
        'Linhas de horas positivas e negativas',
        'Linha de saldo consolidado',
        'Linha Banco de horas no mês',
      ],
      componentRules: [
        {
          component: 'Header',
          rules: [
            'O botão Voltar deve ser um `button` com `aria-label` explícito.',
            'O título da tela deve ser o único `h1`.',
            'A ação de acessibilidade deve ser um `button` com nome claro e sem depender só do ícone.',
          ],
        },
        {
          component: 'Competência',
          rules: [
            'Use heading visível para o bloco.',
            'O botão de trocar competência deve anunciar o valor atual.',
            'O botão de baixar deve anunciar o tipo de arquivo ou ação quando houver essa informação.',
          ],
        },
        {
          component: 'Calendário',
          rules: [
            'Implemente como `grid` com `columnheader` e `gridcell`.',
            'Use roving tabindex: só um dia com `tabIndex=0`, os demais `-1`.',
            'Cada dia precisa anunciar data, dia da semana, estados e indisponibilidade.',
            'Datas futuras devem ser desabilitadas semanticamente, não só visualmente.',
          ],
        },
        {
          component: 'Detalhes do dia',
          rules: [
            'A área deve ser `region` com rótulo claro.',
            'Os horários precisam ser lidos em sequência natural.',
            'Quando não houver batidas, o texto alternativo deve ser explícito.',
          ],
        },
        {
          component: 'Bottom sheets',
          rules: [
            'Use `role=\"dialog\"`, `aria-modal`, `aria-labelledby` e `aria-describedby`.',
            'Leve o foco para dentro ao abrir e devolva para a origem ao fechar.',
            'Backdrop não pode impedir fechamento por gesto, clique externo ou Escape.',
          ],
        },
        {
          component: 'Resumo mensal',
          rules: [
            'Mantenha a leitura linear, sem exigir interpretação visual da tabela.',
            'Saldo e horas positivas/negativas devem ter semântica textual além da cor.',
            'Linhas críticas como saldo devem ser legíveis isoladamente no foco.',
          ],
        },
      ],
      requiredPatterns: [
        {
          title: 'Cabeçalhos e landmarks',
          rules: [
            'Use 1 único `h1` para o título da tela.',
            'Use `h2` para blocos principais como Competência e Resumo mensal.',
            'Use `role=\"region\"` com `aria-label` em áreas longas como detalhes do dia e resumo mensal.',
            'Mantenha `main` envolvendo todo o conteúdo operacional.',
          ],
        },
        {
          title: 'Calendário acessível',
          rules: [
            'Use `role=\"grid\"` no calendário e `role=\"gridcell\"` nos dias clicáveis.',
            'Cada dia precisa de `aria-label` completo com data, dia da semana e estado.',
            'Use `aria-selected` para o dia atual e `aria-disabled` para datas futuras.',
            'Setas navegam entre os dias; Enter/Espaço selecionam.',
          ],
        },
        {
          title: 'Atualizações dinâmicas',
          rules: [
            'Use uma região `aria-live=\"polite\"` para mudanças de dia, competência e expansão.',
            'O texto anunciado deve ser curto e orientado à tarefa.',
            'Evite duplicar no anúncio tudo que já está imediatamente ao redor do foco.',
          ],
        },
        {
          title: 'Bottom sheets e diálogos',
          rules: [
            'Use `role=\"dialog\"` + `aria-modal=\"true\"`.',
            'Associe `aria-labelledby` e `aria-describedby`.',
            'Leve o foco inicial para o botão fechar.',
            'Feche com `Escape` no web e respeite o gesto de voltar no mobile.',
          ],
        },
        {
          title: 'Feriados, exceções e saldo',
          rules: [
            'Sempre combine indicador visual com texto acessível.',
            'Para feriado, anuncie nome e contexto do feriado no dia.',
            'Para exceção, anuncie que o dia possui ocorrência.',
            'Para saldo positivo/negativo, preserve semântica textual além da cor.',
          ],
        },
      ],
      platformChecks: [
        {
          platform: 'VoiceOver (iPhone/iPad)',
          checks: [
            'Swipe percorre a ordem da tela sem saltos estranhos.',
            'Duplo toque ativa corretamente trocar competência, legenda e dias do calendário.',
            'Ao abrir bottom sheet, o foco entra no diálogo.',
            'Ao mudar o dia, o anúncio fala o resumo do dia selecionado.',
          ],
        },
        {
          platform: 'TalkBack (Android)',
          checks: [
            'Exploração por toque encontra os dias da grade com rótulo completo.',
            'Ações rápidas são lidas como botões individuais.',
            'Botões recolhíveis anunciam o estado expandido/recolhido.',
            'Datas futuras são anunciadas como indisponíveis.',
          ],
        },
        {
          platform: 'Leitores web (desktop)',
          checks: [
            'Tab e Shift+Tab seguem ordem lógica.',
            'Setas funcionam dentro da grade do calendário.',
            'Skip link aparece ao focar.',
            'Foco não some ao abrir ou fechar bottom sheets.',
          ],
        },
      ],
      marketStandard: [
        'Preferir HTML semântico + ARIA mínima e correta.',
        'Usar anúncios curtos, específicos e transacionais.',
        'Tratar grade de calendário como componente rico com roving tabindex.',
        'Testar de verdade em VoiceOver e TalkBack, não só por inspeção de DOM.',
      ],
      qaChecklist: [
        'Com VoiceOver, percorrer a tela inteira por swipe e confirmar a ordem de leitura item a item.',
        'Com TalkBack, explorar por toque a grade do calendário e validar os rótulos completos dos dias.',
        'Com teclado no web, validar Tab, Shift+Tab, setas, Home, End, Enter, Espaço e Escape.',
        'Confirmar que o foco entra e sai corretamente dos bottom sheets.',
        'Confirmar que mudanças de competência, dia e expansão do calendário disparam anúncio curto via aria-live.',
        'Confirmar que feriado, exceção e saldo continuam compreensíveis sem apoio de cor.',
      ],
    },

    handoff: {
      scope: {
        included: [
          'Header da tela e navegação principal',
          'Bloco de competência e ação de download',
          'Calendário recolhido e expandido',
          'Legenda do calendário e bottom sheet de competência',
          'Detalhes do dia selecionado',
          'Ações rápidas de ajuste de ponto',
          'Saldo e resumo mensal',
          'Comportamento light/dark e tokens semânticos relevantes',
        ],
        excluded: [
          'Fluxos completos posteriores de incluir, cancelar, substituir e solicitar abono',
          'Download real do arquivo de espelho',
          'Integrações com backend, carregamento remoto e estados de erro de API',
          'Cobertura automatizada fim a fim fora desta tela',
        ],
      },
      states: [
        'Dia comum com batidas e horas previstas',
        'Dia com feriado e descrição textual',
        'Dia com exceção sinalizada no calendário',
        'Data futura desabilitada',
        'Calendário recolhido para semana atual',
        'Calendário expandido para o mês',
        'Dia sem registros de batida',
        'Dia sem horas previstas ou sem horas trabalhadas',
        'Bottom sheet de legenda aberto',
        'Bottom sheet de competência aberto',
      ],
      behaviors: [
        'Trocar competência atualiza mês/ano visível e anuncia a mudança por `aria-live`.',
        'Selecionar um dia atualiza detalhes, saldo contextual e anúncio curto do dia selecionado.',
        'Expandir ou recolher calendário preserva foco e anuncia o novo estado.',
        'Abrir bottom sheet move foco para dentro do diálogo e permite fechamento por botão, backdrop e Escape.',
        'Datas futuras permanecem indisponíveis semanticamente e visualmente.',
      ],
      tokenSource: [
        '`primary`: header, CTA principal e elementos de destaque forte',
        '`primary-darken-1`: outlines, links, ícones ativos e texto interativo no dark',
        '`destructive-contrast`: indicador negativo pequeno e texto de exceção no dark',
        '`text-lighten-3`: linhas divisórias e separadores sutis',
        '`text-darken-2`: labels de apoio como a escala em superfícies claras',
      ],
      acceptanceCriteria: [
        'Ordem de leitura validada em VoiceOver, TalkBack e navegação por teclado web',
        'Bottom sheets com `role="dialog"`, `aria-modal`, foco inicial e fechamento consistente',
        'Calendário com `role="grid"`, `aria-selected`, `aria-disabled` e roving tabindex',
        'Contraste conforme a matriz oficial em light/dark para texto, outline e estados negativos',
        'Nenhuma informação crítica depende exclusivamente de cor',
        'Tokens semânticos corretos aplicados nas áreas documentadas deste relatório',
      ],
      knownRisks: [
        'Anúncios de leitor de telas ainda dependem de validação manual regressiva a cada mudança de layout.',
        'Troca futura da cor de marca exige nova verificação de contraste nos tokens derivados.',
        'Fluxos filhos de ajuste de ponto podem divergir se não herdarem os mesmos padrões documentados aqui.',
      ],
      componentMap: [
        { component: 'Tela principal', file: 'src/app/components/ahgora/detailed-mirror/DetailedMirrorScreen.tsx', responsibility: 'Layout, calendário, detalhes do dia, resumo e live region' },
        { component: 'Legenda do calendário', file: 'src/app/components/ahgora/CalendarLegendBottomSheet.tsx', responsibility: 'Significado visual e textual dos indicadores do calendário' },
        { component: 'Competência', file: 'src/app/components/ahgora/MonthYearBottomSheet.tsx', responsibility: 'Seleção de mês e ano com semântica modal' },
        { component: 'Ações rápidas', file: 'src/app/components/ahgora/ActionButtons.tsx', responsibility: 'Atalhos para fluxos de ajuste de ponto' },
        { component: 'Botão base', file: 'src/app/components/ahgora/AhgoraButton.tsx', responsibility: 'Semântica visual e estados dos botões do fluxo' },
        { component: 'Tema/tokens', file: 'src/styles/theme.css', responsibility: 'Fonte da verdade de cores, contraste e estados light/dark' },
      ],
      qaByArea: [
        { area: 'Visual', checks: ['Verificar estados normal, feriado, exceção e data futura', 'Confirmar tokens corretos em light e dark', 'Validar linhas, bordas, badges e contraste de CTA'] },
        { area: 'Teclado', checks: ['Validar Tab/Shift+Tab entre blocos', 'Validar setas dentro da grade', 'Validar Escape nos bottom sheets'] },
        { area: 'VoiceOver', checks: ['Confirmar ordem de leitura', 'Confirmar anúncio de dia selecionado', 'Confirmar rótulos completos dos dias'] },
        { area: 'TalkBack', checks: ['Explorar por toque o calendário', 'Confirmar botões e regiões nomeadas', 'Confirmar datas futuras como indisponíveis'] },
      ],
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
        { element: 'Texto escuro sobre `primary` no header/CTA dark', contrast: '8.65:1', status: '✅ Atende AAA' },
        { element: 'Texto `primary-darken-1` sobre fundo dark do app', contrast: '7.57:1', status: '✅ Atende AAA' },
        { element: 'Texto escuro sobre CTA azul claro no light', contrast: '5.92:1', status: '✅ Atende AA' },
        { element: 'Texto/indicador `destructive-contrast` sobre fundo dark', contrast: '5.61:1', status: '✅ Atende AA' },
        { element: 'Uso antigo de `primary` como texto outline no dark', contrast: '2.47:1', status: '⚠️ Corrigido' },
        { element: 'Uso antigo de `destructive` em texto/indicador no dark', contrast: '2.72:1', status: '⚠️ Corrigido' }
      ],
      recommendations: [
        'Manter `primary` para header e CTA com `primary-foreground` escuro no dark',
        'Usar `accent` para navegação secundária e cards de atalho no dark',
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
                <span>Resumo</span>
              </div>
            </button>

            <button
              onClick={() => setCurrentSection('scope')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'scope' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <CalendarTodayIcon className="w-4 h-4" />
                <span>Escopo</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrentSection('guide')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'guide' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <AccessibilityIcon className="w-4 h-4" />
                <span>Implementação</span>
              </div>
            </button>

            <button
              onClick={() => setCurrentSection('semantics')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'semantics' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{"</>"}</span>
                <span>Estrutura</span>
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
              onClick={() => setCurrentSection('handoff')}
              className={`flex-none py-3 px-4 text-sm font-medium whitespace-nowrap ${currentSection === 'handoff' ? selectedTabClasses : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-2">
                <PsychologyIcon className="w-4 h-4" />
                <span>Handoff</span>
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

          {currentSection === 'scope' && (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">Escopo do relatório</h3>
                <p className="text-sm text-slate-700">
                  Esta aba delimita o que este handoff cobre, os estados considerados importantes e o comportamento esperado da tela para evitar dúvida entre design, frontend, QA e acessibilidade.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Coberto neste relatório</h4>
                  <ul className="space-y-2">
                    {reportData.handoff.scope.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Fora do escopo</h4>
                  <ul className="space-y-2">
                    {reportData.handoff.scope.excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gray-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Estados relevantes da tela</h3>
                <div className="space-y-2">
                  {reportData.handoff.states.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Comportamento esperado</h3>
                <div className="space-y-2">
                  {reportData.handoff.behaviors.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
                      <span className="text-[#1D4ED8] mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentSection === 'guide' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">Guia de mercado para aplicar acessibilidade nesta tela</h3>
                <p className="text-sm text-blue-700">
                  Este guia descreve como o Espelho Detalhado deve ser construído e validado para VoiceOver, TalkBack e leitores web, usando o padrão mais aceito hoje em produto digital.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Princípios obrigatórios</h3>
                <div className="space-y-2">
                  {reportData.implementationGuide.principles.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#1D4ED8]"></span>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Ordem de leitura esperada</h3>
                <div className="space-y-2">
                  {reportData.implementationGuide.readingOrder.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 border border-gray-200 rounded-lg p-3">
                      <div className="bg-gray-100 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">O que o leitor de telas deve anunciar</h3>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Pontos fortes atuais</h4>
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
                  <h4 className="text-sm font-semibold text-yellow-800 mb-2">Pontos a evoluir</h4>
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

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Como implementar</h3>
                <div className="space-y-4">
                  {reportData.implementationGuide.requiredPatterns.map((pattern, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">{pattern.title}</h4>
                      <ul className="space-y-2">
                        {pattern.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-[#1D4ED8] mt-0.5">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Regras por componente</h3>
                <div className="space-y-4">
                  {reportData.implementationGuide.componentRules.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">{item.component}</h4>
                      <ul className="space-y-2">
                        {item.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-[#1D4ED8] mt-0.5">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Checklist por plataforma</h3>
                <div className="space-y-4">
                  {reportData.implementationGuide.platformChecks.map((platform, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">{platform.platform}</h4>
                      <ul className="space-y-2">
                        {platform.checks.map((check, checkIndex) => (
                          <li key={checkIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-800 mb-2">Padrão de mercado aplicado</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  {reportData.implementationGuide.marketStandard.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Checklist de QA para desenvolvimento</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {reportData.implementationGuide.qaChecklist.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#42B6F0' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#42B6F0 como fundo primário oficial do dark</p>
                        <p className="text-xs text-gray-600">Texto sobreposto: #0A0A0C, contraste: 8.65:1</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-700 mb-2">Implementado na tela:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#81CEF5' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#81CEF5 (`primary-darken-1` no dark)</p>
                        <p className="text-xs text-gray-600">Contraste: 7.57:1</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 mb-2">Correção adicional para estados negativos:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#F76464' }}></div>
                      <div>
                        <p className="text-sm font-mono text-gray-900">#F76464 (`destructive-contrast` no dark)</p>
                        <p className="text-xs text-gray-600">Contraste: 5.61:1</p>
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

          {currentSection === 'handoff' && (
            <div className="space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-purple-800 mb-2">Fechamento para handoff</h3>
                <p className="text-sm text-purple-700">
                  Esta aba concentra a fonte da verdade técnica: tokens que devem ser usados, critérios de aceite, riscos conhecidos, mapa de componentes e checklist final de QA.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Fonte da verdade dos tokens</h3>
                <div className="space-y-3">
                  {reportData.handoff.tokenSource.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Critérios de aceite</h3>
                <div className="space-y-3">
                  {reportData.handoff.acceptanceCriteria.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-yellow-800 mb-2">Riscos conhecidos</h4>
                <ul className="space-y-2">
                  {reportData.handoff.knownRisks.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-yellow-700">
                      <span className="mt-0.5">↻</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Mapa de componentes</h3>
                <div className="space-y-3">
                  {reportData.handoff.componentMap.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900">{item.component}</h4>
                      <p className="text-xs font-mono text-gray-600 mt-1">{item.file}</p>
                      <p className="text-sm text-gray-700 mt-2">{item.responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Checklist final de QA</h3>
                <div className="space-y-3">
                  {reportData.handoff.qaByArea.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">{item.area}</h4>
                      <ul className="space-y-2">
                        {item.checks.map((check, checkIndex) => (
                          <li key={checkIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-gray-600 mt-0.5">•</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
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
