import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import filePicker from 'react-native-document-picker';
import BackiconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';
const RegistrationScreen = () => {
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
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.backIcon}>
          <BackiconScreen />
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.029}}></View>
        {/*1st row  */}
        <View style={{marginBottom: 15}}>
          <View>
            <Text style={styles.RegTxt}>Please Register</Text>
          </View>
          <View>
            <Text style={styles.detailsTxt}>Please Fill all the details. </Text>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.029}}></View>
        {/* 2nd row */}
        <View style={styles.secondrow}>
          <TouchableOpacity style={styles.secondrowDiv}>
            <Text style={styles.addNewAddressTxt}>
              Enter Doctor Registration number
            </Text>
          </TouchableOpacity>
        </View>
        {/* second Middel row div */}
        <View style={{height: Dimensions.get('screen').height * 0.029}}></View>

        {/* 3rd row */}
        <View style={styles.thirdrow}>
          <View style={styles.thirdrowDiv}>
            <View style={styles.row1}>
              <View style={styles.row1LeftDiv}>
                <View style={{padding: 1}}>
                  <Text style={{fontSize: 16}}>
                    Please upload your Doctor certificate
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.secondrow1}
              onPress={() => handlefilePicker()}>
              <View style={styles.secondrowDiv1}>
                <View>
                  <FontAwesome5Icons name="file" size={15} color={'#009987'} />
                </View>
                <View style={{paddingLeft: 10}}>
                  <Text style={styles.addNewAddressTxt1}>
                    Upload Certificate
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* 3rd row end */}
        <View style={{height: Dimensions.get('screen').height * 0.2}}></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OtpverificationScreen', {});
          }}>
          <ButtonFieldScreen text="Register" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingTop: 12,
  },

  backIcon: {
    marginTop: 30,
    //marginLeft: 20,
  },
  RegTxt: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Mulish',
    lineHeight: 25.1,
    letterSpacing: 0.3,
  },
  detailsTxt: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Mulish',
    lineHeight: 25.1,
    letterSpacing: 0.3,
    color: '#9093A3',
  },
  VehicleText: {
    fontSize: 18,
    fontFamily: 'Mulish',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  VehicleText1: {
    fontSize: 12,
    fontFamily: 'Mulish',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.2,
  },
  mediumInputDiv: {
    marginBottom: 30,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.08,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    padding: 7,
  },
  headingTxts: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222222',
    marginBottom: 5,
  },
  thirdrowDiv: {
    marginTop: 10,
  },
  // second row
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  secondrow1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  secondrowDiv1: {
    width: Dimensions.get('window').width * 0.82,
    height: Dimensions.get('window').height * 0.07,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#009987',
    borderWidth: 1,
    borderRadius: 10,
  },

  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.07,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 10,
    borderColor: '#E1E1E1',
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  addNewAddressTxt: {
    //color: '#222B45',
    fontSize: 12,
    fontWeight: '500',
    //color: '#009987',
    color: '#9C9C9C',
  },

  addNewAddressTxt1: {
    //color: '#222B45',
    fontSize: 16,
    fontWeight: '500',
    color: '#009987',
    //color: '#9C9C9C',
  },

  // third row
  thirdrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 7,
    marginTop: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  row1LeftDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nameTxt: {
    color: '#222B45',
    fontSize: 14,
    fontWeight: '500',
  },
  homeTxtDiv: {
    width: 45,
    height: 17,
    backgroundColor: '#c4c4c4',
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  homeTxt: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '700',
  },
  row2: {
    marginBottom: 10,
    // justifyContent: 'flex-start',
  },
  addressTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '500',
  },
  row3: {
    justifyContent: 'flex-start',
  },
  numberTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '500',
  },
});
