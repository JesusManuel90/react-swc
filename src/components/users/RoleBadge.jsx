export const RoleBadge = ({ role }) => {
  const getRoleStyle = (role) => {
    return role === 'Admin' 
      ? 'bg-purple-100 text-purple-800 border-purple-200' 
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border transition-all duration-300 hover:scale-105 animate-in fade-in duration-700 ${getRoleStyle(role)}`}>
      {role}
    </span>
  );
};