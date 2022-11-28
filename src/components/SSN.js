import React from 'react';
import '../App.css';
import './SSN.css';
//import {useState} from 'react';
import { Button, TextField } from '@mui/material';
//import { outlinedInputClasses } from "@mui/material/OutlinedInput";
//import { inputLabelClasses } from "@mui/material/InputLabel";
//import { styled } from "@mui/material/styles";


function SSN() {

    return (

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
    );
}

export default SSN;