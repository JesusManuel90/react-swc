
export const PostCard = ({ post }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500  p-6 transition">
      <h3 className="text-xl font-bold text-gray-100 mb-2 truncate">{post.title}</h3>
      <p className="text-gray-400 text-sm flex-grow">{post.body.substring(0, 100)}...</p>
      <span className="text-xs text-green-400 mt-4">User ID: {post.userId}</span>
    </div>
  );
};
