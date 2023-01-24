import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './App.scss';
import CardList from './Cards/CardList';
import ExerciseTwo from './ExerciseTwo/ExerciseTwo';
import { CardData } from './Cards/CardData';
import ExerciseThree from './ExerciseThree/ExerciseThree';

export default function App() {
  return(
    <Router>
      <div className={styles.App}>
        <h1 className={styles.header}>React Exercises</h1>
        <div>
          <h2>Exercise 1: List of Cards</h2>
          <CardList cards = {CardData}/>
        </div>
        <div>
          <ExerciseTwo />
        </div>
        <div>
          <ExerciseThree />
        </div>
      </div>
    </Router>
  );
}
