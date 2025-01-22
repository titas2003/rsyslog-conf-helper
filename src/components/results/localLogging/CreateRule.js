import React from 'react';
import '../../../assets/custom.css';

function CreateRule() {
    const createRule = `
    ruleset(name="rule_one"){
        action(type="omfile" file="/var/log/remotefile")
    }
    ## implement tuleset
    input(type="imptcp" port="10514" ruleset="rule_one")
    `
  return (
    <div className='result-text'>
        <h4>## Create and implement ruleset:</h4>
        <pre className='code-container'>{createRule}</pre>
    </div>
  )
}

export default CreateRule