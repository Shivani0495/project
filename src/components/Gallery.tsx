import React from 'react';
import { useNavigate } from 'react-router-dom';

const galleryItems = [
  { id: 'living-room', title: 'Living Room', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg' },
  { id: 'bedroom', title: 'Bedroom', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg' },
  { id: 'kitchen', title: 'Kitchen', image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg' },
  { id: 'office', title: 'Office', image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg' },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Gallery</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map(item => (
          <div
            key={item.id}
            className="cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
            onClick={() => navigate(`/gallery/${item.id}`)}
          >
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
