import {Box, Button, TextField} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import style from '..//..//componentStyles/EntryPage.css';
import {useSelector} from 'react-redux';
import EventMainInfo from './EventMainInfo';
import {homePage, paymentPage, ticketPage} from '../../utils/constants';

export default function EntryPage() {
    const navigate = useNavigate();
    const eventId = Number(window.location.pathname.replace('/entry/', ''));
    const {events} = useSelector(state => state.events);
    const ev = events.find(ev => ev.id === eventId);

    return (
        <div className="eventAndMainInfo">
            <h1 className="pageTitle">Записаться и оплатить</h1>
            <h1 className="eventTitle">{ev.title}</h1>
            <p>{ev.preview}</p>
            <p>Уровень сложности материала: {ev.difficulty.toLowerCase()}.</p>
            <EventMainInfo ev={ev} noButton={true} />
            <Box
                className="entryForm"
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="standard-required"
                    label="Имя"
                    // defaultValue="Имя"
                    variant="standard"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Телефон"
                    // defaultValue="Телефон"
                    variant="standard"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Email"
                    // defaultValue="Email"
                    variant="standard"
                />
            </Box>
            <div className="buttonContainer">
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(`../${paymentPage}/${ev.id}`)}
                >
                    К оплате
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
