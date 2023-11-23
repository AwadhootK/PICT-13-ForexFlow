// components/BarGraph.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BarGraph = ({ data }) => {
  return (
    <div>
      <BarChart width={700} height={300} data={data}>
        <XAxis dataKey="label" tick={{ fill: "#fff" }} axisLine={{ stroke: "#fff" }} />
        <YAxis tick={{ fill: "#fff" }} axisLine={{ stroke: "#fff" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="rgb(102,195,172)" barGap={0.8} />
      </BarChart>
    </div>
  );
};

export default BarGraph;
