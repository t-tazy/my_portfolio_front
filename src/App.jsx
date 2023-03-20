import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ContainerAddRecordDialog } from './components/AddRecordDialog/container';
import { ContainerCalendarBoard } from './components/CalendarBoard/container';
import { ContainerNavigation } from './components/Navigation/container';
import { URL } from './const';

export const App = () => {
  const [addRecordDialog, setAddRecordDialog] = useState({
    form: {},
    isOpen: false,
  });
  const [exercises, setExercises] = useState();
  const [cookies] = useCookies();

  // Dialogを開閉する
  const toggleDialog = () => {
    setAddRecordDialog({
      ...addRecordDialog,
      isOpen: !addRecordDialog.isOpen,
    });
  };

  // エクササイズ一覧を取得
  const fetchExercise = async () => {
    const rsp = await fetch(`${URL}/exercises`, {
      headers: { authorization: `Bearer ${cookies.token}` },
    });
    const data = await rsp.json();
    setExercises(data.map((val) => val.title))
    console.log(data);
  };

  useEffect(() => {
    console.log('mount');
    fetchExercise();
  }, []);

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
