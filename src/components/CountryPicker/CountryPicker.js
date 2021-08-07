import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../App";
export const CountryPicker = () => {
  const [fetchedCountries, setfetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setfetchedCountries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
