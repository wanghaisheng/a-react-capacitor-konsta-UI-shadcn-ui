import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';

export default function Dashboard() {
  const { t } = useTranslation();
  const { user } = useUserStore();

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('dashboard.title')}
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

      <main className="p-4">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {t('dashboard.welcome', { name: user?.name })}
          </h2>
          <p className="text-gray-600">
            {t('dashboard.motivation')}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-600">12</p>
                <p className="text-sm text-gray-500">{t('dashboard.activeWishes')}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-star text-purple-600"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-600">7</p>
                <p className="text-sm text-gray-500">{t('dashboard.completedWishes')}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-check text-purple-600"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-4">
            {t('dashboard.recentActivity')}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-pen text-purple-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {t('dashboard.activity.writing')}
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-star text-purple-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {t('dashboard.activity.wish')}
                </p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-purple-600 text-white py-3 rounded-lg font-medium">
            {t('dashboard.createWish')}
          </button>
          <button className="bg-white text-purple-600 py-3 rounded-lg font-medium border border-purple-600">
            {t('dashboard.viewProgress')}
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center text-purple-600">
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