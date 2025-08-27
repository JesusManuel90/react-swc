import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from './useAuth';
import {ROUTES} from '../../constants/routes.constant';

export const useLoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    }, [errors]);

    const handlePasswordToggle = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    const handleRememberMeToggle = useCallback((checked) => {
        setRememberMe(checked);
    }, []);

    const validateForm = useCallback(() => {
        const newErrors = {};

        if (!credentials.username.trim()) {
            newErrors.username = 'El email es requerido';
        }

        if (!credentials.password) {
            newErrors.password = 'La contraseña es requerida';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [credentials]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({});

        try {
            const result = await login(credentials);
            
            if (result.success) {
                setIsSuccess(true);

                if (rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                } else {
                    localStorage.removeItem('rememberMe');
                }

                setTimeout(() => {
                    navigate(ROUTES.DASHBOARD);
                    setIsLoading(false);
                }, 2000);

                return result;
            } else {
                setIsLoading(false);
                setErrors({
                    username: result.message || 'Credenciales inválidas',
                    password: result.message || 'Credenciales inválidas'
                });
                return result;
            }

        } catch (error) {
            setIsLoading(false);
            const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
            
            setErrors({
                username: errorMessage,
                password: errorMessage
            });
            
            return {
                success: false,
                error: errorMessage,
                message: errorMessage
            };
        }
    }, [validateForm, login, credentials, rememberMe, navigate]);

    return {
        credentials,
        showPassword,
        rememberMe,
        isLoading,
        errors,
        isSuccess,
        handleInputChange,
        handlePasswordToggle,
        handleRememberMeToggle,
        handleSubmit
    };
};