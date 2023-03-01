import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

dayjs.locale('ja');

// カレンダーは7x5
// 日曜日スタートとする
const createCalendar = () => {
  const firstDay = dayjs().startOf('month'); // 今月の最初の日を取得
  const firstDayIndex = firstDay.day(); // 0 (Sunday) to 6 (Saturday)
  return new Array(35).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    // addは指定した時間が追加されたDay.jsオブジェクトを返す
    // マイナスの場合、先月を表す
    const day = firstDay.add(diffFromFirstDay, 'day');
    return day;
  });
};
import { CalendarElement } from '../CalendarElement';

const calendarArray = createCalendar();

export const CalendarBoard = () => (
  <Grid2 container className="grid" columns={7} spacing={0}>
    {calendarArray.map((c) => (
      <Grid2 key={c.toISOString()} xs={1}>
        <CalendarElement>{c.format('D')}</CalendarElement>
      </Grid2>
    ))}
  </Grid2>
);
