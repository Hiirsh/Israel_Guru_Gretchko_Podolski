import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {profilePage} from '../../../utils/constants';
export default function AccountPage() {
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);
    return (
        <div className="text-left m-2">
            <h2>Favorite events</h2>
            <h2>I'll go</h2>
            <h2>Tickets</h2>
            <h2>My events</h2>
            <h2>Create event</h2>
            <Button
                variant="contained"
                className="buttonStyle"
                onClick={() => navigate(`../${profilePage}/${userId}`)}
            >
                Профиль
            </Button>
        </div>
    );
}
