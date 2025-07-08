import React, { useState, useEffect } from 'react'

// SVG Icons
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
)

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
)

const Eye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
  </svg>
)

const ShoppingCart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
  </svg>
)

const Heart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  </svg>
)

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12,19 5,12 12,5"></polyline>
  </svg>
)

const CreditCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
)

const Lock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
)

const WhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

const Filter = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"></polygon>
  </svg>
)

const Search = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="M21 21l-4.35-4.35"></path>
  </svg>
)

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    originalPrice: 249.99,
    category: "Electronics",
    description: "Advanced smartwatch with fitness tracking, heart rate monitor, and long battery life. Stay connected and healthy.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop"
    ],
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    category: "Clothing",
    description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4777?w=400&h=300&fit=crop"
    ],
    rating: 4.5,
    reviews: 234,
    inStock: true
  },
  {
    id: 4,
    name: "Premium Leather Jacket",
    price: 149.99,
    originalPrice: 199.99,
    category: "Clothing",
    description: "Stylish genuine leather jacket with premium finishing. Perfect for casual and semi-formal occasions.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop"
    ],
    rating: 4.7,
    reviews: 67,
    inStock: true
  },
  {
    id: 5,
    name: "Vitamin C Serum",
    price: 29.99,
    originalPrice: 39.99,
    category: "Beauty",
    description: "Brightening vitamin C serum for healthy, glowing skin. Reduces dark spots and improves skin texture.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true
  },
  {
    id: 6,
    name: "Luxury Face Cream",
    price: 59.99,
    originalPrice: 79.99,
    category: "Beauty",
    description: "Anti-aging face cream with natural ingredients. Hydrates and nourishes your skin for a youthful glow.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    ],
    rating: 4.4,
    reviews: 89,
    inStock: true
  },
  {
    id: 7,
    name: "Ergonomic Office Chair",
    price: 299.99,
    originalPrice: 399.99,
    category: "Furniture",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long work hours.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop"
    ],
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 8,
    name: "Modern Coffee Table",
    price: 189.99,
    originalPrice: 249.99,
    category: "Furniture",
    description: "Sleek modern coffee table with storage compartments. Made from high-quality materials.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
    ],
    rating: 4.3,
    reviews: 78,
    inStock: true
  }
]

const categories = ["All", "Electronics", "Clothing", "Beauty", "Furniture"]

