import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Filter, Search, Heart, Download, Share2, Eye, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or masonry
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All', count: 24 },
    { id: 'decorations', name: 'Decorations', count: 8 },
    { id: 'imishanana', name: 'Imishanana', count: 6 },
    { id: 'gowns', name: 'Bridal Gowns', count: 5 },
    { id: 'suits', name: 'Formal Suits', count: 3 },
    { id: 'ceremonies', name: 'Ceremonies', count: 2 }
  ];

  const galleryImages = [
    // Decorations
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=compress&cs=tinysrgb&w=800',
      title: 'Elegant Garden Wedding Setup',
      category: 'decorations',
      description: 'Beautiful outdoor wedding decoration with floral arrangements and ambient lighting',
      location: 'Kigali Convention Centre',
      date: '2024-03-15',
      client: 'Sarah & John',
      tags: ['outdoor', 'garden', 'elegant', 'flowers']
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=compress&cs=tinysrgb&w=800',
      title: 'Grand Reception Hall',
      category: 'decorations',
      description: 'Luxurious indoor reception with crystal chandeliers and golden accents',
      location: 'Serena Hotel Kigali',
      date: '2024-02-20',
      client: 'Marie & Pierre',
      tags: ['indoor', 'luxury', 'crystal', 'gold']
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=compress&cs=tinysrgb&w=800',
      title: 'Romantic Table Setting',
      category: 'decorations',
      description: 'Intimate table decoration with candles and fresh flowers',
      location: 'Lake Kivu Resort',
      date: '2024-01-10',
      client: 'Grace & David',
      tags: ['romantic', 'candles', 'intimate', 'lakeside']
    },
    
    // Imishanana
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac4?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Rwandan Wedding Attire',
      category: 'imishanana',
      description: 'Authentic Imishanana with traditional patterns and colors',
      location: 'Cultural Heritage Center',
      date: '2024-02-14',
      client: 'Uwimana & Nkusi',
      tags: ['traditional', 'authentic', 'cultural', 'heritage']
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1583391733956-6c78276477e1?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Imishanana Design',
      category: 'imishanana',
      description: 'Contemporary take on traditional Rwandan wedding wear',
      location: 'Nyanza Palace',
      date: '2024-03-01',
      client: 'Aline & Eric',
      tags: ['modern', 'contemporary', 'stylish', 'cultural']
    },
    
    // Bridal Gowns
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1594736797933-d0bd8feaef8c?auto=compress&cs=tinysrgb&w=800',
      title: 'Princess Ball Gown',
      category: 'gowns',
      description: 'Stunning princess-style gown with cathedral train',
      location: 'Kigali Heights',
      date: '2024-02-28',
      client: 'Claudine',
      tags: ['princess', 'ballgown', 'cathedral', 'elegant']
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=compress&cs=tinysrgb&w=800',
      title: 'Vintage Lace Gown',
      category: 'gowns',
      description: 'Classic vintage-inspired gown with intricate lace details',
      location: 'Belgian Club',
      date: '2024-01-25',
      client: 'Anita',
      tags: ['vintage', 'lace', 'classic', 'intricate']
    },
    
    // Formal Suits
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=800',
      title: 'Classic Black Tuxedo',
      category: 'suits',
      description: 'Elegant black tuxedo with bow tie and cufflinks',
      location: 'Radisson Blu',
      date: '2024-03-10',
      client: 'Emmanuel',
      tags: ['classic', 'black', 'tuxedo', 'formal']
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=compress&cs=tinysrgb&w=800',
      title: 'Navy Blue Suit',
      category: 'suits',
      description: 'Modern navy blue suit perfect for contemporary weddings',
      location: 'Kigali Marriott',
      date: '2024-02-05',
      client: 'Fabrice',
      tags: ['navy', 'modern', 'contemporary', 'stylish']
    },
    
    // Ceremonies
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Ceremony',
      category: 'ceremonies',
      description: 'Beautiful traditional Rwandan wedding ceremony',
      location: 'Kimisagara Cultural Center',
      date: '2024-01-20',
      client: 'Jeanne & Patrick',
      tags: ['ceremony', 'traditional', 'cultural', 'celebration']
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=compress&cs=tinysrgb&w=800',
      title: 'Church Wedding',
      category: 'ceremonies',
      description: 'Elegant church wedding ceremony with floral decorations',
      location: 'Regina Pacis Church',
      date: '2024-03-05',
      client: 'Immaculee & Jean',
      tags: ['church', 'religious', 'flowers', 'sacred']
    },

    // Additional images for better showcase
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=compress&cs=tinysrgb&w=800',
      title: 'Floral Archway',
      category: 'decorations',
      description: 'Stunning floral archway for outdoor ceremonies',
      location: 'Nyungwe Forest Lodge',
      date: '2024-02-12',
      client: 'Esperance & Claude',
      tags: ['archway', 'flowers', 'outdoor', 'nature']
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === 'all' || image.category === activeCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  const toggleFavorite = (imageId) => {
    setFavorites(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const downloadImage = (imageUrl, fileName) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    link.click();
  };

  const shareImage = (image) => {
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: image.description,
        url: image.src,
      });
    } else {
      navigator.clipboard.writeText(image.src);
      alert('Image URL copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading our beautiful gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Wedding
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 font-serif italic">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our portfolio of beautiful weddings and see how we've helped couples 
            create unforgettable memories across Rwanda.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{galleryImages.length}+</div>
              <div className="text-sm text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">50+</div>
              <div className="text-sm text-gray-600">Events</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-12">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by title, tags, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full w-full lg:w-80 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    viewMode === 'masonry' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Masonry
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
                <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-orange-600">{filteredImages.length}</span> 
            {searchTerm && ` results for "${searchTerm}"`}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
        }`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white ${
                viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
              }`}
              onClick={() => openLightbox(image)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    viewMode === 'grid' ? 'h-64' : 'h-auto'
                  }`}
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(image.id);
                    }}
                    className="bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                  >
                    <Heart 
                      size={18} 
                      className={favorites.includes(image.id) ? 'text-red-500 fill-current' : 'text-gray-600'} 
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareImage(image);
                    }}
                    className="bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                  >
                    <Share2 size={18} className="text-gray-600" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {categories.find(cat => cat.id === image.category)?.name}
                  </span>
                </div>

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-white transition-colors">
                    <Eye size={20} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{image.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                
                {/* Meta Info */}
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center">
                    <MapPin size={12} className="mr-1" />
                    <span>{image.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>{new Date(image.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Client: {image.client}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {image.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  {image.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{image.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Load More Images
          </button>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Beautiful Story?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together to make your special day unforgettable. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300">
                Book Consultation
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.category}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleFavorite(selectedImage.id)}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                  >
                    <Heart 
                      size={24} 
                      className={favorites.includes(selectedImage.id) ? 'text-red-500 fill-current' : 'text-white'} 
                    />
                  </button>
                  <button
                    onClick={() => downloadImage(selectedImage.src, selectedImage.title)}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                  >
                    <Download size={24} className="text-white" />
                  </button>
                  <button
                    onClick={() => shareImage(selectedImage)}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                  >
                    <Share2 size={24} className="text-white" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                  >
                    <X size={24} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-4"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-4"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 text-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">{selectedImage.title}</h4>
                  <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-3" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3" />
                    <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-3">Client:</span>
                    <span>{selectedImage.client}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;