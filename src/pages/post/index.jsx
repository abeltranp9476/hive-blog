import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import moment from 'moment';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { fetchPost, fetchComments } from './postApi'
import '../../style.css'
import { Markdown } from '../../components/markdown'
import { FeedSkeleton } from '../../components/skeletons/FeedSkeleton'
import { PostStatics } from '../../components/postStatics'
import { MyAvatar } from '../../components/avatar'
import { Tags } from '../../components/tags'

import { Comments } from '../../components/comments'
import { Error404 } from '../error404'
import { useQueryWithSlug } from '../../hooks/useQueryWithSlug'
import { useLoaderComments } from '../../hooks/useLoaderComments'

export const Post = () => {
    const { slug } = useParams()
    const { data, isLoading, is404 } = useQueryWithSlug(fetchPost, slug)

    const {
        comments,
        isLoadingComments,
        handleLoadComments
    } = useLoaderComments(fetchComments, slug)

    const post = data

    useEffect(() => {
    }, [data])

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
                    {is404 ? (
                        <Error404 />
                    ) : (
                        <>
                            <MyAvatar type="small" />
                            <Typography variant="h6" gutterBottom={true}>
                                {post?.result?.title ? post.result.title : ''}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {moment(post?.result?.created, "YYYYMMDD").locale('es').fromNow()}
                            </Typography>
                            <Divider />
                            <Markdown className="markdown">
                                {post?.result?.body ? post.result.body : ''}
                            </Markdown>
                            <Tags tags={post?.result?.json_metadata?.tags} />
                            <PostStatics
                                votes={post?.result?.active_votes}
                                comments={post?.result?.children}
                                amount={(parseFloat(post?.result?.author_payout_value) + parseFloat(post?.result?.curator_payout_value)).toFixed(2)}
                            />
                            <Comments
                                numComments={post?.result?.children}
                                handleLoadComments={handleLoadComments}
                                comments={comments}
                                isLoadingComments={isLoadingComments}
                            />
                        </>
                    )}
                </>
            )}
        </Grid>
    );
}