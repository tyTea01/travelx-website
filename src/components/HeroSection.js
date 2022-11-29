
import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button, TextField } from '@mui/material';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Enter your SSN</h1>
      <div className='ssn-submit'>
        <header>
          <TextField
            label="Social Security"
            helperText="Please enter your SSN"
            id="outlined-size-small"
            size='small'
            placeholder='xxx-xx-xxxx'
          />
          <Button type="submit" variant="contained" style={{margin: '0 auto', display: "flex"}}>Submit</Button>


        </header>
      </div>

    </div>
  );
}

export default HeroSection;