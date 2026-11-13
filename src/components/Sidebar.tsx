import {
  LayoutGrid,
  Calendar as CalendarIcon,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  activeMenu: 'dashboard' | 'schedule';
  setActiveMenu: (menu: 'dashboard' | 'schedule') => void;
  userName: string;
  userRole: string;
  onLogout: () => void;
}

export default function Sidebar({
  activeMenu,
  setActiveMenu,
  userName,
  userRole,
  onLogout,
}: SidebarProps) {
  return (
    <aside className="w-15px bg-[#0f2342] text-slate-300 flex flex-col items-center justify-between py-4 shrink-0 select-none">
      <div className="flex flex-col items-center gap-4 w-full">
        <nav className="flex flex-col items-center gap-2 w-full px-2 mt-2">
          <button
            onClick={() => setActiveMenu('dashboard')}
            title="종목별 투자지표"
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
              activeMenu === 'dashboard'
                ? 'bg-[#1d63ed] text-white shadow-sm'
                : 'text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>

          <button
            onClick={() => setActiveMenu('schedule')}
            title="조회 일정"
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
              activeMenu === 'schedule'
                ? 'bg-[#1d63ed] text-white shadow-sm'
                : 'text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </nav>
      </div>

      {/* 하단 로그아웃 및 접속 계정 표시 */}
      <div className="flex flex-col items-center gap-3">
        <div
          title={`${userName} (${userRole})`}
          className="w-8 h-8 rounded-full bg-slate-700/80 border border-slate-600 flex items-center justify-center text-[11px] font-bold text-white"
        >
          {userName.slice(0, 1)}
        </div>
        <button
          onClick={onLogout}
          title="로그아웃"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}