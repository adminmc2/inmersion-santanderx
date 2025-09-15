import React from 'react';
import CanvasPropuestaValorV3 from './CanvasPropuestaValorV3';

interface CanvasPropuestaValorProps {
  onClose?: () => void;
  isAdmin?: boolean;
}

const CanvasPropuestaValor: React.FC<CanvasPropuestaValorProps> = ({ onClose, isAdmin }) => {
  return <CanvasPropuestaValorV3 onClose={onClose} isAdmin={isAdmin} />;
};

export default CanvasPropuestaValor;