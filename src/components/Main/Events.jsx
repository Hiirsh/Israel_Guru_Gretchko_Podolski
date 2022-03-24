import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Event from './Event';

export default function Events(props) {
    const [isCollapced, setCollapse] = useState(true);
    const {events} = useSelector(state => state.events);
    return (
        <div className="text-center">
            <div className="d-grid gap-2 m-3">
                <button type="button" className="btn btn-secondary ">
                    Search
                </button>
            </div>
            <div className="border border-dark m-2">
                <div className="border border-dark m-2">
                    <Event
                        title={events[0].title}
                        date={events[0].date}
                        place={events[0].place}
                        timeStart={events[0].timeStart}
                        timeEnd={events[0].timeEnd}
                        price={events[0].price}
                        freeSpace={events[0].freeSpace}
                        shortDesctiption={events[0].shortDescription}
                    />
                </div>
                <div className="border border-dark m-2">
                    <Event
                        title={events[1].title}
                        date={events[1].date}
                        place={events[1].place}
                        timeStart={events[1].timeStart}
                        timeEnd={events[1].timeEnd}
                        price={events[1].price}
                        freeSpace={events[1].freeSpace}
                        shortDesctiption={events[1].shortDescription}
                    />
                </div>
                <div className="border border-dark m-2">
                    <Event
                        title={events[2].title}
                        date={events[2].date}
                        place={events[2].place}
                        timeStart={events[2].timeStart}
                        timeEnd={events[2].timeEnd}
                        price={events[2].price}
                        freeSpace={events[2].freeSpace}
                        shortDesctiption={events[2].shortDescription}
                    />
                </div>
            </div>
            {/* {events.map((item, index) => (
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
                />
            ))} */}
            <div className="d-grid gap-2 m-3">
                <button
                    type="button"
                    className="btn btn-secondary "
                    onClick={e => {
                        e.preventDefault();
                        setCollapse(!isCollapced);
                        console.log('click', isCollapced);
                    }}
                >
                    Show all
                </button>
            </div>
        </div>
    );
}
