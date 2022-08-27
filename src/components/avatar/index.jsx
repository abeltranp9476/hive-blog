import React from 'react'
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import { selectProfile } from '../../pages/profile/profileSlice';


export const MyAvatar = ({ type='default' }) => {
  const profile = useSelector(selectProfile);

  return (
    type === 'default' ? (
      <img src={profile?.user?.metadata?.profile?.profile_image} width="100%" />
    ) : (
        <Stack
          direction="row"
          justifyContent="flex-start"
          spacing={2}
          sx={{ mt: 2, mb: -1 }}
        >
          <Avatar
            alt={profile?.user?.metadata?.profile?.name}
            src={profile?.user?.metadata?.profile?.profile_image}
            sx={{ width: 24, height: 24, mr: -1 }}
          />
          <Typography variant="body1">
          {profile?.user?.name}
        </Typography>
        </Stack>
    )
    
  )
}
