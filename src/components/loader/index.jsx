import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Loader = ({ type = 'start' }) => {
    return (
        <Stack
            alignItems="center"
            marginTop={type === 'start' ? 25 : 5}
        >
            <CircularProgress disableShrink />
        </Stack>
    );
}