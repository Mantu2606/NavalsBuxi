import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome' // You can replace FontAwesome with any icon library you prefer
import Icons2 from 'react-native-vector-icons/Entypo'
const Home = ({ navigation }) => {
  const [showCloseButton, setShowCloseButton] = useState(true);

  const handleCloseButtonClick = () => {
    setShowCloseButton(false);
  };


  const handleNavigateToNewPage = () => {
    navigation.navigate('main');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showCloseButton && (
        <TouchableOpacity
          style={{ position: 'absolute', top: 40, right:20 }}
          onPress={handleCloseButtonClick}
        >
          <Icons2 name = "switch" size={50} color="green" />
          <Icons name="twitter" size={30} color="black" /> 
          
        </TouchableOpacity>
      )}
      <Text>HomePage
      </Text>
    </View>
  );
};

export default Home;
