import { Radar } from "react-chartjs-2";
import { useState } from "react";
import "./App.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
function App() {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  const data = {
    labels: [
      "Profit",
      "Skiil-up potential",
      "Expertise",
      "Social benefit",
      "Relationship",
      "Lead Potential",
    ],
    datasets: [
      {
        label: "Place Name of Project here",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="App">
      <h1>Polar Chart</h1>
      <Radar
        // options={...}
        data={data}
        // {...props}
      />
    </div>
  );
}

export default App;
