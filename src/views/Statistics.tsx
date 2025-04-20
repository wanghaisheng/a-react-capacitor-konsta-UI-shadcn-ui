import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';

export default function Statistics() {
  const { t } = useTranslation();
  const { user } = useUserStore();

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('statistics.title')}
          </h1>
          <div className="flex items-center space-x-3">
            <button className="text-purple-600">
              <i className="fas fa-download"></i>
            </button>
            <button className="text-purple-600">
              <i className="fas fa-share"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="p-4">
        {/* Time Period Selector */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium">
            {t('statistics.week')}
          </button>
          <button className="px-4 py-2 bg-purple-600 rounded-lg text-white font-medium">
            {t('statistics.month')}
          </button>
          <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium">
            {t('statistics.year')}
          </button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-600">45</p>
                <p className="text-sm text-gray-500">{t('statistics.totalWishes')}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-star text-purple-600"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-600">12</p>
                <p className="text-sm text-gray-500">{t('statistics.completedWishes')}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-check text-purple-600"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-4">
            {t('statistics.progress')}
          </h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">{t('statistics.chartPlaceholder')}</p>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-4">
            {t('statistics.categories')}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">{t('statistics.personal')}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">40%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">{t('statistics.career')}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">{t('statistics.health')}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">{t('statistics.education')}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">10%</span>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">
            {t('statistics.activity')}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {t('statistics.activity.wishCreated')}
                </p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {t('statistics.activity.wishCompleted')}
                </p>
                <p className="text-xs text-gray-500">5 days ago</p>
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