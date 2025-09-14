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
  // Solo usar versión Clock por defecto

  useEffect(() => {
    // Datos de ejemplo - después conectaremos con tu backend
    const modules: any = {
      '1': {
        title: 'Research & Analysis',
        subtitle: 'Problema, Mercado y Oportunidad',
        description: 'Análisis exhaustivo del mercado de turismo lingüístico, identificación de problemas clave y propuesta de valor única de INMERSION.',
        icon: <SearchOutline size={48} color="#6e6e73" />
      }
    };

    setModule(modules[moduleId || '1']);

    // Solo Customer Discovery Map por ahora
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
      {/* Header with 3D effect */}
      <header className="hapto-module-header">
        <div className="hapto-module-header-content">
          <button
            onClick={() => navigate('/')}
            className="hapto-back-btn"
          >
            <ArrowLeftOutline size={20} />
            Volver
          </button>
          <button
            onClick={() => handleDownloadPDF()}
            className="hapto-download-btn"
          >
            <DownloadOutline size={20} />
            Descargar PDF
          </button>
        </div>
      </header>

      {/* Module Hero Section */}
      <div className="hapto-module-hero">
        <div className="hapto-module-hero-content">
          <div className="hapto-module-icon">{module.icon}</div>
          <div className="hapto-module-info">
            <h1 className="hapto-module-title">{module.title}</h1>
            <p className="hapto-module-subtitle">{module.subtitle}</p>
            <p className="hapto-module-description">{module.description}</p>
          </div>
        </div>
      </div>

      <main className="hapto-module-main">
        <h2 className="hapto-section-title">Documentos del Proyecto</h2>

        {/* Topics - Solo versión Clock */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {topics.map((topic, index) => (
            <TopicCardClock
              key={topic.id}
              topic={topic}
              index={index}
              onClick={() => {
                if (!topic.locked) {
                  if (topic.id === '1') {
                    setShowCustomerMap(true);
                  } else {
                    navigate(`/module/${moduleId}/topic/${topic.id}`);
                  }
                }
              }}
              isAdmin={isAdmin}
              onDownload={() => handleDownloadPDF(topic.title)}
            />
          ))}

        </div>
      </main>

      {/* Customer Discovery Map Modal */}
      {showCustomerMap && (
        <div style={{ position: 'relative', zIndex: 9999 }}>
          <CustomerDiscoveryMapV2 onClose={() => setShowCustomerMap(false)} isAdmin={isAdmin} />
        </div>
      )}
    </div>
  );
};

export default ModuleViewer;