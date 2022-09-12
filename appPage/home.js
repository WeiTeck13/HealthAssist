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

import Icon from 'react-native-vector-icons/Ionicons';
import IconII from 'react-native-vector-icons/Fontisto';
import IconIII from 'react-native-vector-icons/AntDesign';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


//==========================================================================================
// const begins here
//==========================================================================================

const Home = ({ navigation }) => {

  //==========================================================================================
  // return
  //==========================================================================================

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.textTitle}>Tools</Text>

        <View style={{ margin: 12 }}>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

            <View style={{ alignItems: 'center' }}>

              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={styles.startButton}>

                <Icon name="person-circle-outline" size={50} color="#1976D2" />

                <Text style={styles.buttonText}>Profile</Text>

              </TouchableOpacity>



            </View>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Health insurance')}
                style={styles.startButton}>

                <Icon name="document-text-sharp" size={50} color="#1976D2" />

                <Text style={styles.buttonText}>Health insurance</Text>

              </TouchableOpacity>


            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Health calculator')}
                style={styles.startButton}>

                <Icon name="calculator-sharp" size={50} color="#1976D2" />

                <Text style={styles.buttonText}>Health calculator</Text>

              </TouchableOpacity>

            </View>



            <View style={{ alignItems: 'center' }}>

              <TouchableOpacity
                onPress={() => navigation.navigate('Health appointment')}
                style={styles.startButton}>

                <IconII name="doctor" size={50} color="#1976D2" />

                <Text style={styles.buttonText}>Appointment</Text>

              </TouchableOpacity>

            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

            <View style={{ alignItems: 'center' }}>

              <TouchableOpacity
                onPress={() => navigation.navigate('Contact')}
                style={styles.startButton}>

                <IconIII name="contacts" size={50} color="#1976D2" />

                <Text style={styles.buttonText}>Contact</Text>

              </TouchableOpacity>

            </View>

            <View style={{ alignItems: 'center' }}>

              <TouchableOpacity
                onPress={() => navigation.navigate('Medication')}
                style={styles.startButton}>

                <IconII name="pills" size={50} color="#1976D2" />

                <Text style={styles.buttonText}>Medication</Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

        {/* ==========================================================================================
          card area
          ========================================================================================== */}

        <Text style={styles.textTitle}>Health Information</Text>

        {/* Food and nutrition */}
        <Card>
          <CardImage
            source={require('../assets/cardImages/grapeTree.jpg')}
            title="Food and nutrition"
          />

          <CardAction
            separator={true}
            inColumn={false}
            style={{ flexWrap: "wrap" }}>


            <CardButton
              onPress={() => navigation.navigate('Pregnancy')}
              title="Pregnancy"
              color="#FEB557"
            />

            <CardButton
              onPress={() => navigation.navigate('Diabetes')}
              title="Diabetes"
              color="#FEB557"
            />

            <CardButton
              onPress={() => navigation.navigate('Elderly')}
              title="Elderly"
              color="#FEB557"
            />

            <CardButton
              onPress={() => navigation.navigate('Post-Surgery')}
              title="Post-Surgery"
              color="#FEB557"
            />

            <CardButton
              onPress={() => navigation.navigate('Blood donation')}
              title="Blood donation"
              color="#FEB557"
            />

          </CardAction>
        </Card>

        {/* Unhealthy activity  */}
        <Card>
          <CardImage
            source={require('../assets/cardImages/smoking.jpg')}
            title="Unhealthy activity"
          />

          <CardAction
            separator={true}
            inColumn={false}
            style={{ flexWrap: "wrap" }}>


            <CardButton
              onPress={() => navigation.navigate('Smoking')}
              title="Smoking"
              color="#FEB557"
            />

          </CardAction>
        </Card>

        <Text>{'\n'}</Text>

      </ScrollView>
    </SafeAreaView >
  );
};

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
    fontSize: 16,
    padding: 10,

  },
  textTitle: {
    padding: 10,
    //fontSize: 28,
    fontSize: 22,
  },
  textTitle2: {
    fontSize: 22,
  },
});

export default Home;