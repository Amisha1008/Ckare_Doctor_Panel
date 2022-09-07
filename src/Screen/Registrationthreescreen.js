import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon3 from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';
import BackIconScreen from '../Component/BackIconScreen';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';

const Regsceen = ({navigation}) => {
  const openDocumentfile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  return (
    <ScrollView style={styles.contrainer}>
      <View style={styles.asmv1}>
        <View style={styles.iview1}>
          <View style={styles.icview}>
            <BackIconScreen />
          </View>
        </View>
      </View>

      <View style={styles.asmv2}>
        <View style={styles.iview2}>
          <Text style={styles.t1}>Please Register</Text>
          <Text>Please Fill all the details.</Text>
        </View>
      </View>

      <View style={styles.uploadprofileview}>
        <Text style={styles.uploadprofiletext}>Please upload Profile</Text>
      </View>

      <TouchableOpacity
        onPress={() => openDocumentfile()}
        style={styles.iview4}>
        <Image
          style={styles.galleryicon}
          source={require('../Assets/Image/galleryfile.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => openDocumentfile()}
        style={styles.picker}>
        <Icon style={styles.fileicon} size={18} name="file-medical" />
        <Text style={{color: '#009987', fontSize: 14}}>Upload</Text>
      </TouchableOpacity>

      <View style={styles.spaceview}></View>

      {/* button start */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Waitverify');
        }}>
        <ButtonFieldScreen text="Next" />
      </TouchableOpacity>

      {/* button end  */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  asmv1: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  iview1: {
    width: Dimensions.get('screen').width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icview: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'white',
    width: Dimensions.get('screen').width * 0.11,
    borderRadius: 30,
    height: Dimensions.get('screen').height * 0.05,
    backgroundColor: '#EFF3FA',
  },
  editview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  asmv2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iview2: {
    width: Dimensions.get('screen').width * 0.87,
    paddingTop: 10,
  },
  t1: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  asmv3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  iview3: {
    width: Dimensions.get('screen').width * 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#DEE1E6',
  },
  icon2: {
    marginRight: 10,
    marginLeft: 10,
  },
  iview4: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEE1E6',
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 25,
    borderRadius: 10,
    paddingVertical: 35,
  },
  t2: {
    marginTop: 20,
  },
  picker: {
    paddingVertical: 10,
    marginHorizontal: 140,
    alignItems: 'center',
    borderColor: '#00E0C5',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  mainview: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.8,
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    // margin: 10,
    color: 'white',
    marginVertical: 10,
    backgroundColor: 'transparent',

    paddingVertical: 2,
  },
  blank: {
    height: Dimensions.get('screen').height * 0.3,
  },
  uploadprofileview: {
    // backgroundColor:'red',
    marginHorizontal: 25,
    marginTop: 40,
  },
  uploadprofiletext: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  galleryicon: {
    width: 100,
    height: 100,
  },
  fileicon: {
    color: '#009987',
    marginRight: 5,
  },
  spaceview: {
    height: Dimensions.get('screen').height * 0.26,
  },
});

export default Regsceen;
