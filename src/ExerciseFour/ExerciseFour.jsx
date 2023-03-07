import styles from '../App.scss';
import AccordionList from './AccordionList';
import { getAll } from '../fetch-utils/getAll';
import { useEffect, useState } from 'react';

export default function ExerciseFour() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll(setData);
  });
  
  return (
    <div className={styles.ExerciseFour}>
      <h2>Exercise 4: Use MaterialUI Accordion 
        to graphically represent array objects</h2>
      <AccordionList data = {data}/>
    </div>
  );
}

// Graph: X-axis = Name of country
// Graph: Y-axis = Population size
