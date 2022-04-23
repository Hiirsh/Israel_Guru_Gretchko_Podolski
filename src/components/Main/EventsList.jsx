import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeEventList} from '../../reduxFiles/actions/changePageStateAction';
import Event from './Event';
import {Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {getEvents} from '../../firebaseFiles/services/eventsService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from '..//..//componentStyles/EventList.css';
import stylesTitle from '..//..//componentStyles/TitleStyle.css';
import stylesSearch from '..//..//componentStyles/Search.css';

import TextField from '@mui/material/TextField';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

export default function EventList() {
    const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    const [renderLastEvent, setRenderLastEvent] = useState(3);
    const [searchDate, setSearchDate] = useState([null, null]);
    const [searchText, setSearchText] = useState('');
    const [searchPlace, setSearchPlace] = useState('');
    const [searchDifficulty, setSearchDifficulty] = useState('');
    // const [searchDifficulty, setSearchDifficulty] = useState('Сложность');
    const [events, setEvents] = useState([]);
    const [eventsRender, setEventsRender] = useState([]);
    const [eventsFilter, setEventsFilter] = useState([]);
    const [flag, setFlag] = useState(false);

    const isCollapced = useSelector(
        state => state.pageState.eventListCollapced
    );

    let numEvents = events.length;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeEventList());
        getEventsToRender();
        filterEvents();
    }, [flag, searchDate, searchDifficulty, searchPlace, searchText]);

    const handleClickShow = e => {
        e.preventDefault();
        setRenderLastEvent(!isCollapced ? 3 : numEvents);
        setEventsRender(events.slice(renderFirstEvent, renderLastEvent));
        dispatch(changeEventList());
    };

    const filterEvents = () => {
        setEventsFilter(events);
        if (searchDate[0] !== null) {
            eventsRender.filter(
                item => new Date(item.timeStart.seconds * 1000) >= searchDate[0]
            );
            setEventsFilter(
                eventsRender.filter(
                    item =>
                        new Date(item.timeStart.seconds * 1000) >= searchDate[0]
                )
            );
        } else if (searchDate[1] !== null) {
            setEventsFilter(
                eventsRender.filter(
                    item =>
                        new Date(item.timeEnd.seconds * 1000) <= searchDate[0]
                )
            );
        } else if (searchText !== '') {
            setEventsFilter(
                eventsRender.filter(item =>
                    JSON.stringify(item)
                        .toLowerCase()
                        .includes(searchText.toLowerCase().trim())
                )
            );
        } else if (searchPlace !== '') {
            setEventsFilter(
                eventsRender.filter(item =>
                    item.place
                        .toLowerCase()
                        .includes(searchPlace.toLowerCase().trim())
                )
            );
        } else if (searchDifficulty !== '') {
            setEventsFilter(
                eventsRender.filter(item =>
                    item.difficulty.includes(searchDifficulty)
                )
            );
        } else setEventsFilter(eventsRender);
    };

    const getEventsToRender = () => {
        getEvents().then(data => {
            setEvents(data);
            setEventsRender(data);
            setFlag(true);
        });
    };

    function handleClickReset() {
        setSearchDate([null, null]);
        setSearchText('');
        setSearchPlace('');
        setSearchDifficulty('');
    }

    function renderEvents() {
        return (
            <div>
                {!events ? (
                    <div className="list-group">
                        <h1>Please Wait</h1>
                        <Box sx={{display: 'flex'}}>
                            <CircularProgress />
                        </Box>
                    </div>
                ) : (
                    <div className="list-group">
                        {eventsFilter.map((item, index) => (
                            <div className="eventInList" key={index}>
                                <Event ev={item} extended={false} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="sticky">
            <div className="searchBlock">
                <div className="searchInput">
                    <TextField
                        required
                        id="standard-required"
                        label="Название, гид, другое"
                        variant="standard"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                </div>
                <div className="searchCalendar">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="От"
                            endText="До"
                            value={searchDate}
                            inputFormat="dd/MM/yyyy"
                            onChange={newValue => {
                                setSearchDate(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{mx: 1}}> </Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </div>
                <div className="searchInput">
                    <TextField
                        required
                        id="standard-required"
                        placeholder="Место"
                        label="Место"
                        variant="standard"
                        value={searchPlace}
                        onChange={e => setSearchPlace(e.target.value)}
                    />
                </div>
                <div className="searchInput">
                    <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                        {/* <InputLabel id="demo-simple-select-standard-label">
                            Сложность
                        </InputLabel> */}
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={searchDifficulty}
                            onChange={e => setSearchDifficulty(e.target.value)}
                            label="Сложность"
                        >
                            <MenuItem value={'Сложность'} disabled>
                                Сложность
                            </MenuItem>
                            <MenuItem value={'Турист'}>Турист</MenuItem>
                            <MenuItem value={'Местный'}>Местный</MenuItem>
                            <MenuItem value={'Гуру'}>Гуру</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="btnSearch">
                    <Button
                        variant="contained"
                        type="button"
                        onClick={handleClickReset}
                    >
                        Сброс поиска
                    </Button>
                </div>
            </div>
            {renderEvents()}
            <div className="d-grid gap-2 m-3">
                <Button
                    variant="contained"
                    type="button"
                    onClick={e => {
                        handleClickShow(e);
                    }}
                >
                    {`${isCollapced ? 'Show all' : 'Hide'}`}
                </Button>
            </div>
        </div>
        /* </div> */
    );
}
