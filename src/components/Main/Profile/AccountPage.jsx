import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {profilePage} from '../../../utils/constants';
import CreateEvent from './Account/CreateEvent';
import styles from '../../../componentStyles/AccountPage.css';
export default function AccountPage() {
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);
    return (
        <div className="accMenu">
            <div className="accBut"><h2>Favorite events</h2></div>
            <div className="accBut"><h2>I'll go</h2></div>
            <div className="accBut"><h2>My events</h2></div>
            <div className="accBut">
                <h2>Create event</h2>
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
            </div>
        </div>
    );
}
