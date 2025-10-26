import React from 'react';
import { useNavigate } from 'react-router-dom';

const galleryItems = [
  {
    id: 'living-room',
    title: 'Living Room',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    image:
      'https://cdn-dliin.nitrocdn.com/iFaxlHcVqyWZWghwsjNiQOatlfNsVALG/assets/images/source/rev-b13ef66/dlifeinteriors.com/wp-content/uploads/2023/06/bedroom2x.jpg',
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    image:
      'https://cdn-dliin.nitrocdn.com/iFaxlHcVqyWZWghwsjNiQOatlfNsVALG/assets/images/source/rev-b13ef66/dlifeinteriors.com/wp-content/uploads/2023/06/IMAGE_WEB-1-1-jpg.webp',
  },
  {
    id: 'kidsroom',
    title: 'Kids Room',
    image:
      'https://media.istockphoto.com/id/1256104370/photo/boy-sleeping-and-dreaming-a-future-in-the-space.jpg?s=612x612&w=0&k=20&c=OC0lwRToifkKRhAYGVRoWI8kFyqGcerGdaKV6FWItfg=',
  },
  {
    id: 'dining',
    title: 'Dining Area',
    image:
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE1fHx8ZW58MHx8fHx8',
  },
  {
    id: 'partition',
    title: 'Partition Designs',
    image:
      'https://i.ytimg.com/vi/-oz3yoAyTK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAF8SFVxDY8CMfR_GYbpQ0znX8KLQ',
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Our Gallery
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            onClick={() => navigate(`/gallery/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-2xl group-hover:brightness-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-2xl font-semibold mb-6 drop-shadow-md">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
