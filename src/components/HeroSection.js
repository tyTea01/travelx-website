
import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import {getIn} from './Data'




const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white"
  }
});

var inputStr;
var dataOb;



function HeroSection() {
  return (
    
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />

      <div className='ssn-submit'>
        <header>
          <StyledTextField
            
            onChange={(event) => {
              inputStr = (parseInt(event.target.value));
            }}
            InputLabelProps={{style : {color : 'white'}}}
            InputProps={{style : {color : 'white'}}}
            FormHelperTextProps = {{style : {color : 'white'}}}
            label="Social Security"
            helperText="Please enter your SSN"
            id="outlined-size-normal"
            size='normal'
            placeholder='xxx-xx-xxxx'
          />
          <Button 
           onClick={() => {
            if (!(getIn(inputStr))){
              alert("error not in database");
            }else{
              dataOb = getIn(inputStr)
              alert("In database")
              window.location.href = "/datapage"
            }
          }}
          type="submit" 
          variant="contained" 
          style={{margin: '0 auto', display: "flex"}} 
          endIcon={<KeyboardArrowRightIcon/>}>
            Submit
            </Button>


        </header>
      </div>

    </div>
  );
}

export default HeroSection;