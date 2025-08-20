import React, { useState } from 'react';
import { Star, Moon, Sun, Sparkles } from 'lucide-react';

const Nakshtra: React.FC = () => {
  const [selectedNakshatra, setSelectedNakshatra] = useState(0);

  const nakshatras = [
    { name: 'अश्विनी', deity: 'अश्विनी कुमार', element: 'पृथ्वी', lucky: 'रत्न व्यापार', color: 'लाल', symbol: '🐎' },
    { name: 'भरणी', deity: 'यम', element: 'पृथ्वी', lucky: 'कृषि कार्य', color: 'गुलाबी', symbol: '🌺' },
    { name: 'कृत्तिका', deity: 'अग्नि', element: 'अग्नि', lucky: 'शिक्षा क्षेत्र', color: 'सुनहरा', symbol: '🔥' },
    { name: 'रोहिणी', deity: 'ब्रह्मा', element: 'पृथ्वी', lucky: 'कला एवं संस्कृति', color: 'श्वेत', symbol: '🌸' },
    { name: 'मृगशिरा', deity: 'चंद्र', element: 'वायु', lucky: 'यात्रा व्यापार', color: 'हरा', symbol: '🦌' },
    { name: 'आर्द्रा', deity: 'रुद्र', element: 'जल', lucky: 'अनुसंधान कार्य', color: 'नीला', symbol: '⚡' },
    { name: 'पुनर्वसु', deity: 'अदिति', element: 'जल', lucky: 'गृह निर्माण', color: 'पीला', symbol: '🏠' },
    { name: 'पुष्य', deity: 'बृहस्पति', element: 'जल', lucky: 'आध्यात्म', color: 'सफ़ेद', symbol: '🪷' },
    { name: 'आश्लेषा', deity: 'सर्प', element: 'जल', lucky: 'गुप्त विद्या', color: 'काला', symbol: '🐍' },
    { name: 'मघा', deity: 'पितृ', element: 'अग्नि', lucky: 'राजनीति', color: 'सुनहरा', symbol: '👑' },
    { name: 'पूर्वा फाल्गुनी', deity: 'भग', element: 'जल', lucky: 'मनोरंजन', color: 'गुलाबी', symbol: '🎭' },
    { name: 'उत्तरा फाल्गुनी', deity: 'अर्यमा', element: 'अग्नि', lucky: 'सेवा कार्य', color: 'नारंगी', symbol: '🤝' },
    { name: 'हस्त', deity: 'सूर्य', element: 'वायु', lucky: 'हस्तकला', color: 'हरा', symbol: '✋' },
    { name: 'चित्रा', deity: 'त्वष्टा', element: 'अग्नि', lucky: 'कलाकारी', color: 'रंगबिरंगा', symbol: '🎨' },
    { name: 'स्वाति', deity: 'वायु', element: 'वायु', lucky: 'व्यापार', color: 'काला', symbol: '💨' },
    { name: 'विशाखा', deity: 'इंद्राग्नि', element: 'अग्नि', lucky: 'नेतृत्व', color: 'लाल', symbol: '⚖️' },
    { name: 'अनुराधा', deity: 'मित्र', element: 'जल', lucky: 'मित्रता', color: 'गुलाबी', symbol: '👥' },
    { name: 'ज्येष्ठा', deity: 'इंद्र', element: 'जल', lucky: 'शक्ति प्राप्ति', color: 'नीला', symbol: '🏆' },
    { name: 'मूल', deity: 'निर्ऋति', element: 'वायु', lucky: 'अनुसंधान', color: 'काला', symbol: '🌱' },
    { name: 'पूर्वाषाढ़', deity: 'आप', element: 'जल', lucky: 'जल कार्य', color: 'सफ़ेद', symbol: '🌊' },
    { name: 'उत्तराषाढ़', deity: 'विश्वेदेव', element: 'वायु', lucky: 'धर्म कार्य', color: 'सुनहरा', symbol: '🙏' },
    { name: 'श्रवण', deity: 'विष्णु', element: 'वायु', lucky: 'श्रवण कला', color: 'नीला', symbol: '👂' },
    { name: 'धनिष्ठा', deity: 'वसु', element: 'वायु', lucky: 'संगीत', color: 'हरा', symbol: '🎵' },
    { name: 'शतभिषा', deity: 'वरुण', element: 'वायु', lucky: 'चिकित्सा', color: 'नीला', symbol: '💊' },
    { name: 'पूर्वाभाद्रपद', deity: 'अज एकपाद', element: 'वायु', lucky: 'आध्यात्मिक साधना', color: 'सिल्वर', symbol: '⚡' },
    { name: 'उत्तराभाद्रपद', deity: 'अहि बुध्न्य', element: 'वायु', lucky: 'गुप्त ज्ञान', color: 'बैंगनी', symbol: '🔮' },
    { name: 'रेवती', deity: 'पूषा', element: 'पृथ्वी', lucky: 'कृषि एवं पशुपालन', color: 'भूरा', symbol: '🐄' }
  ];

  const currentNakshatra = nakshatras[selectedNakshatra];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-300 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Star className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">नक्षत्र ज्ञान</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            27 नक्षत्रों का विस्तृत विवरण - आपके जन्म नक्षत्र की शक्ति को जानें
          </p>
        </div>
      </div>

      {/* Nakshatra Selector */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">नक्षत्र चुनें</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {nakshatras.map((nakshatra, index) => (
              <button
                key={index}
                onClick={() => setSelectedNakshatra(index)}
                className={`p-3 rounded-xl text-sm font-medium transition-all hover:scale-105 ${
                  selectedNakshatra === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-lg mb-1">{nakshatra.symbol}</div>
                <div className="text-xs">{nakshatra.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Nakshatra Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-300 text-black p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">{currentNakshatra.symbol}</div>
                <h2 className="text-4xl font-bold mb-2">{currentNakshatra.name}</h2>
                <p className="text-xl opacity-90">नक्षत्र संख्या: {selectedNakshatra + 1}</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-full">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">अधिष्ठातृ देवता</h3>
                      <p className="text-gray-600">{currentNakshatra.deity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-full">
                      <Sun className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">तत्व</h3>
                      <p className="text-gray-600">{currentNakshatra.element}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white  p-3 rounded-full">
                      <Moon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">शुभ कार्य</h3>
                      <p className="text-gray-600">{currentNakshatra.lucky}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white  p-3 rounded-full">
                      <Star className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">शुभ रंग</h3>
                      <p className="text-gray-600">{currentNakshatra.color}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-yellow-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">व्यक्तित्व</h3>
              <p className="text-gray-600 text-sm">इस नक्षत्र में जन्मे व्यक्ति में विशेष गुण होते हैं</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-yellow-400  p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Moon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">स्वास्थ्य</h3>
              <p className="text-gray-600 text-sm">नक्षत्र के अनुसार स्वास्थ्य की देखभाल करें</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-yellow-400  p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">रत्न सुझाव</h3>
              <p className="text-gray-600 text-sm">नक्षत्र के अनुकूल रत्न धारण करें</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nakshtra;