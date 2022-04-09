import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {homePage} from '../../../../utils/constants';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker'
import Calendar from '..//..//Calendar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
// import Place from '..//..//Place';

export default function CreateEvent() {
    const dateNow = new Date();
    console.log(dateNow);
    // const [dateNow, setDateNow] = useState(new Date().getMinutes());
    const [eventId, setEventId] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [timeStart, setTimeStart] = useState(dateNow);
    const [timeEnd, setTimeEnd] = useState(dateNow);
    const [price, setPrice] = useState('');
    const [totalSpace, setTotalSpace] = useState('');
    const [preview, setPreview] = useState('');
    const [description, setDescription] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');  //nafig
    const [difficulty, setDifficulty] = useState(''); //nafig
    const [meetingPoint, setMeetingPoint] = useState(''); //nafig
    const navigate = useNavigate();

    const handleTimeStart = time => {
        try {
            setTimeStart(time);
        } catch {
            setTimeStart('');
        }
    };

    const handleTimeEnd = time => {
        try {
            setTimeEnd(time);
        } catch {
            setTimeEnd('');
        }
    };

    return (
        <div className='createEventForm'>
            <p>CreateEvent</p>
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
                   
                   <Calendar />

                   {/* <Place /> */}

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            label="Start time"
                            ampm={false}
                            value={timeStart}
                            onChange={handleTimeStart}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    {/* <TextField
                        required
                        id="standard-required"
                        label="Начало"
                        variant="standard"
                        value={timeStart}
                        onChange={e => setTimeStart(e.target.value)}
                    /> */}
                    {/* <TextField
                        required
                        id="standard-required"
                        label="Окончание"
                        variant="standard"
                        value={timeEnd}
                        onChange={e => setTimeEnd(e.target.value)}
                    /> */}

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            label="End time"
                            ampm={false}
                            value={timeEnd}
                            onChange={handleTimeEnd}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <TextareaAutosize
                        aria-label="Preview"
                        minRows={3}
                        placeholder="Preview"
                        className="createTextField"
                        value={preview}
                        onChange={e => setPreview(e.target.value)}
                    />

                    <TextareaAutosize
                        aria-label="Description"
                        minRows={6}
                        placeholder="Description"
                        className="createTextField"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <TextField
                        required
                        id="standard-required"
                        label="Стоимость"
                        variant="standard"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
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

                    <Button disabled={false} variant="contained" type="button" onClick={() => navigate(`../${homePage}/`)}>
                        Создать событие
                    </Button>
                </Box>
            </div>
        </div>
    );
}
