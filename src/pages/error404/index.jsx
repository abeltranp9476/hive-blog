import { useEffect } from 'react'
import { Stack } from "@mui/material"
import Typography from '@mui/material/Typography'

export const Error404 = () => {

    useEffect(() => {
        document.title = 'Error 404'
    }, [])

    return (
        <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 5 }}
        >
            <Typography variant="h3">
                No se ha encontrado
            </Typography>
        </Stack>
    )
}
