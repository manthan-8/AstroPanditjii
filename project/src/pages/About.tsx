import React from 'react';
import { testimonials } from '../data/dummy';
import TestimonialCard from '../components/TestimonialCard';
import { Award, BookOpen, Users, Star, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, title: 'Gold Medalist', description: 'Jyotish Acharya from Banaras Hindu University' },
    { icon: BookOpen, title: 'Published Author', description: 'Author of 5 books on Vedic Astrology' },
    { icon: Users, title: 'TV Appearances', description: 'Regular expert on major television channels' },
    { icon: Globe, title: 'International Recognition', description: 'Consultant to clients across 25+ countries' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">About Pandit Ji</h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A beacon of wisdom in the realm of Vedic astrology, Pandit Raj Kumar Sharma has dedicated over 25 years 
                to the ancient science of Jyotish, helping thousands discover their true path in life.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.9/5 from 10,000+ consultations</span>
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

      {/* Background Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8 text-center">My Journey in Vedic Sciences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">Early Life & Education</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Born into a family of traditional astrologers in Varanasi, Pandit Ji was introduced to the sacred 
                  texts of Vedic astrology at the age of 12. Under the guidance of his grandfather, a renowned 
                  Jyotish Acharya, he mastered the intricate calculations and interpretations of planetary positions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  He completed his formal education with a Gold Medal in Jyotish Acharya from Banaras Hindu University, 
                  specializing in classical texts like Brihat Parashara Hora Shastra and Jaimini Sutras.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">Philosophy & Approach</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "Astrology is not about predicting doom, but about understanding cosmic patterns to make informed 
                  life choices," says Pandit Ji. His approach combines traditional Vedic principles with practical 
                  guidance for modern life challenges.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  He believes in empowering individuals with knowledge rather than creating dependency, focusing on 
                  remedial measures that bring positive transformation rather than fatalistic predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition and accolades earned through decades of dedicated service and accurate predictions.
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

      {/* Specializations Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Areas of Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Marriage & Relationships</h3>
                    <p className="text-gray-600">Expert in Kundli matching, compatibility analysis, and relationship counseling based on Vedic principles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Career & Business</h3>
                    <p className="text-gray-600">Guidance on career choices, business ventures, and professional growth through planetary analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Health & Wellness</h3>
                    <p className="text-gray-600">Identification of health patterns and remedial measures through medical astrology principles.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vastu & Feng Shui</h3>
                    <p className="text-gray-600">Complete analysis of living and working spaces to optimize energy flow and prosperity.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Spiritual Guidance</h3>
                    <p className="text-gray-600">Life path analysis, karma understanding, and spiritual practices for personal growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Harmony</h3>
                    <p className="text-gray-600">Solutions for family disputes, child guidance, and maintaining harmonious relationships.</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real people who have found guidance and transformation through our services.
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