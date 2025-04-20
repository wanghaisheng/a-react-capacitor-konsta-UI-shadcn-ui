import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {step === 1 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">
                  {t('onboarding.welcome')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('onboarding.welcomeDescription')}
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">
                  {t('onboarding.howItWorks')}
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600">1</span>
                    </div>
                    <p className="text-gray-600">
                      {t('onboarding.step1')}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600">2</span>
                    </div>
                    <p className="text-gray-600">
                      {t('onboarding.step2')}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600">3</span>
                    </div>
                    <p className="text-gray-600">
                      {t('onboarding.step3')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">
                  {t('onboarding.readyToStart')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('onboarding.readyDescription')}
                </p>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={handleNext}
                className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                {step < 3 ? t('onboarding.next') : t('onboarding.start')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-center space-x-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full ${
                s === step ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 