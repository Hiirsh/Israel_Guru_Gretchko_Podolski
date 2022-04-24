import {Box, Button, CircularProgress} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getEventById} from '../../firebaseFiles/services/eventsService';
import {homePage} from '../../utils/constants';
import stylesMain from '..//..//componentStyles/TicketPage.css';
import EventMainInfo from './EventMainInfo';

export default function TicketPage() {
    const {eventId} = useParams();
    const [ev, setEvent] = useState('');
    useEffect(() => getEventById(eventId).then(data => setEvent(data)), []);
    const navigate = useNavigate();
    return (
        <div>
            {ev ? (
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
            ) : (
                <div className="eventAndMainInfo">
                    <h1>Please Wait</h1>
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress />
                    </Box>
                </div>
            )}
        </div>
    );
}
