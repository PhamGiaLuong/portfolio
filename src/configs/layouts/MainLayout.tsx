/*
 * React Router Configuration
 */
import { Outlet, NavLink } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{' '}
        <NavLink to="/projects">Projects</NavLink> |{' '}
        <NavLink to="/skills">Skills</NavLink>
      </nav>
      <hr />
      <Outlet /> {/* nơi render các page con */}
    </div>
  )
}
