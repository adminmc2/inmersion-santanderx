import React, { useState, useEffect } from 'react';
import { CloseOutline } from './OutlineIcons';
import '../styles/customer-map-hapto.css';

interface CanvasPropuestaValorV2Props {
  onClose?: () => void;
  isAdmin?: boolean;
}

// PROPUESTA 2: Layout con tabs/pestañas para alternar entre Propuesta y Cliente
// Mobile First: Los tabs funcionan perfecto en móvil, en desktop se ven más amplios

const CanvasPropuestaValorV2: React.FC<CanvasPropuestaValorV2Props> = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<'propuesta' | 'cliente'>('propuesta');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const propuestaData = {
    'Product & Services': {
      icon: '🎯',
      color: '#ff4507',
      items: ['Plataforma online para encontrar y contratar talento']
    },
    'Pain Relievers': {
      icon: '💊',
      color: '#ff8c42',
      items: [
        'Alcance y visibilidad de tus ofertas laborales',
        'Coste unitario por oferta asequible',
        'Visibilidad de todo el proceso de contratación',
        'Verificación del CV de lxs candidatxs',
        'Recomendación personalizada de tus ofertas para evitar recibir candidatxs no aptxs'
      ]
    },
    'Gain Creators': {
      icon: '✨',
      color: '#f09530',
      items: [
        'Ayuda personalizada en cada paso del proceso',
        'Gestión del proceso de forma online',
        'Garantizar candidatxs mínimos por oferta'
      ]
    }
  };

  const clienteData = {
    'Customer Jobs': {
      icon: '👤',
      color: '#4a90e2',
      items: [
        'Crear y publicar ofertas de trabajo con alcance',
        'Gestionar entrevistas de candidatxs y procesos de contratación'
      ]
    },
    'Pains': {
      icon: '😟',
      color: '#e74c3c',
      items: [
        'Encontrar trabajadores/visibilidad de mis ofertas',
        'Pérdida de seguimiento/transparencia del proceso',
        'Costes y escalabilidad'
      ]
    },
    'Gains': {
      icon: '😊',
      color: '#27ae60',
      items: [
        'Gestión autónoma y flexible. Ser dueñx del proceso',
        'Recibir ayuda durante el proceso de contratación',
        'Asegurar el alcance de mis ofertas laborales'
      ]
    }
  };

  const currentData = activeTab === 'propuesta' ? propuestaData : clienteData;

  return (
    <div className="hapto-map-overlay">
      <div className="hapto-map-container">
        {/* Header */}
        <div className="hapto-map-header">
          <button onClick={onClose} className="hapto-map-close">
            <CloseOutline size={24} />
          </button>
          <h1 className="hapto-map-title">
            CANVAS Propuesta de Valor
          </h1>
        </div>

        {/* Content */}
        <div className="hapto-map-content" style={{
          padding: isMobile ? '20px' : '40px',
          background: '#e0e5ec'
        }}>
          {/* Tabs */}
          <div style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '32px',
            background: '#e0e5ec',
            borderRadius: '16px',
            padding: '8px',
            boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
          }}>
            <button
              onClick={() => setActiveTab('propuesta')}
              style={{
                flex: 1,
                padding: isMobile ? '12px' : '16px',
                background: activeTab === 'propuesta'
                  ? 'linear-gradient(135deg, #ff4507, #ff8c42)'
                  : '#e0e5ec',
                color: activeTab === 'propuesta' ? 'white' : '#2c2c2c',
                border: 'none',
                borderRadius: '12px',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'propuesta'
                  ? '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'
                  : 'none'
              }}
            >
              🚀 Propuesta de Valor
            </button>
            <button
              onClick={() => setActiveTab('cliente')}
              style={{
                flex: 1,
                padding: isMobile ? '12px' : '16px',
                background: activeTab === 'cliente'
                  ? 'linear-gradient(135deg, #4a90e2, #5ba3f5)'
                  : '#e0e5ec',
                color: activeTab === 'cliente' ? 'white' : '#2c2c2c',
                border: 'none',
                borderRadius: '12px',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'cliente'
                  ? '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'
                  : 'none'
              }}
            >
              👥 Segmento de Cliente
            </button>
          </div>

          {/* Contenido del tab activo */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px'
          }}>
            {Object.entries(currentData).map(([title, data]) => (
              <div
                key={title}
                onClick={() => setSelectedSection(selectedSection === title ? null : title)}
                style={{
                  background: '#e0e5ec',
                  borderRadius: '20px',
                  padding: isMobile ? '20px' : '28px',
                  boxShadow: selectedSection === title
                    ? 'inset 10px 10px 20px #a3b1c6, inset -10px -10px 20px #ffffff'
                    : '15px 15px 30px #a3b1c6, -15px -15px 30px #ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: selectedSection === title ? 'scale(0.98)' : 'scale(1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Efecto de gradiente de fondo */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${data.color}, ${data.color}dd)`,
                  opacity: selectedSection === title ? 1 : 0.5,
                  transition: 'opacity 0.3s ease'
                }}></div>

                {/* Icono central grande */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: isMobile ? '60px' : '80px',
                    height: isMobile ? '60px' : '80px',
                    borderRadius: '50%',
                    background: '#e0e5ec',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '32px' : '40px',
                    boxShadow: selectedSection === title
                      ? 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff'
                      : '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff'
                  }}>
                    {data.icon}
                  </div>
                </div>

                {/* Título */}
                <h3 style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '800',
                  fontFamily: 'Nunito, sans-serif',
                  color: data.color,
                  textAlign: 'center',
                  marginBottom: '16px'
                }}>
                  {title}
                </h3>

                {/* Items */}
                <div style={{
                  maxHeight: selectedSection === title ? '400px' : isMobile ? '80px' : '120px',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}>
                  {data.items.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        marginBottom: '12px'
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)`,
                        marginTop: '6px',
                        flexShrink: 0
                      }}></div>
                      <p style={{
                        fontSize: isMobile ? '13px' : '14px',
                        fontFamily: 'Nunito, sans-serif',
                        color: '#2c2c2c',
                        lineHeight: '1.5',
                        margin: 0
                      }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Indicador de expansión */}
                <div style={{
                  textAlign: 'center',
                  marginTop: '12px',
                  fontSize: '11px',
                  color: '#86868b',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {selectedSection === title ? '▲ Contraer' : '▼ Expandir'}
                </div>
              </div>
            ))}
          </div>

          {/* Indicador visual del lado activo */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            marginTop: '32px',
            padding: '20px',
            background: '#e0e5ec',
            borderRadius: '16px',
            boxShadow: 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: activeTab === 'propuesta'
                  ? 'linear-gradient(135deg, #ff4507, #ff8c42)'
                  : '#a3b1c6'
              }}></div>
              <span style={{
                fontSize: '12px',
                fontFamily: 'Nunito, sans-serif',
                color: activeTab === 'propuesta' ? '#ff4507' : '#86868b',
                fontWeight: activeTab === 'propuesta' ? '700' : '400'
              }}>
                Propuesta
              </span>
            </div>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, #ff4507, #4a90e2)'
            }}></div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: activeTab === 'cliente'
                  ? 'linear-gradient(135deg, #4a90e2, #5ba3f5)'
                  : '#a3b1c6'
              }}></div>
              <span style={{
                fontSize: '12px',
                fontFamily: 'Nunito, sans-serif',
                color: activeTab === 'cliente' ? '#4a90e2' : '#86868b',
                fontWeight: activeTab === 'cliente' ? '700' : '400'
              }}>
                Cliente
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasPropuestaValorV2;