import React, { useState, useEffect } from 'react'
import './Yarismalar.css'

const Yarismalar = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [transitionState, setTransitionState] = useState('entered');

  const nextPage = () => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentPageIndex((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
      setTransitionState('entering');
      setTimeout(() => {
        setTransitionState('entered');
      }, 50);
    }, 250);
  };

  const prevPage = () => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentPageIndex((prevIndex) => 
        prevIndex === 0 ? 2 : prevIndex - 1
      );
      setTransitionState('entering');
      setTimeout(() => {
        setTransitionState('entered');
      }, 50);
    }, 250);
  };

  const goToPage = (index) => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentPageIndex(index);
      setTransitionState('entering');
      setTimeout(() => {
        setTransitionState('entered');
      }, 50);
    }, 250);
  };

  const pages = [
    {
      id: 1,
      title: "Yarışmalar",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="header-section">
              <h2>Teknoloji Yarışmaları</h2>
            </div>
            
            <div className="introduction-section">
              <p>
                GDGC-ODTÜ olarak, öğrencilerin yaratıcılığını ve teknik becerilerini 
                sergileyebilecekleri çeşitli yarışmalar düzenliyoruz. Bu yarışmalar, 
                hem eğlenceli hem de öğretici deneyimler sunuyor.
              </p>
            </div>
            
            <div className="body-section">
              <h3>Yarışma Kategorileri</h3>
              <ul>
                <li>Hackathon: 48 saatlik kod maratonu</li>
                <li>AI Challenge: Yapay zeka projeleri</li>
                <li>App Development: Mobil uygulama geliştirme</li>
                <li>Web Design: Web tasarım yarışması</li>
                <li>Innovation Contest: İnovatif fikirler</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Aktif Yarışmalar",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="introduction-section">
              <p>
                Şu anda kayıtları açık olan yarışmalarımızı inceleyin ve 
                katılmak istediğiniz yarışmaya kayıt olun. Her yarışma için 
                detaylı kurallar ve ödül bilgileri mevcuttur.
              </p>
            </div>
            
            <div className="body-section">
              <h3>Açık Yarışmalar</h3>
              <ul>
                <li>Spring Hackathon 2024: 1-3 Mart, Kayıt: 25 Şubat'a kadar</li>
                <li>AI Ideathon: 15-16 Mart, Kayıt: 10 Mart'a kadar</li>
                <li>Flutter App Contest: 1-30 Nisan, Kayıt: 25 Mart'a kadar</li>
                <li>Web Design Challenge: 1-15 Mayıs, Kayıt: 20 Nisan'a kadar</li>
                <li>Innovation Pitch: 1-10 Haziran, Kayıt: 25 Mayıs'a kadar</li>
              </ul>
              <p>
                Toplam ödül havuzu: 50.000 TL + Google Cloud kredileri!
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Geçmiş Yarışmalar",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="introduction-section">
              <p>
                Geçmiş yarışmalarımızda yüzlerce katılımcı ile buluştuk. 
                Bu yarışmalarda ortaya çıkan projeler ve kazananlar, 
                topluluğumuzun yaratıcılığını ve teknik yetkinliğini gösteriyor.
              </p>
            </div>
            
            <div className="body-section">
              <h3>Önceki Kazananlar</h3>
              <ul>
                <li>Winter Hackathon 2023: "EcoTracker" - Çevre takip uygulaması</li>
                <li>AI Challenge 2023: "SmartStudy" - Akıllı çalışma asistanı</li>
                <li>App Development 2023: "CampusConnect" - Kampüs sosyal ağı</li>
                <li>Web Design 2023: "TechPortfolio" - Geliştirici portföy sitesi</li>
                <li>Innovation Contest 2023: "GreenTech" - Sürdürülebilir teknoloji</li>
              </ul>
              <p>
                Tüm kazananlarımızı tebrik ediyoruz ve başarılarının devamını diliyoruz!
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentPage = pages[currentPageIndex];

  return (
    <div className="yarismalar-container">
      <h1>{currentPage.title}</h1>
      
      <div className="yarismalar-navigation">
        <button className="nav-button prev-button" onClick={prevPage}>
          &#8249;
        </button>
        
        <div className={`yarismalar-page ${transitionState}`} key={currentPage.id}>
          {currentPage.content}
        </div>

        <button className="nav-button next-button" onClick={nextPage}>
          &#8250;
        </button>
      </div>
      
      <div className="yarismalar-indicators">
        {pages.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${index === currentPageIndex ? 'active' : ''}`}
            onClick={() => goToPage(index)}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  )
}

export default Yarismalar