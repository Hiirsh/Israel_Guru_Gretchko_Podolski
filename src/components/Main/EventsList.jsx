import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeEventList} from '../../reduxFiles/actions/changePageStateAction';
import Event from './Event';
import {Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
// import Search from '..//Search';
import {getEvents} from '../../firebaseFiles/services/eventsService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from '..//..//componentStyles/EventList.css';
import stylesTitle from '..//..//componentStyles/TitleStyle.css';
import TextField from '@mui/material/TextField';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

export default function Events() {
    const [searchDate, setSearchDate] = useState([null, null]);
    const [searchText, setSearchText] = useState('');
    const [searchPlace, setSearchPlace] = useState('');
    const [searchDifficulty, setSearchDifficulty] = useState('Турист');
    const [events, setEvents] = useState([]);
    const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    const isCollapced = useSelector(
        state => state.pageState.eventListCollapced
    );
    let numEvents = events.length;
    const [renderLastEvent, setRenderLastEvent] = useState(3);
    let eventsRender = events.slice(renderFirstEvent, renderLastEvent);
    const dispatch = useDispatch();

    const handleSearch = () => {
        // eventsRender.filter((ev)=>{if (searchDate[0]) return ev.timeStart>=searchDate[1]&&
        // if(searchDate[1])return ev.timeStart>=searchDate[1]})
    };
    useEffect(
        () =>
            getEvents().then(data => {
                setEvents(data);
                setRenderLastEvent(3);
                dispatch(changeEventList());
            }),
        []
    );
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
                        {eventsRender.map((item, index) => (
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
        <div>
            <div className="search">
                <div>
                    <div>Поиск</div>
                    {/* <Box
                        className="entryForm"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1, width: '100%'},
                        }}
                        noValidate
                        autoComplete="off"
                    > */}
                    <TextField
                        required
                        id="standard-required"
                        label="Название, гид, другое"
                        variant="standard"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                    {/* </Box> */}
                </div>
                <div>
                    <div>Дата</div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="Check-in"
                            endText="Check-out"
                            value={searchDate}
                            inputFormat="dd/MM/yyyy"
                            onChange={newValue => {
                                setSearchDate(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{mx: 2}}> to </Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </div>
                <div>
                    <div>Место</div>
                    <TextField
                        required
                        id="standard-required"
                        label=" "
                        variant="standard"
                        value={searchPlace}
                        onChange={e => setSearchPlace(e.target.value)}
                    />
                </div>
                <div>
                    <div>Сложность</div>
                    <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                        <InputLabel id="demo-simple-select-standard-label">
                            Сложность
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={searchDifficulty}
                            onChange={e => setSearchDifficulty(e.target.value)}
                            // label="Сложность"
                        >
                            <MenuItem value={'Турист'}>Турист</MenuItem>
                            <MenuItem value={'Местный'}>Местный</MenuItem>
                            <MenuItem value={'Гуру'}>Гуру</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="d-grid  m-3">
                <Button
                    variant="contained"
                    type="button"
                    // className="btn btn-secondary "
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </div>
            {renderEvents()}
            <div className="d-grid gap-2 m-3">
                <Button
                    variant="contained"
                    type="button"
                    // className="btn btn-secondary "
                    onClick={e => {
                        e.preventDefault();
                        setRenderLastEvent(!isCollapced ? 3 : numEvents);
                        dispatch(changeEventList());
                    }}
                >
                    {`${isCollapced ? 'Show all' : 'Hide'}`}
                </Button>
            </div>
        </div>
    );
}
