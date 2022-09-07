import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonFieldScreen from '../Component/ButtonFieldScreen';
 
function Login({ navigation }) {
    return (
        <LinearGradient colors={['#009987', '#00E0C5',]} style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                {/* top div */}
                <View>
                    <View style={styles.firstRowImgDiv}>
                        <View style={styles.doctorImgDiv}>
                            <Image source={require('../Assets/Image/Bitmap.png')} style={styles.doctorImg} />
                        </View>
                    </View>
                    <View style={styles.secondRowTxtMainDiv}>
                        <View style={styles.secondRowTxtDiv}>
                            <Text style={styles.oneAppTxt}>One app for all your</Text>
                            <Text style={styles.oneAppTxt}>Health need</Text>
                            <Text style={styles.getBestExperienceTxt}>Get your best experience now!</Text>
                        </View>
                    </View>
                </View>

                {/* bottom div */}
                <View style={styles.bottomDiv}>
                    <View style={styles.bottomWhiteDiv}>
                        <View style={styles.txtAboveBtnDiv}>
                            <View style={styles.welcomeTxtDiv}>
                                <Text style={styles.welcomeTxt}>Welcome to Ckare!</Text>
                            </View>
                            <View style={styles.welcomeTxtDiv}>
                                <Text style={styles.insertPhnNoTxt}>Insert your phone number to started</Text>
                            </View>
                            <View style={styles.enterUserIdTxtDiv}>
                                <TextInput placeholder='Enter UserId' style={styles.enterUserIdTxt} />
                            </View>
                            <View style={styles.enterUserIdTxtDiv}>
                                <TextInput placeholder='Enter Password' style={styles.enterUserIdTxt} />
                            </View>
                            <TouchableOpacity style={styles.forgotPasswordTxtDiv}>
                                <Text style={styles.forgotPasswordTxt}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnMainDiv}>
                            <TouchableOpacity onPress={() => {navigation.navigate('Regscreen')}} >
                                <ButtonFieldScreen text='Continue' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.txtBelowBtnDiv}>
                            <View>
                                <Text style={styles.newUserTxt}>New User?</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Regsceen')}>
                                <Text style={styles.registerTxt}> Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },

    firstRowImgDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    doctorImgDiv: {
        // borderRadius: 100=,
        // paddingBottom: 0,
        // paddingHorizontal: 30
        justifyContent: 'center',
        alignItems: 'center',
    },
    doctorImg: {
        width: 175,
        height: 175,
    },

    secondRowTxtMainDiv: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondRowTxtDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.15,
    },
    oneAppTxt: {
        color: '#FFFFFF',
        fontSize: 28,
        fontFamily: 'Mulish',
        fontWeight: '500',
        marginBottom: 2,
    },
    getBestExperienceTxt: {
        color: '#FAFAFA',
        fontSize: 14,
        fontFamily: 'Mulish',
        fontWeight: '500',
        marginTop: 5,
        marginBottom: 20,
    },

    // bottom div
    bottomDiv: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomWhiteDiv: {
        width: Dimensions.get('screen').width * 1,
        // height: Dimensions.get('screen').height * 0.445,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
        paddingVertical: 40,
    },
    txtAboveBtnDiv: {
        paddingHorizontal: 30,
    },
    welcomeTxtDiv: {
        alignItems: 'flex-start',
    },
    welcomeTxt: {
        color: '#222222',
        fontSize: 20,
        fontFamily: 'Mulish',
        fontWeight: '700',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    insertPhnNoTxt: {
        color: '#9093A3',
        fontSize: 14,
        fontFamily: 'Mulish',
        fontWeight: '500',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    enterUserIdTxtDiv: {
        borderBottomColor: '#DEE1E6',
        borderBottomWidth: 1,
        alignItems: 'flex-start',
    },
    enterUserIdTxt: {
        color: '#9093A3',
        fontSize: 14,
        fontFamily: 'Mulish',
        fontWeight: '600',
    },
    forgotPasswordTxtDiv: {
        alignItems: 'flex-end'
    },
    forgotPasswordTxt: {
        marginTop: 10,
        color: '#1D6AFF',
        fontSize: 12,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
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
    txtBelowBtnDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUserTxt: {
        color: '#222222',
        fontFamily: 'Mulish',
        fontWeight: '700',
        fontSize: 14,
    },
    registerTxt: {
        color: '#009987',
        fontFamily: 'Mulish',
        fontWeight: '800',
        fontSize: 18,
    },

})

export default Login;