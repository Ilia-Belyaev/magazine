import Login from '../../images/user-interface/login.svg';
import Logout from '../../images/user-interface/logout.svg';
import User from '../../images/user-interface/user.svg';
import { getAuth } from '../../store/slices/auth/selectors';
import { useAppDispatch, useAppSelector } from '../hooks';
import './auth.css';
import { Link } from 'react-router-dom';
import { ApiRoute, AppRoute, AuthorizationStatus } from '../../constants';
import { logoutAction } from '../../store/slices/api-actions';

export default function Auth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(getAuth);

  const handleClick = () => {
    dispatch(logoutAction());
  };

  return auth === AuthorizationStatus.Auth ? (
    <>
      <Link to={AppRoute.UserCabinet}className='auth-container'>
        <img className='auth-img-container' src={User} />
        <div>Cabinet</div>
      </Link>
      <Link to={ApiRoute.Login} className='auth-container' onClick={handleClick}>
        <img className='auth-img-container' src={Logout}/>
        <div>Logout</div>
      </Link>
    </>) : (
    <Link to={ApiRoute.Login} className='auth-container'>
      <img className='auth-img-container' src={Login}/>
      <div>Login</div>
    </Link>
  );
}
