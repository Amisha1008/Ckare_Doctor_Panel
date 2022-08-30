import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackiconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';

const {height, width} = Dimensions.get('screen');

export default function Prescription() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.firstMainDiv}>
          <View style={styles.firstwhiteDiv}>
            <View style={styles.backIconView}>
              <TouchableOpacity
                style={styles.clickBackIcon}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons
                  name="chevron-back-outline"
                  color={'gray'}
                  size={24}
                />
              </TouchableOpacity>
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
          </View>
        </View>
        <View>
          <View style={styles.iconsRighesidediv}>
            <View style={styles.iconsRigheside}>
              <Ionicons name="create" size={15} color={'#00e0c5'} />
            </View>
            <View style={styles.iconsRigheside}>
              <FontAwesome5Icons name="share" size={15} color={'#00e0c5'} />
            </View>
          </View>
        </View>
        <View>
          <View style={{marginHorizontal: 15, marginVertical: 5}}>
            <Text style={{fontSize: 18}}>Prescription</Text>
          </View>
          <View style={{marginHorizontal: 15, marginVertical: 2}}>
            <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              consectetur ante turpis, a sodales dolor rutrum ut. Mauris sed
              lectus a nunc dictum cursus. Praesent aliquam leo sit amet elit.
            </Text>
          </View>
          <View style={{marginHorizontal: 15, marginVertical: 5}}>
            <Text style={{fontSize: 18}}>Test</Text>
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
              CBC
            </Text>
            <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
              Covid Test
            </Text>
          </View>
          <View style={{marginHorizontal: 15, marginVertical: 10}}>
            <Text style={{fontSize: 18}}>Medicine</Text>
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
              Paracetomol
            </Text>
            <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
              Pana-40
            </Text>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.09}}></View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Patientdetails2', {});
            }}>
            <ButtonFieldScreen text="Save Prescription" />
          </TouchableOpacity>
        </View>
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
    height: Dimensions.get('window').height * 0.4,
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
});
