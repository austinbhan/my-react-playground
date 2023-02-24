import { useState, useEffect } from 'react';
import styles from '../App.scss';

export default function ExerciseThree() {

  const url = 'https://countryapi.herokuapp.com/countries/';
  
  async function getData() {
    const res = await fetch(url);
    const realRes = res.json();
    console.log(realRes);
  }

  console.log(getData());


  return (
    <div className={styles.ExerciseThree}>
      <h2>Exercise 3: Import API from Backend</h2>
      <div className={styles.countries}>
      </div>
    </div>
  );

}
