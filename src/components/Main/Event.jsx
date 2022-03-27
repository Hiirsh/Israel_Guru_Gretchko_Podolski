import React from 'react';
import {useNavigate} from 'react-router-dom';
import {eventPage, homePage} from '../../utils/constants';
import EventMainInfo from './EventMainInfo';
import style from '..//..//componentStyles/Event.css';

export default function Event(props) {
    const navigate = useNavigate();
    const ev = props.ev;
    const isExtended = props.extended;
    return (
        <div>
            {isExtended ? (
                <h1 className="eventTitle ">{`${ev.title}`}</h1>
            ) : (
                <h1
                    className="eventTitle titleActive"
                    onClick={() => navigate(`/${eventPage}/${ev.id}`)}
                >{`${ev.title}`}</h1>
            )}
            <EventMainInfo ev={ev} />
            <div className="text-left m-2">
                <p>{`${ev.preview}`}</p>
            </div>
            <div className="text-left m-2">
                <p>{`${isExtended ? ev.description : ''}`}</p>
            </div>
        </div>
    );
}
