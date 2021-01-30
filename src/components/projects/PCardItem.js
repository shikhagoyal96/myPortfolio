import React from 'react';
import './Pcards.css';
import ProjectDetails from './ProjectDetails';

import 'bootstrap/dist/css/bootstrap.min.css';

    function PCardItem(props) {
        const [modalShow, setModalShow] = React.useState(false);

        return (
        <>
          <li className="cards__item">
          <div className=".cards__item__info" onClick={() => setModalShow(true)} >
                    <h4 className="cards__item__label">{props.label}</h4>
                    <h5 className="cards__item__text">{props.text}</h5>
                    <a href={props.url}><i class="fab fa-github"> View Code</i></a>
              </div> 
           </li>  

            <ProjectDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
        );
    }

export default PCardItem