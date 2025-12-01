
import React, { useState } from 'react';
import { View } from './types';
import { Dashboard } from './screens/Dashboard';
import { BookingScreen } from './screens/BookingScreen';
import { AccessScreen } from './screens/AccessScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { StudioScreen } from './screens/StudioScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SmartAssistant } from './components/SmartAssistant';
import { Notifications } from './components/Notifications';
import { MOCK_BOOKINGS, MOCK_TEAM } from './constants';
import { LayoutGrid, CalendarDays, QrCode, BarChart3, Users, Clapperboard, Handshake, LogOut, Settings } from 'lucide-react';

const HiveLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(5, 5) scale(0.9)">
      {/* Center/Left Dark */}
      <path d="M25 25 L46.65 37.5 V62.5 L25 75 L3.35 62.5 V37.5 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="2"/>
      
      {/* Top Center Dark */}
      <path d="M46.65 12.5 L68.3 25 V50 L46.65 62.5 L25 50 V25 Z" fill="#1e293b" stroke="#334155" strokeWidth="2"/>
      
      {/* Right Yellow Accent */}
      <path d="M68.3 25 L89.95 37.5 V62.5 L68.3 75 L46.65 62.5 V37.5 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
      
      {/* Bottom Center Dark */}
      <path d="M46.65 62.5 L68.3 75 V100 L46.65 112.5 L25 100 V75 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="2"/>

      {/* Tech Nodes */}
      <circle cx="46.65" cy="62.5" r="5" fill="white" className="animate-pulse" />
      <circle cx="68.3" cy="25" r="3" fill="#0f172a" stroke="#fbbf24" strokeWidth="1" />
      <circle cx="25" cy="50" r="3" fill="#334155" />
    </g>
  </svg>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Initial Login Flow
  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderScreen = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard onNavigate={setCurrentView} bookings={MOCK_BOOKINGS} team={MOCK_TEAM} />;
      case View.BOOKING:
        return <BookingScreen />;
      case View.ACCESS:
        return <AccessScreen />;
      case View.INSIGHTS:
        return <InsightsScreen />;
      case View.COMMUNITY:
        return <CommunityScreen />;
      case View.STUDIO:
        return <StudioScreen />;
      case View.PROFILE:
        return <ProfileScreen />;
      default:
        return <Dashboard onNavigate={setCurrentView} bookings={MOCK_BOOKINGS} team={MOCK_TEAM} />;
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: any; label: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${
        currentView === view ? 'text-teal-600' : 'text-slate-400 hover:text-slate-600'
      }`}
    >
      <Icon size={24} strokeWidth={currentView === view ? 2.5 : 2} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row max-w-7xl mx-auto md:shadow-2xl md:my-8 md:rounded-[3rem] overflow-hidden md:h-[90vh]">
      
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 bg-white border-r border-slate-100 p-6 z-20">
        <div className="flex items-center gap-3 mb-12">
          <HiveLogo className="w-10 h-10" />
          <span className="text-xl font-bold tracking-tight text-slate-900">HiveTech</span>
        </div>

        <div className="space-y-2 flex-1">
          {[
            { v: View.DASHBOARD, l: 'Dashboard', i: LayoutGrid },
            { v: View.BOOKING, l: 'Book Space', i: CalendarDays },
            { v: View.ACCESS, l: 'Access Pass', i: QrCode },
            { v: View.COMMUNITY, l: 'Partner & Opps', i: Handshake },
            { v: View.STUDIO, l: 'Creator Studio', i: Clapperboard },
            { v: View.INSIGHTS, l: 'Insights', i: BarChart3 },
          ].map((item) => (
            <button
              key={item.v}
              onClick={() => setCurrentView(item.v)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === item.v 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <item.i size={20} />
              <span className="font-medium text-sm">{item.l}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto space-y-4">
          <button 
             onClick={() => setCurrentView(View.PROFILE)}
             className={`flex items-center gap-3 w-full p-2 rounded-xl transition-colors ${currentView === View.PROFILE ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
          >
             <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-200">
                <img src="https://picsum.photos/100/100?random=10" alt="Profile" className="w-full h-full object-cover" />
             </div>
             <div className="text-left flex-1 min-w-0">
                <div className="font-bold text-sm text-slate-900 truncate">Adrian Lim</div>
                <div className="text-xs text-slate-500 truncate">Founder & CTO</div>
             </div>
             <Settings size={16} className="text-slate-400" />
          </button>
          
          <button 
             onClick={() => setIsLoggedIn(false)}
             className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-red-500 text-xs font-medium py-2 transition-colors"
          >
             <LogOut size={14} /> Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar relative bg-slate-50 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white sticky top-0 z-20 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <HiveLogo className="w-8 h-8" />
            <span className="font-bold text-lg text-slate-900">HiveTech</span>
          </div>
          <div className="flex items-center gap-3">
             <Notifications />
             <button onClick={() => setCurrentView(View.PROFILE)} className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-transparent active:ring-teal-500 transition-all">
                <img src="https://picsum.photos/100/100?random=10" alt="Profile" />
             </button>
          </div>
        </div>

        {/* Desktop Header Row (Hidden on Mobile) */}
        <div className="hidden md:flex justify-end p-6 pb-0 shrink-0">
            <Notifications />
        </div>

        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
          {renderScreen()}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 h-20 px-6 pb-2 grid grid-cols-5 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <NavItem view={View.DASHBOARD} icon={LayoutGrid} label="Home" />
        <NavItem view={View.COMMUNITY} icon={Handshake} label="Partners" />
        <NavItem view={View.STUDIO} icon={Clapperboard} label="Studio" />
        <NavItem view={View.BOOKING} icon={CalendarDays} label="Book" />
        <NavItem view={View.ACCESS} icon={QrCode} label="Access" />
      </nav>

      {/* AI Assistant */}
      <SmartAssistant />
    </div>
  );
};

export default App;
