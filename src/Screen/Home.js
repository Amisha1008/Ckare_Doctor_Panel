import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';
import Bell from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

function HScreen({navigation}) {
  const infoDoctorData = [
    {
      title: 'Premium Member',
      title2: 'Booking',
      isonline: false,
      specialist: 'Radiologists',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/Kingicon.png'),
    },
    {
      title: 'Video ',
      title2: 'Consulting',
      isonline: false,
      specialist: 'Radiologists',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/Video.png'),
    },
    {
      title: 'Home',
      title2: 'Consulting',
      isonline: false,
      specialist: 'Radiologists',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/Dialicon2.png'),
    },
    {
      title: 'Clinic',
      title2: 'Consulting',
      isonline: false,
      specialist: 'Radiologists',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/Calendar.png'),
    },
  ];

  return (
    <LinearGradient colors={['#009987', '#00E0C5']} style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.FirstIconrow}>
          <TouchableOpacity style={styles.menuiconview}>
            <Image
              style={styles.menuicon}
              source={require('../Assets/Image/Menuicon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.red}></View>
            <Bell name="bell" style={styles.bellicon} size={23} />
          </TouchableOpacity>
        </View>

        <View style={styles.doctorview}>
          <View style={styles.NurseView}>
            <Image
              style={styles.nurseimg}
              source={require('../Assets/Image/Nurse.png')}
            />
          </View>
          <View>
            <View>
              <Text style={styles.doctorname}>Dr. Kate Rose</Text>
            </View>
            <View>
              <Text style={styles.doctorid}>ID: CKARE001</Text>
            </View>
            <View>
              <Text>star</Text>
            </View>
          </View>
        </View>

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

        <View style={styles.bottomDiv}>
          <View style={styles.bottomWhiteDiv}>
            <View style={styles.doctorContainer}>
              {/* start try map */}

              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  paddingHorizontal: 10,
                }}>
                {infoDoctorData.map((list, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Profile', {});
                      }}
                      View
                      style={styles.cardInnerContainer}
                      key={index}>
                      <View style={styles.cardImageContainer}>
                        {list.isonline ? null : (
                          <View style={styles.cardOnlineLabel}>
                            <Text style={styles.insidetext}>10</Text>
                          </View>
                        )}

                        <View style={styles.iconview}>
                          <Image
                            source={list.image}
                            style={{height: 20, width: 20}}
                            resizeMode={'contain'}
                          />
                        </View>
                      </View>

                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'Mulish',
                          letterSpacing: 0.2,
                          color: 'black',
                        }}>
                        {list.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'Mulish',
                          letterSpacing: 0.2,
                          color: 'black',
                        }}>
                        {list.title2}
                      </Text>
                      {/* <Text style={{fontSize: 12}}>{list.specialist}</Text> */}
                      <View style={{flexDirection: 'row'}}>
                        {/* <Text style={{fontSize: 10}}>{list.reviews}</Text> */}
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },

  firstRowImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  bottomDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomWhiteDiv: {
    width: Dimensions.get('screen').width * 1,
    // height: Dimensions.get('screen').height * 0.445,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingBottom: 30,
  },
  FirstIconrow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 60,
  },
  menuicon: {
    width: 17,
    height: 17,
  },
  bellicon: {
    color: 'white',
  },
  menuiconview: {
    width: 25,
    height: 25,
    justifyContent: 'center',
  },
  doctorview: {
    flexDirection: 'row',
    alignItems: 'center',
    //    backgroundColor:'red',
    marginHorizontal: 30,
  },
  nurseimg: {
    width: 90,
    height: 90,
  },
  NurseView: {
    marginRight: 30,
  },
  doctorname: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  doctorid: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Mulish',
  },

  patiarow: {
    width: Dimensions.get('window').width * 1,
    // backgroundColor:'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 30,
    marginBottom: 40,
  },
  patiatext: {
    color: 'white',
  },
  backbuttonview: {
    marginRight: 20,
  },
  mapicon: {
    color: 'white',
    marginRight: 7,
    marginLeft: 7,
  },
  firstcicle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    // borderWidth:3,
    marginBottom: 10,
    // borderColor:'#00E0C5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  secondcircle: {
    width: 85,
    height: 85,
    borderRadius: 50,
    // borderWidth:5,
    marginBottom: 10,
    // borderColor:'#00E0C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondcircleinside: {
    width: 73,
    height: 73,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Upperview: {
    // backgroundColor:'green',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cicletext: {
    color: '#009987',
    fontWeight: '700',
  },
  circleinsidetext: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '700',
  },
  firstcircleinside: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  collectSampleTxt: {
    color: '#232323',
    marginLeft: 7,
    fontSize: 14,
    fontFamily: 'Mulish',
    textAlign: 'center',
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
    borderRadius: 10,
    width: 80,
    marginRight: 20,
    height: 76.6,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 7,
  },
  locationContainertext: {
    color: '#fff',
    marginLeft: 7,
    fontSize: 14,
    fontFamily: 'Mulish',
  },
  doctorContainer: {
    //   backgroundColor:'green',
  },
  cardImageContainer: {
    // position: 'relative',
    marginVertical: 10,
    // marginLeft: 6,
    paddingHorizontal: 10,
  },
  cardOnlineLabel: {
    height: 17,
    width: 17,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 8,
    top: -2,
    zIndex: 1,
  },
  cardInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingVertical: 45,
    paddingHorizontal: 22,
    marginVertical: 10,
    width: Dimensions.get('screen').width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',

    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
  },
  iconview: {
    backgroundColor: '#f0f8bf',
    width: 53,
    height: 53,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insidetext: {
    color: 'white',
    fontSize: 9,
  },
  red: {
    width: 5,
    height: 5,
    backgroundColor: 'red',
    position: 'absolute',
    left: 18,
    borderRadius: 20,
  },
});

export default HScreen;
