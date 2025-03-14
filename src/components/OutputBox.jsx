import React from 'react';

const OutputBox = ({ tipAmount, totalAmount, onReset }) => {
  return (
    <div className='bg-[hsl(183,100%,15%)] md:w-1/2 rounded-[20px] p-10 flex flex-col gap-4'>
      <div className='flex flex-col gap-4 flex-1'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <p className='text-white font-bold'>Tip Amount</p>
            <p className='text-[hsl(184,14%,56%)]'>/ person</p>
          </div>
          <p className='text-[hsl(172,67%,45%)] font-bold text-5xl'>${tipAmount.toFixed(2)}</p>
        </div>

        <div className='flex justify-between items-center h-[96px]'>
          <div className='flex flex-col'>
            <p className='text-white font-bold'>Total</p>
            <p className='text-[hsl(184,14%,56%)]'>/ person</p>
          </div>
          <p className='font-bold text-5xl text-[hsl(172,67%,45%)]'>${totalAmount.toFixed(2)}</p>
        </div>
      </div>

      <div className='mt-auto'>
        <button className='w-full h-[48px] rounded text-white font-bold bg-[hsl(172,67%,45%)] hover:bg-[hsl(185,58%,83%)] hover:text-[hsl(183,100%,15%)]' onClick={onReset}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default OutputBox;
