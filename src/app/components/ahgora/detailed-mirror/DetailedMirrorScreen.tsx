import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { format, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isWeekend as isWeekendDate, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ActionButtons } from '../ActionButtons';
import { MonthYearBottomSheet } from '../MonthYearBottomSheet';
import { AhgoraButton } from '../AhgoraButton';
import { CalendarLegendBottomSheet } from '../CalendarLegendBottomSheet';

interface DetailedMirrorScreenProps {
  onBack: () => void;
  onAccessibilityReport?: () => void;
}

interface DayData {
  date: string;
  day: number;
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  isCurrentMonth: boolean;
  isSelected: boolean;
  hasPunch: boolean;
  hasException: boolean;
  isWeekend: boolean;
  isHoliday: boolean;
  dateObj: Date;
}

interface DayDetail {
  date: string;
  schedule: string;
  punches: string[];
  expectedHours: string;
  workedHours: string;
  isHoliday: boolean;
  holidayName?: string;
  holidayDescription?: string;
  hasExpectedHours: boolean;
  hasWorkedHours: boolean;
}

interface HolidayInfo {
  name: string;
  description: string;
  type: string;
}

export function DetailedMirrorScreen({ onBack, onAccessibilityReport }: DetailedMirrorScreenProps) {
  // Months in Portuguese
  const MONTHS_IN_PORTUGUESE = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Parse month/year from string like "Abril - 2026"
  const parseMonthYear = (monthYearStr: string): { monthIndex: number; year: number } => {
    const [monthName, yearStr] = monthYearStr.split(' - ');
    const monthIndex = MONTHS_IN_PORTUGUESE.findIndex(m => m === monthName);
    const year = parseInt(yearStr, 10);
    return { monthIndex: monthIndex >= 0 ? monthIndex : 3, year: isNaN(year) ? 2026 : year };
  };

  // Format month/year to string
  const formatMonthYear = (monthIndex: number, year: number): string => {
    return `${MONTHS_IN_PORTUGUESE[monthIndex]} - ${year}`;
  };

  // Check if a date is in the future (after today)
  const isFutureDate = useCallback((date: Date): boolean => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    
    const dateYear = date.getFullYear();
    const dateMonth = date.getMonth();
    const dateDay = date.getDate();
    
    // Compare year, month, day
    if (dateYear > todayYear) return true;
    if (dateYear === todayYear && dateMonth > todayMonth) return true;
    if (dateYear === todayYear && dateMonth === todayMonth && dateDay > todayDay) return true;
    return false;
  }, []);

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const today = new Date();
    return formatMonthYear(today.getMonth(), today.getFullYear());
  });
  const [selectedDay, setSelectedDay] = useState<number>(() => {
    const today = new Date();
    return today.getDate();
  });
  const [showMonthYearBottomSheet, setShowMonthYearBottomSheet] = useState(false);
  const [showCalendarLegendBottomSheet, setShowCalendarLegendBottomSheet] = useState(false);
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
  const [focusedDayIndex, setFocusedDayIndex] = useState<number>(-1);
  const [liveMessage, setLiveMessage] = useState('');
  const calendarGridRef = useRef<HTMLDivElement>(null);
  const isInitialRenderRef = useRef(true);

  const holidayMap = useMemo<Record<string, HolidayInfo>>(() => ({
    '2026-01-01': {
      name: 'Confraternização Universal',
      description: 'Feriado nacional de Ano-Novo com expediente suspenso durante todo o dia.',
      type: 'Feriado nacional',
    },
    '2026-02-16': {
      name: 'Carnaval',
      description: 'Ponto facultativo com operação reduzida e sem jornada regular prevista.',
      type: 'Ponto facultativo',
    },
    '2026-02-18': {
      name: 'Quarta-feira de Cinzas',
      description: 'Expediente parcial com ajustes de jornada conforme política interna.',
      type: 'Ponto facultativo',
    },
    '2026-03-23': {
      name: 'Aniversário de Florianópolis',
      description: 'Feriado municipal com suspensão da escala padrão para a unidade local.',
      type: 'Feriado municipal',
    },
    '2026-04-03': {
      name: 'Paixão de Cristo',
      description: 'Feriado religioso nacional sem expediente previsto para a jornada regular.',
      type: 'Feriado nacional',
    },
    '2026-04-21': {
      name: 'Tiradentes',
      description: 'Feriado nacional cívico com expediente suspenso e marcações desabilitadas.',
      type: 'Feriado nacional',
    },
  }), []);

  const announce = useCallback((message: string) => {
    setLiveMessage('');
    globalThis.setTimeout(() => {
      setLiveMessage(message);
    }, 50);
  }, []);

  const getHolidayInfo = useCallback((date: Date): HolidayInfo | null => {
    const key = format(date, 'yyyy-MM-dd');
    return holidayMap[key] ?? null;
  }, [holidayMap]);

  const themeClasses = {
    app: 'bg-background text-foreground',
    card: 'bg-background border-border',
    header: 'bg-primary dark:bg-[var(--surface-strong)] border-b border-transparent dark:border-border/70',
    headerText: 'text-white',
    heading: 'text-foreground',
    bodyText: 'text-foreground',
    mutedText: 'text-muted-foreground',
    border: 'border-border',
    panel: 'border-border bg-card',
    calendarButton: 'focus:ring-ring dark:focus:ring-primary dark:focus:ring-offset-[var(--surface-elevated)]',
    statusPositive: 'text-chart-2',
    statusNegative: 'text-destructive',
    emphasis: 'text-primary-darken-1',
    outlineButton: 'border-primary text-primary-darken-1 dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/15',
    ghostButton: 'text-white hover:bg-white/20',
  };
  
  // Effect to adjust selectedDay when month changes
  useEffect(() => {
    const { monthIndex, year } = parseMonthYear(selectedMonth);
    // Get last day of the month
    const lastDayOfMonth = new Date(year, monthIndex + 1, 0).getDate();
    // If selectedDay is greater than last day of month, set to last day
    if (selectedDay > lastDayOfMonth) {
      setSelectedDay(lastDayOfMonth);
    }
  }, [selectedMonth, selectedDay]);

  // Effect to set focused day when month changes or day is selected
  useEffect(() => {
    const currentDays = isCalendarExpanded ? days : getCurrentWeekDays();
    
    // Try to find the selected day index
    const selectedIndex = currentDays.findIndex(day => day.isSelected && day.isCurrentMonth);
    
    // If selected day is found and not future, focus it
    if (selectedIndex >= 0 && !isFutureDate(currentDays[selectedIndex].dateObj)) {
      setFocusedDayIndex(selectedIndex);
    } else {
      // Find first non-future day
      const firstNonFutureIndex = currentDays.findIndex(day => !isFutureDate(day.dateObj));
      if (firstNonFutureIndex >= 0) {
        setFocusedDayIndex(firstNonFutureIndex);
      } else if (currentDays.length > 0) {
        // Fallback to first day if all are future (shouldn't happen in practice)
        setFocusedDayIndex(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, selectedDay, isCalendarExpanded]);

  // Effect to focus the focused day element
  useEffect(() => {
    if (focusedDayIndex >= 0 && calendarGridRef.current) {
      const buttons = calendarGridRef.current.querySelectorAll('button[role="gridcell"]');
      if (buttons[focusedDayIndex]) {
        (buttons[focusedDayIndex] as HTMLButtonElement).focus();
      }
    }
  }, [focusedDayIndex]);

  useEffect(() => {
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;
      return;
    }

    const detail = getDayDetail(selectedDay);
    announce(`Dia ${detail.date} selecionado. ${detail.isHoliday ? `${detail.holidayName}. ${detail.holidayDescription}` : `Horas trabalhadas ${detail.workedHours} e horas previstas ${detail.expectedHours}.`}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay]);
  
  // Calculate worked hours from punch times
  const calculateWorkedHours = (punches: string[]): string => {
    if (punches.length < 4) return '00:00';
    
    // Convert HH:MM to minutes
    const toMinutes = (time: string): number => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };
    
    const [in1, out1, in2, out2] = punches.map(toMinutes);
    const morning = out1 - in1;
    const afternoon = out2 - in2;
    const totalMinutes = morning + afternoon;
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  // Get current month/year for bottom sheet
  const { monthIndex: currentMonthIndex, year: currentYear } = parseMonthYear(selectedMonth);
  
  // Check if selected month is the current month (for showing/hiding adjustment options)
  const today = new Date();
  const isCurrentMonthSelected = currentMonthIndex === today.getMonth() && currentYear === today.getFullYear();

  // Handle month/year selection from bottom sheet
  const handleMonthYearSelect = (monthIndex: number, year: number) => {
    setSelectedMonth(formatMonthYear(monthIndex, year));
    // In a real app, you would fetch data for the new month/year
    announce(`Competência alterada para ${formatMonthYear(monthIndex, year)}.`);
  };

  // Open bottom sheet
  const handleOpenMonthYearBottomSheet = () => {
    setShowMonthYearBottomSheet(true);
  };

  // Close bottom sheet
  const handleCloseMonthYearBottomSheet = () => {
    setShowMonthYearBottomSheet(false);
  };

  const handleOpenCalendarLegendBottomSheet = () => {
    setShowCalendarLegendBottomSheet(true);
    announce('Legenda do calendário aberta.');
  };

  const handleCloseCalendarLegendBottomSheet = () => {
    setShowCalendarLegendBottomSheet(false);
    announce('Legenda do calendário fechada.');
  };
  
  // Toggle calendar expand/collapse
  const toggleCalendarExpand = () => {
    const nextExpanded = !isCalendarExpanded;
    setIsCalendarExpanded(nextExpanded);
    announce(nextExpanded ? 'Calendário expandido para o mês completo.' : 'Calendário recolhido para a semana atual.');
  };

  // Generate calendar days for the selected month/year
  const days = useMemo(() => {
    const { monthIndex, year } = parseMonthYear(selectedMonth);
    
    // Create date for first day of the month
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    
    // Start from the Sunday of the week containing the first day
    const calendarStart = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 }); // 0 = Sunday
    
    // End on the Saturday of the week containing the last day of month
    const lastDayOfMonth = endOfMonth(firstDayOfMonth);
    const calendarEnd = endOfWeek(lastDayOfMonth, { weekStartsOn: 0 });
    
    const daysArray: DayData[] = [];
    let currentDate = calendarStart;
    
    // Mock data for punches/exceptions/holidays - in a real app this would come from an API
    // We'll simulate some data based on day numbers for demonstration
    
    while (currentDate <= calendarEnd) {
      const day = currentDate.getDate();
      const isCurrentMonth = isSameMonth(currentDate, firstDayOfMonth);
      const isWeekend = isWeekendDate(currentDate);
      const dayOfWeek = getDay(currentDate); // 0 = Sunday
      
      // Determine if this day is selected
      const isSelected = isCurrentMonth && day === selectedDay;
      
      // Mock data logic - generate based on day number for demonstration
      // In a real app, this would come from an API
      const hasPunch = isCurrentMonth && day % 3 !== 0; // ~66% of days have punches
      const hasException = isCurrentMonth && day % 7 === 0; // Every 7th day has exception
      const holidayInfo = isCurrentMonth ? getHolidayInfo(currentDate) : null;
      const isHoliday = Boolean(holidayInfo);
      
      daysArray.push({
        date: format(currentDate, 'yyyy-MM-dd'),
        day,
        dayOfWeek,
        isCurrentMonth,
        isSelected,
        hasPunch,
        hasException,
        isWeekend,
        isHoliday,
        dateObj: new Date(currentDate),
      });
      
      currentDate = addDays(currentDate, 1);
    }
    
    return daysArray;
  }, [selectedMonth, selectedDay]);

  // Calculate current week (Sunday to Saturday) containing the selected day
  const getCurrentWeekDays = (): DayData[] => {
    // Find the selected day
    const selectedDayData = days.find(d => d.isSelected);
    if (!selectedDayData) return days.slice(0, 7); // Fallback to first 7 days
    
    // Find index of selected day
    const selectedIndex = days.findIndex(d => d.isSelected);
    
    // Use dayOfWeek property to find start of week
    const selectedDayOfWeek = selectedDayData.dayOfWeek; // 0 = Sunday
    // Start index: selectedIndex - selectedDayOfWeek
    const startIndex = selectedIndex - selectedDayOfWeek;
    if (startIndex < 0) return days.slice(0, 7);
    return days.slice(startIndex, startIndex + 7);
  };

  // Function to get day details based on selected day
  const getDayDetail = (day: number): DayDetail => {
    const dayData = days.find(d => d.day === day && d.isCurrentMonth);
    
    if (!dayData) {
      // Fallback
      const punches = ['08:30', '12:00', '13:00', '17:30'];
      return {
        date: `${day} de ${MONTHS_IN_PORTUGUESE[currentMonthIndex]}, ${currentYear}`,
        schedule: '08:00 às 12:00 - 13:00 às 17:00',
        punches,
        expectedHours: '08:00',
        workedHours: calculateWorkedHours(punches),
        isHoliday: false,
        holidayName: undefined,
        holidayDescription: undefined,
        hasExpectedHours: true,
        hasWorkedHours: true
      };
    }
    
    // Format date in Portuguese
    const dateFormatted = format(dayData.dateObj, "dd 'de' MMMM, yyyy", { locale: ptBR });
    
    // Determine if it's a holiday
    if (dayData.isHoliday) {
      const holidayInfo = getHolidayInfo(dayData.dateObj);
      return {
        date: dateFormatted,
        schedule: `${holidayInfo?.type ?? 'Feriado'} - ${holidayInfo?.name ?? 'Feriado'}: ${holidayInfo?.description ?? 'Sem expediente previsto.'}`,
        punches: [],
        expectedHours: '',
        workedHours: '',
        isHoliday: true,
        holidayName: holidayInfo?.name,
        holidayDescription: holidayInfo?.description,
        hasExpectedHours: false,
        hasWorkedHours: false
      };
    }
    
    // Default day details
    const punches = dayData.isSelected ? ['08:27', '12:01', '13:02', '17:27'] : ['08:30', '12:00', '13:00', '17:30'];
    return {
      date: dateFormatted,
      schedule: dayData.isSelected ? '08:00 às 12:00 - 13:00 às 17:00' : '08:00 às 12:00 - 13:00 às 17:00',
      punches,
      expectedHours: '08:00',
      workedHours: calculateWorkedHours(punches),
      isHoliday: false,
      holidayName: undefined,
      holidayDescription: undefined,
      hasExpectedHours: true,
      hasWorkedHours: true
    };
  };

  const dayDetail = getDayDetail(selectedDay);

  // Mock monthly summary data based on month and year
  const getMonthlySummary = (monthIndex: number, year: number) => {
    // Base data structure
    const baseSummary = {
      hoursWorked: '130:53',
      hoursExpected: '184:00',
      holidays: [
        { name: 'Aniversário Florianópolis', hours: '08:00' },
        { name: 'Paixão de Cristo', hours: '08:00' }
      ],
      monthlyPositive: '05:53',
      monthlyNegative: '-11:09',
      bankAccumulated: '01:53',
      totalBalance: '-03:23',
      bankThisMonth: '-05:16'
    };

    // Adjust data based on month and year
    if (monthIndex === 2 && year === 2026) { // March 2026
      return {
        ...baseSummary,
        hoursWorked: '128:15',
        hoursExpected: '176:00',
        monthlyPositive: '02:15',
        monthlyNegative: '-08:00',
        totalBalance: '+01:30',
        bankThisMonth: '+02:15',
        bankAccumulated: '03:48'
      };
    }

    if (monthIndex === 1 && year === 2026) { // February 2026
      return {
        ...baseSummary,
        hoursWorked: '120:00',
        hoursExpected: '168:00',
        holidays: [
          { name: 'Carnaval', hours: '08:00' },
          { name: 'Quarta-feira de Cinzas', hours: '08:00' }
        ],
        monthlyPositive: '00:00',
        monthlyNegative: '-12:00',
        totalBalance: '-05:00',
        bankThisMonth: '-12:00',
        bankAccumulated: '01:53'
      };
    }

    if (monthIndex === 0 && year === 2026) { // January 2026
      return {
        ...baseSummary,
        hoursWorked: '152:30',
        hoursExpected: '184:00',
        holidays: [
          { name: 'Confraternização Universal', hours: '08:00' }
        ],
        monthlyPositive: '08:30',
        monthlyNegative: '-05:00',
        totalBalance: '+03:30',
        bankThisMonth: '+08:30',
        bankAccumulated: '10:23'
      };
    }

    // Default for other months (e.g., April 2026)
    return baseSummary;
  };

  // Get monthly summary for current selected month
  const monthlySummary = getMonthlySummary(currentMonthIndex, currentYear);

  // Get name of previous month for "accumulated until" text
  const getPreviousMonthName = (monthIndex: number, year: number): string => {
    let prevMonthIndex = monthIndex - 1;
    let prevYear = year;
    
    if (prevMonthIndex < 0) {
      prevMonthIndex = 11;
      prevYear = year - 1;
    }
    
    return `${MONTHS_IN_PORTUGUESE[prevMonthIndex]}/${prevYear}`;
  };

  const handleDayClick = (day: DayData) => {
    // Only allow selecting days from the current month that are not in the future
    if (day.isCurrentMonth && !isFutureDate(day.dateObj)) {
      setSelectedDay(day.day);
    }
  };

  const handleCalendarKeyDown = (e: React.KeyboardEvent, index: number) => {
    const currentDays = isCalendarExpanded ? days : getCurrentWeekDays();
    const cols = 7;
    
    // Helper to find next non-future index in a direction
    const findNextNonFutureIndex = (startIndex: number, delta: number): number => {
      let nextIndex = startIndex + delta;
      
      // Boundary checks
      if (nextIndex < 0 || nextIndex >= currentDays.length) {
        return startIndex; // Stay where we are if out of bounds
      }
      
      // Skip future dates
      while (nextIndex >= 0 && nextIndex < currentDays.length && isFutureDate(currentDays[nextIndex].dateObj)) {
        nextIndex += delta;
      }
      
      // If we went out of bounds, return to original
      if (nextIndex < 0 || nextIndex >= currentDays.length) {
        return startIndex;
      }
      
      return nextIndex;
    };
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedDayIndex(findNextNonFutureIndex(index, -1));
        break;
      case 'ArrowRight':
        e.preventDefault();
        setFocusedDayIndex(findNextNonFutureIndex(index, 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedDayIndex(findNextNonFutureIndex(index, -cols));
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedDayIndex(findNextNonFutureIndex(index, cols));
        break;
      case 'Home':
        e.preventDefault();
        // Find first non-future index
        let homeIndex = 0;
        while (homeIndex < currentDays.length && isFutureDate(currentDays[homeIndex].dateObj)) {
          homeIndex++;
        }
        if (homeIndex < currentDays.length) {
          setFocusedDayIndex(homeIndex);
        }
        break;
      case 'End':
        e.preventDefault();
        // Find last non-future index
        let endIndex = currentDays.length - 1;
        while (endIndex >= 0 && isFutureDate(currentDays[endIndex].dateObj)) {
          endIndex--;
        }
        if (endIndex >= 0) {
          setFocusedDayIndex(endIndex);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        // Only allow selection if day is from current month and not future
        if (currentDays[index].isCurrentMonth && !isFutureDate(currentDays[index].dateObj)) {
          setSelectedDay(currentDays[index].day);
        }
        break;
    }
  };

  const handleAction = (action: string) => {
    // Handle actions from ActionButtons
    console.log('Action:', action);
    // In a real app, this would navigate to the appropriate screen
  };

  return (
    <div className={`min-h-screen flex justify-center font-['Open_Sans'] ${themeClasses.app}`}>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Pular para o conteúdo principal
      </a>

      <div className="sr-only" aria-live="polite" aria-atomic="true" role="status">
        {liveMessage}
      </div>
      
      <div className={`w-full max-w-md min-h-screen relative shadow-2xl dark:shadow-none pb-20 transition-colors ${themeClasses.card}`}>
        {/* Header */}
        <div className={`sticky top-0 z-10 px-6 py-3 flex items-center justify-between shrink-0 shadow-sm h-[62px] relative ${themeClasses.header}`}>
          <button
            onClick={onBack}
            className="p-1 mr-2 focus:outline-none focus:ring-2 rounded text-white focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            aria-label="Voltar para tela anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
            </svg>
          </button>
          
          <div className="flex-1 flex justify-start">
            <h1 className={`font-semibold text-[18px] leading-[28px] tracking-[0.027px] ${themeClasses.headerText}`}>
              Espelho detalhado
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            {onAccessibilityReport && (
              <AhgoraButton
                size="sm"
                variant="ghost"
                onClick={onAccessibilityReport}
                aria-label="Ver relatório de acessibilidade desta tela"
                className={themeClasses.ghostButton}
              >
                <AccessibilityIcon className="w-4 h-4" />
              </AhgoraButton>
            )}
          </div>
        </div>

        <main id="main-content" className="px-6 py-6">
          {/* Competência Block */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className={`text-base font-semibold tracking-[0.024px] ${themeClasses.heading}`}>Competência</h2>
            </div>
            <div className="flex items-center justify-between">
              <AhgoraButton
                variant="outline"
                size="md"
                onClick={handleOpenMonthYearBottomSheet}
                aria-expanded={showMonthYearBottomSheet}
                aria-label={`Trocar mês e ano da competência, atual: ${selectedMonth}`}
                className={`flex items-center gap-2 font-medium ${themeClasses.outlineButton}`}
              >
                <span>{selectedMonth}</span>
                <SwapHorizIcon className="w-4 h-4" aria-hidden="true" />
              </AhgoraButton>
              <AhgoraButton
                size="md"
                variant="outline"
                aria-label="Baixar espelho de ponto"
                className={`flex items-center gap-2 font-medium ${themeClasses.outlineButton}`}
              >
                <span>Baixar espelho</span>
              </AhgoraButton>
            </div>
          </div>

          {/* Calendar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-base font-semibold tracking-[0.024px] ${themeClasses.heading}`}>Calendário</h3>
              <AhgoraButton
                variant="ghost"
                size="sm"
                onClick={handleOpenCalendarLegendBottomSheet}
                aria-expanded={showCalendarLegendBottomSheet}
                aria-label="Abrir legenda do calendário"
                className="text-primary-darken-1 dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/15"
              >
                <span>Ver legenda</span>
              </AhgoraButton>
            </div>
            
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-2 mb-2" role="row">
              {['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map((day, index) => (
                <div
                  key={day}
                  className={`text-center text-xs font-semibold py-1 ${themeClasses.heading}`}
                  role="columnheader"
                  aria-label={day}
                >
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][index]}
                </div>
              ))}
            </div>
            
            {/* Calendar grid */}
            <div
              ref={calendarGridRef}
              id="calendar-grid"
              className={`grid grid-cols-7 gap-2 ${isCalendarExpanded ? 'mb-3' : ''}`}
              role="grid"
              aria-label={`Calendário do mês de ${selectedMonth}`}
            >
              {(isCalendarExpanded ? days : getCurrentWeekDays()).map((day, index) => {
                const dayName = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][day.dayOfWeek];
                const indicators = [];
                const holidayInfo = day.isHoliday ? getHolidayInfo(day.dateObj) : null;
                if (day.isHoliday) indicators.push(`feriado: ${holidayInfo?.name ?? 'feriado'}`);
                if (day.hasException) indicators.push('exceção');
                
                const future = isFutureDate(day.dateObj);
                
                const ariaLabel = `${day.day} de ${selectedMonth.split(' - ')[0]}, ${dayName}${indicators.length > 0 ? `, ${indicators.join(', ')}` : ''}${day.isCurrentMonth ? '' : ' (não pertence ao mês atual)'}${future ? ', data futura' : ''}`;
                
                return (
                  <button
                    key={day.date}
                    onClick={() => handleDayClick(day)}
                    disabled={future}
                    className={`
                      relative flex items-center justify-center h-10 rounded-lg text-sm font-medium transition-colors
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                      ${themeClasses.calendarButton}
                      ${future ? 'cursor-not-allowed opacity-50' : ''}
                      ${day.isSelected
                        ? 'bg-primary text-white'
                        : day.isWeekend
                          ? 'text-muted-foreground'
                          : 'text-foreground hover:bg-muted/40 dark:hover:bg-muted/20'
                      }
                      ${!day.isCurrentMonth ? 'opacity-40' : ''}
                    `}
                    aria-label={ariaLabel}
                    aria-selected={day.isSelected}
                    aria-disabled={future}
                    role="gridcell"
                    onKeyDown={(e) => handleCalendarKeyDown(e, index)}
                    tabIndex={future ? -1 : (focusedDayIndex === index ? 0 : -1)}
                  >
                    {day.day}
                    {/* Indicators with screen reader text */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                      {day.isHoliday && (
                        <>
                          <div className="w-1 h-1 rounded-full bg-primary" aria-hidden="true"></div>
                          <span className="sr-only">{holidayInfo?.name ?? 'Feriado'}</span>
                        </>
                      )}
                      {day.hasException && (
                        <>
                          <div className="w-1 h-1 rounded-full bg-destructive" aria-hidden="true"></div>
                          <span className="sr-only">Exceção</span>
                        </>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Expand/Collapse button */}
            <div className="flex justify-center mt-2 mb-3">
              <AhgoraButton
                variant="ghost"
                size="md"
                onClick={toggleCalendarExpand}
                className="px-3 border border-primary bg-[#eaf8ff] dark:bg-primary/15 text-[#0c6d9e] dark:text-primary hover:bg-[#d7f0ff] dark:hover:bg-primary/20"
                aria-expanded={isCalendarExpanded}
                aria-controls="calendar-grid"
                aria-label={isCalendarExpanded ? "Recolher calendário" : "Expandir calendário"}
              >
                {isCalendarExpanded ? (
                  <ChevronUpIcon className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                )}
              </AhgoraButton>
            </div>

            {/* Schedule */}
            {dayDetail.schedule && (
              <div className={`text-center text-sm mt-2 mb-3 ${dayDetail.isHoliday ? themeClasses.emphasis : themeClasses.mutedText}`}>
                {dayDetail.isHoliday ? dayDetail.schedule : (
                  <>
                    <span className="font-semibold">Escala:</span> {dayDetail.schedule}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Selected Day Details */}
          <div className={`mb-6 border rounded-[4px] p-4 ${themeClasses.panel}`} role="region" aria-label="Detalhes do dia selecionado">
            <div className="mb-4">
              <h3 className={`text-base font-semibold tracking-[0.024px] ${themeClasses.heading}`}>{dayDetail.date}</h3>
            </div>
            
            <div className="space-y-4">
              {dayDetail.isHoliday && dayDetail.holidayName && (
                <div className="rounded-[4px] border p-3 border-[#bfe6fa] bg-[#f7fbff] dark:border-primary/30 dark:bg-primary/10">
                  <h4 className={`text-sm font-semibold ${themeClasses.heading}`}>{dayDetail.holidayName}</h4>
                  {dayDetail.holidayDescription && (
                    <p className={`mt-1 text-sm ${themeClasses.bodyText}`}>{dayDetail.holidayDescription}</p>
                  )}
                </div>
              )}
              <div>
                <h4 className={`text-sm font-semibold mb-3 ${themeClasses.bodyText}`}>Registros do dia:</h4>
                <div className="flex flex-wrap gap-3">
                  {dayDetail.punches.length > 0 ? (
                    dayDetail.punches.map((punch, index) => (
                      <div
                        key={index}
                        className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 border bg-[#eaf8ff] dark:bg-primary/15 border-primary"
                      >
                        <p className={`text-sm font-semibold ${themeClasses.bodyText}`}>
                          {punch}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm italic text-muted-foreground">Não há registros de batidas</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3">
                <span className={`text-sm font-medium ${themeClasses.bodyText}`}>Horas trabalhadas:</span>
                {dayDetail.hasWorkedHours ? (
                  <span className={`text-sm font-semibold ${themeClasses.bodyText}`}>{dayDetail.workedHours}</span>
                ) : (
                  <span className={`text-sm font-medium italic ${themeClasses.bodyText}`}>Não há horas trabalhadas</span>
                )}
              </div>
              <div className={`flex items-center justify-between pt-3 border-t ${themeClasses.border}`}>
                <span className={`text-sm font-medium ${themeClasses.bodyText}`}>Horas previstas:</span>
                {dayDetail.hasExpectedHours ? (
                  <span className={`text-sm font-semibold ${themeClasses.bodyText}`}>{dayDetail.expectedHours}</span>
                ) : (
                  <span className={`text-sm font-medium italic ${themeClasses.bodyText}`}>Não há horas previstas</span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions - Reusing the same component from home screen */}
          {isCurrentMonthSelected && (
            <div className="-mx-6">
              <ActionButtons onAction={handleAction} />
            </div>
          )}

          {/* Bank Hours Summary - Same as home screen */}
          <div className={`flex justify-between items-center w-full mb-6 py-4 border-t border-b ${themeClasses.border}`}>
            <div className="flex items-center gap-2">
               <div className="w-4 h-5 flex items-center justify-center">
                 <svg width="8" height="14" viewBox="0 0 8 13.3333" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 0V4H0.00666682L0 4.00667L2.66667 6.66667L0 9.33333L0.00666682 9.34H0V13.3333H8V9.34H7.99333L8 9.33333L5.33333 6.66667L8 4.00667L7.99333 4H8V0H0ZM6.66667 9.66667V12H1.33333V9.66667L4 7L6.66667 9.66667ZM4 6.33333L1.33333 3.66667V1.33333H6.66667V3.66667L4 6.33333Z" fill="var(--foreground)" />
                 </svg>
               </div>
               <span className={`text-sm ${themeClasses.bodyText}`}>Saldo total banco de horas</span>
            </div>
            <span className={`text-sm font-bold ${monthlySummary.totalBalance.startsWith('-') ? themeClasses.statusNegative : themeClasses.statusPositive}`}>
              {monthlySummary.totalBalance}
            </span>
          </div>

          {/* Monthly Summary */}
          <div className="mb-6" role="region" aria-label="Resumo mensal">
            <h3 className={`text-base font-semibold mb-4 tracking-[0.024px] ${themeClasses.heading}`}>Resumo mensal, {formatMonthYear(currentMonthIndex, currentYear).replace(' - ', ', ')}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.bodyText}`}>Horas Trabalhadas</span>
                <span className={`text-sm font-medium ${themeClasses.bodyText}`}>{monthlySummary.hoursWorked}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.bodyText}`}>Horas Previstas</span>
                <span className={`text-sm font-medium ${themeClasses.bodyText}`}>{monthlySummary.hoursExpected}</span>
              </div>
              
              {monthlySummary.holidays.map((holiday, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={`text-sm ${themeClasses.bodyText}`}>{holiday.name}</span>
                  <span className={`text-sm font-medium ${themeClasses.bodyText}`}>{holiday.hours}</span>
                </div>
              ))}
              
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.bodyText}`}>Horas mensais positivas</span>
                <span className={`text-sm font-bold ${themeClasses.statusPositive}`}>{monthlySummary.monthlyPositive}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.bodyText}`}>Horas mensais negativas</span>
                <span className={`text-sm font-bold ${themeClasses.statusNegative}`}>{monthlySummary.monthlyNegative}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.bodyText}`}>Banco de horas acumulado até {getPreviousMonthName(currentMonthIndex, currentYear)}</span>
                <span className={`text-sm font-medium ${themeClasses.bodyText}`}>{monthlySummary.bankAccumulated}</span>
              </div>
              
              <div className={`flex justify-between items-center pt-3 border-t ${themeClasses.border}`}>
                <span className={`text-sm font-medium ${themeClasses.bodyText}`}>SALDO</span>
                <span className={`text-base font-bold ${monthlySummary.totalBalance.startsWith('-') ? themeClasses.statusNegative : themeClasses.statusPositive}`}>
                  {monthlySummary.totalBalance}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.bodyText}`}>Banco de horas no mês</span>
                <span className={`text-sm font-bold ${monthlySummary.bankThisMonth.startsWith('-') ? themeClasses.statusNegative : themeClasses.statusPositive}`}>
                  {monthlySummary.bankThisMonth}
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Month/Year Selection Bottom Sheet */}
      <MonthYearBottomSheet
        isVisible={showMonthYearBottomSheet}
        onClose={handleCloseMonthYearBottomSheet}
        onSelect={handleMonthYearSelect}
        currentMonth={currentMonthIndex}
        currentYear={currentYear}
      />
      <CalendarLegendBottomSheet
        isVisible={showCalendarLegendBottomSheet}
        onClose={handleCloseCalendarLegendBottomSheet}
      />
    </div>
  );
}
