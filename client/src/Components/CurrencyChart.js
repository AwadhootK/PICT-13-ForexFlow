// CurrencyChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CurrencyChart = ({ data, currencyName }) => {
  return (
    <ResponsiveContainer width={700} height={212}>
      <LineChart data={data}>
        <XAxis dataKey="label" tick={{ fill: "#fff" }} />
        <YAxis tick={{ fill: "#fff" }} />
        <Tooltip
          formatter={(value) => [
            value,
            `Conversion Rate for 1 USD to ${currencyName}`,
          ]}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="rgb(102,195,172)"
          strokeWidth={2}
          dot={false} // Remove circles from the line chart
          isAnimationActive={false} // Disable animation
          name={`Conversion Rate for 1 USD to ${currencyName}`}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurrencyChart;
