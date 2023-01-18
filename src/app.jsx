import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './App.scss';

export default function App() {
  return(
    <Router>
      <div className={styles.App}>
        <h1 className={styles.header}>React Exercises</h1>
        <h2>Exercise 1: List of Cards</h2>
      </div>
    </Router>
  );
}
