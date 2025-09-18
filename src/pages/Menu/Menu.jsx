import React, { useEffect } from 'react'

const Menu = () => {
  useEffect(() => {
    // localStorage'dan kaydedilmiş URL'yi al, yoksa varsayılan URL'yi kullan
    const savedUrl = localStorage.getItem('qrRedirectUrl') || 'https://site.com/menuler/menu-2024'
    
    // Sayfa yüklendiğinde hemen yönlendir
    window.location.href = savedUrl
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <p>Yönlendiriliyorsunuz, lütfen bekleyin...</p>
    </div>
  )
}

export default Menu
