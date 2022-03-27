import React from 'react';
import {useSelector} from 'react-redux';
import Event from './Event';
import EventMainInfo from './EventMainInfo';
import styles from '..//..//componentStyles/Main.css';
import style from '..//..//componentStyles/Event.css';

export default function EventPage() {
    const eventId = Number(window.location.pathname.replace('/event/', '')); //Это ШЭДЭВР!!!!!!
    const {events} = useSelector(state => state.events);
    const eventExt = events.find(ev => ev.id === eventId);

    return (
        <div className="eventAndMainInfo">
            <Event ev={eventExt} extended={true} />
            <EventMainInfo ev={eventExt} />
        </div>
    );
}

{
    /* <h1
className="text-center m-2 eventTitle"
href="*"
>{`${eventExt.title}`}</h1>
<div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2">
<h3 className="d-flex align-items-center">{`${eventExt.date}`}</h3>
<div>
    <h4>Осталось мест: {`${eventExt.place}`}</h4>{' '}
    <h4>Цена:{`${eventExt.price}`} NIS</h4>
</div>
<div>
    <h4>{`${eventExt.timeStart}-${eventExt.timeEnd}`}</h4>
    <h4>Осталось мест: {`${eventExt.freeSpace}`}</h4>
</div>
</div>
<div className="text-left m-2">{`${eventExt.shortDescription}`}</div>
<div className="text-left m-2">{`${eventExt.fullDescription}`}</div> */
}
