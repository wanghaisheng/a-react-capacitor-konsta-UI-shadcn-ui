import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Page,
  List,
  BlockTitle,
  ListItem,
  Radio,
  Toggle,
} from "konsta/react";
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';

interface Props {
  onTheme: (theme: "ios" | "material") => void;
  theme: "ios" | "material";
}

export default function Home(props: Props) {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useLayoutEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  });

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-purple-700">
            {t('home.title')}
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
        <main className="p-4 overflow-y-auto">
          {/* Greeting & Streak Section */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-5 text-white mb-6">
            <h2 className="text-xl font-bold mb-1">
              {t('home.greeting')}, {user?.name || t('home.guest')}!
            </h2>
            <p className="text-sm opacity-90">
              {t('home.welcomeBack')}
            </p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-xs opacity-80">{t('home.streak')}</p>
                <p className="text-2xl font-bold">15 <span className="text-sm">{t('home.days')}</span></p>
              </div>
              <button className="bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-medium">
                {t('home.todayTasks')}
              </button>
            </div>
          </div>

          {/* Today's Progress Section */}
          <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">{t('home.todayProgress')}</h3>
              <span className="text-xs text-purple-600">April 5, 2023</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full flex items-center justify-center bg-green-100 text-green-600">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">{t('home.morning')}</p>
                <p className="text-sm font-medium text-gray-800">3/3</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">{t('home.afternoon')}</p>
                <p className="text-sm font-medium text-gray-800">2/3</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full flex items-center justify-center bg-gray-100 text-gray-400">
                  <i className="fas fa-moon text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">{t('home.evening')}</p>
                <p className="text-sm font-medium text-gray-800">0/3</p>
              </div>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold">
              {t('home.completeNow')}
            </button>
          </div>

          {/* Affirmations Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">{t('home.yourAffirmations')}</h3>
              <a href="#" className="text-xs text-purple-600">{t('home.viewAll')}</a>
            </div>
            <div className="space-y-2">
              <div className="bg-purple-100 text-purple-800 rounded-lg p-3 text-sm">
                I am worthy of my dreams.
              </div>
              <div className="bg-purple-100 text-purple-800 rounded-lg p-3 text-sm">
                I attract positive energy every day.
              </div>
            </div>
          </div>

          {/* Theme, Dark Mode, and Navigation */}
          <BlockTitle>Theme</BlockTitle>
          <List strong inset>
            <ListItem
              label
              title="iOS Theme"
              media={
                <Radio
                  onChange={() => props.onTheme("ios")}
                  checked={props.theme === "ios"}
                  component="div"
                />
              }
            />
            <ListItem
              label
              title="Material Theme"
              media={
                <Radio
                  onChange={() => props.onTheme("material")}
                  checked={props.theme === "material"}
                  component="div"
                />
              }
            />
          </List>
          <List strong inset>
            <ListItem
              title="Dark Mode"
              label
              after={
                <Toggle
                  onChange={toggleDarkMode}
                  checked={darkMode}
                  component="div"
                />
              }
            />
          </List>
          <List strong inset>
            <Link to="/view">
              <ListItem title="Navigate" label link />
            </Link>
          </List>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
          <div className="flex justify-around">
            <Link to="/" className="flex flex-col items-center text-purple-600">
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
