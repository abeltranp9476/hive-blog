import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import MyCard from '../card/MyCard';


function Main(props) {

    const { title, posts } = props;

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
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            {posts?.result?.map((post) => (
                <MyCard
                    key={post.entry_id}
                    title={post.comment.title}
                    description="Texto de prueba"
                    date={post.comment.created}
                    category={post.comment.category}
                    permlink={post.comment.permlink}
                />
            ))}
        </Grid>

    );
}

Main.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Main;