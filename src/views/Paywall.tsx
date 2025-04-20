import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Block, Button, Icon, List, ListItem, Navbar, Page } from 'konsta/react';

export default function Paywall() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | 'lifetime'>('annual');

  const handlePlanSelect = (plan: 'monthly' | 'annual' | 'lifetime') => {
    setSelectedPlan(plan);
  };

  const handleSubscribe = () => {
    // TODO: Implement subscription logic
    localStorage.setItem('selectedPlan', selectedPlan);
    localStorage.setItem('isPremium', 'true');
    navigate('/');
  };

  const handleContinueFree = () => {
    localStorage.setItem('isPremium', 'false');
    navigate('/');
  };

  return (
    <Page>
      <Navbar
        title={t('paywall.title')}
        right={
          <Button
            clear
            onClick={() => handleContinueFree()}
            className="text-white"
          >
            <Icon material="close" />
          </Button>
        }
        className="bg-gradient-to-b from-purple-900 to-purple-700 text-white"
      />

      <Block className="bg-gradient-to-b from-purple-900 to-purple-700 text-white">
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-full p-4 mb-4">
            <Icon material="diamond" className="text-purple-600 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold mb-2">{t('paywall.title')}</h1>
          <p className="text-lg opacity-90">{t('paywall.subtitle')}</p>
        </div>

        <List className="mb-8">
          {['feature1', 'feature2', 'feature3', 'feature4', 'feature5'].map((feature) => (
            <ListItem
              key={feature}
              media={
                <div className="bg-purple-500 bg-opacity-30 rounded-full p-2">
                  <Icon material="check" className="text-white" />
                </div>
              }
              title={t(`paywall.${feature}`)}
              className="text-white"
            />
          ))}
        </List>

        <div className="space-y-4 mb-4">
          {[
            { id: 'monthly', price: '$7.99', period: t('paywall.monthly.period') },
            { id: 'annual', price: '$47.99', period: t('paywall.annual.period') },
            { id: 'lifetime', price: '$97.99', period: t('paywall.lifetime.period') },
          ].map((plan) => (
            <div
              key={plan.id}
              className={`bg-white bg-opacity-10 border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.id
                  ? 'bg-opacity-20 border-white'
                  : 'border-transparent'
              } ${plan.id === 'annual' ? 'border-yellow-400' : ''}`}
              onClick={() => handlePlanSelect(plan.id as 'monthly' | 'annual' | 'lifetime')}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{t(`paywall.${plan.id}.title`)}</h3>
                  <p className="text-sm opacity-90">{t(`paywall.${plan.id}.subtitle`)}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{plan.price}</div>
                  <div className="text-xs opacity-80">{plan.period}</div>
                </div>
              </div>
              {plan.id === 'annual' && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-lg">
                  {t('paywall.bestValue')}
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          large
          raised
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold mb-4"
          onClick={handleSubscribe}
        >
          {t('paywall.startTrial')}
        </Button>

        <div className="text-center text-sm opacity-80 mb-8">
          <p>{t('paywall.guarantee')}</p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-xl p-4 mb-6">
          <div className="flex items-start">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              className="w-12 h-12 rounded-full mr-4"
              alt="User avatar"
            />
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} material="star" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-2">{t('paywall.testimonial')}</p>
              <p className="text-xs font-medium">{t('paywall.testimonialName')}</p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mb-6">
          <p>
            {t('paywall.terms')}
            <a href="#" className="underline">
              {t('paywall.termsLink')}
            </a>
          </p>
        </div>

        <div className="text-center">
          <Button
            clear
            className="text-sm underline opacity-80"
            onClick={handleContinueFree}
          >
            {t('paywall.continueFree')}
          </Button>
        </div>
      </Block>
    </Page>
  );
} 