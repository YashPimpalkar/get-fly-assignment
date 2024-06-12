import React from 'react'
import "./dashboard.css"
import HeroSection from '../../components/hero/HeroSection'
import MainSection from '../../components/mainsection/MainSection'
const dashboard = () => {
  return (
    <header className='header'>
      <HeroSection />
      <MainSection />
    </header>
  )
}

export default dashboard
