import Home from '../pages/Home';
import ReportIssue from '../pages/ReportIssue';
import TrackComplaint from '../pages/TrackComplaint';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

const routes = [
  { path: '/', element: <Home />, label: 'Home' },
  { path: '/report', element: <ReportIssue />, label: 'Report Issue' },
  { path: '/track', element: <TrackComplaint />, label: 'Track Complaint' },
  { path: '/dashboard', element: <Dashboard />, label: 'Dashboard' },
  { path: '/login', element: <Login />, label: 'Login' },
  { path: '/register', element: <Register />, label: 'Register' },
];

export default routes;
