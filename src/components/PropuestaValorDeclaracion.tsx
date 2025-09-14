import React, { useState, useEffect } from 'react';
import { CloseOutline } from './OutlineIcons';
import '../styles/customer-map-hapto.css';

interface PropuestaValorDeclaracionProps {
  onClose?: () => void;
  isAdmin?: boolean;
}

const PropuestaValorDeclaracion: React.FC<PropuestaValorDeclaracionProps> = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="hapto-map-overlay">
      <div className="hapto-map-container">
        {/* Header */}
        <div className="hapto-map-header">
          <button
            onClick={onClose}
            className="hapto-map-close"
          >
            <CloseOutline size={24} />
          </button>
          <h1 className="hapto-map-title">
            Propuesta de Valor
          </h1>
        </div>

        {/* Content Section - Propuesta de Valor */}
        <div className="hapto-map-content" style={{ padding: isMobile ? '20px' : '40px 60px' }}>

          {/* Logo INMERSION centrado */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? '4px' : '8px',
            marginBottom: isMobile ? '24px' : '40px'
          }}>
            <span style={{
              fontSize: isMobile ? '24px' : '36px',
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
              padding: isMobile ? '4px 12px' : '8px 16px',
              borderRadius: isMobile ? '12px' : '16px',
              fontWeight: '800',
              fontSize: isMobile ? '24px' : '36px',
              fontFamily: 'Nunito, sans-serif',
              letterSpacing: '0.5px'
            }}>
              ION
            </span>
          </div>

          {/* Nuestro */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            marginBottom: isMobile ? '20px' : '25px',
            gap: isMobile ? '12px' : '20px'
          }}>
            <div style={{
              minWidth: isMobile ? 'auto' : '140px',
              padding: isMobile ? '8px 16px' : '12px 20px',
              background: 'linear-gradient(135deg, #FF3E01, #ff8c42)',
              color: 'white',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '700',
              fontFamily: 'Nunito, sans-serif',
              borderRadius: '12px',
              boxShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff',
              alignSelf: isMobile ? 'flex-start' : 'auto'
            }}>
              Nuestro →
            </div>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '18px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6',
              fontWeight: '600'
            }}>
              Sistema Operativo del Turismo Lingüístico (consultoría + plataforma InmersiON Connect)
            </div>
          </div>

          {/* Ayuda a */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            marginBottom: isMobile ? '20px' : '25px',
            gap: isMobile ? '12px' : '20px'
          }}>
            <div style={{
              minWidth: isMobile ? 'auto' : '140px',
              padding: isMobile ? '8px 16px' : '12px 20px',
              background: '#e0e5ec',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              fontFamily: 'Nunito, sans-serif',
              borderRadius: '12px',
              boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff',
              color: '#FF3E01'
            }}>
              ayuda a →
            </div>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '17px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6'
            }}>
              Academias de español ELE en España con 300-35,000 estudiantes/año
            </div>
          </div>

          {/* Que quiere */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            marginBottom: isMobile ? '20px' : '25px',
            gap: isMobile ? '12px' : '20px'
          }}>
            <div style={{
              minWidth: isMobile ? 'auto' : '140px',
              padding: isMobile ? '8px 16px' : '12px 20px',
              background: '#e0e5ec',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              fontFamily: 'Nunito, sans-serif',
              borderRadius: '12px',
              boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff',
              color: '#FF3E01'
            }}>
              que quiere →
            </div>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '17px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6'
            }}>
              Eliminar el caos operativo de gestionar múltiples stakeholders con herramientas fragmentadas
            </div>
          </div>

          {/* Unificando */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            marginBottom: isMobile ? '20px' : '25px',
            gap: isMobile ? '12px' : '20px'
          }}>
            <div style={{
              minWidth: isMobile ? 'auto' : '140px',
              padding: isMobile ? '8px 16px' : '12px 20px',
              background: '#e0e5ec',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              fontFamily: 'Nunito, sans-serif',
              borderRadius: '12px',
              boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff',
              color: '#FF3E01'
            }}>
              unificando →
            </div>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '17px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6'
            }}>
              Familias anfitrionas, gestores internacionales, estudiantes, proveedores culturales y promotores en una plataforma integral con 8 agentes de IA
            </div>
          </div>

          {/* Y recuperando */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            marginBottom: isMobile ? '20px' : '25px',
            gap: isMobile ? '12px' : '20px'
          }}>
            <div style={{
              minWidth: isMobile ? 'auto' : '140px',
              padding: isMobile ? '8px 16px' : '12px 20px',
              background: '#e0e5ec',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              fontFamily: 'Nunito, sans-serif',
              borderRadius: '12px',
              boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff',
              color: '#FF3E01'
            }}>
              y recuperando →
            </div>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '17px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6'
            }}>
              El 25% de oportunidades perdidas mientras reducen 70% el tiempo administrativo y aumentan márgenes un 15%
            </div>
          </div>

          {/* No como */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            marginBottom: isMobile ? '20px' : '25px',
            gap: isMobile ? '12px' : '20px'
          }}>
            <div style={{
              minWidth: '140px',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #6e6e73, #86868b)',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              fontFamily: 'Nunito, sans-serif',
              borderRadius: '12px',
              boxShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'
            }}>
              no como →
            </div>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '17px',
              fontFamily: 'Nunito, sans-serif',
              color: '#6e6e73',
              lineHeight: '1.6',
              fontStyle: 'italic'
            }}>
              Múltiples herramientas dispersas (WhatsApp, Excel, email) / CRMs genéricos sin comprensión sectorial / Consultorías sin tecnología
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropuestaValorDeclaracion;