import React, { useState, useEffect } from 'react';
import { CloseOutline } from './OutlineIcons';
import '../styles/customer-map-hapto.css';

interface CanvasPropuestaValorV1Props {
  onClose?: () => void;
  isAdmin?: boolean;
}

// PROPUESTA 1: Layout de tarjetas apiladas con scroll vertical
// Mobile First: Funciona perfecto en móvil con scroll, en desktop se muestran en grid 2x3

const CanvasPropuestaValorV1: React.FC<CanvasPropuestaValorV1Props> = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const canvasData = {
    propuesta: [
      {
        id: 'products',
        title: 'Product & Services',
        icon: '',
        color: '#ff4507',
        content: ['Plataforma online para encontrar y contratar talento']
      },
      {
        id: 'pain-relievers',
        title: 'Pain Relievers',
        icon: '💊',
        color: '#ff8c42',
        content: [
          'Alcance y visibilidad de tus ofertas laborales',
          'Coste unitario por oferta asequible',
          'Visibilidad de todo el proceso de contratación',
          'Verificación del CV de lxs candidatxs',
          'Recomendación personalizada de tus ofertas'
        ]
      },
      {
        id: 'gain-creators',
        title: 'Gain Creators',
        icon: '✨',
        color: '#f09530',
        content: [
          'Ayuda personalizada en cada paso del proceso',
          'Gestión del proceso de forma online',
          'Garantizar candidatxs mínimos por oferta'
        ]
      }
    ],
    cliente: [
      {
        id: 'customer-jobs',
        title: 'Customer Jobs',
        icon: '👤',
        color: '#4a90e2',
        content: [
          'Crear y publicar ofertas de trabajo con alcance',
          'Gestionar entrevistas de candidatxs y procesos de contratación'
        ]
      },
      {
        id: 'pains',
        title: 'Pains',
        icon: '😟',
        color: '#e74c3c',
        content: [
          'Encontrar trabajadores/visibilidad de mis ofertas',
          'Pérdida de seguimiento/transparencia del proceso',
          'Costes y escalabilidad'
        ]
      },
      {
        id: 'gains',
        title: 'Gains',
        icon: '😊',
        color: '#27ae60',
        content: [
          'Gestión autónoma y flexible. Ser dueñx del proceso',
          'Recibir ayuda durante el proceso de contratación',
          'Asegurar el alcance de mis ofertas laborales'
        ]
      }
    ]
  };

  const renderCard = (item: any, side: string) => (
    <div
      key={item.id}
      onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
      style={{
        background: '#e0e5ec',
        borderRadius: isMobile ? '16px' : '20px',
        padding: isMobile ? '20px' : '24px',
        boxShadow: expandedCard === item.id
          ? 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff'
          : '12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: expandedCard === item.id ? 'scale(0.98)' : 'scale(1)',
        minHeight: isMobile ? 'auto' : '200px'
      }}
    >
      {/* Header con icono y título */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <div style={{
          width: isMobile ? '40px' : '48px',
          height: isMobile ? '40px' : '48px',
          borderRadius: '12px',
          background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isMobile ? '20px' : '24px',
          boxShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'
        }}>
          {item.icon}
        </div>
        <h3 style={{
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '700',
          fontFamily: 'Nunito, sans-serif',
          color: '#2c2c2c',
          margin: 0,
          flex: 1
        }}>
          {item.title}
        </h3>
        <div style={{
          fontSize: '10px',
          fontWeight: '600',
          fontFamily: 'Nunito, sans-serif',
          color: 'white',
          background: side === 'propuesta'
            ? 'linear-gradient(135deg, #ff4507, #ff8c42)'
            : 'linear-gradient(135deg, #4a90e2, #5ba3f5)',
          padding: '4px 8px',
          borderRadius: '8px',
          textTransform: 'uppercase'
        }}>
          {side}
        </div>
      </div>

      {/* Contenido */}
      <ul style={{
        margin: 0,
        paddingLeft: '20px',
        listStyle: 'none',
        maxHeight: expandedCard === item.id ? '500px' : isMobile ? '60px' : '100px',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease'
      }}>
        {item.content.map((text: string, index: number) => (
          <li key={index} style={{
            fontSize: isMobile ? '13px' : '14px',
            fontFamily: 'Nunito, sans-serif',
            color: '#2c2c2c',
            lineHeight: '1.6',
            marginBottom: '8px',
            position: 'relative',
            paddingLeft: '16px'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '8px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`
            }}></span>
            {text}
          </li>
        ))}
      </ul>

      {/* Indicador de expansión */}
      <div style={{
        textAlign: 'center',
        marginTop: '12px',
        fontSize: '12px',
        color: '#86868b',
        fontFamily: 'Nunito, sans-serif'
      }}>
        {expandedCard === item.id ? '▲ Ver menos' : '▼ Ver más'}
      </div>
    </div>
  );

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
          {/* Título de sección: Propuesta de Valor */}
          <div style={{
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: '800',
              fontFamily: 'Nunito, sans-serif',
              background: 'linear-gradient(135deg, #ff4507, #ff8c42)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px'
            }}>
              Propuesta de Valor
            </h2>
          </div>

          {/* Grid de tarjetas Propuesta */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px',
            marginBottom: '32px'
          }}>
            {canvasData.propuesta.map(item => renderCard(item, 'propuesta'))}
          </div>

          {/* Título de sección: Segmento de Cliente */}
          <div style={{
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: '800',
              fontFamily: 'Nunito, sans-serif',
              background: 'linear-gradient(135deg, #4a90e2, #5ba3f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px'
            }}>
              Segmento de Cliente
            </h2>
          </div>

          {/* Grid de tarjetas Cliente */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px'
          }}>
            {canvasData.cliente.map(item => renderCard(item, 'cliente'))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasPropuestaValorV1;