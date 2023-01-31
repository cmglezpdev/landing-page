import React from 'react'

import './home.scss';

export const Home = () => {
  return (
    <header className='home container' id='home'>
        
        <div className='home__content'>
          <p className='content-intro'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis atque ipsum, quisquam accusantium voluptas placeat in quas maiores error cum ipsam explicabo dicta laborum. Reiciendis nam sunt optio totam quibusdam?</p>
          <button className='content-btn'>
            Started
          </button>
        </div>

        <div className='home-waves'>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>

    </header>
  )
}
