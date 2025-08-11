import BodyBox from '@/components/BodyBox'
import { Box, Grid, Stack, StepConnector, Typography } from '@mui/material'
import Portrait from '@/assets/portrait.png'
import Standing from '@/assets/standing.png'
import theme from '@/styles/Theme'
import { useState } from 'react'
import TypingEffect from '@/styles/TypingEffect'
import { Trans, useTranslation } from 'react-i18next'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useOutletContext } from 'react-router-dom'
// Assets
import { Icon } from '@iconify/react/dist/iconify.js'
import * as Constants from '@/utils/Constants'

type ContextType = { headerHeight: number }

export default function HomeTab() {
  const { t } = useTranslation('HomeTab')
  useScrollReveal('fade-up', 'show', 0.15)
  const { headerHeight } = useOutletContext<ContextType>()

  return (
    <>
      {/* Welcome section */}
      <Box
        height={`calc(100vh - ${headerHeight}px)`}
        width={'100%'}
        sx={{ backgroundColor: '#E8F9FF' }}
      >
        <BodyBox
          justifyContent={'center'}
          alignItems={'center'}
          direction={'row'}
          position={'relative'}
          overflow={'hidden'}
        >
          <Grid
            size={9}
            display="flex"
            flexDirection={'column'}
            gap={2}
            height={'max-content'}
          >
            <Typography variant="h1" className="fade-up">
              {t('Welcome.Hello')}
            </Typography>
            <Typography variant="h1" className="fade-up">
              <Trans
                i18nKey="HomeTab:Welcome.Name"
                components={[
                  <Box
                    component="span"
                    fontWeight="bold"
                    fontFamily="Bad Script"
                    color={theme.palette.primary.main}
                  />,
                ]}
              />
            </Typography>
            <Typography variant="h1" className="fade-up">
              <Trans
                i18nKey="HomeTab:Welcome.Job"
                components={[
                  <Box
                    component="span"
                    fontWeight="bold"
                    fontFamily="Bad Script"
                    color={theme.palette.primary.main}
                  />,
                ]}
              />
            </Typography>
            <Typography variant="h3" className="fade-up">
              <Trans
                i18nKey="HomeTab:Welcome.Description"
                components={[
                  <Box
                    component="span"
                    fontWeight="bold"
                    fontFamily="Bad Script"
                    color={theme.palette.primary.main}
                  />,
                ]}
              />
            </Typography>
            <Box className="fade-up">
              <TypingEffect text={t('HomeTab:Welcome.Action')} minLength={1} />
            </Box>
          </Grid>
          <Grid
            size={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'max-content',
              position: 'relative',
            }}
            className="fade-up"
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
          {/* Wave 1 */}
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '200%',
              transform: 'scaleY(0.25)',
              transformOrigin: 'bottom',
              animation: 'wave1 8s linear infinite',
            }}
          >
            <path
              fill="#1E90FF"
              d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,181.3C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96V320H0Z"
            />
          </Box>

          {/* Wave 2 */}
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '200%',
              transform: 'scaleY(0.25)',
              transformOrigin: 'bottom',
              animation: 'wave2 12s linear infinite',
            }}
          >
            <path
              fill={theme.palette.primary.light}
              fillOpacity="0.7"
              d="M0,224L80,224C160,224,320,224,480,192C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96V320H0Z"
            />
          </Box>

          <style>
            {`
              @keyframes wave1 {
                0% { transform: translateX(0) scaleY(0.25); }
                100% { transform: translateX(-50%) scaleY(0.25); }
              }
              @keyframes wave2 {
                0% { transform: translateX(0) scaleY(0.25); }
                100% { transform: translateX(-50%) scaleY(0.25); }
              }
            `}
          </style>
        </BodyBox>
      </Box>

      {/* Introduce section */}
      <BodyBox direction={'row'} minHeight={'500px'} paddingY={4}>
        <Grid
          size={3}
          className="fade-up"
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'end'}
          sx={{ backgroundColor: theme.palette.primary.dark }}
          borderRadius={1}
          overflow={'hidden'}
        >
          <img src={Standing} alt="Standing" width={'100%'} />
        </Grid>
        <Grid
          size={9}
          className="fade-up"
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={10}
        >
          <Typography variant="h1">
            <Trans
              i18nKey="HomeTab:Introduce.Heading"
              components={[
                <Box component="span" color={theme.palette.primary.dark} />,
              ]}
            />
          </Typography>
          <Stack direction={'column'} spacing={2}>
            <Typography variant="body1">
              <Trans
                i18nKey="HomeTab:Introduce.Job"
                components={[<strong />]}
              />
            </Typography>
            <Typography variant="body1">
              {t('HomeTab:Introduce.Specialize')}
            </Typography>
            <Typography variant="body1">
              {t('HomeTab:Introduce.Approach')}
            </Typography>
            <Typography variant="body1">
              <Trans
                i18nKey="HomeTab:Introduce.WebSide"
                components={[
                  <strong style={{ color: theme.palette.primary.main }} />,
                ]}
              />
            </Typography>
            <Typography variant="body1">
              <Trans
                i18nKey="HomeTab:Introduce.EmbeddedSide"
                components={[
                  <strong style={{ color: theme.palette.primary.main }} />,
                ]}
              />
            </Typography>
            <Typography variant="body1">
              {t('HomeTab:Introduce.Enjoy')}
            </Typography>
          </Stack>
        </Grid>
      </BodyBox>

      <BodyBox
        direction={'column'}
        paddingY={4}
        minHeight={'40vh'}
        justifyContent={'center'}
      >
        <Typography
          variant="h1"
          className="fade-up"
          color={theme.palette.primary.dark}
        >
          <Trans i18nKey="HomeTab:Contact.Heading" />
        </Typography>
        <Stack direction={'column'} spacing={4} className="fade-up">
          <Typography variant="body1">
            <Trans i18nKey="HomeTab:Contact.Invite" />
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={'start'}
            alignItems={'center'}
            gap={2}
          >
            {Constants.Contacts.map((contact, index) => (
              <Box
                display={'flex'}
                alignItems={'center'}
                gap={4}
                height={'30px'}
                width={'max-content'}
                padding={'4px 8px'}
                border={'1px solid'}
                borderRadius={2}
                key={index}
                onClick={() => window.open(contact.link, '_blank')}
              >
                <Icon icon={contact.icon} height={'100%'} width={'25px'} />

                <Typography variant="body1" width={'max-content'}>
                  {contact.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </BodyBox>
    </>
  )
}
