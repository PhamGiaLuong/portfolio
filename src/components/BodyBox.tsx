/**
 * MUI Components
 */
import { Grid } from '@mui/material'
import type { GridProps } from '@mui/material'
import React from 'react'

type BodyBoxProps = GridProps & {
  children: React.ReactNode
}

const BodyBox: React.FC<BodyBoxProps> = ({ children, ...props }) => {
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      px={{ xs: 2, sm: 8, md: 12, lg: 20, xl: 25 }}
      display={'flex'}
      direction={'column'}
      justifyContent={'space-between'}
      minHeight={'90vh'}
      {...props}
    >
      {children}
    </Grid>
  )
}

export default BodyBox
