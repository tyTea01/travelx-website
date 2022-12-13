import React from 'react';
import './Cards.css';
import CardItem from './CardItem';




function Cards() {
  return (
    <div className='cards'>
 

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <h1>Test</h1>
            <CardItem
              title='Test'
              src='images/avatar-M.png'
              text='Text'
              path='/services'
            />
            <h1>Test</h1>
            <CardItem
              src='images/avatar-M.png'
              text='Text'
              path='/services'
            />
            <h1>Test</h1>
            <CardItem
              src='images/avatar-M.png'
              text='Text'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;