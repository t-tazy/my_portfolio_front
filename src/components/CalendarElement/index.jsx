import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { isCurrentMonth, isFirstDay, isToday } from '../../services/calendar';
import './style.css';

export const CalendarElement = ({ day }) => {
  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const today = dayjs();

  return (
    <div className="element">
      <Typography
        className="date"
        color={isCurrentMonth(day, today) ? 'textPrimary' : 'textSecondary'}
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
