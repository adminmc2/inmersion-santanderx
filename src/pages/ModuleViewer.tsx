import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  Lock,
  PlayCircle,
  FileText,
  BarChart3,
  Download
} from 'lucide-react';
import toast from 'react-hot-toast';
import '../styles/module-hapto.css';

interface ModuleViewerProps {
  isAdmin: boolean;
}

import CustomerDiscoveryMapV2 from '../components/CustomerDiscoveryMapV2';

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

  useEffect(() => {
    // Datos de ejemplo - después conectaremos con tu backend
    const modules: any = {
      '1': {
        title: 'Research & Analysis',
        subtitle: 'Problema, Mercado y Oportunidad',
        description: 'Análisis exhaustivo del mercado de turismo lingüístico, identificación de problemas clave y propuesta de valor única de INMERSION.',
        icon: '🔍'
      }
    };

    setModule(modules[moduleId || '1']);

    // Documentos profesionales del proyecto
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
        title: 'Análisis de Mercado',
        description: 'Tamaño del mercado, tendencias y proyecciones del turismo lingüístico',
        duration: '10 min',
        type: 'interactive',
        completed: false,
        locked: false,
        rating: 0,
        comments: 0
      },
      {
        id: '3',
        title: 'Problema y Solución',
        description: 'Pain points identificados y cómo INMERSION los resuelve',
        duration: '8 min',
        type: 'document',
        completed: false,
        locked: false,
        rating: 0,
        comments: 0
      },
      {
        id: '4',
        title: 'Propuesta de Valor',
        description: 'Diferenciadores clave y ventajas competitivas',
        duration: '7 min',
        type: 'video',
        completed: false,
        locked: false,
        comments: 0
      },
      {
        id: '5',
        title: 'Customer Personas',
        description: 'Perfiles detallados de nuestros clientes objetivo',
        duration: '6 min',
        type: 'document',
        completed: false,
        locked: false,
        comments: 0
      }
    ]);
  }, [moduleId]);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'video': return <PlayCircle className="h-5 w-5" />;
      case 'document': return <FileText className="h-5 w-5" />;
      case 'interactive': return <BarChart3 className="h-5 w-5" />;
      case 'quiz': return <CheckCircle className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
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
            <ArrowLeft className="h-5 w-5" />
            Volver
          </button>
          <button
            onClick={() => handleDownloadPDF()}
            className="hapto-download-btn"
          >
            <Download className="h-5 w-5" />
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

        {/* Topics Grid */}
        <div className="hapto-topics-grid">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              onClick={() => {
                if (!topic.locked) {
                  if (topic.id === '1') {
                    setShowCustomerMap(true);
                  } else {
                    navigate(`/module/${moduleId}/topic/${topic.id}`);
                  }
                }
              }}
              className={`hapto-topic-card ${topic.locked ? 'locked' : ''}`}
            >
              <div className="hapto-topic-left">
                <div className={`hapto-topic-type ${getTypeClass(topic.type)}`}>
                  {getTypeIcon(topic.type)}
                </div>
                <div className="hapto-topic-content">
                  <h3 className="hapto-topic-title">
                    {index + 1}. {topic.title}
                  </h3>
                  <p className="hapto-topic-description">{topic.description}</p>
                  <div className="hapto-topic-meta">
                    <div className="hapto-topic-duration">
                      <Clock className="h-4 w-4" />
                      <span>Lectura: {topic.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hapto-topic-right">
                {topic.completed && (
                  <div className="hapto-topic-status completed">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                )}
                {topic.locked && (
                  <div className="hapto-topic-status locked">
                    <Lock className="h-5 w-5" />
                  </div>
                )}
                {isAdmin && !topic.locked && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadPDF(topic.title);
                    }}
                    className="hapto-topic-download"
                    title="Descargar PDF"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Customer Discovery Map Modal */}
      {showCustomerMap && (
        <CustomerDiscoveryMapV2 onClose={() => setShowCustomerMap(false)} isAdmin={isAdmin} />
      )}
    </div>
  );
};

export default ModuleViewer;