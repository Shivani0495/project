import React from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Hero = () => {
  const heroImages = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  const stats = [
    { icon: Star, label: 'Projects Completed', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Users, label: 'Happy Clients', value: '1000+' }
  ];

  // Scroll smoothly to Contact section
  const handleBookNowClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll smoothly to Gallery section
  const handleViewPortfolioClick = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel images={heroImages} autoPlay interval={5000} showDots={false} />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    Dream Space
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Create stunning interiors that reflect your personality and lifestyle with our expert design solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button
                    onClick={handleBookNowClick} // Scrolls to Contact
                    className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button
                    onClick={handleViewPortfolioClick} // Scrolls to Gallery
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-800"
                  >
                    View Portfolio
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Free Consultation</h3>
                <p className="text-gray-600 mb-4">Get expert advice tailored to your space and budget. No obligations, just professional insights.</p>
                <button
                  onClick={handleBookNowClick} // Scrolls to Contact
                  className="text-amber-600 font-semibold hover:text-orange-600 transition-colors duration-200"
                >
                  Book Now →
                </button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">3D Visualization</h3>
                <p className="text-gray-600 mb-4">See your space come to life with photorealistic 3D renders before we start the project.</p>
                <button className="text-amber-600 font-semibold hover:text-orange-600 transition-colors duration-200">
                  Learn More →
                </button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Turnkey Solutions</h3>
                <p className="text-gray-600 mb-4">From concept to completion, we handle everything so you can sit back and relax.</p>
                <button className="text-amber-600 font-semibold hover:text-orange-600 transition-colors duration-200">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
