import { Link } from 'react-router-dom';
import { FaCamera, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import FeatureCard from '../components/issues/FeatureCard';
import './Home.css';

const features = [
  {
    icon: FaCamera,
    title: 'AI Image Detection',
    description:
      'Upload a photo and let CivicPulse identify the issue type with intelligent image analysis.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'GPS Location Tracking',
    description:
      'Capture the location of each complaint so city teams can act quickly and accurately.',
  },
  {
    icon: FaPaperPlane,
    title: 'Fast Complaint Reporting',
    description:
      'Submit reports in minutes and help citizens resolve civic problems with less friction.',
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Smart Civic Engagement</span>

          <h1>Report civic issues faster with AI-powered support.</h1>

          <p>
            CivicPulse helps citizens report potholes, garbage, leaks, broken
            streetlights, and other civic issues using AI-powered image
            recognition and location tracking.
          </p>

          <Link className="hero-button" to="/report">
            Report an Issue
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-heading">
          <h2>Why CivicPulse?</h2>
          <p>
            Built for modern cities that want faster, smarter issue resolution.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}