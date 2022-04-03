import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import styles from '..//..//componentStyles/Search.css';

export default function Calendar() {
    const [value, setValue] = React.useState(Date.now());
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Event data"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }

// function Calendar() {

// return (
// <LocalizationProvider dateAdapter={AdapterDateFns}>
//   <DatePicker
//     label="Basic example"
//     value={value}
//     onChange={(newValue) => {
//       setValue(newValue);
//     }}
//     renderInput={(params) => <TextField {...params} />}
//   />
// </LocalizationProvider>
// )
// }

// export default Calendar;