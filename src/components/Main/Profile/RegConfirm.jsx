import {Button} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {accountPage} from '../../../utils/constants';

export default function RegConfirm() {
    const userId = useSelector(state => state.userId);
    const navigate = useNavigate();
    return (
        <div>
            <h1>Registration Comfirmed!</h1>
            <Button
                variant="contained"
                className="buttonStyle"
                onClick={() => navigate(`../${accountPage}/${userId}`)}
            >
                To account
            </Button>
        </div>
    );
}
