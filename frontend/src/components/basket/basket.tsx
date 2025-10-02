import BasketProducts from '../../images/user-interface/basket.svg';
import { getProductsToTheBasketCount } from '../../store/slices/basket/selectors';
import { useAppSelector } from '../hooks';
import './basket.css';

export default function Basket() {
  const basketProductsCount = useAppSelector(getProductsToTheBasketCount);

  return (
    <div className='basket-container'>
      <img className='basket-img-container' src={BasketProducts as string}/>
      <div className='basket-counter'>{basketProductsCount}</div>
      <div>Basket</div>
    </div>
  );
}
