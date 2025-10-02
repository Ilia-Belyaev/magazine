import { Product } from '../../models/models';
import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { decrementProduct, incrementProduct } from '../../store/slices/all-products/actions';
import { AppRoute, StockStatus } from '../../constants';
import Rating from '../../images/user-interface/rating.svg';
import { getAuth } from '../../store/slices/auth/selectors';
import Favorite from '../../images/user-interface/favorites.svg';
import AddedFavorite from '../../images/user-interface/added-favorite.svg';
import { Navigate } from 'react-router-dom';
import { addProductToTheBasket, removeProductFromBasket } from '../../store/slices/basket/actions';

type ProductCardProps = {
  card: Product;
}

function ProductCard({card}: ProductCardProps) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(getAuth);
  const {title, thumbnail, price, stock, id, rating} = card;
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to={AppRoute.Login} />;
  }

  const handleClick = (status: StockStatus) => {
    if (status === 'INCREMENT') {
      setCount((prev) => prev - 1);
      dispatch(decrementProduct({status: StockStatus.DECREMENT, id: id}));
      dispatch(removeProductFromBasket(card));
    } else {
      setCount((prev) => prev + 1);
      dispatch(incrementProduct({status: StockStatus.INCREMENT, id: id}));
      dispatch(addProductToTheBasket(card));
    }
  };

  const handleImgClick = () => {
    if (auth === 'AUTH') {
      setFavorite((prev) => !prev);
    } else {
      setRedirect(true);
    }
  };

  return (
    <div className='card-container'>
      <div className='card-images-container'>
        <div className='card-favorite-container' onClick={handleImgClick}>
          <img className='card-favorite-img' src={favorite ? AddedFavorite as string : Favorite as string}/>
        </div>
        <div className='card-rating-container'>
          <img className='card-rating-img' src={Rating as string}/>
          <span className='card-rating'>{rating}</span>
        </div>
        <img src={thumbnail} className='card-image'/>
      </div>
      {count === 0 ?
        <div className='card-button-container'>
          <button className='card-button-add' onClick={() => handleClick(StockStatus.DECREMENT)}>+</button>
        </div> :
        <div className='card-button-container card-big-button-container'>
          <button className='card-button-add' onClick={() => handleClick(StockStatus.INCREMENT)}>-</button>
          <span className='card-product-count'>{count}</span>
          <button className='card-button-add' onClick={() => handleClick(StockStatus.DECREMENT)} disabled={stock === 0}>+</button>
        </div>}
      <div className='card-title'>{title}</div>
      <div className='card-price'>{price}</div>
      <div className='stock-container'>
        <div className='stock-text'>In stock:</div>
        <div className='card-stock'>{stock}</div>
      </div>
    </div>
  );
}

export const MemoProductCard = memo(ProductCard, (prevProps, nextProps) => prevProps.card === nextProps.card);
