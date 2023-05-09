import React from 'react'
import { Alert } from 'react-native';
import Email from 'smtpjs';

const SmtpConfig = (emailFrom, emailTo, subject, body, custom_message) => {
    Email.send({
        SecureToken : "dffb3714-a609-4950-b076-3f30386a0a9b",
        To : emailTo,
        From : emailFrom,
        Subject : subject,
        Body : body
    }).then(
      message => Alert.alert(custom_message)
    );
}

export default SmtpConfig
