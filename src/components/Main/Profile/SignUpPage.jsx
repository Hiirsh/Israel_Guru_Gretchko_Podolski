import React, {useState} from 'react';
import style from '..//../..//componentStyles/SignIn.css';
import {Box, Button, FormControlLabel, Switch, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {profilePage, signUpPage} from '..//..//..//utils/constants';
import {useDispatch} from 'react-redux';
import {signingAction} from '../../../reduxFiles/actions/isSignedAction';

export default function SignUpPage() {
    const navigate = useNavigate();
    const [isGuide, setGuide] = useState(false);
    // setGuide = () => {};
    const [value, setValue] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');
    const [license, setLicense] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [aboutUser, setAboutUser] = React.useState('');
    const dispatch = useDispatch();
    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div className="pageBody">
            <div className="entryFormBox">
                <h4 className="pageTitle">Регистрация</h4>
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
                        label="Имя"
                        variant="standard"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <TextField
                        required={isGuide} //если гид, то поле обязательное
                        id="standard-required"
                        label="Фамилия"
                        variant="standard"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Email"
                        variant="standard"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Пароль"
                        variant="standard"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Повторить пароль"
                        variant="standard"
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Switch />}
                        onClick={() => setGuide(!isGuide)}
                        label="Хотите ли вы зарегистрироваться как гид?"
                    />
                    {/* генерируется когда гид */}
                    {isGuide && (
                        <div className="entryForm">
                            <TextField
                                required
                                id="standard-required"
                                label="Номер лицензии"
                                variant="standard"
                                value={license}
                                onChange={e => setLicense(e.target.value)}
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="Телефон"
                                variant="standard"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            <TextField
                                id="standard-multiline-flexible"
                                label="О себе"
                                multiline
                                maxRows={4}
                                value={aboutUser}
                                onChange={e => setAboutUser(e.target.value)}
                                variant="standard"
                            />
                        </div>
                    )}
                    <Button
                        disabled={
                            !(firstName &&
                            email &&
                            password &&
                            password2 &&
                            password === password2 &&
                            isGuide
                                ? license && phone
                                : true)
                        }
                        variant="contained"
                        type="button"
                        onClick={() => {
                            navigate(`../${profilePage}/`);
                            dispatch(signingAction(true));
                        }}
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </div>
        </div>
    );
}
