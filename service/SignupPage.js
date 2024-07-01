import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput,Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SignupPage = () => {
 
  const [_name, setName] = useState('');
  const [_address, setAddress] = useState('');
  const [_email, setEmail] = useState('');
    
  const handleSignUp = () => {   
    const data = {
        "employeeName":_name,"address":_address,"email":_email
    }
    console.log(data);
    axios.post('http://localhost:5033/api/Employees',data)
  .then(function (response) {
    console.log(response);
    if(response.status == 201){
       let loginInfo = response.data.Result;
      // library
      //navigation  page where data show
      alert('Account created successfully!');
     
    }else{
      console.log(response.data.errors);
      // add toaster 
      //Alert(response.data.Message);
    }
    // handle success
    console.log(response.data.errors);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Id</Text>
      <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter your name"
        placeholderTextColor="#003f5c"
        value={_name}
        onChangeText={setName}
      />
      </View>

      <View style={styles.inputView}>
      <TextInput
         style={styles.inputText}
        placeholder="Enter your Address"
        placeholderTextColor="#003f5c"
        value={_address}
        onChangeText={setAddress}
      />
      </View>
      
      <View style={styles.inputView}>
      <TextInput
       style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="#003f5c"
        value={_email}
        onChangeText={setEmail}
      />
      </View>

     <TouchableOpacity 
     style={styles.loginBtn}
     onPress={handleSignUp}> 
    <Text style={styles.forgotAndSignUpText}>Signup</Text>
    </TouchableOpacity>
   

    {/* <TouchableOpacity
         style={styles.loginBtn}
        onPress={updataData}>
        <Text style={styles.forgotAndSignUpText}>Update</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  }
})
export default SignupPage 
