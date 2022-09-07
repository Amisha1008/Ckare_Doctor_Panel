import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
import Icon1 from 'react-native-vector-icons/AntDesign';

const Waitverify = ({navigation}) => {
  

  return (
    
      <View style={styles.contrainer}>
        <View style={styles.blank}>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.imgdiv1}>
        <Image  style={styles.img1} source={require('../Assets/Image/nurseimg.png')} />
        </TouchableOpacity>
        
        <View style={styles.apllodiv}>
            <Text style={styles.apollotext}>Apollo Medicine Store</Text>
        </View>

        <View style={styles.apllodiv1}>
            <Text style={styles.apollotext1}>Thank You!</Text>
        </View>

        <View style={styles.textdiv2}>
        <Text style={styles.text1}>Thank You for submitting all the document.</Text>
        <Text style={styles.text1}>we are verifying your documents ,it may take </Text>
        <Text style={styles.text1}>2-3 days.we will get back to you..</Text>

        </View>

        <View style={styles.textdiv3}>
        <Text style={styles.text1}>After Verification you will get user id and </Text>
        <Text style={styles.text1}>password in your email.</Text>
        </View>
        <View style={styles.blank2}>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HScreen')}  style={styles.ckarediv}>
            <Image  style={styles.ckarelogo} source={require('../Assets/Image/clogo.png')}/>
        </TouchableOpacity>
      </View>
  );
};

export default Waitverify ;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor:'white',
  },
  imgdiv1:{
            justifyContent:'center',
            alignItems:'center',
            padding:10,         
  },
  img1:{
    width:130,
    height:130,
    borderRadius:20,
       
  },
  blank:{
    height:Dimensions.get('screen').height*0.15,  
  },
  apllodiv:{
                justifyContent:'center',
                alignItems:'center',
                marginTop:35,
  },
  apollotext:{
                color:'black',
                fontSize:20,
  },
  apllodiv1:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:35,
  },
  apollotext1:{
    color:'black',
    fontSize:30,
},
textdiv2:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,

},
text1:{
        color:'black',
        fontSize:15,
},
textdiv3:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
},
ckarediv:{
            justifyContent:'center',
            alignItems:'center',
            
            
},
ckarelogo:{
        width:136,
        height:51,
},
blank2:{
    height:Dimensions.get('screen').height*0.09,  
},
  
});
