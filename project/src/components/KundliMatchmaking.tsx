import React, { useState } from 'react';

interface PersonData {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  location: string;
}

interface MatchmakingData {
  Male: PersonData;
  Female: PersonData;
}

const KundliMatchmaking: React.FC = () => {
  const [formData, setFormData] = useState<MatchmakingData>({
    Male: {
      fullName: '',
      dateOfBirth: '',
      timeOfBirth: '',
      location: ''
    },
    Female: {
      fullName: '',
      dateOfBirth: '',
      timeOfBirth: '',
      location: ''
    }
  });

  // New state to toggle form view
  const [activePerson, setActivePerson] = useState<'Male' | 'Female'>('Male');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Matchmaking form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (person: 'Male' | 'Female', field: keyof PersonData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [person]: {
        ...prev[person],
        [field]: value
      }
    }));
  };

  const PersonForm: React.FC<{
    person: 'Male' | 'Female';
    title: string;
    titleColor: string;
    data: PersonData;
  }> = ({ person, title, titleColor, data }) => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className={`text-2xl font-semibold ${titleColor} border-b-4 border-current pb-3 inline-block`}>
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name*"
          value={data.fullName}
          onChange={(e) => handleInputChange(person, 'fullName', e.target.value)}
          className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
          required
        />

        <div className="relative">
          <input
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => handleInputChange(person, 'dateOfBirth', e.target.value)}
            className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800"
            required
          />
          <label className="absolute -top-3 left-5 bg-white px-2 text-sm text-yellow-600 font-semibold select-none">
            Date of Birth*
          </label>
        </div>

        <div className="relative">
          <input
            type="time"
            value={data.timeOfBirth}
            onChange={(e) => handleInputChange(person, 'timeOfBirth', e.target.value)}
            className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800"
            required
          />
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            </svg>
          </div>
        </div>

        <input
          type="text"
          placeholder="Location*"
          value={data.location}
          onChange={(e) => handleInputChange(person, 'location', e.target.value)}
          className="w-full px-5 py-4 border-2 border-gray-300 rounded-3xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
          required
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-yellow-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-yellow-600 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-yellow-600 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 border-4 border-yellow-600 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 sm:p-10 lg:p-16">
        {/* <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Kundali Matchmaking
        </h1> */}

        {/* Toggle Buttons */}
        <div className="flex space-x-6 mb-12">
          <button
            type="button"
            onClick={() => setActivePerson('Male')}
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300
              ${activePerson === 'Male'
                ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-400/50'
                : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}`}
          >
            Male's Details
          </button>

          <button
            type="button"
            onClick={() => setActivePerson('Female')}
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300
              ${activePerson === 'Female'
                ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-400/50'
                : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}`}
          >
            Female's Details
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {activePerson === 'Male' && (
            <PersonForm
              person="Male"
              title="Enter Male's Details"
              titleColor="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"
              data={formData.Male}
            />
          )}
          {activePerson === 'Female' && (
            <PersonForm
              person="Female"
              title="Enter Female's Details"
              titleColor="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"
              data={formData.Female}
            />
          )}

          <button
            type="submit"
            className="mt-10 w-full bg-gradient-to-r from-orange-500 to-red-600 text-white  hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-extrabold py-4 px-6 rounded-3xl transition-all duration-300 shadow-lg"
          >
            MATCH YOUR KUNDALI
          </button>
        </form>
      </div>
    </div>
  );
};

export default KundliMatchmaking;
