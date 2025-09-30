import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ConnectionStatus from './components/ConnectionStatus';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import apiService from './services/api';
import offlineStorage from './services/offlineStorage';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const isOnline = useOnlineStatus();

  // Load posts in the first loading
  useEffect(() => {
    loadPosts();
  }, [isOnline]);

  const loadPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      if (isOnline) {
        // Try loading from API
        const data = await apiService.getAllPosts();
        setPosts(data);
        setFilteredPosts(data);
        // Store in caché
        offlineStorage.savePosts(data);
      } else {
        // Load from caché
        const cachedPosts = offlineStorage.getPosts();
        if (cachedPosts) {
          setPosts(cachedPosts);
          setFilteredPosts(cachedPosts);
        } else {
          setError('No hay datos en caché. Conecta a internet para cargar las entradas.');
        }
      }
    } catch (err) {
      console.error('Error loading posts:', err);
      // If online load fails, try with cache
      if (!isOnline) {
        const cachedPosts = offlineStorage.getPosts();
        if (cachedPosts) {
          setPosts(cachedPosts);
          setFilteredPosts(cachedPosts);
        }
      }
      setError('Error al cargar las entradas. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Load posts
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower) ||
      post.author.toLowerCase().includes(searchLower)
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  const handleCreatePost = async (postData) => {
    try {
      const newPost = await apiService.createPost(postData);
      setPosts(prev => [newPost, ...prev]);
      setShowForm(false);
      // Update caché
      offlineStorage.savePosts([newPost, ...posts]);
    } catch (err) {
      console.error('Error creating post:', err);
      alert('Error al crear la entrada. Por favor, intenta de nuevo.');
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ConnectionStatus isOnline={isOnline} />

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {!showForm && !selectedPost && (
          <>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
              <div className="flex-1 w-full sm:w-auto">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                  onClearSearch={handleClearSearch}
                />
              </div>
              <button
                onClick={() => setShowForm(true)}
                disabled={!isOnline}
                className={`btn-primary flex items-center gap-2 ${
                  !isOnline ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Plus className="w-5 h-5" />
                Nueva Entrada
              </button>
            </div>

            {searchTerm && (
              <div className="mb-4">
                <p className="text-gray-600">
                  Mostrando {filteredPosts.length} resultado(s) para "{searchTerm}"
                </p>
              </div>
            )}

            <PostList
              posts={filteredPosts}
              onSelectPost={handleSelectPost}
              loading={loading}
            />
          </>
        )}

        {showForm && (
          <PostForm
            onSubmit={handleCreatePost}
            onCancel={handleCancelForm}
            isOnline={isOnline}
          />
        )}

        {selectedPost && (
          <PostDetail
            post={selectedPost}
            onBack={handleBackToList}
          />
        )}
      </main>
    </div>
  );
}

export default App;