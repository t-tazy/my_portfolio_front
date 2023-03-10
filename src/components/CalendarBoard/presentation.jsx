import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { CalendarElement } from '../CalendarElement';
import './style.css';

const days = ['日', '月', '火', '水', '木', '金', '土'];

export const CalendarBoard = ({ calendarArray }) => {
  return (
    <Grid2 container className="grid" columns={7} spacing={0}>
      {days.map((d) => (
        <Grid2 xs={1} key={d}>
          <Typography
            className="days"
            color="textSecondary"
            align="center"
            variant="caption"
            component="div"
          >
            {d}
          </Typography>
        </Grid2>
      ))}
      {calendarArray.map((day) => (
        <Grid2 key={day.toISOString()} xs={1}>
          <CalendarElement day={day} />
        </Grid2>
      ))}
    </Grid2>
  );
};
