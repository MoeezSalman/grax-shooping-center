import React, { useState, useEffect } from 'react';

export const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check initial size
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!isMobile) {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerStyle = {
        minHeight: isMobile ? '400px' : '300px',
        position: 'relative',
        background: 'linear-gradient(to bottom right, #1f2937, #581c87, #1f2937)',
        color: 'white',
        overflow: 'hidden'
    };

    const containerStyle = {
        position: 'relative',
        zIndex: 10,
        maxWidth: '1152px',
        margin: '0 auto',
        padding: isMobile ? '32px 16px' : '48px 24px'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: isMobile ? '24px' : '32px',
        marginBottom: isMobile ? '24px' : '32px'
    };

    const brandStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '16px',
        justifyContent: isMobile ? 'center' : 'flex-start'
    };

    const logoStyle = {
        width: isMobile ? '36px' : '40px',
        height: isMobile ? '36px' : '40px',
        background: 'linear-gradient(to right, #a855f7, #ec4899)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'bounce 1s infinite'
    };

    const titleStyle = {
        fontSize: isMobile ? '20px' : '24px',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #c084fc, #f472b6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    const linkStyle = {
        color: '#d1d5db',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        fontSize: 'inherit'
    };

    const socialButtonStyle = {
        width: isMobile ? '44px' : '40px',
        height: isMobile ? '44px' : '40px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: 'none',
        fontSize: isMobile ? '20px' : '18px',
        backdropFilter: 'blur(4px)'
    };

    const scrollButtonStyle = {
        position: 'fixed',
        bottom: isMobile ? '20px' : '32px',
        right: isMobile ? '20px' : '32px',
        width: isMobile ? '52px' : '48px',
        height: isMobile ? '52px' : '48px',
        background: 'linear-gradient(to right, #a855f7, #ec4899)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        zIndex: 50,
        fontSize: isMobile ? '24px' : '20px',
        animation: 'bounce 2s infinite'
    };

    return (
        <>
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.1; }
                }
                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
                    40%, 43% { transform: translateY(-10px); }
                    70% { transform: translateY(-5px); }
                }
                
                @media (max-width: 768px) {
                    .footer-brand-section {
                        text-align: center;
                        margin-bottom: 32px;
                    }
                    
                    .footer-social-section {
                        text-align: center;
                    }
                    
                    .footer-social-buttons {
                        justify-content: center;
                    }
                    
                    .footer-bottom-bar {
                        flex-direction: column;
                        text-align: center;
                        gap: 16px;
                    }
                    
                    .footer-bottom-links {
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                }
            `}</style>
            
            <footer style={footerStyle} onMouseMove={handleMouseMove}>
                {/* Animated Background Elements */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isMobile ? 0.05 : 0.1
                }}>
                    <div style={{
                        position: 'absolute',
                        width: isMobile ? '200px' : '384px',
                        height: isMobile ? '200px' : '384px',
                        background: '#a855f7',
                        borderRadius: '50%',
                        mixBlendMode: 'multiply',
                        filter: 'blur(60px)',
                        animation: 'pulse 2s infinite',
                        left: isMobile ? '10%' : `${mousePos.x * 0.05}px`,
                        top: isMobile ? '10%' : `${mousePos.y * 0.05}px`,
                        transform: 'translate(-50%, -50%)'
                    }} />
                    <div style={{
                        position: 'absolute',
                        width: isMobile ? '200px' : '384px',
                        height: isMobile ? '200px' : '384px',
                        background: '#ec4899',
                        borderRadius: '50%',
                        mixBlendMode: 'multiply',
                        filter: 'blur(60px)',
                        animation: 'pulse 2s infinite',
                        animationDelay: '2s',
                        right: isMobile ? '10%' : `${mousePos.x * 0.03}px`,
                        bottom: isMobile ? '10%' : `${mousePos.y * 0.03}px`,
                        transform: 'translate(50%, 50%)'
                    }} />
                </div>

                {/* Floating Particles */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none'
                }}>
                    {[...Array(isMobile ? 10 : 20)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: isMobile ? '6px' : '8px',
                                height: isMobile ? '6px' : '8px',
                                background: 'white',
                                borderRadius: '50%',
                                opacity: 0.2,
                                animation: `pulse ${2 + Math.random() * 2}s infinite`,
                                animationDelay: `${Math.random() * 3}s`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>

                <div style={containerStyle}>
                    {/* Main Footer Content */}
                    <div style={gridStyle}>
                        {/* Brand Section */}
                        <div className="footer-brand-section" style={{ marginBottom: '16px' }}>
                            <div style={brandStyle}>
                                <div style={logoStyle}>
                                    <span style={{ 
                                        fontSize: isMobile ? '18px' : '20px', 
                                        fontWeight: 'bold' 
                                    }}>T</span>
                                </div>
                                <h3 style={titleStyle}>
                                    Grax
                                </h3>
                            </div>
                            <p style={{ 
                                color: '#d1d5db', 
                                lineHeight: '1.6',
                                fontSize: isMobile ? '14px' : '16px',
                                maxWidth: isMobile ? 'none' : '300px'
                            }}>
                                Organize your life with style. The most beautiful and efficient todo app ever created.
                            </p>
                        </div>

                        {/* Social & Contact */}
                        <div className="footer-social-section">
                            <h4 style={{ 
                                fontSize: isMobile ? '16px' : '18px', 
                                fontWeight: '600', 
                                color: '#d8b4fe', 
                                marginBottom: '16px' 
                            }}>
                                Connect With Us
                            </h4>
                            <div className="footer-social-buttons" style={{ 
                                display: 'flex', 
                                gap: isMobile ? '16px' : '12px', 
                                marginBottom: '16px',
                                flexWrap: 'wrap'
                            }}>
                                {[
                                    { icon: '📘', label: 'Facebook', hoverColor: '#3b82f6' },
                                    { icon: '📸', label: 'Instagram', hoverColor: '#f472b6' },
                                ].map(({ icon, label, hoverColor }, index) => (
                                    <button
                                        key={index}
                                        onClick={() => console.log(`Clicked ${label}`)}
                                        title={label}
                                        style={socialButtonStyle}
                                        onMouseOver={(e) => {
                                            e.target.style.color = hoverColor;
                                            e.target.style.transform = 'scale(1.25) rotate(12deg)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = 'white';
                                            e.target.style.transform = 'scale(1) rotate(0deg)';
                                        }}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                            <p style={{ 
                                color: '#d1d5db', 
                                fontSize: isMobile ? '12px' : '14px' 
                            }}>
                                Made with <span style={{ color: '#ef4444', animation: 'pulse 1s infinite' }}>❤️</span> by developers who care
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{
                        height: '1px',
                        background: 'linear-gradient(to right, transparent, #a855f7, transparent)',
                        marginBottom: isMobile ? '24px' : '32px',
                        opacity: 0.5
                    }}></div>

                    {/* Bottom Bar */}
                    <div className="footer-bottom-bar" style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <div className="footer-bottom-links" style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: isMobile ? '12px' : '16px', 
                            fontSize: isMobile ? '12px' : '14px', 
                            color: '#9ca3af'
                        }}>
                            <span>© 2024 MyTodosList.com</span>
                            <span>•</span>
                            <button 
                                onClick={() => console.log('Privacy Policy clicked')}
                                style={{...linkStyle, fontSize: isMobile ? '12px' : '14px'}}
                                onMouseOver={(e) => e.target.style.color = 'white'}
                                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                            >
                                Privacy Policy
                            </button>
                            <span>•</span>
                            <button 
                                onClick={() => console.log('Terms clicked')}
                                style={{...linkStyle, fontSize: isMobile ? '12px' : '14px'}}
                                onMouseOver={(e) => e.target.style.color = 'white'}
                                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                            >
                                Terms of Service
                            </button>
                        </div>
                        
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '8px', 
                            fontSize: isMobile ? '12px' : '14px', 
                            color: '#9ca3af' 
                        }}>
                            <span style={{ animation: 'pulse 1s infinite' }}>⚡</span>
                            <span>Powered by innovation</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient Border */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, #a855f7, #ec4899, #a855f7)',
                    animation: 'pulse 2s infinite'
                }}></div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    style={scrollButtonStyle}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
};

// Demo component to show the footer in action
const App = () => {
    return (
        <div style={{ minHeight: '100vh', background: '#f3f4f6' }}>
            {/* Demo content to enable scrolling */}
            <div style={{ padding: '32px 16px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <h1 style={{ 
                    fontSize: window.innerWidth < 768 ? '28px' : '36px', 
                    fontWeight: 'bold', 
                    color: '#1f2937', 
                    textAlign: 'center' 
                }}>
                    Demo Page
                </h1>
                {[...Array(10)].map((_, i) => (
                    <div key={i} style={{
                        background: 'white',
                        padding: window.innerWidth < 768 ? '16px' : '24px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        maxWidth: '100%'
                    }}>
                        <h2 style={{ 
                            fontSize: window.innerWidth < 768 ? '20px' : '24px', 
                            fontWeight: '600', 
                            marginBottom: '16px' 
                        }}>
                            Section {i + 1}
                        </h2>
                        <p style={{ 
                            color: '#6b7280', 
                            lineHeight: '1.6',
                            fontSize: window.innerWidth < 768 ? '14px' : '16px'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default App;