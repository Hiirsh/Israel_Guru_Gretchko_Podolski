import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {accountPage} from '../../../utils/constants';

export default function ProfilePage() {
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);
    return (
        <div className="text-left m-2">
            <h1>Profile</h1>
            <h2>Name</h2>
            <h2>About me</h2>
            <h2>Email</h2>
            <h2>Phone</h2>
            <h2>Lisence</h2>
            <Button
                variant="contained"
                className="buttonStyle"
                onClick={() => navigate(`../${accountPage}/${userId}`)}
            >
                Аккаунт
            </Button>
        </div>
    );
}
