import { StyleSheet } from 'react-native';

const customTextFonts = {
  'roboto-regular': require('./assets/fonts/RobotoRegular.ttf'),
  'roboto-light': require('./assets/fonts/RobotoLight.ttf'),
  'roboto-thin': require('./assets/fonts/RobotoThin.ttf'),
};

export const styles = StyleSheet.create({
  robotoRegular: {
    fontFamily: 'roboto-regular',
  },
  robotoLight: {
    fontFamily: 'roboto-light',
  },
  robotoThin: {
    fontFamily: 'roboto-thin',
  },
});


export default customFonts;
