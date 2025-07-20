import { useEffect } from 'react'
import i18n from 'i18next'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'

function App() {
  const language = useSelector(
    (state: RootState) => state.language.language
  )

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <>
      <h1>PGL Portfolio</h1>
    </>
  )
}

export default App
