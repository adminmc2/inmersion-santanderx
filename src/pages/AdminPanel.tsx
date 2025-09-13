import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2, Users, FileText, BarChart3 } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Gestionar Usuarios</h3>
            <p className="text-gray-600 text-sm">Administra permisos y accesos</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FileText className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold mb-2">Contenido</h3>
            <p className="text-gray-600 text-sm">Crea y edita módulos</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <BarChart3 className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold mb-2">Estadísticas</h3>
            <p className="text-gray-600 text-sm">Analiza el progreso</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;