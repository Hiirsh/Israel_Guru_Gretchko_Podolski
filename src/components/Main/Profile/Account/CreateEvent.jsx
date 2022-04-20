import React, {useCallback, useEffect, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import Calendar from '..//..//Calendar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
    addEventToGuide,
    updateEvent,
} from '../../../../firebaseFiles/services/eventsService';
import {v4 as uuidv4} from 'uuid';
import {useJsApiLoader} from '@react-google-maps/api';
import Map, {MODES} from '../../../../GoogleMap/Map';
import s from '../../../../componentStyles/CreateEvent.css';
import {getBrowserLocation} from '../../../../utils/geo.js';
import Autocomplete from '../../../../GoogleMap/Autocomplete';
import {libraries, defaultCenter} from '../../../../utils/geo.js';
const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export default function CreateEvent(props) {
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
    );
    const [difficulty, setDifficulty] = useState(props.difficulty || '');
    const [meetingPoint, setMeetingPoint] = useState(props.meetingPoint || '');
    const [center, setCenter] = useState(defaultCenter);
    // const [mode, setMode] = useState(MODES.SET_MARKER);
    const [marker, setMarker] = useState(center);

    const userData = JSON.parse(localStorage.getItem('userData'));
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

    const handleCreateEvent = (/* isNewEvent */) => {
        const id = uuidv4();
        if (userData.events === undefined) userData.events = [id];
        else userData.events.push(id);
        localStorage.setItem('userData', JSON.stringify(userData));
        addEventToGuide(userData.userId, id);
        updateEvent({
            id,
            guideId: userData.userId,
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

    /*     const toggleModeHandler = useCallback(
        e => {
            e.preventDefault();
            switch (mode) {
                case MODES.MOVE:
                    setMode(MODES.SET_MARKER);
                    break;
                case MODES.SET_MARKER:
                    setMode(MODES.MOVE);
                    break;
                default:
                    setMode(MODES.MOVE);
            }
            console.log(mode);
        },
        [mode]
    ); */

    const onMarkerAdd = useCallback(
        coordinates => setMarker(coordinates),
        [marker]
    );

    const clear = useCallback(e => {
        e.preventDefault();
        setMarker('');
    }, []);

    useEffect(() => {
        getBrowserLocation()
            .then(currentLocation => setCenter(currentLocation))
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
                placeholder="meetingPoint"
                className="createTextField"
                value={meetingPoint}
                onChange={e => setMeetingPoint(e.target.value)}
                style={{width: '100%'}}
            />
            <div>
                <div className={s.addressContainer}>
                    <Autocomplete
                        isLoaded={isLoaded}
                        onSelect={onPlaceSelect}
                    />
                    {/* <button
                                className={s.modeToggle}
                                onClick={toggleModeHandler}
                            >
                                Set markers
                            </button> */}
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
            </div>
            <TextareaAutosize
                aria-label="Description"
                minRows={3}
                placeholder="additionalInfo"
                className="createTextField"
                value={additionalInfo}
                onChange={e => setAdditionalInfo(e.target.value)}
                style={{width: '100%'}}
            />
            <Button
                disabled={false}
                variant="contained"
                type="button"
                onClick={handleCreateEvent /* navigate(`../${homePage}/`) */}
            >
                Создать событие
            </Button>
        </Box>
    );
}
