import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { ActionButtons } from '../ActionButtons';

interface DetailedMirrorScreenProps {
  onBack: () => void;
}

interface DayData {
  date: string;
  day: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  hasPunch: boolean;
  hasException: boolean;
  isWeekend: boolean;
  isHoliday: boolean;
}

interface DayDetail {
  date: string;
  schedule: string;
  punches: string[];
  expectedHours: string;
  isHoliday: boolean;
  hasExpectedHours: boolean;
}

export function DetailedMirrorScreen({ onBack }: DetailedMirrorScreenProps) {
  const [selectedMonth, setSelectedMonth] = useState('Abril - 2026');
  const [selectedDay, setSelectedDay] = useState<number>(15);
  
  // Mock data for calendar
  const days: DayData[] = [
    { date: '2026-04-01', day: 1, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-02', day: 2, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-03', day: 3, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: true, isWeekend: false, isHoliday: false },
    { date: '2026-04-04', day: 4, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-05', day: 5, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-06', day: 6, isCurrentMonth: true, isSelected: false, hasPunch: false, hasException: false, isWeekend: true, isHoliday: false },
    { date: '2026-04-07', day: 7, isCurrentMonth: true, isSelected: false, hasPunch: false, hasException: false, isWeekend: true, isHoliday: false },
    { date: '2026-04-08', day: 8, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-09', day: 9, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-10', day: 10, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: true, isWeekend: false, isHoliday: false },
    { date: '2026-04-11', day: 11, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-12', day: 12, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-13', day: 13, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-14', day: 14, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-15', day: 15, isCurrentMonth: true, isSelected: true, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-16', day: 16, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-17', day: 17, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: true, isWeekend: false, isHoliday: false },
    { date: '2026-04-18', day: 18, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-19', day: 19, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-20', day: 20, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-21', day: 21, isCurrentMonth: true, isSelected: false, hasPunch: false, hasException: false, isWeekend: true, isHoliday: true },
    { date: '2026-04-22', day: 22, isCurrentMonth: true, isSelected: false, hasPunch: false, hasException: false, isWeekend: true, isHoliday: false },
    { date: '2026-04-23', day: 23, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-24', day: 24, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-25', day: 25, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: true, isWeekend: false, isHoliday: false },
    { date: '2026-04-26', day: 26, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-27', day: 27, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-28', day: 28, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-29', day: 29, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
    { date: '2026-04-30', day: 30, isCurrentMonth: true, isSelected: false, hasPunch: true, hasException: false, isWeekend: false, isHoliday: false },
  ];

  // Function to get day details based on selected day
  const getDayDetail = (day: number): DayDetail => {
    const dayData = days.find(d => d.day === day);
    
    if (day === 21) {
      return {
        date: '21 de Abril, 2026',
        schedule: 'Feriado - Tiradentes',
        punches: [],
        expectedHours: '',
        isHoliday: true,
        hasExpectedHours: false
      };
    }
    
    // Default day details
    return {
      date: `${day} de Abril, 2026`,
      schedule: day === 15 ? '08:00 às 12:00 - 13:00 às 17:00' : '08:00 às 12:00 - 13:00 às 17:00',
      punches: day === 15 ? ['08:27', '12:01', '13:02', '17:27'] : ['08:30', '12:00', '13:00', '17:30'],
      expectedHours: '08:00',
      isHoliday: dayData?.isHoliday || false,
      hasExpectedHours: true
    };
  };

  const dayDetail = getDayDetail(selectedDay);

  // Mock monthly summary data
  const monthlySummary = {
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

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  const handleAction = (action: string) => {
    // Handle actions from ActionButtons
    console.log('Action:', action);
    // In a real app, this would navigate to the appropriate screen
  };

  return (
    <div className="min-h-screen bg-[#f0f0f5] flex justify-center font-['Open_Sans']">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl pb-20">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary px-4 py-3 flex items-center gap-2 shrink-0 shadow-sm h-[62px] relative">
          <button
            onClick={onBack}
            className="text-white p-1 mr-2"
            aria-label="Voltar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
            </svg>
          </button>
          <h1 className="text-white font-semibold text-[18px] leading-[28px] tracking-[0.027px]">
            Espelho detalhado
          </h1>
        </div>

        <div className="px-4 py-6">
          {/* Competência Block */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-base font-semibold text-[#2A2A33] tracking-[0.024px]">Competência</label>
              <button className="text-sm text-primary font-medium hover:text-primary/80 transition-colors">
                Trocar competência
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F8F8FA] rounded-lg border border-gray-200 min-h-[84px]">
              <span className="text-base font-medium text-foreground">{selectedMonth}</span>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                <DownloadIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Baixar espelho</span>
              </button>
            </div>
          </div>

          {/* Calendar */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#2A2A33] mb-3 tracking-[0.024px]">Calendário</h3>
            <div className="grid grid-cols-7 gap-2 mb-3">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-muted-foreground py-1">
                  {day}
                </div>
              ))}
              {days.map((day) => (
                <button
                  key={day.date}
                  onClick={() => handleDayClick(day.day)}
                  className={`
                    relative flex items-center justify-center h-10 rounded-lg text-sm font-medium
                    ${day.isSelected
                      ? 'bg-primary text-white'
                      : day.isWeekend
                        ? 'text-[#A0A0AB]'
                        : 'text-[#2A2A33] hover:bg-gray-100'
                    }
                    ${!day.isCurrentMonth ? 'opacity-40' : ''}
                  `}
                >
                  {day.day}
                  {/* Indicators */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                    {day.isHoliday && (
                      <StarIcon className="w-3 h-3 text-primary" />
                    )}
                    {day.hasException && (
                      <div className="w-1 h-1 rounded-full bg-[#FF6B6B]"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Day Details */}
          <div className={`mb-6 border rounded-[4px] p-4 border-muted`}>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-[#2A2A33] tracking-[0.024px]">{dayDetail.date}</h3>
              {dayDetail.schedule && (
                <p className={`text-sm ${dayDetail.isHoliday ? 'text-[#FF6B6B]' : 'text-muted-foreground'} mt-1`}>
                  {dayDetail.schedule}
                </p>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Registros do dia:</h4>
                <div className="flex flex-wrap gap-3">
                  {dayDetail.punches.length > 0 ? (
                    dayDetail.punches.map((punch, index) => (
                      <div
                        key={index}
                        className="bg-[#eaf8ff] flex items-center justify-center px-[10px] py-[19px] relative rounded-[168px] shrink-0 size-[48px]"
                      >
                        <div aria-hidden="true" className="absolute border-0 border-[#19d] border-solid inset-0 pointer-events-none rounded-[168px]" />
                        <p className="font-['Open_Sans:Semibold',sans-serif] leading-[20极] not-italic relative shrink-0 text-[#3a3a45] text-[14px] tracking-[0.035px]">
                          {punch}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground italic">Não há registros de batidas</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-sm font-medium text-foreground">Horas previstas:</span>
                {dayDetail.hasExpectedHours ? (
                  <span className="text-base font-semibold text-foreground">{dayDetail.expectedHours}</span>
                ) : (
                  <span className="text-sm font-medium text-foreground italic">Não há horas previstas</span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions - Reusing the same component from home screen */}
          <ActionButtons onAction={handleAction} />

          {/* Bank Hours Summary - Same as home screen */}
          <div className="flex justify-between items-center w-full mb-6 py-4 border-t border-b border-gray-200">
            <div className="flex items-center gap-2">
               <div className="w-4 h-5 flex items-center justify-center">
                 <svg width="8" height="14" viewBox="0 0 8 13.3333" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 0V4H0.00666682L0 4.00667L2.66667 6.66667L0 9.33333L0.00666682 9.34H0V13.3333H8V9.34H7.99333L8 9.33333L5.33333 6.66667L8 4.00667L7.99333 4H8V0H0ZM6.66667 9.66667V12H1.33333V9.66667L4 7L6.66667 9.66667ZM4 6.33333L1.33333 3.66667V1.33333H6.66667V3.66667L4 6.33333Z" fill="#3A3A45" />
                 </svg>
               </div>
               <span className="text-sm text-foreground">Saldo total banco de horas</span>
            </div>
            <span className={`text-sm font-bold ${monthlySummary.totalBalance.startsWith('-') ? 'text-[#FF6B6B]' : 'text-[#4CAF50]'}`}>
              {monthlySummary.totalBalance}
            </span>
          </div>

          {/* Monthly Summary */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#2A2A33] mb-4 tracking-[0.024px]">Resumo mensal, Abril, 2026</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Horas Trabalhadas</span>
                <span className="text-sm font-medium text-foreground">{monthlySummary.hoursWorked}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Horas Previstas</span>
                <span className="text-sm font-medium text-foreground">{monthlySummary.hoursExpected}</span>
              </div>
              
              {monthlySummary.holidays.map((holiday, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-foreground">{holiday.name}</span>
                  <span className="text-sm font-medium text-foreground">{holiday.hours}</span>
                </div>
              ))}
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Horas mensais positivas</span>
                <span className="text-sm font-medium text-[#4CAF50]">{monthlySummary.monthlyPositive}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Horas mensais negativas</span>
                <span className="text-sm font-medium text-[#FF6B6B]">{monthlySummary.monthlyNegative}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Banco de horas acumulado até Março/2026</span>
                <span className="text-sm font-medium text-foreground">{monthlySummary.bankAccumulated}</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-sm font-medium text-foreground">SALDO</span>
                <span className={`text-base font-bold ${monthlySummary.totalBalance.startsWith('-') ? 'text-[#FF6B6B]' : 'text-[#4CAF50]'}`}>
                  {monthlySummary.totalBalance}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Banco de horas no mês</span>
                <span className={`text-sm font-medium ${monthlySummary.bankThisMonth.startsWith('-') ? 'text-[#FF6B6B]' : 'text-[#4CAF50]'}`}>
                  {monthlySummary.bankThisMonth}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}