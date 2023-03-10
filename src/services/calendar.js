import dayjs from 'dayjs';

// カレンダーは7x5
// 日曜日スタートとする
export const createCalendar = (calendarState) => {
  const firstDay = getMonth(calendarState); // 今月の最初の日を取得
  const firstDayIndex = firstDay.day(); // 0 (Sunday) to 6 (Saturday)
  return new Array(35).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    // addは指定した時間が追加されたDay.jsオブジェクトを返す
    // マイナスの場合、先月を表す
    const day = firstDay.add(diffFromFirstDay, 'day');
    return day;
  });
};

// 当日はどうかを文字列に変換して比較
// d1, d2はdayjsのインスタンス
export const isToday = (d1, d2) => {
  const compareFormat = 'YYYYMMDD';
  return d1.format(compareFormat) === d2.format(compareFormat);
};

// 当月かどうか判定
// 0 (Jan) to 11 (Dec)
export const isCurrentMonth = (m1, m2) => {
  const compareFormat = 'YYYYMM';
  return m1.format(compareFormat) === m2.format(compareFormat);
};

// 月初めか判定
export const isFirstDay = (day) => day.date() === 1;

// calendar stateを受け取り、その年月のdayjsインスタンスを返す
export const getMonth = ({ year, month }) => dayjs(`${year}-${month}`);
