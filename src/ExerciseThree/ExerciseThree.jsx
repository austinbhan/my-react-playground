import { useState, useEffect } from 'react';
import styles from '../App.scss';

export default function ExerciseThree() {

  const [countries, setCountries] = useState([]);

  const url = 'http://localhost:7890/countries';

  async function getData() {
    const res = await fetch(url);
    const realRes = res.json();
    setCountries(realRes.countries);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className={styles.ExerciseThree}>
      <h2>Exercise 3: Import API from Backend</h2>
      <div className={styles.countries}>
        {
          countries.map((country, i) => {
            return <div key={country.id + i}>
              <div>{country.country}</div>
              <div>{country.capitol}</div>
              <div>{country.langue}</div>
            </div>;
          })
        }
      </div>
    </div>
  );

}
