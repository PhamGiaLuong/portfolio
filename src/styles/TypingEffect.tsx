import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material'

interface TypingEffectProps {
  text: string
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterFinish?: number
  minLength?: number
  sx?: SxProps<Theme>
}

export default function TypingEffect({
  text,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayAfterFinish = 3000,
  minLength = 1,
  sx = {},
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState<string>('')
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < text.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1))
      }, typingSpeed)
    } else if (!isDeleting && displayed.length === text.length) {
      // Stop and delete
      timer = setTimeout(() => setIsDeleting(true), delayAfterFinish)
    } else if (isDeleting && displayed.length > minLength) {
      // Deleting but stop at minLength
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1))
      }, deletingSpeed)
    } else if (isDeleting && displayed.length === minLength) {
      // Start typing again
      setIsDeleting(false)
    }

    return () => clearTimeout(timer)
  }, [
    displayed,
    isDeleting,
    text,
    typingSpeed,
    deletingSpeed,
    delayAfterFinish,
    minLength,
  ])

  return (
    <Box
      sx={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {displayed}
    </Box>
  )
}
