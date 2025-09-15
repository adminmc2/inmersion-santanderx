import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2, Users, FileText, BarChart3, Settings, Home, GraduationCap } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  lastActive: string;
  progress: number;
}

interface Module {
  id: string;
  title: string;
  topics: number;
  status: 'published' | 'draft';
  lastModified: string;
}

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'users' | 'content' | 'stats'>('users');
  const [users, setUsers] = useState<User[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Simular carga de datos
    setUsers([
      { id: '1', name: 'María García', email: 'maria@example.com', role: 'user', lastActive: 'Hace 2 horas', progress: 75 },
      { id: '2', name: 'Juan Pérez', email: 'juan@example.com', role: 'user', lastActive: 'Hace 1 día', progress: 45 },
      { id: '3', name: 'Ana López', email: 'ana@example.com', role: 'admin', lastActive: 'En línea', progress: 100 },
    ]);

    setModules([
      { id: '1', title: 'Research, Pains & Buys', topics: 8, status: 'published', lastModified: 'Hace 3 días' },
      { id: '2', title: 'Canvas Propuesta de Valor', topics: 5, status: 'published', lastModified: 'Hace 1 semana' },
      { id: '3', title: 'Modelo de Negocio', topics: 6, status: 'draft', lastModified: 'Hace 2 semanas' },
    ]);
  }, []);

  const haptoCardStyle = {
    background: 'linear-gradient(145deg, #f0f5fd, #cdd2db)',
    borderRadius: '20px',
    padding: isMobile ? '20px' : '24px',
    boxShadow: `
      20px 20px 60px #b8bcc4,
      -20px -20px 60px #ffffff,
      inset 2px 2px 5px rgba(255, 255, 255, 0.6),
      inset -2px -2px 5px rgba(0, 0, 0, 0.08)
    `,
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const haptoButtonStyle = {
    background: 'linear-gradient(145deg, #f0f5fd, #cdd2db)',
    borderRadius: '12px',
    padding: '12px 24px',
    boxShadow: `
      8px 8px 20px #b8bcc4,
      -8px -8px 20px #ffffff,
      inset 1px 1px 3px rgba(255, 255, 255, 0.6)
    `,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '600',
    color: '#2c2c2c'
  };

  const tabButtonStyle = (isActive: boolean) => ({
    ...haptoButtonStyle,
    background: isActive
      ? 'linear-gradient(145deg, #ff4507, #e53801)'
      : 'linear-gradient(145deg, #f0f5fd, #cdd2db)',
    color: isActive ? '#ffffff' : '#2c2c2c',
    boxShadow: isActive
      ? `
        inset 4px 4px 10px rgba(200, 50, 0, 0.3),
        inset -4px -4px 10px rgba(255, 150, 100, 0.3),
        2px 2px 5px #b8bcc4
      `
      : haptoButtonStyle.boxShadow
  });

  return (
    <div style={{
      background: '#e0e5ec',
      minHeight: '100vh',
      fontFamily: 'Nunito, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: '#e0e5ec',
        padding: isMobile ? '16px' : '24px 48px',
        boxShadow: '0 10px 30px rgba(163, 177, 198, 0.4)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => navigate('/')}
              style={{
                ...haptoButtonStyle,
                padding: '10px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowLeft size={24} color="#2c2c2c" />
            </button>
            <h1 style={{
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: '800',
              color: '#2c2c2c',
              margin: 0,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              Panel de Administración
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '12px', width: isMobile ? '100%' : 'auto' }}>
            <button
              onClick={() => setActiveTab('users')}
              style={tabButtonStyle(activeTab === 'users')}
            >
              <Users size={20} color={activeTab === 'users' ? '#ffffff' : '#2c2c2c'} style={{ display: 'inline', marginRight: '8px' }} />
              Usuarios
            </button>
            <button
              onClick={() => setActiveTab('content')}
              style={tabButtonStyle(activeTab === 'content')}
            >
              <FileText size={20} color={activeTab === 'content' ? '#ffffff' : '#2c2c2c'} style={{ display: 'inline', marginRight: '8px' }} />
              Contenido
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              style={tabButtonStyle(activeTab === 'stats')}
            >
              <BarChart3 size={20} color={activeTab === 'stats' ? '#ffffff' : '#2c2c2c'} style={{ display: 'inline', marginRight: '8px' }} />
              Estadísticas
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '20px' : '40px 48px'
      }}>
        {/* Users Tab */}
        {activeTab === 'users' && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2c2c2c' }}>Gestión de Usuarios</h2>
              <button style={{
                ...haptoButtonStyle,
                background: 'linear-gradient(145deg, #22c55e, #16a34a)',
                color: '#ffffff'
              }}>
                <Plus size={20} color="#ffffff" style={{ display: 'inline', marginRight: '8px' }} />
                Añadir Usuario
              </button>
            </div>

            <div style={{
              display: 'grid',
              gap: '20px'
            }}>
              {users.map(user => (
                <div key={user.id} style={haptoCardStyle}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                    gap: '16px'
                  }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2c2c2c', margin: '0 0 8px 0' }}>
                        {user.name}
                      </h3>
                      <p style={{ color: '#6e6e73', margin: '0 0 4px 0' }}>{user.email}</p>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                        <span style={{
                          background: user.role === 'admin' ? '#ff4507' : '#22c55e',
                          color: '#ffffff',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>
                          {user.role === 'admin' ? 'Administrador' : 'Usuario'}
                        </span>
                        <span style={{ color: '#8e8e93', fontSize: '14px' }}>{user.lastActive}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#ff4507' }}>{user.progress}%</div>
                        <div style={{ fontSize: '12px', color: '#6e6e73' }}>Progreso</div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{
                          ...haptoButtonStyle,
                          padding: '8px',
                          borderRadius: '50%'
                        }}>
                          <Edit size={18} color="#2c2c2c" />
                        </button>
                        <button style={{
                          ...haptoButtonStyle,
                          padding: '8px',
                          borderRadius: '50%'
                        }}>
                          <Trash2 size={18} color="#ff4507" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2c2c2c' }}>Gestión de Contenido</h2>
              <button style={{
                ...haptoButtonStyle,
                background: 'linear-gradient(145deg, #22c55e, #16a34a)',
                color: '#ffffff'
              }}>
                <Plus size={20} color="#ffffff" style={{ display: 'inline', marginRight: '8px' }} />
                Crear Módulo
              </button>
            </div>

            <div style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))'
            }}>
              {modules.map(module => (
                <div key={module.id} style={haptoCardStyle}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                    gap: '12px'
                  }}>
                    <div style={{
                      ...haptoButtonStyle,
                      padding: '12px',
                      borderRadius: '50%',
                      background: 'linear-gradient(145deg, #ff4507, #e53801)'
                    }}>
                      <GraduationCap size={24} color="#ffffff" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2c2c2c', margin: '0' }}>
                        {module.title}
                      </h3>
                      <p style={{ color: '#6e6e73', margin: '4px 0 0 0', fontSize: '14px' }}>
                        {module.topics} temas
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{
                        background: module.status === 'published' ? '#22c55e' : '#FFA500',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        {module.status === 'published' ? 'Publicado' : 'Borrador'}
                      </span>
                      <span style={{ color: '#8e8e93', fontSize: '12px' }}>{module.lastModified}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{
                        ...haptoButtonStyle,
                        padding: '8px',
                        borderRadius: '50%'
                      }}>
                        <Edit size={18} color="#2c2c2c" />
                      </button>
                      <button style={{
                        ...haptoButtonStyle,
                        padding: '8px',
                        borderRadius: '50%'
                      }}>
                        <Settings size={18} color="#2c2c2c" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics Tab */}
        {activeTab === 'stats' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2c2c2c', marginBottom: '32px' }}>Estadísticas Generales</h2>

            <div style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))'
            }}>
              <div style={haptoCardStyle}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#ff4507',
                  marginBottom: '8px'
                }}>
                  {users.length}
                </div>
                <div style={{ fontSize: '18px', color: '#2c2c2c', fontWeight: '600', marginBottom: '4px' }}>Usuarios Totales</div>
                <div style={{ fontSize: '14px', color: '#6e6e73' }}>+12% este mes</div>
              </div>

              <div style={haptoCardStyle}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#22c55e',
                  marginBottom: '8px'
                }}>
                  73%
                </div>
                <div style={{ fontSize: '18px', color: '#2c2c2c', fontWeight: '600', marginBottom: '4px' }}>Tasa de Finalización</div>
                <div style={{ fontSize: '14px', color: '#6e6e73' }}>Promedio general</div>
              </div>

              <div style={haptoCardStyle}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#4a90e2',
                  marginBottom: '8px'
                }}>
                  {modules.length}
                </div>
                <div style={{ fontSize: '18px', color: '#2c2c2c', fontWeight: '600', marginBottom: '4px' }}>Módulos Activos</div>
                <div style={{ fontSize: '14px', color: '#6e6e73' }}>2 publicados, 1 borrador</div>
              </div>

              <div style={haptoCardStyle}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#9333ea',
                  marginBottom: '8px'
                }}>
                  4.8
                </div>
                <div style={{ fontSize: '18px', color: '#2c2c2c', fontWeight: '600', marginBottom: '4px' }}>Satisfacción</div>
                <div style={{ fontSize: '14px', color: '#6e6e73' }}>Basado en 150 reseñas</div>
              </div>
            </div>

            {/* Gráfico de progreso por módulo */}
            <div style={{ ...haptoCardStyle, marginTop: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2c2c2c', marginBottom: '24px' }}>Progreso por Módulo</h3>
              {modules.map(module => (
                <div key={module.id} style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: '600', color: '#2c2c2c' }}>{module.title}</span>
                    <span style={{ color: '#6e6e73' }}>65%</span>
                  </div>
                  <div style={{
                    height: '12px',
                    background: 'linear-gradient(145deg, #cdd2db, #f0f5fd)',
                    borderRadius: '6px',
                    boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(255,255,255,0.7)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '65%',
                      height: '100%',
                      background: 'linear-gradient(145deg, #ff4507, #e53801)',
                      borderRadius: '6px',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;