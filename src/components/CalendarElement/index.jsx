import { Typography } from '@mui/material';
import './style.css';

export const CalendarElement = ({ day }) => (
  <div className="element">
    <Typography
      className="date"
      align="center"
      variant="caption"
      component="div"
    >
      {day.format('D')}
    </Typography>
  </div>
);
