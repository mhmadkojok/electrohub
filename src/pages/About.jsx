const timeline = [
  {
    year: '2018',
    title: 'Founded in a Garage',
    desc: 'ElectroHub started as a small passion project by two engineers who wanted affordable components for their maker projects.',
  },
  {
    year: '2019',
    title: 'First 1,000 Customers',
    desc: 'Word spread across maker communities. We shipped to our first 1,000 customers across 15 countries.',
  },
  {
    year: '2021',
    title: 'Expanded Product Line',
    desc: 'Grew from 30 products to 200+, launching our signature Arduino Starter Kit — now our best-seller.',
  },
  {
    year: '2023',
    title: 'Global Shipping Network',
    desc: 'Partnered with logistics leaders to offer fast tracked delivery to 50+ countries worldwide.',
  },
  {
    year: '2024',
    title: 'Learning Platform Launch',
    desc: 'Launched free video tutorials and project guides. Over 12,000 makers have completed our courses.',
  },
]

const team = [
  { name: 'Alex Rivera', role: 'CEO & Co-Founder', emoji: '👨‍💻' },
  { name: 'Priya Nair', role: 'CTO & Co-Founder', emoji: '👩‍🔬' },
  { name: 'Marcus Chen', role: 'Head of Products', emoji: '🧑‍🔧' },
  { name: 'Sofia Müller', role: 'Community Lead', emoji: '👩‍🎨' },
]

function About() {
  return (
    <main className="about-page">
      <div className="container">

        {/* Hero */}
        <div className="about-hero">
          <div className="section-tag">Our Story</div>
          <h1 className="section-title">Built by <span>Makers</span>, for Makers</h1>
          <p className="section-subtitle">
            ElectroHub was born out of frustration with overpriced, hard-to-find components and a love for building things that matter. We set out to create the electronics store we always wished existed.
          </p>
        </div>

        {/* Mission */}
        <div className="about-mission">
          <div className="about-mission-visual">
            <div className="mission-icon-bg">🔬</div>
          </div>
          <div>
            <div className="section-tag">Our Mission</div>
            <h2 className="section-title">Empowering the <span>Next Generation</span> of Engineers</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
              We believe everyone — from curious kids to seasoned engineers — deserves access to quality components, honest pricing, and real support. Our mission is to lower the barrier to building.
            </p>
            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <div>
                  <h4>Quality First</h4>
                  <p>Every component is tested and sourced from verified manufacturers. No cheap knockoffs — ever.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <div>
                  <h4>Community Driven</h4>
                  <p>We listen to our maker community. Your feedback shapes our product catalog and learning resources.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <div>
                  <h4>Global Access</h4>
                  <p>Innovation shouldn't be limited by geography. We ship to 50+ countries with fair international pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <div className="section-tag">Our Journey</div>
          <h2 className="section-title" style={{ marginBottom: '3rem' }}>How We Got <span>Here</span></h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="team-section">
          <div className="section-tag">The Team</div>
          <h2 className="section-title">The People <span>Behind the Hub</span></h2>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{member.emoji}</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}

export default About
