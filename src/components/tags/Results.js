import React from 'react'
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function Results() {
  return (
    <div>
      <Container fluid>
        <Card className="text-center">
          <Card.Header>Final Configuration</Card.Header>
          <Card.Body>
            <Card.Text>
              <Row>
                Final Configuartion will appear here
              </Row>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Container>
    </div>
  )
}

export default Results