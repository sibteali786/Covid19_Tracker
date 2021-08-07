import React from "react";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

export const Chart = ({ data }) => {
  const LineChart = data.length ? (
    <Line
      data={{
        labels: data.map((x) => x.date),
        datasets: [
          {
            data: data.map((x) => x.confirmed),
            label: "Infected",
            borderColor: "rgba(241, 144, 16, 0.5)",
            fill: true,
          },
          {
            data: data.map((x) => x.deaths),
            label: "Deaths",
            borderColor: "rgba(240, 19, 74, 0.8)",
            backgroundColor: "rgba(240, 19, 74, 0.5) ",
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
