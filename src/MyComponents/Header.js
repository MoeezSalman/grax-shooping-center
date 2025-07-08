import { Link } from "react-router-dom";
 const ShoppingBag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 01-8 0"></path>
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
const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

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
      zIndex: 50,
      transition: 'all 0.3s ease'
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
      color: '#1f2937',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
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
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      borderRadius: '0.5rem',
      position: 'relative'
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
      transition: 'all 0.3s ease',
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
      width: '10rem',
      transition: 'all 0.3s ease'
    },
    iconButton: {
      padding: '0.5rem',
      borderRadius: '9999px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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

export default function Header(props) {
    return (
        <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          {/* Logo */}
          <div 
            style={styles.logo}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.color = '#7c3aed';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.color = '#1f2937';
            }}
          >
            <ShoppingBag />
            <span style={{marginLeft: '0.5rem'}}>Grax</span>
          </div>

          {/* Desktop Navigation */}
          <div style={styles.navLinks}>
            <Link 
              to="/mainpage" 
              style={styles.navLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c3aed';
                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6b7280';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Home
            </Link>

            <Link 
              to="/itempage" 
              style={styles.navLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c3aed';
                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6b7280';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Items
            </Link>

          

            <Link 
              to="/About" 
              style={styles.navLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c3aed';
                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6b7280';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              About
            </Link>
          </div>

          {/* Search and User Icons */}
          <div style={styles.searchContainer}>
            <div 
              style={styles.searchBox}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Search />
              <input 
                type="text" 
                placeholder="Search products..." 
                style={styles.searchInput}
              />
            </div>

            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <button 
                style={styles.iconButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.color = '#7c3aed';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.color = 'inherit';
                }}
              >
                <User />
              </button>
            </Link>

            <button 
              style={styles.iconButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.color = '#7c3aed';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = 'inherit';
              }}
            >
              <ShoppingBag />
            </button>

            <button 
              style={styles.iconButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.color = '#7c3aed';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = 'inherit';
              }}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>
    )
}