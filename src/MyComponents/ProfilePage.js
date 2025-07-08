import React, { useEffect, useState } from 'react';

// SVG Icons as components
const User = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const Mail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

const ShoppingBag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 01-8 0"></path>
  </svg>
)

const Lock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
)

const Camera = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
)

const ProfilePage = () => {
   const [credentials, setCredentials] = useState({ email: '', password: '' });
   useEffect(() => {
    const storedData = localStorage.getItem('userCredentials');
    if (storedData) {
      setCredentials(JSON.parse(storedData));
    }
  }, []);
  const [isEditing, setIsEditing] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    totalPurchases: 100,
    orderCount: 24,
    memberSince: 'January 2022'
  })
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleProfileUpdate = () => {
    setIsEditing(false)
    // Here you would typically send the updated data to your backend
    console.log('Profile updated:', profileData)
  }

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    if (passwordData.newPassword.length < 8) {
      alert('Password must be at least 8 characters long!')
      return
    }
    // Here you would typically send the password change request to your backend
    console.log('Password change requested')
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    alert('Password changed successfully!')
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem 1rem'
    },
    profileContainer: {
      maxWidth: '1000px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
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
      color: '#6b7280'
    },
    profileGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr'
      }
    },
    card: {
      background: 'white',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    editButton: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    profileSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '2rem'
    },
    profileImageContainer: {
      position: 'relative'
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    profileImageEdit: {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      background: 'white',
      borderRadius: '50%',
      padding: '0.5rem',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      color: '#6b7280'
    },
    profileInfo: {
      flex: 1
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    infoIcon: {
      color: '#6b7280',
      minWidth: '24px'
    },
    infoContent: {
      flex: 1
    },
    infoLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.25rem'
    },
    infoValue: {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#1f2937'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      transition: 'border-color 0.3s',
      outline: 'none'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    },
    statCard: {
      background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
      borderRadius: '1rem',
      padding: '1.5rem',
      textAlign: 'center'
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      fontWeight: '500'
    },
    passwordForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    passwordField: {
      position: 'relative'
    },
    passwordInput: {
      width: '100%',
      padding: '0.75rem',
      paddingRight: '3rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      transition: 'border-color 0.3s',
      outline: 'none'
    },
    passwordToggle: {
      position: 'absolute',
      right: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#6b7280',
      padding: '0.25rem'
    },
    submitButton: {
      background: 'linear-gradient(to right, #10b981, #059669)',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '0.75rem 1.5rem',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    cancelButton: {
      background: '#6b7280',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.3s'
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'flex-end'
    },
    membershipBadge: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500',
      display: 'inline-block'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>My Profile</h1>
          <p style={styles.subtitle}>Manage your account information and preferences</p>
        </div>

        <div style={styles.profileGrid}>
          {/* Profile Information Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>
                <User />
                Profile Information
              </h2>
            
            </div>

            <div style={styles.profileSection}>
              <div style={styles.profileImageContainer}>
                <div style={styles.profileImage}>
                  {profileData.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                
              </div>
              
              <div style={styles.profileInfo}>
                <div style={styles.membershipBadge}>
                  Member since {profileData.memberSince}
                </div>
              </div>
            </div>

           

            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <Mail />
              </div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Email Address</div>
                {isEditing ? (
                  <input
                    style={styles.input}
                    value={credentials.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                ) : (
                  <div style={styles.infoValue}>{credentials.email}</div>
                )}
              </div>
            </div>

            {isEditing && (
              <div style={styles.buttonGroup}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button 
                  style={styles.submitButton}
                  onClick={handleProfileUpdate}
                >
                  <Check />
                  Save Changes
                </button>
              </div>
            )}
          </div>

          {/* Purchase Statistics Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>
                <ShoppingBag />
                Purchase Statistics
              </h2>
            </div>

            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>${profileData.totalPurchases.toFixed(0)}</div>
                <div style={styles.statLabel}>Total Spent</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{profileData.orderCount}</div>
                <div style={styles.statLabel}>Orders</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>${(profileData.totalPurchases / profileData.orderCount).toFixed(0)}</div>
                <div style={styles.statLabel}>Avg. Order</div>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <ShoppingBag />
              </div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Total Purchases</div>
                <div style={styles.infoValue}>
                  ${profileData.totalPurchases.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Change Password Card */}
          
        </div>
      </div>
    </div>
  )
}

export default ProfilePage