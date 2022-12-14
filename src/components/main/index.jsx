import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { MyCard } from '../myCard';
import { FeedSkeleton } from '../skeletons/FeedSkeleton';

export const Main = (props) => {

    const { title, posts, isLoading } = props;

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
                {title}
            </Typography>
            <Divider />
            <Grid container={true} spacing={4}>
                {isLoading ? (
                    <Grid item="item" xs={12} md={12}>
                        <FeedSkeleton />
                    </Grid>
                ) : (
                    <>
                        {posts?.data?.result.map((post) => (
                            <MyCard
                                key={post.entry_id}
                                title={post.comment.title}
                                description={post.comment.body}
                                date={post.comment.created}
                                category={post.comment.category}
                                permlink={post.comment.permlink}
                                image={post.comment.json_metadata}
                                votes={post.comment.active_votes}
                                comments={post.comment.children}
                                amount={(parseFloat(post.comment.total_payout_value) + parseFloat(post.comment.curator_payout_value)).toFixed(2)}
                            />
                        ))}
                    </>
                )}
            </Grid>
        </Grid>
    );
}

export default Main;