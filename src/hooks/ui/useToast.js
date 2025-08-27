import { useState, useCallback } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
    showConfirmButton: false,
    onConfirm: null,
    confirmText: 'Confirmar',
    cancelText: 'Cancelar'
  });

  const showSuccess = useCallback((title, message) => {
    setToast({
      isOpen: true,
      type: 'success',
      title,
      message,
      showConfirmButton: false
    });
  }, []);

  const showError = useCallback((title, message) => {
    setToast({
      isOpen: true,
      type: 'error',
      title,
      message,
      showConfirmButton: false
    });
  }, []);

  const showWarning = useCallback((title, message) => {
    setToast({
      isOpen: true,
      type: 'warning',
      title,
      message,
      showConfirmButton: false
    });
  }, []);

  const showInfo = useCallback((title, message) => {
    setToast({
      isOpen: true,
      type: 'info',
      title,
      message,
      showConfirmButton: false
    });
  }, []);

  const showConfirm = useCallback((title, message, onConfirm, confirmText = 'Confirmar', cancelText = 'Cancelar') => {
    setToast({
      isOpen: true,
      type: 'warning',
      title,
      message,
      showConfirmButton: true,
      onConfirm,
      confirmText,
      cancelText
    });
  }, []);

  const closeToast = useCallback(() => {
    setToast(prev => ({ ...prev, isOpen: false }));
  }, []);

  return {
    toast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showConfirm,
    closeToast
  };
}; 