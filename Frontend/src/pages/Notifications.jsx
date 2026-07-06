import { useMemo, useState } from 'react';
import './Notifications.css';

const initialNotifications = [
  {
    id: 1,
    title: 'Complaint Updated',
    message: 'Your road maintenance complaint is now under review by the public works team.',
    timestamp: '5 min ago',
    type: 'info',
    read: false,
    icon: '🔔',
  },
  {
    id: 2,
    title: 'Status Changed',
    message: 'The street lighting issue has been marked in progress.',
    timestamp: '25 min ago',
    type: 'success',
    read: false,
    icon: '✅',
  },
  {
    id: 3,
    title: 'Action Needed',
    message: 'Please confirm the location details for your waste complaint.',
    timestamp: '1 hour ago',
    type: 'warning',
    read: true,
    icon: '⚠️',
  },
  {
    id: 4,
    title: 'Important Update',
    message: 'A citywide service alert may affect your scheduled inspection.',
    timestamp: '2 hours ago',
    type: 'important',
    read: false,
    icon: '🚨',
  },
  {
    id: 5,
    title: 'Complaint Resolved',
    message: 'Your water supply complaint has been resolved and closed.',
    timestamp: 'Yesterday',
    type: 'success',
    read: true,
    icon: '🎉',
  },
  {
    id: 6,
    title: 'New Message',
    message: 'The sanitation department shared a new update on your complaint.',
    timestamp: 'Yesterday',
    type: 'info',
    read: false,
    icon: '💬',
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = useMemo(() => notifications.filter((item) => !item.read).length, [notifications]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="notifications-page">
      <section className="notifications-header">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with your complaint activity.</p>
        </div>
        <button className="mark-all-btn" type="button" onClick={markAllAsRead}>
          Mark all as read
        </button>
      </section>

      <section className="notifications-summary">
        <div className="summary-pill">{unreadCount} unread</div>
      </section>

      {notifications.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">
            📭
          </div>
          <h2>No notifications yet.</h2>
          <p>You’re all caught up for now.</p>
        </div>
      ) : (
        <div className="notifications-list">
          {notifications.map((item) => (
            <article key={item.id} className={`notification-card ${item.read ? 'read' : 'unread'}`}>
              <div className="notification-main">
                <div className={`notification-icon ${item.type}`}>{item.icon}</div>
                <div className="notification-content">
                  <div className="notification-title-row">
                    <h3>{item.title}</h3>
                    <span className={`status-badge ${item.type}`}>{item.type}</span>
                  </div>
                  <p>{item.message}</p>
                  <div className="notification-meta">
                    <span>{item.timestamp}</span>
                    {!item.read ? <span className="unread-dot">Unread</span> : null}
                  </div>
                </div>
              </div>

              <button className="delete-btn" type="button" onClick={() => deleteNotification(item.id)}>
                Delete
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
