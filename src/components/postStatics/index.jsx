import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { FavoriteBorder, ChatBubbleOutline, SavingsOutlined } from '@mui/icons-material';


export const PostStatics = (props) => {    
    const {votes, amount, comments} = props;

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        alignItems: 'baseline',
    }));

  return (
      <Stack 
       direction="row"       
       justifyContent="center"
       alignItems="baseline"
       spacing={2}
      >
        <Item><FavoriteBorder sx={{ fontSize: 18 }} />{Object.keys(votes).length}</Item>
        <Item><ChatBubbleOutline sx={{ fontSize: 18 }} /> {comments}</Item>
        <Item><SavingsOutlined sx={{ fontSize: 18 }} /> $ {amount}</Item>
      </Stack>
  )
}
