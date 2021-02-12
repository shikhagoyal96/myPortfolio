import React from 'react';
import Card from 'react-bootstrap/Card';
import logo1 from '../../assets/mern.png';
import logo2 from '../../assets/aspnet.jpg';
import logo3 from '../../assets/java.jpg';
import logo4 from '../../assets/php.png';
//import ProjectApp from './ProjectApp';

function ProjectCards(){
    // const [modalShow, setModalShow] = React.useState(false);
        return (
            <>
            <ul className='cards__items' style={{width: '80%', margin: 'auto' }}>
                <Card id="1" style={{ width: '80%', margin: '2%'}} >
                    <Card.Img variant="top" src={logo1} alt="aa" />
                </Card>
                <Card id="2" style={{ width: '80%', margin: '2%'  }} >
                    <Card.Img variant="top" src={logo2} alt="aa" />
                </Card>
                <Card id="3" style={{ width: '80%', margin: '2%'  }}>
                    <Card.Img variant="top" src={logo3} alt="aa" />
                </Card>
                <Card id="4" style={{ width: '80%', margin: '2%'  }}>
                    <Card.Img variant="top" src={logo4} alt="aa" />
                </Card>
            </ul>

            {/* <ProjectApp
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
            </>
        );
    }

export default ProjectCards