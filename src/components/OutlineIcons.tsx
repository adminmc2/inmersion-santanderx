import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

// Lupa minimalista de línea
export const SearchOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M15 15 L20 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Usuario minimalista de línea
export const UserOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M4 20 Q4 16 12 16 Q20 16 20 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Mensaje minimalista de línea
export const MessageOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="5" width="18" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M3 7 L12 13 L21 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Corazón minimalista de línea
export const HeartOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21 C12 21 3 14 3 8 C3 5 5 3 8 3 C10 3 11 4 12 5 C13 4 14 3 16 3 C19 3 21 5 21 8 C21 14 12 21 12 21Z"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Ojo minimalista de línea
export const EyeOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 12 C2 12 5 5 12 5 C19 5 22 12 22 12 C22 12 19 19 12 19 C5 19 2 12 2 12Z"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

// Ojo cerrado minimalista de línea
export const EyeOffOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3 L21 21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 10 C9.5 10.5 9 11.2 9 12 C9 13.7 10.3 15 12 15 C12.8 15 13.5 14.5 14 14"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M4 12 C4 12 6 8 9 6.5 M20 12 C20 12 18 16 15 17.5 M12 5 C13 5 14 5.2 15 5.7 M12 19 C11 19 10 18.8 9 18.3"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

// Alerta minimalista de línea
export const AlertOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
    <line x1="12" y1="8" x2="12" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="0.5" fill={color}/>
  </svg>
);

// Chevron abajo minimalista de línea
export const ChevronDownOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9 L12 15 L18 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Chevron arriba minimalista de línea
export const ChevronUpOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 15 L12 9 L6 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// X (cerrar) minimalista de línea
export const CloseOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 6 L18 18 M18 6 L6 18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Reloj minimalista de línea
export const ClockOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M12 7 L12 12 L15 15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Rayo minimalista de línea
export const BoltOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2Z"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Tendencia arriba minimalista de línea
export const TrendUpOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 17 L9 11 L13 15 L21 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M15 7 L21 7 L21 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Target minimalista de línea
export const TargetOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="1" fill={color}/>
  </svg>
);

// Estrella minimalista de línea
export const StarOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 L12 2Z"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Configuración minimalista de línea
export const SettingsOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M12 2 L12 6 M12 18 L12 22 M4.2 4.2 L7 7 M17 17 L19.8 19.8 M2 12 L6 12 M18 12 L22 12 M4.2 19.8 L7 17 M17 7 L19.8 4.2"
          stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Logout minimalista de línea
export const LogoutOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 21 L5 21 Q3 21 3 19 L3 5 Q3 3 5 3 L9 3"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M16 17 L21 12 L16 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="21" y1="12" x2="9" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Chevron derecha minimalista de línea
export const ChevronRightOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 6 L15 12 L9 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Flecha izquierda minimalista de línea
export const ArrowLeftOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="19" y1="12" x2="5" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 5 L5 12 L12 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Check circle minimalista de línea
export const CheckCircleOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M8 12 L11 15 L16 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Candado minimalista de línea
export const LockOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M7 11 L7 7 Q7 3 12 3 Q17 3 17 7 L17 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="12" cy="16" r="1" fill={color}/>
  </svg>
);

// Play circle minimalista de línea
export const PlayCircleOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M10 8 L10 16 L16 12 Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Documento minimalista de línea
export const DocumentOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 3 L7 21 L17 21 L17 7 L13 3 L7 3 Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    <path d="M13 3 L13 7 L17 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Gráfico de barras minimalista de línea
export const ChartOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="12" width="4" height="8" stroke={color} strokeWidth="1.5" fill="none"/>
    <rect x="10" y="6" width="4" height="14" stroke={color} strokeWidth="1.5" fill="none"/>
    <rect x="16" y="9" width="4" height="11" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

