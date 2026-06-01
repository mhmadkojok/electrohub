import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="navbar-logo">Electro<span>Hub</span></div>
            <p>Your premier destination for Arduino kits and electronic components. We power the makers, engineers, and innovators of tomorrow.</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@electrohub.io">hello@electrohub.io</a></li>
              <li><a href="tel:+11234567890">+1 (123) 456-7890</a></li>
              <li><a href="#">San Francisco, CA</a></li>
              <li><a href="#">Mon–Fri, 9am–6pm</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ElectroHub. Built with ⚡ for makers everywhere.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
