import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';
import { Page } from "konsta/react";
import { Link } from "react-router-dom";

interface Wish {
  id: string;
  category: string;
  content: string;
  createdAt: string;
  progress: number;
}

export default function WishSetting() {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: '1',
      category: 'career',
      content: 'I am attracting abundant opportunities in my career that fulfill my purpose and bring me joy.',
      createdAt: '2024-03-15',
      progress: 33,
    },
    {
      id: '2',
      category: 'health',
      content: 'My body is healthy, strong, and full of energy. I take care of myself with love and respect.',
      createdAt: '2024-03-20',
      progress: 67,
    },
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [newWish, setNewWish] = useState({
    title: '',
    description: '',
    category: 'personal',
    deadline: '',
  });

  const handleCreateWish = () => {
    // TODO: Implement wish creation logic
    setIsCreating(false);
    setNewWish({
      title: '',
      description: '',
      category: 'personal',
      deadline: '',
    });
  };

  const handleDeleteWish = (id: string) => {
    setWishes(wishes.filter(wish => wish.id !== id));
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('wishSetting.title')}
          </h1>
          <div className="flex items-center space-x-3">
            <button className="text-purple-600">
              <i className="fas fa-globe"></i>
            </button>
            <button className="text-purple-600">
              <i className="fas fa-bell"></i>
            </button>
          </div>
        </div>
      </header>
      <Page>
        <main className="p-4">
          {/* Wish List */}
          <div className="space-y-4 mb-6">
            {wishes.map((wish) => (
              <div key={wish.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">{wish.content}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(wish.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 bg-${
                      wish.category === 'career' ? 'purple' :
                      wish.category === 'health' ? 'green' :
                      wish.category === 'relationships' ? 'pink' :
                      wish.category === 'wealth' ? 'yellow' :
                      'blue'
                    }-100 text-${
                      wish.category === 'career' ? 'purple' :
                      wish.category === 'health' ? 'green' :
                      wish.category === 'relationships' ? 'pink' :
                      wish.category === 'wealth' ? 'yellow' :
                      'blue'
                    }-600 rounded-full text-xs`}>
                      {t(`wishSetting.${wish.category}`)}
                    </span>
                    <button className="text-purple-600">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Create Wish Modal */}
          {isCreating && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl p-6 w-full max-w-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {t('wishSetting.createWish')}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('wishSetting.title')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      value={newWish.title}
                      onChange={(e) => setNewWish({ ...newWish, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('wishSetting.description')}
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      rows={3}
                      value={newWish.description}
                      onChange={(e) => setNewWish({ ...newWish, description: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('wishSetting.category')}
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      value={newWish.category}
                      onChange={(e) => setNewWish({ ...newWish, category: e.target.value })}
                    >
                      <option value="personal">{t('wishSetting.categories.personal')}</option>
                      <option value="career">{t('wishSetting.categories.career')}</option>
                      <option value="health">{t('wishSetting.categories.health')}</option>
                      <option value="education">{t('wishSetting.categories.education')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('wishSetting.deadline')}
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      value={newWish.deadline}
                      onChange={(e) => setNewWish({ ...newWish, deadline: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setIsCreating(false)}
                      className="px-4 py-2 text-gray-600"
                    >
                      {t('wishSetting.cancel')}
                    </button>
                    <button
                      onClick={handleCreateWish}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                    >
                      {t('wishSetting.save')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
          <div className="flex justify-around">
            <Link to="/" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-home"></i>
              <span className="text-xs">{t('nav.home')}</span>
            </Link>
            <Link to="/wish-setting" className="flex flex-col items-center text-purple-600">
              <i className="fas fa-star"></i>
              <span className="text-xs">{t('nav.wishes')}</span>
            </Link>
            <Link to="/progress" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-chart-line"></i>
              <span className="text-xs">{t('nav.progress')}</span>
            </Link>
            <Link to="/leaderboard" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-trophy"></i>
              <span className="text-xs">{t('nav.leaderboard')}</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-user"></i>
              <span className="text-xs">{t('nav.profile')}</span>
            </Link>
          </div>
        </nav>
      </Page>
    </div>
  );
}