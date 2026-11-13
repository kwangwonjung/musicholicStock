import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Design3Dashboard from './pages/Design3Dashboard';

export default function App() {
  const [session, setSession] = useState<any>(null);

  // 1. 로그인이 안 되어 있다면 로그인 페이지 출력
  if (!session) {
    return (
      <LoginPage 
        onLoginSuccess={(userSession) => {
          setSession(userSession); // 로그인 성공 시 세션 정보를 저장하여 리다이렉션 효과 유도
        }} 
      />
    );
  }

  // 2. 로그인 성공 시 디자인 3 대시보드 화면으로 리다이렉션(렌더링)
  return (
    <Design3Dashboard 
      session={session} 
      onLogout={() => setSession(null)} // 로그아웃 시 다시 로그인 페이지로 복귀
    />
  );
}