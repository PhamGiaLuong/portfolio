/*
 * React Router Configuration
 */
import { Outlet } from 'react-router-dom'

/*
 * MUI Components
 */
import { Grid } from '@mui/material'

/*
 * Custom Components
 */
import Header from '@/components/Header'
import BodyBox from '@/components/BodyBox'
import Footer from '@/components/Footer'
import GeneralInfo from '@/components/GeneralInfo'

export default function MainLayout() {
  return (
    <div>
      <Header />
      <BodyBox>
        <Grid container >
          <GeneralInfo />
          <Outlet />
        </Grid>
        <Footer />
      </BodyBox>
    </div>
  )
}
