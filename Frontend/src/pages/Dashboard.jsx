import { Link } from 'react-router-dom';
import './Dashboard.css';

const stats = [
  { title: 'Total Complaints', value: '128', caption: '+12% from last month' },
  { title: 'Pending', value: '24', caption: 'Needs review' },
  { title: 'In Progress', value: '18', caption: 'Assigned to teams' },
  { title: 'Resolved', value: '86', caption: 'Closed successfully' },
];

const recentComplaints = [
  { id: 'CMP-1042', category: 'Roads', location: 'Main Street', status: 'Pending', date: '2026-07-04' },
  { id: 'CMP-1038', category: 'Waste', location: 'North Avenue', status: 'In Progress', date: '2026-07-02' },
  { id: 'CMP-1031', category: 'Lighting', location: 'Park Road', status: 'Resolved', date: '2026-06-30' },
  { id: 'CMP-1025', category: 'Water', location: 'River View', status: 'Pending', date: '2026-06-28' },
];

const quickActions = [
  {
    title: 'Report New Issue',
    description: 'Log a new civic concern in just a few clicks.',
    icon: '📝',
    to: '/report',
  },
  {
    title: 'Track Complaint',
    description: 'Monitor updates and status changes in real time.',
    icon: '📍',
    to: '/track',
  },
  {
    title: 'View Profile',
    description: 'Review your account details and saved preferences.',
    icon: '👤',
    to: '/profile',
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <div className="eyebrow">CivicPulse Dashboard</div>
          <h1>Welcome back, Sarah!</h1>
          <p>Stay on top of community reports, track issue progress, and help keep your city running smoothly.</p>
        </div>
        <div className="hero-badge">Active Citizen</div>
      </section>

      <section className="stats-grid" aria-label="Dashboard statistics">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.title}>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-caption">{stat.caption}</div>
          </article>
        ))}
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <h2>Quick Actions</h2>
            <p>Jump straight into the most common tasks.</p>
          </div>
        </div>

        <div className="actions-grid">
          {quickActions.map((action) => (
            <Link className="action-card" key={action.title} to={action.to}>
              <div className="action-icon" aria-hidden="true">
                {action.icon}
              </div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <h2>Recent Complaints</h2>
            <p>A quick look at the latest civic reports filed.</p>
          </div>
        </div>

        <div className="table-wrap">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentComplaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.location}</td>
                  <td>
                    <span className={`status-pill ${complaint.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {complaint.status}
                    </span>
                  </td>
                  <td>{complaint.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
