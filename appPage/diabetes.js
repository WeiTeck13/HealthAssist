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

const Diabetes = ({ navigation }) => {

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
          source={require('../assets/images/whitebread.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>White bread</Text>
          <Text style={styles.description}>
            Consuming white bread will increase blood-sugar level. You are
            adviced to consume whole grain bread instead.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/sweetdrinks.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>High sugary drinks</Text>
          <Text style={styles.description}>
            Soft drink and sports drink are example of high sugary drinks that
            should avoid.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/coffeecreamer.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Coffee creamer</Text>
          <Text style={styles.description}>
            Coffe creamer contains high amount of sugar and it will increase
            blood-sugar level.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/jam.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Jam</Text>
          <Text style={styles.description}>
            Avoid consuming jam as it can increase blood-sugar level.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/processedfood.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Processed food</Text>
          <Text style={styles.description}>
            Many processed food in the market contains high amount of sugar, you
            are encouraged to cut down the consume of processed food.
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Types of diabeties</Text>

      <View style={{ flex: 1, margin: 10 }}>
        <Text style={styles.title2}>Type 1 diabetes</Text>
        <Text style={styles.description}>
          Type 1 diabetes is a chronic condition which the pancreas produces
          little or no insulin. Type 1 diabeties usually occurs in children,
          young adults and occasionally in older people.
        </Text>

        <Text style={styles.title2}>Type 2 diabetes</Text>
        <Text style={styles.description}>
          Type 2 diabetes is a condition when the pancreas produces insulin but
          the body does not use it effectively, also known as insulin
          resistance. Type 2 diabeties usually occurs in adulthood, overweight
          people and is hereditary.
        </Text>
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

export default Diabetes;