import * as React from 'react';
import { useSelector} from 'react-redux';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Avatar} from '../avatar/Avatar';

import {selectProfile} from '../profile/profileSlice';
import { getTouchRippleUtilityClass } from '@mui/material';


function Sidebar(props) {
    const { title } = props;
    const profile = useSelector(selectProfile);

    return (
        <Grid item xs={12} md={4}>
            <Avatar  />
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

export default Sidebar;