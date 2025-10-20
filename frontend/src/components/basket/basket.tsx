import { Link } from 'react-router-dom';
import BasketProducts from '../../images/user-interface/basket.svg';
import { getProductsToTheBasketCount } from '../../store/slices/basket/selectors';
import { useAppSelector } from '../hooks';
import './basket.css';
import { AppRoute } from '../../constants';

export default function Basket() {
  const basketProductsCount = useAppSelector(getProductsToTheBasketCount);

  return (
    <Link to={AppRoute.Basket} className='basket-container'>
      <img className='basket-img-container' src={BasketProducts}/>
      <div className='basket-counter'>{basketProductsCount}</div>
      <div className='basket-name'>Basket</div>
    </Link>
  );
}
