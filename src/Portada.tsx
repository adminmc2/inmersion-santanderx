import { useState, useEffect } from 'react';
import './Portada.css';
import './styles/liquid-glass.css';

interface PortadaProps {
  // Mantenemos el nombre 'onStartClick' como estaba en tu código original
  onStartClick: () => void;
}

const Portada: React.FC<PortadaProps> = ({ onStartClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portada-container liquid-gradient-bg">
      {/* Logos con efecto glass */}
      <div className="logo-container liquid-glass">
        <img src="/logo emc2.png" alt="Logo EMC2" />
        <img
          src="/Hablandis_Kit de marca_Logo + tagline-03_Negro.png"
          alt="Logo Hablandis"
        />
      </div>

      {/* Fondo izquierdo con efecto glass */}
      <div className="left-background liquid-frosted"></div>

      {/* Imagen derecha sin cambios */}
      <div className="background-image-container">
        <img
          src="/portada.png" // Asegúrate que esta imagen exista en /public
          alt="Málaga moderna"
          className={`background-image ${
            imageLoaded ? 'image-load-transition' : ''
          }`}
        />
      </div>

      {/* ***** CONTENEDOR PARA EL CONTENIDO IZQUIERDO CON GLASS ***** */}
      <div className="content-left-column">
        {/* Título con efecto glass */}
        <div className="title-container liquid-card liquid-noise">
          <h1 className="liquid-text-gradient">Málaga</h1>
          <h1 className="subtitle liquid-shimmer">sin filtros</h1>
        </div>

        {/* Botón con estilo Liquid Glass */}
        <button className="liquid-button liquid-button-primary liquid-float" onClick={onStartClick}>
          <span className="button-icon">▶</span>
          ¡Dale al Play!
        </button>
      </div>
      {/* ***** FIN CONTENEDOR ***** */}
    </div>
  );
};

export default Portada;
