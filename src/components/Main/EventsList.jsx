import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeEventList} from '../../reduxFiles/actions/changePageStateAction';
import Event from './Event';

export default function Events() {
    // const [isCollapced, setCollapse] = useState(true);
    const {events} = useSelector(state => state.events);
    const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    const isCollapced = useSelector(
        state => state.pageState.eventListCollapced
    );
    let numEvents = events.length;
    const [renderLastEvent, setRenderLastEvent] = useState(
        isCollapced ? 2 : numEvents
    );
    const eventsRender = events.slice(renderFirstEvent, renderLastEvent);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="d-grid gap-2 m-3">
                <button type="button" className="btn btn-secondary ">
                    Search
                </button>
            </div>
            <div className="border border-dark m-2">
                {eventsRender.map((item, index) => (
                    <div className="border border-dark m-2" key={index}>
                        <Event ev={item} extended={false} />
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
                        dispatch(changeEventList());
                    }}
                >
                    {`${isCollapced ? 'Show all' : 'Hide'}`}
                </button>
            </div>
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
