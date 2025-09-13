import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight,
  LogOut,
  Settings
} from 'lucide-react';
import toast from 'react-hot-toast';

interface PortfolioProps {
  isAdmin: boolean;
  isRealAdmin?: boolean;
  adminViewMode?: boolean;
  setAdminViewMode?: (value: boolean) => void;
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

const Portfolio: React.FC<PortfolioProps> = ({ isAdmin, isRealAdmin, adminViewMode, setAdminViewMode }) => {
  const navigate = useNavigate();
  const [modules, setModules] = useState<Module[]>([]);
  const userName = localStorage.getItem('user_name') || 'Usuario';

  useEffect(() => {
    // Datos de ejemplo - después conectaremos con tu backend
    setModules([
      {
        id: '1',
        title: 'Análisis de Mercado',
        description: 'Customer Discovery y Propuesta de Valor',
        progress: 0,
        topics: 0,
        completedTopics: 0,
        icon: '🔍',
        color: 'from-[#FF3E01] to-[#E8871E]'
      }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    toast.success('Sesión cerrada correctamente');
    window.location.href = '/login';
  };


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
              {/* Toggle Vista Admin/Pública */}
              {isRealAdmin && (
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setAdminViewMode?.(true)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      adminViewMode 
                        ? 'bg-[#FF3E01] text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Vista Admin
                  </button>
                  <button
                    onClick={() => setAdminViewMode?.(false)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      !adminViewMode 
                        ? 'bg-[#FF3E01] text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Vista Pública
                  </button>
                </div>
              )}
              
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
        {/* Hero Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Proyecto INMERSION
          </h2>
          <p className="text-gray-600">
            Plataforma IA integral para el turismo lingüístico
          </p>
        </div>

        {/* Documents Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Documentación del Proyecto</h3>
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
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#FF3E01] to-[#E8871E] rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Interesado en el proyecto?</h3>
              <p className="text-[#FFFEE2]/90">Únete como inversor, socio o parte del equipo</p>
            </div>
            <button className="bg-[#FFFEE2] text-[#FF3E01] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;