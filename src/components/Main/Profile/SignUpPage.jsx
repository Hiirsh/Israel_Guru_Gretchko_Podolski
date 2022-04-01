import React, {useState} from 'react';
import style from '..//../..//componentStyles/SignIn.css';
import {
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    InputLabel,
    Switch,
    TextField,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {signUpPage} from '..//..//..//utils/constants';

export default function SignUpPage() {
    const navigate = useNavigate();
    const [isGuide, setGuide] = useState(false);
    // setGuide = () => {};
    const [value, setValue] = React.useState('');

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
                        label="Имя или псевдоним"
                        variant="standard"
                    />
                    {!isGuide && (
                        <TextField
                            id="standard-required"
                            label="Фамилия"
                            variant="standard"
                        />
                    )}
                    {isGuide && (
                        <TextField
                            required
                            id="standard-required"
                            label="Фамилия"
                            variant="standard"
                        />
                    )}
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
                    <TextField
                        required
                        id="standard-required"
                        label="Повторить пароль"
                        variant="standard"
                    />
                    <FormControlLabel
                        control={<Switch />}
                        onClick={() => setGuide(!isGuide)}
                        label="Хотите ли вы зарегистрироваться как гид?"
                    />
                    {isGuide && (
                        <div className="entryForm">
                            <TextField
                                required
                                id="standard-required"
                                label="Номер лицензии"
                                variant="standard"
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="Телефон"
                                variant="standard"
                            />
                            <TextField
                                id="standard-multiline-flexible"
                                label="О себе"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleChange}
                                variant="standard"
                            />
                        </div>
                    )}
                    <Button
                        variant="contained"
                        type="button"
                        onClick={() => navigate(`../${signUpPage}/`)}
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </div>
        </div>
    );
}
