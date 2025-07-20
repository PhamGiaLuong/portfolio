/*
 * React
 */
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

/*
 * MUI
 */
import {
  Box,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
} from '@mui/material'

/*
 * Assets
 */
import { Icon } from '@iconify/react'
import vi from '@/assets/vn.svg'
import en from '@/assets/en.svg'

/*
 * Redux
 */
import { setLanguage } from '@/redux/slices/languageSlice'
import type { RootState } from '@/redux/store'

/*
 * Theme
 */
import theme from '@/styles/Theme'

const navLinkStyle = {
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontWeight: 'bold',
  alignItems: 'center',
  display: 'flex',
}

const Header = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const language = useSelector((state: RootState) => state.language.language)
  const [lang, setLang] = useState(language)
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [openDrawer, setOpenDrawer] = useState(false)

  const handleLanguageChange = (newLang: 'en' | 'vi') => {
    setLang(newLang)
    dispatch(setLanguage(newLang))
  }
  const rightMenu = (
    <>
      <NavLink to="/" style={navLinkStyle}>
        {t('Header:myCV')}
      </NavLink>
      <NavLink to="/education" style={navLinkStyle}>
        <Icon icon={'ic:round-facebook'} width={30} height={30} />
      </NavLink>
      <NavLink to="/experience" style={navLinkStyle}>
        <Icon icon={'mdi:github'} width={30} height={30} />
      </NavLink>
      {lang === 'en' ? (
        <Button
          sx={{ minWidth: 'unset', padding: 0 }}
          onClick={() => handleLanguageChange('vi')}
        >
          <img src={vi} width={30} height={30} />
        </Button>
      ) : (
        <Button
          sx={{ minWidth: 'unset', padding: 0 }}
          onClick={() => handleLanguageChange('en')}
        >
          <img src={en} width={30} height={30} />
        </Button>
      )}
    </>
  )
  const leftMenu = (
    <>
      <NavLink to="/" style={navLinkStyle}>
        {t('Header:home')}
      </NavLink>
      <NavLink to="/education" style={navLinkStyle}>
        {t('Header:education')}
      </NavLink>
      <NavLink to="/skills" style={navLinkStyle}>
        {t('Header:skills')}
      </NavLink>
      <NavLink to="/projects" style={navLinkStyle}>
        {t('Header:projects')}
      </NavLink>
      <NavLink to="/experience" style={navLinkStyle}>
        {t('Header:experience')}
      </NavLink>
    </>
  )
  return (
    // Container for the header
    <Box
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 2px 8px #578FCA',
        width: '100vw',
      }}
    >
      {/*  Header content */}
      <Stack
        px={{ xs: 2, sm: 4, md: 8, lg: 12, xl: 25 }}
        py={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        {' '}
        {isTablet && (
          <>
            <Stack direction={'row'} alignItems={'center'} gap={8}>
              {leftMenu}
            </Stack>
            <IconButton onClick={() => setOpenDrawer(true)}>
              <Icon icon="ic:baseline-menu" width="24" height="24" />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <Stack direction="column" gap={4} alignItems={'center'} p={4}>
                {rightMenu}
              </Stack>
            </Drawer>
          </>
        )}
        {isMobile && (
          <>
            <IconButton onClick={() => setOpenDrawer(true)}>
              <Icon icon="ic:baseline-menu" width="24" height="24" />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <Stack direction="column" gap={4} alignItems={'center'} p={4}>
                {leftMenu}
                {rightMenu}
              </Stack>
            </Drawer>
          </>
        )}
        {isDesktop && (
          <>
            <Stack direction={'row'} alignItems={'center'} gap={8}>
              {leftMenu}
            </Stack>
            <Stack direction="row" gap={8}>
              {rightMenu}
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  )
}

export default Header
