import { Outlet } from 'react-router-dom';
import Sidebar from '../components/ui/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <Sidebar />

      <div className="absolute top-0 right-12 w-px h-full bg-white/10 hidden lg:block"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-20 lg:ml-64">
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 