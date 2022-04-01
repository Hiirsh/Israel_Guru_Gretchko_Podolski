import React from 'react';
import style from '..//../..//componentStyles/SignIn.css';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {signUpPage} from '..//..//..//utils/constants';

export default function SignInPage() {
    const navigate = useNavigate();
    return (
        <div className="pageBody">
            <div className="entryFormBox">
                <h4 className="pageTitle">Войти</h4>
            </div>
            <div className="entryFormBox">
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
                        label="Email"
                        variant="standard"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Пароль"
                        variant="standard"
                    />
                    <h2 className="text">Нет аккаунта?</h2>
                    <Button
                        variant="text"
                        onClick={() => navigate(`../${signUpPage}/`)}
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </div>
        </div>
    );
}
