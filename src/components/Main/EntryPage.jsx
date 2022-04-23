import {Box, Button, TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import style from '..//..//componentStyles/EntryPage.css';
import EventMainInfo from './EventMainInfo';
import {homePage, paymentPage, ticketPage} from '../../utils/constants';
import CircularProgress from '@mui/material/CircularProgress';
import {getEventById} from '../../firebaseFiles/services/eventsService';
import MinusIcon from '../../icons/MinusIcon';
import PlusIcon from '../../icons/PlusIcon';

export default function EntryPage() {
    const navigate = useNavigate();
    const {eventId} = useParams();
    const [ev, setEvent] = useState('');
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [name, setName] = useState(
        `${userData.lastName} ${userData.firstName}` || ''
    );
    const [phone, setPhone] = useState(userData.phone || '');
    const [email, setEmail] = useState(userData.email || '');
    const [numParticipants, setNumParticipants] = useState(1);

    useEffect(() => getEventById(eventId).then(data => setEvent(data)));
    return (
        <div className="eventAndMainInfo">
            {ev ? (
                <>
                    <h1 className="pageTitle">Записаться и оплатить</h1>
                    <h1 className="eventTitle">{ev.title}</h1>
                    <p>{ev.preview}</p>
                    <p>
                        Уровень сложности материала:{' '}
                        {ev.difficulty.toLowerCase()}.
                    </p>
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
                            label={'Имя'}
                            variant="standard"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            required
                            id="standard-required"
                            label={'Телефон'}
                            variant="standard"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <TextField
                            required
                            id="standard-required"
                            label={'Email'}
                            variant="standard"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <div className="numParticipantsContainer">
                            <div
                                onClick={() =>
                                    setNumParticipants(
                                        numParticipants !== 1
                                            ? numParticipants - 1
                                            : numParticipants
                                    )
                                }
                            >
                                <MinusIcon />
                            </div>
                            <div className="numParticipantsTextfield">
                                <TextField
                                    required
                                    id="standard-required"
                                    label={'Число участников'}
                                    variant="standard"
                                    value={numParticipants}
                                    onChange={e =>
                                        setNumParticipants(e.target.value)
                                    }
                                    width="20px"
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                />
                            </div>
                            <div
                                onClick={() =>
                                    setNumParticipants(1 + numParticipants)
                                }
                            >
                                <PlusIcon />
                            </div>
                        </div>
                    </Box>
                    <div className="buttonContainer">
                        <Button
                            variant="contained"
                            className="buttonStyle"
                            disabled={!(name && email && phone)}
                            onClick={() =>
                                navigate(`../${paymentPage}/${ev.id}`)
                            }
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
                </>
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
