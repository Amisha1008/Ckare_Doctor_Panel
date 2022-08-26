import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text onPress={() => navigation.navigate('Profile')}>Home Screen</Text>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    Sign in with Facebook
                </Text>
            </LinearGradient>
        </View>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default Home;