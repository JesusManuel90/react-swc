import { usePosts } from '../../hooks/posts/usePosts';
import { PostCard } from '../../components/posts/PostCard';
import { SearchBar } from '../../components/ui/SearchBar';
import { Pagination } from '../../components/ui/Pagination';

export const PostsPage = () => {
  const {
    posts,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
  } = usePosts();

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-100">Publicaciones</h1>
            <p className="text-gray-400 mt-1">Explora, busca y lee las últimas publicaciones.</p>
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder="Buscar por título o contenido..."/>
        </div>

        {isLoading && <p className="text-center text-gray-400">Cargando publicaciones...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        
        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.length > 0 ? (
                posts.map(post => <PostCard key={post.id} post={post} />)
              ) : (
                <p className="text-gray-400 col-span-full text-center">No se encontraron publicaciones.</p>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};
