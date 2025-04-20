import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';

export default function Community() {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const [newPost, setNewPost] = useState('');

  const handleCreatePost = () => {
    // TODO: Implement post creation logic
    setNewPost('');
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('community.title')}
          </h1>
          <div className="flex items-center space-x-3">
            <button className="text-purple-600">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-purple-600">
              <i className="fas fa-bell"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="p-4">
        {/* Create Post */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-purple-600"></i>
            </div>
            <div className="flex-1">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                rows={3}
                placeholder={t('community.postPlaceholder')}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-2">
                  <button className="text-gray-500">
                    <i className="fas fa-image"></i>
                  </button>
                  <button className="text-gray-500">
                    <i className="fas fa-smile"></i>
                  </button>
                </div>
                <button
                  onClick={handleCreatePost}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                  disabled={!newPost.trim()}
                >
                  {t('community.post')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-purple-600"></i>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">Sarah Johnson</h3>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Just completed my first week of Spanish lessons! 🎉
                </p>
                <div className="flex items-center space-x-4 mt-3">
                  <button className="flex items-center space-x-1 text-gray-500">
                    <i className="fas fa-heart"></i>
                    <span>24</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <i className="fas fa-comment"></i>
                    <span>5</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-purple-600"></i>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">Mike Chen</h3>
                  <span className="text-xs text-gray-500">5 hours ago</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Looking for study partners for the upcoming certification exam. Anyone interested?
                </p>
                <div className="flex items-center space-x-4 mt-3">
                  <button className="flex items-center space-x-1 text-gray-500">
                    <i className="fas fa-heart"></i>
                    <span>12</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <i className="fas fa-comment"></i>
                    <span>3</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-home"></i>
            <span className="text-xs">{t('nav.home')}</span>
          </a>
          <a href="/wish-setting" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-star"></i>
            <span className="text-xs">{t('nav.wishes')}</span>
          </a>
          <a href="/progress" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-chart-line"></i>
            <span className="text-xs">{t('nav.progress')}</span>
          </a>
          <a href="/leaderboard" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-trophy"></i>
            <span className="text-xs">{t('nav.leaderboard')}</span>
          </a>
          <a href="/profile" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-user"></i>
            <span className="text-xs">{t('nav.profile')}</span>
          </a>
        </div>
      </nav>
    </div>
  );
} 