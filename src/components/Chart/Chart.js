import React from "react";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

export const Chart = ({ data: { confirmed } }) => {
  if (!confirmed) {
    return "Loading.......";
  }

  

  return (
    <div>
      <h1>Charts</h1>
    </div>
  );
};

export default Chart;
