import React, { useState, useEffect } from 'react'
import './Egitimler.css'
import foto1 from '/EgitimPhoto1.jpg'
import foto2 from '/AI_egitim_photo.jpg'
import foto3 from '/AI_egitim_photo2.jpg'



const Egitimler = () => {
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
      title: "Eğitimler",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="header-section">
              <h2>Teknoloji Eğitimleri</h2>
            </div>
            
            <div className="introduction-section">
              <p>
                GDGC-ODTÜ olarak, üyelerimizin teknik becerilerini geliştirmeleri için 
                kapsamlı eğitim programları sunuyoruz. Google teknolojilerinden yapay zekaya, 
                web geliştirmeden mobil uygulamalara kadar geniş bir yelpazede eğitimler veriyoruz.
              </p>
            </div>
            
            <div className="body-section">
              <h3>Eğitim Kategorileri</h3>
              <ul>
                <li><span style={{color: '#4285F4', fontWeight: 'bold'}}>AI/ML</span></li>
                <li><span style={{color: '#EA4335', fontWeight: 'bold'}}>Web Geliştirme</span></li>
              </ul>
            </div>
          </div>
          <div className="image-section">
            <img src={foto3} alt="Eğitim_Fotoğrafı_1" />
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "AI/ML",
      content: (
        <div className="hakkimizda-content">
          <div className="text-section">
            <div className="introduction-section">
              <p>
              Yapay Zeka eğitimi 7 modülden oluşan yeni başlayanların dostu olarak düzenlenmiş bir eğitimdir. Eğitim içerisinde katılımcıların daha iyi öğrenmesini sağlamak amacıyla hem teorik hem de pratik dökümanlara yer verilmiştir. Ayrıca katılımcıların kendilerini deneyebileceği bir ödev dosyası her modül içerisinde sağlanmıştır. Ders anlatım videoları ve ilgili bütün dökümanlar eğitmenler tarafından açık kaynak olarak sunulmuştur. İlgili 7 modülün içeriği şu şekilde özetlenebilir:
              </p>
            </div>
          </div>
          <div className="image-section">
            <img src={foto1} alt="Eğitim_Fotoğrafı_1" />
            <img src={foto2} alt="Eğitim_Fotoğrafı_2" />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "AI/ML Modüller",
      content: (
        <div className="module-content">
          <div className="text-section">
            <div className="module-section">
                <ul>
                    <li>
                        <span style={{color: '#4285F4', fontWeight: 'bold'}}>Modül 0:</span>
                        <p>Python programlama dili ile aşinalık kazanmak için 0’dan başlayan bu modül içerisinde fonksiyonlar, sınıf yapıları ve modüller gibi ileri düzey kavramları da barındırmaktadır. Module-0 içerisinde yapay zeka alanında sıkça kullanılan numpy, matplotlib ve pandas kütüphanelerinin detaylı anlatımları ve uygulamalı kullanımları da bulunmaktadır.</p>
                    </li>
                    <li>
                        <span style={{color: '#EA4335', fontWeight: 'bold'}}>Modül 1:</span>
                        <p>Makine öğrenmesi giriş niteliği sayılabilecek bu module içerisinde “Linear Regression” ve “Logistic Regression” problemlerinin tanımları, bu problemlere yönelik modellerin oluşturulması ve “Gradient Descent” algoritması hem teorik olarak matematik düzeyinde hem de pratik olarak kod düzeyinde uygulamalı olarak anlatılmaktadır. Yine bu modül içerisinde kendinizi deneyebileceğiniz ödevlendirme dosyası da bulunmaktadır.</p>
                    </li>
                    <li>
                        <span style={{color: '#FBBC05', fontWeight: 'bold'}}>Modül 2:</span>
                        <p>Makine öğrenmesi modellerinin performansını ölçmeyi ve bu modeller için test ortamı kurmayı öğreneceğiniz bu modül içerisinde “sklearn” kütüphanesinin kullanımını da pekiştirebilirsiniz. </p>
                    </li>
                    <li>
                        <span style={{color: '#34A853', fontWeight: 'bold'}}>Modül 3:</span>
                        <p>Veri ön işleme alanına yönelik hazırlanan bu modül içerisinde veri tiplerini, verilerin istatistiksel analizini, kayıp veri ile nasıl başa çıkılabileceğini, normalizasyon ve standartizasyon gibi kavramları ve makine öğrenmesi modeli için verinizi nasıl hazırlayabileceğinizi öğrenebilirsiniz. </p>
                    </li>
                    <li>
                        <span style={{color: '#4285F4', fontWeight: 'bold'}}>Modül 4:</span>
                        <p>Derin öğrenme alanını baz alan bu modül içerisinde “PyTorch” kütüphanesi öğrenmekle kalmayıp yapay sinir ağları, bu ağların eğitimi ve geliştirilmesi, eğitimde kullanılan farklı algoritmalar ve farklı katman çeşitlerini öğrenebilirsiniz. Bu modül günümüzde derin öğrenme başlığı altında toplanan birçok uygulamanın temelindeki fikirleri ve algoritmaları hem teorik düzeyde hem de kod seviyesinde anlatmaktadır.</p>
                    </li>
                    <li>
                        <span style={{color: '#EA4335', fontWeight: 'bold'}}>Modül 5:</span>
                        <p>Görüntü işleme konusunun detaylı olarak işlendiği bu modül, derin öğrenmenin görüntü işleme için özelleştirilmiş varyasyonlarını, görüntü verisini, görüntü sınıflandırmayı, görüntü üzerinde nesne tespitini ve segmentasyonunu anlatmaktadır. “SOTA” , “YOLO” gibi birçok modelin mantığını ve kullanımı kavrayacağınız bu modül ile kendiniz bir görüntü işleme sistemi kurabilecek yetenekleri edinebilirsiniz.</p>
                    </li>
                    <li>
                        <span style={{color: '#FBBC05', fontWeight: 'bold'}}>Modül 6:</span>
                        <p>Doğal dil işleme alanına giriş yapacağınız bu modül içerisinde yazı verisini ve yazı verisinin özelliklerini, derin öğrenme modellerinin doğal dil işleme alanında nasıl kullanıldığını, chatbotların temelini oluşturan transformer modelleri, soru cevap yeteneğine sahip RAG mimarilerini ve daha fazlasını öğrenebilirsiniz.</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "WEB Geliştirme",
      content: (
        <div className="web-content">
          <div className="text-section">
            <div className="introduction-section">
              <p>Bu kapsamlı eğitim serisi, web geliştirmeye sıfırdan başlayanlar için uygun olacak şekilde tasarlanmıştır. HTML, CSS, JavaScript ve React teknolojilerini kapsayan, temel seviyeden ileri seviyeye kadar uzanan bir öğrenme yolculuğu sunar. Her konu detaylı örnekler ve pratik alıştırmalarla desteklenir. Bu eğitimleri tamamladığınızda modern web siteleri ve etkileşimli uygulamalar geliştirebilirsiniz.</p>
            </div>
          </div>
          <div className="image-section">
            <img src={foto1} alt="Eğitim_Fotoğrafı_1" />
            <img src={foto2} alt="Eğitim_Fotoğrafı_2" />
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "WEB Geliştirme Modüller",
      content: (
        <div className="web-module-content">
          <div className="text-section">
            <div className="module-section">
                <ul>
                    <li>
                        <span style={{color: '#4285F4', fontWeight: 'bold'}}>HTML:</span>
                        <p>Bu eğitim materyali, web geliştirmeye sıfırdan başlayanlar için HTML'in temel yapı taşlarını, semantic HTML kullanımını, formlar, tablolar ve modern web standartlarını detaylı örnekler ve pratik alıştırmalarla öğretir.</p>
                    </li>
                    <li>
                        <span style={{color: '#EA4335', fontWeight: 'bold'}}>CSS:</span>
                        <p>Bu eğitim materyali, web sayfalarını güzelleştirmek için CSS'in temel kavramlarını, Box Model, Flexbox, Grid sistemlerini, responsive tasarımı ve Tailwind CSS framework'ünü pratik örnekler ve modern tasarım teknikleriyle öğretir.</p>
                    </li>
                    <li>
                        <span style={{color: '#FBBC05', fontWeight: 'bold'}}>JavaScript:</span>
                        <p>Bu eğitim materyali, web sitelerini etkileşimli hale getirmek için JavaScript'in temel kavramlarından ileri seviye özelliklerine kadar tüm konuları, değişkenler, fonksiyonlar, object-oriented programming, modern ES6+ özellikleri ve module sistemini detaylı örnekler ve pratik alıştırmalarla öğretir.</p>
                    </li>
                    <li>
                        <span style={{color: '#34A853', fontWeight: 'bold'}}>React:</span>
                        <p>Bu eğitim materyali, modern web uygulamaları geliştirmek için React'in temel kavramlarından enterprise-level uygulamalara kadar tüm konuları, JSX, Components, Hook'lar, State Management, Redux, TypeScript, Testing ve deployment konularını pratik örnekler ve profesyonel tekniklerle öğretir.</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      )
    }

  ];

  const currentPage = pages[currentPageIndex];

  return (
    <div className="egitimler-container">
      <h1>{currentPage.title}</h1>
      
      <div className="egitimler-navigation">
        <button className="nav-button prev-button" onClick={prevPage}>
          &#8249;
        </button>
        
        <div className={`egitimler-page ${transitionState}`} key={currentPage.id}>
          {currentPage.content}
        </div>

        <button className="nav-button next-button" onClick={nextPage}>
          &#8250;
        </button>
      </div>
      
      <div className="egitimler-indicators">
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

export default Egitimler