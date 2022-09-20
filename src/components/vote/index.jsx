import React from 'react'
import Typography from '@mui/material/Typography';
import { FavoriteBorder, ChatBubbleOutline, SavingsOutlined } from '@mui/icons-material';

export const Vote = ({ votes, styleText, styleIcon }) => {
    return (
        <Typography sx={styleText}><FavoriteBorder sx={styleIcon} />{Object.keys(votes).length ? Object.keys(votes).length : votes}</Typography>
    )
}
