// App.js
import React, { useState, useEffect } from "react";
import CurrencyChart from "./Components/CurrencyChart.js";
import ExchangeRateDisplay from "./Components/ExchangeDisplay.js"; // Import ExchangeRateDisplay
import CurrencySelector from "./Components/CurrencySelector";
import DurationSelector from "./Components/DurationSelector";
import BarGraph from "./Components/BarGraph.js";
import CountryList from "./Components/fetchCountryList.jsx";
import "./App.css";

import CurrencyConverter from "./Components/CurrencyConverter.jsx";

const durations = ["Weekly", "Monthly", "Quarterly", "Yearly"];
const fetchDetailsData = async (
  startCountry,
  destinationCountry,
  startDate,
  endDate
) => {
  try {
    const apiUrl = "http://localhost:3000/getDetails";

    const params = {
      sourceCountry: startCountry,
      destinationCountry: destinationCountry,
      startDate: startDate,
      endDate: endDate,
    };

    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${apiUrl}?${queryString}`;

    // Make a GET request using Fetch API
    fetch(fullUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        var xAxis = data.data.map((item) => item.date);
        var yAxis = data.data.map((item) => item.exchangeRate);
        const axes = { xAxis, yAxis };
        return axes;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  } catch (error) {
    console.error("Error fetching details data:", error.message);
    throw error;
  }
};

const generateRandomData = (length) => {
  return Array.from({ length }, (_, index) => ({
    label: `2023-11-${index + 1}`,
    value: Math.random() * 10 + 80,
  }));
};

const getChartDataForDuration = (duration) => {
  // Function to generate data based on selected duration
  switch (duration) {
    case "Weekly":
      return generateRandomData(7);
    case "Monthly":
      return generateRandomData(30);
    case "Quarterly":
      return generateRandomData(90);
    case "Yearly":
      return generateRandomData(365);
    default:
      return generateRandomData(7);
  }
};
const DataList = ({ data }) => {
  const dates = data.map((item) => item.date);
  const exchangeRates = data.map((item) => item.exchangeRate);
  const accuracy = data.map((item) => item.accurate);

  console.log(dates);
  console.log(exchangeRates);

  return (
    <div>
      <h2>Dates:</h2>
      <ul>
        {dates.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>

      <h2>Exchange Rates:</h2>
      <ul>
        {exchangeRates.map((rate) => (
          <li key={rate}>{rate}</li>
        ))}
      </ul>

      <h2>Accuracy:</h2>
      <ul>
        {accuracy.map((acc) => (
          <li key={acc}>{acc.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [xAxis, setXAxis] = useState([]);
  const [yAxis, setYAxis] = useState([]);
  const currencies = CountryList();
  const [chartData, setChartData] = useState({
    labels: [],
    data: [],
  });
  const [firstCurrency, setFirstCurrency] = useState("U.S. dollar   (USD)");
  const [secondCurrency, setSecondCurrency] = useState("Indian rupee   (INR)");
  const [selectedDuration, setSelectedDuration] = useState("Weekly");

  // useEffect(() => {

  //   // DataList(response)
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = getChartDataForDuration(selectedDuration);
      const filteredData = rawData.filter(
        (dataPoint) =>
          (!startDate || dataPoint.label >= startDate) &&
          (!endDate || dataPoint.label <= endDate)
      );

      const labels = filteredData.map((dataPoint) => dataPoint.label);
      const data = filteredData;

      setChartData({ labels, data });
    };

    fetchData();

    //   const fetchDetData = async () => {
    //     try {
    //       const response = await fetch("http://localhost:3000/getCountryList");
    //       const respData = await response.json();
    //       // Assuming respData.data is the array of currency strings
    //       currencies = respData.data
    //         .map((currencyString) => {
    //           // Extract the currency code inside the brackets
    //           const matches = currencyString.match(/\(([^)]+)\)/);

    //           // If there is a match, return the captured group (currency code)
    //           return matches ? matches[1] : null;
    //         })
    //         .filter(Boolean); // Filter out any null values

    //       const { x, y } = await fetchDetailsData(
    //         "",
    //         "Bahrain dinar   (BHD)",
    //         "2014-01-01",
    //         "2014-01-05"
    //       );
    //       setXAxis(xAxis);
    //       setYAxis(yAxis);
    //       console.log(xAxis);
    //       console.log(yAxis);
    //     } catch (error) {
    //       console.error("Error fetching details data:", error.message);
    //       // Handle errors if needed
    //     }
    //   };

    //   fetchDetData();
  }, [selectedDuration, startDate, endDate]); // Empty dependency array to trigger fetching data only on mount

  return (
    <div className="dashboard">
      <div className="first_grid">
        <CurrencyConverter></CurrencyConverter>
      </div>
      <div className="second_grid">
        <div className="line_graph">
          <h1>Exchange Rate Dashboard</h1>
          <div className="currencies">
            <div className="currencies1">
              <CurrencySelector
                currencies={currencies}
                onSelectCurrency={setFirstCurrency}
                selectedCurrency={firstCurrency}
                selectorNumber={1}
              />
            </div>
            <div className="currencies1">
              <CurrencySelector
                currencies={currencies}
                onSelectCurrency={setSecondCurrency}
                selectedCurrency={secondCurrency}
                selectorNumber={2}
              />
            </div>
            <div className="currencies1">
              <DurationSelector
                durations={durations}
                onSelectDuration={setSelectedDuration}
                selectedDuration={selectedDuration}
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
              />
            </div>
          </div>
          <div className="currencies1">
            <button
              onClick={async () => {
                const { xAxis1, yAxis1 } = await fetchDetailsData(
                  firstCurrency,
                  secondCurrency,
                  startDate,
                  endDate
                );
                setXAxis(xAxis1);
                console.log(xAxis1);
                setYAxis(yAxis1);
                console.log(yAxis1);
              }}
            >
              Get Details
            </button>
          </div>
          <p>Exchange Rate Chart Placeholder</p>
          <CurrencyChart
            labels={xAxis}
            data={yAxis}
            currencyName={secondCurrency}
            startDate={startDate}
            endDate={endDate}
            selectedDuration={selectedDuration}
          />
          <ExchangeRateDisplay
            baseCurrency={firstCurrency}
            targetCurrency={secondCurrency}
          />
        </div>

        <div className="bar_graph">
          <BarGraph data={chartData.data} />
          <ExchangeRateDisplay
            baseCurrency={firstCurrency}
            targetCurrency={secondCurrency}
          />
        </div>
      </div>
      {/* <div className="third_grid">
        <CurrencyConverter></CurrencyConverter>
      </div> */}
    </div>
  );
};
export default App;
