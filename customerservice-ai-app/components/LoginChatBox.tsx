"use client";

import { useState, useRef } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function LoginChatBox() {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [language, setLanguage] = useState('en');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", type: "received" },
    { text: "I need help with my order.", type: "sent" }
  ]);
  const [username, setUsername] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [contactInfo, setContactInfo] = useState("");

  const inputRef = useRef(null); // Reference for the input field

  const texts = {
    en: {
      login: 'Login',
      username: 'Username',
      password: 'Password',
      loginButton: 'Login',
      continueAsGuest: 'Continue as Guest',
      forgotPassword: 'Forgot Password?',
      resetInstructions: 'Please provide your email or phone number for password reset.',
      submit: 'Submit',
      welcome: 'Welcome, User',
      aiService: 'AI Customer Service',
      chatPlaceholder: 'Type your message...',
      homeButton: 'Home',
      description: 'Login to access our AI-powered customer support service, available 24/7. Our advanced AI technology ensures you receive the best assistance anytime you need it. Developed with care by the talented interns from the Headstarter team.',
      language: 'Language',
      suggestions: [
        'How can I track my order?',
        'What is your return policy?',
        'Can I update my shipping address?',
        'How do I contact customer support?',
        'What are your business hours?',
      ],
    },
    es: {
      login: 'Iniciar sesión',
      username: 'Nombre de usuario',
      password: 'Contraseña',
      loginButton: 'Iniciar sesión',
      continueAsGuest: 'Continuar como invitado',
      forgotPassword: '¿Olvidaste tu contraseña?',
      resetInstructions: 'Por favor, proporciona tu correo electrónico o número de teléfono para restablecer la contraseña.',
      submit: 'Enviar',
      welcome: 'Bienvenido, Usuario',
      aiService: 'Servicio de Atención al Cliente AI',
      chatPlaceholder: 'Escribe tu mensaje...',
      homeButton: 'Inicio',
      description: 'Inicia sesión para acceder a nuestro servicio de atención al cliente impulsado por IA, disponible las 24 horas, los 7 días de la semana. Nuestra tecnología avanzada de IA garantiza que recibas la mejor asistencia en cualquier momento que la necesites. Desarrollado con cuidado por los talentosos internos del equipo de Headstarter.',
      language: 'Idioma',
      suggestions: [
        '¿Cómo puedo rastrear mi pedido?',
        '¿Cuál es su política de devoluciones?',
        '¿Puedo actualizar mi dirección de envío?',
        '¿Cómo contacto con el servicio de atención al cliente?',
        '¿Cuáles son sus horarios de atención?',
      ],
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, type: "sent" }]);
      setMessage(""); // Clear the input field after sending
      inputRef.current?.focus(); // Refocus input field after sending message
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
    inputRef.current?.focus(); // Refocus input field after selecting suggestion
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      handleSendMessage();
    }
  };

  const handleLogin = () => {
    if (loginUsername.trim() !== "") {
      setUsername(loginUsername);
      setLoggedIn(true);
    }
  };

  return (
    <div className={`flex min-h-screen items-center justify-center p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`relative w-[1850px] h-[770px] ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} rounded-lg shadow-xl border flex flex-col`}>
        
        {/* Header with AI Customer Service and Dark/Light Mode Toggle */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span>{texts[language].aiService}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? 'bg-gray-600' : 'bg-gray-200'
              } relative inline-flex h-8 w-16 items-center rounded-full`}
            >
              <span className="sr-only">Enable dark mode</span>
              <span
                className={`${
                  darkMode ? 'translate-x-8' : 'translate-x-1'
                } inline-block h-7 w-7 transform rounded-full bg-white transition`}
              />
              {darkMode ? <MoonIcon className="absolute left-2 h-5 w-5 text-white" /> : <SunIcon className="absolute right-2 h-5 w-5 text-black" />}
            </Switch>
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`p-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-gray-200 text-gray-900 border-gray-300'}`}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              {/* Add more languages as needed */}
            </select>
          </div>
        </div>

        {/* Main Content */}
        {!loggedIn ? (
          <div className="flex flex-col items-center p-6 h-full">
            {!forgotPassword ? (
              <>
                <h1 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{texts[language].login}</h1>
                <p className={`text-gray-600 mb-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-900'}`}>{texts[language].description}</p>
                <form className="flex flex-col space-y-4 w-full max-w-sm">
                  <input
                    type="text"
                    placeholder={texts[language].username}
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'text-gray-100 bg-gray-800 border-gray-600' : 'text-gray-900 bg-gray-100 border-gray-300'} w-full`}
                  />
                  <input
                    type="password"
                    placeholder={texts[language].password}
                    className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'text-gray-100 bg-gray-800 border-gray-600' : 'text-gray-900 bg-gray-100 border-gray-300'} w-full`}
                  />
                  <button
                    type="button"
                    className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full"
                    onClick={handleLogin}
                  >
                    {texts[language].loginButton}
                  </button>
                  <button
                    type="button"
                    className="p-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition w-full"
                    onClick={() => {
                      setUsername("Guest");
                      setLoggedIn(true);
                    }}
                  >
                    {texts[language].continueAsGuest}
                  </button>
                </form>
                <button
                  type="button"
                  className="mt-4 text-blue-500 hover:underline"
                  onClick={() => setForgotPassword(true)}
                >
                  {texts[language].forgotPassword}
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center p-6">
                <h1 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{texts[language].forgotPassword}</h1>
                <p className={`text-gray-600 mb-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-900'}`}>{texts[language].resetInstructions}</p>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'text-gray-100 bg-gray-800 border-gray-600' : 'text-gray-900 bg-gray-100 border-gray-300'} w-full`}
                />
                <button
                  type="button"
                  className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mt-4"
                  onClick={() => alert("Password reset instructions sent")}
                >
                  {texts[language].submit}
                </button>
                <button
                  type="button"
                  className="mt-4 text-blue-500 hover:underline"
                  onClick={() => setForgotPassword(false)}
                >
                  Back to Login
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className={`flex items-center px-6 py-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full flex items-center justify-center text-2xl`}>
                <span>👤</span>
              </div>
              <div className={`ml-4 text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{username || "User Name"}</div>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 flex flex-col overflow-hidden`}>
              <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'}`} style={{ scrollbarColor: darkMode ? '#4A4A4A #1E1E1E' : '#D0D0D0 #F5F5F5', scrollbarWidth: 'thin' }}>
                <div className="space-y-4">
                  {/* Chat Messages */}
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} space-x-2`}>
                      {msg.type === 'received' && <div className={`w-12 h-12 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full flex items-center justify-center text-2xl`}>
                        <span>🤖</span>
                      </div>}
                      <div className={`p-4 rounded-lg max-w-[80%] ${msg.type === 'sent' ? (darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-300 text-gray-900') : (darkMode ? 'bg-blue-800 text-gray-100' : 'bg-blue-100 text-gray-800')}`}
                        style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                      >
                        {msg.text}
                      </div>
                      {msg.type === 'sent' && <div className={`w-12 h-12 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full flex items-center justify-center text-2xl`}>
                        <span>👤</span>
                      </div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggestions and Input Area */}
              <div className={`flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <div className="p-4">
                  <h2 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>Suggested Questions:</h2>
                  <ul className={`list-disc pl-5 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {texts[language].suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:underline"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t p-4 flex items-center space-x-4">
                  <input
                    ref={inputRef} // Attach ref to input field
                    type="text"
                    placeholder={texts[language].chatPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className={`flex-grow p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'text-gray-100 bg-gray-800 border-gray-600' : 'text-gray-900 bg-gray-50 border-gray-300'}`}
                  />
                  <button
                    className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
