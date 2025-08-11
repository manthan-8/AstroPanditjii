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

export default function ZodiacSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedZodiacSign, setSelectedZodiacSign] = useState<string | null>(null);
  const [activeHoroscopeTab, setActiveHoroscopeTab] = useState<"daily" | "weekly" | "monthly">("daily");
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);

  const [horoscopeText, setHoroscopeText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });

  // Auto-scroll every 3 seconds unless paused
  useEffect(() => {
    if (!isScrollingPaused) {
      intervalRef.current = setInterval(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
          if (
            scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
            scrollContainer.scrollWidth - 10
          ) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollContainer.scrollBy({ left: 150, behavior: "smooth" });
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
  const handleResume = () => setIsScrollingPaused(false);

  // Fetch horoscope from API
  const fetchHoroscope = async (sign: string, type: "daily" | "weekly" | "monthly") => {
    setLoading(true);
    setError(null);
    setHoroscopeText(null);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/horoscope/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    sign: sign.toLowerCase(),
    type: type,
  }),
});

// Check if response has content before parsing
const text = await response.text();

if (!response.ok) {
  throw new Error(text || "Failed to fetch horoscope");
}

let data;
try {
  data = JSON.parse(text);
} catch (e) {
  throw new Error("Invalid JSON response from server");
}

// Now use data as before
if (data.success && data.data && data.data.prediction) {
  setHoroscopeText(data.data.prediction);
} else {
  setHoroscopeText("No prediction available.");
}
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch horoscope whenever sign or tab changes
  useEffect(() => {
    if (selectedZodiacSign) {
      fetchHoroscope(selectedZodiacSign, activeHoroscopeTab);
    }
  }, [selectedZodiacSign, activeHoroscopeTab]);

  return (
    <div className="bg-white py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Today's Astrology Prediction</h2>
        </div>

        {/* Scrollable Zodiac Strip */}
        <div className="relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-gray-100">
            ◀
          </button>

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

          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-gray-100">
            ▶
          </button>
        </div>
      </div>

      {/* Modal Section */}
      {selectedZodiacSign && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedZodiacSign(null)}
        >
          <div
            className="relative bg-gradient-to-br from-orange-300 to-yellow-300 rounded-2xl shadow-2xl p-6 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setSelectedZodiacSign(null)}
            >
              &times;
            </button>

            {/* Tabs */}
            <div className="flex justify-center mb-8 px-4 md:px-0">
              <div className="bg-white rounded-xl p-2 shadow-lg flex flex-wrap justify-center gap-2">
                {(["daily", "weekly", "monthly"] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setActiveHoroscopeTab(period)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg capitalize text-sm sm:text-base transition-all duration-300 ${
                      activeHoroscopeTab === period
                        ? "bg-orange-500 text-white shadow-md"
                        : "text-gray-600 hover:text-orange-500"
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Horoscope Content */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mx-4 md:mx-0 min-h-[120px] flex items-center justify-center">
              {loading && <p className="text-center text-gray-600">Loading...</p>}
              {error && <p className="text-center text-red-500">{error}</p>}
              {!loading && !error && (
                <p className="text-gray-600 leading-relaxed text-center text-base sm:text-lg">
                  {horoscopeText || "Horoscope data will be updated soon. Please check back later."}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
