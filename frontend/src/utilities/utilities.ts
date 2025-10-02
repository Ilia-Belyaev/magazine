import { Product, Products, StockStatusValue } from '../models/models';

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

export const removeBasketProduct = (state: Products, currentProduct: Product) => {
  const index = state.findIndex((product) => product.id === currentProduct.id);

  if (index !== -1) {
    const newState = [...state];

    newState.splice(index, 1);

    return newState;
  }

  return state;
};


