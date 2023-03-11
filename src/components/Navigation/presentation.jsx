import { ArrowBackIosNew, ArrowForwardIos, Dehaze } from '@mui/icons-material';
import { IconButton, Toolbar, Typography } from '@mui/material';

export const Navigation = () => {
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
      <IconButton size="small">
        <ArrowBackIosNew />
      </IconButton>
      <IconButton size="small">
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  );
};
