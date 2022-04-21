import {Button} from '@mui/material';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {myEventsPage, profilePage} from '../../../../utils/constants';
import CreateEvent from './CreateEvent';
import s from '../../../../componentStyles/CreateEventPage.css';
export default function CreateEventPage() {
    const navigate = useNavigate();
    const {userId} = useParams();

    return (
        <div className="body">
            <div className="elements">
                <h2 className="accBut">Create event</h2>
                <CreateEvent />
            </div>
            <div className="returnBut">
                <Button
                    variant="contained"
                    className="buttonStyle"
                    onClick={() => navigate(`../${profilePage}/${userId}`)}
                >
                    <h2 className="return">Вернуться в профиль</h2>
                </Button>
                <Button
                    variant="contained"
                    // type="button"
                    className="buttonStyle"
                    onClick={() => navigate(`../${myEventsPage}/${userId}`)}
                >
                    <h2 className="return">К созданным событиям</h2>
                </Button>
            </div>
        </div>
    );
}
