import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './App.scss';

export default function App() {
  return(
    <Router>
      <div className={styles.App}>
        <h1 className={styles.header}>Hello World</h1>
      </div>
    </Router>
  );
}
