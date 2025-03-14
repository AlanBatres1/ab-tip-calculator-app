import { useState } from 'react';
import './App.css';
import InputSection from './components/InputSection';
import OutputBox from './components/outputBox';

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(1);

  const tipAmount = bill && people ? (bill * (tipPercentage / 100)) / people : 0;
  const totalAmount = bill && people ? (bill / people) + tipAmount : 0;

  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(1);
  };

  return (
    <div className='bg-[hsl(185,41%,84%)] min-h-screen font-[SpaceMono] flex flex-col justify-center items-center md:p-4 font-bold'>
      <div className='text-center text-[24px] relative sm:top-[25px] md:top-[75px] font-bold text-[hsl(183,100%,15%)]'>
        <p>S P L I</p>
        <p>T T E R</p>
      </div>
      <div className='flex justify-center items-center flex-grow w-full'>
        <div className='bg-[hsl(189,41%,97%)] w-full max-w-[950px] h-auto rounded-[20px] p-[30px] flex flex-col md:flex-row justify-between gap-6'>
          <InputSection bill={bill} setBill={setBill} setTipPercentage={setTipPercentage} people={people} setPeople={setPeople} />
          <OutputBox tipAmount={tipAmount} totalAmount={totalAmount} onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}

export default App;
