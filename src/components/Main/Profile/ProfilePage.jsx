import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {accountPage} from '../../../utils/constants';
import style from '..//..//..//componentStyles/ProfilePage.css'

export default function ProfilePage() {
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <div className="profileUserInfo">
            <div className="elements1"><h1>Profile</h1></div>
            <div className="elements1"><div className="labelName">Name: </div> <div className="storageInf">{userData.firstName} {userData.lastName}</div></div>
            <div className="elements1"><div className="labelName" id="about">Information: </div><div className="storageInf">{userData.aboutUser}</div></div>
            <div className="elements1"><div className="labelName">Email: </div> <div className="storageInf">{userData.email}</div></div>
            <div className="elements1"><div className="labelName">Phone: </div><div className="storageInf">{userData.phone}</div></div>
            <div className="elements1"><div className="labelName">Lisence: </div><div className="storageInf">{userData.license}</div></div>
            <div className="elements1"><Button
                variant="contained"
                className="buttonStyle"
                onClick={() => navigate(`../${accountPage}/${userId}`)}
            > 
                Аккаунт
            </Button>
            </div>
        </div>
    );
}
