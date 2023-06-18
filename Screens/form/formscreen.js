import React,{ useState } from "react";
import {
  
    Alert,
    StyleSheet,
    Button,
    Text,
    TextInput,
    
    View,
  } from 'react-native';
  





const FormScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
  
    const handleFormSubmit = () => {
        const message = `Welcome, ${name}! Your age is ${age}.`;
        navigation.navigate('Home', {
          welcomeMessage: message,
          showAlert: true,
        });
      };
  
    return (
      <View style={styles.container} >
        <Text style={styles.title} >Enter Your Information</Text>
        <TextInput style={styles.input}
          
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
           style={styles.input}
          placeholder="Age"
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={()=>navigation.navigate('Home',{name:name,age:age})} />
      </View>
      
    );
    
      
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    message: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });

  export default FormScreen;