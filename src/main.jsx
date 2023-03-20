import React from 'react';
import ReactDOM from 'react-dom/client';
import dayjs from 'dayjs';
import { App } from './App';
import 'dayjs/locale/ja';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { calendarSlice } from './redux/calendarSlice';
import { Provider } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { CookiesProvider } from 'react-cookie';

// ローカライズ
dayjs.locale('ja');

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CookiesProvider>
          <RouterProvider router={router} />
        </CookiesProvider>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
);
