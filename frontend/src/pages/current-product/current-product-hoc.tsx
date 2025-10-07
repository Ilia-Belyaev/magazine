import { ComponentType, useEffect } from 'react';
import { Product } from '../../models/models';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { getCurrentProduct } from '../../store/slices/current-product/selectors';
import { getCurrentProductInfo } from '../../store/slices/api-actions';
import { useParams } from 'react-router-dom';

type CurrentProductHOCProps = {
  product: Product;
}

export const CurrentProductHOC = (Component: ComponentType<CurrentProductHOCProps>) => {
  const InnerComponent = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{id: string}>();

    const currentProduct = useAppSelector(getCurrentProduct);

    useEffect(() => {
      if(currentProduct.id !== Number(id)) {
        dispatch(getCurrentProductInfo(Number(id)));
      }
    },[currentProduct, dispatch, id]);

    if (!currentProduct) {
      return <div>Loading...</div>;
    }

    return <Component product={currentProduct}/>;
  };

  return InnerComponent;
};
