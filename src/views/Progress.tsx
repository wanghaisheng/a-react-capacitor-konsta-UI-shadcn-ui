import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';
import { Link } from "react-router-dom";
import { Page } from "konsta/react";

export default function Progress() {
  const { t } = useTranslation();
  // const { user } = useUserStore(); // user is not used, comment or remove to fix lint error

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('progress.title')}
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
          {/* Progress Overview */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-purple-600">75%</p>
              <p className="text-xs text-gray-500">{t('progress.total')}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-purple-600">90%</p>
              <p className="text-xs text-gray-500">{t('progress.today')}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-purple-600">85%</p>
              <p className="text-xs text-gray-500">{t('progress.week')}</p>
            </div>
          </div>

          {/* Progress Chart */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Progress Chart</h3>
            <div className="h-64">
              {/* Chart will be added here */}
            </div>
          </div>

          {/* Recent Progress */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Recent Progress</h3>
            <div className="space-y-4">
              {/* Progress items will be added here */}
            </div>
          </div>
        </main>
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
          <div className="flex justify-around">
            <Link to="/" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-home"></i>
              <span className="text-xs">{t('nav.home')}</span>
            </Link>
            <Link to="/wish-setting" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-star"></i>
              <span className="text-xs">{t('nav.wishes')}</span>
            </Link>
            <Link to="/progress" className="flex flex-col items-center text-purple-600">
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