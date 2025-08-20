import React, { useState } from 'react';
import { Clock, AlertTriangle, Shield, Star } from 'lucide-react';

const RahuKaal: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Delhi');

  const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad'];
  
  const rahuKaalData = {
    Sunday: { time: '16:30 - 18:00', duration: '1घंटा 30मिनट' },
    Monday: { time: '07:30 - 09:00', duration: '1घंटा 30मिनट' },
    Tuesday: { time: '15:00 - 16:30', duration: '1घंटा 30मिनट' },
    Wednesday: { time: '12:00 - 13:30', duration: '1घंटा 30मिनट' },
    Thursday: { time: '13:30 - 15:00', duration: '1घंटा 30मिनट' },
    Friday: { time: '10:30 - 12:00', duration: '1घंटा 30मिनट' },
    Saturday: { time: '09:00 - 10:30', duration: '1घंटा 30मिनट' }
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();
  const todayRahuKaal = rahuKaalData[currentDay as keyof typeof rahuKaalData];

  const dayNames = {
    Sunday: 'रविवार',
    Monday: 'सोमवार',
    Tuesday: 'मंगलवार',
    Wednesday: 'बुधवार',
    Thursday: 'गुरुवार',
    Friday: 'शुक्रवार',
    Saturday: 'शनिवार'
  };

  const remedies = [
    { title: 'हनुमान चालीसा', description: 'राहु काल में हनुमान चालीसा का पाठ करें', icon: '🙏' },
    { title: 'मंत्र जाप', description: 'राहु मंत्र या गायत्री मंत्र का जाप करें', icon: '📿' },
    { title: 'दान', description: 'राहु काल में काले तिल या सरसों का दान करें', icon: '🤲' },
    { title: 'ध्यान', description: 'शांत चित्त से ध्यान और प्राणायाम करें', icon: '🧘' }
  ];

  const avoidActivities = [
    'नई यात्रा की शुरुआत',
    'नया व्यापार शुरू करना',
    'विवाह संस्कार',
    'गृह प्रवेश',
    'नई पार्टनरशिप',
    'महत्वपूर्ण निर्णय',
    'बड़ी खरीदारी',
    'न्यायालयी कार्य'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-300 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">राहु काल</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            साप्ताहिक राहु काल का समय - जानें कब बचें और क्या उपाय करें
          </p>
        </div>
      </div>

      {/* City Selection & Today's Rahu Kaal */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* City Selection */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <label className="block text-gray-700 font-semibold mb-3">शहर चुनें</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Today's Rahu Kaal */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-8 w-8" />
              <h3 className="text-2xl font-bold">आज का राहु काल</h3>
            </div>
            <div className="text-center">
              <div className="text-lg mb-2">{dayNames[currentDay as keyof typeof dayNames]}</div>
              <div className="text-3xl font-bold mb-2">{todayRahuKaal.time}</div>
              <div className="text-lg">अवधि: {todayRahuKaal.duration}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Rahu Kaal Schedule */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">साप्ताहिक राहु काल सारणी</h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 divide-y divide-gray-200">
            {Object.entries(rahuKaalData).map(([day, data]) => (
              <div key={day} className={`p-6 hover:bg-gray-50 transition-colors ${
                day === currentDay ? 'bg-red-50 border-l-4 border-red-500' : ''
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      day === currentDay ? 'bg-red-500' : 'bg-gray-300'
                    }`}></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {dayNames[day as keyof typeof dayNames]}
                      </h3>
                      <div className="text-gray-600">{day}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{data.time}</div>
                    <div className="text-gray-500">{data.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Remedies and Precautions */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Remedies */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">राहु काल के उपाय</h3>
            </div>
            <div className="space-y-6">
              {remedies.map((remedy, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl">{remedy.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{remedy.title}</h4>
                    <p className="text-gray-600">{remedy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities to Avoid */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-800">राहु काल में न करें</h3>
            </div>
            <div className="space-y-3">
              {avoidActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">राहु काल का महत्व</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">ज्योतिषीय कारण</h4>
              <p className="text-gray-600 text-sm">राहु ग्रह का प्रभाव इस समय सबसे अधिक होता है</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">समय की गणना</h4>
              <p className="text-gray-600 text-sm">सूर्योदय से सूर्यास्त का आठवां भाग राहु काल होता है</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">सुरक्षा</h4>
              <p className="text-gray-600 text-sm">उपायों से राहु के नकारात्मक प्रभाव से बचा जा सकता है</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RahuKaal;