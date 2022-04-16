import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Event from './Event';
import EventMainInfo from './EventMainInfo';
import style from '..//..//componentStyles/EventPage.css';
import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@mui/material';
import {homePage} from '../../utils/constants';
import {getEventById} from '../../firebaseFiles/services/eventsService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function EventPage() {
    const eventId = useParams().pageId;
    const [eventExt, setEventExt] = useState('');
    useEffect(
        () =>
            getEventById(eventId).then(data => {
                setEventExt(data);
            }),
        []
    );

    const navigate = useNavigate();

    return (
        <div className="eventAndMainInfo">
            {eventExt ? (
                <div>
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
