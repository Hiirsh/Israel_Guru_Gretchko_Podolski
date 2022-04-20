import React, {useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import {errorPage} from '../../utils/constants';

export default function PleaseWaitPage() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate(`../${errorPage}/`);
    //     }, 10000);
    // }, []);

    // useEffect(() => setTimeout(navigate(`../${errorPage}/`), 5000), []);
    return (
        <div>
            <h1>Please Wait</h1>
            <Box sx={{display: 'flex'}}>
                <CircularProgress />
            </Box>
        </div>
    );
}
