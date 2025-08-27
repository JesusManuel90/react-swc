import {Plus} from "lucide-react";

export const UsersHeader = ({ onCreateUser }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-in slide-in-from-top duration-500">
      <div className="animate-in slide-in-from-left duration-700">
        <h1 className="text-2xl font-bold text-white">Gestión de Usuarios</h1>
        <p className="text-blue-200">Administra usuarios del sistema</p>
      </div>
      <button
        onClick={onCreateUser}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg transform hover:scale-110 hover:shadow-purple-500/25 animate-in slide-in-from-right duration-700 hover:rotate-1"
      >
        <Plus className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-90" />
        Crear Usuario
      </button>
    </div>
  );
};