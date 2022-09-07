import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import BackIconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';
import LinearGradient from 'react-native-linear-gradient';
import Mailicon from 'react-native-vector-icons/AntDesign';
import CameraIcon from 'react-native-vector-icons/Entypo';
import Calendar from 'react-native-vector-icons/Feather';
import Phone from 'react-native-vector-icons/Feather';
import Adhar from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation}) => {
  return (
    <LinearGradient colors={['#009987', '#00E0C5']} style={styles.container}>
      <View style={styles.backiconview}>
        <View>
          <BackIconScreen />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('IfcallcutsScreen');
          }}>
          <Text style={styles.edittext}>EDIT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.whiteDiv}>
        <View style={styles.doctorImgMainDiv}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.doctorImgDiv}>
            <Image
              source={require('../Assets/Image/doc1.png')}
              style={styles.doctorImg}
            />
          </LinearGradient>
        </View>

        <View>
          <View style={styles.icontextview}>
            <View style={styles.mailiconview}>
              <Mailicon name="mail" size={20} />
            </View>
            <View>
              <Text style={styles.mailtext}>katerose@gmail.com</Text>
            </View>
          </View>

          <View style={styles.icontextview}>
            <View style={styles.mailiconview}>
              <Calendar name="calendar" size={20} />
            </View>
            <View>
              <Text style={styles.mailtext}>01.01.1999</Text>
            </View>
          </View>

          <View style={styles.icontextview}>
            <View style={styles.mailiconview}>
              <Phone name="smartphone" size={20} />
            </View>
            <View>
              <Text style={styles.mailtext}>+91 7894561234</Text>
            </View>
          </View>

          <View style={styles.icontextview}>
            <View style={styles.mailiconview}>
              <Adhar name="card-text-outline" size={20} />
            </View>
            <View>
              <Text style={styles.mailtext}>1234 5678 9101 </Text>
            </View>
          </View>
        </View>

        <View style={styles.blank}></View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  whiteDiv: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 50,
    paddingTop: 120,
    paddingBottom: 80,
    paddingHorizontal: 30,
  },
  fullnameIconTxtDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingVertical: 5,
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DEE1E6',
  },
  doctorImgMainDiv: {
    position: 'absolute',
    top: -45,
    // left: 165,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
  },
  doctorImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    width: 90,
    height: 90,
    borderRadius: 70,
  },
  doctorImg: {
    width: 60,
    height: 60,
  },
  cameraIconDiv: {
    width: 25,
    height: 25,
    borderRadius: 70,
    backgroundColor: '#000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  fullNameTxt: {
    width: Dimensions.get('screen').width * 0.8,
    color: '#000',
    fontSize: 12,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },
  backiconview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  edittext: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
  },
  icontextview: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 30,
  },
  mailiconview: {
    marginRight: 20,
  },
  mailtext: {
    color: 'black',
  },
  blank: {
    height: Dimensions.get('screen').height * 0.4,
  },
});

export default Profile;
