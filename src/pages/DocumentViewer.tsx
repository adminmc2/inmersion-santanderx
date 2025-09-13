import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Bookmark,
  MessageSquare,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Send
} from 'lucide-react';
import toast from 'react-hot-toast';
import CustomerDiscoveryMap from '../components/CustomerDiscoveryMap';

interface DocumentViewerProps {
  isAdmin: boolean;
}

interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ isAdmin }) => {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'María González',
      text: 'Excelente explicación de los conceptos básicos!',
      timestamp: 'Hace 2 días',
      likes: 5
    },
    {
      id: '2',
      author: 'Carlos Ruiz',
      text: '¿Alguien tiene ejemplos adicionales de esto en la práctica?',
      timestamp: 'Hace 1 semana',
      likes: 3
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Contenido de ejemplo - después será dinámico
  const slides = [
    {
      type: 'title',
      title: 'Introducción a la Inteligencia Artificial',
      subtitle: 'Fundamentos y Conceptos Básicos',
      background: 'from-blue-600 to-purple-600'
    },
    {
      type: 'content',
      title: '¿Qué es la IA?',
      content: [
        'La capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana',
        'Incluye aprendizaje, razonamiento, percepción y comprensión del lenguaje',
        'Se divide en IA débil (específica) e IA fuerte (general)'
      ],
      chart: true
    },
    {
      type: 'interactive',
      title: 'Línea de Tiempo de la IA',
      timeline: [
        { year: '1950', event: 'Test de Turing' },
        { year: '1956', event: 'Conferencia de Dartmouth' },
        { year: '1997', event: 'Deep Blue vence a Kasparov' },
        { year: '2012', event: 'Revolución del Deep Learning' },
        { year: '2022', event: 'ChatGPT y IA Generativa' }
      ]
    }
  ];

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: localStorage.getItem('user_name') || 'Usuario',
        text: newComment,
        timestamp: 'Ahora',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
      toast.success('Comentario añadido');
    }
  };

  const handleDownloadPDF = () => {
    if (isAdmin) {
      toast.success('Generando PDF...');
      // Aquí implementaremos la generación real del PDF
    } else {
      toast.error('Solo los administradores pueden descargar PDFs');
    }
  };

  // Check if this is the Executive Summary document
  if (topicId === '1') {
    return <CustomerDiscoveryMap />;
  }

  const renderSlide = (slide: any) => {
    switch(slide.type) {
      case 'title':
        return (
          <div className={`h-full flex flex-col items-center justify-center text-white bg-gradient-to-br ${slide.background} rounded-xl p-12`}>
            <h1 className="text-5xl font-bold mb-4 text-center animate-fade-in">{slide.title}</h1>
            <p className="text-2xl text-white/80 animate-slide-up">{slide.subtitle}</p>
          </div>
        );
      
      case 'content':
        return (
          <div className="h-full bg-white rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.title}</h2>
            <ul className="space-y-4">
              {slide.content.map((item: string, index: number) => (
                <li key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            {slide.chart && (
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="h-40 flex items-end justify-around">
                  {[40, 65, 85, 70, 95].map((height, i) => (
                    <div key={i} className="w-12 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg animate-slide-up" 
                         style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'interactive':
        return (
          <div className="h-full bg-white rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.title}</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              {slide.timeline.map((item: any, index: number) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-1/2 px-6">
                    <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-50 to-transparent' : 'from-transparent to-purple-50'} p-4 rounded-lg`}>
                      <p className="font-bold text-lg text-gray-900">{item.year}</p>
                      <p className="text-gray-600">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      {!isFullscreen && (
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => navigate(`/module/${moduleId}`)}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver al Módulo
              </button>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
                {isAdmin && (
                  <button
                    onClick={handleDownloadPDF}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar PDF
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>
      )}

      <main className={`${isFullscreen ? 'h-screen p-4' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}`}>
        <div className={`grid ${isFullscreen ? 'grid-cols-1 h-full' : 'grid-cols-1 lg:grid-cols-3 gap-8'}`}>
          {/* Document Viewer */}
          <div className={`${isFullscreen ? 'h-full' : 'lg:col-span-2'}`}>
            <div className={`bg-gray-900 rounded-xl ${isFullscreen ? 'h-full p-8' : 'p-6'} relative`}>
              {/* Slide Content */}
              <div className={`${isFullscreen ? 'h-[calc(100%-80px)]' : 'h-[500px]'} mb-4`}>
                {renderSlide(slides[currentSlide])}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                  disabled={currentSlide === 0}
                  className="p-2 text-white hover:bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex items-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                    disabled={currentSlide === slides.length - 1}
                    className="p-2 text-white hover:bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          {!isFullscreen && (
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Comentarios y Preguntas
              </h3>

              {/* Add Comment */}
              <div className="mb-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Escribe tu comentario o pregunta..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                <button
                  onClick={handleAddComment}
                  className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{comment.author}</p>
                        <p className="text-gray-700 text-sm mt-1">{comment.text}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <span>{comment.timestamp}</span>
                          <button className="ml-4 flex items-center hover:text-blue-600">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {comment.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DocumentViewer;