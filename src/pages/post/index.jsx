import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Markdown } from '../../components/markdown';

import { fetchPost } from './postApi';
import '../../style.css';
import { FeedSkeleton } from '../../components/skeletons/FeedSkeleton'
import {PostStatics} from '../../components/postStatics'

export const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadPost = async (slug) => {
        const content = await fetchPost(slug);
        setPost(content.data.result);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        loadPost(slug);
    }, [slug])

    useEffect(() => {
        if (post?.title) {
            setIsLoading(false);
            document.title = post?.title;
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

                    <PostStatics
                        votes={post?.active_votes}
                        comments={post?.children}
                        amount={(parseFloat(post?.author_payout_value) + parseFloat(post?.curator_payout_value)).toFixed(2)}
                    />
                </>
            )}
        </Grid>

    );
}

export default Post;