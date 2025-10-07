import { useAppSelector } from '../../components/hooks';
import { MemoProductCard } from '../../components/product-cards/product-card';
import { getFavoriteProductsFromStore } from '../../store/slices/favorites-products/selectors';
import { UserCabinetHOC } from './user-cabinet-hoc';

export function UserCabinet() {
  const userFavoritesProducts = useAppSelector(getFavoriteProductsFromStore);

  return (
    <>
      {userFavoritesProducts.map((product) => <MemoProductCard card={product} key={product.id}/>) }
    </>
  );
}

export const UserCabinetScreen = UserCabinetHOC(UserCabinet);
