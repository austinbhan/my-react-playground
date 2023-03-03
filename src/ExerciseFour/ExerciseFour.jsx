import styles from '../App.scss';
import AccordionList from './AccordionList';


export default function ExerciseFour() {
  return (
    <div className={styles.ExerciseFour}>
      <h2>Exercise 4: Use MaterialUI Accordion 
        to graphically represent array objects</h2>
      <AccordionList />
      {/* <h2>Exercise 4.5: Make a List of MaterialUI Accordion
                Elements Using Map
      </h2> */}
    </div>
  );
}
// Create a drop down list of array elements

// Graph: X-axis = Name of country
// Graph: Y-axis = Population size
