import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// SVG Icons as components
const Mail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)


const Lock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0110 0v4"></path>
  </svg>
)

const User = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const Phone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
  </svg>
)

const Eye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const EyeOff = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
)

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
)

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false)
  const [focusedField, setFocusedField] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

const handleSubmit = async (e) => {
  e.preventDefault();
if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match!");
  return; // Stop the form submission
}

  try {
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Account created successfully!');
       navigate('/mainpage')
      // Optionally reset the form:
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      alert(data.message || 'Error occurred');
    }
  } catch (error) {
    alert('Server error, please try again later.');
    console.error(error);
  }
};


  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 118, 117, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 177, 153, 0.2) 0%, transparent 50%)
      `,
      animation: 'float 6s ease-in-out infinite'
    },
    formContainer: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '2rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      maxWidth: '900px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      zIndex: 10
    },
    leftPanel: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    leftPanelOverlay: {
      position: 'absolute',
      inset: 0,
      background: `
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
      `,
      animation: 'pulse 4s ease-in-out infinite'
    },
    leftContent: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      animation: 'slideInLeft 0.8s ease-out 0.3s both'
    },
    logo: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(45deg, #fff, #e5e7eb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'glow 2s ease-in-out infinite alternate'
    },
    leftTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      animation: 'fadeInUp 0.8s ease-out 0.5s both'
    },
    leftSubtitle: {
      fontSize: '1.125rem',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: 1.6,
      maxWidth: '20rem',
      animation: 'fadeInUp 0.8s ease-out 0.7s both'
    },
    rightPanel: {
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      animation: 'slideInRight 0.8s ease-out 0.4s both'
    },
    formHeader: {
      marginBottom: '2rem',
      textAlign: 'center',
      animation: 'fadeInUp 0.8s ease-out 0.6s both'
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem'
    },
    formSubtitle: {
      color: '#6b7280',
      fontSize: '1rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      animation: 'fadeInUp 0.6s ease-out both'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      transition: 'color 0.3s ease'
    },
    inputContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      width: '100%',
      padding: '0.875rem 1rem',
      paddingLeft: '3rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: 'rgba(249, 250, 251, 0.5)',
      backdropFilter: 'blur(10px)'
    },
    inputFocused: {
      borderColor: '#667eea',
      background: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.1)',
      transform: 'translateY(-2px)'
    },
    inputIcon: {
      position: 'absolute',
      left: '1rem',
      color: '#6b7280',
      zIndex: 10,
      transition: 'all 0.3s ease'
    },
    inputIconFocused: {
      color: '#667eea',
      transform: 'scale(1.1)'
    },
    passwordToggle: {
      position: 'absolute',
      right: '1rem',
      color: '#6b7280',
      cursor: 'pointer',
      padding: '0.25rem',
      borderRadius: '0.25rem',
      transition: 'all 0.3s ease',
      zIndex: 10
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      animation: 'fadeInUp 0.6s ease-out both'
    },
    checkbox: {
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '0.375rem',
      border: '2px solid #e5e7eb',
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    checkboxChecked: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderColor: '#667eea',
      color: 'white',
      transform: 'scale(1.05)'
    },
    checkboxLabel: {
      fontSize: '0.875rem',
      color: '#4b5563',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    submitButton: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
      marginTop: '1rem',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 0.6s ease-out both'
    },
    submitButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.5)'
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#6b7280',
      animation: 'fadeInUp 0.6s ease-out 0.8s both'
    },
    loginLinkAnchor: {
      color: '#667eea',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }
  }

  const getInputStyle = (fieldName) => ({
    ...styles.input,
    ...(focusedField === fieldName ? styles.inputFocused : {})
  })

  const getInputIconStyle = (fieldName) => ({
    ...styles.inputIcon,
    ...(focusedField === fieldName ? styles.inputIconFocused : {})
  })

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes glow {
          0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
          100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6); }
        }
        
        @keyframes slideInLeft {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .form-input:focus + .input-icon {
          animation: bounce 0.6s ease-out;
        }
        
        .checkbox-ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple 0.6s linear;
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .submit-button-ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transform: scale(0);
          animation: ripple 0.6s linear;
        }
        
        @media (max-width: 768px) {
          .form-container {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.backgroundElements}></div>
        <div style={styles.formContainer}>
          {/* Left Panel */}
          <div style={styles.leftPanel}>
            <div style={styles.leftPanelOverlay}></div>
            <div style={styles.leftContent}>
              <div style={styles.logo}>ShopHub</div>
              <h2 style={styles.leftTitle}>
                Join Our Community
              </h2>
              <p style={styles.leftSubtitle}>
                Create your account and discover amazing products, exclusive deals, and personalized shopping experiences.
              </p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div style={styles.rightPanel}>
            <div style={styles.formHeader}>
              <h1 style={styles.formTitle}>Create Account</h1>
              <p style={styles.formSubtitle}>Fill in your details to get started</p>
            </div>

            <div style={styles.form}>
              {/* Name Fields */}
              <div style={styles.formRow}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>First Name</label>
                  <div style={styles.inputContainer}>
                    <div style={getInputIconStyle('firstName')}>
                      <User />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Enter your first name"
                      style={getInputStyle('firstName')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Last Name</label>
                  <div style={styles.inputContainer}>
                    <div style={getInputIconStyle('lastName')}>
                      <User />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Enter your last name"
                      style={getInputStyle('lastName')}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <div style={styles.inputContainer}>
                  <div style={getInputIconStyle('email')}>
                    <Mail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter your email address"
                    style={getInputStyle('email')}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <div style={styles.inputContainer}>
                  <div style={getInputIconStyle('phone')}>
                    <Phone />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter your phone number"
                    style={getInputStyle('phone')}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div style={styles.formRow}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Password</label>
                  <div style={styles.inputContainer}>
                    <div style={getInputIconStyle('password')}>
                      <Lock />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Create a password"
                      style={getInputStyle('password')}
                      className="form-input"
                      required
                    />
                    <div 
                      style={styles.passwordToggle}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </div>
                  </div>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Confirm Password</label>
                  <div style={styles.inputContainer}>
                    <div style={getInputIconStyle('confirmPassword')}>
                      <Lock />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('confirmPassword')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Confirm your password"
                      style={getInputStyle('confirmPassword')}
                      className="form-input"
                      required
                    />
                    <div 
                      style={styles.passwordToggle}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div style={styles.checkboxContainer}>
                <div 
                  style={{
                    ...styles.checkbox,
                    ...(agreeToTerms ? styles.checkboxChecked : {})
                  }}
                  onClick={() => setAgreeToTerms(!agreeToTerms)}
                >
                  {agreeToTerms && <Check />}
                </div>
                <label 
                  style={styles.checkboxLabel}
                  onClick={() => setAgreeToTerms(!agreeToTerms)}
                >
                  I agree to the <span style={{ color: '#667eea', cursor: 'pointer' }}>Terms of Service</span> and <span style={{ color: '#667eea', cursor: 'pointer' }}>Privacy Policy</span>
                </label>
              </div>

             
              {/* Submit Button */}
              <button 
                type="submit" 
                style={styles.submitButton}
                onClick={handleSubmit}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                }}
              >
                Create Account
              </button>
            </div>

            {/* Login Link */}
            <div style={styles.loginLink}>
              Already have an account? <a href="/loginpage" style={styles.loginLinkAnchor}>Sign in here</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage