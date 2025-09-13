import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import ModuleViewer from './pages/ModuleViewer';
import DocumentViewer from './pages/DocumentViewer';
import AdminPanel from './pages/AdminPanel';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminViewMode, setAdminViewMode] = useState(true); // true = vista admin, false = vista pública
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('auth_token');
    const userRole = localStorage.getItem('user_role');
    
    if (token) {
      setIsAuthenticated(true);
      setIsAdmin(userRole === 'admin');
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/" replace /> : 
            <Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />
          } 
        />
        <Route
          path="/"
          element={
            isAuthenticated ? 
            <Portfolio 
              isAdmin={isAdmin && adminViewMode} 
              isRealAdmin={isAdmin}
              adminViewMode={adminViewMode}
              setAdminViewMode={setAdminViewMode}
            /> : 
            <Navigate to="/login" replace />
          }
        />
        <Route
          path="/module/:moduleId"
          element={
            isAuthenticated ? 
            <ModuleViewer isAdmin={isAdmin && adminViewMode} /> : 
            <Navigate to="/login" replace />
          }
        />
        <Route
          path="/module/:moduleId/topic/:topicId"
          element={
            isAuthenticated ? 
            <DocumentViewer isAdmin={isAdmin && adminViewMode} /> : 
            <Navigate to="/login" replace />
          }
        />
        {isAdmin && adminViewMode && (
          <Route
            path="/admin"
            element={<AdminPanel />}
          />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;