import theme from '@/styles/Theme'
import { Grid, Typography, Stack, Box, Avatar } from '@mui/material'

const GeneralInfo = () => {
  return (
    <Grid size={12}>
      <Grid container
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary.main,
          borderRadius: '72px 24px 72px 24px',
          // paddingY: 2,
          // paddingLeft: 10,
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
            width: 200, // 2x chiều cao component (component cao 100px)
            height: 200,
            border: '4px solid white', // Bo viền trắng nếu cần
            boxShadow: 3,
            zIndex: theme.zIndex.drawer + 1, // Đảm bảo ảnh luôn nằm trên các thành phần khác
          }}
        />

        {/* Nội dung chữ */}
        <Grid size={9} display="flex" flexWrap={'wrap'} gap={2} paddingY={4}>
          <Typography variant="h2" color={'white'} width={'100%'}>PHAM GIA LUONG</Typography>
          <Stack direction="row" spacing={8} width={'100%'} >
            <Typography variant="body1" color={'white'}>Software Engineer</Typography>
            <Typography variant="body1" color={'white'}>Software Engineer</Typography>
            <Typography variant="body1" color={'white'}>Software Engineer</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GeneralInfo
