import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';
import { Link } from "react-router-dom";
import { Page } from "konsta/react";

export default function Leaderboard() {
  const { t } = useTranslation();
  const { user } = useUserStore();

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('leaderboard.title')}
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
          {/* Time Period Selector */}
          <div className="flex justify-center space-x-4 mb-6">
            <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium">
              {t('leaderboard.daily')}
            </button>
            <button className="px-4 py-2 bg-purple-600 rounded-lg text-white font-medium">
              {t('leaderboard.weekly')}
            </button>
            <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium">
              {t('leaderboard.monthly')}
            </button>
          </div>

          {/* Leaderboard List */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {/* Top 3 */}
              <div className="p-4 flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold">
                  2
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-800">Jane Smith</h3>
                  <p className="text-sm text-gray-500">1,234 points</p>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full text-white">
                  <i className="fas fa-crown"></i>
                </div>
              </div>

              <div className="p-4 flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-white font-bold">
                  3
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-800">Mike Johnson</h3>
                  <p className="text-sm text-gray-500">1,123 points</p>
                </div>
              </div>

              {/* Current User */}
              <div className="p-4 flex items-center bg-purple-50">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">
                  4
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-800">{user?.name}</h3>
                  <p className="text-sm text-gray-500">1,000 points</p>
                </div>
              </div>

              {/* Other Users */}
              <div className="p-4 flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-white font-bold">
                  5
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-800">Sarah Wilson</h3>
                  <p className="text-sm text-gray-500">950 points</p>
                </div>
              </div>
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
            <Link to="/progress" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-chart-line"></i>
              <span className="text-xs">{t('nav.progress')}</span>
            </Link>
            <Link to="/leaderboard" className="flex flex-col items-center text-purple-600">
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