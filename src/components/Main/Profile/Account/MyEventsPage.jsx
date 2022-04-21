import {Button} from '@mui/material';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import s from '../../../../componentStyles/MyEventsPage.css';
import {createEventPage, profilePage} from '../../../../utils/constants';
import MyEvents from './MyEvents';
export default function MyEventsPage() {
    const {userId} = useParams();
    const navigate = useNavigate();
    return (
        <div className="body">
            <div className="elements">
                <h2 className="accBut">My events</h2>
                <MyEvents />
            </div>{' '}
            <div className="returnBut">
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(`../${profilePage}/${userId}`)}
                >
                    <h2 className="return">Вернуться в аккаунт</h2>
                </Button>
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(`../${createEventPage}/${userId}`)}
                >
                    <h2 className="return">Создать событие</h2>
                </Button>
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(-1)}
                >
                    <h2 className="return">Назад</h2>
                </Button>
            </div>{' '}
        </div>
    );
}
