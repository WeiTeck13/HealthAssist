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

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

//==========================================================================================
// const begins here
//==========================================================================================

const Pregnancy = ({ navigation }) => {

  const adUnitId = 'ca-app-pub-3038938528713825/7955729993';

  //==========================================================================================
  // return
  //==========================================================================================

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Foods to avoid</Text>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/alcohol.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Alcohol</Text>
          <Text style={styles.description}>
            Consuming alcohol during pregnancy have a higher risk of miscarriages and stillbirth. Excessive alcohol consumption may causes fetal alcohol syndrome, including facial deformities, low birth weight and mental retardation.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/rawegg.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Raw or half-boiled eggs</Text>
          <Text style={styles.description}>
            Raw or half-boiled eggs contain a variety of food-borne bacteria and viruses. Consuming them during pregnancy have higher risk of bacterial food poisoning and may be more severe.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/sashimi.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Raw seafood</Text>
          <Text style={styles.description}>
            Raw seafood such as raw oyster, cockles, and sashimi contain a variety of food-borne bacteria and viruses. Consuming them during pregnancy have higher risk of bacterial food poisoning and may be more severe.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/shark.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>High mercury fish</Text>
          <Text style={styles.description}>
            High mercury fish such as swordfish, shark, and king mackerelcan be
            toxic to your nervous system.
          </Text>
        </View>
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
  );
};

export default Pregnancy;