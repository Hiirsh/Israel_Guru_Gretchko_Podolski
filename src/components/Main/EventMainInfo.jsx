import React from 'react';

export default function EventMainInfo(props) {
    const ev = props.ev;
    return (
        <div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2">
            <h3 className="d-flex align-items-center">{`${ev.date}`}</h3>
            <div>
                <h4>Осталось мест: {`${ev.place}`}</h4>{' '}
                <h4>Цена:{`${ev.price}`} NIS</h4>
            </div>
            <div>
                <h4>{`${ev.timeStart}-${ev.timeEnd}`}</h4>
                <h4>Осталось мест: {`${ev.freeSpace}`}</h4>
            </div>
        </div>
    );
}
