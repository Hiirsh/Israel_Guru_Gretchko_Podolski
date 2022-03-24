import React from 'react';
import {useSelector} from 'react-redux';

export default function EventExtended(props) {
    const {events} = useSelector(state => state.events);
    console.log(events);
    // const eventExt = events.find(ev => ev.id === Number(props.id));
    const eventExt = events[0];
    console.log(eventExt);

    return (
        <div>
            <h1
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
            <div className="text-left m-2">{`${eventExt.shortDesctiption}`}</div>
            <div className="text-left m-2">{`${eventExt.fullDesctiption}`}</div>
        </div>
    );
}
