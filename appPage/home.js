/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * Practical - Navigation Applications
 *
 */

import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import Icon from 'react-native-vector-icons/Ionicons';
import IconII from 'react-native-vector-icons/Fontisto';
import IconIII from 'react-native-vector-icons/AntDesign';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

//==========================================================================================
// const begins here
//==========================================================================================

const Home = ({ navigation }) => {

  const adUnitId = 'ca-app-pub-3038938528713825/5712710038';

  //==========================================================================================
  // return
  //==========================================================================================

  return (
      <ScrollView style={styles.container}>

        <Text style={styles.titleHome}>Medical Widget</Text>

        <View style={styles.buttonAlignment}>

          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={styles.startButton3}>

            <Icon name="person-circle-outline" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Profile</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Health insurance')}
            style={styles.startButton3}>

            <Icon name="document-text-sharp" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Health Insurance</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.buttonAlignment}>

          <TouchableOpacity
            onPress={() => navigation.navigate('Health calculator')}
            style={styles.startButton3}>

            <Icon name="calculator-sharp" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Health Calculator</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Health appointment')}
            style={styles.startButton3}>

            <IconII name="doctor" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Appointment</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.buttonAlignment}>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contact')}
            style={styles.startButton3}>

            <IconIII name="contacts" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Contact</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Medication')}
            style={styles.startButton3}>

            <IconII name="pills" size={50} color="#1976D2" />

            <Text style={styles.buttonText2}>Medication</Text>

          </TouchableOpacity>

        </View>

        {/* ==========================================================================================
          card area
          ========================================================================================== */}

        <Text style={styles.titleHome}>Health Information</Text>

        {/* Food and nutrition */}
        <Card style={styles.cardStyle}>
          <CardImage
            source={require('../assets/cardImages/grapeTree.jpg')}
            title="Food and nutrition"
          />

          <CardContent text="Different food have different health impacts to human body, some food needed to be avoided depend on health condition." />

          <CardAction
            separator={true}
            inColumn={false}
            style={{ flexWrap: "wrap" }}>


            <CardButton
              onPress={() => navigation.navigate('Pregnancy')}
              title="Pregnancy"
              color="black"
            />

            <CardButton
              onPress={() => navigation.navigate('Diabetes')}
              title="Diabetes"
              color="black"
            />

            <CardButton
              onPress={() => navigation.navigate('Elderly')}
              title="Elderly"
              color="black"
            />

            <CardButton
              onPress={() => navigation.navigate('Post-Surgery')}
              title="Post-Surgery"
              color="black"
            />

            <CardButton
              onPress={() => navigation.navigate('Blood donation')}
              title="Blood donation"
              color="black"
            />

          </CardAction>
        </Card>

        {/* Unhealthy activity  */}
        <Card style={styles.cardStyle}>
          <CardImage
            source={require('../assets/cardImages/smoking.jpg')}
            title="Unhealthy activity"
          />

          <CardContent text="Smoking and drinking are some of the examples of unhealthy activity. Avoid them for a healthy lifestyle." />

          <CardAction
            separator={true}
            inColumn={false}
            style={{ flexWrap: "wrap" }}>


            <CardButton
              onPress={() => navigation.navigate('Smoking')}
              title="Smoking"
              color="black"
            />

          </CardAction>
        </Card>

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
  );
};

export default Home;