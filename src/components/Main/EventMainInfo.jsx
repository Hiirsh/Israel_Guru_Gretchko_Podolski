import React from 'react';
import styles from '..//..//componentStyles/Event.css'

export default function EventMainInfo(props) {
    const ev = props.ev;
    return (
        <div className="eventMainInfo">
            {/* <div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2"></div> */}
            <h3 className="eventData">{`${ev.date}`}</h3>
            <div className="costTicketsPlace">
                <h4>Место: {`${ev.place}`}</h4>{' '}
                <h4>Осталось мест: {`${ev.freeSpace}`}</h4>
                <h4>Цена:{`${ev.price}`} NIS</h4>
            </div>
            <div className="timeAndButton">
                <h4>{`${ev.timeStart}-${ev.timeEnd}`}</h4>
                <button className="go">Я пойду</button>
            </div>
        </div>
    );
}
