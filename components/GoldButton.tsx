import React from 'react';

interface GoldButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const GoldButton: React.FC<GoldButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative w-full max-w-xs h-16 rounded-full transition-transform active:scale-95 touch-manipulation"
    >
      {/* Outer Border/Rim Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FFF5C3] via-[#D4AF37] to-[#8a6e15] p-[3px] shadow-lg">
        {/* Inner Button Body */}
        <div className="h-full w-full rounded-full bg-gradient-to-b from-[#C69C3A] via-[#A67C26] to-[#755512] flex items-center px-6 relative overflow-hidden shadow-inner">
          
          {/* Shine effect overlay (top half) */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

          {/* Icon Container with embossed look */}
          <div className="flex-shrink-0 mr-4 text-[#4a3200] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
             <div className="p-1">
              {icon}
             </div>
          </div>

          {/* Text */}
          <span className="flex-grow text-center text-white font-bold text-lg drop-shadow-md pr-8 tracking-wide">
            {label}
          </span>
        </div>
      </div>
    </button>
  );
};

export default GoldButton;