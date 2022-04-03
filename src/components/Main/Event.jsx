import React from 'react';
import {useNavigate} from 'react-router-dom';
import {eventPage} from '../../utils/constants';
import EventMainInfo from './EventMainInfo';
import tour1 from '..//..//images/tour1.jpg';

import style from '..//..//componentStyles/TitleStyle.css';

export default function Event(props) {
    const navigate = useNavigate();
    const ev = props.ev;
    const isExtended = props.extended;

    return (
        <>
            <div 
            // className="img_title_location"
            className={`${isExtended ? ("usual") : ("img_title_location")}`}
            >
            <div>
                {isExtended ? (
                <img className="eventImage" src={`${tour1}`}/>
                // <img className="eventImage" src={`${ev.image}`}/>
            ) : (
                <img
                    className="imageActive"
                    onClick={() => navigate(`/${eventPage}/${ev.id}`)}
                src={`${tour1}`}/>
                // src={`${ev.image}`}/>
            )} </div>
            
            <div>{isExtended ? (
                <h1 className="eventTitle ">{`${ev.title}`}</h1>
            ) : (
                <h1
                    className="eventTitle titleActive"
                    onClick={() => navigate(`/${eventPage}/${ev.id}`)}
                >{`${ev.title}`}</h1>
            )}</div>
            </div>
            <>
            <EventMainInfo ev={ev} />
            <div className="text-left m-2">
                <p>{`${ev.preview}`}</p>
            </div>
            <div className="text-left m-2">
                <p>{`${isExtended ? ev.description : ''}`}</p>
            </div>
            </>
        
        </>
    );
}

