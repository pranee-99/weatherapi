import React, { useState } from "react";
import Chart from "react-apexcharts";
import config from'../config'
//import './App.css'

function App() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      }
    },
    series1: [
      {
        name: "Temperature",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "Humidity",
        data: [89.4,34,21,43,54,65,75,50]
      },
      {
        name: "Rainfall",
        data: [12,45,76,34,98,86.6,34.5,67]
      }
    ],

    series2: [
      {
        name: "Precipitation",
        data: [0, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "WindSpeed",
        data: [2,3,11,15,28,43,25,74]
      },
      {
        name: "Air Quality",
        data: [12,45,76,34,98,86.6,34.5,67]
      }
    ]
  });

  return (
    <div className="chart-container">
      
      <Chart
    options={state.options}
    series={state.series1}
    type="line"
    width="500"
  />
       <Chart
              options={state.options}
              series={state.series2}
              type="bar"
              width="500"
            />
            
    </div>
  );
}

export default App;