import Login from '../../images/user-interface/login.svg';
import Logout from '../../images/user-interface/logout.svg';
import { getAuth } from '../../store/slices/auth/selectors';
import { useAppSelector } from '../hooks';
import './auth.css';

export default function Auth() {
  const auth = useAppSelector(getAuth);

  return (
    <div className='auth-container'>
      <img className='auth-img-container' src={auth === 'AUTH' ? Logout as string : Login as string}/>
      <div>{auth === 'AUTH' ? 'Logout' : 'Login'}</div>
    </div>
  );
}
