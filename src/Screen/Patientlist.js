import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Staricon from 'react-native-vector-icons/AntDesign';
import Downicon from 'react-native-vector-icons/AntDesign';
import videocamera from 'react-native-vector-icons/AntDesign';
import {back} from 'react-native/Libraries/Animated/Easing';
import BackiconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';

const Earningscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.backIcon}>
          <BackiconScreen />
          <View style={styles.PatientlistView}>
            <Text style={styles.PatientlistText}>Patient list</Text>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.02}}></View>
        <View style={styles.locationContainer}>
          <FontAwesome5Icons name="map-pin" size={14} color="#009987" />
          <Text style={styles.locationContainertext}>Patia, Bhubaneswar</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Downicon name="down" size={14} color="#009987" />
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.02}}></View>
        <View>
          <Text style={styles.PatientListText}>Patient’s List</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallcutmiddleScreen', {});
          }}
          style={styles.addressDiv}>
          <View>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.letterBackground}>
              <Text style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Booked : 22.03.2022
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Time : 10.00am
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              <View
                style={{
                  backgroundColor: 'rgba(251, 188, 5, 0.27)',
                  width: 25,
                  alignItems: 'center',
                  height: 25,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5Icons name="video" size={12} color="#FBBC05" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallcutmiddleScreen', {});
          }}
          style={styles.addressDiv}>
          <View>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.letterBackground}>
              <Text style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Booked : 22.03.2022
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Time : 10.00am
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              <View
                style={{
                  backgroundColor: 'rgba(251, 188, 5, 0.27)',
                  width: 25,
                  alignItems: 'center',
                  height: 25,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5Icons name="video" size={12} color="#FBBC05" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallcutmiddleScreen', {});
          }}
          style={styles.addressDiv}>
          <View>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.letterBackground}>
              <Text style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Booked : 22.03.2022
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Time : 10.00am
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              <View
                style={{
                  backgroundColor: 'rgba(251, 188, 5, 0.27)',
                  width: 25,
                  alignItems: 'center',
                  height: 25,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5Icons name="video" size={12} color="#FBBC05" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallcutmiddleScreen', {});
          }}
          style={styles.addressDiv}>
          <View>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.letterBackground}>
              <Text style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Booked : 22.03.2022
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Time : 10.00am
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              <View
                style={{
                  backgroundColor: 'rgba(251, 188, 5, 0.27)',
                  width: 25,
                  alignItems: 'center',
                  height: 25,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5Icons name="video" size={12} color="#FBBC05" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallcutmiddleScreen', {});
          }}
          style={styles.addressDiv}>
          <View>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.letterBackground}>
              <Text style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Booked : 22.03.2022
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Time : 10.00am
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              <View
                style={{
                  backgroundColor: 'rgba(251, 188, 5, 0.27)',
                  width: 25,
                  alignItems: 'center',
                  height: 25,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5Icons name="video" size={12} color="#FBBC05" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallcutmiddleScreen', {});
          }}
          style={styles.addressDiv}>
          <View>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.letterBackground}>
              <Text style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Booked : 22.03.2022
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Time : 10.00am
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              <View
                style={{
                  backgroundColor: 'rgba(251, 188, 5, 0.27)',
                  width: 25,
                  alignItems: 'center',
                  height: 25,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5Icons name="video" size={12} color="#FBBC05" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallcutmiddleScreen', {});
          }}
          style={styles.addressDiv}>
          <View>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.letterBackground}>
              <Text style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Booked : 22.03.2022
            </Text>
            <Text style={{fontSize: 10, marginBottom: 3}}>
              Slot Time : 10.00am
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              <View
                style={{
                  backgroundColor: 'rgba(251, 188, 5, 0.27)',
                  width: 25,
                  alignItems: 'center',
                  height: 25,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5Icons name="video" size={12} color="#FBBC05" />
              </View>
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  backIcon: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  PatientlistView: {
    marginLeft: 10,
  },
  PatientlistText: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.21,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 7,
  },
  locationContainertext: {
    color: '#009987',
    marginLeft: 7,
    fontSize: 14,
    fontFamily: 'Mulish',
  },
  PatientListText: {
    fontSize: 18,
    letterSpacing: 0.23,
    fontWeight: '500',
    marginTop: 10,
  },
  letterBackground: {
    marginVertical: 20,
    borderRadius: 35,
    width: 50,
    height: 50,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  },
  addressDiv: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    //borderWidth: 0.1,
    borderRadius: 10,
    //marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 2,
  },
});
export default Earningscreen;
