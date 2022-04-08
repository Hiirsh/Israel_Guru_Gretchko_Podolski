import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function PleaseWaitPage() {
    return (
        <div>
            <h1>Please Wait</h1>
            <Box sx={{display: 'flex'}}>
                <CircularProgress />
            </Box>
        </div>
    );
}
