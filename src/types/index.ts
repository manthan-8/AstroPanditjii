export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface HoroscopeData {
  sign: string;
  daily: string;
  weekly: string;
  monthly: string;
}

export interface AppointmentForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  type: 'video' | 'chat';
  service: string;
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface AppContextType {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  selectedService: Service | null;
  setSelectedService: (service: Service | null) => void;
  appointmentForm: AppointmentForm;
  setAppointmentForm: (form: AppointmentForm) => void;
  contactForm: ContactForm;
  setContactForm: (form: ContactForm) => void;
}