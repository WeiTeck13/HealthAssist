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
  Button,
  Image,
  ImageBackground,
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

const Elderly = ({ navigation }) => {

  const adUnitId = 'ca-app-pub-3038938528713825/7955729993';

  //==========================================================================================
  // return
  //==========================================================================================

  return (

    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recommended food</Text>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/fish.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Fish</Text>
          <Text style={styles.description}>
            Fish are rich in protein and it can helps to build and repair body.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/tofu.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Tofu</Text>
          <Text style={styles.description}>
            Tofu are rich in protein and it can helps to build and repair body.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/wholegrainbread.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Wholegrain</Text>
          <Text style={styles.description}>
            Wholegrain are rich in vitamins and minerals, it helps to strengthen your body’s immune system and have a protective effect against heart disease, stroke and certain types of cancers. It also contain both soluble and insoluble fibres. The soluble fibre helps lower blood cholesterol levels and insoluble fibre promotes healthy bowel functions. Some of the wholegrain foods are brown rice and wholegrain bread.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/fruitNvege.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Fruit and vegetable</Text>
          <Text style={styles.description}>
            Fruit and vegetable are rich in vitamins and minerals, it helps to strengthen your body’s immune system and have a protective effect against heart disease, stroke and certain types of cancers. It also contain soluble and insoluble fibres. The soluble fibre helps lower blood cholesterol levels and insoluble fibre promotes healthy bowel functions.
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

export default Elderly;