import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CreareTemplate from '../results/localLogging/CreareTemplate';
import CreateFilter from '../results/localLogging/CreateFilter';
import AuditSave from '../results/localLogging/AuditSave';
import CreateRule from '../results/localLogging/CreateRule';

function Local() {
    const [localType, setLocalType] = useState('select');

    const handleLocalChange = (e) => {
        setLocalType(e.target.value);
    }
    return (
        <div>
            <Row>
                <Col>
                    Local Logging Options:
                </Col>
                <Col>
                    <Form.Select value={localType} onChange={handleLocalChange}>
                        <option value="select">--Select--</option>
                        <option value="crtTemp">Create templates</option>
                        <option value="crtFltr">Create Filters</option>
                        <option value="aud">Save audit logs in another log file</option>
                        <option value="crtRule">Creating Rulesets</option>
                    </Form.Select>
                </Col>
            </Row>
            <hr />
            <h3>Action Plan:</h3>
            <Row>
                <Row>
                    {localType === 'crtTemp' ? (
                        <CreareTemplate />
                    ) : localType === 'crtFltr' ? (
                        <CreateFilter />
                    ) : localType === 'aud' ? (
                        <AuditSave />
                    ) : localType === 'crtRule' ? (
                        <CreateRule />
                    ) : null}
                </Row>
            </Row>
        </div>
    )
}

export default Local