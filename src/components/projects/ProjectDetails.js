import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Pdetail from './Pdetail';

function ProjectDetails(props) {
    return (
      <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" >
                <ul>
                  <Pdetail label="Rentrend"/>
                  <Pdetail label="dkfjml"/>
                </ul>
            </Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>
              <ul>
                <Pdetail text="vhgvjhbj"/></ul>
          </Modal.Body> */}
        </Modal>
      </>
    );
  }

  export default ProjectDetails