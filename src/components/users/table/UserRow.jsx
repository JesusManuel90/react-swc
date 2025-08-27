import {Avatar} from "../Avatar";
import {RoleBadge} from "../RoleBadge";
import {UserActions} from "../UserActions";

export const UserRow = ({ user, onEdit, onDelete, index }) => {
  return (
    <tr className="hover:bg-white/5 transition-all duration-300 animate-in slide-in-from-bottom duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/5" style={{animationDelay: `${index * 100}ms`}}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center group">
          <Avatar name={user.name} />
          <div className="ml-4 transition-all duration-300 group-hover:translate-x-1">
            <div className="text-sm font-medium text-white transition-all duration-300 group-hover:text-blue-300">{user.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200 transition-all duration-300 hover:text-white">
        {user.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <RoleBadge role={user.role} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200 transition-all duration-300 hover:text-white">
        {user.createdAt}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <UserActions
          onEdit={() => onEdit(user)} 
          onDelete={() => onDelete(user.id)} 
        />
      </td>
    </tr>
  );
};