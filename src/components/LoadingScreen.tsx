import React from 'react';
import { Home, Palette, Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="animate-spin-slow">
            <div className="w-24 h-24 border-4 border-amber-200 rounded-full flex items-center justify-center mx-auto">
              <Home className="w-10 h-10 text-amber-600" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 animate-bounce delay-300">
            <Palette className="w-8 h-8 text-orange-500" />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-bounce delay-700">
            <Sparkles className="w-6 h-6 text-amber-500" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Shivani Interior
        </h1>
        
        {/* Tagline */}
        <p className="text-gray-600 text-lg mb-8 animate-fade-in-delay">
          Crafting Beautiful Spaces
        </p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-loading-bar"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-500 mt-4 animate-pulse">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;