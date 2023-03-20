import { AddRecordDialog } from './presentation';

export const ContainerAddRecordDialog = ({ dialog, toggleAddRecordDialog }) => {
  return (
    <AddRecordDialog
      dialog={dialog}
      toggleAddRecordDialog={toggleAddRecordDialog}
    />
  );
};
