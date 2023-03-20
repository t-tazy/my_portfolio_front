import { Dialog, DialogContent } from '@mui/material';

export const AddRecordDialog = ({ dialog, toggleAddRecordDialog }) => {
  return (
    <Dialog open={dialog.isOpen} onClose={toggleAddRecordDialog}>
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};
