import React, { useState } from 'react';
import { Search, X, Image, User, Mail, Home } from 'lucide-react';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Mock search data
  const searchData = [
    { type: 'gallery', title: 'Modern Living Room', category: 'Living Room', icon: Image },
    { type: 'gallery', title: 'Luxury Bedroom Suite', category: 'Bedroom', icon: Image },
    { type: 'gallery', title: 'Designer Kitchen', category: 'Kitchen', icon: Image },
    { type: 'service', title: 'Interior Design Consultation', category: 'Service', icon: Home },
    { type: 'service', title: '3D Visualization', category: 'Service', icon: Home },
    { type: 'service', title: 'Space Planning', category: 'Service', icon: Home },
    { type: 'team', title: 'Shivani Sharma - Lead Designer', category: 'Team', icon: User },
    { type: 'contact', title: 'Contact Information', category: 'Contact', icon: Mail },
    { type: 'about', title: 'About Our Company', category: 'About', icon: User }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleResultClick = (result: any) => {
    // Handle navigation based on result type
    switch (result.type) {
      case 'gallery':
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-fade-in-up">
        {/* Search Header */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for projects, services, team members..."
            className="flex-1 text-lg outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="ml-3 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery === '' ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Start typing to search...</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No results found for "{searchQuery}"</p>
            </div>
          ) : (
            <div className="p-2">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <result.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{result.title}</h3>
                    <p className="text-sm text-gray-500">{result.category}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 p-4">
          <p className="text-sm text-gray-500 mb-3">Quick Links</p>
          <div className="flex flex-wrap gap-2">
            {['Gallery', 'Services', 'About Us', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const sectionId = link.toLowerCase().replace(' us', '').replace(' ', '');
                  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;