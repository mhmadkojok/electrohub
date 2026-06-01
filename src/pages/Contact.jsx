import { useState } from 'react'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

const initialErrors = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

function validate(form) {
  const errors = { ...initialErrors }
  let valid = true

  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required.'
    valid = false
  }
  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required.'
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.'
    valid = false
  }
  if (!form.subject) {
    errors.subject = 'Please select a subject.'
    valid = false
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
    valid = false
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.'
    valid = false
  }

  return { errors, valid }
}

const infoCards = [
  {
    icon: '📧',
    title: 'Email Us',
    desc: 'hello@electrohub.io\nWe reply within 24 hours',
  },
  {
    icon: '📞',
    title: 'Call Us',
    desc: '+1 (123) 456-7890\nMon–Fri, 9am–6pm PST',
  },
  {
    icon: '📍',
    title: 'Our Office',
    desc: '123 Maker Lane\nSan Francisco, CA 94105',
  },
]

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { errors: newErrors, valid } = validate(form)
    if (!valid) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors(initialErrors)
    setSubmitted(false)
  }

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-header">
          <div className="section-tag">Get In Touch</div>
          <h1 className="section-title">We'd Love to <span>Hear From You</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a question about a product, an order, or a project idea? Our team is here to help.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Cards */}
          <div className="contact-info">
            {infoCards.map((card, i) => (
              <div className="info-card" key={i}>
                <div className="info-icon">{card.icon}</div>
                <div>
                  <h4>{card.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="contact-form-box">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <br />
                <button className="btn-outline" onClick={handleReset}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <div className="field-error">{errors.firstName}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <div className="field-error">{errors.lastName}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  >
                    <option value="">Select a subject...</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="returns">Returns & Warranty</option>
                    <option value="wholesale">Wholesale / Bulk</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <div className="field-error">{errors.subject}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <div className="field-error">{errors.message}</div>}
                </div>

                <button type="submit" className="form-submit-btn">
                  Send Message ⚡
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
