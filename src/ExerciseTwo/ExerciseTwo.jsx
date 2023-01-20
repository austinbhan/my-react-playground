import styles from '../App.scss';
import { useState } from 'react';

export default function ExerciseTwo() {

  const [number, setNumber] = useState(0);

  function clickPlus() {
    setNumber(number + 1);
  }
  
  function clickMinus() {
    setNumber(number - 1);
  }

  function reset() {
    setNumber(number * 0);
  }

  return (
    <div className={styles.ExerciseTwo}>
      <h2>Exercise 2: UseState Plus, Minus, Reset</h2>
      <div>{number}</div>
      <div className={styles.useStateExercises}>
        <button onClick={clickPlus}>+</button>
        <button onClick={clickMinus}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );

}
