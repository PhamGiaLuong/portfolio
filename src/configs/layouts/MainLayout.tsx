// React Router Configuration
import { Outlet } from 'react-router-dom'

// MUI Components
import { Box } from '@mui/material'

// Custom Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MainLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  )
}
