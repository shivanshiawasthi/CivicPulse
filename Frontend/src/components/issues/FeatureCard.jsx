import './FeatureCard.css';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
