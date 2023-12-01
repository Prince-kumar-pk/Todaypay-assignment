import React from 'react';
import currenciesData from "./Symbol";
const Input2 = ({isDisabled,conversiondata,setConvertCurrency,convertCurrency}) => {
    const currencyDetails = currenciesData.currencies[`${convertCurrency}`];
    console.log(currencyDetails.symbol)
    return (
        <div>
            <div>
                <div className={`relative mt-2 rounded-md shadow-sm border-0  border-red-600`}>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm"> {currencyDetails.symbol} </span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-4 pl-8 pr-20 text-red-600 font-bold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder= {conversiondata}
                        disabled={isDisabled}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                            Currency
                        </label>
                        <select
                            id="currency"
                            name="currency"
                            className={`h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm `} 

                            onChange={(e) => {
                                setConvertCurrency(e.target.value);
                              }}
                        >
                            <option>USD</option>
                            <option>INR</option>
                            <option>AED</option>
                            <option>GBP</option>
                            <option>CAD</option>
                            <option>SGD</option>
                            <option>EUR</option>
                            <option>JPY</option>
                            <option>PKR</option>
                            <option>ZAR</option>
                            <option>ALL</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input2;
