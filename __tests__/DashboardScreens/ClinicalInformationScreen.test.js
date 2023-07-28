import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextInputComponent from '../TextInputComponent';


describe('TextInputFields', () => {
    it('should save a number input in state', () => {
      const { getByTestId } = render(<TextInputFields />);
      const ageInput = getByTestId('ageInput');
  
      // Simulate user input
      fireEvent.changeText(ageInput, '25');
  
      // Check if the input value is saved correctly in the state
      // For example, if your component saves the input in the state using useState hook like:
      // const [age, setAge] = useState('');
      // Then, you can test if the age state is updated correctly
      expect(age).toEqual('25');
    });
  
    it('should save a string input in state', () => {
      const { getByTestId } = render(<TextInputFields />);
      const nameInput = getByTestId('nameInput');
  
      // Simulate user input
      fireEvent.changeText(nameInput, 'John Doe');
  
      // Check if the input value is saved correctly in the state
      // For example, if your component saves the input in the state using useState hook like:
      // const [name, setName] = useState('');
      // Then, you can test if the name state is updated correctly
      expect(name).toEqual('John Doe');
    });
  
    it('should not save an empty input in state', () => {
      const { getByTestId } = render(<TextInputFields />);
      const emailInput = getByTestId('emailInput');
  
      // Simulate user input of an empty string
      fireEvent.changeText(emailInput, '');
  
      // Check if the input value in state remains empty
      // For example, if your component saves the input in the state using useState hook like:
      // const [email, setEmail] = useState('');
      // Then, you can test if the email state remains an empty string
      expect(email).toEqual('');
    });
  });
  