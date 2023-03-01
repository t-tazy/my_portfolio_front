import dayjs from 'dayjs';

// カレンダーは7x5
// 日曜日スタートとする
export const createCalendar = () => {
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
