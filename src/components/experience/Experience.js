import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/Experience.css';


class Experience extends React.Component{
    render(){
        return (
            <>
            <div id="exp-contaier">
                <h1 style={{fontSize: "60px", textAlign: "center"}}>EXPERIENCE</h1>
                <div className="accordian-container">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="heading">
                            WORK
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <p className="desc_title">Company : H2A HR Solutions, Toronto, Ontario</p>
                                        <p className="desc">Redesigned company's website making it more
                                        accessible, responsive and user-friendly with improved
                                        functionalities.
                                        Implemented login functionality with authentication and
                                        authorization.
                                        Oversaw back-end development using PHP to maintain
                                        website integrity, security and efficiency.
                                        Developed database and table structure using MYSQL.
                                        Wrote lines of code using PHP, MySQL, HTML, CSS,
                                        Javascript, jQuery, Bootstrap.</p> 
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="heading">
                            FREELANCE
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                    <p className="desc_title">Company : Shivalik Sports, Dehradun, Uttarakhand</p>
                                    <p className="desc">
                                        Developed and designed a website for company's trusted brand CottonKing
                                        using WordPress CMS.
                                    </p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="heading">
                            INTERNSHIPS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                    <p className="desc_title">Company : Oil And Natural Gas Corporation Ltd, Dehradun, Uttarakhand</p>
                                    <p className="desc">
                                         Developed scalable monitoring system for managing
                                        computer clusters.
                                        Created Linux networking using Network Information
                                        Services & Network File System.
                                        Initiated and structured checklist feature for desktop
                                        application
                                        Collaborated with other developers to identify and
                                        alleviate number of bugs and errors in application.
                                        Participated in cross-functional team-building activities.
                                        Technologies Used: MySQL, HTML, CSS, Javascript, AJAX,
                                        Linux
                                    </p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>  
                </div></div>
            
            </>
        );
    }
}

export default Experience
