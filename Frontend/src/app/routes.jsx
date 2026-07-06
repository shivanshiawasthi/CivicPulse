import Home from '../pages/Home';
import ReportIssue from '../pages/ReportIssue';
import TrackComplaint from '../pages/TrackComplaint';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Notifications from '../pages/Notifications';

const routes = [
  { path: '/', element: <Home />, label: 'Home' },
  { path: '/report', element: <ReportIssue />, label: 'Report Issue' },
  { path: '/track', element: <TrackComplaint />, label: 'Track Complaint' },
  { path: '/dashboard', element: <Dashboard />, label: 'Dashboard' },
  { path: '/profile', element: <Profile />, label: 'Profile' },
  { path: '/notifications', element: <Notifications />, label: 'Notifications' },
  { path: '/login', element: <Login />, label: 'Login' },
  { path: '/register', element: <Register />, label: 'Register' },
];

export default routes;
