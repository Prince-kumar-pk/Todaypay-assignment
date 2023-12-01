import React, { useContext } from 'react';
import { Context } from './ContextApi';

const Details = () => {
    const {isDark} = useContext(Context);
  return (
    <div className='flex flex-row flex-wrap border-0 border-red-600 h-auto p-3 justify-center gap-52 m-10'>
      <div className={`p-8 rounded-lg  text-center ${isDark?'bg-slate-600':'bg-white'} ${isDark?'text-white':'text-black'}`}>
        <img
          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/CENTRE-01.svg"
          alt="Image1"
          className="w-[150px] rounded-md mb-4 h-4/5"
        />
        <div  className="text-2xl font-bold "> Real Time Data </div>
      </div>
      <div className={`p-8 rounded-lg  text-center ${isDark?'bg-slate-600':'bg-white'}`}>
        <img
          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/AWARDS-01.svg"
          alt="Image2"
          className="w-[150px] rounded-md mb-4 h-4/5"
        />
        <div  className="text-2xl font-bold ">Accurate </div>
      </div>
      <div className={`p-8 rounded-lg  text-center ${isDark?'bg-slate-600':'bg-white'}`}>
        <img
          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/country-01.svg"
          alt="Image3"
          className="w-[150px] rounded-md mb-4 h-4/5 text-center "
        />
        <div  className={`text-2xl font-bold  `}> 10+ Countries </div>
      </div>
    </div>
  );
};

export default Details;
