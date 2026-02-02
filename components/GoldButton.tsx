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
      className="group w-full max-w-xs h-14 rounded-full transition-all duration-200 active:scale-95 touch-manipulation bg-[#D4AF37] hover:bg-[#C6A230] text-[#051025] shadow-md flex items-center px-6 relative overflow-hidden"
    >
      {/* Icon Container - Flat styling */}
      <div className="flex-shrink-0 mr-4 text-[#051025]">
         <div className="p-1">
          {icon}
         </div>
      </div>

      {/* Text - High contrast dark blue on gold */}
      <span className="flex-grow text-center font-bold text-lg tracking-wide">
        {label}
      </span>
    </button>
  );
};

export default GoldButton;