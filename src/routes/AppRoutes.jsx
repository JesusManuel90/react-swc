import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/auth/LoginPage';
import DashboardLayout from '../layouts/DashboardLayout';
import {ProtectedRoute} from './ProtectedRoute';
import DashboardPage from '../pages/dashboard/DashboardPage';
import {PublicRoute} from './PublicRoute';
import UsersPage from '../pages/dashboard/UsersPage';
import {PostsPage} from '../pages/dashboard/PostsPage';
import {ROUTES} from '../constants/routes.constant';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <PublicRoute restricted={true} redirectTo={ROUTES.DASHBOARD}>
                        <AuthLayout />
                    </PublicRoute>
                }>
                    <Route index element={<Navigate to={ROUTES.LOGIN} replace />} />
                    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                </Route>
                <Route path={ROUTES.DASHBOARD} element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<DashboardPage />} />
                    <Route path={ROUTES.USERS} element={<UsersPage />} />
                    <Route path={ROUTES.POSTS} element={<PostsPage />} />
                </Route>
                <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
                <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes; 