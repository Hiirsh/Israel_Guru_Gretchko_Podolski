import {Button} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {homePage} from '../../utils/constants';
import stylesMain from '..//..//componentStyles/TitleStyle.css';
import EventMainInfo from './EventMainInfo';

export default function TicketPage() {
    const eventId = Number(window.location.pathname.replace('/ticket/', ''));
    const {events} = useSelector(state => state.events);
    const ev = events.find(ev => ev.id === eventId);
    const navigate = useNavigate();
    return (
        <div className="eventAndMainInfo">
            <h1 className="eventTitle">Уверены, вам понравится!</h1>
            <h1 className="eventTitle">{ev.title}</h1>

            <EventMainInfo ev={ev} noButton={true} />
            <div className="buttonContainer">
                <Button variant="contained" className="buttonStyle">
                    Сохранить
                </Button>
                <Button variant="contained" className="buttonStyle">
                    Поделиться в FB
                </Button>
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
