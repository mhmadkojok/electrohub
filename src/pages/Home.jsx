import { NavLink } from 'react-router-dom'

const features = [
  {
    icon: '⚡',
    title: 'Arduino Starter Kits',
    desc: 'Complete beginner-to-advanced kits with everything you need to get started with electronics and programming.',
  },
  {
    icon: '🔧',
    title: 'Premium Components',
    desc: 'High-quality sensors, modules, and components sourced from top manufacturers worldwide.',
  },
  {
    icon: '🚀',
    title: 'Fast Shipping',
    desc: 'Orders ship same-day. Free delivery on orders over $50. Tracked worldwide delivery available.',
  },
  {
    icon: '📚',
    title: 'Learning Resources',
    desc: 'Every kit comes with step-by-step guides, project ideas, and access to our maker community.',
  },
  {
    icon: '🛡️',
    title: '2-Year Warranty',
    desc: 'Every product backed by our two-year quality guarantee. Hassle-free returns, no questions asked.',
  },
  {
    icon: '💡',
    title: 'Expert Support',
    desc: 'Our team of engineers is available to help you with any technical questions or project ideas.',
  },
]

const stats = [
  { value: '12,000+', label: 'Happy Makers' },
  { value: '200+', label: 'Products' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'Countries Shipped' },
]

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">⚡ The Maker's Hub</div>
            <h1 className="hero-title">
              Build Anything
              <span className="highlight">With Electronics</span>
              That <span className="accent">Matter</span>
            </h1>
            <p className="hero-desc">
              From Arduino starter kits to advanced sensors and modules — ElectroHub is your one-stop shop for premium electronic components. Power your next big idea.
            </p>
            <div className="hero-actions">
              <NavLink to="/products" className="btn-primary">
                Shop Components →
              </NavLink>
              <NavLink to="/about" className="btn-outline">
                Our Story
              </NavLink>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circuit">
              <div className="circuit-ring"></div>
              <div className="circuit-ring"></div>
              <div className="circuit-ring"></div>
              <div className="circuit-center">
                <div className="circuit-dot"></div>
                <div className="circuit-dot"></div>
                <div className="circuit-dot"></div>
                <div className="circuit-dot"></div>
                <div className="circuit-icon">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <div className="section-tag">Why ElectroHub</div>
            <h2 className="section-title">Everything a <span>Maker Needs</span></h2>
            <p className="section-subtitle">We've thought of every detail so you can focus on building. Premium quality, unbeatable support.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="section-tag">Start Building Today</div>
            <h2 className="section-title">Ready to <span>Power Up?</span></h2>
            <p>Browse our full catalog of 200+ components and kits. Everything you need, shipped to your door.</p>
            <NavLink to="/products" className="btn-primary">
              Explore Products ⚡
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
