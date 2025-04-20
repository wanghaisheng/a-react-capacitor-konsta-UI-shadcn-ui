import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../lib/store';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { t } = useTranslation();
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('test@example.com'); // 默认测试账号
  const [password, setPassword] = useState('test1234');   // 默认测试密码

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    setUser({
      id: '1',
      name: 'Test User',
      email: email,
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
            {t('auth.login')}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('auth.email')}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t('auth.password')}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
                {t('auth.forgotPassword')}
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              {t('auth.login')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {t('auth.noAccount')}{' '}
              <a href="/register" className="text-purple-600 hover:text-purple-500">
                {t('auth.register')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 