import React, { useState } from 'react';
import { Calendar, Sun, Moon, Star, Clock } from 'lucide-react';

const Panchang: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  type PanchangElement = {
    name: string;
    percentage?: string;
    auspicious: boolean;
  };

  const panchangData: {
    tithi: PanchangElement;
    nakshatra: PanchangElement;
    yoga: PanchangElement;
    karana: PanchangElement;
    vara: PanchangElement;
  } = {
    tithi: { name: 'शुक्ल पक्ष द्वितीया', percentage: '78%', auspicious: true },
    nakshatra: { name: 'रोहिणी', percentage: '45%', auspicious: true },
    yoga: { name: 'शोभन योग', percentage: '62%', auspicious: true },
    karana: { name: 'बव', percentage: '89%', auspicious: true },
    vara: { name: 'गुरुवार', auspicious: true }
  };

  const muhurat = [
    { time: '06:15 - 07:30', name: 'ब्राह्म मुहूर्त', type: 'auspicious' },
    { time: '09:45 - 11:15', name: 'अभिजीत मुहूर्त', type: 'auspicious' },
    { time: '13:30 - 15:00', name: 'राहु काल', type: 'inauspicious' },
    { time: '17:15 - 18:30', name: 'गोधूलि बेला', type: 'auspicious' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-300 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Calendar className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">पंचांग</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            आज का शुभ पंचांग - दैनिक तिथि, नक्षत्र, योग, करण और मुहूर्त की सम्पूर्ण जानकारी
          </p>
        </div>
      </div>

      {/* Date Selection */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
          <label className="block text-gray-700 font-semibold mb-3">दिनांक चुनें</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Panchang Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Five Elements */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">पंचांग के पांच अंग</h2>
            <div className="grid gap-6">
              {Object.entries(panchangData).map(([key, data], index) => (
                <div key={key} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white p-3 rounded-full">
                        {index === 0 && <Moon className="h-6 w-6" />}
                        {index === 1 && <Star className="h-6 w-6" />}
                        {index === 2 && <Sun className="h-6 w-6" />}
                        {index === 3 && <Clock className="h-6 w-6" />}
                        {index === 4 && <Calendar className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 capitalize">
                          {key === 'tithi' && 'तिथि'}
                          {key === 'nakshatra' && 'नक्षत्र'}
                          {key === 'yoga' && 'योग'}
                          {key === 'karana' && 'करण'}
                          {key === 'vara' && 'वार'}
                        </h3>
                        <p className="text-gray-600">{data.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {data.percentage && (
                        <div className="text-2xl font-bold text-orange-600">{data.percentage}</div>
                      )}
                      <div className={`text-sm font-medium ${data.auspicious ? 'text-green-600' : 'text-red-600'}`}>
                        {data.auspicious ? 'शुभ' : 'अशुभ'}
                      </div>
                    </div>
                  </div>
                  
                  {data.percentage && (
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-red-400 h-3 rounded-full transition-all duration-300"
                        style={{ width: data.percentage }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Today's Muhurat */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">आज के मुहूर्त</h2>
            <div className="space-y-4">
              {muhurat.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-lg font-semibold text-gray-800">{item.time}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'auspicious' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.type === 'auspicious' ? 'शुभ' : 'अशुभ'}
                    </div>
                  </div>
                  <div className="text-gray-600">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">पंचांग का महत्व</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-600">आध्यात्मिक लाभ</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <span>शुभ मुहूर्त की जानकारी से कार्यों में सफलता</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <span>नकारात्मक प्रभावों से बचाव</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <span>आध्यात्मिक उन्नति में सहायक</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-600">व्यावहारिक उपयोग</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <span>विवाह, गृह प्रवेश के लिए मुहूर्त</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <span>व्यापारिक गतिविधियों के लिए योजना</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <span>धार्मिक अनुष्ठानों का समय निर्धारण</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panchang;