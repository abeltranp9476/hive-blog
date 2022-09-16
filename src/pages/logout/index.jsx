import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

export const Logout = () => {

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
            <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ mt: 5 }}
            >
                <Typography variant="h3">
                    Se ha cerrado la sesión
                </Typography>
            </Stack>
        </Grid>
    )
}
