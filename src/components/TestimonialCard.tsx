import React from 'react';
import { Testimonial } from '../types';
import { Star, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { i18n } = useTranslation();

  // Format date according to current language
  const formattedDate = new Date(testimonial.date).toLocaleDateString(i18n.language);

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 p-6 sm:p-8">
  {/* Star Rating */}
  <div className="flex items-center mb-4">
    <div className="flex text-yellow-400">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
    </div>
  </div>

  {/* Comment */}
  <p className="text-gray-700 mb-6 italic leading-relaxed text-base sm:text-lg">
    “{testimonial.comment}”
  </p>

  {/* User Info */}
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
      <div className="flex items-center space-x-1 text-gray-500 text-sm mt-1">
        <MapPin className="h-4 w-4" />
        <span>{testimonial.location}</span>
      </div>
    </div>

    {/* Date */}
    <div className="text-sm text-gray-400">{formattedDate}</div>
  </div>
</div>

  );
};

export default TestimonialCard;