// Download minimalista de línea
export const DownloadOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="12" y1="3" x2="12" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 11 L12 15 L16 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M21 21 L3 21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Mapa con localizadores minimalista (para Customer Discovery Map)
// Versión alternativa del mapa con patrón de puntos más denso
export const MapDotPattern: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => {
  const dots = [];
  const dotRadius = 0.8;

  // Crear patrón denso de puntos formando un mapa
  for (let x = 3; x <= 21; x += 2) {
    for (let y = 6; y <= 20; y += 2) {
      // Lógica para formar la silueta del mapa
      const isMapBorder =
        (y === 6 || y === 20) && (x >= 5 && x <= 19) ||
        (x === 3 || x === 21) && (y >= 8 && y <= 18);

      const isPin =
        (x === 11 && y === 10) ||
        (x === 7 && y === 14) ||
        (x === 17 && y === 14);

      const isInside =
        x >= 5 && x <= 19 && y >= 8 && y <= 18;

      if (isMapBorder) {
        dots.push(
          <circle key={`${x}-${y}`} cx={x} cy={y} r={dotRadius * 0.8} fill={color} opacity="0.6" />
        );
      } else if (isPin) {
        // Pins más grandes y prominentes
        dots.push(
          <circle key={`${x}-${y}`} cx={x} cy={y} r={dotRadius * 1.5} fill={color} opacity="1" />
        );
        // Añadir círculo exterior para los pins
        dots.push(
          <circle key={`${x}-${y}-outer`} cx={x} cy={y} r={dotRadius * 2.5} fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
        );
      } else if (isInside) {
        dots.push(
          <circle key={`${x}-${y}`} cx={x} cy={y} r={dotRadius * 0.5} fill={color} opacity="0.2" />
        );
      }
    }
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {dots}
    </svg>
  );
};

export const MapOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Mapa base */}
    <rect x="3" y="6" width="18" height="14" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>

    {/* Líneas del mapa */}
    <path d="M3 10 Q8 11 12 10 T21 10" stroke={color} strokeWidth="1" opacity="0.5"/>
    <path d="M7 6 L7 20" stroke={color} strokeWidth="1" opacity="0.3"/>
    <path d="M15 6 L15 20" stroke={color} strokeWidth="1" opacity="0.3"/>

    {/* Localizadores/Pins */}
    <g>
      <path d="M9 9 C9 7.5 10 6.5 11 6.5 C12 6.5 13 7.5 13 9 C13 10.5 11 13 11 13 C11 13 9 10.5 9 9Z"
            stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="11" cy="9" r="1" fill={color}/>
    </g>

    <g>
      <path d="M5 14 C5 12.5 6 11.5 7 11.5 C8 11.5 9 12.5 9 14 C9 15.5 7 18 7 18 C7 18 5 15.5 5 14Z"
            stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="7" cy="14" r="1" fill={color}/>
    </g>

    <g>
      <path d="M15 14 C15 12.5 16 11.5 17 11.5 C18 11.5 19 12.5 19 14 C19 15.5 17 18 17 18 C17 18 15 15.5 15 14Z"
            stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="17" cy="14" r="1" fill={color}/>
    </g>
  </svg>
);

// Red de conexiones minimalista (alternativa para stakeholders)
export const NetworkOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="5" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="5" cy="19" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="19" cy="19" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <line x1="12" y1="7" x2="12" y2="10" stroke={color} strokeWidth="1.5"/>
    <line x1="10.5" y1="13.5" x2="6.5" y2="17.5" stroke={color} strokeWidth="1.5"/>
    <line x1="13.5" y1="13.5" x2="17.5" y2="17.5" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// Documento con patrón de cuadraditos tipo calculadora
