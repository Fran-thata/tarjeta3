import React from 'react';
import { Phone, Home, Star, Search, Linkedin, Instagram } from 'lucide-react';
import GoldButton from './components/GoldButton';

// Flat SVG Icons
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="28" 
    height="28" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const PropertyIcon = () => (
  <div className="relative">
    <Home size={28} strokeWidth={2.5} />
    <Search size={14} className="absolute -bottom-1 -right-1 stroke-[3px]" />
  </div>
);

const StarIcon = () => (
  <Star size={28} strokeWidth={2.5} />
);

const App: React.FC = () => {
  // Assets
  const bgImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop";
  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center font-sans bg-[#051025] text-white">
      
      {/* Background Layer: Image with flat dark overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-[#051025]/85" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center py-12 gap-8">
        
        {/* Profile Section - Flat Design */}
        <div className="flex flex-col items-center mt-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#D4AF37] mb-6 shadow-md">
             <img 
               src={profileImage} 
               alt="Álex Martínez" 
               className="w-full h-full object-cover"
             />
          </div>
          
          <h1 className="text-white text-3xl font-bold tracking-tight mb-1 text-center">
            Álex Martínez
          </h1>
          <p className="text-[#D4AF37] text-lg font-medium tracking-wide uppercase text-sm">
            Consultor Inmobiliario
          </p>
        </div>

        {/* Buttons Section */}
        <div className="w-full flex flex-col items-center gap-4">
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
        <div className="flex gap-8 mt-4 items-center justify-center">
          <a href="#" className="text-[#D4AF37] hover:text-white transition-colors">
            <Linkedin size={32} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-[#D4AF37] hover:text-white transition-colors">
            <Instagram size={32} strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default App;