import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';


export const MyCard = (props) => {
    const { title, description, date, category, permlink, image } = props;

    const getImage = () => {
    return JSON.parse(image)['thumbnails'][0];
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
                    Texto de prueba
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    Continue reading...
                </Typography>
            </CardContent>
            <CardMedia component="img" sx={{ width: 160, display: { xs: 'none', sm: 'block' } }} image={getImage()} alt="ejemplo"/>
        </Card>
    </CardActionArea>
    </NavLink>
</Grid>

    );
}