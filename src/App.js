import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Polaroid from './components/Polaroid/Polaroid';
import './theme/theme.scss';

const App = () => {
  const caption = 'the chances of being killed by a rabbit are slim, but not zero';
  const source = 'http://placerabbit.com/rabbit/300x300.jpg';
  const alt = 'trust no one';
  return (
    <Container fluid>
      {[...Array(10)].map((_, idx) => (
        <Row key={`row-${idx}`}>
          {[...Array(4)].map((_, idx) => (
            <Col key={`col-${idx}`}>

              <Polaroid key={idx} caption={caption} source={source} alt={alt} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default App;
