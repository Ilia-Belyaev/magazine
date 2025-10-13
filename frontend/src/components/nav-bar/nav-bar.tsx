import { getCategories } from '../../store/slices/categories/selectors';
import { useAppSelector } from '../hooks';
import Category from './category';
import { CATEGORY_IMAGES } from '../../constants';
import './nav-bar.css';

export default function NavBar() {
  const categories = useAppSelector(getCategories);

  return (
    <nav className='nav-container'>
      <ul className='category-list'>
        {categories.map((category, index) => <Category key={category} category={category} image={CATEGORY_IMAGES[index]}/>)}
      </ul>
    </nav>
  );
}
