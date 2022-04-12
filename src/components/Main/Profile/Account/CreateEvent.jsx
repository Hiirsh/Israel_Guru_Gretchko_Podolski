import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
// import {homePage} from '../../../../utils/constants';
// import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import Calendar from '..//..//Calendar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
// import Place from '..//..//Place';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {updateEvent} from '../../../../firebaseFiles/services/eventsService';
import {v4 as uuidv4} from 'uuid';
import {useSelector} from 'react-redux';
import {Map} from '..//..//..//..//GoogleMap';
import {useJsApiLoader} from '@react-google-maps/api';
import {API_KEY_MAPS} from '../../../../utils/constants';

export default function CreateEvent(props) {
    const navigate = useNavigate();
    const guide = useSelector(state => state.userId);
    // const [eventId, setEventId] = useState('');
    const [place, setPlace] = useState(props.place || '');
    const [title, setTitle] = useState(props.title || '');
    const [timeStart, setTimeStart] = useState(props.timeStart || new Date());
    const [timeEnd, setTimeEnd] = useState(props.timeEnd || new Date());
    const [price, setPrice] = useState(props.price || '');
    const [totalSpace, setTotalSpace] = useState(props.totalSpace || '');
    const [preview, setPreview] = useState(props.preview || '');
    const [description, setDescription] = useState(props.description || '');
    const [additionalInfo, setAdditionalInfo] = useState(
        props.additionalInfo || ''
    ); //nafig
    const [difficulty, setDifficulty] = useState(props.difficulty || ''); //nafig
    const [meetingPoint, setMeetingPoint] = useState(props.meetingPoint || ''); //nafig

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

    const handleCreateEvent = () => {
        const id = uuidv4();
        updateEvent({
            id,
            guide,
            title,
            place,
            timeStart,
            timeEnd,
            price,
            totalSpace,
            preview,
            description,
            additionalInfo,
            difficulty,
            meetingPoint,
            participants: [],
        });
    };

    const defaultCenter = {
        lat: -3.745,
        lng: -38.523,
    };

    const libraries = ['places'];

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY_MAPS,
        libraries,
    });

    return (
        <div className="createEventForm">
            <div>
                {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
            </div>
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
                        label="Название экскурсии"
                        variant="standard"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
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
                            // onBlur={handleTimeStart || ''}
                            onChange={handleTimeStart}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>
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
                        placeholder="Краткое описание"
                        className="createTextField"
                        value={preview}
                        onChange={e => setPreview(e.target.value)}
                    />
                    <TextareaAutosize
                        aria-label="Description"
                        minRows={6}
                        placeholder="Описание"
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
                    <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                        <InputLabel id="demo-simple-select-standard-label">
                            Сложность
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={difficulty}
                            onChange={e => setDifficulty(e.target.value)}
                            label="Сложность"
                        >
                            <MenuItem value={'Турист'}>Турист</MenuItem>
                            <MenuItem value={'Местный'}>Местный</MenuItem>
                            <MenuItem value={'Гуру'}>Гуру</MenuItem>
                        </Select>
                    </FormControl>
                    <TextareaAutosize
                        aria-label="Description"
                        minRows={3}
                        placeholder="meetingPoint"
                        className="createTextField"
                        value={meetingPoint}
                        onChange={e => setMeetingPoint(e.target.value)}
                    />
                    <TextareaAutosize
                        aria-label="Description"
                        minRows={3}
                        placeholder="additionalInfo"
                        className="createTextField"
                        value={additionalInfo}
                        onChange={e => setAdditionalInfo(e.target.value)}
                    />
                    <Button
                        disabled={false}
                        variant="contained"
                        type="button"
                        onClick={
                            handleCreateEvent /* navigate(`../${homePage}/`) */
                        }
                    >
                        Создать событие
                    </Button>
                </Box>
            </div>
        </div>
    );
}
