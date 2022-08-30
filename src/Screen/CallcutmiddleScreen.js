import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackiconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';
import filePicker from 'react-native-document-picker';

const {height, width} = Dimensions.get('screen');

export default function CallcutmiddleScreen() {
  const handlefilePicker = async () => {
    try {
      // console.log('done');
      const response = await filePicker.pick({
        presentationStyle: 'fullScreen',
      });
      setfileState(response);
      console.log(response);
    } catch (err) {
      console.log(error);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.firstMainDiv}>
          <View style={styles.firstwhiteDiv}>
            <View style={styles.backIcon}>
              <BackiconScreen />
            </View>
            <View style={styles.firstMainDiv}>
              <LinearGradient
                colors={['#00E0C5', '#009987']}
                style={styles.letterBackground}>
                <Text
                  style={{fontSize: 30, color: '#ffffff', fontWeight: '700'}}>
                  S
                </Text>
              </LinearGradient>
              <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 20, fontFamily: 'Mulish'}}>
                  Sagarika Mohanty
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 14, color: '#009987'}}>
                  23 Years old{' '}
                </Text>
              </View>
            </View>
            {/* ribbon start */}
            <View style={styles.CardContainer}>
              <View>
                <Text style={{fontSize: 16}}>Prescriptions</Text>
              </View>
              <TouchableOpacity onPress={() => handlefilePicker()}>
                <View style={styles.detailsCardContainer}>
                  <Ionicons name="document-outline" color="#7ACEFA" size={30} />
                </View>
              </TouchableOpacity>
            </View>
            {/* {ribbon end} */}
          </View>
        </View>
        <View>
          <View style={{marginHorizontal: 15, marginVertical: 10}}>
            <Text style={{fontSize: 18}}>Patient Health Problem</Text>
          </View>
          <View style={{marginHorizontal: 15, marginVertical: 2}}>
            <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              consectetur ante turpis, a sodales dolor rutrum ut. Mauris sed
              lectus a nunc dictum cursus. Praesent aliquam leo sit amet elit.
            </Text>
          </View>
          <View style={{marginHorizontal: 15, marginVertical: 5}}>
            <Text style={{fontSize: 18, letterSpacing: 0.4}}>Timing</Text>
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
              22 March , Tuesday at (08:30 AM - 09:00 PM){' '}
            </Text>
          </View>
          <View style={{marginVertical: 15, padding: 12}}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View style={styles.servicesIconContainer}>
                <FontAwesome5Icons name="video" color="#FBBC05" size={30} />
              </View>
              <View style={{justifyContent: 'center', marginHorizontal: 7}}>
                <Text style={{fontSize: 16, fontFamily: 'Mulish'}}>
                  Video Conference
                </Text>
                <Text style={{fontSize: 12}}>See your doctor live.</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* 3rd row end */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Prescriptionpreview', {});
          }}>
          <ButtonFieldScreen text="Reconnect" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  clickBackIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  firstMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  firstwhiteDiv: {
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width,
    backgroundColor: '#EFF3FA',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  letterBackground: {
    marginVertical: 20,
    borderRadius: 35,
    width: 70,
    height: 70,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 5,
    elevation: 10,
  },
  inputBoxContainer: {
    width: Dimensions.get('window').width * 0.91,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 5,
  },
  previewbtndiv: {
    width: 340,
    padding: 5,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.39,
    shadowRadius: 1.41,
    elevation: 2,
  },
  previewbtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsRighesidediv: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 5,
  },
  servicesIconContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: 'rgba(251, 188, 5, 0.27)',
    borderColor: 'rgba(251, 188, 5, 0.27)',
  },
  activeService: {
    borderColor: '#00E0C5',
    borderRadius: 5,
    borderWidth: 1,
  },
  iconsRigheside: {
    width: 25,
    height: 25,
    borderColor: '#000000',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 1,
    backgroundColor: 'white',
    borderWidth: 0.1,
  },
  CardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
  detailsCardContainer: {
    backgroundColor: '#7ACEFA26',
    height: 70,
    width: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 2,
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.45,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    //alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputBoxContainer1: {
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#00E0C5',
  },
  timeTxt: {
    fontSize: 18,
    marginVertical: 30,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});