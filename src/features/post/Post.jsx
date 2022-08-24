import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from '../markdown/Markdown';

import {fetchPost} from './postApi';
import '../../style.css';
import {FeedSkeleton} from '../../components/skeletons/FeedSkeleton'

function Post() {
    const { slug } = useParams();
    const [post, setPost]= useState([]);
    const [isLoading, setIsLoading]= useState(true);

    const loadPost= async (slug) => {
        const content= await fetchPost(slug);
        setPost(content.data.result);
    }

    useEffect(() => {
        loadPost(slug);        
    }, [slug])

    useEffect(() => {
        if(post?.title){
            setIsLoading(false);
            document.title = post?.title;
            window.scrollTo(0,0);
        }
    }, [post])
    

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
            {isLoading ? (
                <FeedSkeleton />
            ) : (
                <>
                <Typography variant="h6" gutterBottom={true}>
                {post?.title ? post?.title : ''}
            </Typography>

            <Divider />
            
            <Markdown className="markdown">
                {post?.body ? post?.body : ''}
            </Markdown>
                </>
            )} 
        </Grid>

    );
}

export default Post;