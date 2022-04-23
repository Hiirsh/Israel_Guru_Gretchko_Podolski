import {Button} from '@mui/material';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {profilePage} from '../../../../utils/constants';
import UserTickets from './UserTickets';

export default function UserTicketsPage() {
    const {userId} = useParams();
    const navigate = useNavigate();
    return (
        <div className="body">
            <div className="elements">
                <h2 className="accBut">Tickets</h2>
                <UserTickets />
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
                    onClick={() => navigate(-1)}
                >
                    <h2 className="return">Назад</h2>
                </Button>
            </div>
        </div>
    );
}
