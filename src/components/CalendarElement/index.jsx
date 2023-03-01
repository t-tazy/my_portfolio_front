import './style.css';

export const CalendarElement = ({ children }) => (
  <div className="element">
    <div className="date">{children}</div>
  </div>
);
