import React, {useEffect,useState} from 'react';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';
import './App.css';

const API = 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json';

function App() {
  const [currencyOptions, setCurrency] = useState([])
  console.log(currencyOptions)
  useEffect(()=>{
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const currencyElements = data[0].rates.filter((rate) => rate.code === "USD" || rate.code === "EUR" || rate.code === "CHF")
      setCurrency(currencyElements)
      console.log(setCurrency)
    })
    
  },[])
  return (
 <>
      <HeaderComponent/>
      <FormComponent 
      currencyOptions = {currencyOptions}/>
      <p className='converter__result js-result'></p>
 </>
  );
}

export default App;
