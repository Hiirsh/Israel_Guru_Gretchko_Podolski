import React from 'react';
import {useSelector} from 'react-redux';
import Event from './Event';
import EventMainInfo from './EventMainInfo';
import style from '..//..//componentStyles/EventPage.css';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import {homePage} from '../../utils/constants';

export default function EventPage() {
    const eventId = Number(window.location.pathname.replace('/event/', ''));
    const {events} = useSelector(state => state.events);
    const eventExt = events.find(ev => ev.id === eventId);
    const navigate = useNavigate();

    return (
        <div className="eventAndMainInfo">
            <Event ev={eventExt} extended={true} />
            <EventMainInfo ev={eventExt} />
            <div className="buttonContainer">
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(-1)}
                >
                    Вернуться
                </Button>
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(`../${homePage}`)}
                >
                    На главную
                </Button>
            </div>
        </div>
    );
}
