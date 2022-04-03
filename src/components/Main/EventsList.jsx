import styles from '..//..//componentStyles/EventList.css';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeEventList} from '../../reduxFiles/actions/changePageStateAction';
import Event from './Event';
import {Button} from '@mui/material';
import stylesTitle from '..//..//componentStyles/TitleStyle.css';
import Search from '..//Search';

export default function Events() {
    // const [isCollapced, setCollapse] = useState(true);
    // const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    // const [renderLastEvent, setRenderLastEvent] = useState(2);
    // const {events} = useSelector(state => state.events);
    // let numEvents = events.length;
    // const eventsRender = events.slice(renderFirstEvent, renderLastEvent);
    const {events} = useSelector(state => state.events);
    const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    const isCollapced = useSelector(
        state => state.pageState.eventListCollapced
    );
    let numEvents = events.length;
    const [renderLastEvent, setRenderLastEvent] = useState(
        isCollapced ? 3 : numEvents
    );
    const eventsRender = events.slice(renderFirstEvent, renderLastEvent);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="searchBlock"><Search/></div>
            <div className="d-grid  m-3">
                <Button
                    variant="contained"
                    type="button"
                    // className="btn btn-secondary "
                >
                    Search
                </Button>
            </div>
            <div className="list-group">
                {eventsRender.map((item, index) => (
                    <div className="eventInList" key={index}>
                        <Event ev={item} extended={false} />
                    </div>
                ))}
            </div>
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
