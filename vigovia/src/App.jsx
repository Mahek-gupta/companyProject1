import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import EcommerceHome from './components/EcommerceHome';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <AuthPage onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <EcommerceHome onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
}