import { Cards, Chart, CountryPicker } from "./components";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

export const fetchDailyData = async () => {
  try {
    const response = await fetch(`https://covid19.mathdro.id/api/daily`);
    const resData = await response.json();
    const modData = resData.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modData;
  } catch (error) {}
};

function App() {
  const [vals, setvals] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const apiResponse = await fetch(`https://covid19.mathdro.id/api`);

      const { confirmed, recovered, deaths, lastUpdate } =
        await apiResponse.json();
      const modifiedData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate,
      };
      setvals(modifiedData);
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Cards data={vals} />
        <Chart />
        <CountryPicker />
      </div>
    </div>
  );
}

export default App;

// https://covid19.mathdro.id/api
// Making .modules.css files to be able to use css by the js files of that folder only
// We can also use such import as for chart cards and countrypicker here but then need to make index.js in the folder as like components/index.js
