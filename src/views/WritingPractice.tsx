import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';

export default function WritingPractice() {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // TODO: Implement save logic
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('writing.title')}
          </h1>
          <div className="flex items-center space-x-3">
            <button className="text-purple-600">
              <i className="fas fa-history"></i>
            </button>
            <button className="text-purple-600">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="p-4">
        {/* Writing Area */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <button className="text-gray-500">
                <i className="fas fa-bold"></i>
              </button>
              <button className="text-gray-500">
                <i className="fas fa-italic"></i>
              </button>
              <button className="text-gray-500">
                <i className="fas fa-underline"></i>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                {content.length} {t('writing.characters')}
              </span>
              <button
                onClick={handleSave}
                className={`px-3 py-1 rounded-lg ${
                  isSaving
                    ? 'bg-gray-100 text-gray-500'
                    : 'bg-purple-600 text-white'
                }`}
                disabled={isSaving}
              >
                {isSaving ? t('writing.saving') : t('writing.save')}
              </button>
            </div>
          </div>
          <textarea
            className="w-full h-96 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder={t('writing.placeholder')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Writing Tips */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">
            {t('writing.tips')}
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-lightbulb text-purple-600"></i>
              </div>
              <p className="text-sm text-gray-600">
                {t('writing.tips.clarity')}
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-lightbulb text-purple-600"></i>
              </div>
              <p className="text-sm text-gray-600">
                {t('writing.tips.structure')}
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-lightbulb text-purple-600"></i>
              </div>
              <p className="text-sm text-gray-600">
                {t('writing.tips.grammar')}
              </p>
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