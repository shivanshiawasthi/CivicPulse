import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ routes }) {
  return (
    <nav className="navbar">
      <div className="logo">CivicPulse</div>

      <div className="nav-links">
        {routes.map((route) => (
          <NavLink key={route.path} to={route.path} end={route.path === '/'}>
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
