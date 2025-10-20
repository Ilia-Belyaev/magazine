import { useState, useEffect } from 'react';
import './search.css';
import SearchLogo from '../../images/user-interface/search.svg';
import { PLACEHOLDERS } from '../../constants';

export default function Search() {
  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='search-container'>
      <input className='search-input-container' placeholder={placeholder} name='search-input'/>
      <img className='search-img' src={SearchLogo} alt="search"/>
    </div>
  );
}
