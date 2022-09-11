import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Picker,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//==========================================================================================
// const begins here
//==========================================================================================

const HealthCalc = ({ navigation }) => {

  //==========================================================================================
  // return
  //==========================================================================================

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate('Body mass index')}
          style={styles.startButton}>

<Icon name="scale-bathroom" size={50} color="#1976D2" />

          <Text style={styles.buttonText}>Body mass index</Text>

        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Basal metabolic rate')}
          style={styles.startButton}>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <Image style={styles.imageStyle} source={require('../assets/btnImages/mesuringTape.jpg')} />

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>

              <Text style={styles.buttonText}>Basal metabolic rate</Text>

            </View>

          </View>

        </TouchableOpacity> */}

      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  startButton: {
    height: 120,
    width: 180,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    //color: 'white',
    fontSize: 16,
    padding: 10,
  },
  textStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
});

export default HealthCalc;
