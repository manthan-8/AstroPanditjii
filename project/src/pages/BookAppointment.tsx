import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useForm, ValidationError } from '@formspree/react';
import { Calendar, Clock, Video, MapPin, CheckCircle } from 'lucide-react';

const BookAppointment: React.FC = () => {
  const { appointmentForm, setAppointmentForm, selectedService } = useAppContext();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

const handleBasinSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://usebasin.com/f/4086511a3b51", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      setAppointmentForm({
        name: '',
        phone: '',
        message: '',
        email: '',
        date: '',
        time: '',
        type: 'video',
        service: '',
      });
    } else {
      setError(true);
    }
  } catch (error) {
    setError(true);
  }
};

  const handleInputChange = (field: keyof typeof appointmentForm, value: string) => {
    setAppointmentForm({ ...appointmentForm, [field]: value });
  };

  useEffect(() => {
    if (selectedService) {
      setAppointmentForm({ ...appointmentForm, service: selectedService.title });
    }
  }, [selectedService]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-300 flex items-center justify-center py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">Thank you for booking your consultation.</p>
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">Appointment Details:</h3>
            <div className="text-sm text-green-700 space-y-1">
              <p><strong>Type:</strong> {appointmentForm.type === 'video' ? 'Video Call' : 'Live Chat'}</p>
              <p><strong>Phone:</strong> {appointmentForm.phone}</p>
              <p><strong>Name:</strong> {appointmentForm.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-300 flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
        <CheckCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Submission Failed</h2>
        <p className="text-gray-600 mb-6">Oops! Something went wrong while booking your consultation.</p>
        <p className="text-gray-600 mb-4">Please try again later or contact support directly.</p>
        <div className="bg-red-50 rounded-lg p-4">
          <h3 className="font-semibold text-red-800 mb-2">Need Help?</h3>
          <div className="text-sm text-red-700 space-y-1">
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@panditji.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Book Your Consultation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized session with Pandit Ji...
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleBasinSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={appointmentForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={appointmentForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                {/* Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Consultation Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="video"
                        checked={appointmentForm.type === 'video'}
                        onChange={(e) => handleInputChange('type', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer ${
                        appointmentForm.type === 'video'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 hover:border-orange-300'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <Video className="h-6 w-6 text-orange-500" />
                          <div>
                            <h3 className="font-semibold text-gray-800">Video Call</h3>
                            <p className="text-sm text-gray-600">Online via video call</p>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="chat"
                        checked={appointmentForm.type === 'chat'}
                        onChange={(e) => handleInputChange('type', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer ${
                        appointmentForm.type === 'chat'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 hover:border-orange-300'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-6 w-6 text-orange-500" />
                          <div>
                            <h3 className="font-semibold text-gray-800">Live Chat</h3>
                            <p className="text-sm text-gray-600">Instant messaging</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={appointmentForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-500"
                    placeholder="Describe your query..."
                  />
                </div>

                {/* Hidden Field for service */}
                <input type="hidden" name="service" value={appointmentForm.service} />

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-6 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {submitted ? 'Booking...' : 'Book Appointment'}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Consultation Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600">Available 7 days a week</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600">Video & Chat options</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
                <p className="text-gray-600"><strong>Phone:</strong> +91 98765 43210</p>
                <p className="text-gray-600"><strong>Email:</strong> info@panditji.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
