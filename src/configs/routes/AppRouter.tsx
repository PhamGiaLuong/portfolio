/*
 * React
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

/*
 * Layout
 */
import MainLayout from '../layouts/MainLayout'

/*
 * i18next translation
 */
import i18n from 'i18next'
import type { RootState } from '@/redux/store'

/*
 * Tabs
 */
import HomeTab from '@/features/homeTab'
import ProjectsTab from '@/features/projectsTab'
import SkillsTab from '@/features/skillsTab'
import NotFound from '@/features/notFoundTab'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomeTab /> },
      { path: 'projects', element: <ProjectsTab /> },
      { path: 'skills', element: <SkillsTab /> },
    ],
  },
])

export default function AppRouter() {
  const language = useSelector((state: RootState) => state.language.language)

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  return <RouterProvider router={router} />
}
