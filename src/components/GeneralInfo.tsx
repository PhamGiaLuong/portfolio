/*
 * Styles
 */
import theme from '@/styles/Theme'

/*
 * MUI Components
 */
import { Grid, Typography, Stack, Avatar } from '@mui/material'

const GeneralInfo = () => {
  return (
    <Grid size={12}>
      <Grid
        container
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary.main,
          borderRadius: '72px 24px 72px 24px',
          height: 110,
          marginTop: 30,
          zIndex: theme.zIndex.drawer,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {/* Avatar đè bên trái */}
        <Avatar
          src="/path/to/image.jpg"
          sx={{
            position: 'absolute',
            top: '0%',
            left: 100,
            transform: 'translateY(-50%)',
            width: 200,
            height: 200,
            border: '4px solid white',
            boxShadow: 3,
            zIndex: theme.zIndex.drawer + 1,
          }}
        />

        {/* Nội dung chữ */}
        <Grid size={9} display="flex" flexWrap={'wrap'} gap={2} paddingY={4}>
          <Typography variant="h2" color={'white'} width={'100%'}>
            PHAM GIA LUONG
          </Typography>
          <Stack direction="row" spacing={8} width={'100%'}>
            <Typography variant="body1" color={'white'}>
              Software Engineer
            </Typography>
            <Typography variant="body1" color={'white'}>
              Software Engineer
            </Typography>
            <Typography variant="body1" color={'white'}>
              Software Engineer
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GeneralInfo
