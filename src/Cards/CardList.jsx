import Card from './Card';
import styles from '../App.scss';

export default function CardList({ cards }) {
  return (
    <div>
      <h2>Exercise 1: List of Cards</h2>
      <div className={styles.cardList}>
        {
          cards.map((card, i) => 
            <Card 
              {...card}
              key={card.id + i} />
          )
        }
      </div>
    </div>
  );
}
