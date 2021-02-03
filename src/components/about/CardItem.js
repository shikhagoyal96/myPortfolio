import React from 'react';

function CardItem(props) {
    return (
        <>
          <li className="cards__item">
              <div>
                  <div className=".cards__item__info" >
                    <h2 className="cards__item__label">{props.label}</h2>
                    <h5 className="cards__item__text">{props.text}</h5>
                   </div>        
              </div>
           </li>  
        </>
    )
}

export default CardItem
