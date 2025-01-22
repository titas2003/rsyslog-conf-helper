import React from 'react'
import Form from 'react-bootstrap/Form';

function Server() {
    return (
        <div>
                <Form.Select>
                    <option>Create a rsyslog server to receive logs with no encryption</option>
                    <option>Configure logging system based on Rsyslog over Relp TLS</option>
                </Form.Select>
        </div>
    )
}

export default Server