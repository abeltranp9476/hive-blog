import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useSign } from '../../hooks/useSign'

export const Sign = () => {
    const { userName } = useSign()

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
                    Inicio de sesión exitoso: {userName}
                </Typography>
            </Stack>
        </Grid>
    )
}
