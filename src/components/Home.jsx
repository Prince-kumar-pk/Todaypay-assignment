import React, { useContext, useEffect, useState } from 'react';
import './Style.css';
import Input from './Input';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Context } from './ContextApi';
import Input2 from './Input2';
import Details from './Details';

const Home = () => {
  const { res, setCurrency, setConvertCurrency, currency, convertCurrency, setAmount, amount, isDark } = useContext(Context);
  console.log(res);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`absolute top-0 border-0 border-red-700 mobiles:w-full mobilem:w-full tablet:w-full laptop:w-full desktop:w-full h-auto ${isDark ? 'text-white' : 'text-black'} ${isDark ? 'bg-slate-600' : 'bg-white'}`}>
      <section className='background mobilel:w-full h-[70vh] border-0 border-red-700'>
        <div className='h-1/3 border-0 border-red-700 flex flex-col justify-end'>
          <h1 className='border-0 border-black mobiles:w-full mobilel:ml-4 tablet:ml-40 mobiles:text-xl mobilel:text-xl'>The Real Time currency Conversion</h1>
          <h1 className='border-0 border-black mobiles:ml-4 mobilel:ml-40 text-sm'>Today: {currentTime.toLocaleDateString()} | Time: {currentTime.toLocaleTimeString()} </h1>
        </div>
        <div className='h-2/3 border-0 border-green-700 flex flex-col justify-center align-middle justify-items-center'>
          <div className={`w-[70%] ${isDark ? 'text-black' : 'text-black'} bg-white border-0 border-black shadow-lg mt-4 ml-auto mr-auto h-24 flex items-center justify-around flex-wrap rounded-lg`}>
            <Input text="false" setAmount={setAmount} amount={amount} currency={currency} setCurrency={setCurrency} />

            <ArrowForwardIcon />

            <Input2 isDisabled="true" conversiondata={res * amount} convertCurrency={convertCurrency} setConvertCurrency={setConvertCurrency} />
          </div>
        </div>
      </section>

      <section>
        <Details />
      </section>
    </div>
  );
};

export default Home;
