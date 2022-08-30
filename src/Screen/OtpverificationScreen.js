import * as React from 'react';
import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import DotIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import BackiconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';

function Otp() {
  //for mobile verification
  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  //for email verification
  const pin5Ref = useRef();
  const pin6Ref = useRef();
  const pin7Ref = useRef();
  const pin8Ref = useRef();
  const [otp1, setOtp1] = useState({5: '', 6: '', 7: '', 8: ''});

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>
        <View style={styles.backIcon}>
          <BackiconScreen />
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.06}}></View>
        <View style={styles.pleaseVerificationTxtRow}>
          <Text style={styles.pleaseVerificationTxt}>Please Verification!</Text>
        </View>
        <View style={styles.insertOtpTxtRow}>
          <Text style={styles.insertOtpTxt}>
            Insert your OTP Code to continue
          </Text>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.07}}></View>
        <View>
          <View style={styles.pleaseVerificationTxtRow}>
            <Text style={styles.pleaseVerificationTxt}>
              Verify Your Phone Number
            </Text>
          </View>
          <View style={styles.otpCircleMainDiv}>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin1Ref}
                secureTextEntry={true}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 1: text});
                  text && pin2Ref.current.focus();
                }}
              />
            </View>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin2Ref}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                secureTextEntry={true}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 2: text});
                  text ? pin3Ref.current.focus() : pin1Ref.current.focus();
                }}
              />
            </View>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin3Ref}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                secureTextEntry={true}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 3: text});
                  text ? pin4Ref.current.focus() : pin2Ref.current.focus();
                }}
              />
            </View>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin4Ref}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                secureTextEntry={true}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 4: text});
                  !text && pin3Ref.current.focus();
                }}
              />
            </View>
          </View>
          <View style={styles.didntReceiveResendCodeTxtDiv}>
            <View>
              <Text style={styles.didntReceiveCodeTxt}>
                Didn't receive the code
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.resendCodeTxt}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>
        <View style={styles.pleaseVerificationTxtRow}>
          <Text style={styles.pleaseVerificationTxt}>Please Verification!</Text>
        </View>
        <View style={styles.insertOtpTxtRow}>
          <Text style={styles.insertOtpTxt}>
            Insert your OTP Code to continue
          </Text>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.07}}></View>
        <View>
          <View style={styles.pleaseVerificationTxtRow}>
            <Text style={styles.pleaseVerificationTxt}>
              Verify Your Email Id
            </Text>
          </View>
          <View style={styles.otpCircleMainDiv}>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin5Ref}
                secureTextEntry={true}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 1: text});
                  text && pin6Ref.current.focus();
                }}
              />
            </View>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin6Ref}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                secureTextEntry={true}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 2: text});
                  text ? pin7Ref.current.focus() : pin5Ref.current.focus();
                }}
              />
            </View>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin7Ref}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                secureTextEntry={true}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 7: text});
                  text ? pin8Ref.current.focus() : pin6Ref.current.focus();
                }}
              />
            </View>
            <View style={styles.otpCircleDiv}>
              <TextInput
                ref={pin8Ref}
                style={{
                  fontSize: 20,
                  width: Dimensions.get('screen').width * 0.048,
                }}
                maxLength={1}
                secureTextEntry={true}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setOtp({...otp, 8: text});
                  !text && pin7Ref.current.focus();
                }}
              />
            </View>
          </View>
          <View style={styles.didntReceiveResendCodeTxtDiv}>
            <View>
              <Text style={styles.didntReceiveCodeTxt}>
                Didn't receive the code
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.resendCodeTxt}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SelectLocationManually', {});
          }}>
          <ButtonFieldScreen text="Register" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    //paddingTop: 12,
  },
  leftIcon: {
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 50,
    backgroundColor: '#EFF3FA',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pleaseVerificationTxtRow: {
    marginBottom: 5,
  },
  pleaseVerificationTxt: {
    color: '#222222',
    fontSize: 20,
    fontFamily: 'Mulish',
    fontWeight: '700',
  },
  // pleaseFillTxtRow: {
  //     marginBottom: 40,
  // },
  insertOtpTxt: {
    color: '#9093A3',
    fontSize: 14,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },
  backIcon: {
    marginTop: 30,
    //marginLeft: 20,
  },

  otpCircleMainDiv: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otpCircleDiv: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#DEE1E6',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  didntReceiveResendCodeTxtDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  didntReceiveCodeTxt: {
    color: '#9093A3',
    fontSize: 12,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },
  resendCodeTxt: {
    color: '#1D6AFF',
    fontSize: 14,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },

  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  btnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 30,
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default Otp;
