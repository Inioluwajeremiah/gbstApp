import React, { useEffect, useState } from 'react'
import CustomTextRegular from './CustomTextRegular'
import { TouchableOpacity, View } from 'react-native'

const ShortButtons = ({text, onpress, active_color, bg_color}) => {
    const [activeColor, setActiveColor] = useState(`${bg_color}`)

    useEffect (() => {
        if (onpress) {
            setActiveColor(`${active_color}`)
        }
    }, [onpress])
  return (
        <TouchableOpacity onPress={onpress} style={{ borderRadius:8, backgroundColor:activeColor, width:100, height:50, paddingHorizontal:16, paddingVertical:10  }}>
            <CustomTextRegular style={{color:"#fff",fontSize:21}}>{text}</CustomTextRegular>
        </TouchableOpacity>
  )
}

export default ShortButtons