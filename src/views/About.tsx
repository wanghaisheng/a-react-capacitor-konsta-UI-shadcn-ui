import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Block, Button, Icon, Navbar, Page } from 'konsta/react';

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Page>
      <Navbar
        title={t('about.title')}
        left={
          <Button
            clear
            onClick={() => navigate('/')}
            className="text-white"
          >
            <Icon material="arrow_back" />
          </Button>
        }
        className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white"
      />

      <Block className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">
            {t('about.ourStory')}
          </h1>
          <p className="text-gray-600 italic">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/3">
            <div className="rounded-full overflow-hidden border-4 border-purple-200 shadow-lg mx-auto" style={{ width: '200px', height: '200px' }}>
              <svg className="w-full h-full bg-purple-100 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              {t('about.personalJourney.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('about.personalJourney.content')}
            </p>
          </div>
        </div>

        <div className="space-y-6 text-gray-700">
          {[
            'turningPoint',
            'creatingHeyManifestation',
            'the369Method',
            'buildingTools',
            'ourMission',
            'joinOurJourney',
          ].map((section) => (
            <div key={section}>
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                {t(`about.${section}.title`)}
              </h3>
              <p className="mb-4">
                {t(`about.${section}.content`)}
              </p>
            </div>
          ))}

          <div className="text-center mt-10">
            <p className="text-lg font-bold text-purple-800">
              {t('about.gratitude')}
            </p>
            <p className="text-purple-600 text-xl mt-2">
              {t('about.founder')}
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            large
            raised
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold"
            onClick={() => navigate('/')}
          >
            {t('about.backToHome')}
          </Button>
        </div>
      </Block>

      <Block className="bg-gray-900 text-white py-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('footer.about.title')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('footer.about.text')}
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon material={social} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('footer.features.title')}
            </h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {t(`footer.features.link${i}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('footer.resources.title')}
            </h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {t(`footer.resources.link${i}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('footer.language.title')}
            </h3>
            <select
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full"
              onChange={(e) => {
                // TODO: Implement language change
                console.log('Language changed to:', e.target.value);
              }}
            >
              {['en', 'zh', 'ja', 'es'].map((lang) => (
                <option key={lang} value={lang}>
                  {t(`footer.language.${lang}`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              {['terms', 'privacy', 'cookies'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  {t(`footer.${link}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Block>
    </Page>
  );
} 