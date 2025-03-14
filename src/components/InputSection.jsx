import React, { useState } from 'react';
import PercentageBtn from './PercentageBtn';

const InputSection = ({ bill, setBill, setTipPercentage, people, setPeople }) => {
  const [customTip, setCustomTip] = useState('');
  const [selectedTip, setSelectedTip] = useState(null);
  const [isZeroPeople, setIsZeroPeople] = useState(false);

  const handleCustomTipChange = (e) => {
    let value = e.target.value;
    setCustomTip(value);
    const tipValue = parseFloat(value);
    setTipPercentage(isNaN(tipValue) ? 0 : tipValue);
    setSelectedTip(null); 
  };

  const handleTipSelect = (value) => {
    setTipPercentage(value);
    setSelectedTip(value);
    setCustomTip('');
  };

  const handlePeopleChange = (e) => {
    let value = parseInt(e.target.value);

    if (isNaN(value) || value <= 0) {
      setIsZeroPeople(true);
      setPeople(0);
    } else {
      setIsZeroPeople(false);
      setPeople(value);
    }
  };

  return (
    <div className='w-full md:w-1/2 h-full rounded-[20px]'>

      <p className='font-bold text-[hsl(183,100%,15%)]'>Bill</p>
      <div className='bg-[rgba(197,228,231,0.3)] cursor-pointer hover:border-2 border-[hsl(172,67%,45%)] mt-4 w-full h-[50px] rounded-[5px] flex items-center justify-between px-2'>
        <img src="/images/icon-dollar.svg" alt="dollar icon" />
        <input type="number" min={0} value={bill} onChange={(e) => setBill(parseFloat(e.target.value) || 0)} placeholder='0' className='text-[24px] mr-2 bg-transparent border-none outline-none w-full text-right' />
      </div>

      <p className='mt-10 font-bold text-[hsl(183,100%,15%)]'>Select Tip %</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4'>
        {[5, 10, 15, 25, 50].map((value) => (
          <PercentageBtn key={value} value={value} onSelect={handleTipSelect} isSelected={selectedTip === value} />
        ))}
        <input type="number" min={0} value={customTip} onChange={handleCustomTipChange} placeholder="Custom" className='bg-[rgba(197,228,231,0.3)] cursor-pointer hover:border-2 border-[hsl(172,67%,45%)] w-full h-12 rounded flex justify-center items-center text-[24px] font-bold text-[hsl(183,100%,15%)] text-center outline-none' />
      </div>

      <div className='mt-10 flex justify-between items-center'>
        <p className='font-bold text-[hsl(183,100%,15%)]'>Number of People</p>
        {isZeroPeople && <p className="text-red-500 font-bold">Can't be zero</p>}
      </div>
      
      <div className={`bg-[rgba(197,228,231,0.3)] cursor-pointer mt-4 w-full h-[50px] rounded-[5px] flex items-center justify-between px-2 
        ${isZeroPeople ? 'border-2 border-red-500' : 'hover:border-2 border-[hsl(172,67%,45%)]'}`}>
        <img src="/images/icon-person.svg" alt="person icon" />
        <input type="number" min={1} value={people} onChange={handlePeopleChange} placeholder='0' className='text-[24px] mr-2 bg-transparent border-none outline-none w-full text-right' />
      </div>
    </div>
  );
}

export default InputSection;
