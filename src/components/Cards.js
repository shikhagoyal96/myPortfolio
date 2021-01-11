import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='I am a graduate of the DIT University with a Bachelor of Technology Degree in Computer Science and Engineering. I also hold Ontario Graduate Certificate (OGC) in Web Development from Humber College.'
              label='How I started?'
            />
            <CardItem
              text='While in university, I immersed myself into internships and volunteer positions that gave me perspectives on potential job prospects in the field of Web Development.Through this journey, I realized I wanted a career that encouraged me to be creative, think outside the box and constantly challenge me to innovate.'
              label='Why Web Development?'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text='My hope is that people have the opportunity to feel heard and validated through any project that I work on in future.'
              label='My Goals'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
