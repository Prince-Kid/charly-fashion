import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Award, Users, Calendar, MapPin, Crown, Globe, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const rwandanWeddingImages = [
    "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac4?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' }
  ];

  const translations = {
    en: {
      title: "Traditional Wedding",
      tagline: "Traditional Rwandan Wedding Excellence",
      description: "From stunning Imishanana to elegant decorations, we create magical moments that celebrate Rwandan culture and your love story.",
      exploreServices: "Explore Services",
      viewGallery: "View Gallery",
      stats: {
        couples: "Happy Couples",
        experience: "Years Experience",
        satisfaction: "Satisfaction"
      },
      services: {
        imishanana: {
          title: "Imishanana Collection",
          description: "Authentic traditional Rwandan wedding attire",
          price: ""
        },
        decorations: {
          title: "Wedding Decorations",
          description: "Transform your venue into a cultural paradise",
          price: "Custom packages available"
        },
        planning: {
          title: "Complete Planning",
          description: "Full service Rwandan wedding coordination",
          price: "From ceremony to reception"
        }
      }
    },
    rw: {
      title: "Ubukode",
      subtitle: "bw'Urukundo",
      tagline: "Ubukode bwa Kinyarwanda",
      description: "Kuva kuri Imishanana nziza kugeza ku bukode bwiza, turema ibihe byubwoba byizihiza umuco w'u Rwanda n'inkuru y'urukundo rwawe.",
      exploreServices: "Reba Serivisi",
      viewGallery: "Amafoto",
      stats: {
        couples: "Bashakanye",
        experience: "Imyaka",
        satisfaction: "Kwishimira"
      },
      services: {
        imishanana: {
          title: "Imishanana Collection",
          description: "Imyenda gakondo y'ubukode bw'Abanyarwanda",
          price: "Guhera kuri 200,000 RWF"
        },
        decorations: {
          title: "Ubukode bw'imbuga",
          description: "Hindura aho uzakorerera ubukode bwawe",
          price: "Packages zitandukanye"
        },
        planning: {
          title: "Gutegura ubukode",
          description: "Serivisi zose z'ubukode bw'Abanyarwanda",
          price: "Kuva mu muco kugeza mu birori"
        }
      }
    },
    fr: {
      title: "Mariage",
      subtitle: "Traditionnel",
      tagline: "Excellence du Mariage Traditionnel Rwandais",
      description: "Des magnifiques Imishanana aux décorations élégantes, nous créons des moments magiques qui célèbrent la culture rwandaise et votre histoire d'amour.",
      exploreServices: "Explorer les Services",
      viewGallery: "Voir la Galerie",
      stats: {
        couples: "Couples Heureux",
        experience: "Années d'Expérience",
        satisfaction: "Satisfaction"
      },
      services: {
        imishanana: {
          title: "Collection Imishanana",
          description: "Tenues traditionnelles authentiques du mariage rwandais",
          price: "À partir de 200,000 RWF"
        },
        decorations: {
          title: "Décorations de Mariage",
          description: "Transformez votre lieu en paradis culturel",
          price: "Forfaits personnalisés disponibles"
        },
        planning: {
          title: "Planification Complète",
          description: "Service complet de coordination de mariage rwandais",
          price: "De la cérémonie à la réception"
        }
      }
    },
    sw: {
      title: "Harusi ya",
      subtitle: "Kitamaduni",
      tagline: "Ubora wa Harusi ya Kitamaduni ya Rwanda",
      description: "Kutoka kwa Imishanana za kupendeza hadi mapambo ya kifahari, tunaunda nyakati za uchawi zinazosherehekea utamaduni wa Rwanda na hadithi yenu ya mapenzi.",
      exploreServices: "Chunguza Huduma",
      viewGallery: "Ona Picha",
      stats: {
        couples: "Wanandoa Wenye Furaha",
        experience: "Miaka ya Uzoefu",
        satisfaction: "Kuridhika"
      },
      services: {
        imishanana: {
          title: "Mkusanyiko wa Imishanana",
          description: "Mavazi halisi ya kitamaduni ya harusi ya Rwanda",
          price: "Kuanzia RWF 200,000"
        },
        decorations: {
          title: "Mapambo ya Harusi",
          description: "Badilisha mahali pako kuwa peponi ya kitamaduni",
          price: "Vifurushi maalum vinapatikana"
        },
        planning: {
          title: "Mipango Kamili",
          description: "Huduma kamili ya uratibu wa harusi ya Rwanda",
          price: "Kutoka sherehe hadi karamu"
        }
      }
    }
  };

  const content = translations[currentLanguage];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % rwandanWeddingImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Slideshow */}
      <div className="absolute inset-0 z-0">
        {rwandanWeddingImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Rwandan Wedding Ceremony ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-orange-900/30 to-black/40"></div>
        
        {/* Traditional Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="absolute top-24 right-6 z-20">
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-white/30 transition-all duration-300"
          >
            <Globe size={20} />
            <span className="text-sm font-medium">
              {languages.find(lang => lang.code === currentLanguage)?.flag} 
              {languages.find(lang => lang.code === currentLanguage)?.name}
            </span>
            <ChevronDown size={16} className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isLanguageOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden min-w-[180px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLanguage(lang.code);
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors flex items-center space-x-3 ${
                    currentLanguage === lang.code ? 'bg-orange-100 text-orange-600' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 font-serif italic block">
                  {content.title}
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-white">
                  {content.subtitle}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-orange-200 font-medium mb-6">
                {content.tagline}
              </p>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 leading-relaxed max-w-2xl">
              {content.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                {content.exploreServices}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-orange-300 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-300 hover:text-gray-900 transition-all duration-300">
                {content.viewGallery}
              </button>
            </div>

            {/* Enhanced Stats - Better Aligned */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-yellow-400/20 p-3 rounded-full">
                    <Star className="text-yellow-400" size={28} />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">{content.stats.couples}</div>
              </div>
              <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-orange-400/20 p-3 rounded-full">
                    <Award className="text-orange-400" size={28} />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">{content.stats.experience}</div>
              </div>
              <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-red-400/20 p-3 rounded-full">
                    <Crown className="text-red-400" size={28} />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">{content.stats.satisfaction}</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Enhanced Service Showcase */}
          <div className="hidden lg:block relative">
            <div className="space-y-8">
              {/* Main Service Card */}
              <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl mr-4">
                    <Crown className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{content.services.imishanana.title}</h3>
                    <p className="text-orange-600 font-semibold">{content.services.imishanana.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{content.services.imishanana.description}</p>
                <div className="mt-4 flex items-center text-sm text-orange-600">
                  <Star size={16} className="mr-1" />
                  <span className="font-medium">Premium Traditional Attire</span>
                </div>
              </div>
              
              {/* Secondary Service Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    <h4 className="text-lg font-bold text-gray-800">Decorations</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{content.services.decorations.description}</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Award className="text-red-500 mr-2" size={20} />
                    <h4 className="text-lg font-bold text-gray-800">Full Planning</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{content.services.planning.description}</p>
                </div>
              </div>

              {/* Testimonial Preview */}
              {/* <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/30">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">★</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Client Testimonial</h4>
                    <p className="text-orange-200 text-sm">Marie & John - 2024</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm italic">"Charly Fashion made our traditional wedding absolutely magical. The Imishanana was perfect!"</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Service Preview */}
      <div className="lg:hidden relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Our Signature Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <Crown className="text-orange-500 mx-auto mb-2" size={24} />
              <h4 className="font-semibold text-gray-800">Imishanana</h4>
              <p className="text-sm text-gray-600">Traditional Attire</p>
            </div>
            <div>
              <Star className="text-yellow-500 mx-auto mb-2" size={24} />
              <h4 className="font-semibold text-gray-800">Decorations</h4>
              <p className="text-sm text-gray-600">Cultural Paradise</p>
            </div>
            <div>
              <Award className="text-red-500 mx-auto mb-2" size={24} />
              <h4 className="font-semibold text-gray-800">Full Planning</h4>
              <p className="text-sm text-gray-600">Complete Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {rwandanWeddingImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-orange-400 to-red-400 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Floating elements */}
      <div className="absolute top-1/4 right-10 text-orange-300/30 animate-pulse hidden lg:block">
        <Crown size={48} />
      </div>
      <div className="absolute bottom-1/3 left-10 text-yellow-300/20 animate-pulse hidden lg:block">
        <Star size={36} />
      </div>
      <div className="absolute top-1/2 right-1/4 text-red-300/20 animate-bounce hidden lg:block">
        <Award size={32} />
      </div>
    </section>
  );
};

export default Hero;