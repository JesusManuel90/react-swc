import {Edit, Trash2} from "lucide-react";

export const UserActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-end space-x-2">
      <button 
        onClick={onEdit}
        className="text-indigo-400 hover:text-indigo-300 p-1 rounded hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
      >
        <Edit className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
      </button>
      <button 
        onClick={onDelete}
        className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-500/20 transition-all duration-300 hover:scale-110 hover:-rotate-12 group"
      >
        <Trash2 className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce" />
      </button>
    </div>
  );
};