export const DocumentDotMatrix: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => {
  const squares = [];
  const squareSize = 1.8;

  // Formar un documento con cuadraditos
  for (let x = 6; x <= 18; x += 2) {
    for (let y = 3; y <= 21; y += 2) {
      // Esquina doblada del documento
      if (x >= 14 && y <= 7 && x + y <= 21) continue;

      const isDocumentBorder =
        (x === 6 || x === 18) && y >= 3 && y <= 21 ||
        (y === 3 || y === 21) && x >= 6 && x <= 18 ||
        (x === 14 && y === 7) || (y === 7 && x === 14);

      const isTextLine =
        y === 11 && x >= 8 && x <= 16 ||
        y === 13 && x >= 8 && x <= 14 ||
        y === 15 && x >= 8 && x <= 16 ||
        y === 17 && x >= 8 && x <= 12;

      let size = squareSize * 0.4;
      let opacity = 0.1;

      if (isDocumentBorder) {
        size = squareSize;
        opacity = 0.7;
      } else if (isTextLine) {
        size = squareSize * 0.8;
        opacity = 0.9;
      } else if (x >= 8 && x <= 16 && y >= 5 && y <= 19) {
        size = squareSize * 0.4;
        opacity = 0.15;
      }

      squares.push(
        <rect
          key={`${x}-${y}`}
          x={x - size/2}
          y={y - size/2}
          width={size}
          height={size}
          fill={color}
          opacity={opacity}
          rx="0.2"
        />
      );
    }
  }

  // Esquina doblada
  squares.push(
    <React.Fragment key="corner">
      <rect x={14 - squareSize/2} y={3 - squareSize/2} width={squareSize} height={squareSize} fill={color} opacity="0.7" rx="0.2" />
      <rect x={16 - squareSize/2} y={5 - squareSize/2} width={squareSize} height={squareSize} fill={color} opacity="0.7" rx="0.2" />
      <rect x={18 - squareSize/2} y={7 - squareSize/2} width={squareSize} height={squareSize} fill={color} opacity="0.7" rx="0.2" />
    </React.Fragment>
  );

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {squares}
    </svg>
  );
};

// Gráfico con patrón de cuadraditos tipo calculadora
export const ChartDotMatrix: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => {
  const squares = [];
  const squareSize = 1.6;

  // Barras del gráfico con cuadraditos
  // Barra 1 (izquierda, más baja)
  for (let y = 12; y <= 20; y += 2) {
    for (let x = 4; x <= 8; x += 2) {
      const isEdge = y === 12 || y === 20 || x === 4 || x === 8;
      squares.push(
        <rect
          key={`bar1-${x}-${y}`}
          x={x - squareSize/2}
          y={y - squareSize/2}
          width={squareSize}
          height={squareSize}
          fill={color}
          opacity={isEdge ? "0.8" : "0.3"}
          rx="0.2"
        />
      );
    }
  }

  // Barra 2 (centro, más alta)
  for (let y = 6; y <= 20; y += 2) {
    for (let x = 10; x <= 14; x += 2) {
      const isEdge = y === 6 || y === 20 || x === 10 || x === 14;
      squares.push(
        <rect
          key={`bar2-${x}-${y}`}
          x={x - squareSize/2}
          y={y - squareSize/2}
          width={squareSize}
          height={squareSize}
          fill={color}
          opacity={isEdge ? "0.9" : "0.4"}
          rx="0.2"
        />
      );
    }
  }

  // Barra 3 (derecha, media)
  for (let y = 9; y <= 20; y += 2) {
    for (let x = 16; x <= 20; x += 2) {
      const isEdge = y === 9 || y === 20 || x === 16 || x === 20;
      squares.push(
        <rect
          key={`bar3-${x}-${y}`}
          x={x - squareSize/2}
          y={y - squareSize/2}
          width={squareSize}
          height={squareSize}
          fill={color}
          opacity={isEdge ? "0.8" : "0.3"}
          rx="0.2"
        />
      );
    }
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {squares}
    </svg>
  );
};

