import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import {
  isSameMonth,
  isFirstDay,
  isToday,
  getMonth,
} from '../../services/calendar';
import './style.css';

export const CalendarElement = ({ day, calendar }) => {
  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const today = dayjs();
  const currentMonth = getMonth(calendar); // global stateとして管理されている

  console.log('global state', currentMonth);
  return (
    <div className="element">
      <Typography
        className="date"
        color={isSameMonth(day, currentMonth) ? 'textPrimary' : 'textSecondary'}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday(day, today) ? 'today' : ''}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};
