import React from 'react';

const CurrencyRow = ({currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount}) => {
    return (
        <div>
            <input type="number" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </div>
    );
};

export default CurrencyRow;