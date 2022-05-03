import React from 'react';

 function FormComponent() {
    return (
        <form className="converter__inputs js-form">
        <div className="converter__input">
            <input type="number" name="number" step="0.01" id="js-number" className="converter__number js-input"
                placeholder="Wpisz kwotę w zł"/>
        </div>
        <div className="converter__input">
            <select name="select" id="js-select" className="converter__select js-currencies">
                <option value="">Wybierz walutę</option>
            </select>
        </div>
        <button className="js-button converter__button">Przelicz</button>
        <button className="js-reset converter__button">Resetuj</button>
    </form>    
    );
}

export default FormComponent;