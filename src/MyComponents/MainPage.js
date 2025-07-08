import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// SVG Icons as components
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
)

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
)

const ShoppingBag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 01-8 0"></path>
  </svg>
)

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const Search = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="M21 21l-4.35-4.35"></path>
  </svg>
)

const User = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const Zap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
  </svg>
)

const Star = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
  </svg>
)

const Heart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  </svg>
)

const TrendingUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
    <polyline points="17,6 23,6 23,12"></polyline>
  </svg>
)

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Featured products for slideshow
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
      badge: "Best Seller",
      description: "Experience crystal-clear audio with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$199",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      badge: "New Arrival",
      description: "Track your health and stay connected on the go"
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: "$89",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
      badge: "Limited Edition",
      description: "Stylish and functional for everyday adventures"
    },
    {
      id: 4,
      name: "Skincare Essentials Set",
      price: "$149",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
      badge: "Customer Favorite",
      description: "Complete skincare routine for radiant skin"
    }
  ]

  // Product categories
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: <Zap />,
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      itemCount: "2,450+ items",
      gradient: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
      link: "/mainpage/electronics"
    },
    {
      id: 2,
      name: "Fashion",
      icon: <Heart />,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      itemCount: "3,200+ items",
      gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
      link: "/category/fashion"
    },
    {
      id: 3,
      name: "Home & Garden",
      icon: <ShoppingBag />,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      itemCount: "1,800+ items",
      gradient: "linear-gradient(135deg, #10B981, #0D9488)",
      link: "/category/homegarden"
    },
    {
      id: 4,
      name: "Beauty",
      icon: <Star />,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      itemCount: "1,200+ items",
      gradient: "linear-gradient(135deg, #F97316, #EF4444)",
      link: "/category/beauty"
    },
    {
      id: 5,
      name: "Sports",
      icon: <TrendingUp />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      itemCount: "900+ items",
      gradient: "linear-gradient(135deg, #6366F1, #3B82F6)",
      link: "/category/sports"
    },
    {
      id: 6,
      name: "Books",
      icon: <ShoppingBag />,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      itemCount: "5,000+ items",
      gradient: "linear-gradient(135deg, #EAB308, #F97316)",
      link: "/category/books"
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    navbar: {
      background: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    navLinks: {
      display: 'flex',
      gap: '1rem',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    navLink: {
      color: '#6b7280',
      textDecoration: 'none',
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'color 0.2s',
      cursor: 'pointer'
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      background: '#f3f4f6',
      borderRadius: '9999px',
      padding: '0.5rem 1rem',
      '@media (max-width: 640px)': {
        display: 'none'
      }
    },
    searchInput: {
      marginLeft: '0.5rem',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontSize: '0.875rem',
      width: '10rem'
    },
    iconButton: {
      padding: '0.5rem',
      borderRadius: '9999px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    heroSection: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(to right, #581c87, #1e3a8a, #3730a3)'
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.2)'
    },
    heroContainer: {
      position: 'relative',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    slideContainer: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      transition: 'transform 0.7s ease-in-out',
      transform: `translateX(-${currentSlide * 100}%)`
    },
    slide: {
      width: '100%',
      flexShrink: 0,
      position: 'relative'
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    slideOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent)',
      zIndex: 10
    },
    slideContent: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 20,
      padding: '1rem'
    },
    slideText: {
      textAlign: 'center',
      color: 'white',
      maxWidth: '64rem',
      margin: '0 auto'
    },
    slideBadge: {
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
    slideTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, white, #e5e7eb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    slideDescription: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#d1d5db',
      maxWidth: '32rem',
      margin: '0 auto 2rem auto',
      '@media (max-width: 768px)': {
        fontSize: '1rem'
      }
    },
    slideActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap'
    },
    slidePrice: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#fbbf24',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem'
      }
    },
    slideButton: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    navArrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      color: 'white',
      padding: '0.75rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      zIndex: 30
    },
    navArrowLeft: {
      left: '1.5rem'
    },
    navArrowRight: {
      right: '1.5rem'
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '0.75rem',
      zIndex: 30
    },
    dot: {
      width: '0.75rem',
      height: '0.75rem',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    dotActive: {
      background: 'white',
      transform: 'scale(1.25)'
    },
    dotInactive: {
      background: 'rgba(255, 255, 255, 0.5)'
    },
    categoriesSection: {
      padding: '4rem 1rem',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    categoriesHeader: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    categoriesTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #1f2937, #6b7280)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    categoriesSubtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '32rem',
      margin: '0 auto'
    },
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }
    },
    categoryCard: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '1.5rem',
      background: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.5s',
      cursor: 'pointer'
    },
    categoryImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      transition: 'transform 0.7s'
    },
    categoryOverlay: {
      position: 'absolute',
      inset: 0,
      opacity: 0.6,
      transition: 'opacity 0.3s'
    },
    categoryContent: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1.5rem'
    },
    categoryTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    },
    categoryIcon: {
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      borderRadius: '9999px',
      padding: '0.75rem',
      color: 'white',
      transition: 'all 0.3s'
    },
    categoryCount: {
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      borderRadius: '9999px',
      padding: '0.25rem 0.75rem',
      color: 'white',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    categoryBottom: {
      color: 'white'
    },
    categoryName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      transition: 'color 0.3s'
    },
    categoryButton: {
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    dealsSection: {
      padding: '4rem 1rem',
      background: 'linear-gradient(to right, #581c87, #7c3aed, #ec4899)',
      textAlign: 'center'
    },
    dealsContainer: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    dealsTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    dealsSubtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '2rem',
      maxWidth: '32rem',
      margin: '0 auto 2rem auto'
    },
    dealsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }
    },
    dealCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(4px)',
      borderRadius: '1rem',
      padding: '2rem',
      color: 'white',
      transition: 'all 0.3s'
    },
    dealValue: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    dealDescription: {
      fontSize: '1.125rem',
      marginBottom: '1rem'
    },
    dealButton: {
      padding: '0.5rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      color: 'black'
    }
  }

  return (
    <div style={styles.container}>
      {/* Navigation Header */}
      

      {/* Hero Slideshow Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        
        <div style={styles.heroContainer}>
          <div style={styles.slideContainer}>
            {featuredProducts.map((product, index) => (
              <div key={product.id} style={styles.slide}>
                <div style={styles.slideOverlay}></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={styles.slideImage}
                />
                <div style={styles.slideContent}>
                  <div style={styles.slideText}>
                    <div style={styles.slideBadge}>
                      {product.badge}
                    </div>
                    <h1 style={styles.slideTitle}>
                      {product.name}
                    </h1>
                    <p style={styles.slideDescription}>
                      {product.description}
                    </p>
                    <div style={styles.slideActions}>
                      <span style={styles.slidePrice}>
                        {product.price}
                      </span>
                      <button style={styles.slideButton}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            style={{...styles.navArrow, ...styles.navArrowLeft}}
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={nextSlide}
            style={{...styles.navArrow, ...styles.navArrowRight}}
          >
            <ChevronRight />
          </button>
          
          {/* Dots Indicator */}
          <div style={styles.dotsContainer}>
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  ...styles.dot,
                  ...(index === currentSlide ? styles.dotActive : styles.dotInactive)
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div style={styles.categoriesSection}>
        <div style={styles.categoriesHeader}>
          <h2 style={styles.categoriesTitle}>
            Shop by Category
          </h2>
          <p style={styles.categoriesSubtitle}>
            Discover amazing products across all your favorite categories
          </p>
        </div>
        
        <div style={styles.categoriesGrid}>
          {categories.map((category) => (
            <div 
              key={category.id}
              style={styles.categoryCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                e.currentTarget.querySelector('img').style.transform = 'scale(1)'
              }}
            >
              <img 
                src={category.image} 
                alt={category.name}
                style={styles.categoryImage}
              />
              <div style={{
                ...styles.categoryOverlay,
                background: category.gradient
              }}></div>
              
              <div style={styles.categoryContent}>
                <div style={styles.categoryTop}>
                  <div style={styles.categoryIcon}>
                    {category.icon}
                  </div>
                  <div style={styles.categoryCount}>
                    {category.itemCount}
                  </div>
                </div>
                
                <div style={styles.categoryBottom}>
                  <h3 style={styles.categoryName}>
                    {category.name}
                  </h3>
                 <Link to={category.link} style={{ textDecoration: 'none' }}>
                  <button style={styles.categoryButton}>
                    Explore →
                  </button>
                </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Deals Section */}
      <div style={styles.dealsSection}>
        <div style={styles.dealsContainer}>
          <h2 style={styles.dealsTitle}>
            Don't Miss Out!
          </h2>
          <p style={styles.dealsSubtitle}>
            Limited time offers on your favorite products. Shop now and save big!
          </p>
          <div style={styles.dealsGrid}>
            <div style={styles.dealCard}>
              <div style={{...styles.dealValue, color: '#fbbf24'}}>50%</div>
              <div style={styles.dealDescription}>OFF Electronics</div>
              <button style={{...styles.dealButton, background: '#fbbf24'}}>
                Shop Now
              </button>
            </div>
            <div style={styles.dealCard}>
              <div style={{...styles.dealValue, color: '#34d399'}}>Free</div>
              <div style={styles.dealDescription}>Shipping on $50+</div>
              <button style={{...styles.dealButton, background: '#34d399'}}>
                Learn More
              </button>
            </div>
            <div style={styles.dealCard}>
              <div style={{...styles.dealValue, color: '#fb7185'}}>24/7</div>
              <div style={styles.dealDescription}>Customer Support</div>
              <button style={{...styles.dealButton, background: '#fb7185'}}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage