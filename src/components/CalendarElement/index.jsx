import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import './style.css';

export const CalendarElement = ({ day }) => {
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? 'M月D日' : 'D';

  const today = dayjs();
  // 当日はどうかを文字列に変換して比較
  const compareFormat = 'YYYYMMDD';
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  // 当月以外をグレーダウン
  // 0 (Jan) to 11 (Dec)
  const isCurrentMonth = day.month() === today.month();

  return (
    <div className="element">
      <Typography
        className="date"
        color={isCurrentMonth ? 'textPrimary' : 'textSecondary'}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? 'today' : ''}>{day.format(format)}</span>
      </Typography>
    </div>
  );
};
