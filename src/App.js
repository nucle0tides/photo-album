import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Polaroid from './components/Polaroid/Polaroid';
import gallery from './gallery';
import './theme/theme.scss';

const App = () => {
  const numRows = gallery.length / 4;
  return (
    <Container fluid>
      {[...Array(numRows)].map((_, rowIdx) => (
        <Row sm={2} lg={4} key={`row-${rowIdx}`}>
          {gallery.map(({source, alt, caption}, colIdx) => (
            <Col key={`col-${colIdx}`}>
              <Polaroid key={source} caption={caption} source={source} alt={alt} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default App;
