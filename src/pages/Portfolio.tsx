import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  LogOut,
  Settings
} from 'lucide-react';
import toast from 'react-hot-toast';
import '../styles/portfolio-hapto.css';

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
    <div className="hapto-portfolio-container">
      {/* Header with 3D effect */}
      <header className="hapto-header">
        <div className="hapto-header-content">
          <div className="flex items-center">
            <div>
              <h1 className="hapto-logo">
                INMERS<span className="hapto-logo-accent">ION</span>
              </h1>
              <p className="hapto-tagline">
                Plataforma IA integral para el turismo lingüístico | Santander X Explorer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Toggle Vista Admin/Pública */}
            {isRealAdmin && (
              <div className="hapto-toggle-group">
                <button
                  onClick={() => setAdminViewMode?.(true)}
                  className={`hapto-toggle-btn ${adminViewMode ? 'active' : ''}`}
                >
                  Vista Admin
                </button>
                <button
                  onClick={() => setAdminViewMode?.(false)}
                  className={`hapto-toggle-btn ${!adminViewMode ? 'active' : ''}`}
                >
                  Vista Pública
                </button>
              </div>
            )}

            {isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="hapto-btn-primary"
              >
                <Settings className="h-4 w-4 mr-2" />
                Admin Panel
              </button>
            )}

            <button
              onClick={handleLogout}
              className="hapto-btn-ghost"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="hapto-main">
        {/* Hero Section */}
        <div className="hapto-hero">
          <h2 className="hapto-hero-title">
            Proyecto INMERSION
          </h2>
          <p className="hapto-hero-subtitle">
            Plataforma IA integral para el turismo lingüístico
          </p>
        </div>

        {/* Documents Section */}
        <div>
          <h3 className="hapto-section-title">Documentación del Proyecto</h3>
          <div className="hapto-grid">
            {modules.map((module) => (
              <div
                key={module.id}
                onClick={() => navigate(`/module/${module.id}`)}
                className="hapto-module-card"
              >
                <div className="hapto-card-bar"></div>
                <div className="hapto-card-content">
                  <div className="hapto-card-header">
                    <div className="hapto-card-icon">{module.icon}</div>
                    <ChevronRight className="hapto-card-chevron" />
                  </div>
                  <h4 className="hapto-card-title">{module.title}</h4>
                  <p className="hapto-card-description">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="hapto-cta">
          <div className="hapto-cta-content">
            <div className="hapto-cta-text">
              <h3 className="hapto-cta-title">¿Interesado en el proyecto?</h3>
              <p className="hapto-cta-subtitle">
                Únete como inversor, socio o parte del equipo
              </p>
            </div>
            <button className="hapto-cta-btn">
              Contactar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;