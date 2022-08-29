import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Markdown } from '../markdown';
import { MyAvatar } from '../avatar'

export const Comment = ({ author, body, picture, depth }) => {
    return (
        <Stack
            spacing={2}
            direction="column"
            sx={{ mt: 3, ml: depth == 1 ? 0 : 2 * depth }}
        >
            <MyAvatar type="small" userName={author} picture={picture} />
            <Typography variant="subtitle1">
                <Markdown className="markdown">
                    {body}
                </Markdown>
            </Typography>
        </Stack>
    )
}