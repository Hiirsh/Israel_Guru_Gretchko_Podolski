import {Button, CircularProgress} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getEventById} from '../../../../firebaseFiles/services/eventsService';
import CreateEvent from './CreateEvent';
import s from '../../../../componentStyles/EditEventPage.css';
import {accountPage, myEventsPage} from '../../../../utils/constants';

export default function EditEventPage() {
    const {eventId, userId} = useParams();
    const [event, setEvent] = useState('');
    const navigate = useNavigate();
    useEffect(
        () =>
            getEventById(eventId).then(data => {
                setEvent({...data});
            }),
        []
    );
    return (
        <>
            {event ? (
                <div className="body elements">
                    <h2>Редактировать</h2>
                    <CreateEvent event={event} />
                    <div className="returnBut">
                        <Button
                            variant="contained"
                            className="buttonStyle"
                            onClick={() =>
                                navigate(`../${accountPage}/${userId}`)
                            }
                        >
                            <h2 className="return">Вернуться в аккаунт</h2>
                        </Button>
                        <Button
                            variant="contained"
                            // type="button"
                            className="buttonStyle"
                            onClick={() =>
                                navigate(`../${myEventsPage}/${userId}`)
                            }
                        >
                            <h2 className="return">К созданным событиям</h2>
                        </Button>
                        <Button
                            variant="contained"
                            // type="button"
                            className="buttonStyle"
                            onClick={() => navigate(-1)}
                        >
                            <h2 className="return">Назад</h2>
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
        </>
    );
}
