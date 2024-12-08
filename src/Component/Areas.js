
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import area1 from '../assests/image66.jpg';
import area2 from '../assests/image55.jpg';
import area3 from '../assests/image44.jpg';
import area4 from '../assests/image33.jpg';


const Areas = () => {
  const areas = [
    { name: 'Himalayas', description: 'Explore the serene beauty of the Himalayas.', image: area1 },
    { name: 'Varanasi', description: 'Experience the spiritual essence of Varanasi.', image: area2 },
    { name: 'Rishikesh', description: 'Discover the yoga capital of the world.', image: area3 },
    { name: 'Kerala', description: 'Immerse in the tranquil backwaters of Kerala.', image: area4 },
  ];

  return (
    <Container id="areas" className="mt-5">
      <h2 className="text-center">Popular Areas</h2>
      <Row>
        {areas.map((area, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={area.image} />
              <Card.Body>
                <Card.Title>{area.name}</Card.Title>
                <Card.Text>{area.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Areas;
