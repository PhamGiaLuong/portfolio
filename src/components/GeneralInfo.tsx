/*
 * Styles
 */
import theme from '@/styles/Theme'

/*
 * MUI Components
 */
import { Grid, Typography, Avatar, Box } from '@mui/material'

const GeneralInfo = () => {
  return (
    <Grid size={12}>
      <Grid
        container
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary.main,
          borderRadius: {
            xs: '36px 12px 36px 12px',
            sm: '54px 18px 54px 18px',
            md: '72px 24px 72px 24px',
          },
          minHeight: 80,
          marginTop: { xs: 15, sm: 20, md: 25 },
          zIndex: theme.zIndex.drawer,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {/* Avatar */}
        <Avatar
          src="/path/to/image.jpg"
          sx={{
            position: 'absolute',
            top: '0%',
            left: { xs: 30, sm: 50, md: 100 },
            transform: 'translateY(-50%)',
            width: { xs: 100, sm: 125, md: 150 },
            height: { xs: 100, sm: 125, md: 150 },
            border: '4px solid white',
            boxShadow: 3,
            zIndex: theme.zIndex.drawer + 1,
          }}
        />

        {/* Nội dung chữ */}
        <Grid
          size={{ xs: 12, sm: 9, md: 8 }}
          display="flex"
          flexWrap={'wrap'}
          gap={{ xs: 4, sm: 3, md: 2 }}
          paddingY={{ xs: 1, sm: 2, md: 3 }}
          paddingX={{ xs: 3, sm: 4, md: 0 }}
        >
          <Box
            display={'flex'}
            justifyContent={{ xs: 'flex-end', sm: 'flex-start' }}
            width={'100%'}
          >
            <Typography variant="h2" color={'white'}>
              PHAM GIA LUONG
            </Typography>
          </Box>
          <Box
            display={'flex'}
            gap={{ xs: 3, md: 8 }}
            width={'100%'}
            flexWrap={'wrap'}
          >
            <Typography variant="body1" color={'white'}>
              Software Engineer
            </Typography>
            <Typography variant="body1" color={'white'}>
              Software Engineer
            </Typography>
            <Typography variant="body1" color={'white'}>
              Software Engineer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GeneralInfo
