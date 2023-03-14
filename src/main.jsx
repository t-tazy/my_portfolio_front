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

// ローカライズ
dayjs.locale('ja');

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
);
