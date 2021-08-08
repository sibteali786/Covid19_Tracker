import { Cards, Chart, CountryPicker } from "./components";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Grid from "@material-ui/core/Grid";

export const fetchCountries = async () => {
  try {
    const resp = await fetch(`https://covid19.mathdro.id/api/countries`);
    const { countries } = await resp.json();
    return countries.map((country) => country.name);
  } catch (error) {}
};

function App() {
  const [vals, setvals] = useState({});
  const [dailyData, setdailyData] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetchData();
    fetchDailyData();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  const url = `https://covid19.mathdro.id/api`;
  async function fetchData(country) {
    let urlChng = url;
    if (country) {
      urlChng = `${url}/countries/${country}`;
    }
    try {
      const apiResponse = await fetch(urlChng);

      const { confirmed, recovered, deaths, lastUpdate } =
        await apiResponse.json();
      const modifiedData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate,
      };
      setvals(modifiedData);
      setCountry(country);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDailyData() {
    try {
      const response = await fetch(`https://covid19.mathdro.id/api/daily`);
      const resData = await response.json();
      const modData = resData.map((daily) => ({
        confirmed: daily.confirmed.total,
        deaths: daily.deaths.total,
        date: daily.reportDate,
      }));
      setdailyData(modData);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCountryChange = async (country) => {
    console.log(await fetchData(country));
  };

  return (
    <div>
      <Header />
      <CountryPicker
        className={styles.Picker}
        handleCountryChange={handleCountryChange}
      />
      <div className={styles.container}>
        <Grid item xs={12} md={4}>
          <Cards data={vals} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Chart dailydata={dailyData} data={vals} country={country} />
        </Grid>
      </div>
    </div>
  );
}

export default App;

// https://covid19.mathdro.id/api
// Making .modules.css files to be able to use css by the js files of that folder only
// We can also use such import as for chart cards and countrypicker here but then need to make index.js in the folder as like components/index.js
