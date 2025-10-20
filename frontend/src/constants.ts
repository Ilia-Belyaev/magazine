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
import VK from './images/social-media/vk.svg';
import Telegram from './images/social-media/telegram.svg';
import Mail from './images/social-media/mail.svg';
import LinkedIn from './images/social-media/linkedin.svg';
import Github from './images/social-media/github.svg';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  NotFound = '/*',
  Basket = '/basket',
  CurrentProduct = '/currentProduct/:id',
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
  User = 'User',
  FavoritesProducts = 'FavoritesProducts',
  CurrentProduct = 'CurrentProduct',
}

export enum ApiRoute {
  Products = '/products',
  Categories = '/categories',
  Login = '/login',
  Logout = '/logout',
  GetFavorites = '/getFavorites',
  SetFavorite = '/setFavorite',
  DropFavorite = '/dropFavorite',
  CheckLogin = '/checkLogin',
  CurrentProduct = '/currentProduct',
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
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    name: VK,
    title: 'VKontakte',
    href: 'https://vk.ru'
  },
  {
    id: 2,
    name: Telegram,
    title: 'Telegram',
    href: 'https://web.telegram.org/a/'
  },
  {
    id: 3,
    name: Mail,
    title: 'Mail',
    href: 'https://mail.ru/'
  },
  {
    id: 4,
    name: LinkedIn,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ilya-belyaev-5ba55a1ab'
  },
  {
    id: 5,
    name: Github,
    title: 'Github',
    href: 'https://github.com/Ilia-Belyaev'
  },
];

export const FOOTER_TEXT = 'I am a Junior Frontend Developer with a focus on React, JavaScript, and Redux. Recently, I completed frontend development courses and am actively building personal projects to strengthen my skills.';

export const PLACEHOLDERS = [
  'Find products',
  'Search for shoes',
  'Looking for laptops?',
  'Try "smartphone"',
];
