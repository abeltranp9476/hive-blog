import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import {MyCard} from '../../features/card/MyCard';

import {fetchTag} from './tagApi';

export const Tag = (props) => {
    const { title } = props;
    const { tag }= useParams();
    const [posts, setPosts]= useState([]);

    const getTag= async (slug) => {
        const content= await fetchTag(slug);
        setPosts(content.data);
    }

    useEffect(() => {
     getTag(tag);
    }, [tag])    


  return (
   <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom={true}>
                Tag: {tag}
            </Typography>
            <Divider />
            <Grid container={true} spacing={4}>
                {posts?.results?.map((post) => (
                <MyCard
                    key={post.id}
                    title={post.title}
                    description="Texto de prueba"
                    date={post.created}
                    category={post.category}
                    permlink={post.permlink}
                    imageDirect= {post.img_url}
                />
            ))}
            </Grid>
        </Grid>

    );
}
