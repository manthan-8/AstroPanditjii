import React from 'react';
import { useTranslation } from 'react-i18next';
import { testimonials } from '../data/dummy';
import TestimonialCard from '../components/TestimonialCard';
import { Award, BookOpen, Users, Star, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const achievements = [
    { icon: Award, title: t('about.achievements.items.goldMedalist.title'), description: t('about.achievements.items.goldMedalist.description') },
    { icon: BookOpen, title: t('about.achievements.items.author.title'), description: t('about.achievements.items.author.description') },
    { icon: Users, title: t('about.achievements.items.tv.title'), description: t('about.achievements.items.tv.description') },
    { icon: Globe, title: t('about.achievements.items.global.title'), description: t('about.achievements.items.global.description') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">{t('about.hero.title')}</h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {t('about.hero.description')}
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">{t('about.hero.rating')}</span>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/8276177/pexels-photo-8276177.jpeg" 
                alt="Pandit Ji" 
                className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8 text-center">{t('about.journey.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">{t('about.journey.earlyLifeTitle')}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{t('about.journey.earlyLifeDescription1')}</p>
                <p className="text-gray-600 leading-relaxed">{t('about.journey.earlyLifeDescription2')}</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">{t('about.journey.philosophyTitle')}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{t('about.journey.philosophyDescription1')}</p>
                <p className="text-gray-600 leading-relaxed">{t('about.journey.philosophyDescription2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('about.achievements.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.achievements.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t('about.expertise.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.expertise.marriage.title')}</h3>
                    <p className="text-gray-600">{t('about.expertise.marriage.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.expertise.career.title')}</h3>
                    <p className="text-gray-600">{t('about.expertise.career.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.expertise.health.title')}</h3>
                    <p className="text-gray-600">{t('about.expertise.health.description')}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.expertise.vastu.title')}</h3>
                    <p className="text-gray-600">{t('about.expertise.vastu.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.expertise.spiritual.title')}</h3>
                    <p className="text-gray-600">{t('about.expertise.spiritual.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('about.expertise.family.title')}</h3>
                    <p className="text-gray-600">{t('about.expertise.family.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('about.testimonials.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.testimonials.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
