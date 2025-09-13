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

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'video': return 'bg-[#FF3E01]/10 text-[#FF3E01]';
      case 'document': return 'bg-[#E8871E]/10 text-[#E8871E]';
      case 'interactive': return 'bg-[#EDB458]/10 text-[#EDB458]';
      case 'quiz': return 'bg-[#FF3E01]/20 text-[#FF3E01]';
      default: return 'bg-gray-100 text-gray-600';
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver
            </button>
            <button className="bg-[#FF3E01]/20 text-white px-4 py-2 rounded-lg hover:bg-[#FF3E01]/30 transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Header */}
        <div className="bg-gradient-to-r from-[#FF3E01] to-[#E8871E] rounded-xl p-8 text-white mb-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">{module.icon}</span>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
                  <p className="text-blue-100">{module.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <p className="text-[#FFFEE2]/90 text-sm">{module.subtitle}</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Documents Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Documentos del Proyecto</h2>
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
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                topic.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getTypeColor(topic.type)}`}>
                      {getTypeIcon(topic.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="text-lg font-semibold text-gray-900 mr-3">
                          {index + 1}. {topic.title}
                        </h3>
                        {topic.completed && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {topic.locked && (
                          <Lock className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Lectura: {topic.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isAdmin && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadPDF(topic.title);
                        }}
                        className="bg-[#FFFEE2] text-[#FF3E01] p-2 rounded-lg hover:bg-white transition-colors"
                        title="Descargar PDF"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    )}
                    {!topic.locked && (
                      <button className="bg-[#FF3E01]/10 text-[#FF3E01] px-4 py-2 rounded-lg hover:bg-[#FF3E01]/20 transition-colors">
                        Ver Documento
                      </button>
                    )}
                  </div>
                </div>
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