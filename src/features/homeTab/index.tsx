import BodyBox from '@/components/BodyBox'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Portrait from '@/assets/portrait.png'
import theme from '@/styles/Theme'

export default function HomeTab() {
  return (
    <>
      <Box height={'95vh'} width={'100%'} sx={{ backgroundColor: '#E8F9FF' }}>
        <BodyBox justifyContent={'center'} alignItems={'center'} direction={'row'}>
          <Grid size={9} display="flex" flexDirection={'column'} gap={2} height={'max-content'}>
            <Typography variant="h1">Hello,</Typography>
            <Typography variant="h1">My name is PHAM GIA LUONG</Typography>
            <Typography variant="h1">I'm a Software Developer</Typography>
            <Typography variant="h3">
              I build web applications and embedded systems that make life
              easier.
            </Typography>
            <Typography variant="body1">
              Let's scroll down and start exploring.
            </Typography>
          </Grid>
          {/* <Grid size={1} sx={{ backgroundColor: 'red', height: '100px' }}>
          </Grid> */}
          <Grid size={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // width: '380px',
              height: 'max-content',
              position: 'relative',
            }}
          >
            <img
              src={Portrait}
              alt="Portrait"
              width={'100%'}
              height={'100%'}
              style={{
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: '100%',
                height: '50%',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '72px 24px',
                zIndex: 0,
              }}
            ></Box>
          </Grid>
        </BodyBox>
      </Box>

      <BodyBox direction={'row'}>
        <Typography variant='h1'>LET ME INTRODUCE MYSELF</Typography>
      </BodyBox>
    </>
  )
}
