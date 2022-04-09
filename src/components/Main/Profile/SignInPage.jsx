import React, {useState} from 'react';
import style from '..//../..//componentStyles/SignIn.css';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {errorPage, profilePage, signUpPage} from '..//..//..//utils/constants';
import {login} from '../../../firebaseFiles/services/authService';
import {useDispatch, useSelector} from 'react-redux';
import {signingAction} from '../../../reduxFiles/actions/isSignedAction';
import {setUserIdAction} from '../../../reduxFiles/actions/setUserIdAction';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function SignInPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const userIdTest = useSelector(state => state.userId);
    // const [state, setState] = useState({
    //     email: 'pupkin@mail.il',
    //     password: '123456',
    // });
    const [email, setEmail] = useState('pupkin@mail.il');
    const [values, setValues] = useState({
        password: '123456',
        showPassword: false,
    });
    const [isError, setError] = useState(false);

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    function signInButtonHandler() {
        try {
            login(/* state.email, state.password */ email, values.password)
                .then(data => data)
                .then(userId => {
                    if (userId) {
                        navigate(`../${profilePage}/${userId}`);
                        dispatch(signingAction(true));
                        dispatch(setUserIdAction(userId));
                        setError(false);
                    } else setError(true);
                });
        } catch (error) {
            console.log(error.messege);
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
                        // id="standard-required"
                        label="Email"
                        variant="standard"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">
                            Password
                        </InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {isError && <p>Неверные имя пользователя или пароль</p>}
                    <Button
                        disabled={!(email && values.password)}
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
