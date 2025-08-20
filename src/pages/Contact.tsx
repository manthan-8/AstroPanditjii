import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { contactForm, setContactForm } = useAppContext();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!contactForm.name.trim()) {
      newErrors.name = t("contact.errors.nameRequired");
    }
    if (!contactForm.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }
    if (!contactForm.message.trim()) {
      newErrors.message = t("contact.errors.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('name', contactForm.name);
    formData.append('email', contactForm.email);
    formData.append('message', contactForm.message);

    try {
      const response = await fetch('https://usebasin.com/f/4086511a3b51', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSubmitError(false);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    }
  };

  const handleInputChange = (field: keyof typeof contactForm, value: string) => {
    setContactForm({
      ...contactForm,
      [field]: value
    });
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  // ✅ After Submit / Error Screen
  if (isSubmitted || submitError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-300 flex items-center justify-center py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
          {submitError ? (
            <>
              <CheckCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t("contact.errorTitle")}
              </h2>
              <p className="text-gray-600 mb-6">{t("contact.errorMessage")}</p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmitError(false);
                }}
                className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-3 rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-300 font-medium"
              >
                {t("contact.tryAgain")}
              </button>
            </>
          ) : (
            <>
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t("contact.successTitle")}
              </h2>
              <p className="text-gray-600 mb-6">{t("contact.successMessage")}</p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setContactForm({ name: '', email: '', message: '' });
                }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-medium"
              >
                {t("contact.sendAnother")}
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 to-yellow-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{t("contact.heroTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("contact.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{t("contact.formTitle")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fullName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={t("contact.fullNamePlaceholder")}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={t("contact.emailPlaceholder")}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={t("contact.messagePlaceholder")}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-6 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {t("contact.sendMessage")}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{t("contact.infoTitle")}</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("contact.visitUs")}</h3>
                    <p className="text-gray-600 leading-relaxed">{t("contact.address")}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("contact.callUs")}</h3>
                    <p className="text-gray-600">{t("contact.phoneNumbers")}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("contact.emailUs")}</h3>
                    <p className="text-gray-600">{t("contact.emails")}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("contact.officeHours")}</h3>
                    <p className="text-gray-600">{t("contact.hours")}</p>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="mt-8 p-6 bg-gradient-to-br from-orange-100 to-yellow-300 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t("contact.emergencyTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("contact.emergencyDesc")}</p>
                <p className="text-2xl font-bold text-red-600">{t("contact.emergencyPhone")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
