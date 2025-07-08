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

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12,19 5,12 12,5"></polyline>
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

const Search = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="M21 21l-4.35-4.35"></path>
  </svg>
)

const Filter = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"></polygon>
  </svg>
)

// Electronics Products Data
const electronicsProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    category: "Audio",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Noise Cancellation": "Active",
      "Weight": "250g"
    }
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    originalPrice: 249.99,
    category: "Wearables",
    description: "Advanced smartwatch with fitness tracking, heart rate monitor, and long battery life. Stay connected and healthy.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop"
    ],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery": "7 days",
      "Water Resistance": "50M",
      "Sensors": "Heart Rate, GPS"
    }
  },
  {
    id: 3,
    name: "Smartphone Pro Max",
    price: 899.99,
    originalPrice: 1099.99,
    category: "Mobile",
    description: "Latest flagship smartphone with triple camera system, 5G connectivity, and premium build quality.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop"
    ],
    rating: 4.7,
    reviews: 234,
    inStock: true,
    specifications: {
      "Display": "6.7 inch Super Retina",
      "Storage": "256GB",
      "Camera": "Triple 48MP",
      "Battery": "4000mAh"
    }
  },
  {
    id: 4,
    name: "Gaming Laptop Ultimate",
    price: 1299.99,
    originalPrice: 1599.99,
    category: "Computers",
    description: "High-performance gaming laptop with RTX graphics and latest Intel processor. Perfect for gaming and content creation.",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop"
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    specifications: {
      "Processor": "Intel i7-12th Gen",
      "RAM": "16GB DDR5",
      "Storage": "1TB SSD",
      "Graphics": "RTX 4060"
    }
  },
  {
    id: 5,
    name: "Wireless Earbuds Pro",
    price: 149.99,
    originalPrice: 199.99,
    category: "Audio",
    description: "Premium wireless earbuds with spatial audio and adaptive noise cancellation. Crystal clear sound quality.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop"
    ],
    rating: 4.5,
    reviews: 312,
    inStock: true,
    specifications: {
      "Battery": "6 hours + 24 hours case",
      "Connectivity": "Bluetooth 5.2",
      "Water Resistance": "IPX4",
      "Charging": "Wireless + USB-C"
    }
  },
  {
    id: 6,
    name: "4K Webcam Pro",
    price: 89.99,
    originalPrice: 119.99,
    category: "Accessories",
    description: "Professional 4K webcam with auto-focus and noise-cancelling microphone. Perfect for streaming and video calls.",
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    ],
    rating: 4.4,
    reviews: 89,
    inStock: true,
    specifications: {
      "Resolution": "4K @ 30fps",
      "Field of View": "90 degrees",
      "Microphone": "Dual stereo",
      "Compatibility": "Windows, Mac, Linux"
    }
  },
  {
    id: 7,
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    originalPrice: 169.99,
    category: "Accessories",
    description: "RGB mechanical gaming keyboard with customizable keys and anti-ghosting technology.",
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587829138301-db6c2c2b1bfb?w=400&h=300&fit=crop"
    ],
    rating: 4.6,
    reviews: 145,
    inStock: true,
    specifications: {
      "Switches": "Cherry MX Red",
      "Backlighting": "RGB",
      "Connectivity": "USB-C",
      "Features": "Anti-ghosting, Programmable"
    }
  },
  {
    id: 8,
    name: "Portable Power Bank",
    price: 39.99,
    originalPrice: 59.99,
    category: "Accessories",
    description: "High-capacity portable power bank with fast charging and multiple USB ports. Keep your devices powered.",
    images: [
      "https://images.unsplash.com/photo-1609592918707-e9ed26b67f27?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    ],
    rating: 4.3,
    reviews: 78,
    inStock: true,
    specifications: {
      "Capacity": "20000mAh",
      "Ports": "2x USB-A, 1x USB-C",
      "Fast Charging": "PD 18W",
      "Weight": "400g"
    }
  }
]

const categories = ["All", "Audio", "Wearables", "Mobile", "Computers", "Accessories"]

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
    background: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
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
            e.target.style.boxShadow = '0 8px 25px -8px rgba(59, 130, 246, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          <ShoppingCart />
          Buy Now
        </button>
      </div>
    </div>
  )
}

