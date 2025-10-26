import React, { useState } from 'react';
import { Search, X, Image, User, Mail, Home } from 'lucide-react';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // 🔍 Mock Search Data (you can expand this later)
  const searchData = [
    { type: 'gallery', title: 'Modern Living Room', category: 'Living Room', icon: Image },
    { type: 'gallery', title: 'Luxury Bedroom Suite', category: 'Bedroom', icon: Image },
    { type: 'gallery', title: 'Designer Kitchen', category: 'Kitchen', icon: Image },
    { type: 'gallery', title: 'Dining Area Interiors', category: 'Dining', icon: Image },
    { type: 'gallery', title: 'Partition Designs', category: 'Partitions', icon: Image },
    { type: 'service', title: 'Interior Design Consultation', category: 'Service', icon: Home },
    { type: 'service', title: '3D Visualization', category: 'Service', icon: Home },
    { type: 'service', title: 'Space Planning', category: 'Service', icon: Home },
    { type: 'team', title: 'Shivani - Lead Designer', category: 'Team', icon: User },
    { type: 'team', title: 'Srinivas - Founder & Director', category: 'Team', icon: User },
    { type: 'contact', title: 'Contact Information', category: 'Contact', icon: Mail },
    { type: 'about', title: 'About Shivani Interiors', category: 'About', icon: User },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleResultClick = (result: any) => {
    // Scroll to specific section or category
    const sectionMap: Record<string, string> = {
      gallery: 'gallery',
      about: 'about',
      contact: 'contact',
      service: 'services',
    };

    const targetId = sectionMap[result.type];
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-24 px-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
        {/* Search Header */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50">
          <Search className="w-5 h-5 text-amber-500 mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for projects, services, or team members..."
            className="flex-1 text-lg text-gray-800 placeholder-gray-400 bg-transparent outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="ml-3 p-2 hover:bg-amber-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
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
              <X className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No results found for “{searchQuery}”</p>
            </div>
          ) : (
            <div className="p-3 space-y-1">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="w-full flex items-center px-5 py-3 rounded-xl hover:bg-amber-50 transition-all duration-300 text-left group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <result.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                      {result.title}
                    </h3>
                    <p className="text-sm text-gray-500">{result.category}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-gray-100 p-5 bg-gradient-to-r from-amber-50 to-orange-50">
          <p className="text-sm text-gray-600 mb-3 font-medium">Quick Links</p>
          <div className="flex flex-wrap gap-2">
            {['Home', 'Gallery', 'Services', 'About Us', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const sectionId = link.toLowerCase().replace(' us', '').replace(/\s+/g, '');
                  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="px-3 py-1.5 bg-white border border-amber-200 text-gray-700 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-all duration-200 shadow-sm"
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
