import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/slices/index.ts';
import { getCards, getAllCategories, checkAuthAction, getUserData } from './store/slices/api-actions.ts';
import { getToken } from './store/services/token.tsx';

store.dispatch(getCards());
store.dispatch(getAllCategories());
store.dispatch(checkAuthAction());

if(getToken()) {
  store.dispatch(getUserData());
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
