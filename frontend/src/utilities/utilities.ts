import { CustomProduct, CustomProducts, Product, Products, StockStatusValue } from '../models/models';

export const replaceStockCurrentProduct = (products: Products, stockStatus: StockStatusValue) => {
  const {id, status} = stockStatus;
  const newProducts = products.map((product) => {
    if (product.id === id && status === 'INCREMENT') {
      return { ...product, stock: product.stock - 1 };
    }
    if (product.id === id && status === 'DECREMENT') {
      return { ...product, stock: product.stock + 1 };
    }

    return product;
  });

  return newProducts;
};

export const removeBasketProduct = (state: CustomProducts, currentProduct: Product) => {
  const index = state.findIndex(({product}) => product.id === currentProduct.id);

  if (index === -1) {
    return state;
  }

  const newState = [...state];
  const item = newState[index];

  newState[index] = { ...item, count: item.count - 1 };

  return item.count > 1 ? newState : newState.filter((_, i) => i !== index);
};

export const addBusketProduct = (state: CustomProducts, currentProduct: Product) => {
  const index = state.findIndex((product) => product.product.id === currentProduct.id);
  const newState = [...state];

  if (index === -1) {
    const newCustomProduct = {product: currentProduct, count: 1} as CustomProduct;
    newState.push(newCustomProduct);
  } else {
    newState[index].count++;
  }

  return newState;
};

export const addCurrentFavoriteProductFromState = (state: Products, currentProductId: number) => {
  const newState = [...state];
  const includedProduct = newState.find((product) => product.id === currentProductId) as Product;
  includedProduct.isFavorite = !includedProduct?.isFavorite;

  return newState;
};

export const isCorrectPass = (pass: string) => {
  const isPassLength = (/^.{8,}/.test(pass));
  const isPassHaveDigit = (/^(?=.*\d).+$/.test(pass));
  const isPassHaveLowerCase = (/^(?=.*[a-zа-яё]).+$/.test(pass));
  const isPassHaveUpperCase = (/^(?=.*[A-ZА-ЯЁ]).+$/.test(pass));
  const isPassHaveSpecialSymbol = (/^(?=.*\W).+$/.test(pass));

  return [isPassHaveDigit, isPassHaveUpperCase, isPassHaveLowerCase, isPassHaveSpecialSymbol, isPassLength];
};
