import React from 'react'
import CustomTextRegular from './CustomTextRegular'

const FormTitle = ({titleText}) => {
  return (
    <CustomTextRegular style={{fontSize:16, color:"#A7A6A5", marginBottom:10}}>
        {titleText}
    </CustomTextRegular>
  )
}

export default FormTitle