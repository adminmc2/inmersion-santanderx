import React, { useState, useEffect } from 'react';
import { SadFace, NeutralFace, ConfusedFace, TiredFace, RelaxedFace, HappyFace, ThinkingFace, ProudFace } from './OutlineEmojis';
import {
  UserOutline,
  MessageOutline,
  HeartOutline,
  EyeOutline,
  EyeOffOutline,
  AlertOutline,
  ChevronDownOutline,
  ChevronUpOutline,
  CloseOutline,
  ClockOutline,
  BoltOutline,
  TrendUpOutline,
  TargetOutline,
  StarOutline
} from './OutlineIcons';
import '../styles/customer-map-hapto.css';

interface CustomerDiscoveryMapV2Props {
  onClose?: () => void;
  isAdmin?: boolean;
}

interface SectionData {
  content: string;
  icons?: React.ReactElement[];
}

const CustomerDiscoveryMapV2: React.FC<CustomerDiscoveryMapV2Props> = ({ onClose, isAdmin = false }) => {
  const [expandedSection, setExpandedSection] = useState<string>('fases');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    {
      id: 'fases',
      title: '1. Fases del Cliente',
      icon: <UserOutline size={20} />,
      data: {
        antes: {
          content: 'Soy director/a de academia gestionando caóticamente 6 tipos de stakeholders simultáneamente. Pierdo 25% de oportunidades por operar con sistemas fragmentados: whatsApp para estudiantes y familias, Excel para gestores y ocupación, email para proveedores, sin sistema para promotores. No tengo visibilidad real del negocio, trabajo 60+ horas/semana en tareas operativas sin tiempo para estrategia. Mi equipo está quemado, renuncian cada 6 meses. Busco una solución integral que transforme mi operación.'
        },
        durante: {
          content: 'Implemento INMERSION Connect, una plataforma integral con 6 módulos especializados que transforman completamente mi operación. La consultoría me acompaña 2 semanas rediseñando procesos. Ahora gestiono todo desde un dashboard central: el módulo de academias centraliza operaciones comerciales, académicas y financieras; el módulo de gestores ofrece portal B2B profesional con cotizaciones instantáneas; estudiantes tienen app completa con inscripción, pagos y seguimiento; familias gestionan disponibilidad y matching inteligente; proveedores se integran en marketplace de experiencias; promotores trackean referidos automáticamente.'
        },
        despues: {
          content: 'Tras 3 meses evalúo la transformación completa: recuperé 25% ventas perdidas, mi equipo dedica 70% del tiempo a trabajo de valor (vs tareas administrativas), tenemos visibilidad total con métricas en tiempo real, tomamos decisiones basadas en datos no intuición. Los resultados hablan: nPS estudiantes 8.5+, familias 85% ocupación optimizada, gestores renuevan 95% por profesionalización, proveedores nos prefieren por eficiencia, promotores generan 30% más referidos con herramientas adecuadas. ROI demostrado de 108%.'
        }
      }
    },
    {
      id: 'contacto',
      title: '2. Puntos de Contacto',
      icon: <MessageOutline size={20} />,
      data: {
        antes: {
          content: '• Gestión fragmentada: 10+ herramientas desconectadas, datos duplicados, sin trazabilidad\n• Comunicación caótica: whatsApp saturado, emails perdidos, llamadas no registradas\n• Procesos manuales: cotizaciones 4h, reportes en Excel, pagos uno a uno\n• Sin visibilidad: no sé ocupación real, demanda futura, rentabilidad por programa\n• Equipo reactivo: apagando fuegos constantemente, sin tiempo para mejorar\n• Decisiones a ciegas: sin datos, por intuición, errores costosos'
        },
        durante: {
          content: '• Plataforma unificada: todo en un lugar, datos sincronizados, trazabilidad completa\n• Módulos especializados: cada stakeholder con herramientas específicas para sus necesidades\n• Automatización inteligente: propuestas en minutos, reportes automáticos, pagos programados\n• Consultoría continua: acompañamiento en optimización de procesos y mejores prácticas\n• IA potenciando: 8 agentes trabajando 24/7 en evaluación, matching, personalización, soporte\n• Dashboard estratégico: KPIs en tiempo real, predicciones, alertas proactivas\n• Equipo empoderado: herramientas profesionales, tiempo para innovar, decisiones informadas'
        },
        despues: {
          content: '• Operación optimizada: procesos estandarizados, eficiencia máxima, escalabilidad probada\n• Ecosistema integrado: todos los stakeholders conectados y satisfechos\n• Mejora continua: sistema aprende y mejora constantemente\n• Ventaja competitiva: academia líder en profesionalización e innovación\n• Crecimiento sostenible: modelo replicable para expansión\n• Equipo realizado: trabajo estratégico, desarrollo profesional, satisfacción laboral'
        }
      }
    },
    {
      id: 'emociones',
      title: '3. Emociones',
      icon: <HeartOutline size={20} />,
      data: {
        antes: {
          content: 'Desbordamiento total: "No doy abasto, trabajo 14h/día y sigo atrasado"\nAnsiedad constante: "Sé que pierdo oportunidades pero no puedo hacer más"\nFrustración profunda: "Competidores más pequeños parecen más profesionales"\nAgotamiento extremo: "Mi equipo y yo estamos al límite, esto no es sostenible"',
          icons: [<TiredFace size={20} color="#ff4507" />, <NeutralFace size={20} color="#ff4507" />, <ConfusedFace size={20} color="#ff4507" />, <SadFace size={20} color="#ff4507" />]
        },
        durante: {
          content: 'Respiro por primera vez: "La consultoría me está ayudando a reorganizar todo"\nEsperanza real: "Veo luz al final del túnel, esto puede funcionar"\nAprendizaje continuo: "Descubro capacidades que no sabía que necesitaba"\nEmpoderamiento progresivo: "Mi equipo está motivado con las nuevas herramientas"',
          icons: [<RelaxedFace size={20} color="#e53801" />, <HappyFace size={20} color="#e53801" />, <ThinkingFace size={20} color="#e53801" />, <ProudFace size={20} color="#e53801" />]
        },
        despues: {
          content: 'Orgullo legítimo: "Mi academia es referencia de profesionalización en el sector"\nEnfoque estratégico: "Por fin puedo pensar en el futuro, no solo en sobrevivir"\nAmbición renovada: "Con este modelo puedo crecer sin límites"\nLiderazgo sectorial: "Otros vienen a aprender de nuestra transformación"',
          icons: [<ProudFace size={20} color="#EDB458" />, <TargetOutline size={20} color="#EDB458" />, <TrendUpOutline size={20} color="#EDB458" />, <StarOutline size={20} color="#EDB458" />]
        }
      }
    },
    {
      id: 'pensando',
      title: '4. Qué piensa y siente',
      icon: <EyeOutline size={20} />,
      data: {
        antes: {
          content: '• Ve academia estancada con potencial desperdiciado, tecnológicamente obsoleta\n• Oye clientes frustrados por falta de profesionalización\n• Dice "necesitamos modernizarnos pero no sé cómo empezar sin quebrar"\n• Hace malabares diarios para mantener todo funcionando mínimamente'
        },
        durante: {
          content: '• Ve oportunidad real de transformación con acompañamiento adecuado\n• Oye feedback positivo de stakeholders sobre los cambios\n• Dice "por fin tenemos las herramientas que necesitábamos desde hace años"\n• Hace implementación gradual con resultados visibles desde semana 1'
        },
        despues: {
          content: '• Ve negocio transformado, competitivo y escalable\n• Oye reconocimiento del sector y solicitudes de benchmarking\n• Dice "el ROI superó expectativas, deberíamos haberlo hecho antes"\n• Hace planes de expansión con confianza en el modelo probado'
        }
      }
    },
    {
      id: 'preocupaciones',
      title: '5. Preocupaciones',
      icon: <EyeOffOutline size={20} />,
      data: {
        antes: {
          content: '• MIEDO PRINCIPAL: Perder relevancia mientras competidores se profesionalizan\n• FRUSTRACIÓN: No poder ofrecer la experiencia que estudiantes esperan en 2024\n• OBSTÁCULO: Inversión parece alta sin garantía de retorno claro\n• URGENCIA: Cada día sin sistema integrado es dinero y oportunidades perdidas'
        },
        durante: {
          content: '• APRENDIZAJE: Curva inicial requiere dedicación pero consultoría facilita\n• ADAPTACIÓN: Equipo necesita tiempo para adoptar nuevos procesos\n• INVERSIÓN: Compromiso financiero compensado por eficiencias inmediatas\n• CAMBIO: Resistencia natural al cambio superada con resultados rápidos'
        },
        despues: {
          content: '• CRECIMIENTO: Cómo escalar manteniendo calidad y eficiencia\n• INNOVACIÓN: Mantenerse a la vanguardia con actualizaciones continuas\n• COMPETENCIA: Proteger ventaja competitiva lograda\n• EXPANSIÓN: Replicar modelo en nuevos mercados o servicios'
        }
      }
    },
    {
      id: 'deseos',
      title: '6. Deseos y Necesidades',
      icon: <AlertOutline size={20} />,
      data: {
        antes: {
          content: '• DESEA: Sistema todo-en-uno que elimine el caos operativo actual\n• NECESITA: Visibilidad completa del negocio para tomar decisiones informadas\n• ASPIRA: Liderar la transformación digital del sector educativo lingüístico\n• REQUIERE: Solución probada con ROI demostrable, no experimentos'
        },
        durante: {
          content: '• DESEA: Implementación rápida con mínima disrupción operativa\n• NECESITA: Acompañamiento experto durante toda la transición\n• ASPIRA: Ver mejoras tangibles desde la primera semana\n• REQUIERE: Flexibilidad para adaptar la plataforma a su realidad específica'
        },
        despues: {
          content: '• DESEA: Seguir innovando y expandiendo capacidades\n• NECESITA: Mantener ventaja competitiva lograda\n• ASPIRA: Ser caso de éxito referente en el sector\n• REQUIERE: Socio tecnológico comprometido a largo plazo, no un proveedor más'
        }
      }
    },
    {
      id: 'solucion',
      title: 'NUESTRA SOLUCIÓN',
      icon: <BoltOutline size={20} />,
      isSolution: true,
      data: {
        antes: {
          content: 'INMERSION CONNECT - La única plataforma integral diseñada específicamente para el turismo lingüístico.\n\n• 6 módulos especializados para cada stakeholder\n• 8 agentes de IA trabajando 24/7\n• Consultoría incluida (no solo software)\n• ROI garantizado de 100%+ en 12 meses\n• Implementación en 2 semanas'
        },
        durante: {
          content: 'IMPLEMENTACIÓN ACOMPAÑADA\n\nSemana 1: Diagnóstico y configuración inicial\nSemana 2: Migración de datos y capacitación\nMes 1: Optimización y ajustes con datos reales\nMes 2-3: Consolidación y expansión de uso\nMes 3+: Operación optimizada y crecimiento'
        },
        despues: {
          content: 'RESULTADOS GARANTIZADOS\n\n+25% recuperación de ventas perdidas\n-70% tiempo en tareas administrativas\nNPS 8.5+ de todos los stakeholders\nROI 108% documentado\nPosición de liderazgo sectorial\nCrecimiento sostenible y escalable'
        }
      }
    }
  ];

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
            Customer Discovery Map
          </h1>
        </div>

        {/* Context Section */}
        <div className="hapto-map-context">
          <h2 className="hapto-map-context-title">
            Journey de Transformación Digital para Academias de Español
          </h2>

          {/* Stakeholders */}
          <div className="hapto-stakeholder-grid">
            <div className="hapto-stakeholder-item">
              <div className="hapto-stakeholder-number">1</div>
              <div className="hapto-stakeholder-label">Academia</div>
            </div>
            <div className="hapto-stakeholder-item">
              <div className="hapto-stakeholder-number">2</div>
              <div className="hapto-stakeholder-label">Estudiantes</div>
            </div>
            <div className="hapto-stakeholder-item">
              <div className="hapto-stakeholder-number">3</div>
              <div className="hapto-stakeholder-label">Gestores</div>
            </div>
            <div className="hapto-stakeholder-item">
              <div className="hapto-stakeholder-number">4</div>
              <div className="hapto-stakeholder-label">Familias</div>
            </div>
            <div className="hapto-stakeholder-item">
              <div className="hapto-stakeholder-number">5</div>
              <div className="hapto-stakeholder-label">Proveedores</div>
            </div>
            <div className="hapto-stakeholder-item">
              <div className="hapto-stakeholder-number">6</div>
              <div className="hapto-stakeholder-label">Promotores</div>
            </div>
          </div>

          <p className="hapto-map-context-text">
            Este mapa muestra el journey completo de una academia de español que debe coordinar simultáneamente
            estudiantes individuales, grupos escolares con menores, profesores acompañantes, gestores educativos
            internacionales, familias anfitrionas y proveedores de actividades - todo sin una plataforma integrada.
          </p>
        </div>

        {/* Content */}
        <div className="hapto-map-content">
          {sections.map((section) => (
            <div
              key={section.id}
              className="hapto-map-section"
            >
              <div
                onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                className={`hapto-section-header ${expandedSection === section.id ? 'active' : ''} ${section.isSolution ? 'solution' : ''}`}
              >
                <div className="hapto-section-left">
                  <div className="hapto-section-icon">
                    {section.icon}
                  </div>
                  <h2 className="hapto-section-title">{section.title}</h2>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUpOutline className="hapto-chevron rotated" size={20} />
                ) : (
                  <ChevronDownOutline className="hapto-chevron" size={20} />
                )}
              </div>

              {expandedSection === section.id && (
                <div className="hapto-section-content">
                  {/* ANTES */}
                  <div className="hapto-phase-card">
                    {!section.isSolution && (
                      <div className="hapto-phase-header">
                        <div className="hapto-phase-icon antes">
                          <ClockOutline size={20} color="white" />
                        </div>
                        <h3 className="hapto-phase-title antes">
                          ANTES
                        </h3>
                      </div>
                    )}
                    {section.id === 'emociones' && section.data.antes.icons ? (
                      <div>
                        {section.data.antes.content.split('\n').map((line: string, idx: number) => (
                          <div key={idx} className="hapto-emotion-item">
                            <span className="hapto-emotion-icon">{section.data.antes.icons![idx]}</span>
                            <span className="hapto-emotion-text">{line}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="hapto-phase-content">
                        {section.isSolution && section.data.antes.content.includes('\n') ? (
                          <>
                            <div style={{ color: '#ff4507', fontWeight: '700', marginBottom: '12px', fontSize: '16px' }}>
                              {section.data.antes.content.split('\n')[0]}
                            </div>
                            <div>
                              {section.data.antes.content.split('\n').slice(1).join('\n')}
                            </div>
                          </>
                        ) : (
                          section.data.antes.content
                        )}
                      </div>
                    )}
                  </div>

                  {/* DURANTE */}
                  <div className="hapto-phase-card">
                    {!section.isSolution && (
                      <div className="hapto-phase-header">
                        <div className="hapto-phase-icon durante">
                          <BoltOutline size={20} color="white" />
                        </div>
                        <h3 className="hapto-phase-title durante">
                          DURANTE
                        </h3>
                      </div>
                    )}
                    {section.id === 'emociones' && section.data.durante.icons ? (
                      <div>
                        {section.data.durante.content.split('\n').map((line: string, idx: number) => (
                          <div key={idx} className="hapto-emotion-item">
                            <span className="hapto-emotion-icon">{section.data.durante.icons![idx]}</span>
                            <span className="hapto-emotion-text">{line}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="hapto-phase-content">
                        {section.isSolution && section.data.durante.content.includes('\n') ? (
                          <>
                            <div style={{ color: '#ff4507', fontWeight: '700', marginBottom: '12px', fontSize: '16px' }}>
                              {section.data.durante.content.split('\n')[0]}
                            </div>
                            <div>
                              {section.data.durante.content.split('\n').slice(1).join('\n')}
                            </div>
                          </>
                        ) : (
                          section.data.durante.content
                        )}
                      </div>
                    )}
                  </div>

                  {/* DESPUÉS */}
                  <div className="hapto-phase-card">
                    {!section.isSolution && (
                      <div className="hapto-phase-header">
                        <div className="hapto-phase-icon despues">
                          <TrendUpOutline size={20} color="white" />
                        </div>
                        <h3 className="hapto-phase-title despues">
                          DESPUÉS
                        </h3>
                      </div>
                    )}
                    {section.id === 'emociones' && section.data.despues.icons ? (
                      <div>
                        {section.data.despues.content.split('\n').map((line: string, idx: number) => (
                          <div key={idx} className="hapto-emotion-item">
                            <span className="hapto-emotion-icon">{section.data.despues.icons![idx]}</span>
                            <span className="hapto-emotion-text">{line}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="hapto-phase-content">
                        {section.isSolution && section.data.despues.content.includes('\n') ? (
                          <>
                            <div style={{ color: '#ff4507', fontWeight: '700', marginBottom: '12px', fontSize: '16px' }}>
                              {section.data.despues.content.split('\n')[0]}
                            </div>
                            <div>
                              {section.data.despues.content.split('\n').slice(1).join('\n')}
                            </div>
                          </>
                        ) : (
                          section.data.despues.content
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Metrics Footer */}
        <div className="hapto-map-footer">
          <h2 className="hapto-footer-title">Métricas de Impacto</h2>
          <div className="hapto-metrics-grid">
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">25%</div>
              <div className="hapto-metric-label">Ventas recuperadas</div>
            </div>
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">70%</div>
              <div className="hapto-metric-label">Reducción tiempo admin</div>
            </div>
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">8.5+</div>
              <div className="hapto-metric-label">NPS estudiantes</div>
            </div>
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">108%</div>
              <div className="hapto-metric-label">ROI año 1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDiscoveryMapV2;