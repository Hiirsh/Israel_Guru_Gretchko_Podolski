import {Button} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {homePage, ticketPage} from '../../utils/constants';
import style from '../../componentStyles/Main.css';

export default function PaymentPage() {
    const eventId = Number(window.location.pathname.replace('/payment/', ''));
    const {events} = useSelector(state => state.events);
    const ev = events.find(ev => ev.id === eventId);
    const navigate = useNavigate();
    return (
        <div className="eventAndMainInfo">
            <h1 className="eventTitle">Оплатить</h1>

            <div className="buttonContainer">
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(`../${ticketPage}/${ev.id}`)}
                >
                    Оплатить
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
