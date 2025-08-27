import { useState, useEffect } from "react";
import { Modal } from "../ui/Modal";

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'User',
};

export const UserModal = ({ showCreateModal, handleCloseModal, editingUser, onSave }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || '',
        email: editingUser.email || '',
        role: editingUser.role || 'User',
        password: '',
        confirmPassword: '',
      });
    } else {
      setFormData(initialState);
    }
  }, [editingUser, showCreateModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editingUser && formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    const { confirmPassword, ...dataToSave } = formData;
    onSave(dataToSave);
  };

  return (
    <Modal isOpen={showCreateModal} onClose={handleCloseModal}>
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-2">
            {editingUser ? 'Editar Usuario' : 'Crear Usuario'}
          </h2>
          <p className="text-gray-400">
            {editingUser ? 'Modifica los datos del usuario' : 'Completa los datos para crear un usuario'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-600 bg-slate-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Ingresa el nombre completo"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-600 bg-slate-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-gray-300">
              Rol de Usuario
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-600 bg-slate-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            >
              <option value="User">Usuario</option>
              <option value="Admin">Administrador</option>
            </select>
          </div>

          {!editingUser && (
            <>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Mínimo 8 caracteres"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                  Confirmar contraseña
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Confirma la contraseña"
                  required
                />
              </div>
            </>
          )}

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={handleCloseModal}
              className="flex-1 px-4 py-3 border border-slate-600 text-gray-300 font-medium rounded-xl hover:bg-slate-700 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition shadow-lg"
            >
              {editingUser ? 'Actualizar Usuario' : 'Crear Usuario'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
