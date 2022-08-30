import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import moment from 'moment';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { fetchPost, fecthComments } from './postApi'
import '../../style.css'
import { Markdown } from '../../components/markdown'
import { FeedSkeleton } from '../../components/skeletons/FeedSkeleton'
import { PostStatics } from '../../components/postStatics'
import { MyAvatar } from '../../components/avatar'
import { Tags } from '../../components/tags';
import { useScrollUp } from '../../hooks/useScrollUp'
import { Comments } from '../../components/comments';
import { Error404 } from '../error404'

export const Post = () => {
    const { slug } = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [is404, setIs404] = useState(false);

    const loadPost = async (slug) => {
        setIs404(false)
        const content = await fetchPost(slug)
        if (content.data.result) {
            setPost(content.data.result)
        } else {
            setPost(content.data)
        }

    }

    const handleLoadComments = async () => {
        setIsLoadingComments(true)
        const content = await fecthComments(slug)
        setComments(content.data.result)
        setIsLoadingComments(false)
    }

    useEffect(() => {
        useScrollUp()
        loadPost(slug)
    }, [slug])

    useEffect(() => {
        if (post?.title) {
            setIsLoading(false)
            document.title = post?.title
        } else if (post?.error?.code) {
            setIsLoading(false)
            setIs404(true)
        }
    }, [post])

    useEffect(() => {
    }, [comments])

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
                                {post?.title ? post?.title : ''}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {moment(post?.created, "YYYYMMDD").locale('es').fromNow()}
                            </Typography>
                            <Divider />
                            <Markdown className="markdown">
                                {post?.body ? post?.body : ''}
                            </Markdown>
                            <Tags tags={post?.json_metadata?.tags} />
                            <PostStatics
                                votes={post?.active_votes}
                                comments={post?.children}
                                amount={(parseFloat(post?.author_payout_value) + parseFloat(post?.curator_payout_value)).toFixed(2)}
                            />
                            <Comments
                                numComments={post?.children}
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