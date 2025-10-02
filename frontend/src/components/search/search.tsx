import './search.css';
import SearchLogo from '../../images/user-interface/search.svg';

export default function Search() {
//добавить динамичный placeholder
  return (
    <div className='search-container'>
      <input className='search-input-container' placeholder='find products'/>
      <img className='search-img' src={SearchLogo as string}/>
    </div>
  );
}
