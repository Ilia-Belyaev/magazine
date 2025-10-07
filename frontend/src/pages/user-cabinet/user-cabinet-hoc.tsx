import { ComponentType, useEffect } from 'react';
import { useAppDispatch } from '../../components/hooks';
import { getFavoriteProducts } from '../../store/slices/api-actions';

export const UserCabinetHOC = (Component: ComponentType) => {
  const InnerComponent = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getFavoriteProducts());
    }, [dispatch]);

    return <Component />;
  };

  return InnerComponent;
};