// Checkout Component
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
    const message = `🛒 *NEW ELECTRONICS ORDER*

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

🔌 *Product Details:*
• Product: ${product.name}
• Price: $${product.price}
• Quantity: ${formData.quantity}
• Category: ${product.category}

📱 *Specifications:*
${Object.entries(product.specifications).map(([key, value]) => `• ${key}: ${value}`).join('\n')}

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
      background: 'linear-gradient(to bottom right, #f1f5f9, #dbeafe)',
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
    specificationsSection: {
      background: '#f9fafb',
      padding: '1.5rem',
      borderRadius: '1rem',
      marginBottom: '1.5rem'
    },
    specificationsTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    specificationItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
      borderBottom: '1rem'
    },
    specificationItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
      borderBottom: '1px solid #e5e7eb'
    },
    specKey: {
      fontSize: '0.875rem',
      color: '#6b7280',
      fontWeight: '500'
    },
    specValue: {
      fontSize: '0.875rem',
      color: '#1f2937',
      fontWeight: '600'
    },
    priceSection: {
      background: '#f0f9ff',
      padding: '1.5rem',
      borderRadius: '1rem',
      textAlign: 'center'
    },
    priceDisplay: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    originalPrice: {
      fontSize: '1.25rem',
      color: '#9ca3af',
      textDecoration: 'line-through',
      marginRight: '0.5rem'
    },
    discount: {
      fontSize: '0.875rem',
      color: '#ef4444',
      fontWeight: '600',
      background: '#fee2e2',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem'
    },
    checkoutSection: {
      background: 'white',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      height: 'fit-content'
    },
    sectionTitle: {
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
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151'
    },
    input: {
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    select: {
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      background: 'white',
      transition: 'border-color 0.3s ease'
    },
    orderSummary: {
      background: '#f9fafb',
      padding: '1.5rem',
      borderRadius: '1rem',
      marginTop: '1.5rem',
      marginBottom: '1.5rem'
    },
    summaryTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
      borderBottom: '1px solid #e5e7eb'
    },
    summaryTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0 0 0',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    submitButton: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(to right, #10b981, #059669)',
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
    processingButton: {
      background: '#9ca3af',
      cursor: 'not-allowed'
    },
    mobileResponsive: {
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '1.5rem'
      }
    }
  }

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={onBack}
          onMouseEnter={(e) => {
            e.target.style.background = '#f3f4f6'
            e.target.style.transform = 'translateX(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'white'
            e.target.style.transform = 'translateX(0)'
          }}
        >
          <ArrowLeft />
          Back to Products
        </button>
        <h1 style={styles.title}>Checkout</h1>
      </div>

      <div style={{...styles.mainContent, '@media (max-width: 768px)': {gridTemplateColumns: '1fr'}}}>
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

          <div style={styles.specificationsSection}>
            <h3 style={styles.specificationsTitle}>Specifications</h3>
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} style={styles.specificationItem}>
                <span style={styles.specKey}>{key}:</span>
                <span style={styles.specValue}>{value}</span>
              </div>
            ))}
          </div>

          <div style={styles.priceSection}>
            <div style={styles.priceDisplay}>
              ${product.price}
              {product.originalPrice && (
                <>
                  <span style={styles.originalPrice}>${product.originalPrice}</span>
                  <span style={styles.discount}>{discount}% OFF</span>
                </>
              )}
            </div>
            <p style={{fontSize: '0.875rem', color: '#6b7280', margin: 0}}>
              Free shipping on orders over $100
            </p>
          </div>
        </div>

        {/* Checkout Form Section */}
        <div style={styles.checkoutSection}>
          <h2 style={styles.sectionTitle}>
            <Lock style={{display: 'inline', marginRight: '0.5rem'}} />
            Secure Checkout
          </h2>
          
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
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
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
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
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
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
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
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
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>State/Province *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>ZIP/Postal Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  style={styles.select}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="India">India</option>
                </select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Quantity</label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                style={styles.select}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div style={styles.orderSummary}>
              <h3 style={styles.summaryTitle}>Order Summary</h3>
              <div style={styles.summaryItem}>
                <span>Subtotal ({formData.quantity} item{formData.quantity > 1 ? 's' : ''})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={styles.summaryItem}>
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={styles.summaryItem}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div style={styles.summaryTotal}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              style={isProcessing ? {...styles.submitButton, ...styles.processingButton} : styles.submitButton}
              onMouseEnter={(e) => {
                if (!isProcessing) {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 25px -8px rgba(16, 185, 129, 0.5)'
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
                  }} />
                  Processing...
                </>
              ) : (
                <>
                  <WhatsApp />
                  Complete Order via WhatsApp
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// Main App Component
const ElectronicsStore = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState(electronicsProducts)

  useEffect(() => {
    let filtered = electronicsProducts

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory])

  const handleCheckout = (product) => {
    setSelectedProduct(product)
  }

  const handleBackToProducts = () => {
    setSelectedProduct(null)
  }

  if (selectedProduct) {
    return <CheckoutPage product={selectedProduct} onBack={handleBackToProducts} />
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f1f5f9, #dbeafe)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      background: 'white',
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    searchContainer: {
      position: 'relative',
      flex: 1,
      maxWidth: '400px'
    },
    searchInput: {
      width: '100%',
      padding: '0.75rem 1rem 0.75rem 2.5rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.75rem',
      fontSize: '0.875rem',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    searchIcon: {
      position: 'absolute',
      left: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6b7280'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    },
    filterSection: {
      marginBottom: '2rem'
    },
    filterTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    categoryFilters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    categoryButton: {
      padding: '0.5rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      background: 'white',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    categoryButtonActive: {
      background: '#3b82f6',
      color: 'white',
      borderColor: '#3b82f6'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    noProducts: {
      textAlign: 'center',
      padding: '3rem',
      color: '#6b7280'
    },
    footer: {
      background: '#1f2937',
      color: 'white',
      padding: '2rem 1rem',
      textAlign: 'center'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <main style={styles.main}>
        <div style={styles.filterSection}>
          <h2 style={styles.filterTitle}>
            <Filter style={{display: 'inline', marginRight: '0.5rem'}} />
            Categories
          </h2>
          <div style={styles.categoryFilters}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={
                  selectedCategory === category
                    ? {...styles.categoryButton, ...styles.categoryButtonActive}
                    : styles.categoryButton
                }
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = '#f3f4f6'
                    e.target.style.borderColor = '#9ca3af'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = 'white'
                    e.target.style.borderColor = '#d1d5db'
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div style={styles.noProducts}>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div style={styles.productsGrid}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onCheckout={handleCheckout}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default ElectronicsStore