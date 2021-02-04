import React from 'react';

function Pdetail(props) {
    return (
      <>
        <li>
              <div>
                  <div >
                    <h2>{props.label}</h2>
                    {/* <p>{props.text}</p> */}
                   </div>        
              </div>
           </li>
      </>
    );
  }

  export default Pdetail