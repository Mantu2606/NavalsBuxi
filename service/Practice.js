import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Modal,TextInput, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Practice() {
    const [data, setData] = useState([]); 
    const [modalTeacher, setModalTeacher] = useState(false); 
    const [_name, setName] = useState('');
    const [_address, setAddress] = useState('');
    const [_email, setEmail] = useState('');
    const [id, setId] = useState(''); 
    // Get Api 
    const getEmployee = async () => {
        axios.get('http://localhost:5033/api/Employees')
         
        .then(function (response) {
            // handle success
            setData(response.data); 
            console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      };
    
      useEffect(() => {
        getEmployee();
      }, []);
      
      // Delete API 
      const hadleRemove = async (item) => {
        try {
          // Make a DELETE request to your API endpoin
          const response = await axios.delete('http://localhost:5033/api/Employees/${item.id}');
          if(response.data.StatusCode == 200){
            Alert.alert('Success', 'Data deleted successfully');
            getEmployee();
          }else{
            Alert.alert('Error', 'Data deletion failed!');
          }
          // Handle the response
          
        } catch (error) {
          // Handle errors
          console.error('Error deleting data:', error);
          if (error.response) {
            // Server responded with an error status code
            console.error('Server Error:', error.response.data);
            Alert.alert('Error', 'Failed to delete data. Server Error');
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            Alert.alert('Error', 'Failed to delete data. No response received from server');
        } else {
            // Something else went wrong
            console.error('Request Error:', error.message);
            Alert.alert('Error', 'Failed to delete data. Request Error');
        }
        }
      };
    
      const handleCreate = () => {
         setModalTeacher(true); 
      }
    
      const handleCloseModal = () => {
        setModalTeacher(false); 
      }
// Post Api 
  const handelSave = () => {
    const data = {
      "employeeName":_name,"address":_address,"email":_email 
    }
   if(id == null) {
      axios.post('http://localhost:5033/api/Employees',data)
      .then(function (response) {
          if(response.data.StatusCode == 200) {
              let loginInfo = response.data.Result;
              clearFrom(); 
              Alert.alert('Account created successfully!');
          }
      }).catch(function (error) {
          console.log(error);
      });
    } 
    else {
      axios.put('http://localhost:5033/api/Employees/${id}',data)
      .then(function (response) {
          if(response.data.StatusCode == 200) {
              let loginInfo = response.data.Result;
              clearFrom(); 
              console.log("Updated")
              alert('Account Updated successfully!');
          }
      }).catch(function (error) {
          console.log(error);
      });  
  }
}
const clearFrom = () => {
    setName("")
    setAddress("")
    setEmail("")
    setId()
  }
  // Update 
  const hadleEdit = (item) => {
    alert(item.employeeId)
    setName(item.employeeName)
    setAddress(item.address)
    setEmail(item.email) 
    setId(item.id)
    setModalTeacher(true);
  }
    return (
    <SafeAreaView>
        <Modal 
          visible={modalTeacher} >
        <SafeAreaView>
            <View style={[styles.rowBetween,{paddingHorizontal:20,marginTop:15}]}>
            <Text style={styles.txtClose}>New Student</Text>
            
            <TouchableOpacity onPress={handleCloseModal}>
            <Text style={styles.txtClose}>Close</Text>
           </TouchableOpacity> 
            </View >

            <View style={{paddingHorizontal:10,marginTop:20}}>
            <Text>Name</Text>
            <TextInput style={styles.textInput}
             placeholder="Enter your name"
            value={_name}
            onChangeText={setName}
      />

     <Text>Address</Text>
       <TextInput
         style={styles.textInput}
        placeholder="Enter your Address"
        value={_address}
        onChangeText={setAddress}
      />

    <Text>Email</Text>
       <TextInput
       style={styles.textInput}
        placeholder="Email"
        value={_email}
        onChangeText={setEmail}
      />
        <TouchableOpacity onPress={handelSave} style={styles.btnContainer}>
        <Text style={{fontSize:20}}>Save</Text>
        </TouchableOpacity>
            </View>
            </SafeAreaView>
          </Modal>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:20, margin:10}}>
           Student List{data.length}
        </Text>
      <TouchableOpacity onPress={handleCreate}>
      <Text style={{padding:10,fontSize:20,}}>New</Text>
      </TouchableOpacity>
    </View>

    <ScrollView contentContainerStyle={{paddingHorizontal:15}}>
     {
        data.map((item, index) => {
          return (
            <View key={index} style={styles.rowBetween}>
             <View>
              <Text style={styles.txtName}>{item.id}</Text>
              <Text style={{fontSize:20}}>{item.employeeName}</Text>
              <Text style={styles.txtNormal}>{item.address}</Text>
              <Text style={styles.txtNormal}>{item.email}</Text>
            </View>

            <View style={{marginTop:23}}>
             <TouchableOpacity onPress= {() =>hadleRemove(item)}>
               <Text style={{color:"red",fontSize:15}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress= {() =>hadleEdit(item)}>
               <Text style={{color:"blue",fontSize:15}}>Edit</Text>
            </TouchableOpacity>
            </View>
            </View>
          )
        })
    }
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    rowBetween:{
        flexDirection:"row",
        justifyContent:"space-between",
        //  it is used in the border
        //width: 380,
        // height: 200,
        // borderWidth: 3, // Border width
        // borderColor: 'red', // Border color
        // borderRadius: 5, // Border radius (optional)
        // borderBottomWidth:5
    },
    item:{
        paddingVertical:4,
        borderBottomColor:1,
        borderBottomColor:"#888"
      },
      txtName:{
        fontSize:18,
        fontWeight:"bold"
     },
     txtNormal:{
        fontSize:16,
        color:"#444"
     },
     textInput:{
        padding:10,
        borderWidth:1,
        borderColor:"#888",
        marginBottom:10
       },
       btnContainer:{
        borderWidth:1,
        borderColor:"gray",
        backgroundColor:"pink",
        padding:10,
        marginTop:10,
        textAlign:"center",
        justifyContent:"center",
       alignItems:"center"
       },
       txtClose:{
        color:"gray",
        fontSize:20,
        fontWeight:"bold"
       },
})
export default Practice
