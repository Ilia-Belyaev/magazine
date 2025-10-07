import Header from '../../components/header/header';
import { Product } from '../../models/models';
import { CurrentProductHOC } from './current-product-hoc';

type CurrentProductProps = {
  product: Product;
}
export function CurrentProduct ({product}: CurrentProductProps) {
  const {thumbnail} = product;

  return (
    <>
      <Header />
      <img src={thumbnail}/>
    </>
  );
}


export const CurrentProductScreen = CurrentProductHOC(CurrentProduct);
