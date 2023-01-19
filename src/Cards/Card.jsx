import styles from './App.scss';

export default function Card({ id, name, color }) {
  return(
    <div className={styles.card}>
      <h4>{name}</h4>
      <p>{id}</p>
      <p>{color}</p>
    </div>
  );
}
