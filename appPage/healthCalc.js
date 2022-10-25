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

import { styles } from "../stylesheetFolder/style";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

//==========================================================================================
// const begins here
//==========================================================================================

const HealthCalc = ({ navigation }) => {

  const adUnitId = 'ca-app-pub-3038938528713825/9160421835';

  //==========================================================================================
  // return
  //==========================================================================================

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.buttonAlignment}>

          <TouchableOpacity
            onPress={() => navigation.navigate('Body mass index')}
            style={styles.startButton3}>

            <Icon name="scale-bathroom" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Body mass index</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Basal metabolic rate')}
            style={styles.startButton3}>

            <Icon name="scale-bathroom" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Basal metabolic rate</Text>

          </TouchableOpacity>

        </View>

        <Text>{'\n'}</Text>

        {/* Advertisement banner */}
        <View style={{ alignItems: 'center' }}>

          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: false,
            }}
          />

        </View>

      </ScrollView>
    </SafeAreaView>
  );

}

export default HealthCalc;
