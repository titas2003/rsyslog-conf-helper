import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Requirements(props) {
    const [loggingType, setLoggingType] = useState('local'); // Default to 'local'

    // Handle the selection change in the dropdown
    const handleLoggingChange = (event) => {
        setLoggingType(event.target.value);
    };

    // Define the LocalLogging and RemoteLogging components inline
    const LocalLogging = () => (
        <Form.Select>
            <option>Default select</option>
        </Form.Select>
    );

    const RemoteLogging = () => (
        <div>
            <h5>Remote Logging</h5>
            <p>This is the remote logging component.</p>
        </div>
    );
    return (
        <Container fluid>
            <Card className="text-center">
                <Card.Header>{props.configSegement}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        <Form.Select value={loggingType} onChange={handleLoggingChange}>
                            <option value="local">Local logging</option>
                            <option value="remote">Remote logging</option>
                        </Form.Select>
                    </Card.Text>
                    {loggingType === 'local' ? <LocalLogging /> : <RemoteLogging />}
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>
    )
}

export default Requirements