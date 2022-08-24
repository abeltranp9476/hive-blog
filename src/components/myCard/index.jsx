import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import {Markdown} from '../markdown';


export const MyCard = (props) => {
    const { title, description, date, category, permlink, image, imageDirect } = props;

    const getImage = () => {
        return JSON.parse(image)['thumbnails'] ? JSON.parse(image)['thumbnails'][0] : '';
    }

    
    return (
<Grid item="item" xs={12} md={12}>
<NavLink to={'/' + permlink} style={({ isActive } )=>
    {               return {
                    display: "block",
                    margin: "1rem 0",
                    color: "green",
                    textDecoration: "none",
                  };
                }}>

<CardActionArea>
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {date}
                </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                    <Markdown 
                    className="markdown"                   
                    >
                    {description.substring(0, 500)}
                    </Markdown>
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    Más...
                </Typography>
            </CardContent>
        </Card>
    </CardActionArea>
    </NavLink>
</Grid>

    );
}