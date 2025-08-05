import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
import { Service } from '../types';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [activeHoroscopeTab, setActiveHoroscopeTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedZodiacSign, setSelectedZodiacSign] = useState('Aries');
  const { setSelectedService } = useAppContext();

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  // Get data from translations
  const services = t('servicesList', { returnObjects: true }) as Service[];
  const horoscopeData = t('horoscopeData', { returnObjects: true }) as any[];
  const muhuratData = t('muhuratData', { returnObjects: true }) as any[];
  const remedies = t('remedies', { returnObjects: true }) as any[];

  const handleBookService = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 to-yellow-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{t('services.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('services.viewAll')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onBookNow={handleBookService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Horoscope Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('services.horoscopeTitle', 'Daily Horoscope')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.horoscopeDescription', 'Get personalized predictions based on your zodiac sign for daily, weekly, and monthly guidance.')}
            </p>
          </div>

            <div className="max-w-4xl mx-auto">
              {/* Zodiac Sign Selector */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t('services.selectZodiac', 'Select Your Zodiac Sign')}</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {zodiacSigns.map((sign) => (
                    <button
                      key={sign}
                      onClick={() => setSelectedZodiacSign(sign)}
                      className={`p-3 rounded-lg text-center transition-all duration-300 ${
                        selectedZodiacSign === sign
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
                      }`}
                    >
                      {sign}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Period Tabs */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-xl p-2 shadow-lg">
                  {(['daily', 'weekly', 'monthly'] as const).map((period) => (
                    <button
                      key={period}
                      onClick={() => setActiveHoroscopeTab(period)}
                      className={`px-6 py-3 rounded-lg capitalize transition-all duration-300 ${
                        activeHoroscopeTab === period
                          ? 'bg-orange-500 text-white shadow-md'
                          : 'text-gray-600 hover:text-orange-500'
                      }`}
                    >
                      {t(`services.${period}`, period.charAt(0).toUpperCase() + period.slice(1))}
                    </button>
                  ))}
                </div>
              </div>

              {/* Horoscope Content */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {selectedZodiacSign} - {t(`services.${activeHoroscopeTab}`, activeHoroscopeTab.charAt(0).toUpperCase() + activeHoroscopeTab.slice(1))} {t('services.horoscope', 'Horoscope')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center text-lg">
                  {horoscopeData.find(h => h.sign === selectedZodiacSign)?.[activeHoroscopeTab] || 
                  t('services.noHoroscope', 'Horoscope data will be updated soon. Please check back later.')}
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Muhurat Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('services.muhuratTitle', 'Auspicious Muhurat')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.muhuratDescription', 'Find the most favorable times for important life events and ceremonies based on Vedic calculations.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {muhuratData.map((muhurat, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{muhurat.occasion}</h3>
                <p className="text-orange-600 font-semibold mb-2">{muhurat.date}</p>
                <p className="text-red-600 font-medium mb-3">{muhurat.time}</p>
                <p className="text-gray-600 text-sm">{muhurat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remedies Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('services.remediesTitle', 'Vedic Remedies')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.remediesDescription', 'Simple yet powerful remedies to overcome life challenges and enhance positive planetary influences.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remedies.map((remedy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{remedy.problem}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-orange-600">{t('services.remedy', 'Remedy')}: </span>
                    <span className="text-gray-600">{remedy.remedy}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-red-600">{t('services.recommendedGemstone', 'Recommended Gemstone')}: </span>
                    <span className="text-gray-600">{remedy.gemstone}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-600">{t('services.duration', 'Duration')}: </span>
                    <span className="text-gray-600">{remedy.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;