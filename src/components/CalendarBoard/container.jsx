import { useDispatch, useSelector } from 'react-redux';
import { createCalendar } from '../../services/calendar';
import { CalendarBoard } from './presentation';

export const ContainerCalendarBoard = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  return <CalendarBoard calendarArray={createCalendar(calendar)} />;
};
