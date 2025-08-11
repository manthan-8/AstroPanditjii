import React, { useState } from 'react';

interface FormData {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  location: string;
  gender: 'male' | 'female';
}

const KundliForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    location: '',
    gender: 'male'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Kundli form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: keyof FormData, value: string | 'male' | 'female') => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-200 via-primary-300 to-primary-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-primary-600 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-primary-600 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 border-4 border-primary-600 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-8">
            Get Your Free Kundali!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Full Name */}
    <input
      type="text"
      placeholder="Full Name*"
      value={formData.fullName}
      onChange={(e) => handleInputChange('fullName', e.target.value)}
      className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
      required
    />

    {/* Date of Birth */}
    <div className="relative">
      <input
        type="date"
        value={formData.dateOfBirth}
        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800"
        required
      />
      <label className="absolute -top-3 left-5 bg-white px-2 text-sm text-yellow-600 font-semibold select-none">
        Date of Birth*
      </label>
    </div>

    {/* Time of Birth */}
    <div className="relative">
      <input
        type="time"
        value={formData.timeOfBirth}
        onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
        className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800"
        required
      />
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        </svg>
      </div>
    </div>

    {/* Location */}
    <input
      type="text"
      placeholder="Location*"
      value={formData.location}
      onChange={(e) => handleInputChange('location', e.target.value)}
      className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
      required
    />
  </div>

  {/* Gender Selection */}
  <div className="flex gap-12 justify-center mt-6">
    <label className="flex items-center cursor-pointer space-x-3">
      <input
        type="radio"
        name="gender"
        value="male"
        checked={formData.gender === 'male'}
        onChange={(e) => handleInputChange('gender', e.target.value as 'male')}
        className="w-6 h-6 text-yellow-500 border-2 border-gray-300 focus:ring-yellow-400"
      />
      <span className="text-gray-800 font-semibold text-lg">Male</span>
    </label>

    <label className="flex items-center cursor-pointer space-x-3">
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formData.gender === 'female'}
        onChange={(e) => handleInputChange('gender', e.target.value as 'female')}
        className="w-6 h-6 text-yellow-500 border-2 border-gray-300 focus:ring-yellow-400"
      />
      <span className="text-gray-800 font-semibold text-lg">Female</span>
    </label>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-extrabold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg"
  >
    GET YOUR KUNDALI
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default KundliForm;