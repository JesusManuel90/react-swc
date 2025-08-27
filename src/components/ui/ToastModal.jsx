import { CheckCircle, AlertTriangle, X, Info } from 'lucide-react';

const ToastModal = ({ 
  isOpen, 
  onClose, 
  type = 'success', 
  title, 
  message, 
  onConfirm, 
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  showConfirmButton = false 
}) => {
  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          icon: <CheckCircle className="w-16 h-16 text-green-400" />,
          bgGradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
          borderColor: 'border-green-500/30',
          glowColor: 'shadow-green-500/25',
          iconBg: 'bg-green-500/10',
          iconBorder: 'border-green-500/20'
        };
      case 'error':
        return {
          icon: <AlertTriangle className="w-16 h-16 text-red-400" />,
          bgGradient: 'from-red-500/20 via-pink-500/20 to-rose-500/20',
          borderColor: 'border-red-500/30',
          glowColor: 'shadow-red-500/25',
          iconBg: 'bg-red-500/10',
          iconBorder: 'border-red-500/20'
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="w-16 h-16 text-yellow-400" />,
          bgGradient: 'from-yellow-500/20 via-amber-500/20 to-orange-500/20',
          borderColor: 'border-yellow-500/30',
          glowColor: 'shadow-yellow-500/25',
          iconBg: 'bg-yellow-500/10',
          iconBorder: 'border-yellow-500/20'
        };
      case 'info':
        return {
          icon: <Info className="w-16 h-16 text-blue-400" />,
          bgGradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
          borderColor: 'border-blue-500/30',
          glowColor: 'shadow-blue-500/25',
          iconBg: 'bg-blue-500/10',
          iconBorder: 'border-blue-500/20'
        };
      default:
        return {
          icon: <CheckCircle className="w-16 h-16 text-green-400" />,
          bgGradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
          borderColor: 'border-green-500/30',
          glowColor: 'shadow-green-500/25',
          iconBg: 'bg-green-500/10',
          iconBorder: 'border-green-500/20'
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="relative group">
        <div className={`absolute -inset-1 bg-gradient-to-r ${styles.bgGradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500`}></div>
        
        <div className={`relative bg-slate-800/95 backdrop-blur-2xl border ${styles.borderColor} rounded-3xl p-8 shadow-2xl ${styles.glowColor} max-w-md w-full animate-in zoom-in duration-300`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className={`relative inline-flex items-center justify-center w-24 h-24 ${styles.iconBg} ${styles.iconBorder} rounded-3xl mb-6 shadow-lg`}>
              {styles.icon}
              <div className={`absolute inset-0 ${styles.iconBg} rounded-3xl blur-xl opacity-50`}></div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{message}</p>

            <div className="flex gap-4">
              {showConfirmButton ? (
                <>
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-2xl hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {cancelText}
                  </button>
                  <button
                    onClick={() => {
                      onConfirm?.();
                      onClose();
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25"
                  >
                    {confirmText}
                  </button>
                </>
              ) : (
                <button
                  onClick={onClose}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Entendido
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastModal; 