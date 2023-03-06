import styles from '../App.scss';
import AccordionElement from './AccordionElement';

export default function AccordionList({ data }) {
  return (
    <div className={styles.accordionList}>
      {
        data.map((item, i) => 
          <AccordionElement
            {...item}
            key ={item.country + i} 
          />)
      }
    </div>
  );
}
