import {Card, CardContent, CardHeader, CardTitle} from '../../components/ui/Card';
import {BarChart3, Users, FileText, TrendingUp, Activity, Target} from 'lucide-react';
import {useUsers} from '../../hooks/users/useUsers';
import {usePosts} from '../../hooks/posts/usePosts';

const DashboardPage = () => {
    const { users } = useUsers();
    const { totalPosts } = usePosts();
    return (
        <div className="p-6 space-y-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen animate-in fade-in duration-700">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
                <p className="text-gray-300 text-xl">Bienvenido a tu panel de control</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-300">Usuarios Totales</CardTitle>
                        <Users className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{users.length}</div>
                        <p className="text-xs text-green-400">+20.1% desde el mes pasado</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-300">Posts Creados</CardTitle>
                        <FileText className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{totalPosts}</div>
                        <p className="text-xs text-green-400">+15.3% desde el mes pasado</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-300">Vistas Totales</CardTitle>
                        <BarChart3 className="h-4 w-4 text-purple-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">45,231</div>
                        <p className="text-xs text-green-400">+12.5% desde el mes pasado</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-300">Tasa de Conversión</CardTitle>
                        <Target className="h-4 w-4 text-red-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">3.24%</div>
                        <p className="text-xs text-green-400">+2.1% desde el mes pasado</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-300">Ingresos</CardTitle>
                        <TrendingUp className="h-4 w-4 text-yellow-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">$12,345</div>
                        <p className="text-xs text-green-400">+8.2% desde el mes pasado</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-300">Actividad</CardTitle>
                        <Activity className="h-4 w-4 text-indigo-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">98.2%</div>
                        <p className="text-xs text-green-400">+1.2% desde el mes pasado</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-white">Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 flex items-center justify-center text-gray-400">
                        <p>Gráfico de actividad se mostrará aquí</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DashboardPage; 