import React from 'react';
import { Hand, Star, CreditCard, Circle, HandMetal, ArrowRight } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

interface ServiceCard {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    id: 'reiki-healer',
    title: 'Reiki Healer',
    icon: <Hand className="w-8 h-8 text-amber-700" />
  },
  {
    id: 'popular-astrologers',
    title: 'Popular Astrologers',
    icon: <Star className="w-8 h-8 text-amber-700" />
  },
  {
    id: 'learn-tarot',
    title: 'Learn Tarot',
    icon: <CreditCard className="w-8 h-8 text-amber-700" />
  },
  {
    id: 'rudra-abhishek-pooja',
    title: 'Rudra Abhishek Pooja',
    icon: <Circle className="w-8 h-8 text-amber-700" />
  },
  {
    id: 'palm-reader',
    title: 'Palm Reader',
    icon: <HandMetal className="w-8 h-8 text-amber-700" />
  }
];

const ServiceCard: React.FC<{ service: ServiceCard; onClick: () => void }> = ({ 
  service, 
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 min-w-[200px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-amber-100 hover:to-orange-100 border border-amber-100/50"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-3 left-3 w-2 h-2 bg-amber-400 rounded-full"></div>
        <div className="absolute top-6 right-4 w-1 h-1 bg-amber-300 rounded-full"></div>
        <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-6 right-3 w-1 h-1 bg-amber-400 rounded-full"></div>
      </div>
      
      {/* Icon container */}
      <div className="relative z-10 flex justify-center mb-4">
        <div className="p-3 bg-white/60 rounded-full group-hover:bg-white/80 transition-colors duration-300">
          {service.icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="relative z-10 text-center text-gray-800 font-semibold text-sm leading-tight group-hover:text-gray-900 transition-colors duration-300">
        {service.title}
      </h3>
      
      {/* Hover indicator */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-200/0 to-orange-200/0 group-hover:from-amber-200/10 group-hover:to-orange-200/10 transition-all duration-300"></div>
    </div>
  );
};

const ScheduleAppointment: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/book'); // ✅ Navigate to the booking page
  };

//   const handleViewAll = () => {
//     console.log('View All clicked');
//     // Handle view all logic here
//   };

  return (
    <section className="w-full bg-gradient-to-br from-orange-100 to-yellow-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Schedule Appointment
          </h2>
          {/* <button 
            onClick={handleViewAll}
            className="group flex items-center gap-2 px-4 py-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 hover:border-amber-300 rounded-full text-amber-800 hover:text-amber-900 font-medium text-sm transition-all duration-300 hover:shadow-md"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button> */}
        </div>
        
        {/* Services Grid/Scroll */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </div>
          
          {/* Tablet Grid */}
          <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-4">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </div>
          
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <div className="w-4 flex-shrink-0"></div> {/* Left padding */}
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => handleServiceClick(service.id)}
                />
              ))}
              <div className="w-4 flex-shrink-0"></div> {/* Right padding */}
            </div>
          </div>
          
          {/* Scroll indicator for mobile */}
          <div className="md:hidden flex justify-center mt-4">
            <div className="flex gap-1">
              {services.map((_, index) => (
                <div 
                  key={index}
                  className="w-1.5 h-1.5 bg-amber-200 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Show remaining services on tablet */}
        <div className="hidden md:block lg:hidden mt-6">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {services.slice(3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAppointment;