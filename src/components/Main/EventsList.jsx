import styles from '..//..//componentStyles/EventList.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeEventList} from '../../reduxFiles/actions/changePageStateAction';
import Event from './Event';
import {Button} from '@mui/material';
import stylesTitle from '..//..//componentStyles/TitleStyle.css';
import Search from '..//Search';
import {getEvents} from '../../firebaseFiles/services/eventsService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Events() {
    // const events = useSelector(state => state.events);
    const [events, setEvents] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    const isCollapced = useSelector(
        state => state.pageState.eventListCollapced
    );
    let numEvents = events.length;
    const [renderLastEvent, setRenderLastEvent] = useState(3);
    const eventsRender = events.slice(renderFirstEvent, renderLastEvent);
    const dispatch = useDispatch();

    useEffect(
        () =>
            getEvents().then(data => {
                setEvents(data);
                // setIsLoaded(true);
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
            <div className="searchBlock">
                <Search />
            </div>
            <div className="d-grid  m-3">
                <Button
                    variant="contained"
                    type="button"
                    // className="btn btn-secondary "
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
