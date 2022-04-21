import React from 'react';
import {Button} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import {
    createEventPage,
    myEventsPage,
    profilePage,
} from '../../../utils/constants';
import s from '../../../componentStyles/AccountPage.css';
// import CreateEvent from './Account/CreateEvent';
// import MyEvents from './Account/MyEvents';
// import AddToFavorites from '../../../icons/AddToFavorites';
// import InFavorites from '../../../icons/InFavorites';
export default function AccountPage() {
    const navigate = useNavigate();
    const {userId} = useParams();

    return (
        <div className="accMenu">
            <div className="elements">
                <h2 className="accBut">Favorite events</h2>
            </div>
            <div className="elements">
                <h2 className="accBut">I'll go</h2>
            </div>
            <div className="elements">
                <h2
                    className="accBut"
                    onClick={() => navigate(`../${myEventsPage}/${userId}`)}
                >
                    My events
                </h2>
            </div>
            <div className="elements">
                <h2
                    className="accBut"
                    onClick={() => navigate(`../${createEventPage}/${userId}`)}
                >
                    Create event
                </h2>
                {/* <CreateEvent /> */}
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
