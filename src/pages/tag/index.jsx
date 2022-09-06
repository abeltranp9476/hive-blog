import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { MyCard } from '../../components/myCard'
import { fetchTag } from './tagApi'
import { FeedSkeleton } from '../../components/skeletons/FeedSkeleton'
import { useQueryWithSlug } from '../../hooks/useQueryWithSlug'


export const Tag = (props) => {
    const { tag } = useParams()

    const { data, isLoading, is404, isNotResults } = useQueryWithSlug(fetchTag, tag)
    const posts = data
    //const [posts, setPosts] = useState([])
    //const [isLoading, setIsLoading] = useState(true)
    //const [isNotResults, setIsNotResults] = useState(false)

    useEffect(() => {
    }, [data])


    /*
    const getTag = async (slug) => {
        setIsNotResults(false)
        setIsLoading(true)
        const content = await fetchTag(slug)
        setPosts(content.data)
    }
    */

    /*
    useEffect(() => {
        useScrollUp();
        document.title = tag
        getTag(tag)
    }, [tag])
    */

    /*
    useEffect(() => {
        if (posts?.results?.length) {
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setIsNotResults(true)
        }
    }, [posts])
    */

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
                    <Grid item="item" xs={12} md={12}>
                        <FeedSkeleton />
                    </Grid>
                ) : (
                    <>
                        {isNotResults ? (
                            <Grid item="item" xs={12} md={12}>
                                <Typography variant="h6">
                                    No hay publicaciones
                                </Typography>
                            </Grid>
                        ) : (
                            posts?.results.map((post) => (
                                <MyCard
                                    key={post.id}
                                    title={post.title}
                                    description={post.body}
                                    date={post.created}
                                    category={post.category}
                                    permlink={post.permlink}
                                    imageDirect={post.img_url}
                                    votes={post.total_votes}
                                    comments={post.children}
                                    amount={post.payout.toFixed(2)}
                                />
                            ))
                        )}

                    </>
                )}

            </Grid>
        </Grid>
    );
}
