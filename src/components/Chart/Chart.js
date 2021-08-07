import React from "react";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

export const Chart = ({
  dailydata,
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  const LineChart = dailydata.length ? (
    <Line
      data={{
        labels: dailydata.map((x) => x.date),
        datasets: [
          {
            data: dailydata.map((x) => x.confirmed),
            label: "Infected",
            borderColor: "rgba(241, 144, 16, 0.5)",
            fill: true,
          },
          {
            data: dailydata.map((x) => x.deaths),
            label: "Deaths",
            borderColor: "rgba(240, 19, 74, 0.8)",
            backgroundColor: "rgba(240, 19, 74, 0.5) ",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  console.log(country);
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(241, 144, 16, 0.5)",
              "rgba(135, 36, 192, 0.5)",
              "rgba(240, 19, 74, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : LineChart}</div>
  );
};

export default Chart;
