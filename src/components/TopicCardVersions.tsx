import React from 'react';
import {
  MapOutline,
  MapDotMatrix,
  MapDotPattern,
  DocumentDotMatrix,
  ChartDotMatrix,
  PlayDotMatrix,
  ValuePropositionDotMatrix,
  ClockOutline,
  DocumentOutline,
  CheckCircleOutline,
  DownloadOutline,
  ChevronRightOutline
} from './OutlineIcons';
import valorImg from '../assets/pvalor.png';
import discoveryImg from '../assets/discovery.png';
import canvasImg from '../assets/canvas.png';

interface TopicData {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  completed: boolean;
  locked: boolean;
  index: number;
}

interface TopicCardProps {
  topic: TopicData;
  index: number;
  onClick: () => void;
  isAdmin?: boolean;
  onDownload?: () => void;
  isMobile?: boolean;
}

// ============= OPCIÓN A: ESTILO RELOJ (Como imagen 2) =============
export const TopicCardClock: React.FC<TopicCardProps> = ({ topic, index, onClick, isAdmin, onDownload, isMobile = false }) => {
  // Ya no necesitamos el estado local, usamos el prop directamente

  return (
    <div
      className="topic-card-clock"
      style={{
        background: '#e0e5ec',
        borderRadius: isMobile ? '20px' : '32px',
        padding: isMobile ? '20px' : '32px',
        cursor: 'default',
        opacity: topic.locked ? 0.6 : 1,
        position: 'relative',
        boxShadow: '20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '20px' : '32px',
        alignItems: 'center'
      }}
    >
      {/* Imagen grande de cuadraditos a la izquierda - HUNDIDA */}
      <div style={{
        width: isMobile ? '120px' : '240px',
        height: isMobile ? '120px' : '240px',
        flexShrink: 0,
        borderRadius: isMobile ? '16px' : '24px',
        background: '#e0e5ec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 10px 10px 20px #a3b1c6, inset -10px -10px 20px #ffffff'
      }}>
        {/* Iconos con patrón de cuadraditos grandes */}
        {topic.id === '1' ? (
          <img
            src={discoveryImg}
            alt="Customer Discovery Map"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: isMobile ? '100px' : '220px',
              maxHeight: isMobile ? '100px' : '220px',
              objectFit: 'contain',
              imageRendering: 'pixelated',
              transform: isMobile ? 'scale(1)' : 'scale(1.2)'
            }}
          />
        ) : topic.id === '2' ? (
          <img
            src={canvasImg}
            alt="Canvas Propuesta de Valor"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: isMobile ? '100px' : '220px',
              maxHeight: isMobile ? '100px' : '220px',
              objectFit: 'contain',
              imageRendering: 'pixelated',
              transform: isMobile ? 'scale(1)' : 'scale(1.2)'
            }}
          />
        ) : topic.id === '3' ? (
          <img
            src={valorImg}
            alt="Propuesta de Valor"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: isMobile ? '100px' : '220px',
              maxHeight: isMobile ? '100px' : '220px',
              objectFit: 'contain',
              imageRendering: 'pixelated',
              transform: isMobile ? 'scale(1)' : 'scale(1.2)'
            }}
          />
        ) : topic.type === 'video' ? (
          <PlayDotMatrix size={isMobile ? 90 : 180} color="#ff8c42" />
        ) : topic.type === 'interactive' ? (
          <ChartDotMatrix size={isMobile ? 90 : 180} color="#ff8c42" />
        ) : (
          <DocumentDotMatrix size={isMobile ? 90 : 180} color="#ff8c42" />
        )}
      </div>

      {/* Contenido a la derecha */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px', width: '100%' }}>
        {/* Título principal con número destacado */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: isMobile ? '8px' : '12px', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: '800',
            fontFamily: 'Nunito, sans-serif',
            background: 'linear-gradient(135deg, #FF3E01 0%, #f09530 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1'
          }}>
            {index + 1}.
          </span>
          <h3 style={{
            fontSize: isMobile ? '20px' : '32px',
            fontWeight: '700',
            fontFamily: 'Nunito, sans-serif',
            color: '#1a1a1a',
            flex: 1,
            lineHeight: '1.2'
          }}>
            {topic.title}
          </h3>
        </div>

        {/* Tarjeta de Descripción - HUNDIDA */}
        <div style={{
          background: '#e0e5ec',
          borderRadius: isMobile ? '16px' : '24px',
          padding: isMobile ? '16px' : '28px',
          boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}>

          <div style={{
            fontSize: '14px',
            fontFamily: 'Nunito, sans-serif',
            color: '#FF3E01',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: '600',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            {topic.id === '1' ? 'Análisis del problema' : topic.id === '2' ? 'CANVAS' : topic.id === '3' ? 'Propuesta de valor' : 'Descripción'}
          </div>
          <p style={{
            fontSize: isMobile ? '14px' : '18px',
            fontFamily: 'Nunito, sans-serif',
            color: '#2c2c2c',
            lineHeight: '1.7',
            fontWeight: '400',
            margin: 0
          }}>
            {topic.description}
          </p>
        </div>

        {/* Tarjeta de Tiempo de lectura - HUNDIDA */}
        <div style={{
          background: '#e0e5ec',
          borderRadius: isMobile ? '16px' : '24px',
          padding: isMobile ? '16px' : '24px',
          boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '16px' : '0',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '20px' }}>
            {/* Icono de reloj - también hundido */}
            <div style={{
              width: isMobile ? '48px' : '60px',
              height: isMobile ? '48px' : '60px',
              borderRadius: isMobile ? '12px' : '16px',
              background: '#e0e5ec',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff'
            }}>
              <ClockOutline size={isMobile ? 24 : 32} color="#f09530" />
            </div>

            <div>
              <div style={{
                fontSize: isMobile ? '11px' : '13px',
                fontFamily: 'Nunito, sans-serif',
                color: '#86868b',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: '4px',
                fontWeight: '600'
              }}>
                {isMobile ? 'Tiempo' : 'Tiempo estimado de lectura'}
              </div>
              <div style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: '700',
                fontFamily: 'Nunito, sans-serif',
                background: 'linear-gradient(135deg, #f09530 0%, #e8871e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {topic.duration}
              </div>
            </div>
          </div>

          {/* Botón ON/Activador - ELEVADO Y PROMINENTE */}
          <button
            onClick={onClick}
            style={{
              width: isMobile ? '100%' : '100px',
              height: isMobile ? '50px' : '60px',
              borderRadius: isMobile ? '25px' : '30px',
              background: topic.completed
                ? 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)'
                : 'linear-gradient(135deg, #ff4507 0%, #e53801 100%)',
              border: 'none',
              boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: topic.locked ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              if (!topic.locked) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff';
            }}
          >
            {topic.completed ? (
              <CheckCircleOutline size={32} color="white" />
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '700',
                  fontFamily: 'Nunito, sans-serif',
                  color: 'white',
                  letterSpacing: '1px'
                }}>
                  ON
                </span>
                <ChevronRightOutline size={20} color="white" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Botón Download flotante */}
      {isAdmin && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDownload?.();
          }}
          style={{
            position: 'absolute',
            top: isMobile ? '16px' : '32px',
            right: isMobile ? '16px' : '32px',
            width: isMobile ? '40px' : '48px',
            height: isMobile ? '40px' : '48px',
            borderRadius: '50%',
            background: '#e0e5ec',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
            transition: 'all 0.3s ease'
          }}
        >
          <DownloadOutline size={isMobile ? 16 : 20} />
        </button>
      )}
    </div>
  );
};

