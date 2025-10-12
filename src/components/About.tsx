import React from 'react';
import { Award, Users, Clock, Star, CheckCircle, Target } from 'lucide-react';

// ✅ Import local images from src/Assets
import SrinivasPic from '../Assets/Srinivas_Pic.jpg';
import Shivani from '../Assets/Shivani.jpg';
import Kithen from '../Assets/Kithen.png'
import Logo from '../Assets/Logo.png'; // Optional — used for “Our Story” image

const About = () => {
  const achievements = [
    { icon: Award, title: '25+ Awards', description: 'Recognition for design and innovation excellence' },
    { icon: Users, title: '1000+ Clients', description: 'Trusted by happy customers across India' },
    { icon: Clock, title: '20+ Years', description: 'Experience in interiors and CNC craftsmanship' },
    
  ];

  const values = [
    { icon: Target, title: 'Vision', description: 'To transform every space into an elegant, functional, and inspiring environment.' },
    { icon: CheckCircle, title: 'Mission', description: 'Deliver world-class interior design and CNC solutions that blend art and technology.' },
    { icon: Star, title: 'Values', description: 'Creativity, precision, transparency, and customer delight in every project we undertake.' }
  ];

  const teamMembers = [
    {
      name: 'Srinivas',
      role: 'Founder & Creative Director',
      image: SrinivasPic,
      description: 'With over 20 years of experience, Srinivas leads the design and CNC innovation at Shivani Interiors, ensuring each project blends creativity and craftsmanship.'
    },
    {
      name: 'Shivani',
      role: 'Website Designer & Brand Strategist',
      image: Shivani,
      description: 'Shivani focuses on digital design and brand presentation, helping clients visualize their dream interiors through modern aesthetics and seamless experience.'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Shivani Interiors, we craft timeless interiors and precision CNC designs that transform ordinary spaces into extraordinary experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Established in <strong>2005</strong>, Shivani Interiors started as a small design studio with a passion for creativity and perfection.
              Over the years, we’ve grown into a full-fledged interior design and CNC solutions company, combining artistic vision with precision engineering.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We take pride in delivering high-quality interior transformations — from modern homes and offices to commercial establishments.
              Our CNC services add a layer of innovation, allowing us to design intricate patterns, furniture details, and architectural elements with unmatched accuracy.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
              <span className="text-amber-600 font-semibold">Building Dreams Since 2005</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={Kithen}
              alt="Our design process"
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                <achievement.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
