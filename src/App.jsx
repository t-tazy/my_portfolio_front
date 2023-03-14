import { ContainerCalendarBoard } from './components/CalendarBoard/container';
import { ContainerNavigation } from './components/Navigation/container';

export const App = () => {
  return (
    <div className="App">
      <ContainerNavigation />
      <ContainerCalendarBoard />
    </div>
  );
};
