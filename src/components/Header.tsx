import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown, Home, Image, User, Mail } from 'lucide-react';
import Logo from '../Assets/Logo.png'; // ✅ Local logo import

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const services = [
    'Interior Design',
    'Space Planning',
    'Color Consultation',
    'Furniture Selection',
    'Lighting Design',
    'Custom Furnishings'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-40 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Local Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img
              src={Logo}
              alt="Shivani Interior Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-2xl font-bold text-gray-800">Shivani Interior</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'home'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'gallery'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Gallery</span>
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in"
                >
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'about'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'contact'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>

            {/* Search Button */}
            <button
              onClick={onSearchClick}
              className="p-2 rounded-lg text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
              >
                <Image className="w-4 h-4" />
                <span>Gallery</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
              >
                <User className="w-4 h-4" />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
              <button
                onClick={onSearchClick}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
