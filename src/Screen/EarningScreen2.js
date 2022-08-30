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
const Earningscreen = () => {
  const navigation = useNavigation();

  const dateday = [
    {
      x: 'Today',
    },
    {
      x: 'Weekly',
    },
    {
      x: 'Monthly',
    },
    {
      x: 'Total',
    },
  ];
  const [selectedDate, setSelectedDate] = React.useState({
    x: '',
  });

  const isDateIsActive = list => {
    return selectedDate.x == list.x;
  };

  return (
    <LinearGradient
      colors={['#009987', '#00E0C5', '#009987']}
      style={styles.mainContainer}>
      <ScrollView>
        <View style={{justifyContent: 'space-between'}}>
          <View style={{height: Dimensions.get('screen').height * 0.4}}>
            <View
              style={{height: Dimensions.get('screen').height * 0.06}}></View>
            {/* icons view */}
            <View style={styles.iconBar}>
              <View>
                <Ionicons name="list" size={20} color={'white'} />
              </View>
              <View>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={'white'}
                />
              </View>
            </View>
            <View
              style={{height: Dimensions.get('screen').height * 0.06}}></View>
            <View style={styles.imageContainer}>
              <LinearGradient
                colors={['#00E0C5', '#009987']}
                style={{borderRadius: 50, padding: 5, marginRight: 10}}>
                <Image
                  style={styles.img}
                  source={require('../Assets/Image/doc1.png')}
                />
              </LinearGradient>
              <View>
                <View style={{marginBottom: 5}}>
                  <Text style={{color: '#fff', fontSize: 20}}>
                    Life care Pathology
                  </Text>
                </View>
                <View style={{marginBottom: 5}}>
                  <Text style={{color: '#fff', fontSize: 12}}>
                    ID: CKARE001
                  </Text>
                </View>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Staricon name="star" color={'gold'} />
                    <Staricon name="star" color={'gold'} />
                    <Staricon name="star" color={'gold'} />
                    <Staricon name="star" color={'gold'} />
                    <Staricon name="star" color={'gold'} />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{height: Dimensions.get('screen').height * 0.03}}></View>

            <View style={styles.locationContainer}>
              <FontAwesome5Icons name="map-pin" size={14} color="#fff" />
              <Text style={styles.locationContainertext}>
                Patia, Bhubaneswar
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Downicon name="down" size={14} color="#fff" />
              </View>
            </View>
          </View>
          <View style={styles.whitebar}>
            <View
              style={{height: Dimensions.get('screen').height * 0.03}}></View>

            <View>
              <Text
                style={{
                  fontSize: 18,
                  letterSpacing: 0.23,
                  fontWeight: '500',
                  marginTop: 10,
                }}>
                Patient’s List
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Patientlist', {});
              }}
              style={styles.addressDiv}>
              <View>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.letterBackground}>
                  <Text
                    style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                    S
                  </Text>
                </LinearGradient>
              </View>
              <View>
                <Text
                  style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
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
                      width: 30,
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <FontAwesome5Icons name="video" size={16} color="#FBBC05" />
                  </View>
                </Text>
                <Text style={{fontSize: 9, marginBottom: 3}}>
                  Video Conferance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Patientlist', {});
              }}
              style={styles.addressDiv}>
              <View>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.letterBackground}>
                  <Text
                    style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                    S
                  </Text>
                </LinearGradient>
              </View>
              <View>
                <Text
                  style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
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
                      width: 30,
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <FontAwesome5Icons name="video" size={16} color="#FBBC05" />
                  </View>
                </Text>
                <Text style={{fontSize: 9, marginBottom: 3}}>
                  Video Conferance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Patientlist', {});
              }}
              style={styles.addressDiv}>
              <View>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.letterBackground}>
                  <Text
                    style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                    S
                  </Text>
                </LinearGradient>
              </View>
              <View>
                <Text
                  style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
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
                      width: 30,
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <FontAwesome5Icons name="video" size={16} color="#FBBC05" />
                  </View>
                </Text>
                <Text style={{fontSize: 9, marginBottom: 3}}>
                  Video Conferance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Patientlist', {});
              }}
              style={styles.addressDiv}>
              <View>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.letterBackground}>
                  <Text
                    style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                    S
                  </Text>
                </LinearGradient>
              </View>
              <View>
                <Text
                  style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
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
                      width: 30,
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <FontAwesome5Icons name="video" size={16} color="#FBBC05" />
                  </View>
                </Text>
                <Text style={{fontSize: 9, marginBottom: 3}}>
                  Video Conferance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Patientlist', {});
              }}
              style={styles.addressDiv}>
              <View>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.letterBackground}>
                  <Text
                    style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                    S
                  </Text>
                </LinearGradient>
              </View>
              <View>
                <Text
                  style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
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
                      width: 30,
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <FontAwesome5Icons name="video" size={16} color="#FBBC05" />
                  </View>
                </Text>
                <Text style={{fontSize: 9, marginBottom: 3}}>
                  Video Conferance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Patientlist', {});
              }}
              style={styles.addressDiv}>
              <View>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.letterBackground}>
                  <Text
                    style={{fontSize: 28, color: '#ffffff', fontWeight: '700'}}>
                    S
                  </Text>
                </LinearGradient>
              </View>
              <View>
                <Text
                  style={{fontSize: 14, fontFamily: 'Mulish', marginBottom: 2}}>
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
                      width: 30,
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <FontAwesome5Icons name="video" size={16} color="#FBBC05" />
                  </View>
                </Text>
                <Text style={{fontSize: 9, marginBottom: 3}}>
                  Video Conferance
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  whitebar: {
    height: Dimensions.get('window').height * 0.8,
    width: Dimensions.get('window').width * 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    // paddingTop: 30
  },
  imageContainer: {
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: {
    width: 80,
    //marginRight: 30,
    height: 80,
    // backgroundColor: 'red',
    borderRadius: 50,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 7,
  },
  locationContainertext: {
    color: '#fff',
    marginLeft: 7,
    fontSize: 14,
    fontFamily: 'Mulish',
  },
  letterBackground: {
    marginVertical: 20,
    borderRadius: 35,
    width: 50,
    height: 50,
    backgroundColor: 'red',
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
    backgroundColor: '#fff',
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
    elevation: 5,
  },
  datedayContainer: {
    flex: 1,
    width: '20%',
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  todayBookingDivs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  todayBookingDiv: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.2,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 2,
  },
  tenTxtDiv: {
    width: 115,
    height: 80,
    // borderColor: '#009987',
    // borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tenTxt: {
    color: '#fff',
    // marginLeft: 7,
    fontSize: 24,
    fontFamily: 'Mulish',
    fontWeight: '700',
  },
  todaysBookingTxt: {
    color: '#222222',
    // marginLeft: 7,
    fontSize: 14,
    fontFamily: 'Mulish',
    fontWeight: '700',
    marginTop: 10,
  },
});
export default Earningscreen;
