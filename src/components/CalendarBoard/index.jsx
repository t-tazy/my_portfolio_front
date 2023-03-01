import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { createCalendar } from '../../services/calendar';
import { CalendarElement } from '../CalendarElement';
import './style.css';

const calendarArray = createCalendar();

export const CalendarBoard = () => (
  <Grid2 container className="grid" columns={7} spacing={0}>
    {calendarArray.map((day) => (
      <Grid2 key={day.toISOString()} xs={1}>
        <CalendarElement day={day} />
      </Grid2>
    ))}
  </Grid2>
);
