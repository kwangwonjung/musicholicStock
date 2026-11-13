import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardContent from './DashboardContent';
import StockDayContent from './StockDayContent';

interface AuthSession {
  userId: string;
  userName: string;
  role: 'ADMIN' | 'USER' | 'GUEST';
  isReadOnly: boolean;
}

interface Design3DashboardProps {
  session: AuthSession;
  onLogout: () => void;
}

export default function Design3Dashboard({ session, onLogout }: Design3DashboardProps) {
  const [activeMenu, setActiveMenu] = useState<'dashboard' | 'schedule' | 'settings' | 'alarm'>('dashboard');

  return (
    <div className="flex w-full h-screen bg-[#f0f4f9] font-sans overflow-hidden text-slate-800">
      
      {/* 1. 사이드바 컴포넌트 */}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        userName={session.userName}
        userRole={session.role}
        onLogout={onLogout}
      />

      {/* 2. 메뉴 선택에 따른 우측 컨텐츠 영역 분기 */}
      {activeMenu === 'dashboard' && (
        <DashboardContent isReadOnly={session.isReadOnly} />
      )}

      {activeMenu === 'schedule' && (
        <StockDayContent />
      )}

      {activeMenu === 'settings' && (
        <div className="flex-1 flex items-center justify-center text-slate-500 bg-white m-4 rounded-xl border border-slate-200">
          <p className="text-sm font-medium">시스템 설정 화면 영역입니다.</p>
        </div>
      )}

      {activeMenu === 'alarm' && (
        <div className="flex-1 flex items-center justify-center text-slate-500 bg-white m-4 rounded-xl border border-slate-200">
          <p className="text-sm font-medium">알림 화면 영역입니다.</p>
        </div>
      )}

    </div>
  );
}