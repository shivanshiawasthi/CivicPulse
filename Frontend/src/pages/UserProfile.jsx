import './UserProfile.css';

const profile = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  phone: '+1 (555) 014-2039',
  address: '120 Civic Avenue, Downtown',
  memberSince: 'January 2024',
};

const stats = [
  { title: 'Total Complaints', value: '12' },
  { title: 'Pending', value: '3' },
  { title: 'In Progress', value: '2' },
  { title: 'Resolved', value: '7' },
];

const complaints = [
  { id: 'CMP-1042', category: 'Road Maintenance', status: 'In Progress', date: '2026-07-04' },
  { id: 'CMP-1038', category: 'Waste Management', status: 'Pending', date: '2026-07-01' },
  { id: 'CMP-1031', category: 'Street Lighting', status: 'Resolved', date: '2026-06-30' },
];

export default function UserProfile() {
  return (
    <div className="user-profile-page">
      <section className="profile-card">
        <div className="avatar" aria-hidden="true">
          SJ
        </div>

        <div className="profile-intro">
          <h1>{profile.name}</h1>
          <p>Community member helping improve local services through CivicPulse.</p>

          <div className="profile-meta">
            <div className="meta-item">
              <span className="meta-label">Email</span>
              <strong>{profile.email}</strong>
            </div>
            <div className="meta-item">
              <span className="meta-label">Phone</span>
              <strong>{profile.phone}</strong>
            </div>
            <div className="meta-item">
              <span className="meta-label">Address</span>
              <strong>{profile.address}</strong>
            </div>
            <div className="meta-item">
              <span className="meta-label">Member Since</span>
              <strong>{profile.memberSince}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Profile statistics">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.title}>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
          </article>
        ))}
      </section>

      <section className="profile-actions">
        <button className="action-btn primary" type="button">Edit Profile</button>
        <button className="action-btn secondary" type="button">Change Password</button>
        <button className="action-btn danger" type="button">Logout</button>
      </section>

      <section className="complaints-card">
        <div className="section-heading">
          <h2>Recent Complaints</h2>
        </div>

        <div className="table-wrap">
          <table className="profile-table">
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.category}</td>
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
