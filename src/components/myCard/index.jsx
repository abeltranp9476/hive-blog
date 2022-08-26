import * as React from 'react';

import moment from 'moment';
import 'moment/locale/es';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Markdown } from '../markdown';

import { PostStatics } from '../postStatics';
import { MyLink } from '../mylink'

export const MyCard = (props) => {
    

    const { title, description, date, category, permlink, image, imageDirect, votes, comments, amount } = props;

    const getImage = () => {
        return JSON.parse(image)['thumbnails'] ? JSON.parse(image)['thumbnails'][0] : '';
    }

    return (
        <Grid item="item" xs={12} md={12}>
            <MyLink to={'/' + permlink}>
                <CardActionArea>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {moment(date, "YYYYMMDD").locale('es').fromNow()}
                            </Typography>
                            <Typography variant="subtitle1" paragraph="paragraph">
                                <Markdown
                                    className="markdown"
                                >
                                    {description.substring(0, 500)}
                                </Markdown>
                            </Typography>                            
                            <PostStatics
                                votes={votes}
                                comments={comments}
                                amount={amount}
                            />
                        </CardContent>                        
                    </Card>                    
                </CardActionArea>
            </MyLink>
        </Grid>
    );
}