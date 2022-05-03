import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';
import './App.css';
function App() {
  return (
 <>
      <HeaderComponent/>
      <FormComponent/>
      <p className='converter__result js-result'></p>
 </>
  );
}

export default App;
