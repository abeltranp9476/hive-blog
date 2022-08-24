import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import {MyCard} from '../../features/card/MyCard';

import {fetchTag} from './tagApi';
import { FeedSkeleton } from '../../components/skeletons/FeedSkeleton';

export const Tag = (props) => {
    const { title } = props;
    const { tag }= useParams();
    const [posts, setPosts]= useState([]);
    const [isLoading, setIsLoading]= useState(true);

    const getTag= async (slug) => {
        const content= await fetchTag(slug);
        setPosts(content.data);
    }

    useEffect(() => {
    document.title = tag;
     getTag(tag);          
    }, [tag])
    
    
    useEffect(() => {
     if(posts?.results?.length) setIsLoading(false);
    }, [posts])
    


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
                {isLoading ? (
                    <FeedSkeleton />
                ) : (
                    <>
                    {posts?.results?.map((post) => (
                <MyCard
                    key={post.id}
                    title={post.title}
                    description={post.body}
                    date={post.created}
                    category={post.category}
                    permlink={post.permlink}
                    imageDirect= {post.img_url}
                />
            ))}
                    </>
                )}
                
            </Grid>
        </Grid>

    );
}
