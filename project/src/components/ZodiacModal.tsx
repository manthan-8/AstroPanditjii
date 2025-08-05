import React, { useState } from 'react';

const zodiacData: Record<string, string> = {
  Aries: "Today is a great day for new beginnings. Trust your instincts.",
  Taurus: "Patience will bring rewards. Stay grounded.",
  Gemini: "Conversations today will bring clarity. Be honest.",
  Cancer: "Stay close to loved ones. Your intuition is strong today.",
  Leo: "Shine bright but be humble. Recognition is on the horizon.",
  Virgo: "Details matter. Finish what you started.",
  Libra: "Seek balance in choices. Harmony brings clarity.",
  Scorpio: "Trust your instincts. Something hidden may surface.",
  Sagittarius: "Adventure calls. Be open to new ideas.",
  Capricorn: "Your focus brings results. Don't rush.",
  Aquarius: "Innovate and inspire. Others are watching.",
  Pisces: "Your dreams are meaningful. Reflect deeply.",
};

const signs = Object.keys(zodiacData);

const ZodiacModal: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const closeModal = () => setSelectedSign(null);

  return (
    <section className="bg-[#1C1C2D] text-white py-10 px-4">
      <h2 className="text-2xl md:text-3xl text-[#E0B653] font-semibold text-center mb-6">
        Click Your Zodiac Sign
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center max-w-5xl mx-auto">
        {signs.map(sign => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className="bg-[#3B2F2F] text-white border-2 border-[#E0B653] rounded-lg px-4 py-3 text-center text-sm sm:text-base hover:bg-[#C69C4F] hover:text-[#1C1C2D] transition-all"
          >
            {sign}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedSign && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#2E2E3A] text-white border-2 border-[#E0B653] rounded-lg p-6 max-w-md w-[90%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-[#E0B653] text-2xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-[#FFD866] mb-3">
              {selectedSign} Horoscope
            </h3>
            <p className="text-sm text-[#EDEDED]">{zodiacData[selectedSign]}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ZodiacModal;
