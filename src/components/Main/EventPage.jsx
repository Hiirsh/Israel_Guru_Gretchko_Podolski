import React from 'react';
import {useSelector} from 'react-redux';
import Event from './Event';
import EventMainInfo from './EventMainInfo';
import styles from '..//..//componentStyles/Main.css';
import style from '..//..//componentStyles/Event.css';

export default function EventPage() {
    const eventId = Number(window.location.pathname.replace('/event/', ''));
    const {events} = useSelector(state => state.events);
    const eventExt = events.find(ev => ev.id === eventId);

    return (
        <div className="eventAndMainInfo">
            <Event ev={eventExt} extended={true} />
            <EventMainInfo ev={eventExt} />
        </div>
    );
}
