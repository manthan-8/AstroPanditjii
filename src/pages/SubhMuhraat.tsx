import React, { useState } from 'react';
import { Clock, Star, Sun, Heart, Home, Briefcase } from 'lucide-react';

const SubhMuhraat: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const muhraatTimes = [
    {
      category: 'marriage',
      title: 'विवाह मुहूर्त',
      times: [
        { time: '09:30 - 11:45', description: 'वर-वधू का स्वागत एवं वरमाला के लिए अति उत्तम' },
        { time: '16:15 - 18:30', description: 'फेरे एवं मंगल सूत्र धारण के लिए शुभ' },
      ],
      icon: <Heart className="h-6 w-6" />
    },
    {
      category: 'business',
      title: 'व्यापार मुहूर्त',
      times: [
        { time: '10:00 - 12:00', description: 'नया व्यापार शुरू करने के लिए श्रेष्ठ समय' },
        { time: '14:30 - 16:00', description: 'महत्वपूर्ण व्यापारिक बैठक के लिए उत्तम' },
      ],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      category: 'home',
      title: 'गृह प्रवेश मुहूर्त',
      times: [
        { time: '11:15 - 13:00', description: 'नए घर में प्रवेश के लिए अति शुभ' },
        { time: '17:00 - 18:45', description: 'गृह शांति पूजा के लिए उत्तम समय' },
      ],
      icon: <Home className="h-6 w-6" />
    },
    {
      category: 'spiritual',
      title: 'धार्मिक मुहूर्त',
      times: [
        { time: '05:30 - 07:00', description: 'ब्राह्म मुहूर्त - ध्यान एवं पूजा के लिए सर्वश्रेष्ठ' },
        { time: '18:30 - 20:00', description: 'संध्या आरती एवं हवन के लिए शुभ' },
      ],
      icon: <Star className="h-6 w-6" />
    }
  ];

  const categories = [
    { id: 'all', label: 'सभी मुहूर्त', icon: <Clock className="h-5 w-5" /> },
    { id: 'marriage', label: 'विवाह', icon: <Heart className="h-5 w-5" /> },
    { id: 'business', label: 'व्यापार', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'home', label: 'गृह प्रवेश', icon: <Home className="h-5 w-5" /> },
    { id: 'spiritual', label: 'धार्मिक', icon: <Star className="h-5 w-5" /> }
  ];

  const filteredMuhraats = selectedCategory === 'all' ? muhraatTimes : muhraatTimes.filter(m => m.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-300 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Clock className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">शुभ मुहूर्त</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            जीवन के हर महत्वपूर्ण कार्य के लिए सर्वोत्तम समय की जानकारी
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Muhurat Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredMuhraats.map((muhurat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r from-orange-500 to-red-600/80 text-white p-6`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {muhurat.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{muhurat.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {muhurat.times.map((timeSlot, timeIndex) => (
                    <div key={timeIndex} className="border-l-4 border-purple-400 pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xl font-bold text-gray-800">{timeSlot.time}</div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          अति शुभ
                        </div>
                      </div>
                      <p className="text-gray-600">{timeSlot.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">शुभ मुहूर्त के नियम</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400  text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">तिथि का महत्व</h4>
              <p className="text-gray-600">शुभ तिथि में किए गए कार्य सदैव सफल होते हैं</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400  text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">नक्षत्र की शक्ति</h4>
              <p className="text-gray-600">उत्तम नक्षत्र में कार्य करने से दिव्य कृपा मिलती है</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400  text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">समय की महत्ता</h4>
              <p className="text-gray-600">सही समय पर किया गया कार्य अधिक फलदायी होता है</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubhMuhraat;