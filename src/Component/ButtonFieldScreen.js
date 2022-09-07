import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const ButtonFieldScreen = (props) => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.btnMainDiv}>
        <LinearGradient colors={['#00E0C5', '#009987']} style={styles.btnDiv} >
          <Text style={styles.btnText}>{props.text}</Text>
        </LinearGradient>
    </View>
  );
};

export default ButtonFieldScreen;

const styles = StyleSheet.create({
  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 30,
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  }
});
