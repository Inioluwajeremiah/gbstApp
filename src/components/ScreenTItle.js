import React from 'react'
import CustomTextRegular from './CustomTextRegular'
import CustomTextBold from './CustomTextBold'

const ScreenTItle = ({title}) => {
  return (
    <CustomTextBold
      style={{fontSize:26, lineHeight:38, textAlign:"center", color:"#1C1F1E"}}>{title}
     </CustomTextBold>
  )
}

export default ScreenTItle