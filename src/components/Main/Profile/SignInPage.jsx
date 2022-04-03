import React, {useState} from 'react';
import style from '..//../..//componentStyles/SignIn.css';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {errorPage, profilePage, signUpPage} from '..//..//..//utils/constants';
import {login} from '../../../firebaseFiles/services/authService';

export default function SignInPage() {
    const navigate = useNavigate();
    const [state, setState] = useState({email: '', password: ''});
    const [userId, setUserid] = useState('1123456');

    function signInButtonHandler() {
        setUserid('654321');
        let temp = login(state.email, state.password);
        console.log(temp);
        if (userId) {
            console.log(userId);
            navigate(`../${profilePage}/${userId}`);
        } else {
            console.log(userId);
            navigate(`../${errorPage}/`);
        }
    }

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
                        value={state.email}
                        onChange={e =>
                            setState(s => ({...s, email: e.target.value}))
                        }
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Пароль"
                        variant="standard"
                        value={state.password}
                        onChange={e =>
                            setState(s => ({...s, password: e.target.value}))
                        }
                    />
                    <Button
                        variant="contained"
                        type="button"
                        onClick={signInButtonHandler}
                    >
                        Войти
                    </Button>
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
