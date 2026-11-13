import { useState, type FormEvent } from 'react';
import { TrendingUp, User, Lock, Eye, EyeOff, ChevronDown } from 'lucide-react';

interface UserOption {
  id: string;
  name: string;
  role: 'ADMIN' | 'USER';
}

interface AuthSession {
  userId: string;
  userName: string;
  role: 'ADMIN' | 'USER' | 'GUEST';
  isReadOnly: boolean;
}

interface LoginPageProps {
  onLoginSuccess: (session: AuthSession) => void;
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  // 사용자 리스트: 관리자 (Admin), 홍길동
  const [users] = useState<UserOption[]>([
    { id: 'admin', name: '관리자 (Admin)', role: 'ADMIN' },
    { id: 'user1', name: '홍길동', role: 'USER' },
  ]);

  const [selectedUser, setSelectedUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUserLogin = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!selectedUser) {
      setErrorMsg('사용자를 선택해주세요.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('비밀번호를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      const targetUser = users.find((u) => u.id === selectedUser);
      if (!targetUser) throw new Error('존재하지 않는 사용자입니다.');

      onLoginSuccess({
        userId: targetUser.id,
        userName: targetUser.name,
        role: targetUser.role,
        isReadOnly: false,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : '로그인에 실패했습니다. 비밀번호를 확인해주세요.';
      setErrorMsg(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    setErrorMsg('');
    onLoginSuccess({
      userId: 'guest',
      userName: '게스트',
      role: 'GUEST',
      isReadOnly: true,
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-4 font-sans">
      {/* max-w-[420px]를 적용하여 카드가 너무 퍼지지 않고 깔끔한 너비를 유지하도록 수정 */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-6 sm:p-8">
        
        {/* 상단 로고 및 타이틀 영역 */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-10 h-10 bg-[#162b4d] rounded-xl flex items-center justify-center mb-3 shadow-sm">
            <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.2} />
          </div>
          <h1 className="text-xl font-bold text-slate-900 leading-normal">
            투자지표 관리 시스템
          </h1>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">
            Investment Dashboard
          </p>
        </div>

        {/* 사용자 로그인 폼 */}
        <form onSubmit={handleUserLogin} className="space-y-4">
          <h2 className="text-[15px] font-bold text-slate-800 mb-2">
            사용자 로그인
          </h2>

          {/* 사용자 선택 드롭다운 */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              사용자 선택
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-slate-400" />
              </div>
              <select
                value={selectedUser}
                onChange={(e) => {
                  setSelectedUser(e.target.value);
                  setErrorMsg('');
                }}
                className={`w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors ${
                  selectedUser ? 'text-slate-800 font-medium' : 'text-slate-400'
                }`}
              >
                <option value="" disabled>
                  사용자를 선택하세요
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.id} className="text-slate-800">
                    {user.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* 비밀번호 입력 필드 */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              비밀번호
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="비밀번호를 입력하세요"
                className="w-full pl-10 pr-10 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                aria-label="비밀번호 표시 전환"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* 에러 메시지 노출 영역 */}
          {errorMsg && (
            <p className="text-xs text-red-500 font-medium pt-0.5">
              {errorMsg}
            </p>
          )}

          {/* 로그인 버튼 */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 bg-[#0066e6] hover:bg-[#0055c2] active:bg-[#0047a3] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        {/* 구분선 ("또는") */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-slate-400">또는</span>
          </div>
        </div>

        {/* 게스트 원클릭 로그인 버튼 */}
        <div>
          <button
            type="button"
            onClick={handleGuestLogin}
            className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 text-sm font-semibold border border-slate-200 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <User className="w-4 h-4 text-slate-500" />
            <span>게스트로 로그인</span>
          </button>
          <p className="text-center text-[11px] text-slate-400 mt-2.5">
            게스트 계정은 데이터 조회만 가능합니다.
          </p>
        </div>

      </div>
    </div>
  );
}