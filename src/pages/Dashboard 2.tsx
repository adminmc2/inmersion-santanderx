import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Award, 
  Clock,
  ChevronRight,
  LogOut,
  Settings,
  Download,
  BarChart3,
  Users
} from 'lucide-react';
import toast from 'react-hot-toast';

interface DashboardProps {
  isAdmin: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  topics: number;
  completedTopics: number;
  icon: string;
  color: string;
}

const Dashboard: React.FC<DashboardProps> = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [modules, setModules] = useState<Module[]>([]);
  const userName = localStorage.getItem('user_name') || 'Usuario';

  useEffect(() => {
    // Datos de ejemplo - después conectaremos con tu backend
    setModules([
      {
        id: '1',
        title: 'Análisis de Mercado',
        description: 'Investigación del mercado de turismo lingüístico',
        progress: 75,
        topics: 8,
        completedTopics: 6,
        icon: '📊',
        color: 'from-[#FF3E01] to-[#E8871E]'
      },
      {
        id: '2',
        title: 'Modelo de Negocio',
        description: 'Desarrollo del modelo SaaS y monetización',
        progress: 60,
        topics: 10,
        completedTopics: 6,
        icon: '💼',
        color: 'from-[#E8871E] to-[#EDB458]'
      },
      {
        id: '3',
        title: 'Plataforma Tecnológica',
        description: 'Arquitectura y desarrollo de la plataforma',
        progress: 40,
        topics: 12,
        completedTopics: 5,
        icon: '⚡',
        color: 'from-[#FF3E01] to-[#EDB458]'
      },
      {
        id: '4',
        title: 'Experiencia de Usuario',
        description: 'Diseño UX/UI para estudiantes y escuelas',
        progress: 25,
        topics: 9,
        completedTopics: 2,
        icon: '🎨',
        color: 'from-[#EDB458] to-[#FF3E01]'
      },
      {
        id: '5',
        title: 'Marketing y Ventas',
        description: 'Estrategias de captación y crecimiento',
        progress: 10,
        topics: 11,
        completedTopics: 1,
        icon: '🚀',
        color: 'from-[#E8871E] to-[#EDB458]'
      },
      {
        id: '6',
        title: 'Pitch y Presentación',
        description: 'Preparación para inversores y demo day',
        progress: 0,
        topics: 5,
        completedTopics: 0,
        icon: '🎯',
        color: 'from-[#E8871E] to-[#FF3E01]'
      }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    toast.success('Sesión cerrada correctamente');
    window.location.href = '/login';
  };

  const totalProgress = modules.reduce((acc, module) => acc + module.progress, 0) / modules.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFEE2] via-white to-[#EDB458]/10">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <div>
                <h1 className="text-2xl font-extrabold text-black">
                  INMERS<span className="bg-[#FF3E01] text-[#FFFEE2] px-1.5 py-0.5 rounded">ION</span>
                </h1>
                <p className="text-xs text-gray-500">Plataforma IA integral para el turismo lingüístico | Santander X Explorer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isAdmin && (
                <button
                  onClick={() => navigate('/admin')}
                  className="flex items-center px-4 py-2 bg-[#FF3E01] text-white rounded-lg hover:bg-[#E8871E] transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Admin Panel
                </button>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-[#FF3E01] transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Bienvenido, {userName}! 👋
          </h2>
          <p className="text-gray-600">
            Explora el desarrollo del proyecto Inmersión
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#FF3E01] p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{Math.round(totalProgress)}%</span>
            </div>
            <h3 className="text-gray-600 text-sm">Progreso Total</h3>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#E8871E] p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{modules.length}</span>
            </div>
            <h3 className="text-gray-600 text-sm">Módulos Totales</h3>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#EDB458] p-3 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {modules.reduce((acc, m) => acc + m.completedTopics, 0)}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">Temas Completados</h3>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#FF3E01]/20 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-[#FF3E01]" />
              </div>
              <span className="text-2xl font-bold text-gray-900">42h</span>
            </div>
            <h3 className="text-gray-600 text-sm">Tiempo Invertido</h3>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Módulos del Programa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div
                key={module.id}
                onClick={() => navigate(`/module/${module.id}`)}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{module.icon}</div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Progreso</span>
                      <span className="font-medium">{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${module.color} transition-all duration-500`}
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{module.completedTopics} de {module.topics} temas</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-[#FF3E01] to-[#E8871E] rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Genera tu reporte de progreso</h3>
              <p className="text-blue-100">Descarga un PDF con todo tu avance y trabajos realizados</p>
            </div>
            <button className="bg-[#FFFEE2] text-[#FF3E01] px-6 py-3 rounded-lg font-semibold hover:bg-[#EBF5DF] transition-colors flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Descargar PDF
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;