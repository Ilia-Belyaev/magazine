import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/slices/index.ts';
import { getCards, getAllCategories } from './store/slices/api-actions.ts';

store.dispatch(getCards());
store.dispatch(getAllCategories());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
