import React from 'react'
import '../../../assets/custom.css'

function CreateFilter() {
    const traditionalFilters = `
        *.* /var/log/test-all-log
        local6.* /var/log/local6-all-log
        local6.info;crit /var/log/local6-info-crit-log
    `

    const conditionalFiltering = `
    if ($msg contains "important") then {
        action(
            type="omfile" 
            file="/var/log/important.log" 
            template="test-template"
        )
        stop
    }
    `
    return (
        <div className='result-text'>
            <h4>## Traditional Filtering</h4>
            <pre className='code-container'>{traditionalFilters}</pre>
            <h4>## Conditional Statement</h4>
            <pre className='code-container'>{conditionalFiltering}</pre>
        </div>
    )
}

export default CreateFilter