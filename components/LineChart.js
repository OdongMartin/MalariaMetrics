"use client";
import React from 'react'
import { Line } from "react-chartjs-2";
import { useState, useEffect } from 'react';


import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

  

const salesData = [
  { month: "January", sales: 800 },
  { month: "February", sales: 150 },
  { month: "March", sales: 200 },
  { month: "April", sales: 120 },
  { month: "May", sales: 180 },
  { month: "June", sales: 250 },
];

function LineChart() {
  //malaria data
  const [malariaDatum, setmalariaDatum] = useState([]);

  useEffect(() => {

    const malariaData = async () => {
      console.log('use effect called')
      const response = await fetch('api/malaria');
      const data = await response.json();

      setmalariaDatum(data);
    }

    malariaData();
  }, [])

  console.log(JSON.stringify(malariaDatum));


  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Malaria Cases",
        data: salesData.map((data) => data.sales),
        borderColor: "#cb0c9f",
        borderWidth: 1,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#f797e1");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,

    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Number of Cases",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            //style: "italic",
            family: "Arial",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 15,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Month",
          padding: {
            top: 10,
          },
          font: {
            size: 25,
            //style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div>
      <div
        className=' md:col-span-2 relative lg:h-[70vh] h-[50vh] m-4 w-auto p-4 border rounded-lg bg-white'
         style={{
           width: "850px",
           height: "400px",
        //   padding: "20px",
        //   cursor: "pointer",
         }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;