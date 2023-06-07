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
          </Routes>
        </div>
      </div>
    </Router>
  );
}
