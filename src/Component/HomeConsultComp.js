import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iconi from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const PatientComp = props => {
  const navigation = useNavigation();
  return (
   
      <TouchableOpacity onPress={()=> {navigation.navigate('MembershipFree')}} style={styles.maindiv}>
        <LinearGradient
          colors={['#00E0C5', '#009987', '#009987']}
          style={styles.linearGradient}>
          <Text style={styles.sText}>S</Text>
        </LinearGradient>
        <View style={styles.namediv}>
          <Text style={styles.nameTxt}>{props.data.name}</Text>
          <Text style={styles.slotTxt}>{props.data.slot}</Text>
          <Text style={styles.slotTxt}>{props.data.slottime}</Text>
        </View>
        <View>
          <Image source={props.data.url} style={styles.img} />
        </View>
      </TouchableOpacity>
  
  );
};
export default PatientComp;

const styles = StyleSheet.create({
    assumediv: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',

    },
    maindiv: {
        width: Dimensions.get('window').width * 0.88,
        height:100,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    namediv: {
        justifyContent: 'space-evenly',
        // backgroundColor:'red',
    },
    linearGradient: {
       
        justifyContent: 'center',
        borderRadius: 60,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        
    },
    sText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontFamily: 'Mulish'
    },
    nameTxt: {
        fontSize: 18,
        fontWeight: '500',
        paddingVertical: 5,
        textAlign: 'center',
        color: '#222222',
        fontFamily: 'Mulish'
    },
    slotTxt: {
        fontSize: 12,
        fontWeight: '500',
        // padding: 5,
        color: '#222B45',
        fontFamily: 'Mulish',
        marginBottom:2,
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 10
    }});
