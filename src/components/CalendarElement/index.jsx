import { Typography } from '@mui/material';
import './style.css';

export const CalendarElement = ({ day }) => {
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? 'M月D日' : 'D';

  return (
    <div className="element">
      <Typography
        className="date"
        align="center"
        variant="caption"
        component="div"
      >
        {day.format(format)}
      </Typography>
    </div>
  );
};
