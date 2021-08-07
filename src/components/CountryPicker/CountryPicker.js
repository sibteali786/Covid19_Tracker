import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../App";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
const useStyles = makeStyles({
  root: {
    margin: "0 auto",
  },
});

export const CountryPicker = ({ handleCountryChange }) => {
  const classes = useStyles();
  const [fetchedCountries, setfetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setfetchedCountries]);
  return (
    <FormControl className={cx(styles.formControl, styles.root)}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
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
