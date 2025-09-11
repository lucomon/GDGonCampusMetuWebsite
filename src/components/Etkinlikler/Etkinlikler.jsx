import React, { useState, useEffect } from 'react'
import './Etkinlikler.css'


const Etkinlikler = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [transitionState, setTransitionState] = useState('entered');

  const nextPage = () => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentPageIndex((prevIndex) => 
        prevIndex === 4 ? 0 : prevIndex + 1
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
        prevIndex === 0 ? 4 : prevIndex - 1
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
      title: "Etkinlikler",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            
            
            <div className="introduction-section">
              <p>
              Yıl boyunca düzenlediğimiz etkinliklerle öğrencilerin hem teknoloji bilgisini hem de kariyer yolculuklarını güçlendirmelerine destek oluyoruz:
              </p>
            </div>
            
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "AI Ideathon",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="introduction-section">
              <p>
                Türkiye’nin dört bir yanından üniversite öğrencilerini buluşturan, heyecan dolu bir fikir geliştirme maratonu.
                Katılımcılar ekipler halinde problem çözüyor, yenilikçi projeler üretiyor ve jüri karşısında fikirlerini savunuyor.
                Kazanan ekipler ise büyük ödüllerle destekleniyor.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Datathon",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="introduction-section">
              <p>
                Veri bilimi ve yapay zeka meraklılarını aynı çatı altında toplayan yarışma.
                Katılımcılar, gerçek dünya problemlerine yapay zeka tabanlı çözümler geliştiriyor ve sonuçlar objektif metriklerle değerlendiriliyor.
                Bu sayede hem pratik deneyim kazanılıyor hem de profesyonel ağlar genişliyor.

              </p>
            </div>
            
          </div>
        </div>
      )
    },
    {
        id: 4,
        title: "Tea Talk",
        content: (
          <div className="hakkimizda-content">
            <div className="text-section">
              <div className="introduction-section">
                <p>
                Sektörün önde gelen isimlerini öğrencilerle buluşturan ilham verici sohbetler.
Sunumlarla başlayan etkinlikler, interaktif soru-cevaplarla devam ediyor.
Katılımcılar, sektörden rol modellerle tanışarak kariyerleri için yeni ufuklar kazanıyor.

                </p>
              </div>
              
            </div>
          </div>
        )
      },
      {
        id: 5,
        title: "Workshoplar",
        content: (
          <div className="hakkimizda-content">
            <div className="text-section">
              <div className="introduction-section">
                <p>
                Katılımcıların yalnızca dinleyici değil, aktif birer uygulayıcı olduğu teknik eğitimler.
Uzman eğitmenlerin yönlendirmesiyle teori pratiğe dönüşüyor, öğrenciler hem öğreniyor hem de deneyim kazanıyor.

                </p>
              </div>
              
            </div>
          </div>
        )
      }
  ];

  const currentPage = pages[currentPageIndex];

  return (
    <div className="etkinlikler-container">
      <h1>{currentPage.title}</h1>
      
      <div className="etkinlikler-navigation">
        <button className="nav-button prev-button" onClick={prevPage}>
          &#8249;
        </button>
        
        <div className={`etkinlikler-page ${transitionState}`} key={currentPage.id}>
          {currentPage.content}
        </div>

        <button className="nav-button next-button" onClick={nextPage}>
          &#8250;
        </button>
      </div>
      
      <div className="etkinlikler-indicators">
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

export default Etkinlikler