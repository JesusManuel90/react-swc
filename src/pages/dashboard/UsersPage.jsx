import {useState} from "react";
import {SearchBar} from "../../components/ui/SearchBar";
import {UsersTable} from "../../components/users/table/UsersTable";
import {UsersHeader} from "../../components/users/UsersHeader";
import {useSearchUsers} from "../../hooks/users/useSearchUser";
import {useUsers} from "../../hooks/users/useUsers";
import {UserModal} from "../../components/users/UserModal";
import ToastModal from "../../components/ui/ToastModal";
import {useToast} from "../../hooks/ui/useToast";

const UsersPage = () => {
  const { users, addUser, updateUser, deleteUser } = useUsers();
  const { searchTerm, setSearchTerm, filteredUsers } = useSearchUsers(users);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const { toast, showSuccess, showConfirm, closeToast } = useToast();

  const handleCreateUser = () => {
    setShowCreateModal(true);
    setEditingUser(null);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowCreateModal(true);
  };

  const handleDeleteUser = (id) => {
    const userToDelete = users.find(user => user.id === id);
    showConfirm(
      'Confirmar eliminación',
      `¿Estás seguro de que deseas eliminar al usuario "${userToDelete?.name}"? Esta acción no se puede deshacer.`,
      () => {
        deleteUser(id);
        showSuccess(
          'Usuario eliminado',
          'El usuario ha sido eliminado exitosamente del sistema.'
        );
      },
      'Eliminar',
      'Cancelar'
    );
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setEditingUser(null);
  };

  const handleSaveUser = (userData) => {
    if (editingUser) {
      updateUser(editingUser.id, userData);
      showSuccess(
        'Usuario actualizado',
        'Los datos del usuario han sido actualizados exitosamente.'
      );
    } else {
      addUser(userData);
      showSuccess(
        'Usuario creado',
        'El nuevo usuario ha sido creado exitosamente en el sistema.'
      );
    }
    handleCloseModal();
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen animate-in fade-in duration-700">
      <div className="fixed top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/4 w-24 h-24 bg-indigo-400/5 rounded-full blur-2xl animate-bounce duration-3000 pointer-events-none"></div>
      <UsersHeader onCreateUser={handleCreateUser} />
      
      <SearchBar
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        placeholder="Buscar usuarios..."
      />

      <UsersTable
        users={filteredUsers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
      
      <UserModal
        onSave={handleSaveUser}
        showCreateModal={showCreateModal}
        handleCloseModal={handleCloseModal}
        editingUser={editingUser}
      />

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

export default UsersPage;