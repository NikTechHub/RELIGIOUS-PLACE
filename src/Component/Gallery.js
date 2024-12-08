import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import area1 from '../assests/image12.jpg';
import area2 from '../assests/image66.jpg';
import area3 from '../assests/image13.jpg';

const images = [
  area1,
  area2,
  area3,
];

const Gallery = () => {
  return (
    <Container id="gallery">
      <h2>Gallery</h2>
      <Row>
        {images.map((src, index) => (
          <Col md={4} key={index} className="mb-4">
            <Image src={src} fluid rounded />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
