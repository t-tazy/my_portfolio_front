import { useDispatch, useSelector } from 'react-redux';
import { setMonth } from '../../redux/calendarSlice';
import {
  formatMonth,
  getMonth,
  getNextMonth,
  getPrevMonth,
} from '../../services/calendar';
import { Navigation } from './presentation';

export const ContainerNavigation = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const nextMonth = getNextMonth(calendar);
  const prevMonth = getPrevMonth(calendar);

  return (
    <Navigation
      setNextMonth={() => dispatch(setMonth(nextMonth))}
      setPrevMonth={() => dispatch(setMonth(prevMonth))}
      setMonth={(dayjs) => dispatch(setMonth(formatMonth(dayjs)))}
      month={getMonth(calendar)}
    />
  );
};
