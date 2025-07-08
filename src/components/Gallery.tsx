import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Elegant Garden Wedding',
      category: 'Decorations'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/169194/pexels-photo-169194.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Traditional Ceremony',
      category: 'Imishanana'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Bridal Portrait',
      category: 'Gowns'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1702306/pexels-photo-1702306.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Reception Setup',
      category: 'Decorations'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Groom Style',
      category: 'Suits'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cultural Wedding',
      category: 'Imishanana'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Formal Attire',
      category: 'Suits'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Traditional Elegance',
      category: 'Imishanana'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Wedding
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-500 font-serif italic">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of beautiful weddings and see how we've helped couples 
            create unforgettable memories across Rwanda.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${
                index % 7 === 0 || index % 7 === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  index % 7 === 0 || index % 7 === 3 ? 'h-96' : 'h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-sm text-gray-200">{image.category}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gradient-to-r from-pink-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to create your own beautiful wedding story?
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300">
            Start Planning Today
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;