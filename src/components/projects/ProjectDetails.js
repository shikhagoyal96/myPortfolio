import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ProjectDetails(props) {
    return (
      <>
      <ul className='modal_items'>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <div id="modal1"> */}
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" >
              <h2 style={{color:"blue"}}>RenTrend</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4>Description : </h4> */}
            <p style={{fontSize:"20px", textAlign:"center"}}>Developed and designed a responsive website application where users can rent clothes. 
            </p>
            <br/>
            {/* <h4>Technologies Used : </h4> */}
            <p style={{fontSize:"20px", textAlign:"center"}}>Technologies Used : MERN Stack, HTML5, CSS3, React.js, Node.js, Bootstrap, MongoDB, Postman
            </p>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
        {/* </div> */}
        </Modal>
        
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <div id="modal2"> */}
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" >
              <h2 style={{color:"blue"}}>ClorieTracker</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4>Description : </h4> */}
            <p style={{fontSize:"20px", textAlign:"center"}}>Developed a responsive website application for calculating calories on daily basis. 
            </p>
            <br/>
            {/* <h4>Technologies Used : </h4> */}
            <p style={{fontSize:"20px", textAlign:"center"}}>Technologies Used: PHP, HTML/CSS, Javascript, jQuery, Bootstrap, MySQL, phpMyAdmin
            </p>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
        {/* </div> */}
      </Modal>
      </ul>
      </>
    );
  }

  export default ProjectDetails