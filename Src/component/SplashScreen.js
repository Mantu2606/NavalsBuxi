import React, { useEffect } from 'react';
import { View,Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
           navigation.navigate('Home'); // Navigate to the next screen after 5 seconds
        }, 3000); // 5000 milliseconds = 5 seconds
    }, [navigation]);  
    return (
        <View style={{ flexDirection: 'column', height: '100%', width: '100%', backgroundColor: '#FFFDD0', alignItems: 'center', paddingTop: 2, justifyContent: 'center' }}>
            <Image
                source={require('../../assests/naval.jpg')}
                style={styles.image}
            />
             <Text style={{fontSize:15,textAlign:"center",fontWeight:"bold",color:"blue",fontSize:17}}>Naval's National Academy</Text>
             <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    loader: {
        position: 'absolute',
        bottom: 20,
    },
});

export default SplashScreen;
