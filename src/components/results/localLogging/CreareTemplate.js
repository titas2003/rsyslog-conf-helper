import React from 'react'
import '../../../assets/custom.css'

function CreareTemplate() {
  const templateContentList = `
  template(name="test-template" type="list") {
     constant(value="test-log")
     property(name="hostname")
     constant(value="-")
     property(name="timereported" dateFormat="rfc3339" caseConversion="lower")
     property(name="msg")
     constant(value="logfile.log")
  }
  `
  const templateContentString = `template(name="tpl3" type="string" string="%TIMESTAMP:::date-rfc3339% %HOSTNAME% %syslogtag%%msg:::sp-if-no-1st-sp%%msg:::drop-last-lf%`
  return (
    <div className='result-text'>
      <h4>## In List format:</h4>
      <pre className='code-container'>{templateContentList}</pre>
      <h4>## In String format</h4>
      <pre className='code-container'>{templateContentString}</pre>
    </div>
  )
}

export default CreareTemplate