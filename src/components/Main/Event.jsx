import React from 'react';
import {useNavigate} from 'react-router-dom';
import {eventPage} from '../../utils/constants';
import EventMainInfo from './EventMainInfo';
import style from '..//..//componentStyles/Event.css';

export default function EventInList(props) {
    const navigate = useNavigate();
    // console.log(props.ev);
    const ev = props.ev;
    const isExtended = props.extended;
    return (
        <div>
            <h1
                className="eventTitle"
                onClick={() => navigate(`/${eventPage}/${ev.id}`)}
            >{`${ev.title}`}</h1>
        
            <EventMainInfo ev={ev} />
            <div className="text-left m-2"><p>{`${ev.preview}`}</p></div>
            <div className="text-left m-2">
                <p>{`${isExtended ? ev.description : ''}`}</p>
            </div>
        </div>
    );
}
