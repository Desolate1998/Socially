import { useAlert } from '../../Contexts/AlertContext';
import { Alert, Snackbar } from '@mui/material';

export const Notification = () => {
  const {alertType,message,open,closedEvent} = useAlert();

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={closedEvent}>
    <Alert severity={alertType} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
  )
}
