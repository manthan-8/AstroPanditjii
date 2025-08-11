import React, { useState } from 'react';
import { Clock, Sun, Moon, AlertCircle } from 'lucide-react';

const Chokdiya: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const chokdiyaData = {
    day: [
      { time: '06:00 - 07:30', name: 'उद्वेग', type: 'inauspicious', description: 'चिंता और परेशानी का समय' },
      { time: '07:30 - 09:00', name: 'चर', type: 'auspicious', description: 'यात्रा और नए कार्यों के लिए उत्तम' },
      { time: '09:00 - 10:30', name: 'लाभ', type: 'auspicious', description: 'लाभ और सफलता का समय' },
      { time: '10:30 - 12:00', name: 'अमृत', type: 'very-auspicious', description: 'सभी कार्यों के लिए सर्वोत्तम' },
      { time: '12:00 - 13:30', name: 'काल', type: 'very-inauspicious', description: 'किसी भी कार्य के लिए वर्जित' },
      { time: '13:30 - 15:00', name: 'शुभ', type: 'auspicious', description: 'शुभ कार्यों के लिए अच्छा समय' },
      { time: '15:00 - 16:30', name: 'रोग', type: 'inauspicious', description: 'बीमारी और समस्याओं का समय' },
      { time: '16:30 - 18:00', name: 'उद्वेग', type: 'inauspicious', description: 'तनाव और चिंता का समय' }
    ],
    night: [
      { time: '18:00 - 19:30', name: 'चर', type: 'auspicious', description: 'गतिशील कार्यों के लिए अच्छा' },
      { time: '19:30 - 21:00', name: 'रोग', type: 'inauspicious', description: 'स्वास्थ्य संबंधी सावधानी' },
      { time: '21:00 - 22:30', name: 'काल', type: 'very-inauspicious', description: 'अत्यंत अशुभ समय' },
      { time: '22:30 - 00:00', name: 'लाभ', type: 'auspicious', description: 'छुपे हुए लाभ का समय' },
      { time: '00:00 - 01:30', name: 'उद्वेग', type: 'inauspicious', description: 'अशांति का समय' },
      { time: '01:30 - 03:00', name: 'शुभ', type: 'auspicious', description: 'आध्यात्मिक कार्यों के लिए उत्तम' },
      { time: '03:00 - 04:30', name: 'अमृत', type: 'very-auspicious', description: 'ब्राह्म मुहूर्त - अति शुभ' },
      { time: '04:30 - 06:00', name: 'चर', type: 'auspicious', description: 'प्रातःकालीन कार्यों के लिए श्रेष्ठ' }
    ]
  };

  // Updated color styles matching SubhMuhraat's vibe
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'very-auspicious': return 'bg-gradient-to-br from-orange-100 to-yellow-300 text-black'; // warm bright yellow
      case 'auspicious': return 'bg-gradient-to-br from-orange-200 to-yellow-200 text-black';       // vibrant orange
      case 'inauspicious': return 'bg-gradient-to-br from-pink-200 to-red-200 text-black';           // soft pink/red
      case 'very-inauspicious': return 'bg-gradient-to-br from-red-300 to-red-500 text-black';         // strong red
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'very-auspicious': return '🌟';
      case 'auspicious': return '✨';
      case 'inauspicious': return '⚠️';
      case 'very-inauspicious': return '⛔';
      default: return '❔';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'very-auspicious': return 'अति शुभ';
      case 'auspicious': return 'शुभ';
      case 'inauspicious': return 'सामान्य';
      case 'very-inauspicious': return 'अशुभ';
      default: return 'सामान्य';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-300 text-black  py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Clock className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">चौकदिया चार्ट</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            दिन और रात के शुभ-अशुभ समय की जानकारी - अपने कार्यों की योजना बनाएं
          </p>
        </div>
      </div>

      {/* Date Selection */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
          <label className="block text-gray-700 font-semibold mb-3">तारीख चुनें</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Chokdiya Tables */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Day Chart */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-600/80 text-white  p-6">
              <div className="flex items-center space-x-3">
                <Sun className="h-8 w-8" />
                <h2 className="text-2xl font-bold">दिन का चौकदिया</h2>
              </div>
              <p className="text-yellow-100 mt-2">सूर्योदय से सूर्यास्त तक</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {chokdiyaData.day.map((period, index) => (
                  <div key={index} className={`border-2 rounded-xl p-4 ${getTypeColor(period.type)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-lg font-bold">{period.time}</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getTypeIcon(period.type)}</span>
                        <span className="text-sm font-medium">{getTypeText(period.type)}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{period.name}</h3>
                    <p className="text-sm">{period.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Night Chart */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-600/80 text-white  p-6">
              <div className="flex items-center space-x-3">
                <Moon className="h-8 w-8" />
                <h2 className="text-2xl font-bold">रात का चौकदिया</h2>
              </div>
              <p className="text-pink-200 mt-2">सूर्यास्त से सूर्योदय तक</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {chokdiyaData.night.map((period, index) => (
                  <div key={index} className={`border-2 rounded-xl p-4 ${getTypeColor(period.type)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-lg font-bold">{period.time}</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getTypeIcon(period.type)}</span>
                        <span className="text-sm font-medium">{getTypeText(period.type)}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{period.name}</h3>
                    <p className="text-sm">{period.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chokdiya;
