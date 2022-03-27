import React from 'react';
import {useNavigate} from 'react-router-dom';
import {eventPage} from '../../utils/constants';
import EventMainInfo from './EventMainInfo';
// import style from '..//..//componentStyles/Event.css';

export default function Event(props) {
    const navigate = useNavigate();
    const ev = props.ev;
    const isExtended = props.extended;
    return (
        <div>
            <h1
                className="text-center m-2 eventTitle"
                onClick={() => navigate(`/${eventPage}/${ev.id}`)}
            >{`${ev.title}`}</h1>

            <EventMainInfo ev={ev} />
            <div className="text-left m-2">{`${ev.preview}`}</div>
            <div className="text-left m-2">
                {`${isExtended ? ev.description : ''}`}
            </div>
        </div>
    );
}
{
    /* <div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2">
                <h3 className="d-flex align-items-center">{`${ev.date}`}</h3>
                <div>
                    <h4>Осталось мест: {`${ev.place}`}</h4>{' '}
                    <h4>Цена:{`${ev.price}`} NIS</h4>
                </div>
                <div>
                    <h4>{`${ev.timeStart}-${ev.timeEnd}`}</h4>
                    <h4>Осталось мест: {`${ev.freeSpace}`}</h4>
                </div>
            </div> */
}
