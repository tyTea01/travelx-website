import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={"/videos/video-3.mp4"} autoPlay loop muted />
        <h1>Enter your SSN</h1>
        <p>Test</p>
        <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>Submit</Button>

            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>Submit</Button>
            
        </div>
    </div>
  )
}

export default HeroSection;