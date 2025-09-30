import { Calendar, User } from 'lucide-react';

function PostCard({ post, onClick }) {
  const truncateContent = (text, maxLength = 70) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div 
      onClick={onClick}
      className="card cursor-pointer transform hover:scale-[1.02] transition-transform duration-200"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
        {post.title}
      </h3>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(post.created_at)}</span>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">
        {truncateContent(post.content)}
      </p>
    </div>
  );
}

export default PostCard;