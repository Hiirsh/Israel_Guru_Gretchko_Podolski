import React, {useCallback, useEffect, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
// import Calendar from '..//..//Calendar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
    addEventToGuide,
    deleteEvent,
    updateEvent,
} from '../../../../firebaseFiles/services/eventsService';
import {v4 as uuidv4} from 'uuid';
import {useJsApiLoader} from '@react-google-maps/api';
import Map, {MODES} from '../../../../GoogleMap/Map';
import s from '../../../../componentStyles/CreateEvent.css';
import {getBrowserLocation} from '../../../../utils/geo.js';
import Autocomplete from '../../../../GoogleMap/Autocomplete';
import {libraries, defaultCenter} from '../../../../utils/geo.js';
import {DatePicker} from '@mui/lab';
const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export default function CreateEvent(props) {
    const isEditing = !!Object.keys(props).length;
    const editEvent = props.event;
    const [place, setPlace] = useState(isEditing ? editEvent.place || '' : '');
    const [title, setTitle] = useState(isEditing ? editEvent.title || '' : '');
    const [eventDate, setEventDate] = useState(
        isEditing
            ? new Date(editEvent.timeStart.seconds * 1000) || new Date()
            : new Date()
    );
    const [timeStart, setTimeStart] = useState(
        isEditing
            ? new Date(editEvent.timeStart.seconds * 1000) || new Date()
            : new Date()
    );
    const [timeEnd, setTimeEnd] = useState(
        isEditing
            ? new Date(editEvent.timeEnd.seconds * 1000) || new Date()
            : new Date()
    );
    const [price, setPrice] = useState(isEditing ? editEvent.price || '' : '');
    const [totalSpace, setTotalSpace] = useState(
        isEditing ? editEvent.totalSpace : ''
    );
    const [preview, setPreview] = useState(
        isEditing ? editEvent.preview || '' : ''
    );
    const [description, setDescription] = useState(
        isEditing ? editEvent.description || '' : ''
    );
    const [additionalInfo, setAdditionalInfo] = useState(
        isEditing ? editEvent.additionalInfo || '' : ''
    );
    const [difficulty, setDifficulty] = useState(
        isEditing ? editEvent.difficulty || '' : ''
    );
    const [meetingPoint, setMeetingPoint] = useState(
        isEditing ? editEvent.meetingPoint || '' : ''
    );
    const [marker, setMarker] = useState(
        isEditing ? editEvent.marker || undefined : undefined
    );
    const [center, setCenter] = useState(defaultCenter);

    const userData = JSON.parse(localStorage.getItem('userData'));

    const handleEventDate = time => {
        try {
            setEventDate(time);
        } catch {
            setEventDate('');
        }
    };
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
        const id = isEditing ? editEvent.id : uuidv4();
        if (!isEditing)
            if (userData.events === undefined) userData.events = [id];
            else userData.events.push(id);
        localStorage.setItem('userData', JSON.stringify(userData));
        addEventToGuide(userData.userId, id);
        if (isEditing) deleteEvent(id);
        updateEvent({
            id,
            guideId: userData.userId,
            title,
            place,
            timeStart: new Date(
                eventDate.getFullYear(),
                eventDate.getMonth(),
                eventDate.getDate(),
                timeStart.getHours(),
                timeStart.getMinutes()
            ),
            timeEnd: new Date(
                eventDate.getFullYear(),
                eventDate.getMonth(),
                eventDate.getDate(),
                timeEnd.getHours(),
                timeEnd.getMinutes()
            ),
            price,
            totalSpace,
            preview,
            description,
            additionalInfo,
            difficulty,
            meetingPoint,
            participants: [],
            marker,
        });
    };

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAPS_API_KEY,
        libraries,
    });

    const onPlaceSelect = useCallback(coordinates => {
        setCenter(coordinates);
    }, []);

    const onMarkerAdd = useCallback(
        coordinates => setMarker(coordinates),
        [marker]
    );

    const clear = useCallback(e => {
        e.preventDefault();
        setMarker(undefined);
    }, []);

    useEffect(() => {
        getBrowserLocation()
            .then(currentLocation => {
                setCenter(currentLocation);
            })
            .catch(defaultLocation => setCenter(defaultLocation));
    }, []);
    return (
        <Box
            className="entryForm"
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '100%'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="standard-required"
                label="Название экскурсии"
                variant="standard"
                fullWidth={true}
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Event data"
                    inputFormat="dd/MM/yyyy" //поменял формат даты
                    value={eventDate}
                    onChange={handleEventDate}
                    renderInput={params => <TextField {...params} />}
                />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Start time"
                    ampm={false}
                    value={timeStart}
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
                style={{width: '100%'}}
            />
            <TextareaAutosize
                aria-label="Description"
                minRows={6}
                placeholder="Описание"
                className="createTextField"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{width: '100%'}}
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
                placeholder="Место встречи"
                className="createTextField"
                value={meetingPoint}
                onChange={e => setMeetingPoint(e.target.value)}
                style={{width: '100%'}}
            />
        
                <div className="Autocomplite_root__IVhsz">
                    <Autocomplete
                        placeholder="Куда пойдете?"
                        className="Autocomplite_input__kkeXW"
                        isLoaded={isLoaded}
                        onSelect={onPlaceSelect}
                    />
                    <button className={s.modeToggle} onClick={clear}>
                        Убрать метку
                    </button>
                </div>
                {isLoaded ? (
                    <Map
                        center={center}
                        mode={/* mode */ MODES.SET_MARKER}
                        marker={marker}
                        onMarkerAdd={onMarkerAdd}
                    />
                ) : (
                    <h1>Loading...</h1>
                )}

            <TextareaAutosize
                aria-label="Description"
                minRows={3}
                placeholder="Дополнительная информация"
                className="createTextField"
                value={additionalInfo}
                onChange={e => setAdditionalInfo(e.target.value)}
                style={{width: '100%', marginTop: '7em'}}
                />
            <div className="btnCreate">
            <Button
                disabled={false}
                variant="contained"
                type="button"
                onClick={handleCreateEvent}
                style={{width: '18em', display: 'flex',  textAlign: 'center'}}
            >
                {isEditing ? 'Редактировать событие' : 'Создать событие'}
            </Button>
            </div>
        </Box>
    );
}