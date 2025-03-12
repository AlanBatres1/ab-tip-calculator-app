import React from 'react'
import PercentageBtn from './PercentageBtn'

const InputSection = () => {
  return (
    <div className='w-full md:w-1/2 h-full rounded-[20px]'>
    {/* Bill Section */}
    <p className='font-bold text-[hsl(183,100%,15%)]'>Bill</p>
    <div className='bg-[rgba(197,228,231,0.3)] cursor-pointer hover:border-2 border-[hsl(172,67%,45%)] mt-4 w-full h-[50px] rounded-[5px] flex items-center justify-between px-2'>
      <img src="/images/icon-dollar.svg" alt="" />
      <input type="number" min={0} placeholder='0' className='text-[hsl(184,14%,56%)] text-[24px] mr-2 bg-transparent border-none outline-none w-full text-right'/>
    </div>
  
    {/* Tip Section */}
    <p className='mt-10 font-bold text-[hsl(183,100%,15%)]'>Select Tip %</p>
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4'>
      <PercentageBtn value={5} color={"hsl(183,100%,15%)"} hover={"hsl(185,58%,83%)"} textColor={"white"} hoverText={"hsl(183,100%,15%)"} percentage={"%"}/>
      <PercentageBtn value={10} color={"hsl(183,100%,15%)"} hover={"hsl(185,58%,83%)"} textColor={"white"} hoverText={"hsl(183,100%,15%)"} percentage={"%"}/>
      <PercentageBtn value={15} color={"hsl(183,100%,15%)"} hover={"hsl(185,58%,83%)"} textColor={"white"} hoverText={"hsl(183,100%,15%)"} percentage={"%"}/>
      <PercentageBtn value={25} color={"hsl(183,100%,15%)"} hover={"hsl(185,58%,83%)"} textColor={"white"} hoverText={"hsl(183,100%,15%)"} percentage={"%"}/>
      <PercentageBtn value={50} color={"hsl(183,100%,15%)"} hover={"hsl(185,58%,83%)"} textColor={"white"} hoverText={"hsl(183,100%,15%)"} percentage={"%"}/>
      <PercentageBtn value={"Custom"} color={"rgba(197,228,231,0.3)"} hover={"rgba(197,228,231,0.3)"} textColor={"hsl(183,100%,15%)"} hoverText={"hsl(183,100%,15%)"} percentage={""}/>
    </div>
  
    {/* Number of People Section */}
    <p className='mt-10 font-bold text-[hsl(183,100%,15%)]'>Number of People</p>
    <div className='bg-[rgba(197,228,231,0.3)] cursor-pointer hover:border-2 border-[hsl(172,67%,45%)] mt-4 w-full h-[50px] rounded-[5px] flex items-center justify-between px-2'>
      <img src="/images/icon-person.svg" alt="" />
      <input type="number" min={0} placeholder='0' className='text-[hsl(184,14%,56%)] text-[24px] mr-2 bg-transparent border-none outline-none w-full text-right'/>
    </div>
  </div>
  
  )
}

export default InputSection