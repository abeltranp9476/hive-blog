import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FavoriteBorder, ChatBubbleOutline, SavingsOutlined } from '@mui/icons-material';


export const PostStatics = (props) => {    
  const {votes, amount, comments} = props;

  const styleText = {
    alignItems: 'center',
    display: 'flex'
  }

  const styleIcon = {
    fontSize: '24px',
    mr: '5px'
  }

  return (
      <Stack 
       direction="row"
       justifyContent="flex-start"
       spacing={2}
      >
      <Typography sx={styleText}><FavoriteBorder sx={styleIcon} />{Object.keys(votes).length}</Typography>
      <Typography sx={styleText}><ChatBubbleOutline sx={styleIcon} />{comments}</Typography>
      <Typography sx={styleText}><SavingsOutlined sx={styleIcon} />${amount}</Typography>
      </Stack>
  )
}
