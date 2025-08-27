export const Avatar = ({ name }) => {
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = [
      'bg-purple-500', 'bg-blue-500', 'bg-green-500', 
      'bg-yellow-500', 'bg-pink-500', 'bg-indigo-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg animate-in zoom-in duration-500 ${getAvatarColor(name)}`}>
      {getInitials(name)}
    </div>
  );
};