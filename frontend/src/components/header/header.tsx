import Auth from '../auth/auth';
import Basket from '../basket/basket';
import Search from '../search/search';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div>Magazine</div>
      <Search />
      <Basket />
      <Auth />
    </header>
  );
}
