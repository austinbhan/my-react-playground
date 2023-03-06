import styles from '../App.scss';

export default function AccordionElement({ 
  country, 
  capitol, 
  spoken_language, 
  continent, 
  population }) {
  return (
    <div className={styles.accordionElement}>
      <div>{country}</div>
      <div>{capitol}</div>
      <div>{spoken_language}</div>
      <div>{continent}</div>     
      <div>{population}</div>     
    </div>
  );
}

// Your elements include:

// id
// country
// capitol
// spoken_language
// continent
// population
