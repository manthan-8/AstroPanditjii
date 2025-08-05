  import React, { useEffect, useRef, useState } from 'react';
  import { Link } from 'react-router-dom';
  import ServiceCard from '../components/ServiceCard';
  import TestimonialCard from '../components/TestimonialCard';
  import { Star, Users, Award, Clock } from 'lucide-react';
  import { useTranslation, Trans } from 'react-i18next';
  import ZodiacSection from '../components/ZodiacSection';
import ScheduleAppointment from '../components/ScheduleAppointment';
  


  const Home: React.FC = () => {

    const images = [
  'https://live.staticflickr.com/65535/48725937056_fdd0c810ed_b.jpg',
  'https://live.staticflickr.com/65535/48725937056_fdd0c810ed_b.jpg',
  'https://live.staticflickr.com/65535/48725937056_fdd0c810ed_b.jpg',
  // Add more image URLs here
];


    const services1 = [
    { id: 1, name: 'Kundli Making', icon: '🧾', iconColor: 'bg-yellow-100' },
    { id: 2, name: 'Kundli Matching', icon: '💞', iconColor: 'bg-pink-100' },
    { id: 3, name: 'Daily Horoscope', icon: '🔮', iconColor: 'bg-purple-100' },
    { id: 4, name: 'Marriage Muhurat', icon: '💍', iconColor: 'bg-red-100' },
    { id: 5, name: 'Business Muhurat', icon: '📈', iconColor: 'bg-green-100' },
    { id: 6, name: 'Graha Shanti', icon: '🕉️', iconColor: 'bg-indigo-100' },
  ];


  const setSelectedService = (id: number) => {
      console.log("Selected service ID:", id);
      // yahan aap redirect ya modal open kar sakte ho
    };

    const { t } = useTranslation();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Get data from translations
    const services = t('servicesList', { returnObjects: true }) as any[];
    const testimonials = t('testimonialsList', { returnObjects: true }) as any[];

    const handlePlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay failed:', err);
        });
      }
    };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => (prev + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

    return (
        <div className="min-h-screen">
              <ZodiacSection />
              {/* {Home Section} */}
          <section className="relative w-full flex items-center justify-center mt-4 px-4">
        <div className="relative w-full max-w-7xl h-48 md:h-72 lg:h-80 xl:h-[300px] bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>
      </section>



    {/* Hero Split Section */}
  <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100  mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://giriraajastrovastu.com/assets/img/Kundli%20Dosha%20340x230%20pxl.png" // 👉 Replace with your actual image path
            alt="Spiritual guidance"
            className="w-full max-w-md rounded-3xl shadow-lg object-contain"
          />
        </div>

        {/* Right Side - Hero Text & Buttons */}
        <div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-spiritual-brown mb-6">
            <Trans i18nKey="hero.title">
              Find Your Path with <span className="text-saffron-600">Spiritual Guidance</span>
            </Trans>
          </h1>
          <p className="text-lg text-spiritual-brown/80 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {t('hero.consultNow')}
            </Link>
            <Link
              to="/services"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              {t('hero.ourServices')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>


        {/* Stats */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <StatCard icon={<Users />} count={t('stats.clients.count')} label={t('stats.clients.label')} />
              <StatCard icon={<Award />} count={t('stats.experience.count')} label={t('stats.experience.label')} />
              <StatCard icon={<Star />} count={t('stats.rating.count')} label={t('stats.rating.label')} />
              <StatCard icon={<Clock />} count={t('stats.available.count')} label={t('stats.available.label')} />
            </div>
          </div>
        </section>

        <ScheduleAppointment />

        {/* Services */}
<section className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-8xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('services.title')}</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('services.description')}</p>
    </div>

    {/* Scrollable Card Row - Balanced Padding */}
    <div
      className="overflow-x-auto scrollbar-hide pb-4"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex gap-6 px-4">
        {services.slice(0, 6).map((service) => (
          <Link to={`/book/`} key={service.id} className="flex-shrink-0">
  <div
    className="w-72 sm:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
  >
    <div className="p-6 sm:p-8">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-md text-2xl">
          {service.icon}
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
        {service.description}
      </p>
    </div>
    <div className="h-1 bg-yellow-400 rounded-b-2xl"></div>
  </div>
</Link>

        ))}
      </div>
    </div>

    {/* View All Button */}
    {/* <div className="text-center mt-12">
      <Link
        to="/services"
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold inline-block"
      >
        {t('services.viewAll')}
      </Link>
    </div> */}

    {/* Mobile Nav Dots */}
    <div className="flex justify-center mt-8 lg:hidden">
      <div className="flex space-x-2">
        {services.slice(0, 6).map((_, index) => (
          <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
        ))}
      </div>
    </div>
  </div>
</section>



        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('testimonials.title')}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('testimonials.description')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/about"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white  px-8 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold inline-block"
              >
                {t('testimonials.readMore')}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">{t('cta.description')}</p>
            <Link
              to="/book"
              className="bg-yellow-400 text-[#4B1E1E] px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-300 font-bold text-lg inline-block shadow-lg hover:shadow-xl"
            >
              {t('cta.button')}
            </Link>
          </div>
        </section>
      </div>
    );
  };

  const StatCard = ({ icon, count, label }: { icon: React.ReactNode; count: string; label: string }) => (
    <div>
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-2">{count}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );

  export default Home;
