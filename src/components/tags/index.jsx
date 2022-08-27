import React from 'react'

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Toolbar from '@mui/material/Toolbar';

import { MyLink } from '../mylink'

export const Tags = ({ tags }) => {
  return (
    <Toolbar
      component="nav"
      variant="dense"
      sx={{ height: 70, justifyContent: 'space-between', overflowX: 'auto' }}
    >
      <Stack 
      direction="row"
      justifyContent="center"
      spacing={2}
      sx={{ mt: -5 }}
      >
          {
          tags?.map((tag) => (
            <MyLink to={'/tag/' + tag}>
                <Chip label={tag} clickable sx={{ mr: 1}}/>
            </MyLink>
          )) 
          }
      </Stack>
      </Toolbar>
  )
}
