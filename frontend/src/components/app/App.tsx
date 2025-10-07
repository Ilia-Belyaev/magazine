import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Basket from '../../pages/basket/basket';
import PrivateRoute from '../private-route/private-route';
import { CurrentProductScreen } from '../../pages/current-product/current-product';
import { UserCabinetScreen } from '../../pages/user-cabinet/user-cabinet';
import { useAppSelector } from '../hooks';
import { getAuth } from '../../store/slices/auth/selectors';

export default function App() {
  const authorizationStatus = useAppSelector(getAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login auth={authorizationStatus}/>}
        />
        <Route
          path={AppRoute.Basket}
          element = {<Basket />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
        <Route
          path={AppRoute.CurrentProduct}
          element={<CurrentProductScreen />}
        />
        <Route
          path={AppRoute.UserCabinet}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <UserCabinetScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
