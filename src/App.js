import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import Header from "./components/Header";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState({});

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
      setdata(modifiedData);
    } catch (error) {}
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Cards data={data} />
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
