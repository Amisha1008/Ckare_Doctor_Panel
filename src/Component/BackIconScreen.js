import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BackIconScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={styles.backIconBackground} onPress={() => {
            navigation.goBack();
          }}>
        <BackIcon
          name="chevron-back"
          size={25}
          color="#626262"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackIconScreen;

const styles = StyleSheet.create({
  backIconBackground: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#EFF3FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
