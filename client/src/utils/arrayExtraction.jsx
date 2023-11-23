const DataList = ({ data }) => {
    
    // Extracting lists of dates, exchange rates, and accuracy
    const dates = data.map(item => item.date);
    const exchangeRates = data.map(item => item.exchangeRate);
    const accuracy = data.map(item => item.accurate);
  
    // Returning the extracted data
    return (
      <div>
        <h2>Dates:</h2>
        <ul>{dates.map(date => <li key={date}>{date}</li>)}</ul>
  
        <h2>Exchange Rates:</h2>
        <ul>{exchangeRates.map(rate => <li key={rate}>{rate}</li>)}</ul>
  
        <h2>Accuracy:</h2>
        <ul>{accuracy.map(acc => <li key={acc}>{acc.toString()}</li>)}</ul>
      </div>
    );
  };