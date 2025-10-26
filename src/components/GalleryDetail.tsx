import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// 🏡 Gallery Data – Extended for Shivani Interiors
const galleryData: Record<string, any> = {
  'living-room': {
    title: 'Living Room Interiors',
    description:
      'Transform your living space into an elegant retreat with Shivani Interiors. We craft living rooms that blend comfort, functionality, and artistic design. Every element — from furniture to lighting — is tailored to your taste, creating a warm and luxurious space where family and friends connect beautifully.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://plus.unsplash.com/premium_photo-1706140675031-1e0548986ad1?ixlib=rb-4.1.0&fm=jpg&q=80&w=2000',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
    ],
  },

  bedroom: {
    title: 'Custom-Made Bedrooms',
    description:
      'At Shivani Interiors, we believe your bedroom should be more than just a place to rest — it’s your personal sanctuary where comfort meets style. We specialize in crafting custom-designed bedroom interiors that perfectly blend functionality, aesthetics, and warmth. From luxurious cots and elegant wardrobes to precisely crafted CNC headboards, dressing tables, and side units — every element is custom-made to fit your space and lifestyle.',
    images: [
      'https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_1280.jpg',
      'https://watermark.lovepik.com/photo/20211119/large/lovepik-modern-style-bedroom-effect-map-picture_500300617.jpg',
      'https://images.alphacoders.com/740/740968.jpg',
    ],
  },

  kitchen: {
    title: 'Modular & CNC Kitchens',
    description:
      'Our kitchens combine functionality and design innovation. At Shivani Interiors, we specialize in modular kitchens and CNC-cut finishes that bring elegance and precision to your cooking space. Whether you want a contemporary island layout or a classic wooden finish, we craft it with durability and flair.',
    images: [
      'https://wallpapers.com/images/hd/grey-modular-kitchen-with-lights-picture-f9ndjpdmwd8fpy1u.jpg',
      'https://wallpapers.com/images/hd/grey-and-white-modular-kitchen-picture-484jphfq1if1ajun.jpg',
      'https://www.ideaainteriors.com/wp-content/uploads/2016/09/Untitled-4-21.jpg',
    ],
  },

  kidsroom: {
    title: "Children's Rooms",
    description:
      'Shivani Interiors brings imagination to life with playful and functional kids’ room designs. We craft colorful, safe, and inspiring spaces where creativity thrives. From themed décor and smart storage to ergonomic furniture and soft lighting, every detail is tailored to suit your child’s personality and comfort — creating a joyful room that grows with them.',
    images: [
      'https://media.istockphoto.com/id/509097876/photo/modern-teen-boy-bedroom.jpg?s=612x612&w=0&k=20&c=arWg1dx2OD1kNqVqqx4zcUhKk1FpB7UJ_H6DwgeJqs4=',
      'https://w0.peakpx.com/wallpaper/352/666/HD-wallpaper-stylish-interior-childrens-bedroom-modern-interior-design-country-house-room-design-for-a-little-boy.jpg',
      'https://i.pinimg.com/736x/10/5d/50/105d502ef53ba3120964bc1235d17611.jpg',
    ],
  },

  office: {
    title: 'Office & Workspace Design',
    description:
      'Enhance productivity and elegance with Shivani Interiors’ office design solutions. We craft professional workspaces that inspire creativity, focus, and collaboration. Our ergonomic furniture, strategic lighting, and CNC-crafted decor panels ensure your workspace is both stylish and functional — perfect for modern professionals.',
    images: [
      'https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg',
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    ],
  },

  dining: {
    title: 'Dining Area Interiors',
    description:
      'Bring elegance and warmth to your dining experience with Shivani Interiors. Our dining area designs are crafted to encourage togetherness, comfort, and sophistication. Whether you prefer a modern minimalist setup or a rich wooden classic ambiance, we tailor every dining table, chair, and lighting fixture to reflect your family’s style. From spacious dining halls to cozy breakfast corners, our team ensures every detail enhances both aesthetics and functionality.',
    images: [
      'https://media.istockphoto.com/id/1434235744/photo/interior-design-of-modern-dining-room-or-living-room-marble-table-and-chairs-wooden-sideboard.jpg?s=612x612&w=0&k=20&c=TcomL-_7ZGZXwJlm3qNISY6gEqyFG-YLweGSyo2_nh8=',
      'https://img.freepik.com/free-photo/dining-room-arrangement_23-2148893942.jpg',
      'https://media.istockphoto.com/id/1357529222/photo/3d-rendering-of-a-dining-area-in-modern-kitchen.jpg?s=612x612&w=0&k=20&c=TkxsGMij1SYk3EJjFnPEmsn7zlRZuAjc-EhrnfmkB9I=',
    ],
  },

  partition: {
    title: 'Partition Designs',
    description:
      'Add sophistication and structure to your interiors with our CNC-crafted partition designs. Shivani Interiors offers creative divider panels that enhance privacy while maintaining an open feel. Whether it’s a laser-cut wooden partition, glass separator, or designer jali pattern, our partitions merge style with functionality — redefining modern spatial design for living rooms, offices, and commercial spaces.',
    images: [
      'https://i.pinimg.com/originals/6a/0e/40/6a0e40f773041e86a013ae1fb0dc3783.jpg',
      'https://5.imimg.com/data5/ANDROID/Default/2023/2/RT/HU/AS/137897408/product-jpeg-500x500.jpg',
      'https://www.workpixie.com/wp-content/uploads/2021/12/partition-design.jpg',
    ],
  },
};

const GalleryDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const data = category ? galleryData[category] : null;

  if (!data)
    return (
      <div className="p-8 text-center text-gray-500">
        Gallery item not found.
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 min-h-screen">
      {/* Parallax Header */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center rounded-b-3xl shadow-xl"
        style={{ backgroundImage: `url(${data.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-b-3xl"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg mb-4 animate-fade-in-down">
            {data.title}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed opacity-90 animate-fade-in-up">
            {data.description.slice(0, 180)}...
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-10 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Gallery</span>
        </button>

        {/* Centered Description */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-md p-8 mb-12 text-center max-w-5xl mx-auto animate-fade-in">
          <p className="text-gray-700 text-lg leading-relaxed">{data.description}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.images.map((img: string, idx: number) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-500"
            >
              <img
                src={img}
                alt={`${data.title} ${idx + 1}`}
                className="w-full h-72 object-cover rounded-2xl group-hover:brightness-90 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center pb-6">
                <p className="text-white text-sm font-medium tracking-wide drop-shadow-md">
                  {data.title} #{idx + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <div className="mt-20 text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 italic">
            “Designed with passion, crafted with precision — Shivani Interiors”
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
