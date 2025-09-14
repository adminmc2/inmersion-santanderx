import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Eye, 
  EyeOff, 
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Zap,
  TrendingUp
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  phases: {
    antes: string;
    durante: string;
    despues: string;
  };
}

const CustomerDiscoveryMap: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('fases');
  const [activePhase, setActivePhase] = useState<'antes' | 'durante' | 'despues'>('antes');

  const sections: Section[] = [
    {
      id: 'fases',
      title: 'Fases del Cliente',
      icon: <Users className="h-5 w-5" />,
      color: 'from-[#FF3E01] to-[#E8871E]',
      phases: {
        antes: 'Soy una academia con 1,000-3,000 estudiantes/año y necesito gestionar consultas de estudiantes individuales, grupos escolares con profesores, gestores educativos internacionales, mientras coordino familias anfitrionas y proveedores de actividades. Opero con WhatsApp, Excel y Gmail sin conexión entre sistemas.',
        durante: 'Coordino simultáneamente programas para 20-50 estudiantes, 2-3 grupos escolares con menores, reportando a 5-10 gestores activos, gestionando 15-30 familias y 10+ proveedores. Mi equipo dedica 10+ horas/semana solo a coordinación manual entre todos estos actores.',
        despues: 'Proceso certificados para estudiantes y escuelas, reportes para gestores, pagos a familias y proveedores, sin poder analizar datos integrados. Pierdo el 80% del valor post-programa por no tener sistema de seguimiento. El conocimiento se va cuando mi personal renuncia (cada 6 meses).'
      }
    },
    {
      id: 'contacto',
      title: 'Puntos de Contacto',
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'from-[#E8871E] to-[#EDB458]',
      phases: {
        antes: 'WhatsApp personal con estudiantes, email con escuelas, LinkedIn y ferias FEDELE con gestores, WhatsApp grupos con familias, email/teléfono con proveedores. Total: 12+ canales desconectados sin plataforma común.',
        durante: '5+ grupos WhatsApp activos con estudiantes, llamadas 24/7 de profesores por emergencias con menores, reports manuales sin dashboard para gestores, WhatsApp individual con cada familia por incidencias, confirmaciones diarias por teléfono con proveedores. Total: 70+ interacciones/día todas manuales.',
        despues: 'Email masivo para certificados estudiantes, PDF informes sin formato estándar para escuelas, facturación manual Excel para gestores, WhatsApp para liquidación pagos familias, email reconciliación facturas proveedores. Sin plataforma unificada de cierre y seguimiento.'
      }
    },
    {
      id: 'emociones',
      title: 'Emociones',
      icon: <Heart className="h-5 w-5" />,
      color: 'from-[#EDB458] to-[#FF3E01]',
      phases: {
        antes: '😰 Ansiedad: "Pierdo 25% de ventas por responder tarde". 😤 Frustración: "Gestores piden propuestas que tardo 3 días en crear". 😱 Pánico: "¿Puedo gestionar 30 menores de una escuela?". 😟 Preocupación: "¿Tendré familias apropiadas disponibles?".',
        durante: '😵 Sobrecarga: "Todo es urgente, todo al mismo tiempo". 😨 Terror: "Un menor perdido puede destruir mi reputación". 😩 Agotamiento: "Mi equipo renuncia por burnout cada 6 meses". 🤯 Caos: "5 crisis simultáneas con diferentes stakeholders".',
        despues: '😔 Resignación: "Sin datos para competir con academias grandes". 😞 Pérdida: "Escuelas importantes no repiten y no sé por qué". 😕 Impotencia: "Mis mejores familias migran a la competencia". 😐 Frustración: "No puedo demostrar ROI a inversores ni gestores".'
      }
    },
    {
      id: 'visibles',
      title: 'Acciones Visibles',
      icon: <Eye className="h-5 w-5" />,
      color: 'from-[#FF3E01] to-[#EDB458]',
      phases: {
        antes: 'Busco disponibilidad en 5 Excel diferentes, creo propuesta manual para gestor (4h trabajo), llamo a 10 familias una por una para confirmar, solicito cotizaciones a proveedores por email, respondo a estudiante 48h tarde. Pierdo el grupo escolar porque la competencia respondió en 24h.',
        durante: 'Envío 70+ WhatsApp/día entre todos los stakeholders, actualizo múltiples Excel sin sincronizar, gestiono crisis de menor enfermo coordinando con familia + padres en el extranjero + profesor + gestor, reorganizo actividades urgentemente con proveedores. Todo manual, todo reactivo, sin protocolos claros.',
        despues: 'Genero 30+ certificados uno por uno en Word, creo informe para escuela sin plantilla, calculo comisiones gestor con calculadora, proceso pagos familias manualmente uno por uno, reconcilio facturas proveedores en papel. Pido feedback por WhatsApp que nadie completa. Archivo todo en carpetas sin sistema.'
      }
    },
    {
      id: 'invisibles',
      title: 'Acciones Invisibles',
      icon: <EyeOff className="h-5 w-5" />,
      color: 'from-[#E8871E] to-[#FF3E01]',
      phases: {
        antes: 'Trabajo 24/7 respondiendo diferentes husos horarios. Verificación manual extra de familias para alojar menores. Negociaciones secretas con proveedores para obtener descuentos por volumen. Mantengo en mi memoria mental las preferencias de cada gestor. Recreo propuestas desde cero cada vez perdiendo 2-4 horas.',
        durante: 'Vigilancia no declarada de menores por seguridad sin protocolo formal. Mediación constante sin procedimientos entre stakeholders en conflicto. Reportes maquillados ocultando problemas reales a gestores. Compensaciones ocultas a estudiantes/profesores molestos desde caja chica. Base de datos crítica solo en la cabeza de cada empleado.',
        despues: 'Análisis intuitivo sin datos reales de rentabilidad por programa. Conocimiento valioso perdido cuando empleados clave renuncian. Oportunidades perdidas de venta cruzada y upselling. Relaciones valiosas con stakeholders que se desvanecen. Información crítica sobre preferencias y problemas no documentada.'
      }
    },
    {
      id: 'pains',
      title: 'Pains (Puntos de Dolor)',
      icon: <AlertCircle className="h-5 w-5" />,
      color: 'from-[#FF3E01] to-[#E8871E]',
      phases: {
        antes: '"Mientras atiendo crisis de un grupo escolar, pierdo 3 ventas de estudiantes individuales". "Gestores me comparan con academias que responden en minutos, yo tardo días". "Familias no saben su ocupación hasta último momento y se comprometen con otros". "No puedo dar precios a grupos grandes sin consultar todo manualmente".',
        durante: '"Un profesor me llama a las 11pm por emergencia, mientras respondo pierdo un lead de €50,000 de un gestor importante". "Familia amenaza con no recibir más estudiantes por un menor problemático que no sabíamos gestionar". "Sin protocolos claros, cada crisis es un caos total que desgasta al equipo". "Mi mejor empleada renunció llevándose todo el conocimiento de gestores clave".',
        despues: '"Escuela que traía 100 estudiantes/año no renovó y no tengo datos para entender por qué". "Competencia muestra dashboards profesionales en tiempo real, yo envío PDFs mal formateados". "Sin sistema de alumni, pierdo 100% del valor post-programa y referencias". "No puedo justificar subir precios sin métricas de valor añadido".'
      }
    }
  ];

  const phaseLabels = {
    antes: { label: 'ANTES', icon: <Clock className="h-4 w-4" /> },
    durante: { label: 'DURANTE', icon: <Zap className="h-4 w-4" /> },
    despues: { label: 'DESPUÉS', icon: <TrendingUp className="h-4 w-4" /> }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFEE2] via-white to-[#EDB458]/10 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Customer Discovery Map - INMERS<span className="bg-[#FF3E01] text-[#FFFEE2] px-2 py-1 rounded">ION</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Academia de Español gestionando 5 stakeholders simultáneamente
        </p>
        
        {/* Phase Selector */}
        <div className="flex gap-2 mt-6">
          {(Object.keys(phaseLabels) as Array<keyof typeof phaseLabels>).map((phase) => (
            <button
              key={phase}
              onClick={() => setActivePhase(phase)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activePhase === phase
                  ? 'bg-gradient-to-r from-[#FF3E01] to-[#E8871E] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {phaseLabels[phase].icon}
              {phaseLabels[phase].label}
            </button>
          ))}
        </div>
      </div>

      {/* Stakeholders Visual */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">5 STAKEHOLDERS SIMULTÁNEOS</h3>
          <div className="flex justify-around items-center">
            {['Estudiantes', 'Escuelas', 'Gestores', 'Familias', 'Proveedores'].map((stakeholder, index) => (
              <div key={stakeholder} className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                  index % 2 === 0 ? 'from-[#FF3E01] to-[#E8871E]' : 'from-[#E8871E] to-[#EDB458]'
                } flex items-center justify-center text-white font-bold text-xl mb-2`}>
                  {index + 1}
                </div>
                <p className="text-xs text-gray-600">{stakeholder}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className={`w-full p-6 flex items-center justify-between bg-gradient-to-r ${section.color} text-white`}
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              {expandedSection === section.id ? (
                <ChevronDown className="h-6 w-6" />
              ) : (
                <ChevronRight className="h-6 w-6" />
              )}
            </button>
            
            {expandedSection === section.id && (
              <div className="p-6 animate-fade-in">
                <div className="prose max-w-none">
                  <div className="bg-gradient-to-r from-[#FFFEE2] to-[#EBF5DF] rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {phaseLabels[activePhase].icon}
                      <h3 className="font-bold text-[#FF3E01]">
                        {phaseLabels[activePhase].label}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {section.phases[activePhase]}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Insights */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-[#FF3E01] to-[#E8871E] rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Insights Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">70+</div>
              <p className="text-[#FFFEE2]/90">Interacciones manuales por día</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <p className="text-[#FFFEE2]/90">Ventas perdidas por respuesta lenta</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="text-[#FFFEE2]/90">Valor post-programa perdido</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDiscoveryMap;