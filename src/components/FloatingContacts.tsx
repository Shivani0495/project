import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const FloatingContacts = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919391763348'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I am interested in your interior design services. Can we discuss my project?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'kandukurishivani260@gmail.com'; // Replace with actual email
    const subject = encodeURIComponent('Interior Design Inquiry');
    const body = encodeURIComponent('Hi,\n\nI am interested in your interior design services. Could you please provide more information about your packages and process?\n\nThank you!');
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </div>
      </button>

      {/* Email Button */}
      <button
        onClick={handleEmailClick}
        className="group bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
        style={{ animationDelay: '0.5s' }}
        title="Send Email"
      >
        <Mail className="w-6 h-6" />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Send Email
        </div>
      </button>
    </div>
  );
};

export default FloatingContacts;