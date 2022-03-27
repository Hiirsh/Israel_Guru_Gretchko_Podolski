import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Event from './Event';
import styles from '..//..//componentStyles/EventList.css';

export default function Events() {
    const [isCollapced, setCollapse] = useState(true);
    const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    const [renderLastEvent, setRenderLastEvent] = useState(2);
    const {events} = useSelector(state => state.events);
    let numEvents = events.length;
    const eventsRender = events.slice(renderFirstEvent, renderLastEvent);

    return (
        <div>
            <div className="d-grid gap-2 m-3">
                <button type="button" className="btn btn-secondary ">
                    Search
                </button>
            </div>
            <div className="list-group">
                {eventsRender.map((item, index) => (
                    <div className="eventInList" key={index}>
                        <Event
                            ev={item}
                            extended={false}
                            // id={item.id}
                            // place={item.place}
                            // date={item.date}
                            // timeStart={item.timeStart}
                            // timeEnd={item.timeEnd}
                            // price={item.price}
                            // shortDescription={item.shortDescription}
                            // // fullDescription={item.fullDescription}
                            // additionalInfo={item.additionalInfo}
                            // difficulty={item.difficulty}
                            // meetingPoint={item.meetingPoint}
                            // key={index}
                            // title={item.title}
                            // freeSpace={item.freeSpace}
                            // shortDesctiption={item.shortDescription}
                        />
                    </div>
                ))}
            </div>
            <div className="d-grid gap-2 m-3">
                <button
                    type="button"
                    className="btn btn-secondary "
                    onClick={e => {
                        e.preventDefault();
                        setRenderLastEvent(!isCollapced ? 2 : numEvents);
                        setCollapse(!isCollapced);
                    }}
                >
                    {`${isCollapced ? 'Show all' : 'Hide'}`}
                </button>
            </div>
            {/* <EventExtended /> */}
        </div>
    );
}

/* id={item.id}
place={item.place}
date={item.date}
timeStart={item.timeStart}
timeEnd={item.timeEnd}
price={item.price}
shortDescription={item.shortDescription}
// fullDescription={item.fullDescription}
additionalInfo={item.additionalInfo}
difficulty={item.difficulty}
meetingPoint={item.meetingPoint}
key={index}
title={item.title}
freeSpace={item.freeSpace}
shortDesctiption={item.shortDescription} */
