'use client'

import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setSubmitted(true)
      setTimeout(() => {
        setName('')
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="container">
      <div className="hero">
        <h1>🌐 Build Your Digital Future!</h1>
        <p className="subtitle">
          Generate Consistent Online Income Through Digital Marketing
        </p>
      </div>

      <div className="services">
        <div className="service-card">
          <div className="icon">🎯</div>
          <h3>Brand Promotions</h3>
          <p>
            Help businesses grow their brand presence and reach their target audience
            through strategic marketing campaigns. Learn proven techniques to drive
            engagement and conversions.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🤝</div>
          <h3>Affiliate Campaigns</h3>
          <p>
            Master the art of affiliate marketing and earn commissions by promoting
            quality products and services. Build sustainable passive income streams
            that grow over time.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">💼</div>
          <h3>Client Marketing Services</h3>
          <p>
            Offer professional marketing services to clients and build a thriving
            freelance or agency business. Learn how to attract, retain, and deliver
            results for clients.
          </p>
        </div>
      </div>

      <div className="benefits">
        <div className="benefit-item">
          <div className="icon">📈</div>
          <h4>Scalable Income</h4>
          <p>Start small and grow your income potential exponentially</p>
        </div>

        <div className="benefit-item">
          <div className="icon">⏰</div>
          <h4>Flexible Schedule</h4>
          <p>Work from anywhere, anytime on your own terms</p>
        </div>

        <div className="benefit-item">
          <div className="icon">🎓</div>
          <h4>Full Training</h4>
          <p>Get complete guidance and support to succeed</p>
        </div>

        <div className="benefit-item">
          <div className="icon">🚀</div>
          <h4>Fast Start</h4>
          <p>Begin earning with proven strategies and tools</p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Start Your Online Business?</h2>
        <p>
          Join thousands of successful digital marketers earning smart income online.
          Get the complete process and personalized guidance to launch your journey!
        </p>

        {submitted && (
          <div className="success-message">
            ✅ Thanks {name}! Check your email for the complete process and guidance.
          </div>
        )}

        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cta-button">
            YES! Show Me How 💼📊
          </button>
        </form>

        <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#999' }}>
          No spam, ever. Your information is 100% secure.
        </p>
      </div>

      <footer>
        <p>© 2025 Digital Marketing Success. Start building your online income today.</p>
      </footer>
    </div>
  )
}
