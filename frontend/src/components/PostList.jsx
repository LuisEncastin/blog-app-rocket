import PostCard from './PostCard';
import { FileText } from 'lucide-react';

function PostList({ posts, onSelectPost, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">No se encontraron entradas</p>
        <p className="text-gray-500 text-sm mt-2">
          Intenta con una búsqueda diferente o crea una nueva entrada
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <PostCard 
          key={post.id} 
          post={post} 
          onClick={() => onSelectPost(post)}
        />
      ))}
    </div>
  );
}

export default PostList;