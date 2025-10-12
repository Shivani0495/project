import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const galleryData: Record<string, any> = {
  'living-room': {
    title: 'Living Room',
    description: 'Create a cozy and stylish living room with comfortable seating, elegant lighting, and personal touches.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
    ]
  },
  'bedroom': {
    title: 'Bedroom',
    description: 'Design your dream bedroom with relaxing colors, smart storage, and luxurious bedding.',
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    ]
  },
  'kitchen': {
    title: 'Kitchen',
    description: 'Functional and beautiful kitchens with modern appliances, clever layouts, and stylish finishes.',
    images: [
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    ]
  },
  'office': {
    title: 'Office',
    description: 'Create a productive office space with ergonomic furniture, smart lighting, and modern design.',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    ]
  }
};

const GalleryDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const data = category ? galleryData[category] : null;

  if (!data) return <div className="p-8 text-center text-gray-500">Gallery item not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-orange-500 transition-colors duration-300"
      >
        ← Back to Gallery
      </button>
      
      <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
      <p className="text-gray-700 mb-8">{data.description}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.images.map((img: string, idx: number) => (
          <img key={idx} src={img} alt={`${data.title} ${idx + 1}`} className="rounded-xl shadow-lg w-full h-64 object-cover" />
        ))}
      </div>
    </div>
  );
};

export default GalleryDetail;
