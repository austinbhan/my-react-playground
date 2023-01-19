import Card from './Card';
import styles from '../App.scss';

export default function CardList({ cards }) {
  return (
    <div className={styles.cardList}>
      {
        cards.map((card, i) => 
          <Card 
            {...card}
            key={card.id + i} />
        )
      }
    </div>
  );
}
