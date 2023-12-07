import {
  BrowserRouter as Router, Route, Routes,
  Link
} from 'react-router-dom';
import styles from './App.scss';
import CardList from './Cards/CardList';
import ExerciseTwo from './ExerciseTwo/ExerciseTwo';
import { CardData } from './Cards/CardData';
import ExerciseThree from './ExerciseThree/ExerciseThree';
import ExerciseFour from './ExerciseFour/ExerciseFour';
import ExerciseFive from './ExerciseFive/ExerciseFive';
import ExerciseSix from './ExerciseSix/ExerciseSix';
import ExerciseSeven from './ExerciseSeven/ExerciseSeven';
import ExerciseEight from './ExerciseEight/ExerciseEight';
import ExerciseNine from './ExerciseNine/ExerciseNine';
import ExerciseTen from './ExerciseTen/ExerciseTen';
import ExerciseEleven from './ExerciseEleven/ExerciseEleven';



export default function App() {
  return(
    <Router>
      <div className={styles.App}>
        <h1 className={styles.header}>React Exercises</h1>
        <div className={styles.buttonMenu}>
          <Link className={styles.button} 
            to="/exercise-one">
            <h2>Exercise 1</h2>
          </Link>
          <Link className={styles.button} 
            to="/exercise-two">
            <h2>Exercise 2</h2>
          </Link>
          <Link className={styles.button} 
            to="/exercise-three">
            <h2>Exercise 3</h2>
          </Link>
          <Link className={styles.button} 
            to="/exercise-four">
            <h2>Exercise 4</h2>
          </Link>
          <Link className={styles.button}
            to="/exercise-five">
            <h2>Exercise 5</h2>
          </Link>
          <Link className={styles.button}
            to="/exercise-six">
            <h2>Exercise 6</h2>
          </Link>
          <Link className={styles.button}
            to="/exercise-seven">
            <h2>Exercise 7</h2>
          </Link>
          <Link className={styles.button}
            to="/exercise-eight">
            <h2>Exercise 8</h2>
          </Link>
          <Link className={styles.button}
            to="/exercise-nine">
            <h2>Exercise 9</h2>
          </Link>
          <Link className={styles.button}
            to="/exercise-ten">
            <h2>Exercise 10</h2>
          </Link>
          <Link className={styles.button}
            to="/exercise-eleven">
            <h2>Exercise 11</h2>
          </Link>
        </div>
      
        <div className={styles.exercises}>
          <Routes>
            <Route path="/exercise-one" 
              element={<CardList cards = {CardData}/>}/>
            <Route path="/exercise-two"
              element={<ExerciseTwo />} />
            <Route path="/exercise-three"
              element={<ExerciseThree />} />
            <Route path="/exercise-four"
              element={<ExerciseFour />} />
            <Route path="exercise-five"
              element={<ExerciseFive />} />
            <Route path="exercise-six"
              element={<ExerciseSix />} />
            <Route path={'exercise-seven'}
              element={<ExerciseSeven />} />
            <Route path={'exercise-eight'}
              element={<ExerciseEight />} />
            <Route path={'exercise-nine'}
              element={<ExerciseNine />} />
            <Route path={'exercise-ten'}
              element={<ExerciseTen />} />
            <Route path={'exercise-eleven'}
              element={<ExerciseEleven />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
