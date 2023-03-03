import { useState, useEffect } from 'react';
import { getAll } from '../fetch-utils/getAll'; 
import styles from '../App.scss';


export default function ExerciseThree() {
  const [data, setData] = useState([]);
  
  async function getData() {
    getAll(setData);
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