// Video/Play con patrón de cuadraditos tipo calculadora
export const PlayDotMatrix: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => {
  const squares = [];
  const squareSize = 1.6;
  const centerX = 12;
  const centerY = 12;
  const circleRadius = 9;

  // Crear círculo con cuadraditos
  for (let angle = 0; angle < 360; angle += 15) {
    const rad = (angle * Math.PI) / 180;
    const x = centerX + circleRadius * Math.cos(rad);
    const y = centerY + circleRadius * Math.sin(rad);
    squares.push(
      <rect
        key={`circle-${angle}`}
        x={x - squareSize/2}
        y={y - squareSize/2}
        width={squareSize}
        height={squareSize}
        fill={color}
        opacity="0.7"
        rx="0.2"
      />
    );
  }

  // Botón de play con cuadraditos
  const playPoints = [
    [10, 8], [10, 10], [10, 12], [10, 14], [10, 16],
    [12, 9], [12, 11], [12, 13], [12, 15],
    [14, 10], [14, 12], [14, 14],
    [16, 11], [16, 13],
    [18, 12]
  ];

  playPoints.forEach(([x, y], index) => {
    const opacity = x === 10 ? 0.9 : x === 18 ? 1 : 0.7;
    const size = x === 18 ? squareSize * 1.2 : squareSize;
    squares.push(
      <rect
        key={`play-${index}`}
        x={x - size/2}
        y={y - size/2}
        width={size}
        height={size}
        fill={color}
        opacity={opacity}
        rx="0.2"
      />
    );
  });

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {squares}
    </svg>
  );
};

// Mano con estrella con patrón de cuadraditos
export const ValuePropositionDotMatrix: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => {
  const squares = [];
  const squareSize = 0.7;

  // Coordenadas exactas de cada cuadradito basado en la imagen original
  // Estrella arriba
  const starCoords = [
    // Punta superior
    [12, 2],
    // Segunda fila
    [11, 3], [13, 3],
    // Tercera fila
    [10, 4], [12, 4], [14, 4],
    // Cuarta fila
    [9, 5], [11, 5], [13, 5], [15, 5],
    // Quinta fila - brazos horizontales
    [8, 6], [9, 6], [10, 6], [11, 6], [12, 6], [13, 6], [14, 6], [15, 6], [16, 6],
    // Sexta fila
    [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7], [15, 7], [16, 7], [17, 7],
    // Séptima fila
    [6, 8], [7, 8], [12, 8], [17, 8], [18, 8],
    // Octava fila
    [7, 9], [8, 9], [12, 9], [16, 9], [17, 9],
    // Novena fila - puntas inferiores
    [8, 10], [9, 10], [15, 10], [16, 10],
    // Décima fila
    [9, 11], [15, 11],
    // Última fila de la estrella
    [10, 12], [14, 12]
  ];

  // Mano con corazón abajo
  const handCoords = [
    // Primera fila - parte superior de la mano
    [6, 14], [7, 14], [8, 14], [9, 14], [15, 14], [16, 14], [17, 14], [18, 14],
    // Segunda fila
    [6, 15], [10, 15], [11, 15], [13, 15], [14, 15], [18, 15],
    // Tercera fila
    [6, 16], [12, 16], [18, 16],
    // Cuarta fila
    [6, 17], [18, 17],
    // Quinta fila
    [6, 18], [18, 18],
    // Sexta fila
    [6, 19], [18, 19],
    // Séptima fila - base superior
    [6, 20], [7, 20], [8, 20], [9, 20], [15, 20], [16, 20], [17, 20], [18, 20],
    // Corazón en el centro
    [10, 20], [11, 20], [13, 20], [14, 20],
    [9, 21], [10, 21], [11, 21], [12, 21], [13, 21], [14, 21], [15, 21],
    [8, 22], [9, 22], [15, 22], [16, 22],
    [7, 23], [8, 23], [10, 23], [11, 23], [13, 23], [14, 23], [16, 23], [17, 23],
    [6, 24], [7, 24], [9, 24], [10, 24], [12, 24], [14, 24], [15, 24], [17, 24], [18, 24],
    [6, 25], [8, 25], [12, 25], [16, 25], [18, 25],
    [6, 26], [8, 26], [9, 26], [12, 26], [15, 26], [16, 26], [18, 26],
    [6, 27], [9, 27], [10, 27], [11, 27], [13, 27], [14, 27], [15, 27], [18, 27],
    [6, 28], [7, 28], [17, 28], [18, 28],
    [7, 29], [8, 29], [16, 29], [17, 29],
    [8, 30], [9, 30], [15, 30], [16, 30],
    [9, 31], [10, 31], [11, 31], [12, 31], [13, 31], [14, 31], [15, 31],
    [10, 32], [11, 32], [12, 32], [13, 32], [14, 32]
  ];

  // Renderizar estrella
  starCoords.forEach(([x, y]) => {
    squares.push(
      <rect
        key={`star-${x}-${y}`}
        x={x * 0.9}
        y={y * 0.6}
        width={squareSize}
        height={squareSize}
        fill={color}
        rx="0.1"
      />
    );
  });

  // Renderizar mano
  handCoords.forEach(([x, y]) => {
    squares.push(
      <rect
        key={`hand-${x}-${y}`}
        x={x * 0.9}
        y={y * 0.6}
        width={squareSize}
        height={squareSize}
        fill={color}
        rx="0.1"
      />
    );
  });

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {squares}
    </svg>
  );
};

