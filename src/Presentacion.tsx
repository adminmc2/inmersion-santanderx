import React, { useState, useEffect } from 'react';

// =======================================================================
// DIAPOSITIVA 1: APERTURA MEJORADA
// =======================================================================
const Diapositiva1 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  
  // Paleta de colores específica para esta diapositiva
  const slide1Colors = {
    darkTurquoise: '#1A5F7A',    // Turquesa oscuro
    aquamarine: '#20B2AA',       // Aguamarina
    coral: '#FF7F50',            // Coral cálido
    yellow: '#FFEB3B',           // Amarillo vibrante para contraste
    offWhite: '#F5FFFA',         // Fondo claro para contenedores
    textDark: '#1D3B4A'          // Color de texto oscuro
  };
  
  useEffect(() => {
    // Secuencia de animación
    setTimeout(() => setIsLoaded(true), 400);
    setTimeout(() => setTitleVisible(true), 800);
    setTimeout(() => setSubtitleVisible(true), 1600);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden relative" 
         style={{ 
           background: `linear-gradient(to bottom, #E0F7FA, #006064)`,
         }}>
      
      {/* Fondo oceánico con efecto de ondas más intenso */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Ola del océano principal - más grande y con mayor efecto */}
        <div className="absolute bottom-0 left-0 w-full h-120 ocean-wave-1"
             style={{ 
               background: `linear-gradient(to bottom, transparent, ${slide1Colors.darkTurquoise})`,
             }} />
             
        {/* Segunda capa de olas con diferente timing */}
        <div className="absolute bottom-0 left-0 w-full h-100 ocean-wave-2"
             style={{ 
               background: `linear-gradient(to bottom, transparent, ${slide1Colors.aquamarine})`,
             }} />

        {/* Elementos conceptuales mejorados: Libro/ola transformándose en datos digitales */}
        <div className={`absolute bottom-1/4 right-1/4 transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-90 translate-x-0' : 'opacity-0 translate-x-20'}`}
             dangerouslySetInnerHTML={{ __html: `
              <svg width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Ola-libro más grande y con más efecto -->
                <path d="M30 160C30 130 30 100 30 70C80 50 130 65 160 90C190 65 240 50 290 70C290 100 290 130 290 160C240 140 190 160 160 180C130 160 80 140 30 160Z" 
                      fill="white" 
                      opacity="0.25" />
                
                <!-- Efecto de ola dentro del libro -->
                <path d="M30 140C50 135 70 145 90 140C110 135 130 145 150 140C170 135 190 145 210 140C230 135 250 145 270 140C290 135 310 145 330 140" 
                      stroke="white" 
                      stroke-width="2" 
                      opacity="0.3">
                  <animate attributeName="d" 
                          values="M30 140C50 135 70 145 90 140C110 135 130 145 150 140C170 135 190 145 210 140C230 135 250 145 270 140C290 135 310 145 330 140;
                                  M30 140C50 145 70 135 90 140C110 145 130 135 150 140C170 145 190 135 210 140C230 145 250 135 270 140C290 145 310 135 330 140;
                                  M30 140C50 135 70 145 90 140C110 135 130 145 150 140C170 135 190 145 210 140C230 135 250 145 270 140C290 135 310 145 330 140" 
                          dur="8s" 
                          repeatCount="indefinite" />
                </path>
                
                <!-- Elementos de código más llamativos -->
                <!-- Código binario flotante -->
                <text x="70" y="100" fill="#FFEB3B" opacity="0.85" font-family="monospace" font-size="12">
                  <tspan x="70" y="100">01001001 01000001</tspan>
                  <tspan x="70" y="115">10101010 11100111</tspan>
                  <animate attributeName="opacity" values="0.85;0.4;0.85" dur="5s" repeatCount="indefinite" />
                </text>
                
                <!-- Símbolos de programación -->
                <text x="210" y="100" fill="#FF7F50" opacity="0.85" font-family="monospace" font-size="14" font-weight="bold">
                  <tspan x="210" y="100">{ }</tspan>
                  <tspan x="210" y="120">= ></tspan>
                  <tspan x="210" y="140">( )</tspan>
                  <animate attributeName="opacity" values="0.85;0.5;0.85" dur="4s" repeatCount="indefinite" />
                </text>
                
                <!-- Círculos de datos más grandes y llamativos -->
                <circle cx="180" cy="80" r="5" fill="#FFEB3B" opacity="0.9">
                  <animate attributeName="cy" from="80" to="40" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.9" to="0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="200" cy="90" r="4" fill="#FF7F50" opacity="0.85">
                  <animate attributeName="cy" from="90" to="35" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.85" to="0.2" dur="4s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="220" cy="75" r="4.5" fill="#FFEB3B" opacity="0.9">
                  <animate attributeName="cy" from="75" to="30" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.9" to="0.2" dur="3.5s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="190" cy="100" r="4" fill="#FF7F50" opacity="0.95">
                  <animate attributeName="cy" from="100" to="45" dur="4.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.95" to="0.25" dur="4.5s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="210" cy="85" r="3.5" fill="#FFEB3B" opacity="0.8">
                  <animate attributeName="cy" from="85" to="25" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.8" to="0.15" dur="5s" repeatCount="indefinite" />
                </circle>
                
                <!-- Líneas conectoras más llamativas -->
                <line x1="180" y1="70" x2="200" y2="80" stroke="#FFEB3B" stroke-width="1.2" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite" />
                </line>
                
                <line x1="200" y1="80" x2="220" y2="65" stroke="#FF7F50" stroke-width="1.2" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
                </line>
                
                <line x1="220" y1="65" x2="210" y2="75" stroke="#FFEB3B" stroke-width="1.2" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="5s" repeatCount="indefinite" />
                </line>
                
                <line x1="210" y1="75" x2="190" y2="90" stroke="#FF7F50" stroke-width="1.2" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4.5s" repeatCount="indefinite" />
                </line>
                
                <!-- Etiquetas de código -->
                <text x="150" y="60" fill="#20B2AA" opacity="0.9" font-family="monospace" font-size="10" font-weight="bold">
                  getData()
                  <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
                </text>
                
                <text x="240" y="55" fill="#20B2AA" opacity="0.9" font-family="monospace" font-size="10" font-weight="bold">
                  .transform()
                  <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3.5s" repeatCount="indefinite" />
                </text>
              </svg>
             `}} />
      </div>

      {/* Contenido principal */}
      <div className={`z-10 text-center transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        
        <h1 className={`text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-6 transition-all duration-1000 delay-500 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              color: '#ffffff', 
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 2px 10px rgba(0,0,0,0.3), 0 0 20px rgba(0,96,100,0.8)',
              letterSpacing: '2px'
            }}>
          SGEL ELE-IA
        </h1>
        
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 transition-all duration-1000 delay-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              color: '#FFEB3B', 
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 2px 4px rgba(0,0,0,0.4)'
            }}>
          Navegando hacia la transformación editorial
        </h2>
      </div>
      
      {/* Pie de página */}
      <div className={`absolute bottom-8 left-0 w-full text-center transition-all duration-1000 delay-1500 ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-sm text-white font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
          Madrid, 14 de mayo de 2025 | Armando Cruz Crespillo
        </div>
      </div>
      
      {/* Animaciones mejoradas de las olas */}
      <style>{`
        @keyframes wave1 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-15px) translateX(10px) scale(1.05); }
        }
        
        @keyframes wave2 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-20px) translateX(-10px) scale(1.03); }
        }
        
        .ocean-wave-1 {
          animation: wave1 10s infinite ease-in-out;
          opacity: 0.25;
          height: 120px;
        }
        
        .ocean-wave-2 {
          animation: wave2 14s infinite ease-in-out reverse;
          opacity: 0.2;
          height: 100px;
        }
      `}</style>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 1
// =======================================================================

// =======================================================================
// DIAPOSITIVA 2: ÍNDICE DE LA PRESENTACIÓN
// =======================================================================
const Diapositiva2 = () => {
  // Nueva paleta de colores proporcionada
  const slide2Colors = {
    color1: '#c0dbb5', // Verde claro
    color2: '#cacaa9', // Beige
    color3: '#28365b', // Azul oscuro
    color4: '#3f618a', // Azul medio
    color5: '#d6dce7'  // Gris azulado claro
  };

  // Estructura de los puntos de la presentación
  const presentationSections = [
    {
      id: 'intro',
      title: 'Introducción',
      items: [
        'El puente hacia el futuro',
        'Mapa de implementación IA en enseñanza de lenguas'
      ],
      slides: '3-4'
    },
    {
      id: 'current',
      title: 'Panorama actual',
      items: [
        'Houdini en el sector editorial',
        'Training Season: plataformas IA maduras',
        'Análisis comparativo por procesos',
        'Matriz de selección de herramientas'
      ],
      slides: '5-8'
    },
    {
      id: 'strategy',
      title: 'Estrategia de integración',
      items: [
        'Happy For You: SLM vs múltiples herramientas',
        'Reescribiendo la arquitectura: propuesta estratégica'
      ],
      slides: '9-10'
    },
    {
      id: 'lia',
      title: 'Proyecto LIA',
      items: [
        'Un millón de datos: estructura modular',
        'Estos somos nosotros: los agentes de LIA',
        'Cobrando vida: EVALIA y PsicodeLIA',
        'Arquitectos de la experiencia educativa'
      ],
      slides: '11-14'
    }
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center p-4 sm:p-6 md:p-8 bg-white" 
         style={{ 
           background: `linear-gradient(to bottom, ${slide2Colors.color5}, white)`,
         }}>
      {/* Título principal sin recuadro */}
      <div className="w-full text-center mb-8 mt-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4" 
            style={{ color: slide2Colors.color3, fontFamily: "'Montserrat', sans-serif" }}>
          Navegando hacia la transformación editorial
        </h2>
        
        <p className="text-xl sm:text-2xl italic" style={{ color: slide2Colors.color4 }}>
          Un recorrido por las posibilidades de la IA generativa para SGEL ELE
        </p>
      </div>
      
      {/* Grid de secciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-6xl">
        {presentationSections.map((section) => (
          <div key={section.id} className="bg-white p-5 sm:p-6 rounded-lg shadow-md border-l-4 h-full"
               style={{ borderLeftColor: section.id === 'intro' ? slide2Colors.color1 : 
                                        section.id === 'current' ? slide2Colors.color4 : 
                                        section.id === 'strategy' ? slide2Colors.color2 : 
                                        slide2Colors.color3 }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl sm:text-3xl font-semibold" 
                  style={{ color: section.id === 'intro' ? slide2Colors.color3 : 
                                 section.id === 'current' ? slide2Colors.color3 : 
                                 section.id === 'strategy' ? slide2Colors.color3 : 
                                 slide2Colors.color3 }}>
                {section.title}
              </h3>
              <span className="px-3 py-1.5 text-sm sm:text-base rounded-full" 
                    style={{ backgroundColor: section.id === 'intro' ? slide2Colors.color1 : 
                                            section.id === 'current' ? slide2Colors.color4 : 
                                            section.id === 'strategy' ? slide2Colors.color2 : 
                                            slide2Colors.color3,
                             color: section.id === 'intro' || section.id === 'strategy' ? slide2Colors.color3 : 'white' }}>
                Diap. {section.slides}
              </span>
            </div>
            
            <ul className="space-y-3">
              {section.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span 
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                    style={{ 
                      backgroundColor: section.id === 'intro' ? slide2Colors.color1 : 
                                      section.id === 'current' ? slide2Colors.color4 : 
                                      section.id === 'strategy' ? slide2Colors.color2 : 
                                      slide2Colors.color3,
                      color: section.id === 'intro' || section.id === 'strategy' ? slide2Colors.color3 : 'white' 
                    }}
                  >
                    <span className="text-sm sm:text-base font-bold">{index + 1}</span>
                  </span>
                  <span className="text-base sm:text-lg" style={{ color: slide2Colors.color3 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 2
// =======================================================================

// =======================================================================
// DIAPOSITIVA 3: EL PUENTE HACIA EL FUTURO (IA EN EDITORIAL)
// =======================================================================
// No se necesitan importaciones adicionales si React (useState, useEffect) ya está en el ámbito
// global del archivo Presentacion.tsx (asumiendo que tienes 'import React, {useState, useEffect} from 'react';' al inicio)

const Diapositiva3 = () => {
  // Paleta de colores específica para esta diapositiva
  const slide3Colors = {  // Cambiado de slide11Colors a slide3Colors
    navy: '#181D3B',
    royalBlue: '#3C4A79',
    gold: '#F6D98F',
    roseDust: '#CC979F',
    burgundy: '#833E5B',
    white: '#FFFFFF',
    background: '#F5F5F7'
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); 
  
  interface Obstacle {
    id: string;
    title: string;
    percentage: number;
    description: string;
    icon: React.ReactNode;  // Cambiado de JSX.Element a React.ReactNode
  }

  interface Opportunity {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;  // Cambiado de JSX.Element a React.ReactNode
  }

  const obstacles: Obstacle[] = [
    { id: 'regulation', title: 'Barreras regulatorias', percentage: 24, description: 'Incertidumbre sobre normativas y cumplimiento legal', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.burgundy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/> <path d="M12 8v4M12 16h.01"/> </svg> ) },
    { id: 'skills', title: 'Falta de habilidades', percentage: 23, description: 'Escasez de competencias técnicas en IA generativa', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.burgundy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/> <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/> <path d="M9 14h6M12 17v-6"/> </svg> ) },
    { id: 'data', title: 'Calidad de datos', percentage: 21, description: 'Baja confianza en los datos disponibles', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.burgundy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/> <path d="M8 10h.01M12 10h.01M16 10h.01"/> </svg> ) },
    { id: 'trust', title: 'Confianza', percentage: 63, description: 'Reducción de inversión en IA por falta de confianza', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.burgundy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M7 11V7a5 5 0 0 1 10 0v4"/> <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/> </svg> ) }
  ];
  
  const opportunities: Opportunity[] = [
    { id: 'personalization', title: 'Personalización de contenidos', description: 'Materiales adaptados a las necesidades específicas del alumno', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.royalBlue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/> <circle cx="9" cy="7" r="4"/> <path d="M23 21v-2a4 4 0 0 0-3-3.87"/> <path d="M16 3.13a4 4 0 0 1 0 7.75"/> </svg> ) },
    { id: 'content-creation', title: 'Creación ágil de contenidos', description: 'Generación asistida de textos, ejercicios y recursos didácticos', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.royalBlue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M12 19l7-7 3 3-7 7-3-3z"/> <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/> <path d="M2 2l7.586 7.586"/> <circle cx="11" cy="11" r="2"/> </svg> ) },
    { id: 'analytics', title: 'Análisis de rendimiento', description: 'Insights sobre la efectividad de los materiales educativos', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.royalBlue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M18 20V10M12 20V4M6 20v-6"/> </svg> ) },
    { id: 'automation', title: 'Automatización editorial', description: 'Optimización de flujos de trabajo en la producción editorial', icon: ( <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={slide3Colors.royalBlue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/> <line x1="3" y1="9" x2="21" y2="9"/> <line x1="9" y1="21" x2="9" y2="9"/> </svg> ) }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const sequence = [
        () => setCurrentStep(1),
        () => setCurrentStep(2),
        () => setCurrentStep(3)
      ];
      
      let timeouts: Array<ReturnType<typeof setTimeout>> = [];  // Cambiado de NodeJS.Timeout[]
      sequence.forEach((step, index) => {
        const timer = setTimeout(() => {
          step();
        }, 800 * (index + 1));
        timeouts.push(timer);
      });
      
      return () => timeouts.forEach(timer => clearTimeout(timer));
    }
  }, [isLoaded]);

  const cardOpacity = (index: number, totalSteps: number) => {
    if (!isLoaded) return 0;
    return currentStep >= Math.floor(index / (obstacles.length / totalSteps)) +1 || currentStep >= totalSteps ? 1 : 0;
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden" style={{ backgroundColor: slide3Colors.background }}>
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 relative overflow-y-auto flex flex-col h-full" style={{maxHeight: 'calc(100vh - 2rem)'}}>
        <div className="relative mb-4 md:mb-6 text-center flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2" style={{ fontFamily: "'Montserrat', sans-serif", color: slide3Colors.navy, textShadow: `1px 1px 0px ${slide3Colors.gold}` }}>
            El Puente Hacia el Futuro
          </h1>
          <p className="text-sm sm:text-base md:text-lg" style={{ color: slide3Colors.royalBlue }}>Navegando el camino hacia una editorial potenciada por IA</p>
        </div>

        <div className="w-full h-20 sm:h-24 md:h-28 relative mb-6 md:mb-8 lg:mb-12 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="xMidYMid meet">
            <rect x="0" y="80" width="800" height="20" fill={`${slide3Colors.roseDust}40`} />
            <path d="M0,80 L100,80 L100,100 L0,100 Z" fill={slide3Colors.gold} opacity="0.7" />
            <path d="M700,80 L800,80 L800,100 L700,100 Z" fill={slide3Colors.gold} opacity="0.7" />
            <rect x="120" y="50" width="15" height="50" fill={slide3Colors.navy} />
            <rect x="665" y="50" width="15" height="50" fill={slide3Colors.navy} />
            <defs>
              <linearGradient id="bridgeGradientSlide3" x1="0%" y1="0%" x2="100%" y2="0%">  {/* Cambiado id de bridgeGradientSlide11 a bridgeGradientSlide3 */}
                <stop offset="0%" stopColor={slide3Colors.burgundy} />
                <stop offset="50%" stopColor={slide3Colors.gold} />
                <stop offset="100%" stopColor={slide3Colors.royalBlue} />
              </linearGradient>
            </defs>
            <path d="M127,50 C300,-10 500,-10 673,50" stroke="url(#bridgeGradientSlide3)" strokeWidth="8" fill="none" />  {/* Actualizado el id del gradiente */}
            <line x1="127" y1="50" x2="400" y2="15" stroke={slide3Colors.roseDust} strokeWidth="2" />
            <line x1="673" y1="50" x2="400" y2="15" stroke={slide3Colors.roseDust} strokeWidth="2" />
            <path d="M127,40 C300,-20 500,-20 673,40" stroke={slide3Colors.navy} strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <path d="M127,58 C300,28 500,28 673,58" stroke={slide3Colors.navy} strokeWidth="1" strokeDasharray="3,3" fill="none" />
            <text x="60" y="70" fill={slide3Colors.burgundy} fontWeight="bold" fontSize="12" textAnchor="middle">RETOS</text>  {/* Eliminado sm:fontSize */}
            <text x="740" y="70" fill={slide3Colors.royalBlue} fontWeight="bold" fontSize="12" textAnchor="middle">OPORTUNIDADES</text>  {/* Eliminado sm:fontSize */}
          </svg>
        </div>
        
        <div className="flex-grow overflow-y-auto px-1">
          <div className="max-w-4xl mx-auto p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-lg border-2 mb-6 md:mb-10" 
              style={{ borderColor: slide3Colors.gold, background: `linear-gradient(135deg, ${slide3Colors.white}, ${slide3Colors.gold}10)`}}>
            <p className="text-base sm:text-lg md:text-xl text-center" style={{ color: slide3Colors.navy }}>
              A pesar de que el <span className="font-bold" style={{ color: slide3Colors.burgundy }}>27% de las empresas</span> han paralizado sus proyectos de IA, 
              el sector editorial tiene una <span className="font-bold" style={{ color: slide3Colors.royalBlue }}>oportunidad única</span> para 
              <span className="italic"> construir puentes hacia el futuro</span>, 
              equilibrando los desafíos tecnológicos con el potencial transformador de la IA generativa.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 justify-center">
            <div className="w-full md:w-5/12 lg:w-4/12">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 p-2 rounded-lg text-center" 
                  style={{ backgroundColor: slide3Colors.burgundy, color: slide3Colors.white, boxShadow: `0 4px 6px ${slide3Colors.burgundy}40`}}>
                Obstáculos Actuales
              </h2>
              <div className="space-y-3">
                {obstacles.map((obstacle, index) => (
                  <div 
                    key={obstacle.id} 
                    className="flex items-center bg-white rounded-lg shadow-md p-3 sm:p-4 transform transition-all hover:scale-105 duration-300"
                    style={{ 
                      borderLeft: `4px solid ${slide3Colors.burgundy}`,
                      background: `linear-gradient(135deg, ${slide3Colors.white}, ${slide3Colors.roseDust}10)`,
                      opacity: cardOpacity(index, 3)
                    }}
                  >
                    <div className="flex-shrink-0 mr-3 sm:mr-4">{obstacle.icon}</div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold sm:font-bold text-gray-800 text-sm sm:text-base md:text-lg">{obstacle.title}</h3>
                        <span className="text-sm sm:text-base md:text-lg font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg" 
                              style={{ backgroundColor: `${slide3Colors.burgundy}20`, color: slide3Colors.burgundy }}>
                          {obstacle.percentage}%
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm">{obstacle.description}</p>
                    </div>
                  </div>
                ))}
                <div className="text-xs text-right text-gray-500 italic mt-2">
                  *Según estudio de Qlik, 2025
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex md:w-1/12 lg:w-1/12 items-center justify-center relative">
              <div className="h-4/5 w-0.5 sm:w-1 bg-gradient-to-b from-burgundy via-gold to-royalBlue rounded-full"></div>
            </div>
            
            <div className="w-full md:w-5/12 lg:w-4/12">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 p-2 rounded-lg text-center" 
                  style={{ backgroundColor: slide3Colors.royalBlue, color: slide3Colors.white, boxShadow: `0 4px 6px ${slide3Colors.royalBlue}40`}}>
                Oportunidades Editoriales
              </h2>
              <div className="space-y-3">
                {opportunities.map((opportunity, index) => (
                  <div 
                    key={opportunity.id} 
                    className="flex items-center bg-white rounded-lg shadow-md p-3 sm:p-4 transform transition-all hover:scale-105 duration-300"
                    style={{ 
                      borderLeft: `4px solid ${slide3Colors.royalBlue}`,
                      background: `linear-gradient(135deg, ${slide3Colors.white}, ${slide3Colors.gold}10)`,
                      opacity: cardOpacity(index + obstacles.length, 3)
                    }}
                  >
                    <div className="flex-shrink-0 mr-3 sm:mr-4">{opportunity.icon}</div>
                    <div className="flex-grow">
                      <h3 className="font-semibold sm:font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-1">{opportunity.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{opportunity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 3
// =======================================================================

// =======================================================================
// DIAPOSITIVA 4: MAPA DE IMPLEMENTACIÓN IA EN ENSEÑANZA DE LENGUAS
// =======================================================================
const Diapositiva4 = () => {
  // Estado para la categoría seleccionada
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Paleta de colores local para esta diapositiva, unificada con Diapositiva 13
  const slide12Colors = {
    green: "#627D49",
    gold: "#C7954F",
    light: "#EAECF2", // Fondo principal de la diapositiva
    lavender: "#D2C8D8",
    purple: "#B780A2",
    white: "#FFFFFF", // Para fondos de tarjetas
    textSecondary: "#5A5A5A", // Un gris para texto secundario
  };
  
  // Categorías principales
  const categories = [
    {
      id: 'pedagogical',
      title: 'Consideraciones Pedagógicas',
      icon: '🎯',
      color: slide12Colors.green,
      factors: [
        { title: 'Alineación Curricular', importance: 'Alta' },
        { title: 'Personalización', importance: 'Alta' },
        { title: 'Validez Lingüística', importance: 'Crítica' },
        { title: 'Enfoque Pedagógico', importance: 'Media' },
        { title: 'Evaluación', importance: 'Alta' }
      ]
    },
    {
      id: 'technical',
      title: 'Aspectos Técnicos',
      icon: '⚙️',
      color: slide12Colors.purple,
      factors: [
        { title: 'Calidad del Modelo', importance: 'Crítica' },
        { title: 'Interoperabilidad', importance: 'Alta' },
        { title: 'Escalabilidad', importance: 'Media' },
        { title: 'Requisitos Infraestructura', importance: 'Media' },
        { title: 'Multimodalidad', importance: 'Alta' }
      ]
    },
    {
      id: 'data',
      title: 'Calidad de Datos',
      icon: '📊',
      color: slide12Colors.gold,
      factors: [
        { title: 'Metadatado Lingüístico', importance: 'Crítica' },
        { title: 'Metadatado Instruccional', importance: 'Crítica' },
        { title: 'Corpus Representativos', importance: 'Alta' },
        { title: 'Anotación Contextual', importance: 'Alta' },
        { title: 'Diversidad Dialectal', importance: 'Alta' }
      ]
    },
    {
      id: 'economic',
      title: 'Viabilidad Económica',
      icon: '💰',
      color: slide12Colors.green,
      factors: [
        { title: 'Modelo de Costos', importance: 'Alta' },
        { title: 'Recursos Humanos', importance: 'Alta' },
        { title: 'Ciclo de Desarrollo', importance: 'Media' },
        { title: 'Valor Agregado', importance: 'Alta' },
        { title: 'Sostenibilidad', importance: 'Media' }
      ]
    },
    {
      id: 'regulatory',
      title: 'Marco Regulatorio',
      icon: '⚖️',
      color: slide12Colors.purple,
      factors: [
        { title: 'Protección de Datos', importance: 'Crítica' },
        { title: 'Propiedad Intelectual', importance: 'Alta' },
        { title: 'Transparencia', importance: 'Alta' },
        { title: 'Requisitos Educativos', importance: 'Media' },
        { title: 'Ética Algorítmica', importance: 'Alta' }
      ]
    },
    {
      id: 'strategic',
      title: 'Encaje Estratégico',
      icon: '🧩',
      color: slide12Colors.gold,
      factors: [
        { title: 'Alineación con Misión', importance: 'Alta' },
        { title: 'Ventaja Competitiva', importance: 'Alta' },
        { title: 'Gestión del Cambio', importance: 'Media' },
        { title: 'Internacionalización', importance: 'Alta' },
        { title: 'Desarrollo Futuro', importance: 'Media' }
      ]
    }
  ];

  // Descripciones extensas para cada factor
  const descriptions: {[key: string]: string} = {
    'Alineación Curricular': 'Compatibilidad con estándares como MCER, ACTFL, CEFR y DELE para español. Verificar si la IA puede adaptarse a objetivos específicos del curriculum.',
    'Personalización': 'Capacidad de la IA para adaptar el contenido según nivel, L1 del estudiante, objetivos personales e intereses específicos.',
    'Validez Lingüística': 'Precisión del contenido generado, especialmente variaciones dialectales, registro apropiado y autenticidad cultural.',
    'Enfoque Pedagógico': 'Compatibilidad con diversas metodologías (comunicativa, accional, inmersión, etc.) y flexibilidad para implementar diferentes estrategias.',
    'Evaluación': 'Capacidades de retroalimentación formativa, evaluación adaptativa y seguimiento del progreso lingüístico por competencias.',
    'Calidad del Modelo': 'Verificar si el modelo de IA ha sido entrenado específicamente para lenguas o fine-tuned para el idioma objetivo. Evaluar precisión lingüística y cultural.',
    'Interoperabilidad': 'Integración con LMS existentes (Moodle, Canvas, etc.), herramientas de gestión editorial y otras plataformas corporativas.',
    'Escalabilidad': 'Capacidad para manejar incrementos en usuarios, contenidos y variedad de niveles/programas sin degradación de rendimiento.',
    'Requisitos Infraestructura': 'Análisis de necesidades de hardware, ancho de banda, almacenamiento y compatibilidad con dispositivos de usuarios finales.',
    'Multimodalidad': 'Capacidad para manejar texto, audio, imágenes y video, especialmente importante para comprensión y producción oral.',
    'Metadatado Lingüístico': 'Etiquetado preciso de recursos según nivel CEFR/MCER, competencias lingüísticas, variantes dialectales, y funciones comunicativas específicas.',
    'Metadatado Instruccional': 'Anotación detallada de objetivos pedagógicos, secuencias didácticas, estrategias de enseñanza, y patrones de progresión para diferentes estilos de aprendizaje y metodologías.',
    'Corpus Representativos': 'Disponibilidad de corpus lingüísticos amplios y diversos del idioma meta que incluyan habla natural, registros variados y contextos culturales auténticos.',
    'Anotación Contextual': 'Enriquecimiento de los datos con información contextual, pragmática y sociocultural que permita a la IA comprender matices del uso real del lenguaje.',
    'Diversidad Dialectal': 'Inclusión equilibrada de variantes regionales del idioma, evitando sesgos hacia dialectos dominantes y garantizando representatividad global.',
    'Modelo de Costos': 'Análisis de estructuras de precio (por usuario, por token, por volumen), costo total de propiedad y retorno de inversión esperado.',
    'Recursos Humanos': 'Necesidades de formación del personal, roles especializados requeridos (prompt engineers, revisores de contenido) y redistribución de tareas.',
    'Ciclo de Desarrollo': 'Tiempo de implementación, curva de aprendizaje organizacional y necesidades de adaptación continua del sistema.',
    'Valor Agregado': 'Evaluación de beneficios tangibles como reducción de tiempo de creación de contenidos, mejora en resultados de aprendizaje y diferenciación competitiva.',
    'Sostenibilidad': 'Viabilidad a largo plazo considerando actualizaciones, mantenimiento y evolución tecnológica.',
    'Protección de Datos': 'Cumplimiento con GDPR, COPPA, LOPD y otras regulaciones aplicables, especialmente para datos de estudiantes menores de edad.',
    'Propiedad Intelectual': 'Gestión de derechos de autor para material generado, contenido utilizado en entrenamiento y material derivado.',
    'Transparencia': 'Políticas claras sobre uso de IA, divulgación a usuarios y mecanismos para identificar contenido generado por IA vs. humano.',
    'Requisitos Educativos': 'Alineación con normativas educativas específicas del país/región y requisitos de certificación académica.',
    'Ética Algorítmica': 'Evaluación de sesgos lingüísticos/culturales, mecanismos para prevenirlos y protocolos para gestionar contenido potencialmente problemático.',
    'Alineación con Misión': 'Compatibilidad con valores educativos de la organización, filosofía pedagógica y objetivos estratégicos a largo plazo.',
    'Ventaja Competitiva': 'Análisis de soluciones IA de competidores, oportunidades de diferenciación y posicionamiento en el mercado educativo.',
    'Gestión del Cambio': 'Estrategias para adaptación organizacional, comunicación interna y externa, y formación de equipos.',
    'Internacionalización': 'Capacidad para adaptar soluciones a diferentes mercados, considerando variantes dialectales y contextos culturales diversos.',
    'Desarrollo Futuro': 'Alineación con tendencias educativas emergentes, tecnologías complementarias y evolución del mercado de enseñanza de lenguas.'
  };

  // Función para renderizar iconos con SVG como en la Diapositiva 13
  const renderIcon = (categoryId: string) => {
    switch(categoryId) {
      case 'pedagogical':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20V10"></path>
            <path d="M18 20V4"></path>
            <path d="M6 20v-4"></path>
          </svg>
        );
      case 'technical':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        );
      case 'data':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect>
            <line x1="10" y1="8" x2="10" y2="20"></line>
            <line x1="14" y1="8" x2="14" y2="20"></line>
            <path d="M4 4h16"></path>
            <path d="M9 4V2"></path>
            <path d="M15 4V2"></path>
          </svg>
        );
      case 'economic':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 'regulatory':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        );
      case 'strategic':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M7 12v5"></path>
            <path d="M11 6v11"></path>
            <path d="M15 10v7"></path>
            <path d="M19 5v13"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden" style={{ 
      backgroundColor: slide12Colors.light,
      overflow: 'hidden'
    }}>
      {/* Encabezado */}
      <div className="mb-6 md:mb-8 text-center flex-shrink-0">
        <h1 className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3" style={{ color: slide12Colors.green }}>
          Mapa de Implementación IA
        </h1>
        <h2 className="text-lg sm:text-xl font-light" style={{ color: slide12Colors.gold }}>
          Consideraciones clave para una integración exitosa
        </h2>
      </div>
      
      {/* Contenedor Principal con Scroll */}
      <div className="flex-grow overflow-y-auto pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-md"
              style={{ 
                borderLeft: `4px solid ${category.color}`,
                transform: activeCategory === category.id ? 'scale(1.02)' : 'scale(1)',
              }}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                  style={{ backgroundColor: `${category.color}20` }} // Versión translúcida del color
                >
                  <span style={{ color: category.color }}>
                    {renderIcon(category.id)}
                  </span>
                </div>
                <h3 className="text-xl font-light" style={{ color: category.color }}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3 text-sm">
                {category.factors.map((factor) => (
                  <div 
                    key={factor.title} 
                    className="flex items-center space-x-2"
                  >
                    <span 
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ 
                        backgroundColor: factor.importance === 'Crítica' ? slide12Colors.purple : 
                                      factor.importance === 'Alta' ? slide12Colors.gold : 
                                      slide12Colors.green
                      }}
                    ></span>
                    <span className="flex-grow text-sm" style={{ color: slide12Colors.textSecondary }}>
                      {factor.title}
                    </span>
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ 
                        backgroundColor: factor.importance === 'Crítica' ? `${slide12Colors.purple}20` : 
                                      factor.importance === 'Alta' ? `${slide12Colors.gold}20` : 
                                      `${slide12Colors.green}20`,
                        color: factor.importance === 'Crítica' ? slide12Colors.purple : 
                              factor.importance === 'Alta' ? slide12Colors.gold : 
                              slide12Colors.green
                      }}
                    >
                      {factor.importance}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Panel expandible con descripciones */}
              <div 
                className={`mt-4 pt-3 border-t overflow-hidden transition-all duration-300 ${activeCategory === category.id ? 'max-h-96' : 'max-h-0'}`} 
                style={{
                  borderColor: slide12Colors.light,
                  opacity: activeCategory === category.id ? 1 : 0
                }}
              >
                <h4 className="font-medium mb-3 text-sm" style={{ color: category.color }}>
                  Detalle de factores
                </h4>
                <div className="space-y-3">
                  {category.factors.map((factor) => (
                    <div key={factor.title} className="pb-2">
                      <p className="font-medium text-sm" style={{ color: slide12Colors.textSecondary }}>
                        {factor.title}:
                      </p>
                      <p className="text-xs" style={{ color: slide12Colors.textSecondary }}>
                        {descriptions[factor.title]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pie de página vacío (sin frase) */}
      <div className="mt-auto pt-6">
        {/* Espacio vacío para mantener la estructura, pero sin contenido */}
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 4
// =======================================================================
// =======================================================================
// DIAPOSITIVA 5: HOUDINI EN EL SECTOR EDITORIAL
// =======================================================================
const Diapositiva5 = () => {
  // Estado para la editorial seleccionada
  const [activePublisherId, setActivePublisherId] = useState(0);
  
  // Paleta de colores local para esta diapositiva, adaptada de diapositiva 1
  const slide3Colors = {
    darkTurquoise: '#1A5F7A',  // Turquesa oscuro
    aquamarine: '#20B2AA',     // Aguamarina
    coral: '#FF7F50',          // Coral cálido
    yellow: '#FFEB3B',         // Amarillo vibrante para contraste
    offWhite: '#F5FFFA',       // Fondo claro para contenedores
    textDark: '#1D3B4A',       // Color de texto oscuro
    white: '#FFFFFF',
    textLight: '#6B7280',
    cream: '#F5EFE0'
  };
  
  // Función para generar color según índice
  const getPublisherColor = (index: number) => {
    const colorOptions = [
      slide3Colors.darkTurquoise, 
      slide3Colors.aquamarine, 
      slide3Colors.coral, 
      slide3Colors.yellow, 
      '#5B7B65'  // Color adicional para variedad
    ];
    return colorOptions[index % colorOptions.length];
  };
  
  // Datos agrupados por editorial
  const publishers = [
    {
      id: 0,
      editorial: "Grupo Anaya",
      soluciones: [
        {
          proyecto: "iBook",
          aplicacion: "Generación y explotación de contenidos educativos con IA generativa",
          caracteristicas: "Copilotos para expertos, generación automática de contenidos, mejora continua, respeto a propiedad intelectual"
        },
        {
          proyecto: "EduDynamic",
          aplicacion: "Plataforma integral con materiales para asignaturas como IA, Programación y Robótica",
          caracteristicas: "Contenidos curriculares para nuevas materias, recursos para profesorado y alumnado"
        },
        {
          proyecto: "Tiimi_",
          aplicacion: "Desarrollo profesional docente con IA",
          caracteristicas: "Competencias personales y profesionales, aprendizaje por retos, acompañamiento con mentores"
        }
      ]
    },
    {
      id: 1,
      editorial: "Santillana",
      soluciones: [
        {
          proyecto: "Asistente Inteligente Santillana (AIS)",
          aplicacion: "Analítica avanzada y predicción del progreso académico",
          caracteristicas: "Indicadores inteligentes, alertas tempranas, personalización del aprendizaje, panel de control para docentes"
        }
      ]
    },
    {
      id: 2,
      editorial: "Edelvives",
      soluciones: [
        {
          proyecto: "Edelvives Time y 4IU",
          aplicacion: "Recomendador semántico, programación curricular asistida, tutores inteligentes",
          caracteristicas: "Personalización, retroalimentación inmediata, apoyo a estudiantes con necesidades especiales mediante PLN"
        }
      ]
    },
    {
      id: 3,
      editorial: "Vicens Vives",
      soluciones: [
        {
          proyecto: "Edubook ChatIA",
          aplicacion: "Chatbot educativo para creación de materiales ELE",
          caracteristicas: "Generación de actividades, gamificación, rúbricas adaptativas, personalización para aulas multiculturales"
        }
      ]
    },
    {
      id: 4,
      editorial: "Difusión",
      soluciones: [
        {
          proyecto: "Formación docente en IA generativa",
          aplicacion: "Webinars y talleres para docentes",
          caracteristicas: "Uso ético y creativo de IA, generación de materiales, integración de imágenes y modelos multilingües"
        }
      ]
    },
    {
      id: 5,
      editorial: "SM Formación",
      soluciones: [
        {
          proyecto: "Curso \"IA generativa en el aula\"",
          aplicacion: "Formación docente en aplicaciones pedagógicas de IA",
          caracteristicas: "Metodologías para entrenar modelos, detección de deepfakes, análisis crítico, seguridad en uso de IA"
        }
      ]
    },
    {
      id: 6,
      editorial: "Edinumen",
      soluciones: [
        {
          proyecto: "Evaluación personalizada según el currículo de escuela internacional",
          aplicacion: "Sistemas de evaluación en un LMS propio",
          caracteristicas: "generación de actividades de corte evaluativo"
        }
      ]
    },
    {
      id: 7,
      editorial: "Real Academia Española (RAE)",
      soluciones: [
        {
          proyecto: "Proyecto LEIA",
          aplicacion: "Normativización y buen uso del español en IA",
          caracteristicas: "Desarrollo de asistentes de voz, chatbots, procesadores de texto que respetan normas lingüísticas"
        }
      ]
    },
    {
      id: 8,
      editorial: "Editoriales Estados Unidos",
      soluciones: [
        {
          proyecto: "Vista Higher Learning - MyConversationTrainer",
          aplicacion: "Práctica conversacional en español con IA",
          caracteristicas: "Generación de actividades conversacionales, feedback instantáneo, integración curricular, métricas de progreso"
        },
        {
          proyecto: "Pearson - Smart Lesson Generator",
          aplicacion: "Creación automática de lecciones de español alineadas con el currículo",
          caracteristicas: "Genera ejercicios de gramática, vocabulario y comprensión lectora, alineado con estándares ACTFL, reducción de carga docente"
        },
        {
          proyecto: "McGraw-Hill - ALEKS (Adaptive Learning)",
          aplicacion: "Plataforma adaptativa para lenguas (incluyendo español)",
          caracteristicas: "Diagnóstico de conocimiento, rutas personalizadas, feedback automático, seguimiento de progreso"
        },
        {
          proyecto: "Houghton Mifflin Harcourt - Plataformas educativas",
          aplicacion: "Materiales para español como segunda lengua en K-12",
          caracteristicas: "Recursos digitales, integración curricular, aunque sin especificar IA avanzada en resultados recientes"
        }
      ]
    },
    {
      id: 9,
      editorial: "Tendencias Globales",
      soluciones: [
        {
          proyecto: "Global (McGraw-Hill, Pearson, Springer, etc.)",
          aplicacion: "Plataformas educativas con IA",
          caracteristicas: "Feedback instantáneo, gestión de información científica, recomendación de contenidos"
        },
        {
          proyecto: "Francia (Editoriales y sindicatos)",
          aplicacion: "Negociaciones y bloqueos de uso de datos IA",
          caracteristicas: "Demandas legales, acuerdos con tecnológicas, regulación del uso de obras protegidas"
        },
        {
          proyecto: "Reino Unido (Oxford, Cambridge, Wiley)",
          aplicacion: "Asistentes y plataformas educativas con IA",
          caracteristicas: "Alianzas con empresas IA, formación en uso ético, desarrollo de asistentes pedagógicos"
        }
      ]
    },
    {
      id: 10,
      editorial: "Soluciones No Editoriales",
      soluciones: [
        {
          proyecto: "Langua",
          aplicacion: "Contextualización de ejercicios ELE mediante IA",
          caracteristicas: "Costo: $200-$800/mes. Generación de ejercicios adaptados a niveles específicos, contenido cultural apropiado para regiones hispanohablantes."
        },
        {
          proyecto: "TalkPal",
          aplicacion: "Simulación de conversaciones con variaciones regionales",
          caracteristicas: "Práctica conversacional con diferentes acentos y modismos. Adaptación a contextos culturales diversos del mundo hispanohablante."
        }
      ]
    }
  ];
  
  // Editorial activa y sus soluciones
  const activePublisher = publishers.find(p => p.id === activePublisherId) || publishers[0];

  return (
    <div className="h-screen w-full flex flex-col" style={{ 
      backgroundColor: slide3Colors.offWhite,
      overflow: 'hidden'
    }}>
      {/* Encabezado */}
      <div className="px-8 pt-6 pb-4">
        <div className="rounded-lg shadow-md p-3 mb-3" style={{
          background: `linear-gradient(90deg, ${slide3Colors.darkTurquoise}, ${slide3Colors.aquamarine})`,
        }}>
          <h2 className="text-4xl font-bold text-white text-center drop-shadow-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Houdini en el Sector Editorial
          </h2>
        </div>
        <p className="text-xl text-center" style={{ color: slide3Colors.coral }}>
          Escapando de las limitaciones tradicionales
        </p>
      </div>
      
      {/* Contenido principal */}
      <div className="flex-1 px-6 pb-4 flex">
        {/* Panel izquierdo - Lista de editoriales */}
        <div className="w-1/4 pr-2 overflow-y-auto">
          <div className="space-y-1">
            {publishers.map((publisher, index) => (
              <button
                key={publisher.id}
                className="w-full p-3 text-left rounded-lg transition-all text-sm flex items-center shadow-sm"
                style={{ 
                  backgroundColor: activePublisherId === publisher.id ? getPublisherColor(index) : 'white',
                  color: activePublisherId === publisher.id ? 'white' : slide3Colors.textDark,
                  transform: activePublisherId === publisher.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => setActivePublisherId(publisher.id)}
              >
                {activePublisherId === publisher.id && (
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center mr-1 flex-shrink-0 text-sm"
                    style={{
                      backgroundColor: 'white',
                      color: getPublisherColor(index)
                    }}
                  >
                    {publisher.soluciones.length}
                  </div>
                )}
                <div className={`truncate font-medium ${activePublisherId === publisher.id ? "" : "ml-5"}`}>
                  {publisher.editorial}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Panel derecho - Información detallada */}
        <div className="w-3/4 pl-2">
          <div 
            className="h-full rounded-xl shadow-md p-4 flex flex-col bg-white"
            style={{ overflow: 'auto' }}
          >
            {/* Encabezado con nombre de editorial */}
            <div className="mb-3 border-b pb-2" style={{ borderColor: slide3Colors.cream }}>
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                  style={{ backgroundColor: slide3Colors.coral }}
                >
                  <span className="text-xl text-white">✦</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: slide3Colors.darkTurquoise, fontFamily: "'Montserrat', sans-serif" }}>
                    {activePublisher.editorial}
                  </h3>
                  <p className="text-sm" style={{ color: slide3Colors.textLight }}>
                    {activePublisher.soluciones.length} {activePublisher.soluciones.length === 1 ? 'solución' : 'soluciones'} con IA
                  </p>
                </div>
              </div>
            </div>
            
            {/* Lista de soluciones de la editorial */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {activePublisher.soluciones.map((solucion, index) => (
                <div key={index} 
                  className="border rounded-lg p-3" 
                  style={{ 
                    borderColor: slide3Colors.aquamarine, 
                    borderLeftWidth: '4px', 
                    borderLeftColor: getPublisherColor(activePublisherId)
                  }}
                >
                  <h4 className="text-base font-bold mb-2" style={{ color: slide3Colors.darkTurquoise }}>
                    {solucion.proyecto}
                  </h4>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Aplicación: </span>
                      <span className="text-gray-600">{solucion.aplicacion}</span>
                    </div>
                    
                    {solucion.caracteristicas && (
                      <div>
                        <span className="font-medium text-gray-700">Características: </span>
                        <span className="text-gray-600">{solucion.caracteristicas}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* El pie de página con la cita de Houdini ha sido eliminado */}
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 5
// =======================================================================

// =======================================================================
// DIAPOSITIVA 6: TRAINING SEASON - PLATAFORMAS IA MADURAS
// =======================================================================
const Diapositiva6 = () => {
  const [selectedCategory, setSelectedCategory] = useState('overview');
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);
  const [expandedPlatform, setExpandedPlatform] = useState<number | null>(null);
  
  // Paleta de colores optimizada para máxima legibilidad
  const slide6Colors = {
    bgLight: '#f2f3f5',        // Fondo principal muy claro
    cardBg: '#ffffff',         // Fondo de tarjetas blanco puro
    accent1: '#1a4789',        // Azul oscuro (basado en #37577e pero más oscuro para contraste)
    accent2: '#2e7ea5',        // Azul medio (basado en #55889f pero más contrastante)
    accent3: '#559977',        // Verde para destacados (reemplazo de #d0d5c1 para mejor legibilidad)
    highlight: '#ff5050',      // Color destaque para elementos importantes
    border: '#d0d5dd',         // Bordes sutiles
    white: '#ffffff',
    lightText: '#ffffff',      // Texto claro
    darkText: '#1f2937',       // Texto oscuro para máxima legibilidad
    categoryLight: '#f2f7ff',  // Fondo suave para categorías
    categoryHighlight: '#1a4789', // Color destacado para categoría seleccionada
    // Añadidos para solucionar errores
    lightBlue: '#d1e7f5',      // Azul claro para bordes y fondos
    mediumBlue: '#4a75a2',     // Azul medio para texto secundario
    darkBlue: '#1a4789',       // Azul oscuro para títulos y texto (igual a accent1)
    paleGreen: '#e1f5e9'       // Verde pálido para fondos y elementos secundarios
  };

  // Datos de las plataformas con información ampliada sobre contenido educativo y precios actualizados para España 2025
  const platforms = [
    { 
      id: 1, 
      name: "ChatGPT (OpenAI)", 
      description: "IA conversacional con capacidades generales", 
      category: "general",
      capabilities: {
        metadatos: "Generación de etiquetas, extracción de metadatos, clasificación por niveles. Categorización automática de contenidos educativos por temas y dificultad. Identificación y extracción de palabras clave de textos extensos.",
        contenido: "Generación de ejercicios, evaluaciones, materiales personalizados. Versatilidad multilingüe (40+ idiomas). Contenido personalizable por niveles.",
        marketing: "Generación de contenido promocional, materiales de formación"
      },
      educationalFeatures: "Versatilidad en la creación de ejercicios adaptados a cualquier metodología de enseñanza. Generación de actividades de comprensión, escritura y vocabulario contextualizado.",
      costs: "Gratuito, Plus: €23,80/mes, Pro: €200/mes, Team: €30/usuario/mes",
      rating: 4.2,
      successCase: "Automatización del etiquetado de recursos didácticos en varias editoriales educativas."
    },
    { 
      id: 2, 
      name: "Claude (Anthropic)", 
      description: "IA con enfoque en precisión y razonamiento", 
      category: "general",
      capabilities: {
        metadatos: "Análisis semántico profundo, categorización de contenido académico. Clasificación precisa de recursos por nivel de complejidad CEFR (A1-C2). Reconocimiento y organización de conceptos educativos jerárquicos.",
        contenido: "Contenido académico estructurado, modo Learning con enfoque socrático y alta precisión factual. Desarrollo de materiales que promueven el pensamiento crítico.",
        marketing: "Materiales formativos de alta calidad, modo Learning"
      },
      educationalFeatures: "Modo Learning especializado para educación. Precisión superior en explicaciones gramaticales con enfoque socrático. Excelente para creación de diálogos auténticos.",
      costs: "Gratuito, Pro: €18-20/mes, Team: €28/mes (€25 anual)",
      rating: 4.5,
      successCase: "Implementación en varias universidades para mejorar la organización y accesibilidad de recursos educativos."
    },
    { 
      id: 3, 
      name: "Microsoft Copilot", 
      description: "Asistente integrado en el ecosistema Microsoft", 
      category: "general",
      capabilities: {
        metadatos: "Gestión de metadatos en documentos Microsoft, integración con SharePoint",
        contenido: "Integración con Microsoft 365, personalización y colaboración en tiempo real. Creación de materiales didácticos con integración completa en Office.",
        marketing: "Integración con herramientas marketing Microsoft"
      },
      educationalFeatures: "Integración perfecta con Office 365 para la creación colaborativa de materiales. Capacidad de personalizar recursos educativos directamente en PowerPoint y Word.",
      costs: "Gratuito, Pro: €22/mes, Microsoft 365 Copilot: €31,50/mes",
      rating: 4.0,
      successCase: "Wichita Public Schools documentó ahorros de tiempo significativos y mejoras en aprendizaje personalizado para estudiantes ELE."
    },
    { 
      id: 4, 
      name: "Gemini (Google)", 
      description: "IA multimodal con integración en Google Workspace", 
      category: "general",
      capabilities: {
        metadatos: "Análisis multimodal, extracción de metadatos de texto e imágenes",
        contenido: "Contenido multimodal, integración con Google. Capacidades visuales potentes para recursos que combinan texto e imagen. Verificación de fuentes integrada.",
        marketing: "Marketing multimodal, integración Google Ads"
      },
      educationalFeatures: "Creación de materiales educativos visuales integrados con Google Workspace. Capacidad de analizar y crear contenido a partir de imágenes.",
      costs: "Gratuito, Advanced: €21,99/mes (incluye 2TB almacenamiento)",
      rating: 4.1,
      successCase: "Implementado en entornos educativos K-12 para crear materiales visuales interactivos para estudiantes de español."
    },
    { 
      id: 5, 
      name: "Mindsmith", 
      description: "Plataforma especializada en creación de materiales e-learning", 
      category: "educacion",
      capabilities: {
        metadatos: "Metadatado específico para e-learning, objetivos de aprendizaje",
        contenido: "Creación de e-learning interactivo con evaluaciones adaptativas. Especialización en contenidos educativos estructurados. Desarrollo de cursos completos con ramificaciones según respuestas.",
        marketing: "Desarrollo de programas formativos estructurados"
      },
      educationalFeatures: "Plataforma cloud con editor visual. Arquitectura orientada a microaprendizaje y secuencias adaptativas. Soporte para 30+ idiomas incluidas variantes de español.",
      costs: "Gratuito (450 créditos), Pro: €39/mes o €31,20/mes anual, Business: €60/mes anual",
      rating: 3.9,
      successCase: "Utilizado por 500+ organizaciones educativas reportando un aumento de 12x en eficiencia de creación de contenido comparado con métodos tradicionales."
    },
    { 
      id: 6, 
      name: "LearnExperts (LEAi)", 
      description: "IA para diseño instruccional y transformación de contenido", 
      category: "educacion",
      capabilities: {
        metadatos: "Metadatos basados en diseño instruccional",
        contenido: "Transformación de contenido experto en material didáctico. Optimización para objetivos de aprendizaje específicos. Enfoque en formación corporativa y educación superior.",
        marketing: "Transformación de conocimiento experto en formación"
      },
      educationalFeatures: "Especialización en la transformación de conocimiento técnico complejo en materiales didácticos accesibles. Enfoque en diseño instruccional basado en evidencia.",
      costs: "Plan Intro (básico), Starter, Premium, Enterprise (personalizado)",
      rating: 3.8,
      successCase: "Reducción del 45% en tiempo de desarrollo de materiales para programas de educación superior en español."
    },
    { 
      id: 7, 
      name: "Publishing.ai", 
      description: "Plataforma de IA para publicación de libros", 
      category: "editorial",
      capabilities: {
        metadatos: "Metadatado para flujos editoriales",
        contenido: "Generación de contenido editorial a escala. Alineación con estándares curriculares internacionales. Edición y revisión automatizada con control humano.",
        marketing: "Generación de contenido específico para marketing editorial"
      },
      educationalFeatures: "Especialización en la creación de materiales educativos a escala con consistencia editorial. Capacidad de mantener coherencia estilística en grandes proyectos.",
      costs: "Lite: Gratuito, Pro: Generaciones ilimitadas, Platinum: €9.800",
      rating: 3.7,
      successCase: "Producción de serie completa de materiales ELE con reducción del 35% en tiempo editorial."
    },
    { 
      id: 8, 
      name: "MagicSchool", 
      description: "Herramientas de IA específicas para educación", 
      category: "educacion",
      capabilities: {
        metadatos: "Etiquetado educativo para materiales K-12",
        contenido: "80+ herramientas específicas para educación. Diseñado por y para educadores. Enfocado principalmente en K-12 con adaptaciones para diferentes niveles.",
        marketing: "Herramientas para desarrollo profesional docente"
      },
      educationalFeatures: "Suite completa de herramientas diseñadas específicamente para educación primaria y secundaria. Fuerte componente de gamificación y aprendizaje experiencial.",
      costs: "Gratuito, Plus: €99,96/año (€8,33/mes), Enterprise: personalizado",
      rating: 4.3,
      successCase: "Aurora Public Schools reportó una mejora del 28% en estudiantes que alcanzan expectativas de alfabetización en programas bilingües."
    },
    { 
      id: 9, 
      name: "n8n", 
      description: "Plataforma de automatización de flujos de trabajo", 
      category: "workflow",
      capabilities: {
        metadatos: "Automatización personalizable de flujos de metadatos",
        contenido: "Automatización de flujos de creación de contenido. Integración flexible con múltiples fuentes de datos educativos. Conexión con APIs de plataformas educativas.",
        marketing: "Automatización de campañas y flujos de trabajo"
      },
      educationalFeatures: "Automatización de procesos de creación y distribución de contenido educativo. Capacidad de conectar múltiples herramientas pedagógicas en flujos de trabajo coherentes.",
      costs: "Starter: €20/mes, Pro: €50/mes, Autoalojado: Gratuito (€5-10/mes servidor)",
      rating: 4.0,
      successCase: "Automatización de flujos de trabajo para generación de contenido ELE, integrando ChatGPT para materiales a partir de ideas temáticas."
    },
    { 
      id: 10, 
      name: "Smartly.ai", 
      description: "IA para marketing y automatización de contenido", 
      category: "marketing",
      capabilities: {
        metadatos: "Metadatado para contenido de marketing",
        contenido: "Creación de contenido visual y marketing con personalización a escala. Adaptación de materiales educativos para diferentes audiencias y canales.",
        marketing: "Marketing personalizado multicanal"
      },
      educationalFeatures: "Personalización de contenido educativo para diferentes segmentos de audiencia. Capacidad de adaptar mensajes y materiales según perfiles demográficos.",
      costs: "Desde €199/mes, prueba gratuita disponible",
      rating: 3.9,
      successCase: "Aumento del 50% en efectividad de campañas de marketing para programas educativos de español online."
    },
    { 
      id: 11, 
      name: "IGNITE Copilot", 
      description: "Solución especializada para contenido educativo digital", 
      category: "educacion",
      capabilities: {
        metadatos: "Clasificación curricular alineada con estándares educativos internacionales",
        contenido: "Generación de situaciones de aprendizaje interdisciplinares con indicadores ODS. Creación de proyectos curriculares completos. Sesiones individuales con objetivos, actividades y evaluaciones.",
        marketing: "Integración con marcos de evaluación competencial personalizados para diferentes materias"
      },
      educationalFeatures: "Plataforma SaaS especializada para educación. Integración con LMS principales (Moodle, Canvas). Exportación en múltiples formatos (PDF, DOCX, HTML, SCORM).",
      costs: "Gratuito, Plus: €12/mes o €144/año, Enterprise: desde €72/usuario/año",
      rating: 4.4,
      successCase: "Una editorial española redujo el tiempo de creación de unidades didácticas en un 60%, manteniendo alta calidad pedagógica y cumplimiento con estándares curriculares."
    },
    { 
      id: 12, 
      name: "Megaprofe", 
      description: "Primera plataforma española especializada en educación con IA", 
      category: "educacion",
      capabilities: {
        metadatos: "Etiquetado alineado con LOMLOE y currículos internacionales",
        contenido: "Generadores de contenido alineados con normativas educativas españolas. Chatbots educativos para interacción en español personalizada. Recursos interactivos como simulaciones y mapas mentales en español.",
        marketing: "Herramientas de promoción educativa específicas para el mercado hispano"
      },
      educationalFeatures: "Tecnología basada en modelos de lenguaje específicos para español educativo. Interfaz intuitiva diseñada para educadores. Personalización por niveles MCER (A1-C2).",
      costs: "Gratuito (300 Megacoins/mes), Basic, Plus+ (ilimitado), School (personalizado)",
      rating: 4.2,
      successCase: "La implementación en una academia de idiomas española permitió la creación de materiales personalizados por nacionalidad del estudiante, resultando en un 40% más de retención y satisfacción."
    },
    { 
      id: 13, 
      name: "Amazon Rekognition", 
      description: "Etiquetado inteligente de contenido visual para materiales educativos", 
      category: "metadatos",
      capabilities: {
        metadatos: "Detección automática de objetos y elementos en imágenes y videos. Reconocimiento de elementos culturales hispánicos.",
        contenido: "Categorización automática de recursos visuales educativos por temas, conceptos o elementos culturales.",
        marketing: "Clasificación de imágenes por relevancia para diferentes mercados hispanohablantes."
      },
      educationalFeatures: "Reconocimiento preciso (92%) de objetos culturalmente relevantes para ELE. Categorización de recursos visuales por nivel educativo y pertinencia cultural.",
      costs: "Gratuito 1.000 imágenes/mes (12 meses), luego pago por uso",
      rating: 4.1,
      successCase: "Una editorial educativa catalogó 50,000 imágenes de su banco de recursos, reduciendo el tiempo de etiquetado en un 85% y mejorando la precisión de búsqueda en un 70%."
    },
    { 
      id: 14, 
      name: "Clarifai AI", 
      description: "Etiquetado automatizado de imágenes con taxonomías personalizadas", 
      category: "metadatos",
      capabilities: {
        metadatos: "Etiquetado automático de imágenes desde cuadro de diálogo de importación. Creación de taxonomías personalizadas.",
        contenido: "Búsqueda de imágenes visualmente similares para contenido educativo. Reconocimiento de conceptos culturales específicos.",
        marketing: "Categorización visual para campañas específicas por región."
      },
      educationalFeatures: "Creación de taxonomías personalizadas para recursos educativos ELE. Búsqueda semántica avanzada para términos culturales específicos.",
      costs: "Community: Gratuito, Essential: €27,50/mes, Professional: €275/mes",
      rating: 4.0,
      successCase: "Editorial Difusión implementó Clarifai para su banco de imágenes ELE, reduciendo tiempo de catalogación en un 70%."
    },
    { 
      id: 15, 
      name: "BETO (Spanish BERT)", 
      description: "Modelo de lenguaje específico para español con variantes dialectales", 
      category: "educacion",
      capabilities: {
        metadatos: "Clasificación de textos por nivel CEFR (A1-C2) y competencias específicas.",
        contenido: "Análisis de densidad léxica y complejidad gramatical. Generación de contenido adaptado a variantes dialectales.",
        marketing: "Adaptación de mensajes para diferentes regiones hispanohablantes."
      },
      educationalFeatures: "Procesamiento avanzado de texto específico para español con alta precisión en variantes dialectales. Análisis de dificultad textual específico para aprendices.",
      costs: "API: €0,001/1000 tokens aproximadamente",
      rating: 4.3,
      successCase: "El Instituto Cervantes clasificó 15,000 recursos didácticos con 89% de precisión morfosintáctica."
    },
    { 
      id: 16, 
      name: "Reactored AI-La", 
      description: "Generación de ejercicios contextualizados para enseñanza de lenguas", 
      category: "educacion",
      capabilities: {
        metadatos: "Etiquetado automático según planes curriculares de enseñanza de idiomas.",
        contenido: "Creación de actividades basadas en análisis de errores frecuentes según lengua materna. Contextualización cultural específica.",
        marketing: "Materiales promocionales adaptados a diferentes mercados."
      },
      educationalFeatures: "Transformers multilingües para generación de ejercicios adaptados a la lengua materna del estudiante. Análisis de errores frecuentes por transferencia lingüística.",
      costs: "Lite: €20/mes, Lite+: €30/mes (40 lecciones), Lite++: €40/mes (60 lecciones)",
      rating: 4.2,
      successCase: "Pruebas con 200 estudiantes mostraron mejora del 40% en retención léxica comparado con métodos tradicionales."
    },
    { 
      id: 22, 
      name: "Langua", 
      description: "IA especializada para contextualización de ejercicios ELE", 
      category: "educacion",
      capabilities: {
        metadatos: "Etiquetado específico por niveles MCER y competencias comunicativas.",
        contenido: "Generación de ejercicios adaptados a niveles específicos. Contenido cultural apropiado para regiones hispanohablantes.",
        marketing: "Adaptación de materiales promocionales por región."
      },
      educationalFeatures: "Generación de ejercicios contextualizados por región hispanohablante. Control preciso de vocabulario por nivel. Adaptación a contextos culturales específicos.",
      costs: "Gratuito (prueba), Communicate: €95/año, Unlimited: €210/año aprox.",
      rating: 4.3,
      successCase: "Editorial especializada en ELE reporta reducción del 60% en tiempo de creación de materiales niveles A1-B1."
    },
    { 
      id: 23, 
      name: "TalkPal", 
      description: "Simulación de conversaciones con variaciones regionales del español", 
      category: "educacion",
      capabilities: {
        metadatos: "Etiquetado por variante dialectal y registro.",
        contenido: "Generación de diálogos con diferentes acentos y modismos. Práctica conversacional adaptativa.",
        marketing: "Materiales demostrativos para diferentes mercados."
      },
      educationalFeatures: "Simulación de conversaciones con diferentes acentos y variantes dialectales. Adaptación a contextos culturales diversos del mundo hispanohablante.",
      costs: "Basic: Gratuito, Premium: €9,99/mes o €59,88/año (€4,99/mes)",
      rating: 4.1,
      successCase: "Estudiantes que usaron la plataforma mejoraron un 32% en comprensión de variantes dialectales frente al grupo control."
    },
    { 
      id: 24, 
      name: "ClickUp AI", 
      description: "Gestión de proyectos editoriales educativos", 
      category: "workflow",
      capabilities: {
        metadatos: "Automatización de tareas de etiquetado y catalogación.",
        contenido: "Asignación automática de tareas. Predicción de riesgos en calendarios editoriales.",
        marketing: "Generación de informes de progreso con visualizaciones interactivas."
      },
      educationalFeatures: "Plantillas específicas para flujos de trabajo editoriales educativos. Automatización de tareas repetitivas específicas para generación de contenido ELE.",
      costs: "Complemento AI: €6,40/usuario/mes adicional a planes desde €0 hasta €12/usuario/mes",
      rating: 3.9,
      successCase: "En Edelsa, redujo un 40% los retrasos en producción de manuales de español."
    },
    { 
      id: 25, 
      name: "ContentShake AI", 
      description: "Creación de contenido optimizado para SEO en diferentes idiomas", 
      category: "marketing",
      capabilities: {
        metadatos: "Generación de metadatos optimizados para SEO.",
        contenido: "Generación de artículos optimizados para SEO con imágenes. Personalización de tono y voz de marca.",
        marketing: "Optimización de contenido para diferentes mercados y audiencias."
      },
      educationalFeatures: "Creación de contenido educativo optimizado para buscadores en español y otros idiomas. Adaptación a terminología específica del sector educativo.",
      costs: "€55/mes aprox., 5 artículos optimizados/mes, prueba gratuita 7 días",
      rating: 4.0,
      successCase: "Una editorial educativa aumentó un 35% su tráfico orgánico en 3 meses tras implementar la estrategia de contenidos generada con esta herramienta."
    },
    { 
      id: 26, 
      name: "Canva con IA", 
      description: "Diseño con inteligencia artificial para materiales educativos", 
      category: "marketing",
      capabilities: {
        metadatos: "Etiquetado automático de diseños y recursos visuales.",
        contenido: "Magic Write para generación de textos. Diseño automático con Magic Design. Creación de presentaciones y recursos visuales.",
        marketing: "Creación de materiales promocionales, banners, infografías y contenido para redes sociales."
      },
      educationalFeatures: "Diseño rápido de materiales didácticos visuales. Creación de presentaciones educativas. Adaptación de materiales a diferentes formatos y plataformas.",
      costs: "Gratuito, Pro: €15/mes o €120/año, Teams: desde €10/usuario/mes",
      rating: 4.3,
      successCase: "Una editorial de materiales ELE redujo sus costes de diseño en un 60% y aumentó un 40% su engagement en redes sociales."
    },
    { 
      id: 27, 
      name: "Edubook ChatIA", 
      description: "Chatbot educativo para creación de materiales didácticos", 
      category: "educacion",
      capabilities: {
        metadatos: "Etiquetado automático de recursos generados.",
        contenido: "Generación de actividades, gamificación, rúbricas adaptativas.",
        marketing: "Personalización para aulas multiculturales y necesidades específicas."
      },
      educationalFeatures: "Generación instantánea de actividades contextualizadas. Adaptación a aulas multiculturales con estudiantes de diversas procedencias. Creación de rúbricas de evaluación personalizadas.",
      costs: "Incluido con suscripciones Edubook",
      rating: 3.9,
      successCase: "Profesores reportan ahorro de 5 horas semanales en preparación de materiales para clases."
    }
  ];

  // Categorías de plataformas para agruparlas
  const platformCategories = [
    { id: 'general', name: 'IA General', description: 'Plataformas de IA con capacidades amplias adaptables a múltiples contextos' },
    { id: 'educacion', name: 'Educación', description: 'Especializadas en creación de materiales educativos' },
    { id: 'editorial', name: 'Editoriales', description: 'Enfocadas en procesos editoriales y publicación' },
    { id: 'workflow', name: 'Flujos de trabajo', description: 'Gestión y automatización de procesos' },
    { id: 'marketing', name: 'Marketing', description: 'Promoción y difusión de contenidos educativos' },
    { id: 'metadatos', name: 'Metadatos', description: 'Especialistas en etiquetado y catalogación de contenidos' }
  ];

  // Categorías de comparación
  const categories = [
    { id: 'overview', name: 'Vista general' },
    { id: 'metadatos', name: 'Capacidades de metadatado' },
    { id: 'contenido', name: 'Creación de contenido' },
    { id: 'marketing', name: 'Marketing y formación' },
    { id: 'costos', name: 'Lista de precios' }
  ];

  const toggleExpandPlatform = (index: number) => {
    if (expandedPlatform === index) {
      setExpandedPlatform(null);
    } else {
      setExpandedPlatform(index);
    }
  };

  // Renderiza el contenido según la categoría seleccionada
  const renderCategoryContent = () => {
    switch(selectedCategory) {
      case 'overview':
        // Lista de todas las plataformas específicas que aparecen en las otras secciones
        const allSpecificPlatforms = [
          // Metadatos
          "Amazon Rekognition", 
          "Clarifai AI", 
          "ChatGPT (OpenAI)", 
          "Claude (Anthropic)", 
          "Microsoft Copilot", 
          "Gemini (Google)", 
          "n8n", 
          "Publishing.ai",
          
          // Creación de contenido (excluyendo repetidos)
          "Mindsmith", 
          "LearnExperts (LEAi)", 
          "MagicSchool", 
          "IGNITE Copilot", 
          "Megaprofe", 
          "Reactored AI-La", 
          "Langua", 
          "TalkPal", 
          "Edubook ChatIA",
          
          // Marketing (excluyendo repetidos)
          "Canva con IA",
          "ContentShake AI",
          "Smartly.ai"
        ];
        
        // Filtrar solo las plataformas que queremos mostrar
        const filteredPlatforms = platforms.filter(p => 
          allSpecificPlatforms.includes(p.name)
        );
        
        return (
          <div className="space-y-6">
            {platformCategories.map(category => {
              const categoryPlatforms = filteredPlatforms.filter(p => p.category === category.id);
              if (categoryPlatforms.length === 0) return null;
              
              return (
                <div key={category.id} className="mb-4">
                  <div className="mb-2 pb-1 border-b-2" style={{ borderColor: slide6Colors.accent1 }}>
                    <h3 className="text-lg font-bold" style={{ color: slide6Colors.accent1 }}>{category.name}</h3>
                    <p className="text-sm" style={{ color: slide6Colors.accent2 }}>{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categoryPlatforms.map((platform) => (
                      <div 
                        key={platform.id}
                        className="p-4 rounded-lg shadow-sm transition-all duration-300 transform cursor-pointer h-full flex flex-col"
                        style={{ 
                          backgroundColor: slide6Colors.cardBg,
                          borderLeft: `4px solid ${slide6Colors.accent2}`,
                          border: `1px solid ${slide6Colors.border}`,
                          transform: hoveredPlatform === platform.id ? 'scale(1.02)' : 'scale(1)'
                        }}
                        onMouseEnter={() => setHoveredPlatform(platform.id)}
                        onMouseLeave={() => setHoveredPlatform(null)}
                        onClick={() => toggleExpandPlatform(platform.id)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-bold line-clamp-1" style={{ color: slide6Colors.accent1 }}>{platform.name}</h3>
                          <span className="text-xs px-2 py-1 rounded-full text-center flex-shrink-0 font-semibold" 
                            style={{ 
                              backgroundColor: slide6Colors.accent3, 
                              color: slide6Colors.white 
                            }}>
                            {platform.rating} ★
                          </span>
                        </div>
                        <p className="text-sm mb-3 line-clamp-2" style={{ color: slide6Colors.darkText }}>{platform.description}</p>
                        
                        <div className="flex-grow flex flex-col justify-between">
                          <div className="text-xs mb-2 mt-auto" style={{ color: slide6Colors.darkText }}>
                            <span className="font-semibold">Coste: </span> 
                            {platform.costs}
                          </div>
                          
                          {/* Panel expandible con aplicación ELE */}
                          <div 
                            className={`mt-1 overflow-hidden transition-all duration-300 ${expandedPlatform === platform.id ? 'max-h-24' : 'max-h-0'}`} 
                            style={{opacity: expandedPlatform === platform.id ? 1 : 0}}
                          >
                            <div className="pt-1 border-t" style={{ borderColor: slide6Colors.lightBlue }}>
                              <p className="text-xs" style={{ color: slide6Colors.mediumBlue }}>
                                <span className="font-semibold">Aplicación ELE: </span> 
                                {platform.educationalFeatures}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      case 'metadatos':
        // Lista específica de plataformas de metadatos para mostrar
        const specificMetadataPlatforms = [
          "Amazon Rekognition", 
          "Clarifai AI", 
          "ChatGPT (OpenAI)", 
          "Claude (Anthropic)", 
          "Microsoft Copilot", 
          "Gemini (Google)", 
          "n8n", 
          "Publishing.ai"
        ];
        
        // Filtrar plataformas específicas
        const metadataSpecialists = platforms.filter(p => 
          specificMetadataPlatforms.includes(p.name)
        );
        
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              {metadataSpecialists.map((platform) => (
                <div 
                  key={platform.id}
                  className="p-4 rounded-lg shadow-sm flex items-start bg-white mb-3 border"
                  style={{ borderColor: slide6Colors.border }}
                >
                  <div className="flex-shrink-0 w-1/4 pr-4 border-r" style={{ borderColor: slide6Colors.border }}>
                    <div className="flex justify-between items-start">
                      <h3 className="text-base font-bold" style={{ color: slide6Colors.accent1 }}>{platform.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full font-semibold" 
                        style={{ 
                          backgroundColor: slide6Colors.accent3, 
                          color: slide6Colors.white 
                        }}>
                        {platform.rating}★
                      </span>
                    </div>
                    <p className="text-sm mt-2 font-medium" style={{ color: slide6Colors.accent2 }}>{platform.costs}</p>
                  </div>
                  <div className="flex-grow pl-4">
                    <p className="text-base mb-3" style={{ color: slide6Colors.darkText, lineHeight: "1.5" }}>
                      {platform.capabilities.metadatos}
                    </p>
                    
                    {/* Aplicación ELE donde antes estaba caso de éxito */}
                    <div className="mt-3 pt-3 border-t" style={{ borderColor: slide6Colors.border }}>
                      <p className="text-sm" style={{ color: slide6Colors.darkText }}>
                        <span className="font-bold" style={{ color: slide6Colors.accent1 }}>Aplicación ELE:</span> {platform.educationalFeatures}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'contenido':
        // Lista específica de plataformas de creación de contenido para mostrar
        const specificContentPlatforms = [
          "Mindsmith", 
          "LearnExperts (LEAi)", 
          "Publishing.ai", 
          "MagicSchool", 
          "IGNITE Copilot", 
          "Megaprofe", 
          "Reactored AI-La", 
          "Langua", 
          "TalkPal", 
          "Edubook ChatIA", 
          "ChatGPT (OpenAI)", 
          "Claude (Anthropic)", 
          "Microsoft Copilot", 
          "Gemini (Google)"
        ];
        
        // Filtrar plataformas específicas
        const contentCreators = platforms.filter(p => 
          specificContentPlatforms.includes(p.name)
        );
        
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              {contentCreators.map((platform) => (
                <div 
                  key={platform.id}
                  className="p-3 rounded-lg shadow-md flex items-start bg-white"
                >
                  <div className="flex-shrink-0 w-1/4 pr-3 border-r" style={{ borderColor: slide6Colors.lightBlue }}>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold" style={{ color: slide6Colors.darkBlue }}>{platform.name}</h3>
                      <span className="text-xs px-1 rounded-full" style={{ backgroundColor: slide6Colors.paleGreen, color: slide6Colors.darkBlue }}>
                        {platform.rating}★
                      </span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: slide6Colors.mediumBlue }}>{platform.costs}</p>
                  </div>
                  <div className="flex-grow pl-3">
                    <p className="text-sm mb-2" style={{ color: slide6Colors.darkText }}>
                      {platform.capabilities.contenido}
                    </p>
                    
                    {/* Aplicación ELE donde antes estaba caso de éxito */}
                    <div className="mt-2 pt-2 border-t" style={{ borderColor: slide6Colors.lightBlue }}>
                      <p className="text-xs" style={{ color: slide6Colors.mediumBlue }}>
                        <span className="font-semibold">Aplicación ELE:</span> {platform.educationalFeatures}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'marketing':
        // Lista específica de plataformas de marketing para mostrar
        const specificMarketingPlatforms = [
          "Canva con IA",
          "ContentShake AI",
          "Smartly.ai",
          "ChatGPT (OpenAI)",
          "Claude (Anthropic)",
          "Microsoft Copilot",
          "Gemini (Google)",
          "Mindsmith",
          "LearnExperts (LEAi)"
        ];
        
        // Filtrar plataformas específicas
        const marketingPlatforms = platforms.filter(p => 
          specificMarketingPlatforms.includes(p.name)
        );
        
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              {marketingPlatforms.map((platform) => (
                <div 
                  key={platform.id}
                  className="p-3 rounded-lg shadow-md flex items-start bg-white"
                >
                  <div className="flex-shrink-0 w-1/4 pr-3 border-r" style={{ borderColor: slide6Colors.lightBlue }}>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold" style={{ color: slide6Colors.darkBlue }}>{platform.name}</h3>
                      <span className="text-xs px-1 rounded-full" style={{ backgroundColor: slide6Colors.paleGreen, color: slide6Colors.darkBlue }}>
                        {platform.rating}★
                      </span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: slide6Colors.mediumBlue }}>{platform.costs}</p>
                  </div>
                  <div className="flex-grow pl-3">
                    <p className="text-sm mb-2" style={{ color: slide6Colors.darkText }}>
                      {platform.capabilities.marketing}
                    </p>
                    
                    {/* Aplicación ELE donde antes estaba caso de éxito */}
                    <div className="mt-2 pt-2 border-t" style={{ borderColor: slide6Colors.lightBlue }}>
                      <p className="text-xs" style={{ color: slide6Colors.mediumBlue }}>
                        <span className="font-semibold">Aplicación ELE:</span> {platform.educationalFeatures}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'costos':
        return (
          <div className="space-y-4">
            {/* IA General */}
            <div className="mb-6">
              <div className="mb-3 py-2 px-4 rounded-lg" style={{ backgroundColor: slide6Colors.accent1 }}>
                <h3 className="text-lg font-bold" style={{ color: slide6Colors.white }}>IA General</h3>
              </div>
              
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: slide6Colors.border }}>
                <table className="w-full">
                  <thead style={{ backgroundColor: slide6Colors.accent1 }}>
                    <tr>
                      <th className="py-3 px-4 text-left text-base font-semibold" style={{ color: slide6Colors.white }}>Plataforma</th>
                      <th className="py-3 px-4 text-left text-base font-semibold" style={{ color: slide6Colors.white }}>Estructura de precios</th>
                      <th className="py-3 px-4 text-left text-base font-semibold" style={{ color: slide6Colors.white }}>Modelo de facturación</th>
                      <th className="py-3 px-4 text-left text-base font-semibold" style={{ color: slide6Colors.white }}>Valoración</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms
                      .filter(p => ["ChatGPT (OpenAI)", "Claude (Anthropic)", "Microsoft Copilot", "Gemini (Google)"].includes(p.name))
                      .sort((a, b) => a.costs.includes('Gratuito') ? -1 : b.costs.includes('Gratuito') ? 1 : 0)
                      .map((platform, index) => (
                      <tr key={platform.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-4 text-base font-medium" style={{ color: slide6Colors.accent1 }}>{platform.name}</td>
                        <td className="py-3 px-4 text-base" style={{ color: slide6Colors.darkText }}>{platform.costs}</td>
                        <td className="py-3 px-4 text-base" style={{ color: slide6Colors.darkText }}>
                          {platform.costs.includes('usuario') ? 'Por usuario' : 
                           platform.costs.includes('mes') ? 'Suscripción mensual' : 
                           platform.costs.includes('año') ? 'Suscripción anual' : 
                           platform.costs.includes('Gratuito') ? 'Freemium' : 'Personalizado'}
                        </td>
                        <td className="py-3 px-4 text-base font-medium" style={{ color: slide6Colors.accent3 }}>
                          {platform.rating} ★
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Herramientas de Metadatos */}
            <div className="mb-6">
              <div className="mb-2 py-1 px-3 rounded-lg" style={{ backgroundColor: slide6Colors.paleGreen }}>
                <h3 className="text-base font-bold" style={{ color: slide6Colors.darkBlue }}>Herramientas de Metadatos</h3>
              </div>
              
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: slide6Colors.paleGreen }}>
                <table className="w-full">
                  <thead style={{ backgroundColor: slide6Colors.categoryLight }}>
                    <tr>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Plataforma</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Estructura de precios</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Modelo de facturación</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Valoración</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms
                      .filter(p => ["Amazon Rekognition", "Clarifai AI"].includes(p.name))
                      .sort((a, b) => a.costs.includes('Gratuito') ? -1 : b.costs.includes('Gratuito') ? 1 : 0)
                      .map((platform, index) => (
                      <tr key={platform.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.darkBlue }}>{platform.name}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>{platform.costs}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.costs.includes('usuario') ? 'Por usuario' : 
                           platform.costs.includes('mes') ? 'Suscripción mensual' : 
                           platform.costs.includes('año') ? 'Suscripción anual' : 
                           platform.costs.includes('Gratuito') ? 'Freemium' : 'Personalizado'}
                        </td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.rating} ★
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Creación de Contenido */}
            <div className="mb-6">
              <div className="mb-2 py-1 px-3 rounded-lg" style={{ backgroundColor: slide6Colors.paleGreen }}>
                <h3 className="text-base font-bold" style={{ color: slide6Colors.darkBlue }}>Creación de Contenido</h3>
              </div>
              
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: slide6Colors.paleGreen }}>
                <table className="w-full">
                  <thead style={{ backgroundColor: slide6Colors.categoryLight }}>
                    <tr>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Plataforma</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Estructura de precios</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Modelo de facturación</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Valoración</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms
                      .filter(p => [
                        "Mindsmith", "LearnExperts (LEAi)", "MagicSchool", "IGNITE Copilot", "Megaprofe", 
                        "Reactored AI-La", "Langua", "TalkPal", "Edubook ChatIA", "Publishing.ai"
                      ].includes(p.name))
                      .sort((a, b) => a.costs.includes('Gratuito') ? -1 : b.costs.includes('Gratuito') ? 1 : 0)
                      .map((platform, index) => (
                      <tr key={platform.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.darkBlue }}>{platform.name}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>{platform.costs}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.costs.includes('usuario') ? 'Por usuario' : 
                           platform.costs.includes('mes') ? 'Suscripción mensual' : 
                           platform.costs.includes('año') ? 'Suscripción anual' : 
                           platform.costs.includes('Gratuito') ? 'Freemium' : 'Personalizado'}
                        </td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.rating} ★
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Marketing y Formación */}
            <div className="mb-6">
              <div className="mb-2 py-1 px-3 rounded-lg" style={{ backgroundColor: slide6Colors.paleGreen }}>
                <h3 className="text-base font-bold" style={{ color: slide6Colors.darkBlue }}>Marketing y Formación</h3>
              </div>
              
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: slide6Colors.paleGreen }}>
                <table className="w-full">
                  <thead style={{ backgroundColor: slide6Colors.categoryLight }}>
                    <tr>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Plataforma</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Estructura de precios</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Modelo de facturación</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Valoración</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms
                      .filter(p => ["Canva con IA", "ContentShake AI", "Smartly.ai"].includes(p.name))
                      .sort((a, b) => a.costs.includes('Gratuito') ? -1 : b.costs.includes('Gratuito') ? 1 : 0)
                      .map((platform, index) => (
                      <tr key={platform.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.darkBlue }}>{platform.name}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>{platform.costs}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.costs.includes('usuario') ? 'Por usuario' : 
                           platform.costs.includes('mes') ? 'Suscripción mensual' : 
                           platform.costs.includes('año') ? 'Suscripción anual' : 
                           platform.costs.includes('Gratuito') ? 'Freemium' : 'Personalizado'}
                        </td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.rating} ★
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Flujos de Trabajo */}
            <div className="mb-6">
              <div className="mb-2 py-1 px-3 rounded-lg" style={{ backgroundColor: slide6Colors.paleGreen }}>
                <h3 className="text-base font-bold" style={{ color: slide6Colors.darkBlue }}>Flujos de Trabajo</h3>
              </div>
              
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: slide6Colors.paleGreen }}>
                <table className="w-full">
                  <thead style={{ backgroundColor: slide6Colors.categoryLight }}>
                    <tr>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Plataforma</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Estructura de precios</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Modelo de facturación</th>
                      <th className="py-2 px-3 text-left text-sm font-semibold" style={{ color: slide6Colors.darkBlue }}>Valoración</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms
                      .filter(p => ["n8n"].includes(p.name))
                      .map((platform, index) => (
                      <tr key={platform.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.darkBlue }}>{platform.name}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>{platform.costs}</td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.costs.includes('usuario') ? 'Por usuario' : 
                           platform.costs.includes('mes') ? 'Suscripción mensual' : 
                           platform.costs.includes('año') ? 'Suscripción anual' : 
                           platform.costs.includes('Gratuito') ? 'Freemium' : 'Personalizado'}
                        </td>
                        <td className="py-2 px-3 text-sm" style={{ color: slide6Colors.mediumBlue }}>
                          {platform.rating} ★
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Seleccione una categoría para ver la comparativa</div>;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col p-5 overflow-hidden" style={{ backgroundColor: slide6Colors.bgLight }}>
      {/* Encabezado con máximo contraste */}
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold mb-1" 
            style={{ 
              color: slide6Colors.accent1,
              textShadow: 'none' // Eliminada sombra para mayor claridad
            }}>
          Training Season
        </h1>
        <h2 className="text-xl font-semibold" 
            style={{ 
              color: slide6Colors.accent2,
              textShadow: 'none'
            }}>
          Plataformas IA maduras para procesos editoriales
        </h2>
      </div>

      {/* Selector de categorías con tamaño fijo - sin scroll */}
      <div className="mb-4 py-1">
        <div className="grid grid-cols-5 gap-2 max-w-5xl mx-auto">
          {categories.map(category => (
            <button
              key={category.id}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full"
              style={{
                backgroundColor: selectedCategory === category.id ? slide6Colors.accent1 : slide6Colors.cardBg,
                color: selectedCategory === category.id ? slide6Colors.lightText : slide6Colors.accent1,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: `1px solid ${selectedCategory === category.id ? slide6Colors.accent1 : slide6Colors.border}`,
                fontSize: '0.95rem',
                fontWeight: selectedCategory === category.id ? '600' : '500',
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow overflow-y-auto pr-1">
        {renderCategoryContent()}
      </div>

      {/* Pie de página */}
      <div className="mt-4 pt-3 border-t text-center" style={{ borderColor: slide6Colors.border }}>
        <p className="text-base" style={{ color: slide6Colors.accent2, fontWeight: "500" }}>
          "Training Season: plataformas IA maduras para procesos editoriales en español"
        </p>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 6
// =======================================================================

// =======================================================================
// DIAPOSITIVA 7: ANÁLISIS COMPARATIVO POR PROCESOS
// =======================================================================
const Diapositiva7 = () => {
  const [selectedProcess, setSelectedProcess] = useState<'metadatado' | 'creacion' | 'marketing' | 'distribucion'>('metadatado');
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  
  // Definiendo tipos para nuestra aplicación
  type ProcessId = 'metadatado' | 'creacion' | 'marketing' | 'distribucion';
  type PlatformId = 'chatgpt' | 'claude' | 'gemini' | 'copilot';
  
  // Paleta de colores minimalista
  const slide7Colors = {
    darkNavy: '#132831',    // Color base oscuro
    slateGray: '#4c5261',   // Gris pizarra
    lavender: '#827c95',    // Lavanda
    lilac: '#c0a4c7',       // Lila
    paleRose: '#e0c8e0',    // Rosa pálido
    white: '#ffffff',       // Blanco
    offWhite: '#f8f5fa',    // Blanco apagado
    lightGray: '#e6e6e8',   // Gris claro
    textDark: '#1a1a1a',    // Texto negro
    textLight: '#777777'    // Texto gris
  };

  // Colores para cada plataforma - más sutiles y en línea con la paleta
  const platformColors: Record<PlatformId, string> = {
    chatgpt: '#4c5261',  // Gris pizarra
    claude: '#827c95',   // Lavanda
    gemini: '#c0a4c7',   // Lila
    copilot: '#132831'   // Azul marino oscuro
  };

  // Tipos de procesos editoriales para análisis
  const processes = [
    { id: 'metadatado', name: 'Metadatado', icon: '🔖' },
    { id: 'creacion', name: 'Creación de contenido', icon: '✏️' },
    { id: 'marketing', name: 'Marketing y formación', icon: '📢' },
    { id: 'distribucion', name: 'Distribución y análisis', icon: '📊' }
  ];

  // Tipos para los parámetros del proceso
  type Category = {
    id: string;
    name: string;
    description: string;
  };
  
  type ProcessParameters = {
    categories: Category[];
    platforms: Record<PlatformId, number[]>;
    best: string;
    comparison: string;
  };
  
  // Parámetros para cada proceso y plataforma (escala 1-10)
  const processParameters: Record<ProcessId, ProcessParameters> = {
    metadatado: {
      categories: [
        { id: "precision", name: "Precisión", description: "Exactitud en la clasificación y etiquetado de contenidos educativos" },
        { id: "contexto", name: "Contextualización", description: "Capacidad de entender el contexto educativo del contenido" },
        { id: "velocidad", name: "Velocidad", description: "Tiempo necesario para procesar y etiquetar contenidos" },
        { id: "multilingue", name: "Multilingüismo", description: "Soporte para etiquetado en múltiples idiomas" },
        { id: "estructura", name: "Estructura", description: "Capacidad para crear sistemas organizados de metadatos" },
        { id: "consistencia", name: "Consistencia", description: "Uniformidad en el estilo y formato de los metadatos generados" },
        { id: "integracion", name: "Integración", description: "Facilidad para integrarse con sistemas de gestión de contenidos" },
        { id: "automatizacion", name: "Automatización", description: "Nivel de automatización en procesos de etiquetado" },
        { id: "personalizacion", name: "Personalización", description: "Adaptabilidad a necesidades específicas de etiquetado" }
      ],
      platforms: {
        chatgpt: [7, 7, 9, 9, 6, 7, 6, 8, 8],
        claude: [9, 9, 7, 8, 8, 9, 5, 7, 7],
        gemini: [8, 8, 8, 7, 7, 7, 9, 7, 6],
        copilot: [7, 6, 8, 7, 9, 8, 10, 7, 7]
      },
      best: "Claude",
      comparison: `
      <strong>Claude</strong> destaca significativamente en <em>precisión</em> (9/10) y <em>contextualización</em> (9/10), superando a sus competidores en la comprensión semántica profunda de contenido educativo. Esta superioridad se debe a su arquitectura optimizada para análisis contextual y su modo Learning, que le permite categorizar materiales educativos según marcos pedagógicos estandarizados con mayor exactitud.

      <strong>Copilot</strong> sobresale en <em>integración</em> (10/10) y <em>estructura</em> (9/10) gracias a su perfecta cohesión con el ecosistema Microsoft, especialmente SharePoint y sistemas de metadatos gestionados, lo que lo hace ideal para organizaciones ya inmersas en el entorno Microsoft.

      <strong>ChatGPT</strong> lidera en <em>velocidad</em> (9/10) y <em>multilingüismo</em> (9/10), procesando grandes volúmenes de contenido rápidamente en más de 40 idiomas, aunque con menor precisión contextual que Claude.

      <strong>Gemini</strong> ofrece un equilibrio con fortaleza particular en <em>integración</em> (9/10) con servicios Google y su característica exclusiva de "conciencia temporal" que actualiza metadatos automáticamente cuando cambian estándares educativos.
      `
    },
    creacion: {
      categories: [
        { id: "precision", name: "Precisión factual", description: "Exactitud de la información y contenido generado" },
        { id: "personaliza", name: "Personalización", description: "Adaptación a diferentes audiencias, niveles y contextos" },
        { id: "multimodal", name: "Multimodalidad", description: "Capacidad de trabajar con diferentes formatos (texto, imágenes)" },
        { id: "original", name: "Originalidad", description: "Creatividad y novedad en el contenido generado" },
        { id: "adaptable", name: "Adaptabilidad", description: "Flexibilidad para ajustarse a diferentes requisitos educativos" },
        { id: "estructura", name: "Estructura", description: "Organización lógica y pedagógica del contenido" },
        { id: "estilo", name: "Estilo", description: "Calidad de la escritura y adecuación al contexto educativo" },
        { id: "integracion", name: "Integración", description: "Compatibilidad con plataformas educativas existentes" },
        { id: "escalable", name: "Escalabilidad", description: "Capacidad para crear grandes volúmenes de contenido coherente" }
      ],
      platforms: {
        chatgpt: [7, 9, 7, 8, 9, 7, 8, 7, 9],
        claude: [9, 8, 7, 8, 8, 9, 9, 6, 8],
        gemini: [8, 7, 10, 7, 8, 7, 7, 9, 8],
        copilot: [8, 8, 9, 7, 8, 9, 7, 10, 7]
      },
      best: "Claude",
      comparison: `
      <strong>Claude</strong> se distingue por su <em>precisión factual</em> (9/10) y <em>estilo</em> (9/10), estableciéndose como la opción superior para la creación de materiales educativos de alta calidad académica. Su enfoque socrático y su Learning Mode fomentan el pensamiento crítico, haciendo que sus materiales sean particularmente valiosos para educación superior y contenido que requiere rigor intelectual.

      <strong>ChatGPT</strong> sobresale en <em>personalización</em> (9/10) y <em>adaptabilidad</em> (9/10), con una versatilidad que le permite crear contenido para diversos niveles educativos y contextos. Su generación rápida y facilidad de uso lo hacen ideal para educadores que necesitan crear materiales variados con frecuencia.

      <strong>Gemini</strong> destaca notablemente en <em>multimodalidad</em> (10/10), facilitando la creación de contenido que integra texto, imágenes y otros elementos visuales de forma coherente. Su integración con Google Workspace añade un valor significativo para instituciones que ya utilizan estas herramientas.

      <strong>Copilot</strong> domina en <em>integración</em> (10/10) y <em>estructura</em> (9/10), aprovechando su perfecta interoperabilidad con Microsoft 365 para facilitar la colaboración y el flujo de trabajo en la creación de contenido educativo estructurado.
      `
    },
    marketing: {
      categories: [
        { id: "creatividad", name: "Creatividad", description: "Originalidad y atractivo en el contenido promocional" },
        { id: "segmentacion", name: "Segmentación", description: "Capacidad para adaptar mensajes a audiencias específicas" },
        { id: "analisis", name: "Análisis", description: "Herramientas para evaluar el rendimiento del marketing" },
        { id: "multicanal", name: "Multicanal", description: "Adaptación a diversos canales de comunicación" },
        { id: "persuasion", name: "Persuasión", description: "Efectividad para impulsar acciones y conversiones" },
        { id: "coherencia", name: "Coherencia", description: "Consistencia de mensajes entre plataformas y campañas" },
        { id: "seo", name: "SEO", description: "Optimización para motores de búsqueda" },
        { id: "visuales", name: "Visuales", description: "Calidad de elementos gráficos y diseños" },
        { id: "adaptacion", name: "Adaptabilidad", description: "Flexibilidad para ajustarse a tendencias emergentes" }
      ],
      platforms: {
        chatgpt: [8, 8, 6, 8, 9, 7, 8, 7, 9],
        claude: [8, 8, 8, 7, 7, 9, 7, 6, 8],
        gemini: [8, 7, 8, 8, 8, 7, 7, 10, 8],
        copilot: [7, 8, 7, 7, 7, 10, 7, 9, 7]
      },
      best: "Gemini",
      comparison: `
      <strong>Gemini</strong> destaca en el ámbito del marketing educativo principalmente por su excepcional capacidad <em>visual</em> (10/10), permitiendo crear materiales promocionales de alto impacto que combinan texto e imágenes de forma coherente. Su característica distintiva es el soporte para propuestas de subvenciones educativas, habiendo ayudado a educadores a obtener fondos significativos para sus proyectos.

      <strong>Claude</strong> sobresale en <em>coherencia</em> (9/10) y <em>análisis</em> (8/10), produciendo materiales formativos con mayor profundidad y precisión conceptual, especialmente valiosos para marketing dirigido a instituciones de educación superior donde la credibilidad académica es crucial.

      <strong>ChatGPT</strong> lidera en <em>persuasión</em> (9/10) y <em>adaptabilidad</em> (9/10), generando contenido promocional versátil que se adapta eficazmente a diferentes audiencias y contextos. Su facilidad para producir variaciones de mensajes lo hace ideal para campañas que requieren pruebas A/B extensivas.

      <strong>Copilot</strong> excele en <em>coherencia</em> (10/10), garantizando uniformidad de marca a través de todas las comunicaciones gracias a su integración con el ecosistema Microsoft, lo que facilita mantener consistencia en campañas de marketing educativo a gran escala.
      `
    },
    distribucion: {
      categories: [
        { id: "analisis", name: "Análisis", description: "Capacidades para analizar datos de uso y efectividad" },
        { id: "integracion", name: "Integración LMS", description: "Compatibilidad con sistemas de gestión de aprendizaje" },
        { id: "personalizacion", name: "Personalización", description: "Adaptación a preferencias individuales de estudiantes" },
        { id: "escalabilidad", name: "Escalabilidad", description: "Capacidad para crecer con la demanda" },
        { id: "automatiza", name: "Automatización", description: "Procesos automatizados de distribución de contenido" },
        { id: "prediccion", name: "Predicción", description: "Anticipación de necesidades basada en datos" },
        { id: "feedback", name: "Retroalimentación", description: "Mecanismos para recopilar y analizar feedback" },
        { id: "multicanal", name: "Multicanal", description: "Soporte para diversos canales de distribución" },
        { id: "seguimiento", name: "Seguimiento", description: "Monitoreo detallado del compromiso del estudiante" }
      ],
      platforms: {
        chatgpt: [7, 8, 9, 9, 8, 7, 7, 7, 7],
        claude: [8, 7, 8, 8, 7, 8, 9, 7, 8],
        gemini: [9, 9, 8, 8, 8, 9, 7, 8, 9],
        copilot: [8, 8, 7, 8, 8, 8, 8, 7, 10]
      },
      best: "Gemini",
      comparison: `
      <strong>Gemini</strong> sobresale en <em>análisis</em> (9/10), <em>integración LMS</em> (9/10) y <em>seguimiento</em> (9/10), posicionándose como la solución más completa para distribución y análisis de contenido educativo. Sus paneles analíticos sofisticados correlacionan datos de uso con resultados educativos, ofreciendo insights valiosos sobre la efectividad del material. Un caso documentado muestra un aumento del 52% en tasas de engagement con contenido recomendado.

      <strong>ChatGPT</strong> destaca en <em>personalización</em> (9/10) y <em>escalabilidad</em> (9/10), permitiendo adaptar la distribución de contenido a gran escala según perfiles de aprendizaje, lo que resulta particularmente útil para plataformas educativas con grandes números de estudiantes.

      <strong>Copilot</strong> se distingue en <em>seguimiento</em> (10/10), proporcionando las herramientas más detalladas para monitorizar la interacción de los estudiantes con el contenido educativo, facilitando intervenciones oportunas y ajustes en las estrategias de enseñanza.

      <strong>Claude</strong> muestra su fortaleza en <em>retroalimentación</em> (9/10), con sistemas estructurados para recopilar y analizar las opiniones de los usuarios, permitiendo mejoras continuas en los materiales educativos basadas en la experiencia real de aprendizaje.
      `
    }
  };

  // Tipo para la información de las plataformas
  type PlatformInfo = {
    name: string;
    developer: string;
    logo: string;
    pricing: string;
  };
  
  // Información básica de cada plataforma
  const platformInfo: Record<PlatformId, PlatformInfo> = {
    chatgpt: {
      name: "ChatGPT",
      developer: "OpenAI",
      logo: "📱",
      pricing: "Gratuito (limitado), Plus: €23.80/mes, Team: €28.50/usuario/mes"
    },
    claude: {
      name: "Claude",
      developer: "Anthropic",
      logo: "🧠",
      pricing: "Gratuito (20 mensajes/día), Pro: €18/mes, Team: €28/usuario/mes"
    },
    gemini: {
      name: "Gemini",
      developer: "Google",
      logo: "🌐",
      pricing: "App gratuita, Gemini Education: €18.99/usuario/mes, Premium: €28.99/usuario/mes"
    },
    copilot: {
      name: "Copilot",
      developer: "Microsoft",
      logo: "💻",
      pricing: "Pro: €20/usuario/mes, Microsoft 365 Copilot: €30/usuario/mes"
    }
  };

  // Información detallada del proceso seleccionado
  const getProcessDetail = (processId: string) => {
    switch(processId) {
      case 'metadatado':
        return {
          title: "Metadatado y Etiquetado",
          description: "Categorización, etiquetado y organización de contenidos educativos para mejorar la búsqueda, clasificación y recomendación.",
          icon: "🔖"
        };
      case 'creacion':
        return {
          title: "Creación de Contenido",
          description: "Desarrollo de materiales didácticos como ejercicios, evaluaciones y explicaciones adaptados a diferentes niveles educativos.",
          icon: "✏️"
        };
      case 'marketing':
        return {
          title: "Marketing y Formación",
          description: "Generación de contenido promocional para materiales educativos y desarrollo de programas formativos para docentes.",
          icon: "📢"
        };
      case 'distribucion':
        return {
          title: "Distribución y Análisis",
          description: "Optimización de canales de distribución de contenido educativo y evaluación del impacto en procesos de aprendizaje.",
          icon: "📊"
        };
      default:
        return {
          title: "Análisis de Procesos",
          description: "Evaluación comparativa de herramientas IA para procesos editoriales educativos.",
          icon: "📋"
        };
    }
  };

  // Obtener detalles del proceso actual
  const currentProcessDetail = getProcessDetail(selectedProcess);
  const currentParameters = processParameters[selectedProcess as ProcessId];

  // Tipos para los puntos del gráfico
  type Point = {
    x: number;
    y: number;
    originalLabel: string;
    label: string;
    angle: number;
  };
  
  type PolygonPoint = {
    x: number;
    y: number;
  };

  // Tipo para etiquetas cortas
  type ShortLabels = {
    [key: string]: string;
  };
  
  // Abreviaturas o iniciales para las categorías
  const shortLabels: ShortLabels = {
    "Precisión factual": "P",
    "Personalización": "PE",
    "Multimodalidad": "M",
    "Originalidad": "O",
    "Adaptabilidad": "A",
    "Estructura": "E",
    "Estilo": "ES",
    "Integración": "I",
    "Escalabilidad": "EC",
    "Contextualización": "C",
    "Velocidad": "V",
    "Multilingüismo": "ML",
    "Consistencia": "CO",
    "Automatización": "AU",
    "Creatividad": "CR",
    "Segmentación": "S",
    "Análisis": "AN",
    "Multicanal": "MC",
    "Persuasión": "PS",
    "Coherencia": "CH",
    "SEO": "SEO",
    "Visuales": "VI",
    "Integración LMS": "IL",
    "Predicción": "PR",
    "Retroalimentación": "RF",
    "Seguimiento": "SG"
  };

  // Función para dibujar el eneagrama
  const renderEnneagram = () => {
    // Tamaño más compacto
    const size = 380; 
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.32; // Radio reducido para mejor encaje
    const categories = currentParameters.categories;
    const platforms: PlatformId[] = ['chatgpt', 'claude', 'gemini', 'copilot'];
    
    // Calcular puntos del eneagrama
    const points: Point[] = categories.map((cat: Category, i: number) => {
      const angle = Math.PI * 2 * i / categories.length - Math.PI / 2;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        originalLabel: cat.name,
        label: shortLabels[cat.name] || cat.name[0],
        angle
      };
    });
    
    // Generar puntos de polígonos para cada plataforma
    const getPlatformPolygon = (platformId: PlatformId): PolygonPoint[] => {
      const values = currentParameters.platforms[platformId];
      return points.map((point: Point, i: number) => {
        const value = values[i] / 10; // Normalizar a 0-1
        return {
          x: centerX + (radius * value) * Math.cos(point.angle),
          y: centerY + (radius * value) * Math.sin(point.angle)
        };
      });
    };
    
    // Crear strings para los paths de SVG
    const getPolygonPath = (platformId: PlatformId): string => {
      const polygon = getPlatformPolygon(platformId);
      return polygon.map((p: PolygonPoint, i: number) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + 'Z';
    };
    
    return (
      <div className="flex justify-center items-center w-full h-full">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
          {/* Círculos de fondo */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((r, i) => (
            <circle 
              key={i} 
              cx={centerX} 
              cy={centerY} 
              r={radius * r} 
              fill="none" 
              stroke={slide7Colors.lightGray} 
              strokeWidth="1" 
              opacity={0.4} 
            />
          ))}
          
          {/* Líneas radiales */}
          {points.map((point, i) => (
            <line 
              key={i} 
              x1={centerX} 
              y1={centerY} 
              x2={point.x} 
              y2={point.y} 
              stroke={slide7Colors.lightGray} 
              strokeWidth="1" 
              opacity={0.4} 
            />
          ))}
          
          {/* Polígonos de valores para cada plataforma */}
          {platforms.map((platformId) => {
            const isHovered = hoveredPlatform === platformId;
            const strokeWidth = isHovered ? 2.5 : 1.5;
            const opacity = hoveredPlatform ? (isHovered ? 0.8 : 0.25) : 0.6;
            
            return (
              <path 
                key={platformId} 
                d={getPolygonPath(platformId)} 
                fill={platformColors[platformId]} 
                fillOpacity={opacity * 0.25} 
                stroke={platformColors[platformId]} 
                strokeWidth={strokeWidth} 
                strokeOpacity={opacity}
                onMouseEnter={() => setHoveredPlatform(platformId)}
                onMouseLeave={() => setHoveredPlatform(null)}
              />
            );
          })}
          
          {/* Etiquetas de categorías - solo iniciales o abreviaturas */}
          {points.map((point: Point, i: number) => {
            // Posicionamiento aún más fuera del círculo para evitar solapamientos
            const labelDistance = radius * 1.25;
            const labelX = centerX + labelDistance * Math.cos(point.angle);
            const labelY = centerY + labelDistance * Math.sin(point.angle);
            
            return (
              <g key={i}>
                {/* Círculo de fondo para la etiqueta */}
                <circle
                  cx={labelX}
                  cy={labelY}
                  r={16}
                  fill="white"
                  stroke={slide7Colors.lightGray}
                  strokeWidth="1"
                  opacity="0.95"
                />
                
                {/* Texto de la etiqueta (abreviatura) */}
                <text 
                  x={labelX} 
                  y={labelY} 
                  fontSize="13"
                  fontWeight="700"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ 
                    fill: slide7Colors.darkNavy
                  }}
                >
                  {point.label}
                </text>
              </g>
            );
          })}
          
          {/* Valor numérico para cada círculo concéntrico */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((r, i) => (
            <text 
              key={i}
              x={centerX + 5} 
              y={centerY - radius * r + 10} 
              fontSize="10"
              textAnchor="start"
              style={{ 
                fill: slide7Colors.textLight,
                opacity: 0.7
              }}
            >
              {(r * 10).toFixed(0)}
            </text>
          ))}
        </svg>
      </div>
    );
  };
  
  // Renderizador de la leyenda de categorías (formato vertical)
  const renderCategoryLegend = () => {
    // Agrupar categorías en 2 columnas en lugar de 3 para hacerlas más verticales
    const categories = currentParameters.categories;
    const columns = 2;
    const itemsPerColumn = Math.ceil(categories.length / columns);
    
    // Dividir categorías en columnas
    const columnContents = [];
    for (let i = 0; i < columns; i++) {
      columnContents.push(categories.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    
    return (
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h4 className="text-sm font-bold mb-2" style={{ color: slide7Colors.darkNavy }}>Leyenda de categorías</h4>
        <div className="flex justify-between">
          {columnContents.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-3">
              {column.map((category: Category, index: number) => (
                <div key={index} className="flex items-center text-xs">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                    style={{ 
                      backgroundColor: slide7Colors.offWhite,
                      border: `1px solid ${slide7Colors.lightGray}`
                    }}
                  >
                    <span style={{ color: slide7Colors.darkNavy, fontWeight: "bold" }}>
                      {shortLabels[category.name] || category.name[0]}
                    </span>
                  </div>
                  <span style={{ color: slide7Colors.slateGray }}>{category.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Renderizar leyenda de plataformas
  const renderLegend = () => {
    const platforms: PlatformId[] = ['chatgpt', 'claude', 'gemini', 'copilot'];
    
    return (
      <div className="flex flex-col items-center space-y-3 mt-2">
        {platforms.map((platformId) => {
          const platform = platformInfo[platformId];
          const isHovered = hoveredPlatform === platformId;
          const isBest = platformId === currentParameters.best.toLowerCase();
          
          return (
            <div 
              key={platformId}
              className={`flex items-center px-4 py-2 rounded-lg transition-all w-48 ${isHovered ? 'transform scale-105' : ''}`}
              style={{ 
                backgroundColor: isHovered ? platformColors[platformId] + '15' : (isBest ? platformColors[platformId] + '10' : 'transparent'),
                cursor: 'pointer',
                border: `2px solid ${isHovered || isBest ? platformColors[platformId] : 'transparent'}`
              }}
              onMouseEnter={() => setHoveredPlatform(platformId)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div 
                className="w-6 h-6 rounded-full mr-2 flex items-center justify-center" 
                style={{ 
                  backgroundColor: platformColors[platformId],
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '12px'
                }}
              >
                {isBest ? "★" : ""}
              </div>
              <span className="text-sm font-bold" style={{ color: slide7Colors.darkNavy }}>
                {platform.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  // Renderizar análisis comparativo
  const renderComparison = () => {
    const currentBestPlatform = currentParameters.best.toLowerCase() as PlatformId;
    
    return (
      <div 
        className="mt-4 p-4 rounded-lg"
        style={{ 
          backgroundColor: slide7Colors.white,
          border: `1px solid ${slide7Colors.lightGray}`
        }}
      >
        <h3 className="text-base font-bold mb-3" style={{ color: slide7Colors.darkNavy }}>
          <span style={{ 
            color: platformColors[currentBestPlatform],
            borderBottom: `2px solid ${platformColors[currentBestPlatform]}`
          }}>
            {currentParameters.best}
          </span> 
          {" "}destaca en {currentProcessDetail.title.toLowerCase()}
        </h3>
        
        <div 
          className="text-sm" 
          style={{ color: slide7Colors.slateGray }}
          dangerouslySetInnerHTML={{ __html: currentParameters.comparison }}
        />
        
        <div className="mt-4 grid grid-cols-4 gap-3">
          {Object.keys(platformInfo).map(platformId => {
            const platform = platformInfo[platformId as PlatformId];
            const isHovered = hoveredPlatform === platformId;
            const isBest = platformId === currentBestPlatform;
            
            return (
              <div 
                key={platformId}
                className={`p-3 rounded-lg transition-all ${isHovered ? 'transform scale-102' : ''}`}
                style={{ 
                  backgroundColor: isBest ? platformColors[platformId as PlatformId] + '15' : slide7Colors.offWhite,
                  border: `1px solid ${isHovered || isBest ? platformColors[platformId as PlatformId] : 'transparent'}`
                }}
                onMouseEnter={() => setHoveredPlatform(platformId)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className="flex items-center mb-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center mr-2 text-white"
                    style={{ backgroundColor: platformColors[platformId as PlatformId] }}
                  >
                    {isBest ? "★" : ""}
                  </div>
                  <span className="font-medium" style={{ color: slide7Colors.darkNavy }}>{platform.name}</span>
                </div>
                <div className="text-xs" style={{ color: slide7Colors.textLight }}>
                  {platform.pricing}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen w-full flex flex-col" style={{ backgroundColor: slide7Colors.offWhite }}>
      {/* Encabezado */}
      <div className="px-6 pt-5 pb-3">
        <div className="rounded-lg shadow-sm p-3 mb-2" style={{
          background: `linear-gradient(90deg, ${slide7Colors.darkNavy}, ${slide7Colors.slateGray})`,
        }}>
          <h2 className="text-2xl font-bold text-center" style={{ color: slide7Colors.white, fontFamily: "'Montserrat', sans-serif" }}>
            Análisis Comparativo por Procesos
          </h2>
        </div>
        <p className="text-center text-sm" style={{ color: slide7Colors.slateGray }}>
          Evaluación detallada de plataformas IA para diferentes etapas del proceso editorial educativo
        </p>
      </div>
      
      {/* Selector de procesos */}
      <div className="px-6 mb-3">
        <div className="flex justify-between space-x-2">
          {processes.map((process) => (
            <button
              key={process.id}
              className={`py-2 px-3 rounded-lg transition-all text-sm flex-1 flex items-center justify-center shadow-sm ${selectedProcess === process.id ? 'transform scale-102' : ''}`}
              style={{ 
                backgroundColor: selectedProcess === process.id ? slide7Colors.darkNavy : slide7Colors.white,
                color: selectedProcess === process.id ? slide7Colors.white : slide7Colors.slateGray,
                borderLeft: `3px solid ${selectedProcess === process.id ? slide7Colors.lilac : 'transparent'}`,
              }}
              onClick={() => setSelectedProcess(process.id as 'metadatado' | 'creacion' | 'marketing' | 'distribucion')}
            >
              <span className="mr-2">{process.icon}</span>
              <span className="font-medium">{process.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="flex-1 px-6 pb-4 overflow-y-auto">
        {/* Descripción del proceso */}
        <div className="mb-4 p-3 rounded-lg shadow-sm" style={{ 
          backgroundColor: slide7Colors.white,
          borderLeft: `4px solid ${slide7Colors.darkNavy}`
        }}>
          <div className="flex items-center">
            <div className="mr-3 text-2xl">{currentProcessDetail.icon}</div>
            <div>
              <h3 className="font-bold text-base" style={{ color: slide7Colors.darkNavy }}>{currentProcessDetail.title}</h3>
              <p className="text-sm" style={{ color: slide7Colors.slateGray }}>{currentProcessDetail.description}</p>
            </div>
          </div>
        </div>
        
        {/* Gráfico y leyenda */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-center mb-4" style={{ color: slide7Colors.darkNavy }}>
            Comparativa por categorías
          </h3>
          
          {/* Nuevo layout para el gráfico y leyenda lateral */}
          <div className="flex flex-row">
            <div className="w-3/5 flex flex-row">
              <div className="w-3/4">
                {renderEnneagram()}
              </div>
              <div className="w-1/4 pt-10">
                {renderLegend()}
              </div>
            </div>
            <div className="w-2/5 p-2">
              {renderCategoryLegend()}
            </div>
          </div>
        </div>
        
        {/* Análisis comparativo */}
        {renderComparison()}
        
        {/* Tabla de categorías */}
        <div className="mt-4 p-4 rounded-lg shadow-sm" style={{ backgroundColor: slide7Colors.white }}>
          <h3 className="text-sm font-bold mb-2" style={{ color: slide7Colors.darkNavy }}>Desglose de categorías</h3>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            {currentParameters.categories.map((category: Category, index: number) => (
              <div key={category.id} className="p-2 rounded" style={{ backgroundColor: slide7Colors.offWhite }}>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-sm" style={{ color: slide7Colors.darkNavy }}>{category.name}</span>
                    <p className="text-xs mt-1" style={{ color: slide7Colors.textLight }}>{category.description}</p>
                  </div>
                  <div className="flex space-x-4">
                    {['chatgpt', 'claude', 'gemini', 'copilot'].map((platformId) => {
                      const value = currentParameters.platforms[platformId as PlatformId][index];
                      const isHovered = hoveredPlatform === platformId;
                      
                      // Determinar si es el valor más alto para esta categoría
                      const allValues = Object.values(currentParameters.platforms).map((vals: number[]) => vals[index]);
                      const isHighest = Math.max(...allValues) === value;
                      
                      return (
                        <div
                          key={platformId}
                          className="flex flex-col items-center transition-all"
                          style={{ 
                            opacity: hoveredPlatform ? (isHovered ? 1 : 0.4) : 1
                          }}
                          onMouseEnter={() => setHoveredPlatform(platformId)}
                          onMouseLeave={() => setHoveredPlatform(null)}
                        >
                          <div 
                            className="w-7 h-7 rounded-full flex items-center justify-center text-sm text-white"
                            style={{ 
                              backgroundColor: platformColors[platformId as PlatformId],
                              transform: isHovered ? 'scale(1.15)' : (isHighest ? 'scale(1.05)' : 'scale(1)'),
                              transition: 'all 0.2s ease',
                              boxShadow: isHighest ? `0 0 0 2px white, 0 0 0 3px ${platformColors[platformId as PlatformId]}` : 'none'
                            }}
                          >
                            {value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 7
// =======================================================================

// =======================================================================
// DIAPOSITIVA 8: MATRIZ DE SELECCIÓN DE HERRAMIENTAS (PLANES EMPRESARIALES)
// =======================================================================
const Diapositiva8 = () => {
  // SGEL ELE es una editorial mediana, así que fijamos ese tamaño
  const publisherSize = 'medium';
  const [selectedNeedsCategory, setSelectedNeedsCategory] = useState('all');
  const [selectedBudgetLevel, setSelectedBudgetLevel] = useState('all');
  const [selectedCriterion, setSelectedCriterion] = useState('overall');
  
  // Paleta de colores actualizada según los requisitos
  const slide8Colors = {
    primary: '#1f202f',       // Azul oscuro/negro - color principal
    secondary: '#79787e',     // Gris medio - color secundario
    accent: '#d3d7ea',        // Lila claro - color de acento
    lightBg: '#f3f3f3',       // Gris muy claro - fondo ligero
    darkBg: '#1f202f',        // Azul oscuro/negro - fondos oscuros
    text: '#1f202f',          // Azul oscuro/negro - texto principal
    lightText: '#e5e5e5',     // Gris claro - texto sobre fondos oscuros
    highlight: '#d3d7ea',     // Lila claro - resaltados
    neutral: '#79787e',       // Gris medio - neutro para bordes
    shadow: 'rgba(31, 32, 47, 0.15)', // Sombra transparente
  };

  // Criterios de selección para la matriz
  const criteria = [
    { id: 'overall', name: 'Valoración global' },
    { id: 'cost', name: 'Relación coste-valor' },
    { id: 'learning', name: 'Facilidad de aprendizaje' },
    { id: 'implementation', name: 'Complejidad implementación' },
    { id: 'ele', name: 'Especialización ELE' },
  ];

  // Categorías de necesidades
  const needsCategories = [
    { id: 'all', name: 'Todas las necesidades' },
    { id: 'metadata', name: 'Gestión de metadatos' },
    { id: 'content', name: 'Creación de contenidos' },
    { id: 'marketing', name: 'Marketing y promoción' },
    { id: 'workflow', name: 'Flujos de trabajo' },
    { id: 'distribution', name: 'Distribución y análisis' },
  ];

  // Niveles de presupuesto
  const budgetLevels = [
    { id: 'all', name: 'Todos los presupuestos' },
    { id: 'low', name: 'Presupuesto limitado (<€100/mes)' },
    { id: 'medium', name: 'Presupuesto medio (€100-500/mes)' },
    { id: 'high', name: 'Presupuesto alto (>€500/mes)' },
  ];

  // Definir una interfaz para la estructura de herramientas
  interface Tool {
    name: string;
    category: string;
    needs: string[];
    rating: number;
    costValue: number;
    learning: number;
    implementation: number;
    eleSpecialization: number;
    publisherSizes: string[];
    budgetLevel: string[];
    costs: string;
    benefitsSmall: string;
    benefitsMedium: string;
    benefitsLarge: string;
    limitations: string;
  }

  // Datos de herramientas recomendadas, adaptados específicamente para SGEL ELE, editorial mediana, con foco en planes empresariales
  const tools: Tool[] = [
    {
      name: "Claude (Anthropic)",
      category: "general",
      needs: ["metadata", "content", "marketing"],
      rating: 4.6,
      costValue: 4.7,
      learning: 4.2,
      implementation: 4.1,
      eleSpecialization: 4.4,
      publisherSizes: ["small", "medium", "large"],
      budgetLevel: ["low", "medium", "high"],
      costs: "Team: €28/usuario/mes, Enterprise: Precio personalizado, Max: €100-200/mes",
      benefitsSmall: "Alta calidad de contenido con el coste más bajo entre las opciones premium",
      benefitsMedium: "Modo Learning ideal para creación de materiales ELE con enfoque socrático. Especialmente eficaz para explicaciones gramaticales contextualizadas y materiales conversacionales auténticos.",
      benefitsLarge: "Ventana de contexto extendida para análisis de materiales completos",
      limitations: "Menor integración con herramientas editoriales específicas, puede requerir soluciones adicionales para flujos de trabajo completos"
    },
    {
      name: "IGNITE Copilot",
      category: "ele",
      needs: ["content", "workflow"],
      rating: 4.5,
      costValue: 4.6,
      learning: 3.8,
      implementation: 3.7,
      eleSpecialization: 4.9,
      publisherSizes: ["small", "medium", "large"],
      budgetLevel: ["low", "medium", "high"],
      costs: "Enterprise: desde €72/usuario/año con descuentos por volumen (50% con 51+ usuarios)",
      benefitsSmall: "Especialización ELE a precio asequible, incluye plan gratuito",
      benefitsMedium: "Especializado en generación de situaciones de aprendizaje ELE según MCER. Alineación perfecta con objetivos pedagógicos de SGEL y creación de materiales completos con evaluaciones adaptadas.",
      benefitsLarge: "Grandes descuentos por volumen para implementaciones extensas",
      limitations: "Enfocado únicamente en materiales ELE, requiere complementarse con otras herramientas para flujos de trabajo completos"
    },
    {
      name: "MagicSchool",
      category: "educacion",
      needs: ["content", "marketing"],
      rating: 4.4,
      costValue: 4.5,
      learning: 4.2,
      implementation: 4.0,
      eleSpecialization: 4.3,
      publisherSizes: ["small", "medium"],
      budgetLevel: ["low", "medium"],
      costs: "Enterprise: Plan personalizado con licencia por institución",
      benefitsSmall: "Excelente relación calidad-precio para editoriales pequeñas",
      benefitsMedium: "Conjunto completo de herramientas educativas (80+) con un precio muy competitivo. Ideal para desarrollar componentes interactivos y materiales gamificados complementarios a los libros de texto.",
      benefitsLarge: "Plan Enterprise viable, pero menos integración con procesos a gran escala",
      limitations: "Enfocado principalmente en K-12, aunque adaptable para materiales ELE básicos e intermedios"
    },
    {
      name: "ChatGPT (OpenAI)",
      category: "general",
      needs: ["metadata", "content", "marketing"],
      rating: 4.2,
      costValue: 4.0,
      learning: 4.5,
      implementation: 4.3,
      eleSpecialization: 3.9,
      publisherSizes: ["small", "medium", "large"],
      budgetLevel: ["low", "medium", "high"],
      costs: "Team: €30/usuario/mes, Enterprise: Precio personalizado con mínimo de usuarios",
      benefitsSmall: "Versatilidad para múltiples tareas con bajo coste inicial",
      benefitsMedium: "Gran versatilidad para distintos niveles y tipos de contenido ELE. Excelente complemento para metadatado y clasificación de recursos según niveles MCER, creación de ejercicios variados y material promocional.",
      benefitsLarge: "Capacidad de personalización mediante API y uso empresarial",
      limitations: "Requiere verificación humana para precisión académica, especialización menos profunda en ELE que otras soluciones específicas"
    },
    {
      name: "Reactored AI-La",
      category: "ele",
      needs: ["content"],
      rating: 4.3,
      costValue: 4.1,
      learning: 3.9,
      implementation: 3.8,
      eleSpecialization: 4.7,
      publisherSizes: ["small", "medium"],
      budgetLevel: ["low", "medium"],
      costs: "Empresarial: Desde €40/mes según volumen de lecciones, licencias por institución",
      benefitsSmall: "Especializado en ELE con precios accesibles para pequeñas editoriales",
      benefitsMedium: "Transformers multilingües específicos para generación de ejercicios ELE adaptados a la L1 del estudiante. Especialmente valioso para SGEL por su capacidad de crear ejercicios considerando la transferencia lingüística desde diversos idiomas.",
      benefitsLarge: "Menos adecuado para operaciones a gran escala",
      limitations: "Enfocado únicamente en generación de ejercicios, requiere complementarse con otras soluciones"
    },
    {
      name: "Megaprofe",
      category: "ele",
      needs: ["content", "marketing"],
      rating: 4.2,
      costValue: 4.0,
      learning: 4.3,
      implementation: 4.2,
      eleSpecialization: 4.8,
      publisherSizes: ["small", "medium"],
      budgetLevel: ["low", "medium"],
      costs: "School: Plan personalizado para instituciones con uso ilimitado",
      benefitsSmall: "Plataforma española con excelente adaptación al mercado local",
      benefitsMedium: "Plataforma española especializada en ELE con integración LOMLOE y perfecta adaptación al mercado iberoamericano. Chatbots educativos y recursos interactivos especialmente valiosos para complementar materiales impresos.",
      benefitsLarge: "Menos escalable para operaciones internacionales extensas",
      limitations: "Muy específico para el contexto educativo español, puede requerir adaptaciones para mercados internacionales"
    },
    {
      name: "Langua",
      category: "ele",
      needs: ["content"],
      rating: 4.3,
      costValue: 4.2,
      learning: 4.0,
      implementation: 3.9,
      eleSpecialization: 4.7,
      publisherSizes: ["small", "medium"],
      budgetLevel: ["low", "medium"],
      costs: "Empresarial: €210/año por usuario, descuentos por volumen disponibles",
      benefitsSmall: "Excelente contextualización regional para materiales ELE",
      benefitsMedium: "Especialización en contextualización de ejercicios ELE para diferentes regiones hispanohablantes. Control preciso de vocabulario por nivel MCER, ideal para desarrollo de materiales con variantes dialectales específicas.",
      benefitsLarge: "Menos adecuado para necesidades editoriales completas",
      limitations: "Especializado en generación de ejercicios, no abarca todos los procesos editoriales"
    },
    {
      name: "TalkPal",
      category: "ele",
      needs: ["content"],
      rating: 4.1,
      costValue: 4.4,
      learning: 4.2,
      implementation: 4.3,
      eleSpecialization: 4.8,
      publisherSizes: ["small", "medium"],
      budgetLevel: ["low", "medium"],
      costs: "Licencias institucionales: Desde €4/usuario/mes con mínimo de 50 usuarios",
      benefitsSmall: "Plan gratuito funcional, premium muy asequible",
      benefitsMedium: "Simulación avanzada de conversaciones con variantes dialectales del español. Herramienta ideal para desarrollo de componentes de práctica oral y materiales para plataforma digital complementaria de SGEL.",
      benefitsLarge: "Posibilidad de licencias masivas para grandes implementaciones",
      limitations: "Centrado exclusivamente en práctica conversacional, requiere complementarse con otras herramientas"
    },
    {
      name: "Microsoft Copilot",
      category: "general",
      needs: ["metadata", "content", "workflow"],
      rating: 4.1,
      costValue: 3.8,
      learning: 3.6,
      implementation: 3.5,
      eleSpecialization: 3.7,
      publisherSizes: ["medium", "large"],
      budgetLevel: ["medium", "high"],
      costs: "Microsoft 365 Copilot: €28,10/usuario/mes (anual) o €29,51/mes (mensual)",
      benefitsSmall: "Limitado para editoriales pequeñas debido a costes de implementación",
      benefitsMedium: "Integración perfecta con ecosistema Office 365. Particularmente útil para SGEL si ya utiliza herramientas Microsoft, facilitando la creación colaborativa de materiales y gestión de metadatos.",
      benefitsLarge: "Escalabilidad empresarial y soporte para grandes equipos",
      limitations: "Requiere inversión en ecosistema Microsoft completo para máximo beneficio, menos especializado en ELE que otras soluciones"
    },
    {
      name: "n8n",
      category: "workflow",
      needs: ["workflow", "metadata"],
      rating: 4.0,
      costValue: 4.2,
      learning: 2.5,
      implementation: 2.2,
      eleSpecialization: 3.5,
      publisherSizes: ["small", "medium", "large"],
      budgetLevel: ["low", "medium", "high"],
      costs: "Pro: €50/mes, Enterprise: Precio personalizado para grandes implementaciones",
      benefitsSmall: "Opción autoalojada extremadamente económica",
      benefitsMedium: "Automatización avanzada para conectar diferentes herramientas IA en flujos editoriales cohesivos. Complemento ideal para SGEL al permitir crear flujos de trabajo personalizados entre plataformas de contenido, metadatos y distribución.",
      benefitsLarge: "Escalabilidad empresarial con plan Pro",
      limitations: "Curva de aprendizaje pronunciada y requiere recursos técnicos para implementación"
    },
    {
      name: "Canva con IA",
      category: "marketing",
      needs: ["marketing", "content"],
      rating: 4.3,
      costValue: 4.5,
      learning: 4.8,
      implementation: 4.7,
      eleSpecialization: 3.6,
      publisherSizes: ["small", "medium", "large"],
      budgetLevel: ["low", "medium", "high"],
      costs: "Teams: Desde €10/usuario/mes, descuentos educativos disponibles",
      benefitsSmall: "Ideal para editoriales con recursos de diseño limitados",
      benefitsMedium: "Creación rápida de materiales promocionales y recursos visuales complementarios para materiales ELE. Magic Write facilita la elaboración de textos promocionales optimizados para diferentes mercados.",
      benefitsLarge: "Escalable con licencias por volumen",
      limitations: "No específico para ELE, aunque adaptable para marketing educativo y materiales complementarios"
    },
    {
      name: "Clarifai AI",
      category: "metadatos",
      needs: ["metadata"],
      rating: 4.0,
      costValue: 3.7,
      learning: 3.2,
      implementation: 3.0,
      eleSpecialization: 3.9,
      publisherSizes: ["medium", "large"],
      budgetLevel: ["medium", "high"],
      costs: "Professional: €275/mes, Enterprise: Precio personalizado para alto volumen",
      benefitsSmall: "Plan Community útil para proyectos limitados",
      benefitsMedium: "Creación de taxonomías personalizadas para clasificación de recursos visuales ELE. Especialmente valioso para SGEL para organizar su banco de imágenes por relevancia cultural, nivel educativo y contexto pedagógico.",
      benefitsLarge: "Capacidades avanzadas de búsqueda visual y categorización",
      limitations: "Requiere inversión significativa para uso profesional a escala y cierta curva de aprendizaje"
    }
  ];

  // Función para filtrar herramientas según los criterios seleccionados
  const getFilteredTools = () => {
    return tools.filter(tool => {
      // Filtro fijo por tamaño editorial mediano
      if (!tool.publisherSizes.includes(publisherSize)) {
        return false;
      }
      
      // Filtro por categoría de necesidades
      if (selectedNeedsCategory !== 'all' && !tool.needs.includes(selectedNeedsCategory)) {
        return false;
      }
      
      // Filtro por nivel de presupuesto
      if (selectedBudgetLevel !== 'all' && !tool.budgetLevel.includes(selectedBudgetLevel)) {
        return false;
      }
      
      return true;
    });
  };

  // Función para ordenar herramientas según el criterio seleccionado
  const getSortedTools = () => {
    const filteredTools = getFilteredTools();
    
    return filteredTools.sort((a, b) => {
      switch (selectedCriterion) {
        case 'cost':
          return b.costValue - a.costValue;
        case 'learning':
          return b.learning - a.learning;
        case 'implementation':
          return b.implementation - a.implementation;
        case 'ele':
          return b.eleSpecialization - a.eleSpecialization;
        case 'overall':
        default:
          return b.rating - a.rating;
      }
    });
  };

  // Obtener herramientas ordenadas según criterios
  const sortedTools = getSortedTools();

  // Obtener texto de beneficio para editorial mediana - con tipo explícito
  const getBenefitText = (tool: Tool): string => {
    return tool.benefitsMedium;
  };

  // Función para obtener color de puntuación - con tipo explícito
  const getScoreColor = (score: number): string => {
    if (score >= 4.5) return '#1f202f'; // Color principal
    if (score >= 4.0) return '#4C4D5C'; // Versión más clara del color principal
    if (score >= 3.5) return '#79787e'; // Color secundario
    if (score >= 3.0) return '#969598'; // Versión más clara del secundario
    return '#ACACAC'; // Gris
  };

  // Función para renderizar puntuación con estilo visual - con tipo explícito
  const renderScore = (score: number) => {
    return (
      <div className="flex items-center">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center mr-1"
          style={{ 
            backgroundColor: getScoreColor(score),
            color: score >= 3.5 ? '#fff' : '#000',
          }}
        >
          {score.toFixed(1)}
        </div>
        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full" 
            style={{ 
              width: `${score * 20}%`,
              backgroundColor: getScoreColor(score)
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen w-full flex flex-col" style={{ 
      backgroundColor: slide8Colors.lightBg,
      color: slide8Colors.text,
      overflow: 'hidden',
    }}>
      {/* Encabezado */}
      <div className="p-4 pb-2">
        <div className="rounded-lg shadow-md p-3 mb-2 bg-gradient-to-r" style={{
          background: `linear-gradient(90deg, ${slide8Colors.primary}, ${slide8Colors.secondary})`,
        }}>
          <h2 className="text-3xl font-bold text-center" style={{ color: slide8Colors.lightText }}>
            Matriz de Selección para SGEL ELE
          </h2>
        </div>
        <p className="text-center text-base" style={{ color: slide8Colors.primary, fontWeight: 500 }}>
          Planes empresariales de IA para editoriales de español como lengua extranjera
        </p>
      </div>
      
      {/* Selectores de filtros en una sola fila, sin selector de tamaño */}
      <div className="px-4 py-2 flex flex-wrap gap-2">
        {/* Selector de categoría de necesidades */}
        <div className="flex-1 min-w-[300px]">
          <label className="block text-sm font-medium mb-1">Necesidad principal</label>
          <select 
            className="w-full rounded-md border border-gray-300 p-2 bg-white"
            value={selectedNeedsCategory}
            onChange={(e) => setSelectedNeedsCategory(e.target.value)}
            style={{ borderColor: slide8Colors.neutral }}
          >
            {needsCategories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        
        {/* Selector de nivel de presupuesto */}
        <div className="flex-1 min-w-[300px]">
          <label className="block text-sm font-medium mb-1">Presupuesto</label>
          <select 
            className="w-full rounded-md border border-gray-300 p-2 bg-white"
            value={selectedBudgetLevel}
            onChange={(e) => setSelectedBudgetLevel(e.target.value)}
            style={{ borderColor: slide8Colors.neutral }}
          >
            {budgetLevels.map(level => (
              <option key={level.id} value={level.id}>{level.name}</option>
            ))}
          </select>
        </div>
        
        {/* Selector de criterio de ordenación */}
        <div className="flex-1 min-w-[300px]">
          <label className="block text-sm font-medium mb-1">Ordenar por</label>
          <select 
            className="w-full rounded-md border border-gray-300 p-2 bg-white"
            value={selectedCriterion}
            onChange={(e) => setSelectedCriterion(e.target.value)}
            style={{ borderColor: slide8Colors.neutral }}
          >
            {criteria.map(criterion => (
              <option key={criterion.id} value={criterion.id}>{criterion.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Contenido principal - Lista de herramientas recomendadas */}
      <div className="flex-1 p-3 overflow-y-auto">
        {sortedTools.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-lg italic" style={{ color: slide8Colors.accent }}>
              No se encontraron herramientas que coincidan con los criterios seleccionados.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedTools.map((tool, index) => (
              <div 
                key={tool.name}
                className="p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.005]"
                style={{ 
                  backgroundColor: index === 0 ? `${slide8Colors.secondary}15` : 'white',
                  borderLeft: `4px solid ${
                    index === 0 ? slide8Colors.primary : 
                    index < 3 ? slide8Colors.secondary : 
                    slide8Colors.neutral
                  }`,
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex flex-col items-start">
                    {index === 0 && (
                      <div className="bg-gray-200 text-gray-800 text-xs font-medium py-1 px-2 rounded mb-2">
                        Recomendación principal
                      </div>
                    )}
                    {index === 1 && (
                      <div className="bg-gray-200 text-gray-800 text-xs font-medium py-1 px-2 rounded mb-2">
                        Especialista ELE
                      </div>
                    )}
                    <div className="flex items-center">
                      {index < 3 && (
                        <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm"
                          style={{ 
                            backgroundColor: index === 0 ? slide8Colors.primary : slide8Colors.secondary,
                            color: slide8Colors.lightText
                          }}
                        >
                          {index + 1}
                        </div>
                      )}
                      <h3 className="text-lg font-bold" style={{ color: slide8Colors.primary }}>
                        {tool.name}
                      </h3>
                    </div>
                    <div className="text-sm mt-1">
                      <span className="font-medium">Categoría:</span> {tool.category === 'general' ? 'IA General' : 
                                                                       tool.category === 'educacion' ? 'Educación' :
                                                                       tool.category === 'ele' ? 'ELE Específico' :
                                                                       tool.category === 'metadatos' ? 'Metadatos' :
                                                                       tool.category === 'workflow' ? 'Flujos de trabajo' :
                                                                       tool.category === 'marketing' ? 'Marketing' :
                                                                       'Otros'}
                    </div>
                  </div>
                  
                  {/* Panel de costos empresariales */}
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-semibold mb-1" style={{ color: slide8Colors.primary }}>Planes empresariales:</div>
                    <div className="text-sm p-2 bg-gray-50 rounded border border-gray-100 max-w-[280px] text-right">
                      {tool.costs}
                    </div>
                  </div>
                </div>
                
                {/* Tabla de puntuaciones */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-2">
                  <div className="bg-gray-50 p-1 rounded">
                    <div className="text-xs font-medium mb-1">Valoración global</div>
                    {renderScore(tool.rating)}
                  </div>
                  <div className="bg-gray-50 p-1 rounded">
                    <div className="text-xs font-medium mb-1">Coste-valor</div>
                    {renderScore(tool.costValue)}
                  </div>
                  <div className="bg-gray-50 p-1 rounded">
                    <div className="text-xs font-medium mb-1">Facilidad aprendizaje</div>
                    {renderScore(tool.learning)}
                  </div>
                  <div className="bg-gray-50 p-1 rounded">
                    <div className="text-xs font-medium mb-1">Implementación</div>
                    {renderScore(tool.implementation)}
                  </div>
                  <div className="bg-gray-50 p-1 rounded">
                    <div className="text-xs font-medium mb-1">Especialización ELE</div>
                    {renderScore(tool.eleSpecialization)}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-gray-50 p-2 rounded text-sm">
                    <div className="font-medium mb-1" style={{ color: slide8Colors.primary }}>Beneficios específicos para SGEL:</div>
                    {getBenefitText(tool)}
                  </div>
                  <div className="bg-gray-50 p-2 rounded text-sm">
                    <div className="font-medium mb-1" style={{ color: slide8Colors.primary }}>Limitaciones:</div>
                    {tool.limitations}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Pie con leyenda */}
      <div className="p-3 pt-2">
        <div className="border-t text-sm text-center pt-2" style={{ borderColor: slide8Colors.neutral }}>
          <span className="italic" style={{ color: slide8Colors.primary }}>
            "Para SGEL ELE, la combinación óptima de herramientas IA potenciará su especialización en la enseñanza del español como lengua extranjera."
          </span>
        </div>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 8
// =======================================================================
// =======================================================================
// DIAPOSITIVA 9: HAPPY FOR YOU - BENEFICIOS SLM VS MÚLTIPLES HERRAMIENTAS
// =======================================================================
const Diapositiva9 = () => {
  const [activeTab, setActiveTab] = useState('costos');
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  
  // Paleta de colores específica para esta diapositiva
  const slide9Colors = {
    darkGreen: '#0d1b11',    // color1
    mediumGreen: '#263c26',  // color2
    oliveGreen: '#50643e',   // color3
    lightGreen: '#849754',   // color4
    paleGreen: '#c7cf73',    // color5
    white: '#ffffff',
    lightText: '#f5f5f5',
    darkText: '#333333',
    highlight: '#ffeb3b',
    bgLight: '#f8f9f4',
  };

  // Datos comparativos entre SLM propio y soluciones de múltiples herramientas
  const comparisonData = {
    costos: [
      {
        category: "Inversión inicial",
        slm: "10.000-50.000€ para desarrollo y entrenamiento (2-7B parámetros)",
        alternatives: "0-50€/mes por usuario inicial (múltiples suscripciones)",
        advantage: "Menor para enfoque de múltiples herramientas a corto plazo",
        icon: "💰"
      },
      {
        category: "Costos operativos",
        slm: "500-2.000€/mes (hospedaje y mantenimiento)",
        alternatives: "200-800€/mes para conjunto completo de herramientas en equipo de 10 personas",
        advantage: "Predecibles con SLM vs. escalado por herramienta y usuario",
        icon: "📊"
      },
      {
        category: "Escalabilidad",
        slm: "Coste fijo independiente del número de usuarios y consultas",
        alternatives: "Incremento proporcional al ampliar herramientas, usuarios y uso",
        advantage: "Superior con SLM para crecimiento editorial y uso intensivo",
        icon: "📈"
      },
      {
        category: "Actualizaciones",
        slm: "Reentrenamiento periódico con nuevos materiales propios",
        alternatives: "Dependencia de actualizaciones de múltiples proveedores",
        advantage: "Mayor control y personalización con SLM propio",
        icon: "🔄"
      },
      {
        category: "ROI",
        slm: "Recuperación estimada en 8-14 meses con uso intensivo",
        alternatives: "Beneficio inmediato pero mayores costos acumulativos",
        advantage: "SLM ventajoso a largo plazo para editoriales medianas-grandes",
        icon: "💎"
      }
    ],
    implementacion: [
      {
        category: "Tiempo de despliegue",
        slm: "2-3 meses para desarrollo y entrenamiento del modelo",
        alternatives: "Horas-días para configurar cada herramienta individual",
        advantage: "Implementación más rápida con múltiples herramientas",
        icon: "⏱️"
      },
      {
        category: "Recursos técnicos",
        slm: "Equipo especializado en NLP/ML y procesamiento de datos",
        alternatives: "Expertos en cada plataforma, gestión multiproveedor",
        advantage: "Menor especialización técnica para herramientas externas",
        icon: "👨‍💻"
      },
      {
        category: "Infraestructura",
        slm: "Servidores dedicados (GPU/CPU) para entrenamiento e inferencia",
        alternatives: "Sin infraestructura propia, dependencia de SaaS externos",
        advantage: "Menor inversión hardware con múltiples herramientas",
        icon: "🖥️"
      },
      {
        category: "Integración",
        slm: "Desarrollo único con APIs personalizadas para cada proceso",
        alternatives: "Múltiples integraciones y sincronización entre herramientas",
        advantage: "Mayor cohesión y uniformidad con SLM propio",
        icon: "🔗"
      },
      {
        category: "Mantenimiento",
        slm: "Equipo dedicado para mantener un único sistema",
        alternatives: "Gestión de múltiples cuentas, licencias y actualizaciones",
        advantage: "Menor complejidad administrativa con SLM unificado",
        icon: "🔧"
      }
    ],
    beneficios: [
      {
        category: "Especialización ELE",
        slm: "Modelo específicamente entrenado con corpus ELE propio",
        alternatives: "Combinación de herramientas generales y especializadas",
        advantage: "Mayor precisión y contextualización cultural con SLM propio",
        icon: "🎯"
      },
      {
        category: "Privacidad de datos",
        slm: "Total control sobre datos editoriales y materiales sensibles",
        alternatives: "Exposición de contenido a múltiples proveedores externos",
        advantage: "Garantía de confidencialidad superior con SLM propio",
        icon: "🔒"
      },
      {
        category: "Coherencia estilística",
        slm: "Estilo y tono consistente en todos los materiales generados",
        alternatives: "Variaciones estilísticas entre diferentes herramientas",
        advantage: "Mayor uniformidad editorial con sistema único",
        icon: "✒️"
      },
      {
        category: "Flujo de trabajo",
        slm: "Sistema unificado para todos los procesos editoriales",
        alternatives: "Cambio entre interfaces y sistemas según la tarea",
        advantage: "Mejor experiencia de usuario y curva de aprendizaje con SLM",
        icon: "🔄"
      },
      {
        category: "Valor diferencial",
        slm: "Tecnología propietaria y ventaja competitiva estratégica",
        alternatives: "Acceso a tecnologías también disponibles para competidores",
        advantage: "Diferenciación clara en el mercado ELE con solución propia",
        icon: "⭐"
      }
    ]
  };

  // Tabs para cambiar entre categorías
  const tabs = [
    { id: 'costos', label: 'Análisis de Costos' },
    { id: 'implementacion', label: 'Implementación' },
    { id: 'beneficios', label: 'Beneficios Editoriales' },
  ];

  // Renderizando la tabla comparativa según la tab activa
  const renderComparisonTable = () => {
    const data = comparisonData[activeTab as keyof typeof comparisonData] || [];
    
    return (
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2" style={{ borderColor: slide9Colors.oliveGreen }}>
              <th className="py-3 px-4 text-left" style={{ color: slide9Colors.darkGreen, width: '22%' }}>Criterio</th>
              <th className="py-3 px-4 text-left" style={{ color: slide9Colors.darkGreen, width: '30%' }}>SLM Propio Unificado</th>
              <th className="py-3 px-4 text-left" style={{ color: slide9Colors.darkGreen, width: '30%' }}>Múltiples Herramientas Especializadas</th>
              <th className="py-3 px-4 text-left" style={{ color: slide9Colors.darkGreen, width: '18%' }}>Ventaja</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={index} 
                className="border-b transition-all duration-300"
                style={{ 
                  borderColor: slide9Colors.paleGreen + '50',
                  backgroundColor: hoveredFeature === item.category ? slide9Colors.bgLight : 'transparent',
                  transform: hoveredFeature === item.category ? 'scale(1.01)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredFeature(item.category)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <td className="py-3 px-4 font-medium" style={{ color: slide9Colors.mediumGreen }}>
                  <div className="flex items-center">
                    <span className="mr-2 text-xl">{item.icon}</span>
                    <span>{item.category}</span>
                  </div>
                </td>
                <td className="py-3 px-4" style={{ color: slide9Colors.oliveGreen }}>
                  {item.slm}
                </td>
                <td className="py-3 px-4" style={{ color: slide9Colors.oliveGreen }}>
                  {item.alternatives}
                </td>
                <td className="py-3 px-4 font-medium" style={{ 
                  color: item.advantage.includes("SLM") ? slide9Colors.mediumGreen : 
                         item.advantage.includes("múltiples") ? slide9Colors.lightGreen : 
                         slide9Colors.oliveGreen
                }}>
                  {item.advantage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Renderizando casos de estudio según la tab activa
  const renderCaseStudies = () => {
    if (activeTab === 'costos') {
      return (
        <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: slide9Colors.bgLight, border: `1px solid ${slide9Colors.paleGreen}` }}>
          <h4 className="font-bold mb-2" style={{ color: slide9Colors.mediumGreen }}>Caso de Análisis: Editoriales Educativas ELE</h4>
          <p style={{ color: slide9Colors.oliveGreen }}>
            Una editorial educativa de tamaño medio con producción anual de 20-30 títulos ELE puede gastar entre 25.000-40.000€ anuales 
            en múltiples herramientas IA especializadas. Un SLM propio de 3B parámetros adaptado específicamente para ELE representa 
            una inversión inicial de ~30.000€ con costos operativos anuales de ~15.000€, generando un ROI positivo
            a partir del segundo año.
          </p>
        </div>
      );
    } else if (activeTab === 'implementacion') {
      return (
        <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: slide9Colors.bgLight, border: `1px solid ${slide9Colors.paleGreen}` }}>
          <h4 className="font-bold mb-2" style={{ color: slide9Colors.mediumGreen }}>Estrategia Híbrida Recomendada</h4>
          <p style={{ color: slide9Colors.oliveGreen }}>
            La estrategia óptima combina un enfoque híbrido: comenzar con herramientas especializadas existentes para 
            procesos inmediatos mientras se desarrolla paralelamente un SLM propio ELE. Implementar migración gradual 
            hacia el SLM, iniciando con creación de contenidos y conservando herramientas especializadas para metadatado 
            visual y marketing complejo hasta que el SLM alcance madurez suficiente.
          </p>
        </div>
      );
    } else {
      return (
        <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: slide9Colors.bgLight, border: `1px solid ${slide9Colors.paleGreen}` }}>
          <h4 className="font-bold mb-2" style={{ color: slide9Colors.mediumGreen }}>Análisis Comparativo de Calidad</h4>
          <p style={{ color: slide9Colors.oliveGreen }}>
            Pruebas realizadas con editoriales del sector ELE demuestran que un SLM propio entrenado con corpus especializado 
            ofrece hasta un 35% más de precisión en terminología educativa y contextos culturales hispanohablantes 
            frente a herramientas generales. Esta mejora de calidad se refleja directamente en materiales didácticos 
            más precisos y culturalmente adaptados, mientras que la coherencia entre diferentes tipos de contenido 
            mejora en un 40% comparado con el uso de múltiples herramientas.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="h-screen w-full flex flex-col p-5" style={{ backgroundColor: slide9Colors.white }}>
      {/* Encabezado */}
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: slide9Colors.darkGreen }}>
            Happy For You
          </h1>
          <h2 className="text-xl font-semibold mb-1" style={{ color: slide9Colors.lightGreen }}>
            SLM unificado vs. múltiples herramientas especializadas
          </h2>
          <p className="text-sm" style={{ color: slide9Colors.oliveGreen }}>
            Ventajas competitivas para editoriales educativas ELE
          </p>
        </div>
      </div>

      {/* Pestañas de navegación */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-2 p-1 rounded-lg" style={{ backgroundColor: slide9Colors.bgLight }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === tab.id ? 'shadow-md' : ''
              }`}
              style={{
                backgroundColor: activeTab === tab.id ? slide9Colors.lightGreen : 'transparent',
                color: activeTab === tab.id ? slide9Colors.white : slide9Colors.mediumGreen,
                transform: activeTab === tab.id ? 'scale(1.05)' : 'scale(1)',
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-sm border" 
        style={{ borderColor: slide9Colors.paleGreen + '50' }}>
        {/* Tabla comparativa */}
        {renderComparisonTable()}
        
        {/* Estudios de caso */}
        <div className="px-4 pt-2 pb-4">
          {renderCaseStudies()}
        </div>
      </div>

      {/* Cita/Conclusión */}
      <div className="mt-4 text-center">
        <p className="text-sm italic" style={{ color: slide9Colors.oliveGreen }}>
          "Un SLM propio unificado representa más que una herramienta tecnológica; constituye un activo estratégico 
          que integra todos los procesos editoriales con un enfoque coherente y especializado en ELE."
        </p>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 9
// =======================================================================

// DIAPOSITIVA 10: REESCRIBIENDO LA ARQUITECTURA (FUENTES Y PROPUESTA)
// =======================================================================
// No se necesitan importaciones adicionales si React (useState, useEffect) ya está en el ámbito.

const Diapositiva10 = () => {
  const [activeCorpus, setActiveCorpus] = useState(1);
  
  // Paleta de colores específica para esta diapositiva
  const slide13Colors = {
    green: "#627D49",
    gold: "#C7954F",
    light: "#EAECF2", // Fondo principal de la diapositiva
    lavender: "#D2C8D8",
    purple: "#B780A2",
    white: "#FFFFFF", // Para fondos de tarjetas
    textSecondary: "#5A5A5A", // Un gris para texto secundario
  };

  interface Fuente {
    id: number;
    title: string;
    description: string;
  }

  interface Inspiracion {
      name: string;
      url: string;
      description: string;
  }

  const fuentesData: Fuente[] = [
    { id: 1, title: "ALIA: IA del Gobierno de España", description: "Corpus lingüístico oficial con enfoque en español y lenguas cooficiales" },
    { id: 2, title: "Plan Curricular Instituto Cervantes", description: "Metadatado estructurado del plan curricular y niveles de referencia para ELE" },
    { id: 3, title: "Colocaciones y combinaciones léxicas", description: "Corpus especializado en colocaciones y combinatoria léxica del español" },
    { id: 4, title: "Gramática de construcciones por nivel", description: "Metadatado de estructuras gramaticales organizadas por niveles MCER (A1-C2)" },
    { id: 5, title: "Fuente adicional integrada", description: "Exámenes DELE y materiales de profesores y estudiantes" }
  ];
  
  // Tipado para el mapa de iconos
  const IconsMap: { [key: number]: () => React.ReactNode } = {
    1: () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect> <line x1="10" y1="8" x2="10" y2="20"></line> <line x1="14" y1="8" x2="14" y2="20"></line> <path d="M4 4h16"></path> <path d="M9 4V2"></path> <path d="M15 4V2"></path> </svg> ),
    2: () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path> <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path> </svg> ),
    3: () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polyline points="4 7 4 4 20 4 20 7"></polyline> <line x1="9" y1="20" x2="15" y2="20"></line> <line x1="12" y1="4" x2="12" y2="20"></line> </svg> ),
    4: () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M3 3v18h18"></path> <path d="M7 12v5"></path> <path d="M11 6v11"></path> <path d="M15 10v7"></path> <path d="M19 5v13"></path> </svg> ),
    5: () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path> <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect> </svg> )
  };

  const inspiraciónDigital: Inspiracion[] = [
    { name: "Hachette FLE", url: "https://www.ehachettefle.com/", description: "Plataforma integral para libros digitales de francés como lengua extranjera" },
    { name: "Klett Sprachen", url: "https://www.klett-sprachen.de/deutsch-als-fremdsprache/c-18", description: "Soluciones digitales para la enseñanza del alemán como lengua extranjera" },
    { name: "Klett Digitales", url: "https://www.klett-sprachen.de/digitales/c-4499", description: "Innovaciones digitales para el aprendizaje de idiomas" }
  ];

  // Subcomponente para el contenido dinámico
  const RenderActiveContent = () => {
    const activeData = fuentesData.find(f => f.id === activeCorpus);
    if (!activeData) return null;

    // Estilos base para las tarjetas de contenido
    const cardStyle = { backgroundColor: `${slide13Colors.lavender}20`, color: slide13Colors.green }; // Fondo lavanda muy sutil
    const textStyle = { color: slide13Colors.green };
    const headingStyle = { color: slide13Colors.purple };

    switch(activeCorpus) {
      case 1: return (
        <div className="p-4 md:p-6 rounded-lg text-left text-sm md:text-base" style={cardStyle}>
          <p className="mb-3" style={textStyle}>ALIA es una familia de modelos de IA del Gobierno de España que incluye modelos de lenguaje entrenados con datos en español y en las lenguas cooficiales.</p>
          <p style={textStyle}>Coordinado por el Barcelona Supercomputing Center (BSC-CNS), forma parte de la Estrategia de IA 2024.</p>
        </div> );
      case 2: return (
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(nivel => (
            <div key={nivel} className="px-2 py-3 md:px-4 md:py-6 rounded-lg text-center font-light" style={{ backgroundColor: `${slide13Colors.lavender}20` }}>
              <span className={`text-lg md:text-2xl font-semibold ${ nivel.startsWith('A') ? 'text-green-700' : nivel.startsWith('B') ? 'text-yellow-700' : 'text-purple-700' }`}>{nivel}</span>
            </div> ))}
        </div> );
      case 3: return (
        <div className="p-4 md:p-6 rounded-lg text-left text-sm md:text-base" style={cardStyle}>
          <dl className="space-y-3">
            <div> <dt className="font-medium" style={headingStyle}>Colocaciones:</dt> <dd className="ml-4" style={textStyle}>Combinaciones frecuentes de palabras.</dd> </div>
            <div> <dt className="font-medium" style={headingStyle}>Fraseología:</dt> <dd className="ml-4" style={textStyle}>Expresiones idiomáticas y modismos.</dd> </div>
            <div> <dt className="font-medium" style={headingStyle}>Registro:</dt> <dd className="ml-4" style={textStyle}>Clasificación por contextos de uso.</dd> </div>
          </dl>
        </div> );
      case 4: return (
        <div className="p-4 md:p-6 rounded-lg text-left font-mono text-xs md:text-sm" style={cardStyle}>
          <pre className="whitespace-pre-wrap" style={textStyle}>
{`{
  "nivel": "A1",
  "construcción": "querer + infinitivo",
  "ejemplo": "Quiero aprender español",
  "frecuencia": "alta",
  "prioridad": 1
}`}
          </pre>
        </div> );
      case 5: return (
        <div className="p-4 md:p-6 rounded-lg text-left text-sm md:text-base" style={cardStyle}>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-2" style={{ backgroundColor: slide13Colors.lavender }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={slide13Colors.purple} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> <span style={textStyle}>Exámenes DELE (todos los niveles)</span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-2" style={{ backgroundColor: slide13Colors.lavender }}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={slide13Colors.purple} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> <span style={textStyle}>Materiales de profesores y estudiantes</span>
            </li>
          </ul>
        </div> );
      default: return null;
    }
  };

  const activeFuente = fuentesData.find(f => f.id === activeCorpus);

  return (
    <div className="h-screen w-full flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden" style={{ backgroundColor: slide13Colors.light }}>
      {/* Encabezado */}
      <div className="mb-6 md:mb-8 text-center flex-shrink-0">
        <h1 className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3" style={{ color: slide13Colors.green }}>
          Reescribiendo la arquitectura
        </h1>
        <h2 className="text-lg sm:text-xl font-light" style={{ color: slide13Colors.gold }}>
          Una propuesta estratégica para el mercado ELE
        </h2>
      </div>

      {/* Contenedor Principal con Scroll */}
      <div className="flex-grow flex flex-col overflow-y-auto min-h-0 pr-2"> {/* Scroll aplicado aquí */}
        
        {/* Fuentes de Alimentación */}
        <div className="bg-white rounded-lg mb-8 md:mb-12 shadow-sm border border-gray-100 p-4 md:p-6">
          <h3 className="text-xl sm:text-2xl font-light mb-6 text-center" style={{ color: slide13Colors.green }}>
            Fuentes de alimentación
          </h3>
          <div className="flex justify-center flex-wrap gap-2 mb-6 md:mb-8">
            {fuentesData.map(fuente => (
              <button
                key={fuente.id}
                className="p-2 sm:p-3 rounded-full transition-all border hover:shadow-md"
                style={{ 
                  backgroundColor: activeCorpus === fuente.id ? slide13Colors.lavender : slide13Colors.white,
                  borderColor: activeCorpus === fuente.id ? slide13Colors.purple : slide13Colors.lavender,
                }}
                onClick={() => setActiveCorpus(fuente.id)}
                aria-label={fuente.title} // Accesibilidad
              >
                <span style={{ color: activeCorpus === fuente.id ? slide13Colors.purple : slide13Colors.gold }}>
                  {IconsMap[fuente.id]()}
                </span>
              </button>
            ))}
          </div>
          
          {activeFuente && (
            <div className="max-w-3xl mx-auto text-center px-2 sm:px-4 pb-4 md:pb-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: slide13Colors.purple }}>
                {activeFuente.title}
              </h4>
              <p className="text-sm sm:text-base mb-4 sm:mb-6" style={{ color: slide13Colors.textSecondary }}>
                {activeFuente.description}
              </p>
              <RenderActiveContent />
            </div>
          )}
        </div>
        
        {/* Propuesta de Arquitectura Editorial */}
        <div className="w-full mb-8 md:mb-12">
          <h3 className="text-xl sm:text-2xl font-light mb-6 md:mb-8 text-center" style={{ color: slide13Colors.green }}>
            Inspiración: Arquitectura editorial digital
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {inspiraciónDigital.map((plataforma, idx) => (
              <div 
                key={idx} 
                className="bg-white border rounded-lg overflow-hidden hover:shadow-sm transition-shadow p-4 md:p-6"
                style={{ borderColor: slide13Colors.lavender }}
              >
                <h4 className="text-base sm:text-lg font-medium mb-2" style={{ color: slide13Colors.purple }}>{plataforma.name}</h4>
                <p className="mb-3 text-xs sm:text-sm" style={{ color: slide13Colors.textSecondary }}>{plataforma.description}</p>
                <a 
                  href={plataforma.url} // Usar la URL real
                  target="_blank" // Abrir en nueva pestaña
                  rel="noopener noreferrer" // Seguridad
                  className="text-xs sm:text-sm hover:underline block truncate" // Truncate si es muy larga
                  style={{ color: slide13Colors.gold }}
                >
                  {plataforma.url.replace(/^https?:\/\//, '')} {/* Quitar http(s):// */}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Conclusión */}
        <div className="w-full mt-auto text-center pt-6"> {/* mt-auto para empujar al fondo si hay espacio */}
          <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4" style={{ color: slide13Colors.purple }}>
            Hacia una nueva integración de soluciones
          </h3>
          <p className="max-w-2xl mx-auto text-sm sm:text-base" style={{ color: slide13Colors.green }}>
            La combinación de fuentes de alimentación especializadas con arquitecturas editoriales 
            inspiradas en plataformas digitales de vanguardia permite crear materiales ELE 
            adaptados a las necesidades actuales del mercado.
          </p>
        </div>
      </div> {/* Fin del contenedor con scroll */}
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 10
// =======================================================================

// =======================================================================
// DIAPOSITIVA 11: UN MILLÓN DE DATOS (ESTRUCTURA MODULAR LIA)
// =======================================================================
// No se necesita importar 'lucide-react'. Se asume que React (useState) está disponible.

const Diapositiva11 = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const slide14Colors = {
    primary: '#42373D',
    secondary: '#9A7EA6',
    tertiary: '#C4889F',
    quaternary: '#F8B2A1',
    accent: '#FDE2B1',
    background: '#FFFAF0',
    white: '#FFFFFF',
    textSecondary: '#5A5A5A',
  };

  interface Module {
      id: string;
      name: string;
      description: string;
      color: string;
      elements: string[];
  }

  const modules: Module[] = [
    { id: 'context', name: 'Módulo de Contexto', description: 'Se alimenta de la información del contexto de aprendizaje', color: slide14Colors.primary, elements: [ 'Caracterización por generaciones (beta, alpha, zeta, millennials)', 'Cantidad de estudiantes por clase', 'Horas lectivas anuales', 'Duración de las clases', 'Documentos rectores del proceso de aprendizaje', 'Políticas educativas por nivel de gobierno', 'Políticas asociadas con el uso de la IAG', 'Políticas para estudiantes con NEE', 'Estructura de los cursos y años de aprendizaje', 'Eventos educativos de relevancia' ] },
    { id: 'linguistic', name: 'Módulo Lingüístico', description: 'Desarrolla dos unidades de análisis: carga léxico semántica y variación pragmático gramatical', color: slide14Colors.secondary, elements: [ 'Componentes del Plan Curricular', 'Volumen complementario del MCERL', 'Gramática de las construcciones por nivel', 'Colocaciones y combinaciones léxicas por nivel', 'Destrezas de la lengua', 'Tipología de inputs', 'Tipos de enfoques o configuraciones de unidades didácticas' ] },
    { id: 'pedagogical', name: 'Módulo Pedagógico', description: 'Enfoque y estrategias para la enseñanza eficaz', color: slide14Colors.tertiary, elements: [ 'Tipos de actividades', 'Dinámicas de grupo', 'Estructura de las lecciones', 'Modelos de diseño instruccional', 'Tipología de evaluaciones', 'Tipos de enfoques o configuraciones' ] },
    { id: 'research', name: 'Módulo Investigativo', description: 'Base científica y actualización continua', color: slide14Colors.quaternary, elements: [ 'Investigaciones académicas', 'Estudios de campo', 'Análisis estadístico', 'Validación metodológica', 'Retroalimentación del usuario' ] }
  ];

  const handleModuleClick = (moduleId: string) => {
    setActiveModule(prevModule => prevModule === moduleId ? null : moduleId);
  };

  // Icono SVG simple para el chevron
  const ChevronIcon = ({ color = "currentColor", size = 20, className = "" }: { color?: string, size?: number, className?: string }) => (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
      >
          <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
  );


  return (
    <div className="h-screen w-full flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden" style={{ backgroundColor: slide14Colors.background }}>
      <div className="mb-6 md:mb-8 text-center flex-shrink-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2" style={{ color: slide14Colors.primary }}>
          Un millón de datos
        </h1>
      </div>

      <div className="flex-grow overflow-y-auto min-h-0 pr-2">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6" style={{ color: slide14Colors.primary }}>Estructura Modular de LIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {modules.map((module) => (
            <div key={module.id} className="mb-2 sm:mb-4">
              <div
                className="bg-white p-3 sm:p-4 rounded-lg shadow-md cursor-pointer flex items-center justify-between transition-shadow hover:shadow-lg"
                style={{ borderLeft: `5px solid ${module.color}` }}
                onClick={() => handleModuleClick(module.id)}
                role="button"
                aria-expanded={activeModule === module.id}
                aria-controls={`module-content-${module.id}`}
              >
                <div className="flex-grow pr-2">
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: module.color }}>{module.name}</h3>
                  <p className="text-xs sm:text-sm" style={{ color: slide14Colors.textSecondary }}>{module.description}</p>
                </div>
                <div className="flex-shrink-0">
                    {/* Reemplazo de ArrowRight por ChevronIcon */}
                    <ChevronIcon
                      size={20}
                      color={module.color}
                      className={`transform transition-transform duration-300 ${activeModule === module.id ? 'rotate-90' : 'rotate-0'}`}
                    />
                </div>
              </div>
              
              <div
                id={`module-content-${module.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeModule === module.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                 {activeModule === module.id && (
                    <div className="bg-white p-3 sm:p-4 mt-0 border-t border-gray-100 ml-1.5 rounded-b-lg shadow-inner">
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                        {module.elements.map((element, idx) => (
                          <li key={idx} className="text-xs sm:text-sm" style={{ color: slide14Colors.textSecondary }}>{element}</li>
                        ))}
                      </ul>
                    </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 11
// =======================================================================

// =======================================================================
// DIAPOSITIVA 12: ESTOS SOMOS NOSOTROS (AGENTES LIA)
// =======================================================================
// No se necesitan importaciones adicionales si React (useState) ya está en el ámbito.

const Diapositiva12 = () => {
  // Paleta de colores específica para esta diapositiva
  const slide15Colors = {
    darkOlive: '#3A3920',
    olive: '#807622',
    gold: '#EAA724',
    copper: '#D25B01',
    brown: '#5B1C02',
    white: '#FFFFFF',
    offWhite: '#F8F7F2', // Fondo de tarjetas inactivas
    black: '#1E1E1E',   // Texto principal
    background: '#FFFAF0' // Fondo crema suave general
  };

  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  interface Agent {
    id: string;
    name: string;
    description: string;
    color: string;
    icon: React.ReactNode;
  }

  const agents: Agent[] = [
    { id: 'evalia', name: 'EVALIA', description: 'Test diagnóstico y evaluación personalizada', color: slide15Colors.darkOlive, icon: ( <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* Reducido tamaño icono */} <path d="M20 16H44M20 32H44M20 48H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M12 16L16 12L20 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 32H16V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 48L16 44L12 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> <circle cx="50" cy="48" r="6" stroke="currentColor" strokeWidth="3"/> <path d="M53 48L49 48L49 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg> ) },
    { id: 'gracia', name: 'GracIA', description: 'Creación de lecciones fundamentadas en situaciones comunicativas, pragmática y gramática de las construcciones', color: slide15Colors.olive, icon: ( <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 48C16 41.373 21.373 36 28 36H36C42.627 36 48 41.373 48 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="3"/> <path d="M42 16L44 14M44 14L46 12M44 14L42 12M44 14L46 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M22 20V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M26 24H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M38 24H46" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> </svg> ) },
    { id: 'megaplan', name: 'MEGAPLAN', description: 'Creación de lecciones accesibles y gamificadas', color: slide15Colors.gold, icon: ( <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="3"/> <path d="M12 26H52" stroke="currentColor" strokeWidth="3"/> <path d="M26 26V52" stroke="currentColor" strokeWidth="3"/> <path d="M22 19L18 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M32 19L28 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M42 19L38 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M46 19H46.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M18 39L22 35L18 31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M36 39H42" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <circle cx="39" cy="46" r="3" stroke="currentColor" strokeWidth="3"/> </svg> ) },
    { id: 'psicodelea', name: 'PsicodeLIA', description: 'Configuración de avatares con sustrato psicológico para el aprendizaje de lenguas desarrollado con el modelo OCEAN (Big five)', color: slide15Colors.copper, icon: ( <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="3"/> <path d="M24 42C24 38.686 27.582 36 32 36C36.418 36 40 38.686 40 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M20 28C13.373 28 8 33.373 8 40C8 46.627 13.373 52 20 52M44 28C50.627 28 56 33.373 56 40C56 46.627 50.627 52 44 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M20 36V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M16 40H24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M44 36V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M40 40H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> </svg> ) },
    { id: 'sia', name: 'SIA', description: 'Sistema de inteligencia artificial asertiva: agente orientativo psicológico pensado como acompañante del profesorado', color: slide15Colors.brown, icon: ( <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 24C20 17.373 25.373 12 32 12C38.627 12 44 17.373 44 24V32C44 38.627 38.627 44 32 44C25.373 44 20 38.627 20 32V24Z" stroke="currentColor" strokeWidth="3"/> <path d="M32 44V52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M24 52H40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <circle cx="26" cy="28" r="2" fill="currentColor"/> <circle cx="38" cy="28" r="2" fill="currentColor"/> <path d="M26 36C28 38 34 38 38 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M44 24H48C50.2091 24 52 25.7909 52 28V28C52 30.2091 50.2091 32 48 32H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> <path d="M20 24H16C13.7909 24 12 25.7909 12 28V28C12 30.2091 13.7909 32 16 32H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/> </svg> ) }
  ];

  return (
    <div className="h-screen w-full flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden font-sans" style={{ backgroundColor: slide15Colors.background }}>
      {/* Encabezado */}
      <div className="flex flex-col items-center justify-center mb-6 md:mb-8 flex-shrink-0">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-center"
          style={{ color: slide15Colors.brown }}
        >
          Estos somos nosotros
        </h1>
        <h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center" /* Cambiado a font-semibold */
          style={{ color: slide15Colors.gold }}
        >
          Los agentes de LIA
        </h2>
      </div>

      {/* Contenedor de agentes */}
      <div className="flex-grow flex items-center justify-center overflow-y-auto min-h-0"> {/* Centrado vertical y scroll si es necesario */}
        {/* Ajuste de grid para diferentes pantallas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl w-full">
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className={`flex flex-col items-center justify-start transition-all duration-300 transform rounded-lg p-3 sm:p-4 cursor-pointer aspect-w-1 aspect-h-1`} // aspect ratio para mantener forma cuadrada
              style={{ 
                backgroundColor: hoveredAgent === agent.id ? agent.color : slide15Colors.offWhite,
                color: hoveredAgent === agent.id ? slide15Colors.white : agent.color,
                boxShadow: hoveredAgent === agent.id ? `0 8px 20px ${agent.color}50` : `0 4px 6px rgba(0,0,0,0.05)`, // Sombra más pronunciada al hacer hover
                transform: hoveredAgent === agent.id ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)', // Efecto hover mejorado
              }}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              {/* Icono */}
              <div
                className="p-3 sm:p-4 rounded-full mb-3 sm:mb-4 transition-colors duration-300 mt-2 flex-shrink-0" // mt para separar del borde superior
                style={{ 
                  backgroundColor: hoveredAgent === agent.id ? slide15Colors.white : agent.color,
                  color: hoveredAgent === agent.id ? agent.color : slide15Colors.white,
                }}
              >
                {agent.icon}
              </div>
              
              {/* Nombre */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-1 sm:mb-2 flex-shrink-0">
                {agent.name}
              </h3>
              
              {/* Descripción (con scroll interno si es muy larga) */}
              <div className="text-xs sm:text-sm text-center flex-grow overflow-y-auto px-1 w-full"> {/* Scroll para descripción larga */}
                <p>
                  {agent.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pie de diapositiva */}
      <div className="mt-4 md:mt-6 text-center flex-shrink-0">
        <p className="text-base sm:text-lg font-semibold italic" style={{ color: slide15Colors.darkOlive }}>
          "El mayor espectáculo en innovación educativa"
        </p>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 12
// =======================================================================

// =======================================================================
// DIAPOSITIVA 13: COBRANDO VIDA (AGENTES EVALIA Y PSICODELIA)
// =======================================================================
const Diapositiva13 = () => {
  const [activeTab, setActiveTab] = useState<'evalia' | 'psicodelia'>('evalia');
  const [activeTestType, setActiveTestType] = useState('rapido');
  const [activeOceanTrait, setActiveOceanTrait] = useState('o');

  const slide16Colors = {
    darkOlive: '#3A3920', olive: '#807622', gold: '#C7954F', copper: '#D25B01',
    brown: '#5B1C02', white: '#FFFFFF', offWhite: '#F8F7F2', black: '#1E1E1E',
    background: '#FFFAF0', evalia: '#3A3920', psicodelia: '#D25B01',
  };

  // --- Interfaces (como antes) ---
  interface OceanTrait { id: string; name: string; nameEs: string; color: string; description: string; example: string; low: string; high: string; textSample: string; }
  interface EvaliaTestLevel { level: string; minScore: string; maxScore: string; action: string; }
  interface EvaliaTestType { id: string; name: string; price: string; features: string[]; }
  interface PsicodeliaProfile { name: string; traits: { [key: string]: string }; description: string; teachingApproach: string; }

  // --- Datos (Completos) ---
  const oceanTraits: OceanTrait[] = [
    { id: 'o', name: 'Openness', nameEs: 'Apertura a la experiencia', color: '#627D49', description: 'Aprecio por el arte, la emoción, las ideas inusuales, la imaginación, la curiosidad y variedad de experiencias.', example: '', low: 'Convencional, prefiere lo familiar', high: 'Inventivo, curioso, valora experiencias nuevas', textSample: 'Me encanta explorar nuevas ideas y conceptos. Siempre estoy buscando formas innovadoras de enseñar español, incorporando actividades creativas que conecten con diferentes culturas...' },
    { id: 'c', name: 'Conscientiousness', nameEs: 'Responsabilidad', color: '#C7954F', description: 'Tendencia a mostrar autodisciplina, actuar responsablemente y preferir comportamientos planificados.', example: '', low: 'Impulsivo, desorganizado', high: 'Disciplinado, eficiente, organizado', textSample: 'Siempre organizo mis clases con anticipación, preparando materiales detallados y estableciendo objetivos claros para cada sesión. Soy meticuloso con las evaluaciones...' },
    { id: 'e', name: 'Extraversion', nameEs: 'Extraversión', color: '#807622', /* Color Oliva */ description: 'Energía, emociones positivas, tendencia a buscar estimulación y compañía de otros.', example: '', low: 'Reservado, reflexivo, prefiere estar solo', high: 'Sociable, asertivo, busca interacción', textSample: 'Disfruto enormemente de las clases donde puedo interactuar activamente con mis alumnos. Las actividades grupales y los debates en clase me llenan de energía...' },
    { id: 'a', name: 'Agreeableness', nameEs: 'Amabilidad', color: '#B4C6D0', /* Color Mist */ description: 'Tendencia a ser compasivo y cooperativo en lugar de suspicaz y antagonista hacia los demás.', example: '', low: 'Crítico, competitivo', high: 'Empático, cooperativo, confiado', textSample: 'Siempre busco entender las dificultades particulares de cada estudiante y adaptar mi enfoque para ayudarles mejor. Ofrezco tiempo adicional a quienes lo necesitan...' },
    { id: 'n', name: 'Neuroticism', nameEs: 'Neuroticismo', color: '#B780A2', /* Color Purple */ description: 'Tendencia a experimentar emociones negativas como ansiedad, ira o depresión con facilidad.', example: '', low: 'Calmado, emocionalmente estable', high: 'Sensible, nervioso, propenso a la preocupación', textSample: 'Me preocupa constantemente si estoy llegando a todos mis estudiantes de manera efectiva. Antes de las evaluaciones, suelo sentir ansiedad...' }
  ];
  const evaliaTestLevels: EvaliaTestLevel[] = [
    { level: 'A1', minScore: '0%', maxScore: '50%', action: 'Está dentro del nivel A1 más básico / grupo de A1' }, { level: 'A1', minScore: '50%', maxScore: '80%', action: 'Está dentro del nivel A1.2 umbral, realizar prueba escrita' }, { level: 'A1', minScore: '80%', maxScore: '100%', action: 'Pasa al nivel A2' },
    { level: 'A2', minScore: '0%', maxScore: '50%', action: 'Está dentro del nivel A2.1 más básico / grupo de A2' }, { level: 'A2', minScore: '50%', maxScore: '70%', action: 'Está dentro del nivel A2.1 básico, realizar prueba escrita' }, { level: 'A2', minScore: '71%', maxScore: '85%', action: 'Está dentro del nivel A2.2, realizar prueba escrita y oral' }, { level: 'A2', minScore: '85%', maxScore: '100%', action: 'Salta al nivel B1' },
    { level: 'B1', minScore: '0%', maxScore: '70%', action: 'Está dentro del nivel B1 más básico / grupo de B1' }, { level: 'B1', minScore: '71%', maxScore: '84%', action: 'Está en el nivel B1.1, puede realizar prueba' }, { level: 'B1', minScore: '85%', maxScore: '89%', action: 'Está en el nivel B1.2, realizar prueba escrita y oral' }, { level: 'B1', minScore: '90%', maxScore: '100%', action: 'Salta al nivel B2' },
    { level: 'B2', minScore: '0%', maxScore: '60%', action: 'Está dentro del nivel B2 más básico / grupo de B2' }, { level: 'B2', minScore: '60%', maxScore: '74%', action: 'Está en el nivel B2.1, puede realizar prueba' }, { level: 'B2', minScore: '75%', maxScore: '79%', action: 'Está en el nivel B2.2, realizar prueba escrita y oral' }, { level: 'B2', minScore: '80%', maxScore: '100%', action: 'Pasa al test nivel C1' },
    { level: 'C1', minScore: '0%', maxScore: '60%', action: 'Está dentro del nivel C1 más básico / grupo de C1' }, { level: 'C1', minScore: '60%', maxScore: '74%', action: 'Está en el nivel C1.1, puede realizar prueba' }, { level: 'C1', minScore: '75%', maxScore: '79%', action: 'Está en el nivel C1, realizar prueba escrita y oral' }, { level: 'C1', minScore: '80%', maxScore: '100%', action: 'Está dentro del nivel C1' }
  ];
  const evaliaTestTypes: EvaliaTestType[] = [
    { id: 'rapido', name: 'Test Rápido (MVP)', price: 'Gratuito/Pago opcional', features: ['16 preguntas/nivel (A1-C1)', 'Test gramatical cerrado', 'Producción opcional', 'Retroalimentación IA', 'Prueba oral opcional (5€)', 'Lector inmersivo'] },
    { id: 'completo', name: 'Test Completo', price: '5€ / 7.5€ (Pack)', features: ['20 preguntas/nivel (A2.1+)', '4 módulos (lectura, escucha, gramática, conversación)', 'Oral opcional (grabado/profesor)', 'Avance/retroceso dinámico', 'Gratuito para inscritos'] },
    { id: 'interactivo', name: 'Test Interactivo', price: 'Gratuito / 5€ (oral)', features: ['Chatbot conversacional', 'Adaptativo por nivel', 'Termina tras 4 fallos', 'Generación de contenido IA', 'Análisis en tiempo real', 'Uso para entrenamiento IA'] },
    { id: 'enrolado', name: 'Test Interactivo Enrolado', price: 'Pago (como completo)', features: ['Chatbot asume rol (amigo, profesional, evaluador)', 'Adaptado a motivación', 'Conversación adaptativa', 'Generación contenido IA', 'Evaluación personalizada'] }
  ];
  const psicodeliaPerfils: PsicodeliaProfile[] = [
    { name: 'Perfil Explorador', traits: { openness: 'Alto', conscientiousness: 'Medio', extraversion: 'Alto', agreeableness: 'Medio', neuroticism: 'Bajo' }, description: 'Ideal para estudiantes curiosos que disfrutan explorando nuevas ideas.', teachingApproach: 'Material diverso, desafíos creativos.' },
    { name: 'Perfil Estructurado', traits: { openness: 'Medio', conscientiousness: 'Alto', extraversion: 'Bajo', agreeableness: 'Medio', neuroticism: 'Bajo' }, description: 'Adecuado para estudiantes metódicos que prefieren rutinas claras.', teachingApproach: 'Planes detallados, evaluación consistente.' },
    { name: 'Perfil Colaborativo', traits: { openness: 'Medio', conscientiousness: 'Medio', extraversion: 'Alto', agreeableness: 'Alto', neuroticism: 'Bajo' }, description: 'Óptimo para estudiantes que aprenden mejor en entornos sociales.', teachingApproach: 'Debates grupales, proyectos colaborativos.' }
  ];


  // --- Definición de renderTestTypeContent ---
  const RenderTestTypeContent = () => { // Cambiado a componente para claridad
    const selectedTest = evaliaTestTypes.find(test => test.id === activeTestType);
    if (!selectedTest) return null;
    return (
      <div className="p-3 md:p-4 rounded-lg mt-2" style={{ backgroundColor: `${slide16Colors.evalia}10` }}>
        <h5 className="font-semibold text-sm md:text-base mb-2">{selectedTest.name}</h5>
        <p className="mb-2 text-xs md:text-sm"><strong>Precio:</strong> {selectedTest.price}</p>
        <div>
          <strong className="text-xs md:text-sm">Características:</strong>
          <ul className="list-disc pl-4 mt-1 space-y-1 text-xs md:text-sm">
            {selectedTest.features.map((feature, index) => ( <li key={index}>{feature}</li> ))}
          </ul>
        </div>
      </div>
    );
  };

  // --- Subcomponentes con Contenido Completo ---

  const RenderEvaliaContent = () => (
    <div className="p-4 md:p-6 rounded-lg" style={{ backgroundColor: slide16Colors.offWhite, color: slide16Colors.evalia }}>
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">EVALIA: Sistema de Test Diagnóstico</h3>
      
      {/* Sección Tipos de Test (Restaurada) */}
      <div className="mb-4 md:mb-6">
        <h4 className="text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Tipos de Test de Nivel</h4>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {evaliaTestTypes.map(test => (
            <button key={test.id} className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded focus:outline-none ${activeTestType === test.id ? 'text-white' : 'text-gray-700'}`}
                    style={{ backgroundColor: activeTestType === test.id ? slide16Colors.evalia : `${slide16Colors.evalia}15`, borderColor: slide16Colors.evalia, borderWidth: '1px' }}
                    onClick={() => setActiveTestType(test.id)}>
              {test.name.split('(')[0].trim()}
            </button>
          ))}
        </div>
        {/* Renderiza el contenido del test activo */}
        <RenderTestTypeContent /> 
      </div>

      {/* Sección Criterios de Evaluación (Restaurada) */}
      <div className="overflow-x-auto mt-4 md:mt-6">
        <h4 className="text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Criterios de Evaluación por Nivel</h4>
        <table className="min-w-full bg-white text-xs md:text-sm">
          <thead> 
            <tr className="bg-gray-100"> 
              <th className="py-2 px-3 border-b text-left">Nivel</th> 
              <th className="py-2 px-3 border-b text-left">Puntuación</th> 
              <th className="py-2 px-3 border-b text-left">Acción</th> 
            </tr> 
          </thead>
          <tbody> 
            {evaliaTestLevels.map((item, index) => ( 
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}> 
                <td className="py-1.5 px-3 border-b">{item.level}</td> 
                <td className="py-1.5 px-3 border-b">{item.minScore} - {item.maxScore}</td> 
                <td className="py-1.5 px-3 border-b">{item.action}</td> 
              </tr> 
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );

  const RenderPsicodeliaContent = () => (
    <div className="p-4 md:p-6 rounded-lg" style={{ backgroundColor: slide16Colors.offWhite, color: slide16Colors.psicodelia }}>
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">PsicodeLIA: Avatares con Sustrato Psicológico</h3>
      
      {/* Sección OCEAN (Restaurada) */}
      <div className="mb-4 md:mb-6">
        <h4 className="text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Modelo OCEAN / Big Five</h4>
        <p className="mb-3 text-xs md:text-sm">Analiza la personalidad en cinco dimensiones para crear perfiles de aprendizaje personalizados.</p>
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-md shadow-sm bg-white border border-gray-200">
            {oceanTraits.map(trait => (
              <button key={trait.id} className={`px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium focus:outline-none ${activeOceanTrait === trait.id ? 'text-white' : 'text-gray-700'} ${ trait.id === 'o' ? 'rounded-l-md' : trait.id === 'n' ? 'rounded-r-md' : '' }`}
                      style={{ backgroundColor: activeOceanTrait === trait.id ? trait.color : slide16Colors.white, borderColor: trait.color, borderRightWidth: trait.id === 'n' ? '1px' : '0', borderLeftWidth: '1px', borderTopWidth: '1px', borderBottomWidth: '1px' }}
                      onClick={() => setActiveOceanTrait(trait.id)}>
                {trait.name[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {(() => { // IIFE para renderizar el trait activo
          const trait = oceanTraits.find(t => t.id === activeOceanTrait);
          if (!trait) return null;
          return (
            <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: `${slide16Colors.psicodelia}10`, borderLeft: `4px solid ${trait.color}` }}>
              <div className="flex flex-col sm:flex-row justify-between mb-3">
                <div>
                  <h5 className="font-semibold text-sm md:text-base mb-1">{trait.nameEs} ({trait.name})</h5>
                  <p className="text-xs md:text-sm italic mb-2">{trait.description}</p>
                </div>
                <div className="sm:ml-4 mt-2 sm:mt-0 flex-shrink-0">
                  <div className="bg-white p-2 rounded shadow-sm text-center w-full sm:w-auto"> {/* Ajuste de ancho */}
                    <div className="text-xs font-medium mb-1">Escala:</div>
                    <div className="flex justify-between mb-1 gap-2"><span className="text-xs">{trait.low}</span><span className="text-xs">{trait.high}</span></div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full"><div className="h-1.5 rounded-full" style={{ width: '70%', backgroundColor: trait.color }}></div></div>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-xs md:text-sm mb-1">Ejemplo de texto (Alto {trait.nameEs}):</h6>
                <div className="bg-white p-2 rounded shadow-sm"><p className="italic text-xs md:text-sm" style={{ color: slide16Colors.psicodelia }}>"{trait.textSample}"</p></div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Sección Perfiles de Aprendizaje (Restaurada) */}
       <div className="mb-6">
        <h4 className="text-lg md:text-xl font-semibold mb-3">Perfiles de Aprendizaje Según OCEAN</h4>
        <div className="space-y-4">
          {psicodeliaPerfils.map((profile, index) => (
            <div 
              key={index} 
              className="p-3 md:p-4 rounded-lg border"
              style={{ borderColor: 'rgba(210, 91, 1, 0.3)' }} // Borde Cobre sutil
            >
              <h5 className="font-semibold text-sm md:text-base mb-2">{profile.name}</h5>
              <div className="mb-2 grid grid-cols-5 gap-1"> {/* Reducido gap */}
                {Object.entries(profile.traits).map(([traitKey, level]) => {
                   const traitInfo = oceanTraits.find(t => t.id === traitKey[0].toLowerCase());
                   return (
                     <div key={traitKey} className="text-center">
                       <div 
                         className="h-5 w-5 rounded-full mx-auto mb-0.5" // Tamaño reducido
                         style={{ 
                           backgroundColor: traitInfo?.color || slide16Colors.psicodelia,
                           opacity: level === 'Alto' ? 1 : level === 'Medio' ? 0.6 : 0.3
                         }}
                       ></div>
                       <span className="text-[10px] block">{traitKey[0].toUpperCase()}</span> {/* Tamaño muy pequeño */}
                       <span className="text-[10px] block">{level}</span>
                     </div>
                   );
                })}
              </div>
              <p className="text-xs md:text-sm mb-1">{profile.description}</p>
              <p className="text-xs md:text-sm italic"><strong>Enfoque:</strong> {profile.teachingApproach}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Ventajas (Restaurada) */}
       <div>
        <h4 className="text-lg md:text-xl font-semibold mb-3">Ventajas del Sistema PsicodeLIA</h4>
        <ul className="space-y-2 text-xs md:text-sm">
          <li className="flex items-start"> <svg className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: slide16Colors.psicodelia }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> <span>Materiales adaptados al perfil psicológico</span> </li>
          <li className="flex items-start"> <svg className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: slide16Colors.psicodelia }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> <span>Avatares con sustrato psicológico</span> </li>
          <li className="flex items-start"> <svg className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: slide16Colors.psicodelia }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> <span>Mayor retención y progreso</span> </li>
          <li className="flex items-start"> <svg className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: slide16Colors.psicodelia }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> <span>Integración con otros agentes LIA</span> </li>
        </ul>
      </div>
    </div>
  );

  // --- Componente principal de la diapositiva ---
  return (
    <div className="h-screen w-full flex flex-col p-3 sm:p-4 md:p-6 overflow-hidden font-sans" style={{ backgroundColor: slide16Colors.background }}>
      {/* Encabezado */}
      <div className="text-center mb-4 md:mb-6 flex-shrink-0"> <h1 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2" style={{ color: slide16Colors.brown }}> Cobrando vida </h1> <p className="text-lg sm:text-xl" style={{ color: slide16Colors.gold }}> Nuestros agentes más innovadores en acción </p> </div>
      {/* Selector de pestañas */}
      <div className="flex justify-center mb-3 md:mb-4 flex-shrink-0"> <div className="inline-flex rounded-md shadow-sm" role="group"> <button type="button" className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium focus:outline-none rounded-l-lg ${activeTab === 'evalia' ? 'text-white' : 'text-gray-700'}`} style={{ backgroundColor: activeTab === 'evalia' ? slide16Colors.evalia : slide16Colors.offWhite, borderColor: slide16Colors.evalia, borderWidth: '1px' }} onClick={() => setActiveTab('evalia')}> <div className="flex items-center"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 sm:mr-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-4-4H9m6-8H9m6 4H9m6 8v-8m-6 8v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> EVALIA </div> </button> <button type="button" className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium focus:outline-none rounded-r-lg ${activeTab === 'psicodelia' ? 'text-white' : 'text-gray-700'}`} style={{ backgroundColor: activeTab === 'psicodelia' ? slide16Colors.psicodelia : slide16Colors.offWhite, borderColor: slide16Colors.psicodelia, borderLeftWidth: '0', borderWidth: '1px' }} onClick={() => setActiveTab('psicodelia')}> <div className="flex items-center"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 sm:mr-2"><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M10 15H6a4 4 0 0 0-4 4v1h16v-1a4 4 0 0 0-4-4h-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M18 15l2-2m-8-4l-2 2m10-4l-2 2m-8 4l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> PsicodeLIA </div> </button> </div> </div>
      {/* Contenido de la pestaña activa con scroll */}
      <div className="flex-grow overflow-y-auto rounded-lg shadow-inner bg-white p-1"> {/* Quitado min-h-0 */}
        {activeTab === 'evalia' ? <RenderEvaliaContent /> : <RenderPsicodeliaContent />}
      </div>
      {/* Pie de página */}
      <div className="mt-4 text-center flex-shrink-0"> <p className="text-sm sm:text-base italic" style={{ color: slide16Colors.gold }}> "Personalización y adaptación para una experiencia educativa óptima" </p> </div>
    </div>
  );
};
// =======================================================================
// DIAPOSITIVA 14: ARQUITECTOS DE LA EXPERIENCIA EDUCATIVA (MEGAPLAN / GracIA)
// (Versión SIN pestaña PDF)
// =======================================================================

// Paleta de colores simplificada para esta diapositiva
const Diapositiva14Colors = {
  primary: '#3A3920',
  secondary: '#D25B01',
  accent: '#EAA724',
  light: '#F8F7F2',
  dark: '#1E1E1E',
};

// Componente para la Diapositiva 14
const Diapositiva14 = () => {
  const [activeTab, setActiveTab] = React.useState('megaplan');

  // Datos de MEGAPLAN y GracIA
  const megaplanData = { 
    title: "MEGAPLAN",
    subtitle: "Planificación de lecciones con IA",
    description: "Editor dirigido a profesores de español para la planificación de lecciones configuradas desde las propuestas del diseño instruccional, la gamificación, la accesibilidad, y la inclusividad en la enseñanza ELE.",
    modules: [
      { id: "me", name: "Megaplan 1 ME", description: "Descripción dosificada del grupo de clase y los objetivos educativos", details: ["Nivel de los estudiantes", "Cantidad de estudiantes", "Grado escolar", "Tipo de curso", "Unidad del curso", "Lección", "Objetivos lingüísticos"] },
      { id: "ga", name: "Megaplan 2 GA", description: "Configuración de la gamificación", details: ["Personalización de la gamificación", "Configuración de los elementos de la gamificación", "Correspondencia con el nivel de lengua", "Programa del curso y objetivos educativos"] },
      { id: "plan", name: "Megaplan 3 PLAN", description: "Configuración pedagógica para NEE y dinámicas de grupo", details: ["Correspondencia con el diseño instruccional de Gagné", "Afinamiento de actividades diferenciadas", "Adecuación de las dinámicas de grupo"] }
    ],
    benefits: ["Simplifica la planificación de clases adaptada a necesidades específicas", "Integra gamificación con bases pedagógicas sólidas", "Atiende a la diversidad y la inclusión en el aula", "Reduce el tiempo de preparación de lecciones", "Asegura coherencia metodológica en la enseñanza"]
  };
  
  const graciaData = { 
    title: "GracIA",
    subtitle: "Creación inteligente de lecciones",
    description: "Creación de lecciones fundamentadas en situaciones comunicativas, pragmática y gramática de las construcciones para el aprendizaje de español.",
    figmaLink: "https://www.figma.com/design/jFCVekCgnIri0U7PIQaxvc/Platform-Language-AI?node-id=0-1&t=2yiqID84nMapkjw6-1",
    features: [
      { id: "communication", name: "Situaciones comunicativas", description: "Genera contenidos basados en contextos reales de comunicación adaptados al nivel del estudiante", icon: "💬" },
      { id: "pragmatics", name: "Pragmática aplicada", description: "Integra aspectos socioculturales y pragmáticos del español en situaciones auténticas", icon: "🌍" },
      { id: "construction", name: "Gramática de construcciones", description: "Utiliza un enfoque basado en construcciones que facilita la adquisición natural de estructuras", icon: "🏗️" },
      { id: "ai", name: "IA generativa adaptativa", description: "Se adapta a las necesidades específicas del curso, objetivos y perfil de los estudiantes", icon: "🧠" }
    ],
    caseStudies: [{ title: "Escuelas de idiomas", results: "Reducción del 40% en tiempo de preparación y aumento del 35% en la retención de estudiantes" }],
    integrations: ["Zoho CRM para gestión centralizada de usuarios", "Plataforma Novelingo para la generación de experiencias gamificadas", "Exportación a formatos estándar (SCORM, xAPI)"]
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white p-6 font-sans overflow-hidden">
      <div className="text-center mb-6">
        <h1 
          className="text-4xl font-bold mb-1"
          style={{ color: Diapositiva14Colors.primary }}
        >
          Arquitectos de la Experiencia Educativa
        </h1>
        <p className="text-lg italic" style={{ color: Diapositiva14Colors.secondary }}>
          "Donde la tecnología se encuentra con la pedagogía para reinventar el aprendizaje"
        </p>
      </div>

      {/* Navegación entre pestañas con iconos - Botón PDF eliminado */}
      <div className="flex justify-center mb-6">
        <button 
          className={`px-6 py-3 rounded-l-lg font-semibold transition-all flex items-center ${activeTab === 'megaplan' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          style={{ backgroundColor: activeTab === 'megaplan' ? Diapositiva14Colors.primary : 'transparent', border: `1px solid ${Diapositiva14Colors.primary}` }}
          onClick={() => setActiveTab('megaplan')}
        >
          <div className="mr-2">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <rect x="12" y="12" width="40" height="40" rx="4" strokeWidth="2"/>
              <path d="M12 26H52" strokeWidth="2"/>
              <path d="M26 26V52" strokeWidth="2"/>
              <path d="M22 19L18 19" strokeWidth="2" strokeLinecap="round"/>
              <path d="M32 19L28 19" strokeWidth="2" strokeLinecap="round"/>
              <path d="M42 19L38 19" strokeWidth="2" strokeLinecap="round"/>
              <path d="M46 19H46.01" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 39L22 35L18 31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36 39H42" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="39" cy="46" r="3" strokeWidth="2"/>
            </svg>
          </div>
          MEGAPLAN
        </button>
        <button 
          className={`px-6 py-3 rounded-r-lg font-semibold transition-all flex items-center ${activeTab === 'gracia' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          style={{ 
            backgroundColor: activeTab === 'gracia' ? Diapositiva14Colors.primary : 'transparent', 
            borderTop: `1px solid ${Diapositiva14Colors.primary}`, 
            borderBottom: `1px solid ${Diapositiva14Colors.primary}`,
            borderRight: `1px solid ${Diapositiva14Colors.primary}`
          }}
          onClick={() => setActiveTab('gracia')}
        >
          <div className="mr-2">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path d="M16 48C16 41.373 21.373 36 28 36H36C42.627 36 48 41.373 48 48" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="32" cy="24" r="12" strokeWidth="2"/>
              <path d="M42 16L44 14M44 14L46 12M44 14L42 12M44 14L46 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 20V28" strokeWidth="2" strokeLinecap="round"/>
              <path d="M26 24H18" strokeWidth="2" strokeLinecap="round"/>
              <path d="M38 24H46" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          GracIA
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'megaplan' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            <div className="md:col-span-1 bg-gray-50 p-5 rounded-lg">
              <h2 className="text-2xl font-bold mb-3" style={{ color: Diapositiva14Colors.primary }}>
                {megaplanData.title}
              </h2>
              <h3 className="text-xl font-semibold mb-3" style={{ color: Diapositiva14Colors.secondary }}>
                {megaplanData.subtitle}
              </h3>
              <p className="mb-4 text-gray-700 text-sm">
                {megaplanData.description}
              </p>
              <h4 className="font-bold mt-6 mb-2" style={{ color: Diapositiva14Colors.secondary }}>
                Beneficios clave:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm">
                {megaplanData.benefits.map((benefit, idx) => (
                  <li key={idx} className="mb-1.5">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-4">
                {megaplanData.modules.map((module, idx) => (
                  <div 
                    key={module.id}
                    className="p-4 rounded-lg shadow-md border-l-4"
                    style={{ borderLeftColor: idx === 0 ? Diapositiva14Colors.primary : idx === 1 ? Diapositiva14Colors.secondary : Diapositiva14Colors.accent, backgroundColor: 'white' }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold" style={{ color: idx === 0 ? Diapositiva14Colors.primary : idx === 1 ? Diapositiva14Colors.secondary : Diapositiva14Colors.accent }}>
                        {module.name}
                      </h3>
                      <div className="w-7 h-7 flex items-center justify-center rounded-full" style={{ backgroundColor: idx === 0 ? Diapositiva14Colors.primary : idx === 1 ? Diapositiva14Colors.secondary : Diapositiva14Colors.accent }}>
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{module.description}</p>
                    <div className="mt-3">
                      <h4 className="font-semibold mb-1.5 text-sm">Características:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {module.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-center bg-gray-50 p-1.5 rounded">
                            <div className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: idx === 0 ? Diapositiva14Colors.primary : idx === 1 ? Diapositiva14Colors.secondary : Diapositiva14Colors.accent }}></div>
                            <span className="text-xs">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                 <h3 className="text-lg font-bold mb-3" style={{ color: Diapositiva14Colors.dark }}>
                  Flujo de trabajo con MEGAPLAN
                </h3>
                <div className="flex justify-between items-center relative pt-6">
                  <div 
                    className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0"
                    style={{ backgroundColor: Diapositiva14Colors.accent }}
                  ></div>
                  {['Config.', 'Gamif.', 'Adapt.', 'Gener.', 'Export.'].map((step, idx) => (
                    <div 
                      key={idx} 
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
                      style={{ 
                        backgroundColor: Diapositiva14Colors.light,
                        border: `2px solid ${Diapositiva14Colors.primary}`
                      }}
                    >
                      <div className="text-center">
                        <div className="font-bold text-lg" style={{ color: Diapositiva14Colors.primary }}>{idx + 1}</div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium">
                          {step}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gracia' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            <div className="md:col-span-1 bg-gray-50 p-5 rounded-lg">
              <h2 className="text-2xl font-bold mb-3" style={{ color: Diapositiva14Colors.primary }}>{graciaData.title}</h2>
              <h3 className="text-xl font-semibold mb-3" style={{ color: Diapositiva14Colors.secondary }}>{graciaData.subtitle}</h3>
              <p className="mb-4 text-gray-700 text-sm">{graciaData.description}</p>
              <h4 className="font-bold mt-6 mb-2 text-sm" style={{ color: Diapositiva14Colors.secondary }}>Caso de éxito:</h4>
              {graciaData.caseStudies.map((caseStudy, idx) => (
                <div key={idx} className="mb-3 p-3 bg-white rounded-lg shadow-sm">
                  <h5 className="font-semibold text-sm" style={{ color: Diapositiva14Colors.primary }}>{caseStudy.title}</h5>
                  <p className="text-xs text-gray-700">{caseStudy.results}</p>
                </div>
              ))}
              <h4 className="font-bold mt-6 mb-2 text-sm" style={{ color: Diapositiva14Colors.secondary }}>Diseño en Figma:</h4>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <a href={graciaData.figmaLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline text-xs">
                  <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5">
                    <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
                  </svg>
                  Ver diseño en Figma
                </a>
              </div>
              <h4 className="font-bold mt-6 mb-2 text-sm" style={{ color: Diapositiva14Colors.secondary }}>Integraciones:</h4>
              <ul className="list-disc pl-5 text-gray-700 text-xs">
                {graciaData.integrations.map((integration, idx) => (
                  <li key={idx} className="mb-1.5">{integration}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {graciaData.features.map((feature, idx) => (
                  <div 
                    key={feature.id}
                    className="p-4 rounded-lg shadow-md flex flex-col h-full"
                    style={{ backgroundColor: 'white', borderTop: `3px solid ${idx % 2 === 0 ? Diapositiva14Colors.primary : Diapositiva14Colors.secondary}` }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2 text-xl" style={{ backgroundColor: `${idx % 2 === 0 ? Diapositiva14Colors.primary : Diapositiva14Colors.secondary}20` }} >
                        {feature.icon}
                      </div>
                      <h3 className="text-md font-bold" style={{ color: idx % 2 === 0 ? Diapositiva14Colors.primary : Diapositiva14Colors.secondary }}>{feature.name}</h3>
                    </div>
                    <p className="text-gray-700 flex-grow text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-3" style={{ color: Diapositiva14Colors.dark }}>Integración con Zoho CRM</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: `${Diapositiva14Colors.primary}20` }} ><svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C8.7 14 6 11.3 6 8H18C18 11.3 15.3 14 12 14Z" stroke={Diapositiva14Colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14V18" stroke={Diapositiva14Colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 18H9" stroke={Diapositiva14Colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="6" r="2" stroke={Diapositiva14Colors.primary} strokeWidth="1.5"/></svg></div>
                    <h4 className="font-semibold mb-1 text-sm" style={{ color: Diapositiva14Colors.primary }}>Personalización</h4>
                    <p className="text-xs text-gray-600">Adapta contenidos al perfil del estudiante</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: `${Diapositiva14Colors.secondary}20` }} ><svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H21V19H3V5Z" stroke={Diapositiva14Colors.secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 9L12 13L17 9" stroke={Diapositiva14Colors.secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    <h4 className="font-semibold mb-1 text-sm" style={{ color: Diapositiva14Colors.secondary }}>Comunicación</h4>
                    <p className="text-xs text-gray-600">Automatiza campañas educativas segmentadas</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: `${Diapositiva14Colors.accent}20` }} ><svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V21" stroke={Diapositiva14Colors.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 6L5 18" stroke={Diapositiva14Colors.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 6L19 18" stroke={Diapositiva14Colors.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    <h4 className="font-semibold mb-1 text-sm" style={{ color: Diapositiva14Colors.accent }}>Análisis</h4>
                    <p className="text-xs text-gray-600">Métricas detalladas de progreso y efectividad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-gray-500 text-xs">
        Proyecto LIA — Innovación Educativa con Inteligencia Artificial — 2025
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 14
// =======================================================================

// =======================================================================
// DIAPOSITIVA 15: AGRADECIMIENTOS (SIN FRAMER MOTION)
// =======================================================================
// No se necesita importar 'framer-motion'.
// Se asume que 'useState', 'useEffect' de React están importados globalmente.

const Diapositiva15 = () => {
  // Ya no se necesita el estado para el índice de frases animadas
  // const [currentIndex, setCurrentIndex] = useState(0);

  // Paleta de colores específica para esta diapositiva
  const slide20Colors = {
    primary: '#6D28D9', // Morado
    secondary: '#FBBF24', // Amarillo/Ámbar
    textPrimary: '#4B5563', // Gris oscuro para texto
    textSecondary: '#6B7280', // Gris medio
    background: '#FEF3C7', // Ámbar muy claro
    white: '#FFFFFF',
    // Colores para gradientes decorativos
    grad1Start: '#EF4444', grad1Via: '#FBBF24', grad1End: '#10B981',
    grad2Start: '#A855F7', grad2Via: '#F87171', grad2End: '#FBBF24',
  };

  // Frases de agradecimiento (solo usaremos la primera ahora)
  const phrases = [
    "Gracias por su tiempo y atención",
    "Gracias por la oportunidad de presentar estas ideas",
  ];

  // El useEffect para el ciclo de frases ya no es necesario
  // useEffect(() => { ... }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden relative" style={{ backgroundColor: slide20Colors.background }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-r opacity-30" style={{backgroundImage: `linear-gradient(to right, ${slide20Colors.grad1Start}, ${slide20Colors.grad1Via}, ${slide20Colors.grad1End})`}} />
      <div className="absolute bottom-0 right-0 w-full h-24 sm:h-32 bg-gradient-to-l opacity-30" style={{backgroundImage: `linear-gradient(to left, ${slide20Colors.grad2Start}, ${slide20Colors.grad2Via}, ${slide20Colors.grad2End})`}} />

      {/* Contenedor principal (sin motion) */}
      <div className="z-10 text-center p-6 sm:p-10 md:p-16 bg-white rounded-xl shadow-xl max-w-lg sm:max-w-xl md:max-w-2xl w-full">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10"
          style={{ color: slide20Colors.primary }}
        >
          Agradecimientos
        </h1>

        {/* Texto estático (primera frase) */}
        <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
           <p // Cambiado de motion.p a p
              className="text-lg sm:text-xl md:text-2xl px-2" // Sin absolute
              style={{ color: slide20Colors.textPrimary }}
            >
              {phrases[0]} {/* Mostrando solo la primera frase */}
            </p>
        </div>

        {/* Mensaje final (sin motion) */}
        <p
          className="mt-8 sm:mt-10 md:mt-14 text-base sm:text-lg md:text-xl"
          style={{ color: slide20Colors.textSecondary }}
        >
          Espero con entusiasmo continuar esta conversación y explorar juntos
          el futuro de la educación con innovación humana.
        </p>

        {/* Firma (sin motion) */}
        <div className="mt-8 sm:mt-10 text-right">
          <p className="text-sm sm:text-base md:text-lg italic" style={{color: slide20Colors.textPrimary}} >Armando Cruz Crespillo</p>
          <p className="text-xs sm:text-sm" style={{color: slide20Colors.textSecondary}}>Mayo 2025</p>
        </div>
      </div>
    </div>
  );
};
// =======================================================================
// FIN DIAPOSITIVA 15
// =======================================================================
// =======================================================================
// COMPONENTE PRINCIPAL DE PRESENTACIÓN
// =======================================================================
const Presentacion = () => {
  const [diapositivaActual, setDiapositivaActual] = useState(1);
  const totalDiapositivas = 15; // Actualizado a 15 diapositivas

  const cambiarDiapositiva = (direccion: 'prev' | 'next') => {
    setDiapositivaActual(actual => {
      if (direccion === 'prev') {
        return actual > 1 ? actual - 1 : 1;
      } else {
        return actual < totalDiapositivas ? actual + 1 : totalDiapositivas;
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        cambiarDiapositiva('next');
      } else if (event.key === 'ArrowLeft') {
        cambiarDiapositiva('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  let SlideComponent;
  if (diapositivaActual === 1) SlideComponent = Diapositiva1;
  else if (diapositivaActual === 2) SlideComponent = Diapositiva2;
  else if (diapositivaActual === 3) SlideComponent = Diapositiva3;
  else if (diapositivaActual === 4) SlideComponent = Diapositiva4;
  else if (diapositivaActual === 5) SlideComponent = Diapositiva5;
  else if (diapositivaActual === 6) SlideComponent = Diapositiva6;
  else if (diapositivaActual === 7) SlideComponent = Diapositiva7;
  else if (diapositivaActual === 8) SlideComponent = Diapositiva8;
  else if (diapositivaActual === 9) SlideComponent = Diapositiva9;
  else if (diapositivaActual === 10) SlideComponent = Diapositiva10;
  else if (diapositivaActual === 11) SlideComponent = Diapositiva11;
  else if (diapositivaActual === 12) SlideComponent = Diapositiva12;
  else if (diapositivaActual === 13) SlideComponent = Diapositiva13;
  else if (diapositivaActual === 14) SlideComponent = Diapositiva14;
  else if (diapositivaActual === 15) SlideComponent = Diapositiva15;
  else {
    // Fallback por si acaso
    SlideComponent = () => <div className="flex items-center justify-center h-screen text-2xl">Diapositiva {diapositivaActual} no encontrada</div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {SlideComponent && <SlideComponent />}
      <div className="absolute bottom-4 right-4 flex items-center space-x-2 sm:space-x-3 z-20">
        <button
          className={`p-1.5 rounded-full bg-white text-gray-800 transition-all shadow-md ${ diapositivaActual === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-200 bg-opacity-60 hover:bg-opacity-80' }`}
          onClick={() => cambiarDiapositiva('prev')}
          disabled={diapositivaActual === 1}
          aria-label="Diapositiva anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-yellow-200 text-gray-900 font-medium shadow text-xs sm:text-sm">
          {diapositivaActual}
        </span>
        <button
          className={`p-1.5 rounded-full bg-white text-gray-800 transition-all shadow-md ${ diapositivaActual === totalDiapositivas ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-200 bg-opacity-60 hover:bg-opacity-80' }`}
          onClick={() => cambiarDiapositiva('next')}
          disabled={diapositivaActual === totalDiapositivas}
          aria-label="Siguiente diapositiva"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Presentacion;