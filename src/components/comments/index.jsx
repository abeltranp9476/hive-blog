import { useState, useEffect } from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Comment } from '../comment'
import { Loader } from '../loader'
import { Typography } from '@mui/material';

export const Comments = ({ numComments, comments, handleLoadComments, isLoadingComments }) => {
    const [isShow, setIsShow] = useState(false)

    const getComments = () => {
        setIsShow(true)
        handleLoadComments()
    }

    useEffect(() => {

    }, [comments])

    return (
        (numComments && !isShow) ? (
            <Stack
                spacing={2}
                direction="row"
                justifyContent="center"
                sx={{ mt: 8 }}
            >
                <Button
                    variant="outlined"
                    onClick={getComments}
                >
                    Cargar comentarios
                </Button>
            </Stack>
        ) : (
            isLoadingComments ? (
                <Loader type="normal" />
            ) : (
                <>
                    {
                        numComments ? (
                            <>
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    justifyContent="center"
                                    sx={{ mt: 8 }}
                                >
                                    <Typography
                                        variant="h6"
                                        justifyContent="center"
                                    >
                                        {'Comentarios'}
                                    </Typography>
                                </Stack>
                                {
                                    Object.keys(comments).slice(1).map((key) => (
                                        <>
                                            {
                                                <Comment
                                                    author={comments[key]?.author}
                                                    body={comments[key]?.body}
                                                    picture={'https://images.ecency.com/webp/u/' + comments[key]?.author + '/avatar/medium'}
                                                    depth={comments[key]?.depth}
                                                />
                                            }
                                        </>
                                    ))
                                }
                            </>
                        ) : (
                            <>
                            </>
                        )

                    }
                </>
            )
        )
    )

}