// Journey/Ruta minimalista (para customer journey)
export const JourneyOutline: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="6" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="18" cy="18" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M8 6 Q12 3 16 6 Q19 10 16 14 Q12 17 8 14 Q5 10 8 6"
          stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 2"/>
    <circle cx="12" cy="6" r="1" fill={color}/>
    <circle cx="16" cy="10" r="1" fill={color}/>
    <circle cx="12" cy="14" r="1" fill={color}/>
    <circle cx="8" cy="10" r="1" fill={color}/>
  </svg>
);

// Mapa con patrón de cuadraditos tipo calculadora
export const MapDotMatrix: React.FC<IconProps> = ({ className = "", size = 24, color = "currentColor" }) => {
  const squareSize = 2.2;
  const spacing = 2.5;
  const rows = 9;
  const cols = 10;
  const startX = 1;
  const startY = 3;

  // Crear matriz de cuadraditos
  const squares = [];

  // Definir el mapa: rectángulo con 2 localizadores y camino
  const mapPattern = [
    // Fila 0 - borde superior
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    // Fila 1
    [1, 0, 2, 2, 0, 0, 0, 0, 0, 1],
    // Fila 2 - inicio del camino
    [1, 0, 2, 2, 0, 0, 0, 0, 0, 1],
    // Fila 3 - camino
    [1, 0, 0, 3, 3, 3, 0, 0, 0, 1],
    // Fila 4 - camino
    [1, 0, 0, 0, 0, 3, 3, 0, 0, 1],
    // Fila 5 - camino
    [1, 0, 0, 0, 0, 0, 3, 0, 0, 1],
    // Fila 6 - fin del camino
    [1, 0, 0, 0, 0, 2, 2, 0, 0, 1],
    // Fila 7
    [1, 0, 0, 0, 0, 2, 2, 0, 0, 1],
    // Fila 8 - borde inferior
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const value = mapPattern[row][col];
      if (value === 0) continue; // No dibujar cuadradito

      const x = startX + col * spacing;
      const y = startY + row * spacing;

      let size = squareSize;
      let opacity = 1;

      // Todos los cuadraditos del mismo tamaño, solo varía opacidad
      if (value === 1) {
        // Borde del rectángulo
        opacity = 0.4;
      } else if (value === 2) {
        // Localizadores
        opacity = 1;
      } else if (value === 3) {
        // Camino
        opacity = 0.7;
      }

      squares.push(
        <rect
          key={`${row}-${col}`}
          x={x - size/2}
          y={y - size/2}
          width={size}
          height={size}
          fill={color}
          opacity={opacity}
          rx="0.3"
        />
      );
    }
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {squares}
    </svg>
  );
};