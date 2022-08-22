import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (props) => {
    const { title, description, date, category, permlink, image } = props;

const getImage = () => {
    return JSON.parse(image)['thumbnails'][0];
}

    return (
        <React.Fragment>
            <CardMedia
            component = "img"
            height = "400"
            image = {getImage()}
            alt = "green iguana"
            />

            <CardContent>                       
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {date}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {category}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Leer Mas</Button>
            </CardActions>
        </React.Fragment>
    );
}

export default function MyCard(props) {

    return (
        <Box md={{ mb: 2, minWidth: 275 }}>
            <Card
                variant="outlined"
            >
                {card(props)}
            </Card>
        </Box>
    );
}