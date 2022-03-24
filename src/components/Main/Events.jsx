import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Event from './Event';

export default function Events() {
    const [isCollapced, setCollapse] = useState(true);
    const [renderFirstEvent, setRenderFirstEvent] = useState(0);
    const [renderLastEvent, setRenderLastEvent] = useState(2);
    const {events} = useSelector(state => state.events);
    let numEvents = events.length;
    const eventsRender = events.slice(renderFirstEvent, renderLastEvent);

    // useEffect(() => {
    //     if (!isCollapced)
    //         // setCollapse(!isCollapced);
    //         // console.log('click', isCollapced);
    //         setRenderLastEvent(numEvents);
    // }, []);
    // function renderEvents (arr) {
    //     return arr.map((item, index) => (
    //         <div className="border border-dark m-2" key={index}>
    //             <Event
    //                 place={item.place}
    //                 date={item.date}
    //                 timeStart={item.timeStart}
    //                 timeEnd={item.timeEnd}
    //                 price={item.price}
    //                 shortDescription={item.shortDescription}
    //                 fullDescription={item.fullDescription}
    //                 additionalInfo={item.additionalInfo}
    //                 difficulty={item.difficulty}
    //                 meetingPoint={item.meetingPoint}
    //                 key={index}
    //                 title={item.title}
    //                 freeSpace={item.freeSpace}
    //                 shortDesctiption={item.shortDescription}
    //             />
    //         </div>
    //     ))
    // }
    // useEffect(()=>{
    // },[])

    return (
        <div className="text-center">
            <div className="d-grid gap-2 m-3">
                <button type="button" className="btn btn-secondary ">
                    Search
                </button>
            </div>
            <div className="border border-dark m-2">
                {eventsRender.map((item, index) => (
                    <div className="border border-dark m-2" key={index}>
                        <Event
                            place={item.place}
                            date={item.date}
                            timeStart={item.timeStart}
                            timeEnd={item.timeEnd}
                            price={item.price}
                            shortDescription={item.shortDescription}
                            fullDescription={item.fullDescription}
                            additionalInfo={item.additionalInfo}
                            difficulty={item.difficulty}
                            meetingPoint={item.meetingPoint}
                            key={index}
                            title={item.title}
                            freeSpace={item.freeSpace}
                            shortDesctiption={item.shortDescription}
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
                        setCollapse(!isCollapced);
                        console.log('click', isCollapced, renderLastEvent);
                        setRenderLastEvent(isCollapced ? 2 : numEvents);
                    }}
                >
                    {`${isCollapced ? 'Show all' : 'Hide'}`}
                </button>
            </div>
        </div>
    );
}
