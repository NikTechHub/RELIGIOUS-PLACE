import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import area11 from '../assests/image22.jpg';
import area22 from '../assests/image33.jpg';
import area33 from '../assests/image44.jpg';


const placesData = [
  { title: 'Varanasi', description: 'A sacred city for Hindus.', imgSrc: area11 },
  { title: 'Mecca', description: 'The holiest city in Islam.', imgSrc: area22 },
  { title: 'Bodh Gaya', description: 'The place where Buddha attained enlightenment.', imgSrc: area33 },
];

const Places = () => {
  return (
    <Container id="places">
      <h2>Religious Places</h2>
      <Row>
        {placesData.map((place, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={place.imgSrc} />
              <Card.Body>
                <Card.Title>{place.title}</Card.Title>
                <Card.Text>{place.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Places;
