import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {
  return (
    <Container fluid>
      <Row>
        <Col><h1>{props.header}</h1></Col>
      </Row>
    </Container>
  )
}

export default Header