import React, { useState, useEffect, useRef } from 'react';
import {
  CloseOutline,
  PackageOutline,     // Para Product & Services
  ShieldCheckOutline, // Para Pain Relievers
  GiftOutline,        // Para Gain Creators
  BriefcaseOutline,   // Para Customer Jobs
  TrophyOutline,      // Para Gains
  HeartOutline,       // Para conexión de valor entre propuesta y cliente
  DownloadOutline     // Para botón de descarga
} from './OutlineIcons';
import { SadFace } from './OutlineEmojis'; // Para Pains (dolor/problemas)
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import toast from 'react-hot-toast';
import '../styles/customer-map-hapto.css';

interface CanvasPropuestaValorV3Props {
  onClose?: () => void;
  isAdmin?: boolean;
}

// PROPUESTA 3: Layout visual tipo Canvas con conexión entre Propuesta y Cliente
// Mobile First: En móvil se apilan verticalmente, en desktop se muestran lado a lado

const CanvasPropuestaValorV3: React.FC<CanvasPropuestaValorV3Props> = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string>('products');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;

    setIsGeneratingPDF(true);
    toast.loading('Generando PDF...', { id: 'pdf-generation' });

    try {
      // Capturar el contenido
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#e0e5ec'
      });

      // Crear PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('canvas-propuesta-valor.pdf');

      toast.success('PDF descargado exitosamente', { id: 'pdf-generation' });
    } catch (error) {
      console.error('Error generando PDF:', error);
      toast.error('Error al generar el PDF', { id: 'pdf-generation' });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const canvasContent = {
    propuesta: {
      title: 'Propuesta de Valor',
      color: '#ff4507',
      sections: [
        {
          id: 'products',
          title: 'Product & Services',
          icon: <PackageOutline size={isMobile ? 16 : 20} />,
          items: [
            'Plataforma InmersiON Connect (6 módulos integrados)',
            '8 Agentes IA especializados (LIA)',
            'Apps móviles para cada stakeholder',
            'Consultoría estratégica ELE',
            'Programa transformación 90 días',
            'Onboarding y migración guiada',
            'Comunidad academias pioneras',
            'Certificación InmersiON para familias',
            'Actualizaciones co-creadas'
          ]
        },
        {
          id: 'pain-relievers',
          title: 'Pain Relievers',
          icon: <ShieldCheckOutline size={isMobile ? 16 : 20} />,
          items: [
            '70% reducción trabajo manual',
            'Respuestas en 5 min vs 4 horas',
            'Facturación y pagos automáticos',
            'Dashboard unificado tiempo real',
            'Trazabilidad completa',
            'Alertas predictivas',
            'Procesos estandarizados',
            'Plantillas profesionales'
          ]
        },
        {
          id: 'gain-creators',
          title: 'Gain Creators',
          icon: <GiftOutline size={isMobile ? 16 : 20} />,
          items: [
            '108% retorno en 18 meses',
            'Break-even mes 4',
            'LTV/CAC 12-40:1',
            'Conocimiento sectorial 14 años',
            'Network effects del ecosistema',
            'Barrera de entrada por IA',
            'Academia como activo tecnológico',
            'Escalabilidad probada hasta 35K estudiantes',
            'Exit strategy con valoración premium'
          ]
        }
      ]
    },
    cliente: {
      title: 'Segmento de Cliente',
      color: '#22c55e',
      sections: [
        {
          id: 'customer-jobs',
          title: 'Customer Jobs',
          icon: <BriefcaseOutline size={isMobile ? 16 : 20} />,
          items: [
            'Gestionar 6 tipos de stakeholders simultáneamente',
            'Responder cotizaciones en <24h',
            'Coordinar alojamientos con match cultural',
            'Diferenciarse en mercado saturado',
            'Escalar sin perder calidad',
            'Garantizar experiencias memorables',
            'Crear comunidad entre stakeholders',
            'Mantener satisfacción >85%'
          ]
        },
        {
          id: 'pains',
          title: 'Pains',
          icon: <SadFace size={isMobile ? 16 : 20} />,
          items: [
            'Pierdo 25% de ventas por ineficiencia',
            'Trabajo 70h/semana sin tiempo estratégico',
            'Equipo renuncia por burnout',
            'Compito solo por precio',
            'Dependencia 30% comisiones',
            'Sin datos para decisiones',
            'Quejas por mala coordinación',
            'Familias abandonan el programa',
            'Sin feedback para mejorar'
          ]
        },
        {
          id: 'gains',
          title: 'Gains',
          icon: <TrophyOutline size={isMobile ? 16 : 20} />,
          items: [
            'Recuperar 70% tiempo administrativo',
            'Dashboard con visibilidad total',
            'Equipo motivado y productivo',
            '25% más ventas recuperadas',
            'Margen bruto >80%',
            'NPS >70 todos los stakeholders',
            'Valoración 3x de la academia',
            'Liderazgo sectorial reconocido'
          ]
        }
      ]
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
  };

  const renderSection = (section: any, sideColor: string) => (
    <div
      key={section.id}
      onClick={() => toggleSection(section.id)}
      style={{
        background: '#e0e5ec',
        borderRadius: '20px',
        padding: isMobile ? '16px' : '24px',
        marginBottom: '16px',
        boxShadow: expandedSection === section.id
          ? 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff'
          : '12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: expandedSection === section.id ? 'scale(0.98)' : 'scale(1)',
        cursor: 'pointer'
      }}
    >
      {/* Header de la sección */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '12px' : '16px',
        marginBottom: expandedSection === section.id ? '20px' : '0'
      }}>
        {/* Icono con fondo */}
        <div style={{
          width: isMobile ? '40px' : '48px',
          height: isMobile ? '40px' : '48px',
          borderRadius: '12px',
          background: expandedSection === section.id
            ? `linear-gradient(135deg, ${sideColor}, ${sideColor}dd)`
            : '#e0e5ec',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: expandedSection === section.id ? 'white' : sideColor,
          boxShadow: expandedSection === section.id
            ? 'inset 3px 3px 6px rgba(0,0,0,0.2)'
            : '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
          transition: 'all 0.3s ease'
        }}>
          {section.icon}
        </div>

        {/* Título */}
        <h4 style={{
          fontSize: isMobile ? '15px' : '17px',
          fontWeight: '700',
          fontFamily: 'Nunito, sans-serif',
          color: '#2c2c2c',
          margin: 0,
          flex: 1,
          letterSpacing: '-0.2px'
        }}>
          {section.title}
        </h4>

        {/* Contador de items */}
        <div style={{
          background: expandedSection === section.id
            ? `linear-gradient(135deg, ${sideColor}, ${sideColor}dd)`
            : '#e0e5ec',
          color: expandedSection === section.id ? 'white' : '#86868b',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '600',
          fontFamily: 'Nunito, sans-serif',
          boxShadow: expandedSection === section.id
            ? 'none'
            : 'inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff',
          transition: 'all 0.3s ease'
        }}>
          {section.items.length} items
        </div>
      </div>

      {/* Contenido expandible - ahora dentro del mismo contenedor */}
      {expandedSection === section.id && (
        <div style={{
          background: '#e0e5ec',
          borderRadius: '16px',
          padding: isMobile ? '16px' : '20px',
          boxShadow: 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff',
          animation: 'fadeIn 0.3s ease'
        }}>
          {section.items.map((item: string, index: number) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: index < section.items.length - 1 ? '12px' : '0',
              padding: '8px 12px',
              borderRadius: '10px',
              background: sideColor === '#ff4507'
                ? 'linear-gradient(135deg, rgba(255, 140, 66, 0.15), rgba(240, 149, 48, 0.1))' // Naranja claro para propuesta
                : 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(74, 222, 128, 0.1))', // Verde claro para cliente
              transition: 'all 0.2s ease'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${sideColor}, ${sideColor}dd)`,
                marginTop: '8px',
                flexShrink: 0
              }}></div>
              <p style={{
                fontSize: isMobile ? '13px' : '14px',
                fontFamily: 'Nunito, sans-serif',
                color: '#2c2c2c',
                lineHeight: '1.6',
                margin: 0,
                fontWeight: '500'
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      )}
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
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="hapto-map-download"
            style={{
              position: 'absolute',
              right: '80px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#e0e5ec',
              border: 'none',
              cursor: isGeneratingPDF ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isGeneratingPDF
                ? 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff'
                : '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
              transition: 'all 0.3s ease',
              opacity: isGeneratingPDF ? 0.6 : 1
            }}
            onMouseEnter={(e) => {
              if (!isGeneratingPDF) {
                e.currentTarget.style.boxShadow = 'inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff';
              }
            }}
            onMouseLeave={(e) => {
              if (!isGeneratingPDF) {
                e.currentTarget.style.boxShadow = '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff';
              }
            }}
            title="Descargar PDF"
          >
            <DownloadOutline size={24} color="#ff4507" />
          </button>
        </div>

        {/* Content */}
        <div className="hapto-map-content" ref={contentRef} style={{
          padding: isMobile ? '20px' : '40px',
          background: '#e0e5ec'
        }}>
          {/* Canvas Container principal */}
          <div style={{
            background: '#e0e5ec',
            borderRadius: '32px',
            padding: isMobile ? '24px' : '40px',
            boxShadow: '20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff'
          }}>
            {/* Layout principal */}
            <div style={{
              display: isMobile ? 'flex' : 'grid',
              flexDirection: isMobile ? 'column' : undefined,
              gridTemplateColumns: isMobile ? undefined : '1fr auto 1fr',
              gap: isMobile ? '32px' : '40px',
              alignItems: isMobile ? 'stretch' : 'start'
            }}>
              {/* Lado Izquierdo - Propuesta de Valor */}
              <div>
                {/* Header de sección */}
                <div style={{
                  background: '#e0e5ec',
                  borderRadius: '20px',
                  padding: isMobile ? '16px' : '20px',
                  marginBottom: '24px',
                  boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '17px' : '20px',
                    fontWeight: '800',
                    fontFamily: 'Nunito, sans-serif',
                    background: `linear-gradient(135deg, ${canvasContent.propuesta.color}, #ff8c42)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: 0,
                    letterSpacing: '-0.5px'
                  }}>
                    {canvasContent.propuesta.title}
                  </h3>
                </div>

                {/* Secciones de propuesta */}
                {canvasContent.propuesta.sections.map(section =>
                  renderSection(section, canvasContent.propuesta.color)
                )}
              </div>

              {/* Centro - Conector Visual (solo desktop) */}
              {!isMobile && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 0'
                }}>
                  {/* Icono central */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#e0e5ec',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
                    marginBottom: '24px'
                  }}>
                    <HeartOutline size={32} color="#ff4507" />
                  </div>

                  {/* Línea conectora */}
                  <div style={{
                    width: '2px',
                    height: '80px',
                    background: 'linear-gradient(180deg, #ff4507, #22c55e)',
                    marginBottom: '24px'
                  }}></div>

                  {/* Indicadores de flujo */}
                  <div style={{
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff4507',
                      animation: 'pulse 2s infinite'
                    }}></div>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff8c42',
                      animation: 'pulse 2s infinite 0.5s'
                    }}></div>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#22c55e',
                      animation: 'pulse 2s infinite 1s'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Separador móvil */}
              {isMobile && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  margin: '8px 0'
                }}>
                  <div style={{
                    flex: 1,
                    height: '2px',
                    background: 'linear-gradient(90deg, #ff4507, transparent)'
                  }}></div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#e0e5ec',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff'
                  }}>
                    <HeartOutline size={20} color="#ff4507" />
                  </div>
                  <div style={{
                    flex: 1,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #22c55e)'
                  }}></div>
                </div>
              )}

              {/* Lado Derecho - Segmento de Cliente */}
              <div>
                {/* Header de sección */}
                <div style={{
                  background: '#e0e5ec',
                  borderRadius: '20px',
                  padding: isMobile ? '16px' : '20px',
                  marginBottom: '24px',
                  boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '17px' : '20px',
                    fontWeight: '800',
                    fontFamily: 'Nunito, sans-serif',
                    background: `linear-gradient(135deg, ${canvasContent.cliente.color}, #4ade80)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: 0,
                    letterSpacing: '-0.5px'
                  }}>
                    {canvasContent.cliente.title}
                  </h3>
                </div>

                {/* Secciones de cliente */}
                {canvasContent.cliente.sections.map(section =>
                  renderSection(section, canvasContent.cliente.color)
                )}
              </div>
            </div>

            {/* Footer con indicadores */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '24px' : '40px',
              marginTop: '40px',
              padding: '24px',
              background: '#e0e5ec',
              borderRadius: '20px',
              boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  background: 'linear-gradient(135deg, #ff4507, #ff8c42)'
                }}></div>
                <span style={{
                  fontSize: isMobile ? '13px' : '14px',
                  fontFamily: 'Nunito, sans-serif',
                  color: '#2c2c2c',
                  fontWeight: '600'
                }}>
                  Propuesta
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  background: 'linear-gradient(135deg, #22c55e, #4ade80)'
                }}></div>
                <span style={{
                  fontSize: isMobile ? '13px' : '14px',
                  fontFamily: 'Nunito, sans-serif',
                  color: '#2c2c2c',
                  fontWeight: '600'
                }}>
                  Cliente
                </span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0% {
              opacity: 0.3;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
            100% {
              opacity: 0.3;
              transform: scale(0.8);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CanvasPropuestaValorV3;