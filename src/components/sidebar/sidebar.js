import React from 'react';
import {Row, Col, Nav, Image, Container} from 'react-bootstrap';
import classes from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const sidebar = (props) => {
    return (
<Container className={props.smallDevice ? classes.Open : classes.Bar}>
    <Nav defaultActiveKey="/home" className="flex-column">
  
        <Image className={classes.Picture} src="/dp1.jpeg" alt="image" />
        <p className={classes.Name}>AMITESH RANJAN</p>
        <Row>
            <Col xs={1}><FontAwesomeIcon icon={faEnvelopeSquare} className={classes.Icon} /></Col>
            <Col><p className={classes.P}>amiteshranjan028@gmail.com</p></Col>
        </Row>
        <Row>
            <Col xs={1}><FontAwesomeIcon icon={faPhone} className={classes.Icon} /></Col>
            <Col><p className={classes.P}>+61 410187958</p></Col>
        </Row>
        <Nav.Link onClick={() => props.clicked('introduction')}  className={classes.P}>INTRODUCTION</Nav.Link>
        <Nav.Link onClick={() => props.clicked('about')}  className={classes.P}>ABOUT</Nav.Link>
        <Nav.Link onClick={() => props.clicked()}  className={classes.P}>TIMELINE</Nav.Link>
        <td className={classes.Td}><a href="https://www.facebook.com/amitesh.ranjan.376/"><FaFacebook /></a></td>
        <td className={classes.Td}><a href="https://www.linkedin.com/in/amitesh-ranjan-a9b21510b/"><FaLinkedin /></a></td>
        <td className={classes.Td}><a href="https://github.com/amitesh007ranjan007"><FaGithub /></a></td> 
        <td className={classes.Td}><a href="https://www.instagram.com/amitesh_r18/"><FaInstagram  /></a></td>
    
    </Nav>
</Container>
    );
}

export default sidebar;