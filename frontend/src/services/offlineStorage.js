const STORAGE_KEY = 'blog_posts_cache';

class OfflineStorage {
  savePosts(posts) {
    try {
      const data = {
        posts,
        timestamp: new Date().toISOString()
      };
      // Use memory variables instead of localStorage
      window.__blogCache = data;
    } catch (error) {
      console.error('Error saving posts to cache:', error);
    }
  }

  getPosts() {
    try {
      const data = window.__blogCache;
      if (!data) return null;
      
      return data.posts;
    } catch (error) {
      console.error('Error loading posts from cache:', error);
      return null;
    }
  }

  clearCache() {
    try {
      window.__blogCache = null;
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }

  getCacheTimestamp() {
    try {
      const data = window.__blogCache;
      return data?.timestamp || null;
    } catch (error) {
      console.error(error)
      return null;
    }
  }
}

export default new OfflineStorage();