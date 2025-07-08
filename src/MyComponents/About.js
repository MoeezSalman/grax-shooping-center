import React from 'react'

// SVG Icons matching the main page
const Users = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
    <path d="M16 3.13a4 4 0 010 7.75"></path>
  </svg>
)

const Award = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
  </svg>
)

const Target = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
)

const Heart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  </svg>
)

const Globe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>
)

const Zap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
  </svg>
)

const Shield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
)

export const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    heroSection: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(to right, #581c87, #1e3a8a, #3730a3)',
      padding: '6rem 1rem',
      textAlign: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.2)'
    },
    heroContent: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      zIndex: 10
    },
    heroBadge: {
      display: 'inline-block',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '1rem',
      animation: 'pulse 2s infinite'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, white, #e5e7eb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      '@media (max-width: 768px)': {
        fontSize: '2.5rem'
      }
    },
    heroDescription: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      maxWidth: '48rem',
      margin: '0 auto 2rem auto',
      lineHeight: 1.6,
      '@media (max-width: 768px)': {
        fontSize: '1rem'
      }
    },
    contentSection: {
      padding: '4rem 1rem',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #1f2937, #6b7280)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      textAlign: 'center',
      maxWidth: '48rem',
      margin: '0 auto 3rem auto',
      lineHeight: 1.6
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '1.5rem'
      }
    },
    valueCard: {
      background: 'white',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s',
      border: '1px solid #f3f4f6',
      cursor: 'pointer'
    },
    valueIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      marginBottom: '1rem',
      color: 'white',
      transition: 'all 0.3s'
    },
    valueTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#1f2937'
    },
    valueDescription: {
      color: '#6b7280',
      lineHeight: 1.6
    },
    statsSection: {
      background: 'linear-gradient(to right, #581c87, #7c3aed, #ec4899)',
      padding: '4rem 1rem',
      textAlign: 'center'
    },
    statsContainer: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    statsTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    statsSubtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '3rem',
      maxWidth: '32rem',
      margin: '0 auto 3rem auto'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '1.5rem'
      }
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(4px)',
      borderRadius: '1rem',
      padding: '2rem',
      color: 'white',
      transition: 'all 0.3s'
    },
    statValue: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '1.125rem',
      opacity: 0.9
    },
    storySection: {
      padding: '4rem 1rem',
      background: 'white'
    },
    storyContainer: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    storyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '2rem'
      }
    },
    storyContent: {
      maxWidth: '100%'
    },
    storyImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    storyText: {
      fontSize: '1.125rem',
      color: '#4b5563',
      lineHeight: 1.8,
      marginBottom: '1.5rem'
    },
    ctaSection: {
      padding: '4rem 1rem',
      background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #1f2937, #6b7280)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    ctaDescription: {
      fontSize: '1.25rem',
      color: '#6b7280',
      marginBottom: '2rem',
      maxWidth: '32rem',
      margin: '0 auto 2rem auto'
    },
    ctaButton: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.125rem',
      transition: 'all 0.3s',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }
  }

  const values = [
    {
      icon: <Heart />,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction with every interaction.",
      gradient: "linear-gradient(135deg, #ec4899, #f43f5e)"
    },
    {
      icon: <Award />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in product quality and service delivery, never compromising on what matters most.",
      gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
    },
    {
      icon: <Zap />,
      title: "Innovation Drive",
      description: "We continuously innovate and evolve, bringing you the latest trends and cutting-edge solutions in e-commerce.",
      gradient: "linear-gradient(135deg, #f97316, #ef4444)"
    },
    {
      icon: <Shield />,
      title: "Trust & Security",
      description: "Your privacy and security are paramount. We ensure safe transactions and protect your personal information.",
      gradient: "linear-gradient(135deg, #10b981, #0d9488)"
    },
    {
      icon: <Globe />,
      title: "Global Reach",
      description: "We connect customers worldwide, bringing diverse products and cultures together in one seamless marketplace.",
      gradient: "linear-gradient(135deg, #6366f1, #3b82f6)"
    },
    {
      icon: <Target />,
      title: "Purpose Driven",
      description: "We're committed to making a positive impact, supporting sustainable practices and community growth.",
      gradient: "linear-gradient(135deg, #eab308, #f97316)"
    }
  ]

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            Our Story
          </div>
          <h1 style={styles.heroTitle}>
            About Our Journey
          </h1>
          <p style={styles.heroDescription}>
            We're more than just an e-commerce platform. We're a community of innovators, 
            dreamers, and problem-solvers dedicated to transforming how people shop and 
            connect with the products they love.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <p style={styles.sectionSubtitle}>
          These principles guide everything we do and shape the experience we create for our customers
        </p>
        
        <div style={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={index}
              style={styles.valueCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                ...styles.valueIcon,
                background: value.gradient
              }}>
                {value.icon}
              </div>
              <h3 style={styles.valueTitle}>{value.title}</h3>
              <p style={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <h2 style={styles.statsTitle}>
            Our Impact in Numbers
          </h2>
          <p style={styles.statsSubtitle}>
            See how we're making a difference in the e-commerce world
          </p>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, color: '#fbbf24'}}>2M+</div>
              <div style={styles.statLabel}>Happy Customers</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, color: '#34d399'}}>50K+</div>
              <div style={styles.statLabel}>Products Available</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, color: '#fb7185'}}>150+</div>
              <div style={styles.statLabel}>Countries Served</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, color: '#a78bfa'}}>99.9%</div>
              <div style={styles.statLabel}>Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div style={styles.storySection}>
        <div style={styles.storyContainer}>
          <div style={styles.storyGrid}>
            <div style={styles.storyContent}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <p style={styles.storyText}>
                Founded in 2018 with a simple vision: to create an online marketplace that 
                truly serves its community. What started as a small team of passionate 
                entrepreneurs has grown into a global platform trusted by millions.
              </p>
              <p style={styles.storyText}>
                We believe that shopping should be more than just transactions—it should be 
                about discovery, connection, and finding products that truly enhance your life. 
                That's why we've built a platform that prioritizes user experience, quality, 
                and authentic relationships with our customers.
              </p>
              <p style={styles.storyText}>
                Today, we're proud to support thousands of sellers and millions of customers 
                worldwide, creating a vibrant ecosystem where great products meet the people 
                who need them most.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our team working together"
                style={styles.storyImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>
          Ready to Join Our Community?
        </h2>
        <p style={styles.ctaDescription}>
          Experience the difference of shopping with a platform that truly cares about you
        </p>
        <button 
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          Start Shopping Today
        </button>
      </div>
    </div>
  )
}