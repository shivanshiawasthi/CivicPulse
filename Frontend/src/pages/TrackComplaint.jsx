import { useState } from 'react';
import './TrackComplaint.css';

const complaints = [
  {
    id: 'CMP-1042',
    category: 'Road Maintenance',
    description: 'Potholes and damaged road markings near the main junction have been causing traffic issues for several weeks.',
    location: 'Main Street, Downtown',
    dateSubmitted: '2026-07-01',
    assignedDepartment: 'Public Works Department',
    status: 'In Progress',
    progress: 72,
  },
  {
    id: 'CMP-1038',
    category: 'Waste Management',
    description: 'Overflowing bins near the community market have remained unattended for several days.',
    location: 'North Avenue',
    dateSubmitted: '2026-06-28',
    assignedDepartment: 'Sanitation Department',
    status: 'Assigned',
    progress: 45,
  },
  {
    id: 'CMP-1031',
    category: 'Street Lighting',
    description: 'Several streetlights on Park Road are not functioning after sunset.',
    location: 'Park Road',
    dateSubmitted: '2026-06-24',
    assignedDepartment: 'Electrical Department',
    status: 'Resolved',
    progress: 100,
  },
  {
    id: 'CMP-1025',
    category: 'Water Supply',
    description: 'Residents reported low water pressure in the River View area.',
    location: 'River View',
    dateSubmitted: '2026-06-18',
    assignedDepartment: 'Water Utility',
    status: 'Under Review',
    progress: 20,
  },
  {
    id: 'CMP-1019',
    category: 'Public Safety',
    description: 'Broken traffic sign at the school entrance needs replacement.',
    location: 'School Lane',
    dateSubmitted: '2026-06-10',
    assignedDepartment: 'Traffic Department',
    status: 'Submitted',
    progress: 10,
  },
];

const statusOrder = ['Submitted', 'Under Review', 'Assigned', 'In Progress', 'Resolved'];

export default function TrackComplaint() {
  const [searchTerm, setSearchTerm] = useState('CMP-1042');
  const [selectedComplaint, setSelectedComplaint] = useState(complaints[0]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    const normalizedSearch = searchTerm.trim().toUpperCase();
    const foundComplaint = complaints.find((complaint) => complaint.id.toUpperCase() === normalizedSearch);

    if (foundComplaint) {
      setSelectedComplaint(foundComplaint);
      setErrorMessage('');
      return;
    }

    setSelectedComplaint(null);
    setErrorMessage('Complaint not found.');
  };

  const timelineSteps = statusOrder.map((status, index) => {
    const isActive = selectedComplaint?.status === status;
    const isCompleted = statusOrder.indexOf(selectedComplaint?.status || 'Submitted') > index;

    return {
      label: status,
      state: isActive ? 'active' : isCompleted ? 'done' : 'pending',
    };
  });

  return (
    <div className="track-page">
      <section className="track-hero">
        <h1>Track Your Complaint</h1>
        <p>Search for a submitted report and follow its progress from submission to resolution.</p>
      </section>

      <section className="search-card">
        <div className="search-row">
          <input
            type="text"
            placeholder="Enter Complaint ID"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button className="search-btn" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {errorMessage ? <div className="error-message">{errorMessage}</div> : null}
      </section>

      {selectedComplaint ? (
        <>
          <section className="details-card">
            <div className="details-grid">
              <div className="detail-item">
                <div className="detail-label">Complaint ID</div>
                <div className="detail-value">{selectedComplaint.id}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Issue Category</div>
                <div className="detail-value">{selectedComplaint.category}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Description</div>
                <div className="detail-value">{selectedComplaint.description}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Location</div>
                <div className="detail-value">{selectedComplaint.location}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Date Submitted</div>
                <div className="detail-value">{selectedComplaint.dateSubmitted}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Assigned Department</div>
                <div className="detail-value">{selectedComplaint.assignedDepartment}</div>
              </div>
            </div>
          </section>

          <section className="timeline-card">
            <h2>Complaint Status</h2>
            <div className="timeline" aria-label="Complaint status timeline">
              {timelineSteps.map((step) => (
                <div key={step.label} className={`timeline-step ${step.state === 'active' ? 'active' : ''}`}>
                  <strong>{step.label}</strong>
                  <span>{step.state === 'active' ? 'Current' : step.state === 'done' ? 'Completed' : 'Upcoming'}</span>
                </div>
              ))}
            </div>

            <div className="progress-wrap">
              <div className="progress-bar" aria-label="Progress bar">
                <div className="progress-fill" style={{ width: `${selectedComplaint.progress}%` }} />
              </div>
              <div className="progress-text">{selectedComplaint.progress}% complete</div>
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
}
