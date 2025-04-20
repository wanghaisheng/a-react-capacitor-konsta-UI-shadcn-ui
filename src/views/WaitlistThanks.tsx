import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Block, Button, Icon, Navbar, Page } from 'konsta/react';

export default function WaitlistThanks() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    const code = '369MANIFEST';
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Page>
      <Navbar
        title={t('app.title')}
        right={
          <select
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => {
              // TODO: Implement language change
              console.log('Language changed to:', e.target.value);
            }}
          >
            {['en', 'zh'].map((lang) => (
              <option key={lang} value={lang}>
                {t(`language.${lang}`)}
              </option>
            ))}
          </select>
        }
        className="bg-white shadow-md"
      />

      <Block className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="text-green-500 text-6xl mb-4">
            <Icon material="check_circle" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {t('waitingList.thankYouTitle')}
          </h2>
          <p className="text-gray-700 mb-6">
            {t('waitingList.thankYouMessage')}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">
              {t('waitingList.shareTitle')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('waitingList.shareMessage')}
            </p>
            <div className="flex justify-center space-x-4">
              {[
                { icon: 'facebook', color: 'text-blue-600 hover:text-blue-800' },
                { icon: 'twitter', color: 'text-blue-400 hover:text-blue-600' },
                { icon: 'whatsapp', color: 'text-green-600 hover:text-green-800' },
                { icon: 'weibo', color: 'text-red-600 hover:text-red-800' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  className={social.color}
                >
                  <Icon material={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">
              {t('waitingList.referralCode')}
            </h3>
            <div className="flex">
              <input
                type="text"
                value="369MANIFEST"
                readOnly
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50"
              />
              <Button
                className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition"
                onClick={handleCopyCode}
              >
                {isCopied ? t('waitingList.codeCopied') : t('waitingList.copyCode')}
              </Button>
            </div>
          </div>

          <Button
            large
            raised
            className="bg-purple-600 text-white hover:bg-purple-700"
            onClick={() => navigate('/')}
          >
            {t('waitingList.backToHome')}
          </Button>
        </div>
      </Block>
    </Page>
  );
} 