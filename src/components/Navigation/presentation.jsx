import { ArrowBackIosNew, ArrowForwardIos, Dehaze } from '@mui/icons-material';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const Navigation = ({ setPrevMonth, setNextMonth, setMonth, month }) => {
  return (
    <Toolbar>
      <IconButton>
        <Dehaze />
      </IconButton>
      <Typography
        sx={{ margin: '0 30px 0 10px' }}
        color="textSecondary"
        variant="h5"
        component="h1"
      >
        カレンダー
      </Typography>
      <IconButton size="small" onClick={setPrevMonth}>
        <ArrowBackIosNew />
      </IconButton>
      <DatePicker
        value={month}
        openTo="month"
        views={['year', 'month']}
        onChange={(params) => setMonth(params)}
        renderInput={(params) => <TextField {...params} />}
      />
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  );
};
