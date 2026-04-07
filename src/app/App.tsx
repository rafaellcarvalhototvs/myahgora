import { useState } from "react";
import { Header } from "./components/ahgora/Header";
import { TimeCard } from "./components/ahgora/TimeCard";
import { DetailLink } from "./components/ahgora/DetailLink";
import { ActionButtons } from "./components/ahgora/ActionButtons";
import { ComplimentsCarousel } from "./components/ahgora/ComplimentsCarousel";
import { AppCard } from "./components/ahgora/AppCard";
import { OptionsGrid } from "./components/ahgora/OptionsGrid";
import { BottomNav } from "./components/ahgora/BottomNav";
import { IncludePunchScreen } from "./components/ahgora/include-punch/IncludePunchScreen";
import { RequestAllowanceScreen } from "./components/ahgora/request-allowance/RequestAllowanceScreen";
import { CancelPunchScreen } from "./components/ahgora/cancel-punch/CancelPunchScreen";
import { RepositionPunchScreen } from "./components/ahgora/reposition-punch/RepositionPunchScreen";
import { SendMessageScreen } from "./components/ahgora/send-message/SendMessageScreen";
import { RequestOvertimeScreen } from "./components/ahgora/request-overtime/RequestOvertimeScreen";
import { ReplacePunchScreen } from "./components/ahgora/replace-punch/ReplacePunchScreen";
import { DailyExceptionScreen } from "./components/ahgora/daily-exception/DailyExceptionScreen";
import { PunchReminderScreen } from "./components/ahgora/reminder/PunchReminderScreen";
import { DetailedMirrorScreen } from "./components/ahgora/detailed-mirror/DetailedMirrorScreen";

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  // Use the Unsplash image found earlier
  const avatarUrl = "https://images.unsplash.com/photo-1710357956769-232ef8e9e1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBtYW4lMjBzbWlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTQ1OTM4OXww&ixlib=rb-4.1.0&q=80&w=1080";

  const handleAction = (action: string) => {
    if (action === 'include-punch') {
      setCurrentView('include-punch');
    } else if (action === 'request-allowance') {
      setCurrentView('request-allowance');
    } else if (action === 'cancel-punch') {
      setCurrentView('cancel-punch');
    } else if (action === 'reposition-punch') {
      setCurrentView('reposition-punch');
    } else if (action === 'send-message') {
      setCurrentView('send-message');
    } else if (action === 'request-overtime') {
      setCurrentView('request-overtime');
    } else if (action === 'replace-punch') {
      setCurrentView('replace-punch');
    } else if (action === 'daily-exception') {
      setCurrentView('daily-exception');
    } else if (action === 'detailed-mirror') {
      setCurrentView('detailed-mirror');
    }
  };

  if (currentView === 'include-punch') {
    return <IncludePunchScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'request-allowance') {
    return <RequestAllowanceScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'cancel-punch') {
    return <CancelPunchScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'reposition-punch') {
    return <RepositionPunchScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'send-message') {
    return <SendMessageScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'request-overtime') {
    return <RequestOvertimeScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'replace-punch') {
    return <ReplacePunchScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'daily-exception') {
    return <DailyExceptionScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'punch-reminder') {
    return <PunchReminderScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'detailed-mirror') {
    return <DetailedMirrorScreen onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#f0f0f5] flex justify-center font-['Open_Sans']">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl pb-20">
        <Header 
          userName="Rafael" 
          avatarUrl={avatarUrl} 
          onNotificationClick={() => setCurrentView('punch-reminder')}
        />
        <TimeCard />
        <DetailLink onClick={() => handleAction('detailed-mirror')} />
        <ActionButtons onAction={handleAction} />
        <ComplimentsCarousel />
        <AppCard />
        <OptionsGrid />
        <BottomNav />
      </div>
    </div>
  );
}
