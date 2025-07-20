/*
 * React Router
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/*
 * Layout
 */
import MainLayout from '../layouts/MainLayout'

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
  return <RouterProvider router={router} />
}
