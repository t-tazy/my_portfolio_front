import React from 'react';
import ReactDOM from 'react-dom/client';
import dayjs from 'dayjs';
import { App } from './App';
import 'dayjs/locale/ja';
import './index.css';

// ローカライズ
dayjs.locale('ja');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