// ============= OPCIÓN B: ESTILO DASHBOARD (Como imagen 1) =============
export const TopicCardDashboard: React.FC<TopicCardProps> = ({ topic, index, onClick, isAdmin, onDownload }) => {
  return (
    <div
      onClick={onClick}
      className="topic-card-dashboard"
      style={{
        background: '#e0e5ec',
        borderRadius: '24px',
        padding: '32px',
        cursor: topic.locked ? 'not-allowed' : 'pointer',
        opacity: topic.locked ? 0.6 : 1,
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        boxShadow: '12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Círculo con progreso */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: '#e0e5ec',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff'
        }}>
          <div style={{ fontSize: '48px', fontWeight: '800', fontFamily: 'Nunito, sans-serif', color: '#FF3E01' }}>{index + 1}</div>
          <MapOutline size={36} color="#6e6e73" />
        </div>

        {/* Arco de progreso */}
        {topic.completed && (
          <svg style={{ position: 'absolute', top: '-3px', left: '-3px' }} width="146" height="146">
            <circle
              cx="73"
              cy="73"
              r="70"
              fill="none"
              stroke="#FF3E01"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="440"
              strokeDashoffset="110"
              transform="rotate(-90 73 73)"
            />
          </svg>
        )}
      </div>

      {/* Contenido principal */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '700',
          fontFamily: 'Nunito, sans-serif',
          color: '#1a1a1a',
          marginBottom: '8px'
        }}>
          {topic.title}
        </h3>

        <p style={{
          fontSize: '14px',
          fontFamily: 'Nunito, sans-serif',
          color: '#6e6e73',
          marginBottom: '24px',
          lineHeight: '1.5'
        }}>
          {topic.description}
        </p>

        {/* Grid 2x2 de información */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px'
        }}>
          <div style={{
            background: '#e0e5ec',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff'
          }}>
            <div style={{ fontSize: '11px', fontFamily: 'Nunito, sans-serif', color: '#86868b', marginBottom: '4px' }}>DURACIÓN</div>
            <div style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Nunito, sans-serif', color: '#2c2c2c' }}>{topic.duration}</div>
          </div>

          <div style={{
            background: '#e0e5ec',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff'
          }}>
            <div style={{ fontSize: '11px', fontFamily: 'Nunito, sans-serif', color: '#86868b', marginBottom: '4px' }}>TIPO</div>
            <div style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Nunito, sans-serif', color: '#2c2c2c' }}>Documento</div>
          </div>

          <div style={{
            background: '#e0e5ec',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff'
          }}>
            <div style={{ fontSize: '11px', fontFamily: 'Nunito, sans-serif', color: '#86868b', marginBottom: '4px' }}>STAKEHOLDERS</div>
            <div style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Nunito, sans-serif', color: '#2c2c2c' }}>5 grupos</div>
          </div>

          <div style={{
            background: '#e0e5ec',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff'
          }}>
            <div style={{ fontSize: '11px', fontFamily: 'Nunito, sans-serif', color: '#86868b', marginBottom: '4px' }}>ESTADO</div>
            <div style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Nunito, sans-serif', color: topic.completed ? '#22c55e' : '#FF3E01' }}>
              {topic.completed ? 'Completado' : 'Disponible'}
            </div>
          </div>
        </div>
      </div>

      {/* Botón de descarga */}
      {isAdmin && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDownload?.();
          }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: '#e0e5ec',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff',
            transition: 'all 0.3s ease'
          }}
        >
          <DownloadOutline size={20} />
        </button>
      )}
    </div>
  );
};

