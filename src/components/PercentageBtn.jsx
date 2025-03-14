import React from 'react';

const PercentageBtn = ({ value, onSelect, isSelected }) => {
  return (
    <button className={`w-full h-12 rounded flex justify-center items-center text-2xl font-bold transition-all 
      ${isSelected ? 'bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)]': 'bg-[hsl(183,100%,15%)] text-white hover:bg-[hsl(185,58%,83%)] hover:text-[hsl(183,100%,15%)]' }`}
      onClick={() => onSelect(value)}
      >{value}% </button>
  );
}

export default PercentageBtn;
