import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { router } from './app/router/Routes';
import { RouterProvider } from 'react-router-dom';
import { StoreProvider } from './app/api/context/StoreContext';
import { store } from './app/store/configureStore';
import { Provider } from 'react-redux';
import { fetchProductsAsync } from './features/catalog/catalogSlice';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchProductsAsync());

root.render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
        </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
