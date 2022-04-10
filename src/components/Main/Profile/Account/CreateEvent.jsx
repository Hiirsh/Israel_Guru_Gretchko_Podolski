import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {homePage} from '../../../../utils/constants';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

export default function CreateEvent() {
    // const dateNow = new Date();
    // console.log(dateNow);
    // const [dateNow, setDateNow] = useState(new Date().getMinutes());
    const [eventId, setEventId] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [timeStart, setTimeStart] = useState(new Date());
    const [timeEnd, setTimeEnd] = useState(new Date());
    const [price, setPrice] = useState('');
    const [totalSpace, setTotalSpace] = useState('');
    const [preview, setPreview] = useState('');
    const [description, setDescription] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [meetingPoint, setMeetingPoint] = useState('');
    const navigate = useNavigate();

    const handleTimeStart = time => {
        try {
            setTimeStart(time);
        } catch {
            setTimeStart('');
        }
    };
    return (
        <div>
            CreateEvent
            <div className="entryFormBox">
                <Box
                    className="entryForm"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        required
                        id="standard-required"
                        label="Место экскурсии"
                        variant="standard"
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Дата экскурсии"
                        variant="standard"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            label="Time"
                            ampm={false}
                            value={timeStart}
                            onBlur={handleTimeStart || ''}
                            onChange={e => console.log(e)}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <TextField
                        required
                        id="standard-required"
                        label="Начало"
                        variant="standard"
                        value={timeStart}
                        onChange={e => setTimeStart(e.target.value)}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Окончание"
                        variant="standard"
                        value={timeEnd}
                        onChange={e => setTimeEnd(e.target.value)}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Стоимость"
                        variant="standard"
                        value={price}
                        onChange={e => {
                            if (!isNaN(Number(e.target.value))) {
                                setPrice(e.target.value);
                            }
                        }}
                    />
                    <TextField
                        required
                        id="standard-required"
                        inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                        label="Всего мест"
                        variant="standard"
                        value={totalSpace}
                        onChange={e => {
                            if (!isNaN(Number(e.target.value))) {
                                setTotalSpace(e.target.value);
                            }
                        }}
                    />

                    <Button variant="contained" type="button">
                        Создать событите
                    </Button>
                </Box>
            </div>
        </div>
    );
}
