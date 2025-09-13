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
  MessageSquare,
  Star
} from 'lucide-react';

interface ModuleViewerProps {
  isAdmin: boolean;
}

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

  useEffect(() => {
    // Datos de ejemplo - después conectaremos con tu backend
    const modules: any = {
      '1': {
        title: 'Análisis de Mercado',
        description: 'Investigación completa del mercado de turismo lingüístico y sus oportunidades',
        instructor: 'Santander X Explorer',
        duration: '2 semanas',
        icon: '📊'
      },
      '2': {
        title: 'Modelo de Negocio',
        description: 'Desarrollo del modelo SaaS y estrategias de monetización',
        instructor: 'Santander X Explorer',
        duration: '3 semanas',
        icon: '💼'
      },
      '3': {
        title: 'Plataforma Tecnológica',
        description: 'Arquitectura y desarrollo de la plataforma Inmersión',
        instructor: 'Santander X Explorer',
        duration: '4 semanas',
        icon: '⚡'
      },
      '4': {
        title: 'Experiencia de Usuario',
        description: 'Diseño UX/UI optimizado para estudiantes y escuelas',
        instructor: 'Santander X Explorer',
        duration: '2 semanas',
        icon: '🎨'
      },
      '5': {
        title: 'Marketing y Ventas',
        description: 'Estrategias de captación, retención y crecimiento',
        instructor: 'Santander X Explorer',
        duration: '3 semanas',
        icon: '🚀'
      },
      '6': {
        title: 'Pitch y Presentación',
        description: 'Preparación para inversores y demo day final',
        instructor: 'Santander X Explorer',
        duration: '1 semana',
        icon: '🎯'
      }
    };

    setModule(modules[moduleId || '1']);

    // Temas de ejemplo
    setTopics([
      {
        id: '1',
        title: 'Introducción a la IA',
        description: 'Historia y conceptos fundamentales',
        duration: '45 min',
        type: 'video',
        completed: true,
        locked: false,
        rating: 4.8,
        comments: 23
      },
      {
        id: '2',
        title: 'Tipos de Inteligencia Artificial',
        description: 'IA débil vs IA fuerte, aplicaciones actuales',
        duration: '60 min',
        type: 'document',
        completed: true,
        locked: false,
        rating: 4.5,
        comments: 15
      },
      {
        id: '3',
        title: 'Fundamentos Matemáticos',
        description: 'Álgebra lineal y cálculo para IA',
        duration: '90 min',
        type: 'interactive',
        completed: false,
        locked: false,
        rating: 4.2,
        comments: 42
      },
      {
        id: '4',
        title: 'Algoritmos de Búsqueda',
        description: 'BFS, DFS, A* y otros algoritmos',
        duration: '75 min',
        type: 'video',
        completed: false,
        locked: false,
        comments: 8
      },
      {
        id: '5',
        title: 'Quiz: Conceptos Básicos',
        description: 'Evaluación de conocimientos fundamentales',
        duration: '30 min',
        type: 'quiz',
        completed: false,
        locked: true,
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
      case 'video': return 'bg-blue-100 text-blue-600';
      case 'document': return 'bg-green-100 text-green-600';
      case 'interactive': return 'bg-purple-100 text-purple-600';
      case 'quiz': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
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
              Volver al Dashboard
            </button>
            {isAdmin && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Editar Módulo
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">{module.icon}</span>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
                  <p className="text-blue-100">{module.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-blue-100">
                <span>Instructor: {module.instructor}</span>
                <span>•</span>
                <span>Duración: {module.duration}</span>
                <span>•</span>
                <span>{topics.filter(t => t.completed).length} de {topics.length} temas completados</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-3">
              <div 
                className="h-3 bg-white rounded-full transition-all duration-500"
                style={{ width: `${(topics.filter(t => t.completed).length / topics.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contenido del Módulo</h2>
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              onClick={() => !topic.locked && navigate(`/module/${moduleId}/topic/${topic.id}`)}
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
                          {topic.duration}
                        </span>
                        {topic.rating && (
                          <span className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-500" />
                            {topic.rating}
                          </span>
                        )}
                        <span className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {topic.comments} comentarios
                        </span>
                      </div>
                    </div>
                  </div>
                  {!topic.locked && (
                    <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      {topic.completed ? 'Revisar' : 'Comenzar'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ModuleViewer;