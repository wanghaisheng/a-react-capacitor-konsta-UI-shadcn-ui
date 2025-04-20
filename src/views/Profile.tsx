import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';
import { Page } from "konsta/react";
import { Link } from "react-router-dom";

export default function Profile() {
  const { t } = useTranslation();
  const { user, setUser } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    id: user?.id || '',
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    avatar: user?.avatar || 'https://randomuser.me/api/portraits/men/1.jpg',
  });

  const handleSave = () => {
    setUser({
      ...user,
      ...editedUser,
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('profile.title')}
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
          {/* Profile Header */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img
                  src={editedUser.avatar}
                  alt={editedUser.name}
                  className="w-20 h-20 rounded-full"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <i className="fas fa-camera"></i>
                  </button>
                )}
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder={t('profile.name')}
                  />
                ) : (
                  <h2 className="text-xl font-bold text-gray-800">{editedUser.name}</h2>
                )}
                <p className="text-sm text-gray-500">@{editedUser.name.toLowerCase().replace(/\s+/g, '')}</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-purple-600"
              >
                {isEditing ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-edit"></i>
                )}
              </button>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('profile.email')}
                  </label>
                  <input
                    type="email"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('profile.bio')}
                  </label>
                  <textarea
                    value={editedUser.bio}
                    onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    rows={3}
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium"
                >
                  {t('common.save')}
                </button>
              </div>
            ) : (
              <p className="text-gray-600">{editedUser.bio}</p>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-purple-600">15</p>
              <p className="text-xs text-gray-500">{t('profile.streak')}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-purple-600">45</p>
              <p className="text-xs text-gray-500">{t('profile.wishes')}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-purple-600">12</p>
              <p className="text-xs text-gray-500">{t('profile.achievements')}</p>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <h3 className="font-bold text-gray-800 mb-4">
              {t('profile.settings')}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{t('profile.notifications')}</p>
                  <p className="text-xs text-gray-500">{t('profile.notificationDesc')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{t('profile.darkMode')}</p>
                  <p className="text-xs text-gray-500">{t('profile.darkModeDesc')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="space-y-2">
            <button className="w-full bg-white text-gray-800 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
              <i className="fas fa-question-circle"></i>
              <span>{t('profile.help')}</span>
            </button>
            <button className="w-full bg-white text-gray-800 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
              <i className="fas fa-shield-alt"></i>
              <span>{t('profile.privacy')}</span>
            </button>
            <button className="w-full bg-white text-red-600 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
              <i className="fas fa-sign-out-alt"></i>
              <span>{t('profile.logout')}</span>
            </button>
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
            <Link to="/leaderboard" className="flex flex-col items-center text-gray-500">
              <i className="fas fa-trophy"></i>
              <span className="text-xs">{t('nav.leaderboard')}</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center text-purple-600">
              <i className="fas fa-user"></i>
              <span className="text-xs">{t('nav.profile')}</span>
            </Link>
          </div>
        </nav>
      </Page>
    </div>
  );
}