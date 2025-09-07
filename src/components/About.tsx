import React from 'react';
import { Award, Users, Clock, Star, CheckCircle, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, title: '25+ Awards', description: 'Recognition for design excellence' },
    { icon: Users, title: '1000+ Clients', description: 'Happy customers worldwide' },
    { icon: Clock, title: '15+ Years', description: 'Experience in interior design' },
    { icon: Star, title: '4.9/5 Rating', description: 'Customer satisfaction score' }
  ];

  const values = [
    { icon: Target, title: 'Vision', description: 'To transform spaces into stunning environments that inspire and delight.' },
    { icon: CheckCircle, title: 'Mission', description: 'Creating exceptional interior designs that reflect your unique style and personality.' },
    { icon: Star, title: 'Values', description: 'Quality, creativity, integrity, and customer satisfaction in everything we do.' }
  ];

  const teamMembers = [
    {
      name: 'Shivani Sharma',
      role: 'Founder & Lead Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With over 15 years of experience, Shivani brings creativity and expertise to every project.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Senior Interior Designer',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specializes in contemporary and modern design with attention to functional aesthetics.'
    },
    {
      name: 'Priya Patel',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ensures seamless project execution from concept to completion with precision.'
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
            We are passionate interior designers committed to creating beautiful, functional spaces that reflect your unique style and personality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2009, Shivani Interior has grown from a small design studio to a leading interior design company. 
              Our journey began with a simple vision: to create spaces that not only look beautiful but also enhance the way people live and work.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Over the years, we've had the privilege of working with diverse clients, from homeowners looking to refresh their living spaces 
              to businesses seeking to create inspiring work environments. Each project has taught us something new and helped us refine our craft.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
              <span className="text-amber-600 font-semibold">Building Dreams Since 2009</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          <div className="grid md:grid-cols-3 gap-8">
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