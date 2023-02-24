import { useState, useEffect } from 'react';
import styles from '../App.scss';

export default function ExerciseThree() {

  // Change to Heroku link when backend is merged to main
  const url = 'http://localhost:7890/countries'; 
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch(url);
    const realRes = await res.json();
    setData(realRes);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.ExerciseThree}>
      <h2>Exercise 3: Import API from Backend</h2>
      <div className={styles.cardList}>
        {
          data.map((country, i) => {
            return <div key = {country + i} className={styles.card}>
              <h3>{country.country}</h3>
              <h4>{country.capitol}</h4>
              <h5>{country.continent}</h5>
              <h5>{country.spoken_language}</h5>
              <h5>{country.population}</h5>
            </div>;
          })
        }
      </div>
    </div>
  );

}
