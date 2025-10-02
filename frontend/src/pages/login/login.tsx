import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../components/hooks';
import { AppRoute } from '../../constants';
import { Navigate } from 'react-router-dom';
import { loginAction } from '../../store/slices/api-actions';
import { AuthStatus } from '../../models/models';

type LoginProps = {
  auth: AuthStatus;
}
export default function Login({auth}: LoginProps) {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        ref={loginRef}
      />
      <input
        type="password"
        placeholder="Пароль"
        ref={passwordRef}
      />
      <button type='submit'>Sign in</button>
    </form>
  );
}
