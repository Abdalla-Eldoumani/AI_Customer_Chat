'use client'; // Add this directive to mark the file as a client component

import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from './Header';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ChatInterface from './ChatInterface';
import SignUp from './SignUp';
import LiveChatStatus from './LiveChatStatus';
import FeedbackForm from './FeedbackForm';

enum AuthState {
  LoggedOut,
  LoggingIn,
  SigningUp,
  ForgotPassword,
  LoggedIn,
}

export default function CustomerSupportApp() {
  const [authState, setAuthState] = useState<AuthState>(AuthState.LoggedOut);

  const handleLogin = () => setAuthState(AuthState.LoggedIn);
  const handleLogout = () => setAuthState(AuthState.LoggedOut);
  const handleSignUp = () => setAuthState(AuthState.LoggedIn);

  const renderAuthComponent = () => {
    switch (authState) {
      case AuthState.LoggingIn:
        return (
          <Login
            onLogin={handleLogin}
            onForgotPassword={() => setAuthState(AuthState.ForgotPassword)}
            onSwitchToSignUp={() => setAuthState(AuthState.SigningUp)}
          />
        );
      case AuthState.SigningUp:
        return (
          <SignUp
            onSignUp={handleSignUp}
            onSwitchToLogin={() => setAuthState(AuthState.LoggingIn)}
          />
        );
      case AuthState.ForgotPassword:
        return (
          <ForgotPassword
            onBack={() => setAuthState(AuthState.LoggingIn)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen">
        <Header isLoggedIn={authState === AuthState.LoggedIn} onLogout={handleLogout} />
        <div className="flex-grow container mx-auto px-4 py-8">
          {authState === AuthState.LoggedIn ? (
            <div>
              <LiveChatStatus />
              <ChatInterface />
              <FeedbackForm />
            </div>
          ) : authState === AuthState.LoggedOut ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Welcome to Customer Support with AI</h2>
              <button
                onClick={() => setAuthState(AuthState.LoggingIn)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              >
                Login
              </button>
              <button
                onClick={() => setAuthState(AuthState.SigningUp)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          ) : (
            renderAuthComponent()
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
