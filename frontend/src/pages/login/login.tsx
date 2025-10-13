import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../components/hooks';
import { AppRoute } from '../../constants';
import { Navigate } from 'react-router-dom';
import { loginAction } from '../../store/slices/api-actions';
import { AuthStatus } from '../../models/models';
import './login.css';
import LoginBackground from '../../images/login-background/login-background.jpg';
import cn from 'classnames';
import { isCorrectPass } from '../../utilities/utilities';

type LoginProps = {
  auth: AuthStatus;
}
export default function Login({auth}: LoginProps) {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const regExpValue = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  const [showHint, setShowHint] = useState(false);
  const [classes, setClasses] = useState([false, false, false, false, false]);
  const timeoutRef = useRef<number | null>(null);

  const handleInputPassChange = () => {
    setClasses(isCorrectPass(passwordRef.current?.value as string));
  };

  const handleShake = () => {//так же добавить таймаут с очисткой на то, чтобы показывать сообщение о некорректном пароле
    if (!buttonRef.current) {
      return;
    }

    buttonRef.current.classList.add('shake');

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      buttonRef.current?.classList.remove('shake');
      timeoutRef.current = null;
    }, 500);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(!regExpValue.test(passwordRef.current?.value as string)) {
      handleShake();

      return;
    }


    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  if (auth === 'AUTH') {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className='login-form-container'>
      <img src={LoginBackground} className='login-background'/>
      <h1 className='login-sign-text'>Sign in</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='form-item'>
          <input id='email' type='email' placeholder=' ' ref={loginRef} className='email' required/>
          <label htmlFor='email' className='placeholder'>Email</label>
        </div>
        <div className='form-item'>
          <div className='form-item'>
            <input id='password' type="password" placeholder=' ' ref={passwordRef} className='password' required
              onChange={handleInputPassChange}
              onFocus={() => setShowHint(true)}
              onBlur={() => setShowHint(false)}
            />
            <label htmlFor='password' className='placeholder'>Password</label>
          </div>
          <div className={cn('pass-hint', showHint ? 'visible' : '')}>
            <span className={cn(
              classes[0] ? 'pass-part-correct' : 'pass-part-incorrect')}
            >At least one digit.
            </span>
            <span className={cn(
              classes[1] ? 'pass-part-correct' : 'pass-part-incorrect')}
            >At least one uppercase letter.
            </span>
            <span className={cn(
              classes[2] ? 'pass-part-correct' : 'pass-part-incorrect')}
            >At least one lowercase letter.
            </span>
            <span className={cn(
              classes[3] ?
                'pass-part-correct' : 'pass-part-incorrect')}
            >At least one special character is required.
            </span>
            <span className={cn(
              classes[4] ?
                'pass-part-correct' : 'pass-part-incorrect')}
            >The password is at least 8 characters long.
            </span>
          </div>
        </div>
        <button type='submit' className='submit' ref={buttonRef}>Sign in</button>
      </form>
    </div>
  );
}
