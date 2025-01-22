import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Client from './Client';
import Server from './Server';

function Remote() {
    const [remoteType, setRemoteType] = useState('client');

    const handleRemoteChange = (event) => {
        setRemoteType(event.target.value);
    };
    return (
        <div>
            <Row>
                <Col><label>Select protocol:</label></Col>
                <Col>
                    <Form.Select>
                        <option>TCP</option>
                        <option>UDP</option>
                        <option>TLS</option>
                        <option>RELP</option>
                    </Form.Select>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Form.Select value={remoteType} onChange={handleRemoteChange}>
                        <option value="client">Client</option>
                        <option value="server">Server</option>
                    </Form.Select>
                </Col>
                <Col>
                    {remoteType === 'client' ? <Client /> : <Server />}
                </Col>
            </Row>
        </div>
    );
}

export default Remote;
