import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'residential'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Studio',
      details: ['Rampally main road near Balaji function hall','ghatkesar road', 'Hyderabd 501301', 'India'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 85550 88814', '+91 98483 02396', 'Available 9 AM - 7 PM'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@shivaniinterior.com', 'srinivas.charry.91@gmail.com', 'We reply within 24 hours'],
      color: 'text-amber-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9 AM - 7 PM', 'Sunday: 10 AM - 4 PM', 'Appointments available'],
      color: 'text-purple-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template params for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject || `Interior Design Inquiry - ${formData.projectType}`,
      message: formData.message,
      project_type: formData.projectType,
      to_email: 'kandukurishivani260@gmail.com'
    };

    try {
      await emailjs.send(
        'service_jgs6n0g',      // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
        templateParams,
        'PZzLjSwYfTcqvOmsO'       // Replace with your EmailJS public key
      );
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: 'residential'
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Let's discuss your project and bring your vision to life with our expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${info.color} bg-gray-50 p-3 rounded-full`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Consultation</h3>
              <p className="text-amber-100 mb-4">
                Book a free 30-minute consultation to discuss your project requirements.
              </p>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="office">Office</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="retail">Retail</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Success Notification */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2 animate-slide-in">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully! We'll contact you soon.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;