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
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
)

const User = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const Phone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
  </svg>
)

const MapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const Package = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16.5 9.4L7.55 4.24"></path>
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
    <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
)

const Items = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentSlides, setCurrentSlides] = useState({})
  const [hoveredItem, setHoveredItem] = useState(null)
  const [showDetails, setShowDetails] = useState(null)
  const [checkoutProduct, setCheckoutProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    province: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  // Pakistani provinces
  const pakistaniProvinces = [
    'Punjab',
    'Sindh',
    'Khyber Pakhtunkhwa',
    'Balochistan',
    'Islamabad Capital Territory',
    'Gilgit-Baltistan',
    'Azad Kashmir'
  ]

  // Sample product data with placeholder images
  const categories = [
    { id: 'All', name: 'All Products', count: 45 },
    { id: 'Electronics', name: 'Electronics', count: 12 },
    { id: 'Fashion', name: 'Fashion', count: 18 },
    { id: 'Home', name: 'Home & Garden', count: 8 },
    { id: 'Beauty', name: 'Beauty', count: 7 }
  ]

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 234,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=300&fit=crop"
      ],
      badge: "Best Seller",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "Electronics",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 189,
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop"
      ],
      badge: "New",
      description: "Track your health and fitness with advanced sensors"
    },
    {
      id: 3,
      name: "Designer Handbag",
      category: "Fashion",
      price: 159,
      originalPrice: 220,
      rating: 4.9,
      reviews: 456,
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop"
      ],
      badge: "Limited",
      description: "Elegant designer handbag for sophisticated style"
    },
    {
      id: 4,
      name: "Skincare Essentials Set",
      category: "Beauty",
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 312,
      images: [
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
      ],
      badge: "Popular",
      description: "Complete skincare routine for healthy, glowing skin"
    },
    {
      id: 5,
      name: "Wireless Bluetooth Speaker",
      category: "Electronics",
      price: 89,
      originalPrice: 129,
      rating: 4.5,
      reviews: 167,
      images: [
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=300&fit=crop"
      ],
      badge: "Sale",
      description: "Portable speaker with premium sound quality"
    },
    {
      id: 6,
      name: "Casual Summer Dress",
      category: "Fashion",
      price: 79,
      originalPrice: 110,
      rating: 4.4,
      reviews: 89,
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566479179817-c6c0cce5c8e3?w=400&h=300&fit=crop"
      ],
      badge: "Trending",
      description: "Light and comfortable dress perfect for summer"
    },
    {
      id: 7,
      name: "Modern Table Lamp",
      category: "Home",
      price: 129,
      originalPrice: 179,
      rating: 4.6,
      reviews: 203,
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      ],
      badge: "New",
      description: "Stylish table lamp with adjustable brightness"
    },
    {
      id: 8,
      name: "Organic Face Serum",
      category: "Beauty",
      price: 89,
      originalPrice: 119,
      rating: 4.8,
      reviews: 178,
      images: [
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop"
      ],
      badge: "Organic",
      description: "Natural face serum with vitamin C and hyaluronic acid"
    }
  ]

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const nextSlide = (productId) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % products.find(p => p.id === productId).images.length
    }))
  }

  const prevSlide = (productId) => {
    const product = products.find(p => p.id === productId)
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + product.images.length) % product.images.length
    }))
  }

  const handleCheckout = (product) => {
    setCheckoutProduct(product)
    setShowDetails(null)
    setQuantity(1)
    setCustomerInfo({
      name: '',
      phone: '',
      address: '',
      province: ''
    })
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmitOrder = async () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address || !customerInfo.province) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    
    // Simulate order submission
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderSubmitted(true)
      
      // Reset after showing success message
      setTimeout(() => {
        setOrderSubmitted(false)
        setCheckoutProduct(null)
        setCustomerInfo({
          name: '',
          phone: '',
          address: '',
          province: ''
        })
      }, 3000)
    }, 2000)
  }

  const validatePhone = (phone) => {
    const pakistaniPhoneRegex = /^(\+92|0092|92|0)?[0-9]{10}$/
    return pakistaniPhoneRegex.test(phone.replace(/\s/g, ''))
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem 1rem'
    },
    header: {
      maxWidth: '1280px',
      margin: '0 auto 3rem auto',
      textAlign: 'center'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #1f2937, #6b7280)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '32rem',
      margin: '0 auto'
    },
    categoriesNav: {
      maxWidth: '1280px',
      margin: '0 auto 3rem auto',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '1rem',
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    categoryButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    categoryButtonActive: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      transform: 'scale(1.05)'
    },
    categoryButtonInactive: {
      background: '#f3f4f6',
      color: '#6b7280'
    },
    categoryCount: {
      fontSize: '0.75rem',
      marginLeft: '0.5rem',
      opacity: 0.8
    },
    productsGrid: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem'
    },
    productCard: {
      background: 'white',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      position: 'relative'
    },
    productCardHover: {
      transform: 'translateY(-12px)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    imageContainer: {
      position: 'relative',
      height: '250px',
      overflow: 'hidden'
    },
    imageSlider: {
      display: 'flex',
      transition: 'transform 0.5s ease',
      height: '100%'
    },
    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      flexShrink: 0,
      transition: 'transform 0.3s ease'
    },
    badge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      zIndex: 10,
      backdropFilter: 'blur(4px)'
    },
    badgeColors: {
      'Best Seller': { background: 'linear-gradient(to right, #fbbf24, #f59e0b)', color: 'white' },
      'New': { background: 'linear-gradient(to right, #10b981, #059669)', color: 'white' },
      'Limited': { background: 'linear-gradient(to right, #ef4444, #dc2626)', color: 'white' },
      'Popular': { background: 'linear-gradient(to right, #8b5cf6, #7c3aed)', color: 'white' },
      'Sale': { background: 'linear-gradient(to right, #ec4899, #db2777)', color: 'white' },
      'Trending': { background: 'linear-gradient(to right, #3b82f6, #2563eb)', color: 'white' },
      'Organic': { background: 'linear-gradient(to right, #22c55e, #16a34a)', color: 'white' }
    },
    navArrow: {
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
      transition: 'all 0.3s ease',
      zIndex: 10,
      opacity: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    navArrowLeft: {
      left: '0.5rem'
    },
    navArrowRight: {
      right: '0.5rem'
    },
    wishlistButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
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
      transition: 'all 0.3s ease',
      zIndex: 10,
      opacity: 0,
      color: '#6b7280'
    },
    productContent: {
      padding: '1.5rem'
    },
    productName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.5rem',
      lineHeight: '1.4'
    },
    productDescription: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '1rem',
      lineHeight: '1.5'
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
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    price: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    originalPrice: {
      fontSize: '1rem',
      color: '#9ca3af',
      textDecoration: 'line-through'
    },
    discount: {
      fontSize: '0.875rem',
      color: '#10b981',
      fontWeight: '600'
    },
    buttonContainer: {
      display: 'flex',
      gap: '0.75rem'
    },
    detailsButton: {
      flex: 1,
      padding: '0.75rem',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      border: 'none',
      borderRadius: '0.75rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    modal: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    },
    modalContent: {
      background: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '80vh',
      overflow: 'auto'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#6b7280'
    },
    // Checkout Page Styles
    checkoutContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '2rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      animation: 'slideInFromRight 0.6s ease-out'
    },
    checkoutHeader: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    backButton: {
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: 'white'
    },
    checkoutTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      margin: 0
    },
    checkoutContent: {
      padding: '2rem'
    },
    productSummary: {
      display: 'flex',
      gap: '1.5rem',
      marginBottom: '2rem',
      padding: '1.5rem',
      background: '#f8fafc',
      borderRadius: '1rem',
      border: '2px solid #e2e8f0'
    },
    checkoutProductImage: {
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '0.75rem'
    },
    productInfo: {
      flex: 1
    },
    quantityContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    quantityButton: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.2rem'
    },
    quantityDisplay: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      minWidth: '2rem',
      textAlign: 'center'
    },
    formContainer: {
      display: 'grid',
      gap: '1.5rem'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    input: {
      padding: '0.75rem 1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    inputFocus: {
      borderColor: '#ec4899',
      boxShadow: '0 0 0 3px rgba(236, 72, 153, 0.1)'
    },
    select: {
      padding: '0.75rem 1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      background: 'white'
    },
    textarea: {
      padding: '0.75rem 1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: '100px'
    },
    totalSection: {
      marginTop: '2rem',
      padding: '1.5rem',
      background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
      borderRadius: '1rem',
      border: '2px solid #e2e8f0'
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    totalLabel: {
      fontSize: '1rem',
      color: '#6b7280'
    },
    totalValue: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1f2937'
    },
    grandTotalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1rem',
      borderTop: '2px solid #e5e7eb',
      marginTop: '1rem'
    },
    grandTotalLabel: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    grandTotalValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ec4899'
    },
    submitButton: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    submitButtonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    successMessage: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'linear-gradient(to right, #10b981, #059669)',
      color: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      zIndex: 1001,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      animation: 'bounceIn 0.6s ease-out'
    },
    '@keyframes slideInFromRight': {
      '0%': {
        transform: 'translateX(100%)',
        opacity: 0
      },
      '100%': {
        transform: 'translateX(0)',
        opacity: 1
      }
    },
    '@keyframes bounceIn': {
      '0%': {
        transform: 'translate(-50%, -50%) scale(0.3)',
        opacity: 0
      },
      '50%': {
        transform: 'translate(-50%, -50%) scale(1.05)',
        opacity: 1
      },
      '100%': {
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1
      }
    }
  }

  if (checkoutProduct) {
    const subtotal = checkoutProduct.price * quantity
    const shipping = 150 // Fixed shipping cost in PKR
    const tax = subtotal * 0.05 // 5% tax
    const total = subtotal + shipping + tax

    return (
      <div style={styles.container}>
        <div style={styles.checkoutContainer}>
          <div style={styles.checkoutHeader}>
            <button 
              style={styles.backButton}
              onClick={() => setCheckoutProduct(null)}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              <ArrowLeft />
            </button>
            <h1 style={styles.checkoutTitle}>Checkout</h1>
          </div>
          
          <div style={styles.checkoutContent}>
            <div style={styles.productSummary}>
              <img 
                src={checkoutProduct.images[0]} 
                alt={checkoutProduct.name}
                style={styles.checkoutProductImage}
              />
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{checkoutProduct.name}</h3>
                <p style={styles.productDescription}>{checkoutProduct.description}</p>
                <div style={styles.priceContainer}>
                  <span style={styles.price}>PKR {checkoutProduct.price}</span>
                  {checkoutProduct.originalPrice && (
                    <span style={styles.originalPrice}>PKR {checkoutProduct.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>

            <div style={styles.quantityContainer}>
              <span style={styles.label}>Quantity:</span>
              <button 
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span style={styles.quantityDisplay}>{quantity}</span>
              <button 
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            <div style={styles.formContainer}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <User /> Full Name *
                </label>
                <input
                  type="text"
                  style={styles.input}
                  value={customerInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  onFocus={(e) => e.target.style.borderColor = '#ec4899'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <Phone /> Phone Number *
                </label>
                <input
                  type="tel"
                  style={styles.input}
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="03XX-XXXXXXX"
                  onFocus={(e) => e.target.style.borderColor = '#ec4899'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                {customerInfo.phone && !validatePhone(customerInfo.phone) && (
                  <span style={{fontSize: '0.75rem', color: '#ef4444'}}>
                    Please enter a valid Pakistani phone number
                  </span>
                )}
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <MapPin /> Province *
                </label>
                <select
                  style={styles.select}
                  value={customerInfo.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  onFocus={(e) => e.target.style.borderColor = '#ec4899'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <option value="">Select Province</option>
                  {pakistaniProvinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <Package /> Delivery Address *
                </label>
                <textarea
                  style={styles.textarea}
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your complete delivery address"
                  onFocus={(e) => e.target.style.borderColor = '#ec4899'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div style={styles.totalSection}>
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Subtotal:</span>
                <span style={styles.totalValue}>PKR {subtotal}</span>
              </div>
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Shipping:</span>
                <span style={styles.totalValue}>PKR {shipping}</span>
              </div>
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Tax (5%):</span>
                <span style={styles.totalValue}>PKR {tax.toFixed(2)}</span>
              </div>
              <div style={styles.grandTotalRow}>
                <span style={styles.grandTotalLabel}>Total:</span>
                <span style={styles.grandTotalValue}>PKR {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              style={{
                ...styles.submitButton,
                ...(isSubmitting ? styles.submitButtonDisabled : {})
              }}
              onClick={handleSubmitOrder}
              disabled={isSubmitting}
              onMouseEnter={(e) => !isSubmitting && (e.target.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => !isSubmitting && (e.target.style.transform = 'translateY(0)')}
            >
              <ShoppingCart />
              {isSubmitting ? 'Processing Order...' : 'Place Order'}
            </button>
          </div>
        </div>

        {orderSubmitted && (
          <div style={styles.successMessage}>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your order. We'll contact you soon.</p>
          </div>
        )}
      </div>
    )
  }

  // Product Details Modal
  if (showDetails) {
    return (
      <div style={styles.modal} onClick={() => setShowDetails(null)}>
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <div style={styles.modalHeader}>
            <h2 style={styles.modalTitle}>{showDetails.name}</h2>
            <button 
              style={styles.closeButton}
              onClick={() => setShowDetails(null)}
            >
              ×
            </button>
          </div>
          
          <div style={styles.imageContainer}>
            <div 
              style={{
                ...styles.imageSlider,
                transform: `translateX(-${(currentSlides[showDetails.id] || 0) * 100}%)`
              }}
            >
              {showDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${showDetails.name} ${index + 1}`}
                  style={styles.productImage}
                />
              ))}
            </div>
            
            <button
              style={{...styles.navArrow, ...styles.navArrowLeft, opacity: 1}}
              onClick={() => prevSlide(showDetails.id)}
            >
              <ChevronLeft />
            </button>
            
            <button
              style={{...styles.navArrow, ...styles.navArrowRight, opacity: 1}}
              onClick={() => nextSlide(showDetails.id)}
            >
              <ChevronRight />
            </button>
          </div>

          <div style={styles.productContent}>
            <p style={styles.productDescription}>{showDetails.description}</p>
            
            <div style={styles.rating}>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{
                    color: i < Math.floor(showDetails.rating) ? '#fbbf24' : '#e5e7eb'
                  }} />
                ))}
              </div>
              <span style={styles.ratingText}>
                {showDetails.rating} ({showDetails.reviews} reviews)
              </span>
            </div>

            <div style={styles.priceContainer}>
              <span style={styles.price}>PKR {showDetails.price}</span>
              {showDetails.originalPrice && (
                <>
                  <span style={styles.originalPrice}>PKR {showDetails.originalPrice}</span>
                  <span style={styles.discount}>
                    {Math.round((1 - showDetails.price / showDetails.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <button
              style={styles.detailsButton}
              onClick={() => handleCheckout(showDetails)}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <ShoppingCart />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Main Products Grid
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Premium Collection</h1>
        <p style={styles.subtitle}>
          Discover our carefully curated selection of premium products
        </p>
      </div>

      <div style={styles.categoriesNav}>
        {categories.map(category => (
          <button
            key={category.id}
            style={{
              ...styles.categoryButton,
              ...(selectedCategory === category.id ? styles.categoryButtonActive : styles.categoryButtonInactive)
            }}
            onClick={() => setSelectedCategory(category.id)}
            onMouseEnter={(e) => {
              if (selectedCategory !== category.id) {
                e.target.style.background = '#e5e7eb'
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category.id) {
                e.target.style.background = '#f3f4f6'
              }
            }}
          >
            {category.name}
            <span style={styles.categoryCount}>({category.count})</span>
          </button>
        ))}
      </div>

      <div style={styles.productsGrid}>
        {filteredProducts.map((product) => {
          const isHovered = hoveredItem === product.id
          const currentSlide = currentSlides[product.id] || 0
          const badgeStyle = styles.badgeColors[product.badge] || styles.badgeColors['New']

          return (
            <div
              key={product.id}
              style={{
                ...styles.productCard,
                ...(isHovered ? styles.productCardHover : {})
              }}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={styles.imageContainer}>
                <div 
                  style={{
                    ...styles.imageSlider,
                    transform: `translateX(-${currentSlide * 100}%)`
                  }}
                >
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      style={{
                        ...styles.productImage,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                  ))}
                </div>
                
                <div 
                  style={{
                    ...styles.badge,
                    ...badgeStyle
                  }}
                >
                  {product.badge}
                </div>
                
                <button
                  style={{
                    ...styles.navArrow,
                    ...styles.navArrowLeft,
                    opacity: isHovered ? 1 : 0
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide(product.id)
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 1)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
                >
                  <ChevronLeft />
                </button>
                
                <button
                  style={{
                    ...styles.navArrow,
                    ...styles.navArrowRight,
                    opacity: isHovered ? 1 : 0
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide(product.id)
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 1)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
                >
                  <ChevronRight />
                </button>
                
                <button
                  style={{
                    ...styles.wishlistButton,
                    opacity: isHovered ? 1 : 0
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    // Add wishlist functionality
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 1)'
                    e.target.style.color = '#ec4899'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)'
                    e.target.style.color = '#6b7280'
                  }}
                >
                  <Heart />
                </button>
              </div>

              <div style={styles.productContent}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
                
                <div style={styles.rating}>
                  <div style={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} style={{
                        color: i < Math.floor(product.rating) ? '#fbbf24' : '#e5e7eb'
                      }} />
                    ))}
                  </div>
                  <span style={styles.ratingText}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div style={styles.priceContainer}>
                  <span style={styles.price}>PKR {product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span style={styles.originalPrice}>PKR {product.originalPrice}</span>
                      <span style={styles.discount}>
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>

                <div style={styles.buttonContainer}>
                  <button
                    style={styles.detailsButton}
                    onClick={() => setShowDetails(product)}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    <Eye />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Items