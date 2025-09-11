import React, { useState, useEffect } from 'react'
import './Duyurular.css'
import duyurular from '../../assets/duyurular_images/duyuru_data.js'

const Duyurular = () => {
  const [currentDuyuruIndex, setCurrentDuyuruIndex] = useState(0);
  const [transitionState, setTransitionState] = useState('entered');

  const nextDuyuru = () => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentDuyuruIndex((prevIndex) => 
        prevIndex === duyurular.length - 1 ? 0 : prevIndex + 1
      );
      setTransitionState('entering');
      setTimeout(() => {
        setTransitionState('entered');
      }, 50);
    }, 250);
  };

  const prevDuyuru = () => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentDuyuruIndex((prevIndex) => 
        prevIndex === 0 ? duyurular.length - 1 : prevIndex - 1
      );
      setTransitionState('entering');
      setTimeout(() => {
        setTransitionState('entered');
      }, 50);
    }, 250);
  };

  const goToDuyuru = (index) => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentDuyuruIndex(index);
      setTransitionState('entering');
      setTimeout(() => {
        setTransitionState('entered');
      }, 50);
    }, 250);
  };

  const currentDuyuru = duyurular[currentDuyuruIndex];

  return (
    <div className='duyurular-container'>
        <div className='duyurular-header'>
            <h1>Duyurular</h1>
        </div>
        <div className='duyurular-content'>
            <button className='nav-button prev-button' onClick={prevDuyuru}>
                &#8249;
            </button>
            
            <div className={`duyuru-card ${transitionState}`} key={currentDuyuru.id}>
                <img src={currentDuyuru.image} alt={currentDuyuru.title} />
                
            </div>

            <button className='nav-button next-button' onClick={nextDuyuru}>
                &#8250;
            </button>
        </div>
        
        <div className='duyuru-indicators'>
            {duyurular.map((_, index) => (
                <span 
                    key={index}
                    className={`indicator ${index === currentDuyuruIndex ? 'active' : ''}`}
                    onClick={() => goToDuyuru(index)}
                >
                    ●
                </span>
            ))}
        </div>
    </div>
  )
}

export default Duyurular