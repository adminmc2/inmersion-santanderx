import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import ModuleViewer from './pages/ModuleViewer';
import DocumentViewer from './pages/DocumentViewer';
import AdminPanel from './pages/AdminPanel';
import AccessGate from './pages/AccessGate';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [adminViewMode, setAdminViewMode] = useState(true); // true = vista admin, false = vista pública
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('auth_token');
    const userRole = localStorage.getItem('user_role');

    // Check general access (for Santander Explorer members)
    const accessGranted = localStorage.getItem('santander_access');
    const accessExpiry = localStorage.getItem('access_expiry');

    if (token) {
      setIsAuthenticated(true);
      setIsAdmin(userRole === 'admin');
      setHasAccess(true); // Admins always have access
    } else if (accessGranted && accessExpiry) {
      const expiryDate = new Date(accessExpiry);
      const now = new Date();
      if (now < expiryDate) {
        setHasAccess(true);
      }
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

  // Si no tiene acceso, mostrar la puerta de acceso
  if (!hasAccess && !isAuthenticated) {
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
            path="/admin-login"
            element={
              <Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />
            }
          />
          <Route
            path="*"
            element={
              <AccessGate onAccessGranted={() => {
                setHasAccess(true);
                window.location.reload();
              }} />
            }
          />
        </Routes>
      </Router>
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
          path="/admin-login"
          element={
            isAuthenticated ?
            <Navigate to="/" replace /> :
            <Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />
          }
        />
        <Route
          path="/"
          element={
            <Portfolio
              isAdmin={isAdmin && adminViewMode}
              isRealAdmin={isAdmin}
              adminViewMode={adminViewMode}
              setAdminViewMode={setAdminViewMode}
            />
          }
        />
        <Route
          path="/module/:moduleId"
          element={
            <ModuleViewer isAdmin={isAdmin && adminViewMode} />
          }
        />
        <Route
          path="/module/:moduleId/topic/:topicId"
          element={
            <DocumentViewer isAdmin={isAdmin && adminViewMode} />
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