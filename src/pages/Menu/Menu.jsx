import React, { useEffect } from 'react'

const Menu = () => {
  useEffect(() => {
    console.log('Menu sayfası yüklendi')
    
    // localStorage'dan kaydedilmiş URL'yi al, yoksa varsayılan URL'yi kullan
    const savedUrl = localStorage.getItem('qrRedirectUrl') || 'https://www.gdgoncampusmetu.com/'
    
    console.log('Yönlendirilecek URL:', savedUrl)
    
    // Kısa bir gecikme ile yönlendir (sayfa yüklenmesi için)
    const timer = setTimeout(() => {
      console.log('Yönlendirme başlıyor...')
      window.location.href = savedUrl
    }, 500)

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
        <p style={{ color: '#999', fontSize: '0.8rem', marginTop: '1rem' }}>
          Eğer yönlendirilmiyorsanız, <a href="https://www.gdgoncampusmetu.com/" target="_blank" rel="noopener noreferrer">buraya tıklayın</a>
        </p>
      </div>
    </div>
  )
}

export default Menu
