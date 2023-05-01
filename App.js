import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './src/screens/HomeStackScreen';


export default function App() {

  return (
   <NavigationContainer>
    <HomeStackScreen/>
   </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
