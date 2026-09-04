import { useContext } from 'react';
import { ViewContext } from '../context/ViewContext';

export const useViewMode = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useViewMode must be used within ViewProvider');
  }
  return context;
};
