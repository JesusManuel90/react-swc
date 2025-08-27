import {UserRow} from "./UserRow";

export const UsersTable = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg animate-in fade-in duration-500 delay-300">
        <div className="text-center py-12">
          <div className="text-blue-300 text-lg mb-2 animate-bounce">👥</div>
          <p className="text-white text-lg font-medium animate-in slide-in-from-bottom duration-500 delay-500">No se encontraron usuarios</p>
          <p className="text-blue-200 text-sm animate-in slide-in-from-bottom duration-500 delay-700">Intenta con otros términos de búsqueda</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg overflow-hidden animate-in slide-in-from-bottom duration-500 delay-300 hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5 border-b border-white/20">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                USUARIO
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                EMAIL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                ROL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                FECHA DE CREACIÓN
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-blue-200 uppercase tracking-wider">
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {users.map((user, index) => (
              <UserRow
                key={user.id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};