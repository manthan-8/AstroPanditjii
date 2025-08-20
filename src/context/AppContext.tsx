import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppContextType, Service, AppointmentForm, ContactForm } from '../types';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [appointmentForm, setAppointmentForm] = useState<AppointmentForm>({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      type: 'video',
      service: '',
      message: ''
    });
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const value: AppContextType = {
    isModalOpen,
    setIsModalOpen,
    selectedService,
    setSelectedService,
    appointmentForm,
    setAppointmentForm,
    contactForm,
    setContactForm
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};