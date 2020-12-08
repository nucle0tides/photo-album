import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Polaroid from './components/Polaroid/Polaroid';
import gallery from './gallery';
import './theme/theme.scss';

const App = () => {
  const numCols = 4;
  const numRows = Math.ceil(gallery.length / numCols);
  // change to non-destructive method lmao
  const groups = [...Array(numRows)].map(() => gallery.splice(0, numCols));

  return (
    <Container fluid>
      {groups.map((group, groupIdx) => (
        <Row sm={2} lg={4} key={`row-${groupIdx}`}>
          {group.map(({source, alt, caption, data}, colIdx) => (
            <Col key={`col-${colIdx}`}>
              <Polaroid key={source} caption={caption} source={source} alt={alt} data={data} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default App;
