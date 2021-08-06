import React from "react";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

export const Chart = ({ data }) => {
  console.log(data);
  const LineChart = data.length ? (
    <Line
      data={{
        labels: data.map(({ date }) => date),
        datasets: [
          {
            labels: data.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            labels: data.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5) ",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <h1>{LineChart}</h1>
    </div>
  );
};

export default Chart;
