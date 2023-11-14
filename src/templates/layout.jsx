import {Box, CssBaseline, Grid} from '@mui/material'
import { grey } from '@mui/material/colors';

export default function Layout() {
  return (
    <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container m={2}>
                <Grid item flexBasis={80} bgcolor={grey[400]} m={2}>MENU</Grid>
                <Grid item flex={1}>
                    <Grid xs={12} bgcolor={grey[400]} height={'10vh'} my={2}>HEADER</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'15vh'} my={2}>BRANDING</Grid>
                    <Grid container>
                        <Grid xs={3} pr={2}>
                        <Grid  bgcolor={grey[400]} height={'20vh'}>PKI</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid  bgcolor={grey[400]} height={'20vh'}>PKI</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid  bgcolor={grey[400]} height={'20vh'}>PKI</Grid>
                        </Grid>
                        <Grid xs={3}>
                        <Grid  bgcolor={grey[400]} height={'20vh'}>PKI</Grid>
                        </Grid>
                    </Grid>
                    <Grid container my={2}>
                        <Grid xs={4} pr={2}>
                        <Grid  bgcolor={grey[400]} height={'40vh'}>CONTAINER 1</Grid>
                        </Grid>
                        <Grid xs={4} pr={2}>
                        <Grid  bgcolor={grey[400]} height={'40vh'}>CONTAINER 2</Grid>
                        </Grid>
                        <Grid xs={4}>
                        <Grid  bgcolor={grey[400]} height={'40vh'}>CONTAINER 2</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
  )
}
