import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { formatMonth } from '../services/calendar';

const day = dayjs();
// const initialState = formatMonth(day);

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: formatMonth(day),
  reducers: {
    setMonth: (state, action) => action.payload,
  },
});

export const { setMonth } = calendarSlice.actions;
