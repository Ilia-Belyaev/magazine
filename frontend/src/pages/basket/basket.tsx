import { useAppSelector } from '../../components/hooks';
import { MemoProductCard } from '../../components/product-cards/product-card';
import { getProductsToTheBasket, getProductsToTheBasketCount } from '../../store/slices/basket/selectors';

export default function Basket() {
  const basket = useAppSelector(getProductsToTheBasket);
  const productCount = useAppSelector(getProductsToTheBasketCount);

  return productCount ? (
    <>
      {basket.map(({product, count}) => <MemoProductCard card={product} key={product.id} customCount={count}/>)}
    </>) : (
    <div>Empty products</div>
  );
}
