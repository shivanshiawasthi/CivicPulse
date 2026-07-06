import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './app/routes';

export default function App() {
  return (
    <div className="app">
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

      <main>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 CivicPulse | Built for Smart Cities</p>
      </footer>
    </div>
  );
}