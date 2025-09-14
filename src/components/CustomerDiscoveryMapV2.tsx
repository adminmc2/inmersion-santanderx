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
          icons: [<TiredFace size={20} color="#FF3E01" />, <NeutralFace size={20} color="#FF3E01" />, <ConfusedFace size={20} color="#FF3E01" />, <SadFace size={20} color="#FF3E01" />]
        },
        durante: {
          content: 'Respiro por primera vez: "La consultoría me está ayudando a reorganizar todo"\nEsperanza real: "Veo luz al final del túnel, esto puede funcionar"\nAprendizaje continuo: "Descubro capacidades que no sabía que necesitaba"\nEmpoderamiento progresivo: "Mi equipo está motivado con las nuevas herramientas"',
          icons: [<RelaxedFace size={20} color="#E8871E" />, <HappyFace size={20} color="#E8871E" />, <ThinkingFace size={20} color="#E8871E" />, <ProudFace size={20} color="#E8871E" />]
        },
        despues: {
          content: 'Orgullo legítimo: "Mi academia es referencia de profesionalización en el sector"\nEnfoque estratégico: "Por fin puedo pensar en el futuro, no solo en sobrevivir"\nAmbición renovada: "Con este modelo puedo crecer sin límites"\nLiderazgo sectorial: "Otros vienen a aprender de nuestra transformación"',
          icons: [<ProudFace size={20} color="#EDB458" />, <TargetOutline size={20} color="#EDB458" />, <TrendUpOutline size={20} color="#EDB458" />, <StarOutline size={20} color="#EDB458" />]
        }
      }
    },
    {
      id: 'visibles',
      title: '4. Acciones Visibles',
      icon: <EyeOutline size={20} />,
      data: {
        antes: {
          content: '• Creo cotización manual copiando de 5 Excel diferentes (4 horas)\n• Llamo 10 familias para confirmar una plaza\n• Calculo comisiones con calculadora\n• Genero facturas una por una\n• Respondo 70+ WhatsApp al día\n• Pierdo contratos importantes por responder tarde\n• Trabajo fines de semana para ponerme al día\n• No tenemos tiempo para formación ni mejora'
        },
        durante: {
          content: '• Accedo a INMERSION Connect desde cualquier dispositivo\n• Configuro la plataforma con ayuda del consultor\n• Importo todos mis datos existentes\n• Entreno a mi equipo con sesiones guiadas\n• Genero primera propuesta automática en 5 minutos (wow)\n• Veo dashboard con ocupación real por primera vez\n• Familias actualizan su disponibilidad directamente\n• Gestores acceden a su portal B2B profesional\n• Estudiantes completan inscripción online\n• Proveedores reciben reservas automáticas\n• Sistema envía recordatorios y confirmaciones\n• Facturas se generan y envían solas\n• Cobros se procesan automáticamente'
        },
        despues: {
          content: '• Reviso KPIs semanales en 10 minutos\n• Tomo decisiones basadas en predicciones de IA\n• Presento informes profesionales a inversores\n• Negocio partnerships desde posición de fuerza\n• Mi equipo propone mejoras continuas\n• Implementamos innovaciones rápidamente\n• Replicamos modelo exitoso en nueva sede\n• Compartimos mejores prácticas en conferencias\n• Asesoramos a otras academias\n• Vendemos know-how sistematizado\n• Academia vale 3x más por transformación digital'
        }
      }
    },
    {
      id: 'invisibles',
      title: '5. Acciones Invisibles',
      icon: <EyeOffOutline size={20} />,
      data: {
        antes: {
          content: 'Todo el conocimiento crítico está en la memoria del equipo. Preferencias de clientes sin documentar. Procesos no estandarizados que solo algunos conocen. Negociaciones en WhatsApp que se pierden. Promesas verbales no registradas. Compensaciones informales no trackeadas. Decisiones basadas en corazonadas. Oportunidades perdidas que ni detectamos. Problemas recurrentes sin identificar patrones.'
        },
        durante: {
          content: 'INMERSION captura y sistematiza todo el conocimiento organizacional. Cada interacción queda registrada y analizada. Sistema identifica patrones y tendencias automáticamente. Procesos se estandarizan y documentan digitalmente. Mejores prácticas se comparten entre usuarios. IA aprende preferencias específicas de cada stakeholder. Algoritmos optimizan matching y precios continuamente. Alertas predictivas previenen problemas antes de que ocurran. Consultor analiza datos y sugiere mejoras. Conocimiento se vuelve activo institucional, no personal.'
        },
        despues: {
          content: 'La academia tiene un "gemelo digital" completo de su operación. Sistema predice demanda con 85% precisión. IA sugiere acciones específicas para cada situación. Conocimiento acumulado crea barrera competitiva. Procesos optimizados son difíciles de replicar. Datos históricos permiten decisiones estratégicas. Valoración incluye activo tecnológico y know-how. Si alguien renuncia, continuidad garantizada. Modelo de negocio es escalable y vendible. Academia se convierte en activo estratégico valioso.'
        }
      }
    },
    {
      id: 'pains',
      title: '6. Pains (Puntos de Dolor)',
      icon: <AlertOutline size={20} />,
      data: {
        antes: {
          content: '• "Trabajo 70 horas/semana y sigo perdiendo oportunidades"\n• "Mi mejor empleada renunció por burnout, perdí años de conocimiento"\n• "Universidad importante nos descartó por \'poco profesionales\'"\n• "No sé si gano o pierdo dinero con cada programa"\n• "Competidores más pequeños parecen más organizados"'
        },
        durante: {
          content: '• "Cambiar 10 años de hábitos requiere esfuerzo inicial"\n• "Migrar datos históricos lleva más tiempo del esperado"\n• "Algunos stakeholders necesitan apoyo extra para adoptar tecnología"\n• "Requiere inversión de tiempo inicial para configuración"'
        },
        despues: {
          content: '• "Ahora el reto es gestionar el crecimiento acelerado"\n• "Necesito contratar perfiles más estratégicos"\n• "Competencia intenta copiar nuestro modelo"\n• "Debo invertir en innovación continua para mantener liderazgo"'
        }
      }
    },
    {
      id: 'solucion',
      title: '7. Solución INMERSION',
      icon: <BoltOutline size={20} />,
      isSolution: true,
      data: {
        antes: {
          content: 'CONSULTORÍA ESPECIALIZADA:\n• Diagnóstico inicial profundo de procesos\n• Rediseño de operaciones para eficiencia máxima\n• Acompañamiento continuo en la transformación\n• Formación del equipo en nuevas metodologías\n• Best practices del sector incorporadas\n\nPLATAFORMA TECNOLÓGICA INTEGRAL:\n• 6 módulos especializados perfectamente integrados\n• Dashboard central con visión 360° del negocio\n• Automatización de procesos administrativos\n• Herramientas profesionales para cada stakeholder\n• Escalabilidad probada hasta 35,000 estudiantes/año'
        },
        durante: {
          content: 'INTELIGENCIA ARTIFICIAL SECTORIAL:\n• 8 agentes especializados que potencian cada área\n• Aprendizaje continuo de cada interacción\n• Personalización extrema de experiencias\n• Optimización automática de operaciones\n• Predicciones para decisiones estratégicas\n\nTransformación operativa:\n• 70% reducción trabajo administrativo\n• 25% recuperación ventas perdidas\n• 85% ocupación optimizada\n• 95% retención de clientes'
        },
        despues: {
          content: 'Transformación estratégica:\n• De reactivo a proactivo\n• De intuición a datos\n• De caos a control\n• De local a escalable\n\nTransformación del equipo:\n• De operadores a estrategas\n• De saturados a realizados\n• De rotación a retención\n• De individual a colaborativo\n\n"INMERSION no es una herramienta más, es la transformación digital completa que convierte academias tradicionales en empresas tecnológicas líderes del sector educativo."'
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
            Academia de Español gestionando 5 stakeholders simultáneamente
          </h2>
          <div className="hapto-stakeholder-grid">
            {['Estudiantes', 'Escuelas', 'Gestores', 'Familias', 'Proveedores'].map((s, index) => (
              <div key={s} className="hapto-stakeholder-item">
                <div className="hapto-stakeholder-number">
                  {index + 1}
                </div>
                <p className="hapto-stakeholder-label">{s}</p>
              </div>
            ))}
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
                            <span className="hapto-emotion-icon">{section.data.antes.icons[idx]}</span>
                            <p className="hapto-emotion-text">{line}</p>
                          </div>
                        ))}
                      </div>
                    ) : section.isSolution ? (
                      <div className="hapto-phase-content">
                        {section.data.antes.content.split('\n').map((line: string, idx: number) => {
                          // Detectar líneas que empiezan con mayúsculas y tienen :
                          const colonIndex = line.indexOf(':');
                          if (colonIndex > 0) {
                            const beforeColon = line.substring(0, colonIndex);
                            const afterColon = line.substring(colonIndex);
                            // Si todo antes de : está en mayúsculas
                            if (beforeColon === beforeColon.toUpperCase()) {
                              return (
                                <p key={idx} style={{ marginBottom: '8px' }}>
                                  <span style={{ color: '#FF3E01', fontWeight: '700' }}>{beforeColon}</span>
                                  {afterColon}
                                </p>
                              );
                            }
                          }
                          return <p key={idx} style={{ marginBottom: '8px' }}>{line}</p>;
                        })}
                      </div>
                    ) : (
                      <p className="hapto-phase-content">
                        {section.data.antes.content}
                      </p>
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
                            <span className="hapto-emotion-icon">{section.data.durante.icons[idx]}</span>
                            <p className="hapto-emotion-text">{line}</p>
                          </div>
                        ))}
                      </div>
                    ) : section.isSolution ? (
                      <div className="hapto-phase-content">
                        {section.data.durante.content.split('\n').map((line: string, idx: number) => {
                          const colonIndex = line.indexOf(':');
                          if (colonIndex > 0) {
                            const beforeColon = line.substring(0, colonIndex);
                            const afterColon = line.substring(colonIndex);
                            if (beforeColon === beforeColon.toUpperCase()) {
                              return (
                                <p key={idx} style={{ marginBottom: '8px' }}>
                                  <span style={{ color: '#FF3E01', fontWeight: '700' }}>{beforeColon}</span>
                                  {afterColon}
                                </p>
                              );
                            }
                          }
                          return <p key={idx} style={{ marginBottom: '8px' }}>{line}</p>;
                        })}
                      </div>
                    ) : (
                      <p className="hapto-phase-content">
                        {section.data.durante.content}
                      </p>
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
                            <span className="hapto-emotion-icon">{section.data.despues.icons[idx]}</span>
                            <p className="hapto-emotion-text">{line}</p>
                          </div>
                        ))}
                      </div>
                    ) : section.isSolution ? (
                      <div className="hapto-phase-content">
                        {section.data.despues.content.split('\n').map((line: string, idx: number) => {
                          const colonIndex = line.indexOf(':');
                          if (colonIndex > 0) {
                            const beforeColon = line.substring(0, colonIndex);
                            const afterColon = line.substring(colonIndex);
                            if (beforeColon === beforeColon.toUpperCase()) {
                              return (
                                <p key={idx} style={{ marginBottom: '8px' }}>
                                  <span style={{ color: '#FF3E01', fontWeight: '700' }}>{beforeColon}</span>
                                  {afterColon}
                                </p>
                              );
                            }
                          }
                          // Texto entre comillas en cursiva
                          if (line.includes('"')) {
                            return (
                              <p key={idx} style={{ marginBottom: '12px', fontStyle: 'italic', color: '#6e6e73', fontSize: '15px' }}>
                                {line}
                              </p>
                            );
                          }
                          return <p key={idx} style={{ marginBottom: '8px' }}>{line}</p>;
                        })}
                      </div>
                    ) : (
                      <p className="hapto-phase-content">
                        {section.data.despues.content}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Metrics Footer */}
        <div className="hapto-map-footer">
          <h3 className="hapto-footer-title">
            Impacto de la Transformación Digital con INMERSION
          </h3>
          <div className="hapto-metrics-grid">
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">70%</div>
              <p className="hapto-metric-label">Reducción tiempo operativo</p>
            </div>
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">40%</div>
              <p className="hapto-metric-label">Aumento en conversión</p>
            </div>
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">85%</div>
              <p className="hapto-metric-label">Satisfacción del cliente</p>
            </div>
            <div className="hapto-metric-item">
              <div className="hapto-metric-value">300%</div>
              <p className="hapto-metric-label">ROI primer año</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDiscoveryMapV2;