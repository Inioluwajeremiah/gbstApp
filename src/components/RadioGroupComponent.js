import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import CustomTextRegular from './CustomTextRegular';

// also implement  firebase to save selected values here

// radio button UI
const RadioButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
      {selected && 
        <Svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0ZM10.6667 10.6667H1.33333V1.33333H10.6667V10.6667ZM9.99333 4L9.05333 3.05333L4.66 7.44667L2.94 5.73333L1.99333 6.67333L4.66 9.33333L9.99333 4Z" fill="#1E75E5"/>
        </Svg>
}
    </View>
    <CustomTextRegular style={styles.label}>{label}</CustomTextRegular>
  </TouchableOpacity>
  );
}
  
  function MyRadioGroup({itemsArray, selected, on_press, handleOptionPress, selectedOption}) {
      // {array}
    // const [selectedOption, setSelectedOption] = useState('');

    // checked_value = selectedOption;

    // const handleOptionPress = (option) => {
    //   setSelectedOption(option); 
  // };

  return (
    <View style={styles.container2}>

      {
        itemsArray.map((item, index) => 
          <RadioButton key={index}
            label={item.label}
            selected={selectedOption === `${item.label}`}
            onPress={() => handleOptionPress(`${item.label}`)}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  container2: {
    backgroundColor: 'black',
    height: 300,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal:16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2
  },
  radioButton: {
    height: 16,
    width: 16,
    // borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7C7C7C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: 'none',
    borderWidth:0
    // '#000',
  },
  radioButtonInner: {
    height: 12,
    width: 12,
    // borderRadius: 6,
    backgroundColor: '#000',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: "#7C7C7C",
  },
});

export default RadioButton;

