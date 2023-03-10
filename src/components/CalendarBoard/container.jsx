import dayjs from 'dayjs';
import { useState } from 'react';
import { createCalendar } from '../../services/calendar';
import { CalendarBoard } from './presentation';

export const ContainerCalendarBoard = () => {
  const day = dayjs();
  const [calendar, setCalendar] = useState({
    year: day.year(),
    month: day.month() + 1,
  });

  return <CalendarBoard calendarArray={createCalendar(calendar)} />;
};