// Product Card Component
const ProductCard = ({ product, onCheckout }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} style={{ color: '#fbbf24' }} />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" style={{ color: '#fbbf24', opacity: 0.5 }} />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} style={{ color: '#e5e7eb' }} />)
    }

    return stars
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const cardStyle = {
    background: 'white',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: isHovered ? '0 20px 40px -12px rgba(0, 0, 0, 0.25)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const imageContainerStyle = {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  }

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  }

  const imageNavStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(4px)',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease'
  }

  const contentStyle = {
    padding: '1.5rem'
  }

  const categoryStyle = {
    fontSize: '0.75rem',
    color: '#6b7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem'
  }

  const nameStyle = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem',
    lineHeight: '1.4'
  }

  const descriptionStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  }

  const starsStyle = {
    display: 'flex',
    gap: '0.125rem'
  }

  const ratingTextStyle = {
    fontSize: '0.75rem',
    color: '#6b7280'
  }

  const priceContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  }

  const priceStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1f2937'
  }

  const originalPriceStyle = {
    fontSize: '1rem',
    color: '#9ca3af',
    textDecoration: 'line-through'
  }

  const discountStyle = {
    fontSize: '0.75rem',
    color: '#ef4444',
    fontWeight: '600',
    background: '#fee2e2',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem'
  }

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    background: 'linear-gradient(to right, #25D366, #128C7E)',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  }

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageContainerStyle}>
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          style={imageStyle}
        />
        {product.images.length > 1 && (
          <>
            <button
              style={{...imageNavStyle, left: '0.5rem'}}
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft />
            </button>
            <button
              style={{...imageNavStyle, right: '0.5rem'}}
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>
      
      <div style={contentStyle}>
        <div style={categoryStyle}>{product.category}</div>
        <h3 style={nameStyle}>{product.name}</h3>
        <p style={descriptionStyle}>{product.description}</p>
        
        <div style={ratingStyle}>
          <div style={starsStyle}>
            {renderStars(product.rating)}
          </div>
          <span style={ratingTextStyle}>
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        <div style={priceContainerStyle}>
          <span style={priceStyle}>${product.price}</span>
          {product.originalPrice && (
            <>
              <span style={originalPriceStyle}>${product.originalPrice}</span>
              <span style={discountStyle}>{discount}% OFF</span>
            </>
          )}
        </div>
        
        <button
          style={buttonStyle}
          onClick={() => onCheckout(product)}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 8px 25px -8px rgba(37, 211, 102, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          <ShoppingCart />
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

// Checkout Component (Your existing logic preserved)
const CheckoutPage = ({ product, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Pakistan',
    quantity: 1
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Calculate totals
    const subtotal = product.price * formData.quantity
    const tax = subtotal * 0.08
    const shipping = subtotal > 100 ? 0 : 15
    const total = subtotal + tax + shipping

    // Create WhatsApp message
    const message = `🛒 *NEW ORDER REQUEST*

📋 *Customer Information:*
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone}

📍 *Shipping Address:*
• Address: ${formData.address}
• City: ${formData.city}
• State: ${formData.state}
• ZIP Code: ${formData.zipCode}
• Country: ${formData.country}

🛍️ *Product Details:*
• Product: ${product.name}
• Price: $${product.price}
• Quantity: ${formData.quantity}
• Category: ${product.category}

💰 *Order Summary:*
• Subtotal: $${subtotal.toFixed(2)}
• Tax (8%): $${tax.toFixed(2)}
• Shipping: ${shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
• *Total: $${total.toFixed(2)}*

⏰ Order placed on: ${new Date().toLocaleString()}

Please confirm this order and provide payment details. Thank you! 🙏`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = '923370474081' // Your WhatsApp number with country code
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false)
      // Open WhatsApp
      window.open(whatsappURL, '_blank')
      // Show success message
      alert('Order details sent to WhatsApp! Please check your WhatsApp to complete the order.')
      // Go back to products
      onBack()
    }, 2000)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const subtotal = product.price * formData.quantity
  const tax = subtotal * 0.08
  const shipping = subtotal > 100 ? 0 : 15
  const total = subtotal + tax + shipping

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} style={{ color: '#fbbf24' }} />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" style={{ color: '#fbbf24', opacity: 0.5 }} />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} style={{ color: '#e5e7eb' }} />)
    }

    return stars
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem 1rem'
    },
    header: {
      maxWidth: '1200px',
      margin: '0 auto 2rem auto',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    backButton: {
      padding: '0.75rem',
      background: 'white',
      border: 'none',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#6b7280',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem'
    },
    productSection: {
      background: 'white',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      height: 'fit-content'
    },
    imageContainer: {
      position: 'relative',
      height: '300px',
      marginBottom: '1.5rem',
      borderRadius: '1rem',
      overflow: 'hidden'
    },
    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    imageNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(4px)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    imageNavLeft: {
      left: '0.5rem'
    },
    imageNavRight: {
      right: '0.5rem'
    },
    productInfo: {
      marginBottom: '1.5rem'
    },
    productName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    productDescription: {
      color: '#6b7280',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    stars: {
      display: 'flex',
      gap: '0.25rem'
    },
    ratingText: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    priceSection: {
      padding: '1.5rem',
      background: '#f9fafb',
      borderRadius: '1rem',
      marginBottom: '1.5rem'
    },
    price: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    originalPrice: {
      fontSize: '1.25rem',
      color: '#9ca3af',
      textDecoration: 'line-through'
    },
    quantitySection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    quantityLabel: {
      fontWeight: '600',
      color: '#374151'
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    quantityButton: {
      width: '40px',
      height: '40px',
      border: '1px solid #d1d5db',
      background: 'white',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all0.3s ease'
    },
    quantityInput: {
      width: '60px',
      height: '40px',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    orderSummary: {
      background: 'white',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      height: 'fit-content'
    },
    summaryTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1.5rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      fontWeight: '600',
      color: '#374151'
    },
    input: {
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      transition: 'border-color 0.3s ease'
    },
    select: {
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      background: 'white'
    },
    summarySection: {
      marginTop: '2rem',
      padding: '1.5rem',
      background: '#f9fafb',
      borderRadius: '1rem'
    },
    summaryRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    summaryLabel: {
      color: '#6b7280'
    },
    summaryValue: {
      fontWeight: '600',
      color: '#374151'
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1rem',
      borderTop: '1px solid #d1d5db',
      marginTop: '1rem'
    },
    totalLabel: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    totalValue: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    submitButton: {
      marginTop: '1.5rem',
      padding: '1rem',
      background: 'linear-gradient(to right, #25D366, #128C7E)',
      color: 'white',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    securityNote: {
      marginTop: '1rem',
      padding: '1rem',
      background: '#f0f9ff',
      borderRadius: '0.5rem',
      border: '1px solid #bae6fd',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
      color: '#0369a1'
    },
    '@media (max-width: 768px)': {
      mainContent: {
        gridTemplateColumns: '1fr',
        gap: '2rem'
      },
      formRow: {
        gridTemplateColumns: '1fr'
      }
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button
          style={styles.backButton}
          onClick={onBack}
          onMouseEnter={(e) => e.target.style.background = '#f3f4f6'}
          onMouseLeave={(e) => e.target.style.background = 'white'}
        >
          <ArrowLeft />
          Back to Products
        </button>
        <h1 style={styles.title}>Checkout</h1>
      </div>

      <div style={styles.mainContent}>
        {/* Product Section */}
        <div style={styles.productSection}>
          <div style={styles.imageContainer}>
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              style={styles.productImage}
            />
            {product.images.length > 1 && (
              <>
                <button
                  style={{...styles.imageNav, ...styles.imageNavLeft}}
                  onClick={prevImage}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 1)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
                >
                  <ChevronLeft />
                </button>
                <button
                  style={{...styles.imageNav, ...styles.imageNavRight}}
                  onClick={nextImage}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 1)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          <div style={styles.productInfo}>
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productDescription}>{product.description}</p>
            
            <div style={styles.rating}>
              <div style={styles.stars}>
                {renderStars(product.rating)}
              </div>
              <span style={styles.ratingText}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div style={styles.priceSection}>
            <div style={styles.price}>${product.price}</div>
            {product.originalPrice && (
              <div style={styles.originalPrice}>${product.originalPrice}</div>
            )}
          </div>

          <div style={styles.quantitySection}>
            <span style={styles.quantityLabel}>Quantity:</span>
            <div style={styles.quantityControls}>
              <button
                style={styles.quantityButton}
                onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                onMouseEnter={(e) => e.target.style.background = '#f3f4f6'}
                onMouseLeave={(e) => e.target.style.background = 'white'}
              >
                -
              </button>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData(prev => ({ ...prev, quantity: Math.max(1, parseInt(e.target.value) || 1) }))}
                style={styles.quantityInput}
                min="1"
              />
              <button
                style={styles.quantityButton}
                onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                onMouseEnter={(e) => e.target.style.background = '#f3f4f6'}
                onMouseLeave={(e) => e.target.style.background = 'white'}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary & Form */}
        <div style={styles.orderSummary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#25D366'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#25D366'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
                onFocus={(e) => e.target.style.borderColor = '#25D366'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={styles.input}
                required
                onFocus={(e) => e.target.style.borderColor = '#25D366'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={styles.input}
                required
                onFocus={(e) => e.target.style.borderColor = '#25D366'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#25D366'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#25D366'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#25D366'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div style={styles.summarySection}>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Subtotal:</span>
                <span style={styles.summaryValue}>${subtotal.toFixed(2)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Tax (8%):</span>
                <span style={styles.summaryValue}>${tax.toFixed(2)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Shipping:</span>
                <span style={styles.summaryValue}>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Total:</span>
                <span style={styles.totalValue}>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              style={styles.submitButton}
              disabled={isProcessing}
              onMouseEnter={(e) => {
                if (!isProcessing) {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 25px -8px rgba(37, 211, 102, 0.5)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isProcessing) {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }
              }}
            >
              {isProcessing ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid #ffffff',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Processing...
                </>
              ) : (
                <>
                  <WhatsApp />
                  Place Order via WhatsApp
                </>
              )}
            </button>

            <div style={styles.securityNote}>
              <Lock />
              Your order will be sent via WhatsApp for secure processing
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Main App Component
const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const handleCheckout = (product) => {
    setSelectedProduct(product)
  }

  const handleBackToProducts = () => {
    setSelectedProduct(null)
  }

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (selectedProduct) {
    return <CheckoutPage product={selectedProduct} onBack={handleBackToProducts} />
  }

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }

  const headerStyle = {
    background: 'white',
    padding: '2rem 1rem',
    boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem'
  }

  const headerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  }

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  }

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#6b7280',
    marginBottom: '2rem'
  }

  const filtersStyle = {
    maxWidth: '1200px',
    margin: '0 auto 2rem auto',
    padding: '0 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center'
  }

  const searchContainerStyle = {
    position: 'relative',
    flexGrow: 1,
    maxWidth: '400px'
  }

  const searchInputStyle = {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 3rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    background: 'white'
  }

  const searchIconStyle = {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6b7280'
  }

  const categoriesStyle = {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }

  const categoryButtonStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: isActive ? '#25D366' : 'white',
    color: isActive ? 'white' : '#374151',
    boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)'
  })

  const productsGridStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem'
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={headerContentStyle}>
          <h1 style={titleStyle}>Premium Store</h1>
          <p style={subtitleStyle}>Discover amazing products at unbeatable prices</p>
        </div>
      </div>

      <div style={filtersStyle}>
        <div style={searchContainerStyle}>
          <div style={searchIconStyle}>
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
          />
        </div>

        <div style={categoriesStyle}>
          {categories.map(category => (
            <button
              key={category}
              style={categoryButtonStyle(selectedCategory === category)}
              onClick={() => setSelectedCategory(category)}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = '#f3f4f6'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'white'
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div style={productsGridStyle}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onCheckout={handleCheckout}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#6b7280'
        }}>
          <p>No products found matching your criteria.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default App