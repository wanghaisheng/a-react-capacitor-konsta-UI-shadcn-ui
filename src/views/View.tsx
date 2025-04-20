import { useTranslation } from 'react-i18next';

export default function View() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('view.title')}
          </h1>
        </div>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-600">
            {t('view.content')}
          </p>
        </div>
      </main>
    </div>
  );
}
