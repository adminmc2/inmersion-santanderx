import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  SearchOutline,
  SettingsOutline,
  LogoutOutline,
  ChevronRightOutline
} from '../components/OutlineIcons';
import '../styles/portfolio-hapto.css';

interface PortfolioProps {
  isAdmin: boolean;
  isRealAdmin?: boolean;
  adminViewMode?: boolean;
  setAdminViewMode?: (value: boolean) => void;
}

interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  topics: number;
  completedTopics: number;
  icon: React.ReactNode;
  color: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ isAdmin, isRealAdmin, adminViewMode, setAdminViewMode }) => {
  const navigate = useNavigate();
  const [modules, setModules] = useState<Module[]>([]);
  const userName = localStorage.getItem('user_name') || 'Usuario';

  useEffect(() => {
    // Datos de ejemplo - después conectaremos con tu backend
    setModules([
      {
        id: '1',
        title: 'Research, Pains & Buys',
        description: 'Problema, persona y propuesta de valor',
        progress: 0,
        topics: 0,
        completedTopics: 0,
        icon: <SearchOutline size={32} color="#6e6e73" />,
        color: 'from-[#FF3E01] to-[#E8871E]'
      }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    toast.success('Sesión cerrada correctamente');
    window.location.href = '/login';
  };

  return (
    <div className="hapto-portfolio-container" style={{
      background: '#e0e5ec',
      minHeight: '100vh'
    }}>
      {/* Header with enhanced Haptomorphism */}
      <header className="hapto-header" style={{
        background: '#e0e5ec',
        padding: '24px 48px',
        boxShadow: '0 10px 30px rgba(163, 177, 198, 0.4)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="hapto-header-content" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div className="flex items-center">
            <div>
              <h1 style={{
                fontSize: '36px',
                fontWeight: '800',
                fontFamily: 'Nunito, sans-serif',
                color: '#2c2c2c',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{
                  textShadow: '3px 3px 6px rgba(163, 177, 198, 0.4)'
                }}>INMERS</span>
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ff4507, #e53801)',
                  color: 'white',
                  padding: '8px 22px',
                  borderRadius: '18px',
                  fontWeight: '800',
                  boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff, inset 2px 2px 4px rgba(255, 255, 255, 0.3)',
                  transform: 'perspective(100px) rotateX(-5deg)'
                }}>
                  ION
                </span>
              </h1>
              <p style={{
                fontSize: '14px',
                color: '#6e6e73',
                marginTop: '8px',
                fontFamily: 'Nunito, sans-serif'
              }}>
                Plataforma IA integral para el turismo lingüístico | Santander X Explorer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Toggle Vista Admin/Pública with enhanced Neumorphism */}
            {isRealAdmin && (
              <div style={{
                background: '#e0e5ec',
                borderRadius: '20px',
                padding: '4px',
                boxShadow: 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff',
                display: 'flex',
                gap: '4px'
              }}>
                <button
                  onClick={() => setAdminViewMode?.(true)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '16px',
                    border: 'none',
                    background: adminViewMode ? 'linear-gradient(135deg, #ff4507, #e53801)' : '#e0e5ec',
                    color: adminViewMode ? 'white' : '#6e6e73',
                    fontWeight: '600',
                    fontFamily: 'Nunito, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: adminViewMode ? '2px 2px 4px #a3b1c6, -2px -2px 4px #ffffff' : 'none'
                  }}
                >
                  Vista Admin
                </button>
                <button
                  onClick={() => setAdminViewMode?.(false)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '16px',
                    border: 'none',
                    background: !adminViewMode ? 'linear-gradient(135deg, #ff4507, #e53801)' : '#e0e5ec',
                    color: !adminViewMode ? 'white' : '#6e6e73',
                    fontWeight: '600',
                    fontFamily: 'Nunito, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: !adminViewMode ? '2px 2px 4px #a3b1c6, -2px -2px 4px #ffffff' : 'none'
                  }}
                >
                  Vista Pública
                </button>
              </div>
            )}

            {isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                style={{
                  background: '#e0e5ec',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '12px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2c2c2c',
                  fontFamily: 'Nunito, sans-serif',
                  boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff';
                }}
              >
                <SettingsOutline size={16} />
                Admin Panel
              </button>
            )}

            <button
              onClick={handleLogout}
              style={{
                background: 'linear-gradient(135deg, #e0e5ec, #d8dde4)',
                border: 'none',
                borderRadius: '16px',
                padding: '12px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                color: '#6e6e73',
                fontFamily: 'Nunito, sans-serif',
                boxShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff';
              }}
            >
              <LogoutOutline size={16} />
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="hapto-main" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '48px'
      }}>
        {/* Hero Section with enhanced depth */}
        <div style={{
          background: '#e0e5ec',
          borderRadius: '32px',
          padding: '64px',
          marginBottom: '48px',
          boxShadow: '20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '800',
            fontFamily: 'Nunito, sans-serif',
            background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(163, 177, 198, 0.3)'
          }}>
            Proyecto INMERSION
          </h2>
          <p style={{
            fontSize: '20px',
            fontFamily: 'Nunito, sans-serif',
            color: '#6e6e73',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Plataforma IA integral para el turismo lingüístico
          </p>

          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff4507, #e53801)',
            opacity: 0.1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff4507, #e53801)',
            opacity: 0.05
          }} />
        </div>

        {/* Documents Section with enhanced cards */}
        <div>
          <h3 style={{
            fontSize: '32px',
            fontWeight: '700',
            fontFamily: 'Nunito, sans-serif',
            color: '#2c2c2c',
            marginBottom: '32px',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(163, 177, 198, 0.3)'
          }}>
            Documentación del Proyecto
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {modules.map((module, index) => (
              <div
                key={module.id}
                onClick={() => navigate(`/module/${module.id}`)}
                style={{
                  background: '#e0e5ec',
                  borderRadius: '24px',
                  padding: '32px',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: '12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff',
                  transition: 'all 0.3s ease',
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff';
                }}
              >
                {/* Top gradient bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${module.color})`,
                  borderRadius: '24px 24px 0 0'
                }} />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px'
                }}>
                  {/* Icon with inset effect */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: '#e0e5ec',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff'
                  }}>
                    {module.icon}
                  </div>
                  <ChevronRightOutline size={24} color="#6e6e73" />
                </div>

                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  fontFamily: 'Nunito, sans-serif',
                  color: '#2c2c2c',
                  marginBottom: '12px'
                }}>
                  {module.title}
                </h4>
                <p style={{
                  fontSize: '16px',
                  fontFamily: 'Nunito, sans-serif',
                  color: '#6e6e73',
                  lineHeight: '1.5'
                }}>
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action with enhanced Haptomorphism */}
        <div style={{
          marginTop: '64px',
          background: 'linear-gradient(135deg, #ff4507, #e53801)',
          borderRadius: '32px',
          padding: '48px',
          boxShadow: '20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff, inset 2px 2px 4px rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            position: 'relative',
            zIndex: 1
          }}>
            <div>
              <h3 style={{
                fontSize: '32px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                color: 'white',
                marginBottom: '12px'
              }}>
                ¿Interesado en el proyecto?
              </h3>
              <p style={{
                fontSize: '18px',
                fontFamily: 'Nunito, sans-serif',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '500px'
              }}>
                Contacta con nuestro equipo y coméntanos cómo te gustaría colaborar
              </p>
            </div>
            <button
              onClick={() => window.location.href = 'mailto:mandoc2@inmersion.io'}
              style={{
                background: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                color: '#ff4507',
                cursor: 'pointer',
                boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '12px 12px 24px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '8px 8px 16px rgba(0, 0, 0, 0.2)';
              }}
            >
              Contactar
            </button>
          </div>

          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)'
          }} />
        </div>

        {/* Add animation keyframes */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </main>
    </div>
  );
};

export default Portfolio;