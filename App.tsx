
import React,{useState,useEffect} from 'react';

import {
  
  Alert,
  Button,
  Text,
  TextInput,
  
  StyleSheet,
  View,
} from 'react-native';

import { useDispatch } from 'react-redux';
import {  useRoute } from '@react-navigation/native'
import FormScreen from './Screens/form/formscreen';

import { addToHistory } from './Screens/history/actions';

const App=({navigation,props,route}: {navigation: any,props:any,route:any})=>{
  
  
  const [number, setNumber] = useState('');
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (route.params?.name && route.params?.age) {
      setName(route.params.name);
      setAge(route.params.age);
      showAlert();
    }
  }, [route.params]);

  const showAlert = () => {
    Alert.alert('Welcome', `Name: ${name}, Age: ${age}`);
  };


  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data.setup + '\n\n' + data.punchline);
    } catch (error) {
      setError('Failed to fetch joke. Please try again later.');
    }
  };

  const dispatch = useDispatch();
 
  const goToHistoryScreen = () => {
    navigation.navigate('History');
  };
  const goToFormScreen = () => {
    navigation.navigate('FormScreen');
  };

  const handleInputChange = (value: any) => {
    setNumber(value.replace(/[^0-9]/g, ''));
  };
  const HandleInput=()=>{
    const num = parseInt(number);

    if (num % 2 === 0) {
      Alert.alert('Even');
      fetchJoke();
      dispatch(addToHistory(num, 'even'));
    } else {
      Alert.alert('Odd');
      dispatch(addToHistory(num, 'odd'));
fetchJoke();

    }
  }
  

  
  return (
    
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <TextInput style={{marginBottom: 10, padding: 5, borderWidth: 1,width:300 }} 
      placeholder='Enter a number' 
      keyboardType='numeric'
      onChangeText={handleInputChange}></TextInput>
      <Button title="Enter" onPress={HandleInput} />
    </View>
    <View style={{ position: 'absolute', top: 20, left: 20 }}>
      <Button title="Form" onPress={goToFormScreen} />
    </View>
    <View style={{ position: 'absolute', top: 20, right: 20 }}>
      <Button title="Show History" onPress={goToHistoryScreen} />
    </View>
    <Text style={{alignItems:'center',justifyContent:'center',paddingHorizontal:20}}>JOKE:{"\n"}</Text>
    <Text style={{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:20}}>{joke ? joke : null}</Text>
      {error ? <Text >{error}</Text> : null}
  </View>
  );
}


export default App;
