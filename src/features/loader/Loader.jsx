import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularUnderLoad() {
    return (
    <Stack alignItems="center">
        <CircularProgress disableShrink />    
    </Stack>
    );
}