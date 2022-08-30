import {
  View,
  Text,
  Image,
  ImageBackground,
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
import bgImage from '../Assets/Image/greenBackground.png';
import BackiconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';

export default function MemebershipScreen({navigation}) {
  return (
    // <View>
    <ImageBackground source={bgImage} style={styles.container}>
      <View style={styles.goPremiumDiv}>
        <Text
          style={styles.goPremiumTxt}
          onPress={() => navigation.navigate('Registration1Screen')}>
          Go Premium
        </Text>
      </View>
      <View style={styles.midBoxDiv}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.midBox}>
            <Text style={styles.txt}>Get a verified badge</Text>
            <Text style={styles.txt}>Come to the top suggestions list </Text>
            <Text
              style={[
                styles.txt,
                {marginHorizontal: 2, letterSpacing: 0.3, lineHeight: 23},
              ]}>
              know about your competitor present near by you and about their
              services
            </Text>
            <View style={styles.midBoxbottomdiv}>
              <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹400</Text>
                <Text style={styles.midBoxbottomdiv800}>₹800</Text>
              </View>
              <View style={styles.midBoxbottomdivright}>
                <Text style={styles.midBoxbottomdiv1month}>1 Month</Text>
              </View>
            </View>
          </View>
          <View style={styles.midBox}>
            <Text style={styles.txt}>Get a verified badge</Text>
            <Text style={styles.txt}>Come to the top suggestions list </Text>
            <Text
              style={[
                styles.txt,
                {marginHorizontal: 2, letterSpacing: 0.3, lineHeight: 23},
              ]}>
              know about your competitor present near by you and about their
              services
            </Text>
            <View style={styles.midBoxbottomdiv}>
              <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹600</Text>
                <Text style={styles.midBoxbottomdiv800}>₹1000</Text>
              </View>
              <View style={styles.midBoxbottomdivright}>
                <Text style={styles.midBoxbottomdiv1month}>3 Month</Text>
              </View>
            </View>
          </View>
          <View style={styles.midBox}>
            <Text style={styles.txt}>Get a verified badge</Text>
            <Text style={styles.txt}>Come to the top suggestions list </Text>
            <Text
              style={[
                styles.txt,
                {marginHorizontal: 2, letterSpacing: 0.3, lineHeight: 23},
              ]}>
              know about your competitor present near by you and about their
              services
            </Text>
            <View style={styles.midBoxbottomdiv}>
              <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹800</Text>
                <Text style={styles.midBoxbottomdiv800}>₹1200</Text>
              </View>
              <View style={styles.midBoxbottomdivright}>
                <Text style={styles.midBoxbottomdiv1month}>6 Month</Text>
              </View>
            </View>
          </View>
          <View style={styles.midBox}>
            <Text style={styles.txt}>Get a verified badge</Text>
            <Text style={styles.txt}>Come to the top suggestions list </Text>
            <Text
              style={[
                styles.txt,
                {marginHorizontal: 2, letterSpacing: 0.3, lineHeight: 23},
              ]}>
              know about your competitor present near by you and about their
              services
            </Text>
            <View style={styles.midBoxbottomdiv}>
              <View style={styles.midBoxbottomdivleft}>
                <Text style={styles.midBoxbottomdiv400}>₹1200</Text>
                <Text style={styles.midBoxbottomdiv800}>₹1800</Text>
              </View>
              <View style={styles.midBoxbottomdivright}>
                <Text style={styles.midBoxbottomdiv1month}>12 Month</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{height: Dimensions.get('screen').height * 0.03}}></View>

      {/* button */}
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SplashScreen', {});
          }}>
          <ButtonFieldScreen text="Become a Member" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
  },
  goPremiumDiv: {
    height: Dimensions.get('window').height * 0.23,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  goPremiumTxt: {
    color: '#fff',
    // fontFamily: 'Mulish',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  midBoxDiv: {
    // justifyContent: 'center',
    // backgroundColor: 'blue',
    height: Dimensions.get('window').height * 0.55,
  },
  midBox: {
    width: 330,
    height: 360,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 10,
  },
  midBoxTxt: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 23,
    color: '#fff',
    zIndex: 1,
    marginVertical: 10,
  },
  midBoxbottomdiv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopColor: '#fff',
    borderTopWidth: 1,
    paddingVertical: 20,
    marginTop: 20,
  },
  midBoxbottomdivleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  midBoxbottomdiv400: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',
    fontFamily: 'Mulish',
    marginRight: 15,
  },
  midBoxbottomdiv800: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'Mulish',

    textDecorationLine: 'line-through',
  },
  midBoxbottomdivright: {
    // width: 80,
    // height: 25,
    // backgroundColor: 'blue',
    paddingVertical: 5,
  },
  midBoxbottomdiv1month: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Mulish',
    fontWeight: '900',
    marginRight: 15,
  },
  takeFreeTrialBtnDiv: {
    width: 330,
    padding: 5,
    marginRight: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  takeFreeTrialBtn: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeFreeTrialBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
  textDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.55,
  },
  text: {
    width: 320,
    height: 330,
    borderRadius: 20,
    // backgroundColor: '#fafafa54',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginVertical: 13,
  },
});
