import BodyBox from '@/components/BodyBox'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Portrait from '@/assets/portrait.png'
import theme from '@/styles/Theme'
import { useState } from 'react'
import TypingEffect from '@/styles/TypingEffect'
import { Trans, useTranslation } from 'react-i18next'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function HomeTab() {
  const { t } = useTranslation('HomeTab')
  useScrollReveal('fade-up', 'show', 0.15)
  return (
    <>
      <Box height={'95vh'} width={'100%'} sx={{ backgroundColor: '#E8F9FF' }}>
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

      <BodyBox direction={'row'}>
        <Typography variant="h1">LET ME INTRODUCE MYSELF</Typography>
        <Typography variant="h3" className="fade-up" sx={{ marginTop: '20px' }}>
          {t('Welcome.Description')}
        </Typography>
      </BodyBox>
    </>
  )
}
