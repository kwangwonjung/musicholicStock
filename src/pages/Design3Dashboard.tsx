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
  // Sidebar에서 허용하는 타입('dashboard' | 'schedule')과 일치시킵니다.
  const [activeMenu, setActiveMenu] = useState<'dashboard' | 'schedule'>('dashboard');

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

    </div>
  );
}