import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css';  

const Hero = () => {
  return (
    <Container fluid className="hero-section text-center">
      <Row>
        <Col>
          <h1>Welcome to the Pilgrim Website</h1>
          <p>
            Explore sacred destinations and deepen your spiritual journey.
          </p>
          <Button variant="primary" href="#about">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
