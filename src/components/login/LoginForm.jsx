import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from '../../hooks/auth/useLoginForm';
import ToastModal from '../ui/ToastModal';
import { useToast } from '../../hooks/ui/useToast';
import { ROUTES } from '../../constants/routes.constant';

const LoginForm = () => {
    const {
        credentials,
        showPassword,
        rememberMe,
        isLoading,
        errors,
        handleInputChange,
        handlePasswordToggle,
        handleRememberMeToggle,
        handleSubmit
    } = useLoginForm();

    const { toast, showError, closeToast } = useToast();
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        if (!credentials.username.trim() || !credentials.password) {
            showError('Campos requeridos', 'Por favor completa todos los campos obligatorios.');
            return;
        }

        try {
            const result = await handleSubmit(e);
            if (result?.success) {
                navigate(ROUTES.DASHBOARD);
            } else if (result?.error) {
                showError('Error de autenticación', result.message || 'Credenciales inválidas');
            }
        } catch {
            showError('Error inesperado', 'Ocurrió un error durante el inicio de sesión.');
        }
    };

    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black/50">
                <div className="text-center mb-12">
                    <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl mb-8 shadow-2xl">
                        <Shield className="w-14 h-14 text-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-50"></div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold text-white tracking-tight">
                            Bienvenido
                        </h1>
                        <p className="text-gray-300 text-xl font-light">
                            Ingresa a tu cuenta para continuar
                        </p>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
                </div>

                <form className="space-y-8" onSubmit={handleFormSubmit}>
                    <div className="space-y-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-200 tracking-wide uppercase"
                        >
                            Correo electrónico
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" size={22} />
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleInputChange}
                                    placeholder="tu@email.com"
                                    className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 hover:border-white/20 text-lg"
                                    aria-describedby={errors.username ? "username-error" : undefined}
                                />
                            </div>
                        </div>
                        {errors.username && (
                            <p id="username-error" className="text-sm text-red-400 flex items-center gap-2 ml-2">
                                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                {errors.username}
                            </p>
                        )}
                    </div>

                    <div className="space-y-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-200 tracking-wide uppercase"
                        >
                            Contraseña
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" size={22} />
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleInputChange}
                                    placeholder="••••••••"
                                    className="w-full pl-16 pr-16 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 hover:border-white/20 text-lg"
                                    aria-describedby={errors.password ? "password-error" : undefined}
                                />
                                <button
                                    type="button"
                                    onClick={handlePasswordToggle}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-xl hover:bg-white/10"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        {errors.password && (
                            <p id="password-error" className="text-sm text-red-400 flex items-center gap-2 ml-2">
                                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => handleRememberMeToggle(e.target.checked)}
                                    className="w-6 h-6 text-blue-500 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 group-hover:border-blue-400"
                                />
                                {rememberMe && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-sm"></div>
                                    </div>
                                )}
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                                Recordarme
                            </span>
                        </label>
                        <a
                            href="#"
                            className="text-blue-300 hover:text-blue-200 underline underline-offset-4 transition-colors duration-200 hover:no-underline font-semibold"
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center py-5 px-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 rounded-2xl text-white font-bold text-xl shadow-2xl shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] group mt-8"
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-3">
                                <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white"></div>
                                <span>Iniciando sesión...</span>
                            </div>
                        ) : (
                            <span className="flex items-center gap-3">
                                Iniciar Sesión
                                <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        )}
                    </button>
                </form>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-base">
                        ¿No tienes una cuenta?{' '}
                        <a
                            href="#"
                            className="text-blue-300 hover:text-blue-200 underline underline-offset-4 transition-colors duration-200 hover:no-underline font-semibold"
                        >
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </div>

            <ToastModal
                isOpen={toast.isOpen}
                onClose={closeToast}
                type={toast.type}
                title={toast.title}
                message={toast.message}
                onConfirm={toast.onConfirm}
                confirmText={toast.confirmText}
                cancelText={toast.cancelText}
                showConfirmButton={toast.showConfirmButton}
            />
        </div>
    );
};

export default LoginForm;