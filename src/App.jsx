import { useState } from 'react';
import { ContainerAddRecordDialog } from './components/AddRecordDialog/container';
import { ContainerCalendarBoard } from './components/CalendarBoard/container';
import { ContainerNavigation } from './components/Navigation/container';

export const App = () => {
  const [addRecordDialog, setAddRecordDialog] = useState({
    form: {},
    isOpen: false,
  });

  // Dialogを開閉する
  const toggleDialog = () => {
    setAddRecordDialog({
      ...addRecordDialog,
      isOpen: !addRecordDialog.isOpen,
    });
  };

  return (
    <div className="App">
      <ContainerNavigation />
      <ContainerCalendarBoard toggleAddRecordDialog={toggleDialog} />
      <ContainerAddRecordDialog
        dialog={addRecordDialog}
        toggleAddRecordDialog={toggleDialog}
      />
    </div>
  );
};
