import { Product } from '../../models/models';

type ProductCardProps = {
  card: Product;
}
export default function ProductCard({card}: ProductCardProps) {
  const {title, thumbnail, price, rating, stock} = card;

  return (
    <div className='card-container'>
      <img src={thumbnail} />
      <div>{title}</div>
      <div>{price}</div>
      <div>{rating}</div>
      <div>{stock}</div>
    </div>
  );
}
