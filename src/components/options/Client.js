import React from 'react'

import Form from 'react-bootstrap/Form';

function Client() {
    return (
        <div>
                <Form.Select>
                    <option>Need to send OS logs in remote system</option>
                    <option>Need to send application logs in remote system</option>
                    <option>Need to send Audit logs in remote system</option>
                    <option>Need to send OS logs with encryption</option>
                    <option>Need to send logs using RELP</option>
                </Form.Select>

        </div>
    )
}

export default Client