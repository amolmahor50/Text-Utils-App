import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { IoIosClose } from "react-icons/io";
import { useContext, useState } from 'react';
import { TextContext } from '../../ContextAPI/TextContext';

export default function SimpleSnackbar() {
  const { alertMsg, setAlertMsg} = useContext(TextContext);

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setAlertMsg(null)}
    >
      <IoIosClose size={30} />
    </IconButton>
  );

  return (
    <div>
      {alertMsg && <div>
        <Snackbar
          open={alertMsg != null}
          autoHideDuration={10000}
          message={alertMsg}
          action={action}
        /></div>}
    </div>
  );
}
