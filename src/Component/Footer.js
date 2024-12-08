import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Your one-stop destination for pilgrimage information.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#areas" className="text-white">Areas</a></li>
              <li><a href="#gallery" className="text-white">Gallery</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: vikashGiri@gmail.com</p>
            <p>Phone: +91 8076998936</p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p>&copy; 2023 Pilgrim Website. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
