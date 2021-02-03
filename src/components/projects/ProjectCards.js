import React from 'react';
import Card from 'react-bootstrap/Card';
import logo1 from '../../assets/mern.png';
import logo2 from '../../assets/aspnet.jpg';
import logo3 from '../../assets/java.jpg';
import logo4 from '../../assets/php.png';
import ProjectDetails from './ProjectDetails';

function ProjectCards(){
    const [modalShow, setModalShow] = React.useState(false);
        return (
            <>
            <ul className='cards__items' style={{width: '80%', margin: 'auto' }}>
                <Card style={{ width: '80%', margin: '2%' }} onClick={() => setModalShow(true)}>
                    <Card.Img variant="top" src={logo1} alt="aa" />
                </Card>
                <Card style={{ width: '80%', margin: '2%'  }} onClick={() => setModalShow(true)}>
                    <Card.Img variant="top" src={logo2} alt="aa" />
                </Card>
                <Card style={{ width: '80%', margin: '2%'  }} onClick={() => setModalShow(true)}>
                    <Card.Img variant="top" src={logo3} alt="aa" />
                </Card>
                <Card style={{ width: '80%', margin: '2%'  }} onClick={() => setModalShow(true)}>
                    <Card.Img variant="top" src={logo4} alt="aa" />
                </Card>
            </ul>

            <ProjectDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            </>
        );
    }

export default ProjectCards