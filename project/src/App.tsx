import React from 'react';
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
import './components/i18n'; // 👈 Import this line
import ContactDetail from './components/ContactDetail';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* <ContactDetail /> */}
          <Header />
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/book" element={<BookAppointment />} />
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