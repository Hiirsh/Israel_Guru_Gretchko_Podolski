import {Button} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {homePage, ticketPage} from '../../utils/constants';
import style from '../../componentStyles/Main.css';
import CircularProgress from '@mui/material/CircularProgress';
import {Box} from '@mui/material';
import {
    addEventToTourist,
    addParticipantsToEvent,
    getEventById,
    updateNumParticipants,
} from '../../firebaseFiles/services/eventsService';

export default function PaymentPage() {
    const {eventId} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [ev, setEvent] = useState('');
    useEffect(() => getEventById(eventId).then(data => setEvent(data)), []);
    const navigate = useNavigate();

    function handleClickPay() {
        const eventToPay = JSON.parse(localStorage.getItem('eventToPay'));
        const userData = JSON.parse(localStorage.getItem('userData'));
        const {uid} = JSON.parse(localStorage.getItem('user'));
        // console.log(userId);
        if (userData) {
            addEventToTourist(userData.userId, eventId);
        }
        addParticipantsToEvent(eventId, {...eventToPay, uid});
        localStorage.removeItem('eventToPay');
        getEventById(eventId)
            .then(data => {
                console.log(data.freeSpace, data.totalSpace);
                return data.freeSpace;
            })
            .then(freeSpace => {
                console.log(freeSpace - eventToPay.numParticipants);
                return freeSpace - eventToPay.numParticipants;
            })
            .then(freeSpace => {
                updateNumParticipants(eventId, freeSpace);
                navigate(`../${ticketPage}/${ev.id}`);
            });
    }

    return (
        <div className="eventAndMainInfo">
            {ev ? (
                <div>
                    <h1 className="eventTitle">Оплатить</h1>

                    <div className="buttonContainer">
                        <Button
                            variant="contained"
                            className="buttonStyle"
                            onClick={handleClickPay}
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
            ) : (
                <div>
                    <h1>Please Wait</h1>
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress />
                    </Box>
                </div>
            )}
        </div>
    );
}
