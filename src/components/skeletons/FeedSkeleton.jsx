import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const FeedSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton animation="wave" variant="rectangular" width="100%" height={30} />
      <Skeleton animation="wave" variant="rectangular" width="100%" height={350} />
    </Stack>
  )
}
