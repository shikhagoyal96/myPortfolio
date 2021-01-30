import React, {Component} from 'react';
import './Pcards.css';
import CardItem from './PCardItem';

class Pcards extends React.Component{
  render(){
    return (
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
                text='While in university, I immersed myself into internships and volunteer positions that gave me perspectives on potential job prospects in the field of Web Development.Through this journey, I realized I wanted a career that encouraged me to be creative, think outside the box and constantly challenge me to innovate.'
                label='Why Web Development?'
                url="https://github.com/shikhagoyal96"
              />
              <CardItem
                text='While in university, I immersed myself into internships and volunteer positions that gave me perspectives on potential job prospects in the field of Web Development.Through this journey, I realized I wanted a career that encouraged me to be creative, think outside the box and constantly challenge me to innovate.'
                label='Why Web Development?'
                url="https://github.com/shikhagoyal96"
              />   
            </ul>
          </div>
      </div>
    </div>
    );
  }
}

export default Pcards
