import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Locpcomp from './component/locationpcomp';
// import Button2 from './component/button2';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import PatientComp from '../Component/HomeConsultComp';
import BackIconScreen from '../Component/BackIconScreen';

const HomeConsult = ({navigation}) => {
  var zpi = [
    {
      url: require('../Assets/Image/Dial.png'),
      name: 'Sagarika Mohanty',
      slot: 'Slot Booked : 22.03.2022',
      slottime: 'Detect Current Location',
    },
    {
      url: require('../Assets/Image/Dial.png'),
      name: 'Sagarika Mohanty',
      slot: 'Slot Booked : 22.03.2022',
      slottime: 'Detect Current Location',
    },
    {
      url: require('../Assets/Image/Dial.png'),
      name: 'Sagarika Mohanty',
      slot: 'Slot Booked : 22.03.2022',
      slottime: 'Detect Current Location',
    },
    {
      url: require('../Assets/Image/Dial.png'),
      name: 'Sagarika Mohanty',
      slot: 'Slot Booked : 22.03.2022',
      slottime: 'Detect Current Location',
    },
    {
      url: require('../Assets/Image/Dial.png'),
      name: 'Sagarika Mohanty',
      slot: 'Slot Booked : 22.03.2022',
      slottime: 'Detect Current Location',
    },
  ];

  return (
    <ScrollView style={styles.contrainer}>
      <View style={styles.assumeview}>
        <View style={styles.firstmaindiv}>
          <View style={styles.backbuttonview}>
            <BackIconScreen />
          </View>
          <View>
            <Text style={styles.righttext}>Patient list</Text>
          </View>
          <View style={styles.assumeview}></View>
        </View>

        <View style={styles.asummefirst}>
          <View style={styles.patiarow}>
            <View>
              <Icon2 name="map-pin" style={styles.mapicon} size={15} />
            </View>
            <View>
              <Text style={styles.patiatext}>Patia, Bhubaneswar</Text>
            </View>
            <View>
              <Icon1 name="down" style={styles.mapicon} size={13} />
            </View>
          </View>
        </View>

         <View onPress={()=> {navigation.navigate('MembershipFree')}}>
            {zpi.map(dinesh1 => {
              return <PatientComp data={dinesh1} />;
            })}
          </View>
        
      </View>
    </ScrollView>
  );
};

export default HomeConsult;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  assumeview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  googleicon: {
    padding: 9,
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 24,
  },
  firstmaindiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20,
    width: Dimensions.get('window').width * 0.93,
    // backgroundColor:'red'
  },
  righttext: {
    fontSize: 20,
    color: 'black',
  },
  mapicon: {
    backgroundColor: 'white',
    color: 'green',
    marginRight: 10,
    marginLeft: 7,
  },
  asummefirst: {
    marginBottom: 20,
    marginTop:10,

  },
  patiarow: {
    width: Dimensions.get('window').width * 0.89,
    // backgroundColor:'black',
    flexDirection: 'row',
    alignItems: 'center',
  },
  patiatext: {
    color: '#009987',
  },
  backbuttonview: {
    marginRight: 20,
  },
});
