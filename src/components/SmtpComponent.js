import React from 'react'
import { Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import CustomTextBold from './CustomTextBold';
import CustomTextRegular from './CustomTextRegular';

const SmtpConfig = (emailFrom, emailTo, subject, body, custom_message) => {
  const emailBody =()=> {
    return (
      <View>
        <CustomTextBold>GBST</CustomTextBold>
        <CustomTextRegular>gbstaiapp@gmail.com</CustomTextRegular>
      </View>
    )
  }
  window.Email.send({
    SecureToken: 'E63150F36413DED4374BE0B4A68E4203C2B3',
    To: emailTo,
    From: emailFrom,
    Subject: "Authentication Code from GBST",
    Body: emailBody
  }).then(() => {
    Alert.alert('Email sent successfully!');
  }).catch(error => {
    Alert.alert('Failed to send email:', error);
  });
}

export default SmtpConfig
