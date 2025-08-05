import { useRef, useState, useEffect } from "react";

const zodiacSigns = [
  "Aries", "Cancer", "Capricorn", "Libra", "Scorpio", "Leo",
  "Virgo", "Taurus", "Gemini", "Sagittarius", "Pisces", "Aquarius"
];

const zodiacIcons: Record<string, string> = {
  Aries: "https://images.astroyogi.com/strapicmsprod/assets/ARIES_04bdeca59e.svg",
  Cancer: "https://images.astroyogi.com/strapicmsprod/assets/CANCER_364708b894.svg",
  Capricorn: "https://images.astroyogi.com/strapicmsprod/assets/CAPRICORN_ab2706bf23.svg",
  Libra: "https://images.astroyogi.com/strapicmsprod/assets/LIBRA_c60a49cefb.svg",
  Scorpio: "https://images.astroyogi.com/strapicmsprod/assets/SCORPIO_e6bde48051.svg",
  Leo: "https://images.astroyogi.com/strapicmsprod/assets/LEO_593adbf0e7.svg",
  Virgo: "https://images.astroyogi.com/strapicmsprod/assets/VIRGO_fb766f0d08.svg",
  Taurus: "https://images.astroyogi.com/strapicmsprod/assets/TAURUS_198b4c97e9.svg",
  Gemini: "https://images.astroyogi.com/strapicmsprod/assets/GEMINI_9d35540bb9.svg",
  Sagittarius: "https://images.astroyogi.com/strapicmsprod/assets/SAGITTARIUS_e0ed1cd1fd.svg",
  Pisces: "https://images.astroyogi.com/strapicmsprod/assets/PISCES_4991a00d62.svg",
  Aquarius: "https://images.astroyogi.com/strapicmsprod/assets/AQUARIUS_4ad6eab3c3.svg",
};

const horoscopeData: Record<string, Record<string, string>> = {
  Aries: {
    daily: "Today brings you clarity and strength. Take bold steps!",
    weekly: "This week is all about progress and learning.",
    monthly: "Expect changes in career and relationships this month.",
  },
  Taurus: {
    daily: "Focus on your personal growth and finances today.",
    weekly: "Take charge of responsibilities and clear old debts.",
    monthly: "Stability will be your strength this month.",
  },
  // Add other zodiac signs similarly...
};

export default function ZodiacSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedZodiacSign, setSelectedZodiacSign] = useState<string | null>(null);
  const [activeHoroscopeTab, setActiveHoroscopeTab] = useState<"daily" | "weekly" | "monthly">("daily");
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });

  // Auto-scroll every 3 seconds unless paused
useEffect(() => {
  if (!isScrollingPaused) {
    intervalRef.current = setInterval(() => {
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        // Check if scroll reached end
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth - 10 // small buffer
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start
        } else {
          scrollContainer.scrollBy({ left: 150, behavior: 'smooth' }); // Scroll forward
        }
      }
    }, 3000);
  }

  return () => clearInterval(intervalRef.current as NodeJS.Timeout);
}, [isScrollingPaused]);

  // Pause scroll on hover/touch
  const handlePause = () => {
    setIsScrollingPaused(true);
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  const handleResume = () => {
    setIsScrollingPaused(false);
  };

  return (
    <div className="bg-white py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Today's Astrology Prediction</h2>
        </div>

        {/* Scrollable Zodiac Strip */}
        <div className="relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-gray-100">◀</button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 px-10 scrollbar-hide"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            {zodiacSigns.map((sign) => (
              <div
                key={sign}
                className="flex-shrink-0 w-24 text-center cursor-pointer"
                onClick={() => {
                  setSelectedZodiacSign(sign);
                  setActiveHoroscopeTab("daily");
                }}
              >
                <img src={zodiacIcons[sign]} alt={sign} className="w-16 h-16 mx-auto object-contain" />
                <p className="text-sm mt-2 text-gray-800 font-medium">{sign}</p>
              </div>
            ))}
          </div>

          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-gray-100">▶</button>
        </div>
      </div>

      {/* Modal Section */}
      {selectedZodiacSign && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setSelectedZodiacSign(null)}>
          <div
            className="relative bg-gradient-to-br from-orange-300 to-yellow-300 rounded-2xl shadow-2xl p-6 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black" onClick={() => setSelectedZodiacSign(null)}>&times;</button>

            {/* Tabs */}
            <div className="flex justify-center mb-8 px-4 md:px-0">
              <div className="bg-white rounded-xl p-2 shadow-lg flex flex-wrap justify-center gap-2">
                {(["daily", "weekly", "monthly"] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setActiveHoroscopeTab(period)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg capitalize text-sm sm:text-base transition-all duration-300 ${
                      activeHoroscopeTab === period
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-orange-500'
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Horoscope Content */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mx-4 md:mx-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                {selectedZodiacSign} - {activeHoroscopeTab.charAt(0).toUpperCase() + activeHoroscopeTab.slice(1)} Horoscope
              </h3>
              <p className="text-gray-600 leading-relaxed text-center text-base sm:text-lg">
                {
                  horoscopeData[selectedZodiacSign]?.[activeHoroscopeTab] ||
                  "Horoscope data will be updated soon. Please check back later."
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
