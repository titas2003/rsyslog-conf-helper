import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Remote from '../options/Remote';

function Requirements(props) {
    const [loggingType, setLoggingType] = useState('local'); // Default to 'local'

    // Handle the selection change in the dropdown
    const handleLoggingChange = (event) => {
        setLoggingType(event.target.value);
    };

    // Define the LocalLogging and RemoteLogging components inline
    const LocalLogging = () => (
        <Form.Select>
            <option>Create templates</option>
            <option>Create Filters</option>
            <option>Save audit logs in another log file</option>
            <option>Creating Rulesets</option>
        </Form.Select>
    );

    return (
        <Container fluid>
            <Card className="text-center">
                <Card.Header>{props.configSegement}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Form.Select value={loggingType} onChange={handleLoggingChange}>
                                <option value="local">Local logging</option>
                                <option value="remote">Remote logging</option>
                            </Form.Select>
                        </Row>
                    </Card.Text>
                    <Row>
                        {loggingType === 'local' ? <LocalLogging /> : <Remote />}
                    </Row>
                    <hr />
                    <Row>
                        <Col><Button variant="primary">Get Configuration</Button></Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    )
}

export default Requirements