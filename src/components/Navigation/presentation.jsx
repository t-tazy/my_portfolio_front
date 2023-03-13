import { ArrowBackIosNew, ArrowForwardIos, Dehaze } from '@mui/icons-material';
import { IconButton, Toolbar, Typography } from '@mui/material';

export const Navigation = ({ setPrevMonth, setNextMonth }) => {
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
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  );
};
