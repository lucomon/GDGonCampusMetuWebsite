import React, { useState, useEffect } from 'react'
import './Hakkımızda.css'
import GDGC_treeLogo from '/gdgc-logo_tree.svg'
import Post from '../../assets/hakkimizda_images/1 - efe kaan.png'

const Hakkımızda = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [transitionState, setTransitionState] = useState('entered');

  const nextPage = () => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentPageIndex((prevIndex) => 
        prevIndex === 3 ? 0 : prevIndex + 1
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
        prevIndex === 0 ? 3 : prevIndex - 1
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
      title: "Hakkımızda",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="header-section">
                <h2><span className="g-letter-blue">G</span><span className="d-letter-red">D</span><span className="g-letter-yellow">G</span><span className="c-letter-green">C</span>-ODTÜ (Google Developer Groups Community - ODTÜ)</h2>
            </div>
            
            <div className="introduction-section">
              <p>
              Biz, teknolojiyi sadece öğrenmekle kalmayıp, üreten ve paylaşan bir öğrenci topluluğuyuz. Dünya genelinde 1000+ üniversitede Google desteğiyle faaliyet gösteren global ağın bir parçası olarak ODTÜ'de teknolojiye meraklı öğrencileri bir araya getiriyoruz.
              </p>
            </div>
            
          </div>
          
          <img src={GDGC_treeLogo} alt="GDGC Logo" />
        </div>
      )
    },
    {
      id: 2,
      title: "Amaçlarımız",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="body-section">
              <h3>Amaçlarımız</h3>
              <ul>
                <li>Yeni nesil <span style={{color: '#4285F4', fontWeight: 'bold'}}>teknoloji</span> liderleri yetiştirmek</li>
                <li>Öğrencilerin profesyonel ve teknik becerilerini <span style={{color: '#EA4335', fontWeight: 'bold'}}>geliştirmelerini</span> sağlamak</li>
                <li>Ulusal ve uluslararası ölçekte kariyer fırsatları yaratmak</li>
                <li>Gençlerin <span style={{color: '#FBBC05', fontWeight: 'bold'}}>ilham</span> alabileceğiniz ve kendini geliştirebileceği bir topluluk oluşturmak</li>
              </ul>
              <p>
              <span className="g-letter-blue">G</span><span className="d-letter-red">D</span><span className="g-letter-yellow">G</span><span className="c-letter-green">C</span>-ODTÜ, yalnızca etkinliklere katılabileceğiniz bir topluluk değil; aynı zamanda kendinizi keşfedeceğiniz, yeteneklerinizi geliştireceğiniz ve geleceğinizi şekillendireceğiniz bir alan.
              </p>
            </div>
          </div>
          
          <img src={GDGC_treeLogo} alt="GDGC Logo" />
        </div>
      )
    },
    {
      id: 3,
      title: "Neler Yapıyoruz",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            
            <div className="introduction-section">
              <p>
                ODTÜ’de teknolojiye meraklı herkes için bir buluşma noktası: <span className="g-letter-blue">G</span><span className="d-letter-red">D</span><span className="g-letter-yellow">G</span><span className="c-letter-green">C</span>-ODTÜ.
                Burada yalnızca yeni teknolojiler öğrenmekle kalmayıp; aynı zamanda üretebilir, paylaşabilir ve kariyerine yön verecek ilhamı bulabilirsin.

              </p>
            </div>
            
            <div className="body-section">
              <h3>✨ Neler mi yapıyoruz?</h3>
              <ul>
                <li><span style={{color: '#4285F4', fontWeight: 'bold'}}>AI Ideathon</span>: Yaratıcılığını konuştur, fikirlerinle fark yarat!</li>
                <li><span style={{color: '#EA4335', fontWeight: 'bold'}}>Datathon</span>: Yapay zekâyla gerçek sorunlara çözüm getir.</li>
                <li><span style={{color: '#FBBC05', fontWeight: 'bold'}}>Tea Talk</span>: Sektörün liderleriyle bir araya gel, sorularına yanıt bul.</li>
                <li><span style={{color: '#34A853', fontWeight: 'bold'}}>Workshoplar</span>: Teoriyi pratiğe dönüştür, deneyim kazan.</li>
              </ul>
              <p>
              🎯 Bizimle bir araya gel, teknoloji dünyasında kendine yer aç!
              </p>
            </div>
          </div>
          
          <img src={GDGC_treeLogo} alt="GDGC Logo" />
        </div>
      )
    },
    {
      id: 4,
      title: "Core Team",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="body-section">
              <ul>
                <li>Efe Kaan Güler</li>
                <li>Mehmet Kekeç</li>
                <li>Duygu Korkut</li>
                <li>Nisa Tekinay</li>
                <li>Doğa Murbıt</li>
                <li>Reyyan Hikmet Kav</li>
                <li>Pelin Evleksiz</li>
                <li>Metehan Erdoğan</li>
                <li>Özgür Yıldırım</li>
                <li>Faruk Bora Güvenkaya</li>
              </ul>
            </div>
          </div>
          
          <img src={Post} alt="GDGC Logo" />
        </div>
      )
    }
  ];

  const currentPage = pages[currentPageIndex];

  return (
    <div className="hakkimizda-container">
      <h1>{currentPage.title}</h1>
      
      <div className="hakkimizda-navigation">
        <button className="nav-button prev-button" onClick={prevPage}>
          &#8249;
        </button>
        
        <div className={`hakkimizda-page ${transitionState}`} key={currentPage.id}>
          {currentPage.content}
        </div>

        <button className="nav-button next-button" onClick={nextPage}>
          &#8250;
        </button>
      </div>
      
      <div className="hakkimizda-indicators">
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

export default Hakkımızda