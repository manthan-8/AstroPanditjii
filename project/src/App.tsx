import React, { useState, useEffect } from 'react';  // <-- yahan hooks import karo
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import './components/i18n';
import ContactDetail from './components/ContactDetail';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import ChatBotWidget from './components/ChatBotWidget';
import KundliForm from './components/KundliForm';
import KundliMatchmaking from './components/KundliMatchmaking';
import Loader from './components/Loader';
import Panchang from './pages/Panchang';
import SubhMuhraat from './pages/SubhMuhraat';
import Nakshtra from './pages/Nakshtra';
import Chokdiya from './pages/Chokdiya';
import RahuKaal from './pages/RahuKaal';

function App() {
  const [loading, setLoading] = useState(true); // initial loading (2 sec)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader logoSrc="/assets/logo.png" size={150} />;
  }

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* <ContactDetail /> */}
          <Header />
          <ScrollToTop />
          <ChatBotWidget />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/book" element={<BookAppointment />} />
              <Route path="/kundali-making" element={<KundliForm />} />
              <Route path="/kundali-matching" element={<KundliMatchmaking />} />
              <Route path="/panchang" element={<Panchang />} />
              <Route path="/subhmuhraat" element={<SubhMuhraat />} />
              <Route path="/nakshtra" element={<Nakshtra />} />
              <Route path="/chokdiya" element={<Chokdiya />} />
              <Route path="/rahu-kaal" element={<RahuKaal />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
