import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { MyAvatar } from '../avatar';
import { selectProfile } from '../../pages/profile/profileSlice';
import { getTouchRippleUtilityClass } from '@mui/material';

export const Sidebar = (props) => {
    const { title } = props;
    const profile = useSelector(selectProfile);

    return (
        <Grid item xs={12} md={4}>
            <MyAvatar />
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom={getTouchRippleUtilityClass}>
                    {title}
                </Typography>
                <Typography>{profile?.user?.metadata?.profile?.about}</Typography>

            </Paper>

            <Typography variant="h6" gutterBottom={true} sx={{ mt: 3 }}>
                Enlaces
            </Typography>

            <Link display="block" variant="body1" target="_blank" href={profile?.user?.metadata?.profile?.website}>
                {profile?.user?.metadata?.profile?.website}
            </Link>
        </Grid>
    );
}

Sidebar.propTypes = {
    title: PropTypes.string.isRequired,
};