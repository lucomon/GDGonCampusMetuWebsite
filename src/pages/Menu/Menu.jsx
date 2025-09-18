import React, { useEffect } from 'react'

const Menu = () => {
  useEffect(() => {
    // localStorage'dan kaydedilmiş URL'yi al, yoksa varsayılan URL'yi kullan
    const savedUrl = localStorage.getItem('qrRedirectUrl') || 'https://www.gdgoncampusmetu.com/'
    
    // Kısa bir gecikme ile yönlendir (sayfa yüklenmesi için)
    const timer = setTimeout(() => {
      window.location.href = savedUrl
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#333', marginBottom: '1rem' }}>Yönlendiriliyorsunuz...</h2>
        <p style={{ color: '#666', margin: 0 }}>Lütfen bekleyin, sayfa yönlendiriliyor.</p>
      </div>
    </div>
  )
}

export default Menu
