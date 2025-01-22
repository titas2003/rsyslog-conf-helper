import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Remote from '../options/Remote';
import Local from '../options/Local';

function Requirements(props) {
    const [loggingType, setLoggingType] = useState('select'); // Default to 'local'

    // Handle the selection change in the dropdown
    const handleLoggingChange = (event) => {
        setLoggingType(event.target.value);
    };

    return (
        <Container fluid>
            <Card className="text-center">
                <Card.Header>{props.configSegement}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col>
                                Logging Type:
                            </Col>
                            <Col>
                                <Form.Select value={loggingType} onChange={handleLoggingChange}>
                                    <option value="select">--select--</option>
                                    <option value="local">Local logging</option>
                                    <option value="remote">Remote logging</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Row>
                        {loggingType === 'local' ? (
                            <Local />
                        ) : loggingType === 'remote' ? (
                            <Remote />
                        ) : null
                        }
                    </Row>
                    <hr />
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    )
}

export default Requirements