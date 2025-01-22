import React from 'react'
import '../../../assets/custom.css'

function AuditSave() {
  return (
    <div className='result-text'>
      <ul>
        <li>
          Install the audispd-plugins package.
          <p className='command-container'># yum install audispd-plugins</p>
        </li>
        <li>
          Update the plugin configuration as below in /etc/audit/plugins.d/syslog.conf to set the facility(local3) of the audit logs.
          <p className='code-container'>active = yes<br />args = LOG_INFO LOG_LOCAL3</p>
        </li>
        <li>
          Add the following configuration in /etc/rsyslog.conf file to forward the local3 logs in the log file.
          <p className='code-container'>local3.info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /var/log/example-audit.log</p>
        </li>
        <li>
          Validate the configuration and restart the services.
          <p className='command-container'>
            # rsyslogd -N3<br />
            # systemctl restart rsyslog<br />
            # service auditd restart<br />
          </p>
        </li>
      </ul>
    </div>
  )
}

export default AuditSave