import React, { useState, useEffect } from 'react';
import { CloseOutline } from './OutlineIcons';
import '../styles/customer-map-hapto.css';

interface PropuestaValorDeclaracionProps {
  onClose?: () => void;
  isAdmin?: boolean;
}

const PropuestaValorDeclaracion: React.FC<PropuestaValorDeclaracionProps> = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

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
        <div className="hapto-map-content" style={{
          padding: isMobile ? '20px' : '40px',
          background: '#e0e5ec'
        }}>

          {/* Logo INMERSION centrado */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? '4px' : '8px',
            marginBottom: isMobile ? '32px' : '48px'
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
              padding: isMobile ? '4px 12px' : '8px 20px',
              borderRadius: isMobile ? '12px' : '16px',
              fontWeight: '800',
              fontSize: isMobile ? '24px' : '36px',
              fontFamily: 'Nunito, sans-serif',
              letterSpacing: '0.5px',
              boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff, inset 2px 2px 4px rgba(255, 255, 255, 0.3)',
              transform: 'perspective(100px) rotateX(-5deg)'
            }}>
              ION
            </span>
          </div>

          {/* Contenedor principal con estilo Haptomorphism */}
          <div style={{
            background: '#e0e5ec',
            borderRadius: '24px',
            padding: isMobile ? '24px' : '32px',
            boxShadow: '20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>

            {/* Nuestro */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '20px',
              background: '#e0e5ec',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '16px',
              boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
            }}>
            <button
              onClick={() => setActiveButton(activeButton === 'nuestro' ? null : 'nuestro')}
              style={{
                width: isMobile ? '100%' : '180px',
                padding: isMobile ? '10px 16px' : '12px 20px',
                background: 'linear-gradient(135deg, #FF3E01, #ff8c42)',
                color: 'white',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                borderRadius: '12px',
                boxShadow: activeButton === 'nuestro'
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1)'
                  : '4px 4px 8px #b8bcc7, -4px -4px 8px #ffffff, 0 2px 4px rgba(255, 69, 0, 0.2)',
                transform: activeButton === 'nuestro' ? 'scale(0.98) translateY(1px)' : 'scale(1)',
                alignSelf: isMobile ? 'stretch' : 'auto',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              Nuestro →
            </button>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '16px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6',
              fontWeight: activeButton === 'nuestro' ? '800' : 'normal',
              transition: 'font-weight 0.3s ease'
            }}>
              Sistema Operativo del Turismo Lingüístico (consultoría + plataforma InmersiON Connect)
            </div>
          </div>

            {/* Ayuda a */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '20px',
              background: '#e0e5ec',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '16px',
              boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
            }}>
            <button
              onClick={() => setActiveButton(activeButton === 'ayuda' ? null : 'ayuda')}
              style={{
                width: isMobile ? '100%' : '180px',
                padding: isMobile ? '10px 16px' : '12px 20px',
                background: 'linear-gradient(135deg, #FF3E01, #ff8c42)',
                color: 'white',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                borderRadius: '12px',
                boxShadow: activeButton === 'ayuda'
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1)'
                  : '4px 4px 8px #b8bcc7, -4px -4px 8px #ffffff, 0 2px 4px rgba(255, 69, 0, 0.2)',
                transform: activeButton === 'ayuda' ? 'scale(0.98) translateY(1px)' : 'scale(1)',
                alignSelf: isMobile ? 'stretch' : 'auto',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              ayuda a →
            </button>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '16px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6',
              fontWeight: activeButton === 'ayuda' ? '800' : 'normal',
              transition: 'font-weight 0.3s ease'
            }}>
              Academias de español ELE en España con 300-35,000 estudiantes/año
            </div>
          </div>

            {/* Que quiere */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '20px',
              background: '#e0e5ec',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '16px',
              boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
            }}>
            <button
              onClick={() => setActiveButton(activeButton === 'quiere' ? null : 'quiere')}
              style={{
                width: isMobile ? '100%' : '180px',
                padding: isMobile ? '10px 16px' : '12px 20px',
                background: 'linear-gradient(135deg, #FF3E01, #ff8c42)',
                color: 'white',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                borderRadius: '12px',
                boxShadow: activeButton === 'quiere'
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1)'
                  : '4px 4px 8px #b8bcc7, -4px -4px 8px #ffffff, 0 2px 4px rgba(255, 69, 0, 0.2)',
                transform: activeButton === 'quiere' ? 'scale(0.98) translateY(1px)' : 'scale(1)',
                alignSelf: isMobile ? 'stretch' : 'auto',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              que quiere →
            </button>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '16px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6',
              fontWeight: activeButton === 'quiere' ? '800' : 'normal',
              transition: 'font-weight 0.3s ease'
            }}>
              Eliminar el caos operativo de gestionar múltiples stakeholders con herramientas fragmentadas
            </div>
          </div>

            {/* Unificando */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '20px',
              background: '#e0e5ec',
              borderRadius: '16px',
              padding: '20px',
              paddingLeft: isMobile ? '20px' : '50px',
              marginBottom: '16px',
              boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
            }}>
            <button
              onClick={() => setActiveButton(activeButton === 'unificando' ? null : 'unificando')}
              style={{
                width: isMobile ? '100%' : '180px',
                padding: isMobile ? '10px 16px' : '12px 20px',
                background: 'linear-gradient(135deg, #FF3E01, #ff8c42)',
                color: 'white',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                borderRadius: '12px',
                boxShadow: activeButton === 'unificando'
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1)'
                  : '4px 4px 8px #b8bcc7, -4px -4px 8px #ffffff, 0 2px 4px rgba(255, 69, 0, 0.2)',
                transform: activeButton === 'unificando' ? 'scale(0.98) translateY(1px)' : 'scale(1)',
                alignSelf: isMobile ? 'stretch' : 'auto',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              unificando →
            </button>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '16px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6',
              fontWeight: activeButton === 'unificando' ? '800' : 'normal',
              transition: 'font-weight 0.3s ease'
            }}>
              Familias anfitrionas, gestores internacionales, estudiantes, proveedores culturales y promotores en una plataforma integral con 8 agentes de IA
            </div>
          </div>

            {/* Y recuperando */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '20px',
              background: '#e0e5ec',
              borderRadius: '16px',
              padding: '20px',
              paddingLeft: isMobile ? '20px' : '50px',
              marginBottom: '16px',
              boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
            }}>
            <button
              onClick={() => setActiveButton(activeButton === 'recuperando' ? null : 'recuperando')}
              style={{
                width: isMobile ? '100%' : '180px',
                padding: isMobile ? '10px 16px' : '12px 20px',
                background: 'linear-gradient(135deg, #FF3E01, #ff8c42)',
                color: 'white',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                borderRadius: '12px',
                boxShadow: activeButton === 'recuperando'
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1)'
                  : '4px 4px 8px #b8bcc7, -4px -4px 8px #ffffff, 0 2px 4px rgba(255, 69, 0, 0.2)',
                transform: activeButton === 'recuperando' ? 'scale(0.98) translateY(1px)' : 'scale(1)',
                alignSelf: isMobile ? 'stretch' : 'auto',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              y recuperando →
            </button>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '16px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6',
              fontWeight: activeButton === 'recuperando' ? '800' : 'normal',
              transition: 'font-weight 0.3s ease'
            }}>
              El 25% de oportunidades perdidas mientras reducen 70% el tiempo administrativo y aumentan márgenes un 15%
            </div>
          </div>

            {/* No como */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '20px',
              background: '#e0e5ec',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '0',
              boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
            }}>
            <button
              onClick={() => setActiveButton(activeButton === 'nocomo' ? null : 'nocomo')}
              style={{
                width: isMobile ? '100%' : '180px',
                padding: isMobile ? '10px 16px' : '12px 20px',
                background: 'white',
                color: '#FF3E01',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                borderRadius: '12px',
                boxShadow: activeButton === 'nocomo'
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.9)'
                  : '4px 4px 8px #b8bcc7, -4px -4px 8px #ffffff',
                transform: activeButton === 'nocomo' ? 'scale(0.98) translateY(1px)' : 'scale(1)',
                alignSelf: isMobile ? 'stretch' : 'auto',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              no como →
            </button>
            <div style={{
              flex: 1,
              fontSize: isMobile ? '14px' : '16px',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              lineHeight: '1.6',
              fontWeight: activeButton === 'nocomo' ? '800' : 'normal',
              transition: 'font-weight 0.3s ease'
            }}>
              Múltiples herramientas dispersas (WhatsApp, Excel, email) / CRMs genéricos sin comprensión sectorial / Consultorías sin tecnología
            </div>
          </div>

          </div> {/* Cierre del contenedor principal Haptomorphism */}

        </div>
      </div>
    </div>
  );
};

export default PropuestaValorDeclaracion;