// ============= OPCIÓN C: HÍBRIDO MINIMALISTA =============
export const TopicCardMinimal: React.FC<TopicCardProps> = ({ topic, index, onClick, isAdmin, onDownload }) => {
  return (
    <div
      onClick={onClick}
      className="topic-card-minimal"
      style={{
        background: '#e0e5ec',
        borderRadius: '24px',
        padding: '48px',
        cursor: topic.locked ? 'not-allowed' : 'pointer',
        opacity: topic.locked ? 0.6 : 1,
        textAlign: 'center',
        position: 'relative',
        boxShadow: '16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Número grande arriba */}
      <div style={{
        fontSize: '72px',
        fontWeight: '800',
        fontFamily: 'Nunito, sans-serif',
        color: '#FF3E01',
        lineHeight: '1',
        marginBottom: '24px',
        textShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'
      }}>
        {index + 1}
      </div>

      {/* Icono centrado */}
      <div style={{
        width: '120px',
        height: '120px',
        margin: '0 auto 32px',
        borderRadius: '50%',
        background: '#e0e5ec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
      }}>
        <MapOutline size={56} color="#6e6e73" />
      </div>

      {/* Título prominente */}
      <h3 style={{
        fontSize: '28px',
        fontWeight: '700',
        fontFamily: 'Nunito, sans-serif',
        color: '#1a1a1a',
        marginBottom: '16px',
        lineHeight: '1.2'
      }}>
        {topic.title}
      </h3>

      {/* Descripción */}
      <p style={{
        fontSize: '16px',
        fontFamily: 'Nunito, sans-serif',
        color: '#6e6e73',
        marginBottom: '32px',
        lineHeight: '1.5',
        maxWidth: '400px',
        margin: '0 auto 32px'
      }}>
        {topic.description}
      </p>

      {/* Badges minimalistas */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          background: '#e0e5ec',
          borderRadius: '50px',
          boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff'
        }}>
          <ClockOutline size={16} />
          <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Nunito, sans-serif', color: '#2c2c2c' }}>{topic.duration}</span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          background: '#e0e5ec',
          borderRadius: '50px',
          boxShadow: 'inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff'
        }}>
          <DocumentOutline size={16} />
          <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Nunito, sans-serif', color: '#2c2c2c' }}>Documento</span>
        </div>

        {topic.completed && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: 'linear-gradient(145deg, #4ade80, #22c55e)',
            borderRadius: '50px',
            boxShadow: '3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff'
          }}>
            <CheckCircleOutline size={16} color="white" />
            <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Nunito, sans-serif', color: 'white' }}>Completado</span>
          </div>
        )}
      </div>

      {/* Botón de descarga flotante */}
      {isAdmin && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDownload?.();
          }}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #ff4507, #e53801)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff',
            transition: 'all 0.3s ease'
          }}
        >
          <DownloadOutline size={20} color="white" />
        </button>
      )}
    </div>
  );
};