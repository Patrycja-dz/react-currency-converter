import React, {useState,useEffect} from 'react';

const API = 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json';
 function FormComponent() {
     const [currency,setCurrencies] = useState([])
     const [result,setResult] = useState(0)
    useEffect(() => {
        fetch(API)
          .then((response) => response.json())
         .then((data) => {
            let currencies = data[0].rates;
                const currencyElements = currencies.filter((rate) => rate.code === "USD" || rate.code === "EUR" || rate.code === "CHF");
                setCurrencies(currencyElements);
              })
              .catch(console.log);
          }, []);
          const calculateCurrency = (e) => {
              e.preventDefault()
             const {number,chosenCurrency} = e.target.elements
             const amountValue = number.value;
             const currencyValue = currency.find(
      (rate) => rate.code === chosenCurrency.value
    )?.mid;
    const calculatedTotal = (amountValue * currencyValue).toFixed(2);

    setResult(calculatedTotal);
          };
        
    return (
        <form className="converter__inputs js-form" onSubmit={calculateCurrency}>
        <div className="converter__input">
            <input type="number" name="number" step="0.01" id="js-number" className="converter__number js-input"
                placeholder="Wpisz kwotę w zł"/>
        </div>
        <div className="converter__input">
            <select id="js-select" className="converter__select js-currencies" name="chosenCurrency">
                 <option value="">Wybierz walutę</option>
                 <option value="EUR">EUR</option>
                 <option value="USD">USD</option>
                 <option value="CHF">CHF</option>
            </select>
        </div>
        <button className="js-button converter__button">Przelicz</button>
        <p className ="converter__result"><span>To:</span> {result} <span>zł</span></p>
    </form>    
    );
}

export default FormComponent;