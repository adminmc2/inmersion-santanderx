import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  SearchOutline,
  ArrowLeftOutline,
  ClockOutline,
  CheckCircleOutline,
  LockOutline,
  PlayCircleOutline,
  DocumentOutline,
  ChartOutline,
  DownloadOutline,
  MapOutline,
  NetworkOutline,
  JourneyOutline
} from '../components/OutlineIcons';
import '../styles/module-hapto.css';
import '../styles/module-hapto-v2.css';

interface ModuleViewerProps {
  isAdmin: boolean;
}

import CustomerDiscoveryMapV2 from '../components/CustomerDiscoveryMapV2';
import PropuestaValorDeclaracion from '../components/PropuestaValorDeclaracion';
import CanvasPropuestaValor from '../components/CanvasPropuestaValor';
import { TopicCardClock } from '../components/TopicCardVersions';

interface Topic {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'video' | 'document' | 'interactive' | 'quiz';
  completed: boolean;
  locked: boolean;
  rating?: number;
  comments: number;
}

const ModuleViewer: React.FC<ModuleViewerProps> = ({ isAdmin }) => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState<any>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [showCustomerMap, setShowCustomerMap] = useState(false);
  const [showPropuestaValor, setShowPropuestaValor] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Datos de ejemplo - después conectaremos con tu backend
    const modules: any = {
      '1': {
        title: 'Research, Pains & Buys',
        subtitle: 'Problema, persona y propuesta de valor',
        description: 'Análisis exhaustivo del mercado de turismo lingüístico, identificación de problemas clave y propuesta de valor única de INMERSION.',
        icon: <SearchOutline size={48} color="#6e6e73" />
      }
    };

    setModule(modules[moduleId || '1']);

    // Documentos del módulo Research, Pains & Buys
    setTopics([
      {
        id: '1',
        title: 'Customer Discovery Map',
        description: 'Análisis detallado del problema y los 5 stakeholders involucrados',
        duration: '5 min',
        type: 'document',
        completed: false,
        locked: false,
        rating: 0,
        comments: 0
      },
      {
        id: '2',
        title: 'Canvas propuesta de valor',
        description: 'Lienzo de propuesta de valor para el turismo lingüístico',
        duration: '3 min',
        type: 'document',
        completed: false,
        locked: false,
        rating: 0,
        comments: 0
      },
      {
        id: '3',
        title: 'Declaración de Propuesta de Valor',
        description: 'Sistema Operativo del Turismo Lingüístico que unifica todos los stakeholders',
        duration: '1 min',
        type: 'document',
        completed: false,
        locked: false,
        rating: 0,
        comments: 0
      }
    ]);
  }, [moduleId]);

  const getTypeIcon = (type: string, topicId?: string) => {
    // Iconos especiales para ciertos documentos
    if (topicId === '1') return <MapOutline size={36} />;  // Customer Discovery Map con localizadores

    switch(type) {
      case 'video': return <PlayCircleOutline size={36} />;
      case 'document': return <DocumentOutline size={36} />;
      case 'interactive': return <ChartOutline size={36} />;
      case 'quiz': return <CheckCircleOutline size={36} />;
      default: return <DocumentOutline size={36} />;
    }
  };

  const getTypeClass = (type: string) => {
    switch(type) {
      case 'video': return 'video';
      case 'document': return 'document';
      case 'interactive': return 'interactive';
      case 'quiz': return 'quiz';
      default: return 'document';
    }
  };

  const handleDownloadPDF = (documentTitle?: string) => {
    if (documentTitle) {
      toast.success(`Descargando PDF: ${documentTitle}`);
    } else {
      toast.success('Generando PDF completo del módulo...');
    }
    // Aquí implementarás la lógica para generar el PDF de cada documento
  };

  if (!module) {
    return (
      <div className="hapto-loading-container">
        <div className="hapto-spinner-large"></div>
      </div>
    );
  }

  return (
    <div className="hapto-module-container">
      {/* Header with enhanced Haptomorphism */}
      <header className="hapto-module-header" style={{
        background: '#e0e5ec',
        padding: isMobile ? '16px 20px' : '24px 48px',
        boxShadow: '0 10px 30px rgba(163, 177, 198, 0.5)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="hapto-module-header-content" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          gap: isMobile ? '16px' : '0'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              background: '#e0e5ec',
              border: 'none',
              borderRadius: '16px',
              padding: isMobile ? '10px 16px' : '12px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              color: '#2c2c2c',
              fontFamily: 'Nunito, sans-serif',
              boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
              transition: 'all 0.3s ease',
              alignSelf: isMobile ? 'flex-start' : 'auto'
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
            <ArrowLeftOutline size={20} />
            Volver
          </button>

          {/* Logo INMERSION with enhanced depth */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <h1 style={{
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: '800',
              fontFamily: 'Nunito, sans-serif',
              color: '#2c2c2c',
              margin: 0,
              letterSpacing: '-0.5px',
              textShadow: '2px 2px 4px rgba(163, 177, 198, 0.5)'
            }}>
              INMERS
            </h1>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ff4507, #e53801)',
              color: 'white',
              padding: isMobile ? '4px 12px' : '8px 20px',
              borderRadius: isMobile ? '12px' : '16px',
              fontWeight: '800',
              fontSize: isMobile ? '24px' : '32px',
              fontFamily: 'Nunito, sans-serif',
              boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff, inset 2px 2px 4px rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.5px',
              transform: 'perspective(100px) rotateX(-5deg)'
            }}>
              ION
            </span>
          </div>
        </div>
      </header>

      {/* Module Hero Section with enhanced Haptomorphism */}
      <div className="hapto-module-hero" style={{
        background: 'linear-gradient(180deg, #e0e5ec 0%, #d8dde4 100%)',
        padding: isMobile ? '32px 20px' : '64px 48px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="hapto-module-hero-content" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '24px' : '48px'
        }}>
          {/* Icon container with deep inset */}
          <div style={{
            width: isMobile ? '120px' : '180px',
            height: isMobile ? '120px' : '180px',
            borderRadius: isMobile ? '24px' : '32px',
            background: '#e0e5ec',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 12px 12px 24px #a3b1c6, inset -12px -12px 24px #ffffff',
            position: 'relative',
            flexShrink: 0
          }}>
            <div style={{
              transform: 'scale(1.5)',
              filter: 'drop-shadow(2px 2px 4px rgba(163, 177, 198, 0.5))'
            }}>
              {module.icon}
            </div>
          </div>

          <div className="hapto-module-info" style={{ flex: 1 }}>
            <h1 style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: '800',
              fontFamily: 'Nunito, sans-serif',
              background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '16px',
              textShadow: '2px 2px 4px rgba(163, 177, 198, 0.3)',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              {module.title}
            </h1>
            <p style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: '600',
              fontFamily: 'Nunito, sans-serif',
              color: '#ff4507',
              marginBottom: '16px',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              {module.subtitle}
            </p>
            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              fontFamily: 'Nunito, sans-serif',
              color: '#6e6e73',
              lineHeight: '1.6',
              maxWidth: '800px',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              {module.description}
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: '#e0e5ec',
          boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff',
          opacity: 0.5
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: '#e0e5ec',
          boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
          opacity: 0.3
        }} />
      </div>

      <main className="hapto-module-main" style={{
        background: '#e0e5ec',
        minHeight: 'calc(100vh - 400px)',
        padding: isMobile ? '20px' : '48px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: isMobile ? '24px' : '36px',
            fontWeight: '700',
            fontFamily: 'Nunito, sans-serif',
            color: '#2c2c2c',
            marginBottom: isMobile ? '32px' : '48px',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(163, 177, 198, 0.3)'
          }}>
            Documentos del Proyecto
          </h2>

          {/* Topics with enhanced spacing and effects */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '20px' : '32px',
            marginBottom: isMobile ? '48px' : '64px'
          }}>
            {topics.map((topic, index) => (
              <div
                key={topic.id}
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <TopicCardClock
                  topic={topic}
                  index={index}
                  isMobile={isMobile}
                  onClick={() => {
                    if (!topic.locked) {
                      if (topic.id === '1') {
                        setShowCustomerMap(true);
                      } else if (topic.id === '2') {
                        setShowCanvas(true);
                      } else if (topic.id === '3') {
                        setShowPropuestaValor(true);
                      } else {
                        navigate(`/module/${moduleId}/topic/${topic.id}`);
                      }
                    }
                  }}
                  isAdmin={isAdmin}
                  onDownload={() => handleDownloadPDF(topic.title)}
                />
              </div>
            ))}
          </div>
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

      {/* Customer Discovery Map Modal */}
      {showCustomerMap && (
        <CustomerDiscoveryMapV2 onClose={() => setShowCustomerMap(false)} isAdmin={isAdmin} />
      )}

      {/* Canvas Modal */}
      {showCanvas && (
        <CanvasPropuestaValor onClose={() => setShowCanvas(false)} isAdmin={isAdmin} />
      )}

      {/* Propuesta de Valor Modal */}
      {showPropuestaValor && (
        <PropuestaValorDeclaracion onClose={() => setShowPropuestaValor(false)} isAdmin={isAdmin} />
      )}
    </div>
  );
};

export default ModuleViewer;