import Auth from '../auth/auth';
import Basket from '../basket/basket';
import Categories from '../categories/categories';
import Search from '../search/search';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <Categories />
      <Search />
      <Basket />
      <Auth />
    </header>
  );
}
