import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './App.scss';
import CardList from './Cards/CardList';
import ExerciseTwo from './ExerciseTwo/ExerciseTwo';
import { CardData } from './Cards/CardData';
import ExerciseThree from './ExerciseThree/ExerciseThree';
import ExerciseFour from './ExerciseFour/ExerciseFour';

export default function App() {
  return(
    <Router>
      <div className={styles.App}>
        <h1 className={styles.header}>React Exercises</h1>
        <div className={styles.exercises}>
          <CardList cards = {CardData}/>
          <ExerciseTwo />
          <ExerciseThree />
          <ExerciseFour />
        </div>
      </div>
    </Router>
  );
}
