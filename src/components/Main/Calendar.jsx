import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>
  );
}