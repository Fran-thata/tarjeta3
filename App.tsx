import React from 'react';
import { Phone, Home, Star, Search, Linkedin, Instagram } from 'lucide-react';
import GoldButton from './components/GoldButton';

// SVG Icons customized to look more like the reference image
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="32" 
    height="32" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="transform scale-110"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const PropertyIcon = () => (
  <div className="relative">
    <Home size={32} strokeWidth={2} />
    <Search size={16} className="absolute -bottom-1 -right-1 stroke-[3px]" />
  </div>
);

const StarIcon = () => (
  <Star size={32} strokeWidth={2} fill="currentColor" fillOpacity={0.2} />
);

const App: React.FC = () => {
  // Image assets
  // Background: Luxury home at dusk
  const bgImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop";
  // Profile: Young professional man in suit (more similar to the reference)
  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center font-sans bg-[#051025]">
      
      {/* Background Layer 1: The Image (Top half only) */}
      <div 
        className="absolute top-0 left-0 right-0 h-[65%] z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Background Layer 2: Gradient Overlay to Blend into Dark Blue */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#051025]/30 via-[#051025] via-55% to-[#051025]" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center gap-8 h-full justify-center pb-8">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mt-10">
          <div className="relative mb-5">
            {/* Golden Ring Border */}
            <div className="absolute inset-0 rounded-full border-[3px] border-[#C69C3A] shadow-lg scale-105 opacity-80"></div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-[3px] border-[#D4AF37] shadow-2xl relative">
               <img 
                 src={profileImage} 
                 alt="Álex Martínez" 
                 className="w-full h-full object-cover"
               />
               {/* Subtle inner shadow on the image */}
               <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"></div>
            </div>
          </div>
          
          <h1 className="text-white text-3xl font-bold tracking-tight mb-2 drop-shadow-lg text-center">
            Álex Martínez
          </h1>
          <p className="text-[#D4AF37] text-lg font-medium tracking-wide drop-shadow-md opacity-90">
            Consultor inmobiliario
          </p>
        </div>

        {/* Buttons Section */}
        <div className="w-full flex flex-col items-center gap-5">
          <GoldButton 
            icon={<WhatsAppIcon />} 
            label="WhatsApp" 
          />
          
          <GoldButton 
            icon={<PropertyIcon />} 
            label="Ver propiedades" 
          />
          
          <GoldButton 
            icon={<StarIcon />} 
            label="Reseñas" 
          />
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-8 mt-2 items-center justify-center">
          <a href="#" className="text-[#D4AF37] hover:text-[#FFF5C3] transition-colors drop-shadow-md">
            <Linkedin size={40} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-[#D4AF37] hover:text-[#FFF5C3] transition-colors drop-shadow-md">
            <Instagram size={40} strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default App;