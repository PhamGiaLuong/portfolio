/*
 * MUI Components
 */
import { Grid, Typography } from '@mui/material'

/*
 * Styles
 */
import theme from '@/styles/Theme'

/*
 * Assets
 */
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
  return (
    <Grid
      size={12}
      paddingY={3}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={4}
      color={'white'}
      borderRadius={'0 0 16px 16px'}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Typography variant="body1" color="white">
        Pham Gia Luong
      </Typography>
      <Icon icon="mdi:copyright" width="24" height="24" />
      <Typography variant="body1" color="white">
        2025
      </Typography>
    </Grid>
  )
}

export default Footer
