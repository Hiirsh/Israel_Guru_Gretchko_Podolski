import React, {useState} from 'react';

export default function Event(props) {
    return (
        <div>
            <h2>{`${props.title}`}</h2>
            <div className="d-flex flex-row justify-content-between ms-5 me-5 mt-2 mb-2">
                <h3 className="d-flex align-items-center">{`${props.date}`}</h3>
                <div>
                    <h4>{`${props.place}`}</h4> <h4>{`${props.price}`}</h4>
                </div>
                <div>
                    <h4>{`${props.timeStart}-${props.timeEnd}`}</h4>
                    <h4>{`${props.freeSpace}`}</h4>
                </div>
            </div>
            <div className="text-left">{`${props.shortDesctiption || ''}`}</div>
        </div>
    );
}
