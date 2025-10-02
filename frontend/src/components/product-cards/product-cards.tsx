import { Products } from '../../models/models';
import { MemoProductCard } from './product-card';
import './product-cards.css';

type ProductCardsProps = {
  cards: Products;
}
export default function ProductCards({cards}: ProductCardsProps) {
  return (
    <main className='product-card-container'>
      {cards.map((card) => <MemoProductCard card={card} key={card.id}/>)}
    </main>
  );
}
