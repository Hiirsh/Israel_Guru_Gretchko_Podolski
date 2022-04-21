import React from 'react';
import s from '../../../../componentStyles/MyEventsPage.css';
import MyEvents from './MyEvents';
export default function MyEventsPage() {
    return (
        <div className="body">
            <div className="elements">
                <h2 className="accBut">My events</h2>
                <MyEvents />
            </div>
        </div>
    );
}
