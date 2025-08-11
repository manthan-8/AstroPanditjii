import React from 'react';
import { Service } from '../types';
import { Clock, IndianRupee } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  service: Service;
  onBookNow?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookNow }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
      <div className="p-6">
        <div className="text-4xl mb-4 text-center">{service.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <IndianRupee className="h-4 w-4" />
            <span className="font-semibold text-green-600">{service.price}</span>
          </div>
        </div>

        {onBookNow && (
          <button
            onClick={() => onBookNow(service)}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-medium"
          >
            {t('services.bookNow', 'Book Now')}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;