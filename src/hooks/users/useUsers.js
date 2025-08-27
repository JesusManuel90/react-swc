import {useEffect, useState} from "react";
import {STORAGE_KEY} from "../../constants/users";

const defaultUsers = [
    {
        id: 1,
        name: 'Juan Pérez',
        email: 'juan@example.com',
        role: 'Admin',
        createdAt: '2024-01-15'
    },
    {
        id: 2,
        name: 'María García',
        email: 'maria@example.com',
        role: 'User',
        createdAt: '2024-01-20'
    },
    {
        id: 3,
        name: 'Carlos López',
        email: 'carlos@example.com',
        role: 'User',
        createdAt: '2024-01-25'
    },
];

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const saveToStorage = (userData) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
            return true;
        } catch (err) {
            console.error('Error saving to localStorage:', err);
            setError('Error al guardar los datos');
            return false;
        }
    };

    const addUser = (newUser) => {
        try {
            setError(null);

            const user = {
                id: Date.now(),
                ...newUser,
                createdAt: new Date().toISOString().split('T')[0]
            };

            const updatedUsers = [...users, user];

            if (saveToStorage(updatedUsers)) {
                setUsers(updatedUsers);
                return {success: true, data: user, message: 'Usuario creado exitosamente'};
            }

            return {success: false, error: 'Error al guardar el usuario', message: 'No se pudo guardar el usuario en el almacenamiento'};
        } catch (err) {
            console.error('Error adding user:', err);
            setError('Error al agregar el usuario');
            return {success: false, error: err.message, message: 'Error inesperado al crear el usuario'};
        }
    };

    const updateUser = (id, userData) => {
        try {
            setError(null);
            const updatedUsers = users.map(user =>
                user.id === id ? {...user, ...userData} : user
            );

            if (saveToStorage(updatedUsers)) {
                setUsers(updatedUsers);
                return {success: true, message: 'Usuario actualizado exitosamente'};
            }
            return {success: false, error: 'Error al actualizar el usuario', message: 'No se pudo guardar la actualización'};
        } catch (err) {
            console.error('Error updating user:', err);
            setError('Error al actualizar el usuario');
            return {success: false, error: err.message, message: 'Error inesperado al actualizar el usuario'};
        }
    };

    const deleteUser = (id) => {
        try {
            setError(null);
            const userToDelete = users.find(user => user.id === id);
            const updatedUsers = users.filter(user => user.id !== id);

            if (saveToStorage(updatedUsers)) {
                setUsers(updatedUsers);
                return {success: true, message: `Usuario "${userToDelete?.name}" eliminado exitosamente`};
            }
            return {success: false, error: 'Error al eliminar el usuario', message: 'No se pudo completar la eliminación'};
        } catch (err) {
            console.error('Error deleting user:', err);
            setError('Error al eliminar el usuario');
            return {success: false, error: err.message, message: 'Error inesperado al eliminar el usuario'};
        }
    };

    useEffect(() => {
        try {
            setIsLoading(true);
            setError(null);

            const storedUsers = localStorage.getItem(STORAGE_KEY);

            if (storedUsers) {
                const parsedUsers = JSON.parse(storedUsers);
                setUsers(parsedUsers);
            } else {
                setUsers(defaultUsers);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
            }
        } catch (err) {
            console.error('Error loading users from localStorage:', err);
            setError('Error al cargar los usuarios');
            setUsers(defaultUsers);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {users, error, isLoading, addUser, updateUser, deleteUser};
};
