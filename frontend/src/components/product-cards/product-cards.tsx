import { Products } from '../../models/models';
import ProductCard from './product-card';
import './product-cards.css';

type ProductCardsProps = {
  cards: Products;
}
export default function ProductCards({cards}: ProductCardsProps) {
  return (
    <div className='product-card-container'>
      {cards.map((card) => <ProductCard card={card} key={card.id}/>)}
    </div>
  );
}
