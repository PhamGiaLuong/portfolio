/*
 * React Router Configuration
 */
import { Outlet, NavLink } from 'react-router-dom'
import Header from '@/components/Header'
import BodyBox from '@/components/BodyBox'
import Footer from '@/components/Footer'
import GeneralInfo from '@/components/GeneralInfo'
import { Grid, Stack } from '@mui/material'

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
      {/* <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{' '}
        <NavLink to="/projects">Projects</NavLink> |{' '}
        <NavLink to="/skills">Skills</NavLink>
      </nav>
      <hr /> */}
      {/* <Outlet /> nơi render các page con */}
    </div>
  )
}
