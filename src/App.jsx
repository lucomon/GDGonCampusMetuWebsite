import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // URL'den sayfa belirle
    const path = window.location.pathname
    if (path === '/menu') {
      setCurrentPage('menu')
    } else {
      setCurrentPage('home')
    }
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <Menu />
      case 'home':
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <NavBar />
      {renderPage()}
    </div>
  )
}

export default App

