import { getCategories } from '../../store/slices/categories/selectors';
import { useAppSelector } from '../hooks';
import Category from './category';
import { CATEGORY_IMAGES } from '../../constants';
import './categories.css';
import { useEffect, useRef, useState } from 'react';
import AllCategories from '../../images/categories/all-categories.svg';
import cn from 'classnames';

export default function Categories() {
  const categories = useAppSelector(getCategories);
  const [show, setShow] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (listRef.current &&
          !listRef.current.contains(event.target as Node) &&
          categoriesRef.current &&
          !categoriesRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    window.addEventListener('click', listener);

    return () => removeEventListener('click', listener);
  }, []);

  return (
    <div onClick={() => setShow(true)} className='categories-outer-container' ref={categoriesRef}>
      <div className='categories-img-container' >
        <img src={AllCategories} className='all-categories-img'/>
        <div>Categories</div>
      </div>
      <div className={cn('categories-container', show ? 'visible' : '')} ref={listRef}>
        <ul className='category-list'>
          {categories.map((category, index) => <Category key={category} category={category} image={CATEGORY_IMAGES[index]}/>)}
        </ul>
      </div>
    </div>
  );
}
