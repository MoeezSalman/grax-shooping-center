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

const Google = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const Github = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LoginPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focusedInput, setFocusedInput] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
  alert('Login successful!');

  // Store in localStorage
  localStorage.setItem('userCredentials', JSON.stringify({
    email: formData.email,
    password: formData.password
    
  }));

  navigate('/mainpage');
}
 else {
        alert(data.message || 'Invalid email or password');
      }
    } catch (error) {
      alert('Server error, please try again later.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem'
    },
    formContainer: {
      background: 'white',
      borderRadius: '2rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      maxWidth: '900px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr'
      }
    },
    leftPanel: {
      background: 'linear-gradient(135deg, #581c87, #7c3aed, #ec4899)',
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
      background: 'rgba(0, 0, 0, 0.1)',
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
      `,
      animation: mounted ? 'float 6s ease-in-out infinite' : 'none'
    },
    leftContent: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
    },
    logo: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, white, #e5e7eb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: mounted ? 'pulse 3s ease-in-out infinite' : 'none'
    },
    leftTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem'
      }
    },
    leftSubtitle: {
      fontSize: '1.125rem',
      color: '#d1d5db',
      lineHeight: 1.6,
      maxWidth: '20rem'
    },
    rightPanel: {
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateX(0)' : 'translateX(30px)',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
    },
    formHeader: {
      marginBottom: '2rem',
      textAlign: 'center'
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #1f2937, #6b7280)',
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
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
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
      background: '#f9fafb',
      transform: 'translateY(0)'
    },
    inputFocused: {
      borderColor: '#7c3aed',
      background: 'white',
      boxShadow: '0 0 0 4px rgba(124, 58, 237, 0.1)',
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
      color: '#7c3aed',
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
      transform: 'scale(1)'
    },
    passwordToggleHover: {
      color: '#7c3aed',
      transform: 'scale(1.1)'
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.75rem'
    },
    rememberMeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
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
      transform: 'scale(1)'
    },
    checkboxChecked: {
      background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
      borderColor: '#7c3aed',
      color: 'white',
      transform: 'scale(1.1)'
    },
    checkboxLabel: {
      fontSize: '0.875rem',
      color: '#4b5563',
      cursor: 'pointer'
    },
    forgotPassword: {
      fontSize: '0.875rem',
      color: '#7c3aed',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    submitButton: {
      background: isLoading ? '#9ca3af' : 'linear-gradient(135deg, #7c3aed, #ec4899)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      border: 'none',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      marginTop: '1rem',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    submitButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    loadingSpinner: {
      width: '20px',
      height: '20px',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      margin: '1.5rem 0'
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      background: '#e5e7eb'
    },
    dividerText: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    socialButtons: {
      display: 'flex',
      gap: '1rem'
    },
    socialButton: {
      flex: 1,
      padding: '0.75rem 1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.75rem',
      background: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      transform: 'translateY(0)'
    },
    socialButtonHover: {
      borderColor: '#7c3aed',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    signupLink: {
      textAlign: 'center',
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    signupLinkAnchor: {
      color: '#7c3aed',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative'
    }
  }

  // Add keyframes for animations
  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes slideIn {
      from { 
        opacity: 0;
        transform: translateX(-20px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
  `

    return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      <div style={styles.formContainer}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <div style={styles.leftPanelOverlay}></div>
          <div style={styles.leftContent}>
            <div style={styles.logo}>ShopHub</div>
            <h2 style={styles.leftTitle}>Welcome Back</h2>
            <p style={styles.leftSubtitle}>
              Sign in to your account and continue your shopping journey with us.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <div style={styles.formHeader}>
            <h1 style={styles.formTitle}>Sign In</h1>
            <p style={styles.formSubtitle}>Enter your credentials to access your account</p>
          </div>

          {/* ✅ Wrap inside a form */}
          <form style={styles.form} onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={styles.inputGroup}>
              <label style={{
                ...styles.label,
                color: focusedInput === 'email' ? '#7c3aed' : '#374151'
              }}>
                Email Address
              </label>
              <div style={styles.inputContainer}>
                <div style={{
                  ...styles.inputIcon,
                  ...(focusedInput === 'email' ? styles.inputIconFocused : {})
                }}>
                  <Mail />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Enter your email address"
                  style={{
                    ...styles.input,
                    ...(focusedInput === 'email' ? styles.inputFocused : {})
                  }}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={styles.inputGroup}>
              <label style={{
                ...styles.label,
                color: focusedInput === 'password' ? '#7c3aed' : '#374151'
              }}>
                Password
              </label>
              <div style={styles.inputContainer}>
                <div style={{
                  ...styles.inputIcon,
                  ...(focusedInput === 'password' ? styles.inputIconFocused : {})
                }}>
                  <Lock />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Enter your password"
                  style={{
                    ...styles.input,
                    ...(focusedInput === 'password' ? styles.inputFocused : {})
                  }}
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

            {/* Remember Me & Forgot Password */}
            <div style={styles.checkboxContainer}>
              <div style={styles.rememberMeContainer}>
                <div
                  style={{
                    ...styles.checkbox,
                    ...(rememberMe ? styles.checkboxChecked : {})
                  }}
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  )}
                </div>
                <label
                  style={styles.checkboxLabel}
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  Remember me
                </label>
              </div>
              <a href="#" style={styles.forgotPassword}>Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div style={styles.loadingSpinner}></div>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>or continue with</span>
            <div style={styles.dividerLine}></div>
          </div>

          {/* Social Login Buttons */}
          <div style={styles.socialButtons}>
            <button style={styles.socialButton}>
              <Google />
              Google
            </button>
            <button style={styles.socialButton}>
              <Github />
              GitHub
            </button>
          </div>

          {/* Signup Link */}
          <div style={styles.signupLink}>
            Don't have an account? <Link to="/" style={styles.signupLinkAnchor}>Create one here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage