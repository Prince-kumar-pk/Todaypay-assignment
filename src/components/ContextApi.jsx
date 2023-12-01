import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import App from "../App";
export const Context = createContext();

export const AppContext = ({ children }) => {
    const [currency,setCurrency] = useState("INR");
    const [convertCurrency,setConvertCurrency] = useState("USD");
    const [isDark,setIsDark] = useState(false);
    const key = "216d82b9e72755b94aaa7e87e792f7e9"
    const[amount,setAmount] = useState(1);
    // const[unit,setUnit] = useState('INRUSD');
    const [res,setRes] = useState([])

  const getData = async () => {
    const result = await axios.get(
      `http://apilayer.net/api/live?access_key=${key}&currencies=${convertCurrency}&source=${currency}&%20format=1`
    );
    
    const unit =`${currency}${convertCurrency}`
    console.log(result.data?.quotes[unit]);
    setRes(result.data?.quotes[unit]);
  };
  useEffect(() => {
    // Update the document title using the browser API      
    getData();
  }, [currency,convertCurrency]);

  return <Context.Provider value={{res,setCurrency,setConvertCurrency,currency,convertCurrency,setAmount,amount,setIsDark,isDark}} > <App/> </Context.Provider>;
};