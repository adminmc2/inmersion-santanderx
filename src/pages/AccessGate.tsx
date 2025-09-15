import React, { useState, useEffect } from 'react';
import { Key, Users } from 'lucide-react';
import toast from 'react-hot-toast';

interface AccessGateProps {
  onAccessGranted: () => void;
}

const AccessGate: React.FC<AccessGateProps> = ({ onAccessGranted }) => {
  const [accessCode, setAccessCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Códigos válidos para Santander Explorer
  const validCodes = [
    'SANTANDERX2025'
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Verificar si ya tiene acceso guardado
    const hasAccess = localStorage.getItem('santander_access');
    const accessExpiry = localStorage.getItem('access_expiry');

    if (hasAccess && accessExpiry) {
      const expiryDate = new Date(accessExpiry);
      const now = new Date();

      if (now < expiryDate) {
        // Acceso válido, entrar directamente
        onAccessGranted();
      } else {
        // Acceso expirado, limpiar
        localStorage.removeItem('santander_access');
        localStorage.removeItem('access_expiry');
      }
    }
  }, [onAccessGranted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (validCodes.includes(accessCode.toUpperCase())) {
        // Guardar acceso por 30 días
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);

        localStorage.setItem('santander_access', 'granted');
        localStorage.setItem('access_expiry', expiryDate.toISOString());
        localStorage.setItem('access_date', new Date().toISOString());

        // Guardar información para tracking (sin datos personales)
        const accessLog = {
          timestamp: new Date().toISOString(),
          code: accessCode.toUpperCase(),
          sessionId: Date.now().toString()
        };
        localStorage.setItem('access_log', JSON.stringify(accessLog));

        // Enviar evento a Simple Analytics
        if (typeof window !== 'undefined' && (window as any).sa_event) {
          (window as any).sa_event('access_granted', {
            code: accessCode.toUpperCase()
          });
        }

        toast.success('¡Bienvenido al programa Santander X Explorer!');
        onAccessGranted();
      } else {
        toast.error('Código de acceso inválido');
      }
      setLoading(false);
    }, 500);
  };

  const inputWrapperStyle = {
    position: 'relative' as const,
    background: '#e0e5ec',
    borderRadius: '16px',
    boxShadow: 'inset 8px 8px 16px #b8bcc4, inset -8px -8px 16px #ffffff',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    width: '100%',
    padding: isMobile ? '16px' : '18px',
    background: 'linear-gradient(145deg, #ff4507, #e53801)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '16px',
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: '700',
    cursor: loading ? 'not-allowed' : 'pointer',
    boxShadow: `
      12px 12px 24px #b8bcc4,
      -12px -12px 24px #ffffff,
      inset 2px 2px 5px rgba(255, 255, 255, 0.2)
    `,
    transition: 'all 0.3s ease',
    opacity: loading ? 0.7 : 1,
    fontFamily: 'Nunito, sans-serif',
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#e0e5ec',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '20px' : '40px',
      fontFamily: 'Nunito, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto'
      }}>
        {/* Main Card */}
        <div style={{
          background: 'linear-gradient(145deg, #f0f5fd, #cdd2db)',
          borderRadius: '30px',
          padding: isMobile ? '30px 20px' : '50px 40px',
          boxShadow: `
            30px 30px 60px #b8bcc4,
            -30px -30px 60px #ffffff,
            inset 3px 3px 7px rgba(255, 255, 255, 0.6),
            inset -3px -3px 7px rgba(0, 0, 0, 0.08)
          `,
          position: 'relative' as const
        }}>
          {/* Logo */}
          <div style={{
            textAlign: 'center',
            marginBottom: '35px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: isMobile ? '36px' : '44px',
                fontWeight: '800',
                color: '#2c2c2c',
                letterSpacing: '-1px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}>
                INMERS
              </span>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #ff4507, #e53801)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '16px',
                fontWeight: '800',
                fontSize: isMobile ? '36px' : '44px',
                letterSpacing: '1px',
                boxShadow: `
                  10px 10px 20px #b8bcc4,
                  -10px -10px 20px #ffffff,
                  inset 2px 2px 4px rgba(255, 255, 255, 0.3)
                `,
                transform: 'perspective(100px) rotateX(-5deg)'
              }}>
                ION
              </span>
            </div>

            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#6e6e73',
              margin: '0 0 8px 0',
              fontWeight: '500'
            }}>
              Plataforma IA integral para el turismo lingüístico
            </p>

            <p style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#8e8e93',
              margin: 0,
              fontWeight: '400'
            }}>
              Proyecto inscrito en el programa Santander X Explorer
            </p>
          </div>

          {/* Access Section */}
          <div style={{
            background: '#e0e5ec',
            borderRadius: '20px',
            padding: '25px',
            marginBottom: '30px',
            boxShadow: 'inset 4px 4px 8px #b8bcc4, inset -4px -4px 8px #ffffff'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '12px'
            }}>
              <Users size={20} color="#ff4507" />
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#2c2c2c',
                margin: 0
              }}>
                Acceso Exclusivo
              </h2>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#6e6e73',
              textAlign: 'center',
              margin: 0,
              lineHeight: '1.5'
            }}>
              Contenido disponible para participantes del programa
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#2c2c2c',
                marginBottom: '12px',
                letterSpacing: '0.5px'
              }}>
                CÓDIGO DE ACCESO
              </label>

              <div style={inputWrapperStyle}>
                <Key style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#8e8e93'
                }} size={22} />

                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Ingresa el código"
                  required
                  style={{
                    width: '100%',
                    padding: isMobile ? '16px 20px 16px 55px' : '18px 24px 18px 60px',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: isMobile ? '16px' : '18px',
                    color: '#2c2c2c',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.parentElement!.style.boxShadow =
                      'inset 6px 6px 12px #b8bcc4, inset -6px -6px 12px #ffffff, 0 0 0 2px #ff4507';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.parentElement!.style.boxShadow =
                      'inset 8px 8px 16px #b8bcc4, inset -8px -8px 16px #ffffff';
                  }}
                />
              </div>

              <p style={{
                fontSize: '13px',
                color: '#8e8e93',
                marginTop: '12px',
                textAlign: 'center',
                lineHeight: '1.6'
              }}>
                El código fue compartido en el grupo de WhatsApp.<br/>
                Si no lo tienes, contacta al coordinador.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={buttonStyle}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `
                    15px 15px 30px #b8bcc4,
                    -15px -15px 30px #ffffff,
                    inset 2px 2px 5px rgba(255, 255, 255, 0.2)
                  `;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `
                  12px 12px 24px #b8bcc4,
                  -12px -12px 24px #ffffff,
                  inset 2px 2px 5px rgba(255, 255, 255, 0.2)
                `;
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    borderTopColor: '#ffffff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  <span>Verificando...</span>
                </>
              ) : (
                <>
                  <span>Acceder al Contenido</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10H13M13 10L10 7M13 10L10 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Admin Link */}
          <div style={{
            textAlign: 'center',
            marginTop: '25px'
          }}>
            <a
              href="/admin-login"
              style={{
                fontSize: '12px',
                color: '#b8bcc4',
                textDecoration: 'none',
                opacity: 0.7,
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = '#8e8e93';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.color = '#b8bcc4';
              }}
            >
              Acceso administrativo
            </a>
          </div>
        </div>
      </div>

      {/* Add keyframe animation for spinner */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AccessGate;