import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import '../styles/haptomorphism.css';

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
  setIsAdmin: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated, setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulación temporal - después conectaremos con tu backend
    setTimeout(() => {
      if (email === 'adminmc2@inmersion.io' && password === '2018.Madrid') {
        localStorage.setItem('auth_token', 'admin_token_temp');
        localStorage.setItem('user_role', 'admin');
        localStorage.setItem('user_name', 'Administrador');
        setIsAuthenticated(true);
        setIsAdmin(true);
        toast.success('¡Bienvenido Administrador!');
      } else if (email === 'user@inmersion.com' && password === 'user123') {
        localStorage.setItem('auth_token', 'user_token_temp');
        localStorage.setItem('user_role', 'user');
        localStorage.setItem('user_name', 'Usuario');
        setIsAuthenticated(true);
        setIsAdmin(false);
        toast.success('¡Bienvenido!');
      } else {
        toast.error('Credenciales incorrectas');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="hapto-login-container">
      {/* Subtle gradient background */}
      <div className="hapto-gradient-bg"></div>

      {/* 3D Login Card */}
      <div className="hapto-login-card">
        {/* Logo Section */}
        <div className="hapto-logo-section">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '20px'
          }}>
            <span style={{
              fontSize: '36px',
              fontWeight: '800',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              letterSpacing: '-0.5px'
            }}>
              INMERS
            </span>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ff4507, #e53801)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '16px',
              fontWeight: '800',
              fontSize: '36px',
              fontFamily: 'Nunito, sans-serif',
              letterSpacing: '0.5px',
              boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff, inset 2px 2px 4px rgba(255, 255, 255, 0.3)',
              transform: 'perspective(100px) rotateX(-5deg)'
            }}>
              ION
            </span>
          </div>
          <p className="hapto-subtitle">
            Plataforma IA integral para el turismo lingüístico
          </p>
          <p className="hapto-description">
            Proyecto inscrito en el programa Santander X Explorer
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleLogin} className="hapto-form">
          {/* Email Input */}
          <div className="hapto-input-group">
            <label className="hapto-label">Correo electrónico</label>
            <div className="hapto-input-wrapper">
              <Mail className="hapto-input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="hapto-input-field"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="hapto-input-group">
            <label className="hapto-label">Contraseña</label>
            <div className="hapto-input-wrapper">
              <Lock className="hapto-input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="hapto-input-field"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="hapto-toggle-password"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="hapto-submit-button primary"
          >
            {loading ? (
              <div className="hapto-loading">
                <div className="hapto-spinner"></div>
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              <span className="hapto-button-text">
                Iniciar sesión
                <svg className="hapto-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;