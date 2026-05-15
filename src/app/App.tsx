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
import { AccessibilityReportScreen } from "./components/ahgora/accessibility/AccessibilityReportScreen";
import { DetailedMirrorAccessibilityReport } from "./components/ahgora/accessibility/DetailedMirrorAccessibilityReport";
import { ProfileSettingsScreen } from "./components/ahgora/profile/ProfileSettingsScreen";

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    const params = new URLSearchParams(globalThis.location?.search ?? "");
    return params.get("view") || "home";
  });

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
    return (
      <DetailedMirrorScreen 
        onBack={() => setCurrentView('home')} 
        onAccessibilityReport={() => setCurrentView('detailed-mirror-accessibility-report')}
      />
    );
  }

  if (currentView === 'accessibility-report') {
    return <AccessibilityReportScreen onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'profile-settings') {
    return (
      <ProfileSettingsScreen
        onBack={() => setCurrentView('home')}
        onAccessibilityReport={() => setCurrentView('accessibility-report')}
      />
    );
  }

  if (currentView === 'detailed-mirror-accessibility-report') {
    return <DetailedMirrorAccessibilityReport onBack={() => setCurrentView('detailed-mirror')} />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-background flex justify-center items-stretch font-['Open_Sans'] h-[100dvh] w-screen transition-colors">
      <div className="w-full max-w-md bg-background h-full relative shadow-2xl dark:shadow-none flex flex-col transition-colors">
        <Header 
          userName="Rafael" 
          avatarUrl={avatarUrl} 
          onNotificationClick={() => setCurrentView('punch-reminder')}
          onAvatarClick={() => setCurrentView('profile-settings')}
        />
        <div className="flex-1 min-h-0 overflow-y-auto pb-20 bg-background transition-colors">
          <TimeCard />
          <DetailLink onClick={() => handleAction('detailed-mirror')} />
          <ActionButtons onAction={handleAction} />
          <ComplimentsCarousel />
          <AppCard />
          <OptionsGrid />
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
