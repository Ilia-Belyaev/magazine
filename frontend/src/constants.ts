import SportsAccessories from './images/categories/ball-football-icon.svg';
import MensShoes from './images/categories/boot-icon.svg';
import Vehicle from './images/categories/car-icon.svg';
import Smartphones from './images/categories/cell-phone-icon.svg';
import KitchenAccessories from './images/categories/cooking-dough-icon.svg';
import Tablets from './images/categories/device-tablet-icon.svg';
import HomeDecoration from './images/categories/end-table-icon.svg';
import ScinCare from './images/categories/face-massage-icon.svg';
import Sunglasses from './images/categories/fashion-glasses-icon.svg';
import WomenBags from './images/categories/fashion-purse-icon.svg';
import MensWatches from './images/categories/hand-watch-icon.svg';
import Laptops from './images/categories/laptop-open-black-icon.svg';
import Beauty from './images/categories/makeup-icon.svg';
import MensShirts from './images/categories/mens-shirts-half-sleeve-icon.svg';
import MobileAccessories from './images/categories/music-player-headphone-square-outline-icon.svg';
import WomenJewellery from './images/categories/necklace-chain-icon.svg';
import Groceries from './images/categories/pear-papaya-black-icon.svg';
import Fragrances from './images/categories/perfume-icon.svg';
import Furniture from './images/categories/sofa-black-icon.svg';
import Motorcycle from './images/categories/sport-bike-motorcycle-icon.svg';
import WomenDresses from './images/categories/wedding-dress-icon.svg';
import WomenTops from './images/categories/woman-dress-outline-icon.svg';
import WomenWatches from './images/categories/wrist-watch-black-icon.svg';
import WomenShoes from './images/categories/heel-sandal-icon.svg';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  NotFound = '/*',
  Basket = '/basket',
  CurrentProduct = '/current',
  UserCabinet = '/cabinet',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  Unknown = 'UNKNOWN',
  NoAuth = 'NO_AUTH',
}

export enum NameSpace {
  Products = 'Products',
  Categories = 'Categories',
  Auth = 'Auth',
  Basket = 'Basket',
}

export enum ApiRoute {
  Products = '/products',
  Categories = '/categories',
  Login = '/login',
  Logout = '/logout',
}

export enum StockStatus {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export const CATEGORY_IMAGES = [
  Beauty,
  Fragrances,
  Furniture,
  Groceries,
  HomeDecoration,
  KitchenAccessories,
  Laptops,
  MensShirts,
  MensShoes,
  MensWatches,
  MobileAccessories,
  Motorcycle,
  ScinCare,
  Smartphones,
  SportsAccessories,
  Sunglasses,
  Tablets,
  WomenTops,
  Vehicle,
  WomenBags,
  WomenDresses,
  WomenJewellery,
  WomenShoes,
  WomenWatches,
] as string[];

