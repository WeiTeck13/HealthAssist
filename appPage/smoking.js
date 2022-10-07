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
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

//==========================================================================================
// const begins here
//==========================================================================================

const Smoking = ({ navigation }) => {

  const adUnitId = 'ca-app-pub-3038938528713825/9397097692';

  //==========================================================================================
  // return
  //==========================================================================================

  return (

    <ScrollView style={styles.container}>
      <Text style={styles.title}>Risk of smoking</Text>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/lung.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Cancer</Text>
          <Text style={styles.description}>
            Smoking can causes lung cancer to the smoker. Inhaling the cigarette smoke can damage the cells and causes tar in smoke to stick inside the lungs.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/chemical.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Nicotine poisoning</Text>
          <Text style={styles.description}>
            Nicotine is a poison contain in cigarette and it can cause smoker addict to nicotine. It also can causes death to smoker by stopping the breathing muscles.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/dentist.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Gum disease</Text>
          <Text style={styles.description}>
            Smoking can cause dental problems including bad breath, plaque and tartar buildup on the teeth, increased risk of leukoplakia, oral cancer, and gum disease risks tooth loss.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/2ndHandSmoke.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Secondhand smoke</Text>
          <Text style={styles.description}>
            People around the smoker inhaling the secondhand smoke can also have health issues. Parent should not smoke at home or near their child. You can also disallow smoker to smoke at your home.
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/btnImages/Pregnant.jpg')}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title2}>Miscarriage</Text>
          <Text style={styles.description}>
            A danger risk of smoking that you should aware is miscarriage for pregnant mothers.
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Chemicals in cigarette</Text>
      <View style={{ flex: 1, margin: 10 }}>
        <Text style={styles.description}>A cigarette contains the following chemicals:{'\n\n'}1. Butane{'\n'}2. Stearic acid{'\n'}3. Amonia{'\n'}4. Benzene{'\n'}5. Toluene{'\n'}6. Nicotine{'\n'}7. Arsenic{'\n'}8. Carbon monoxide{'\n'}9. Cadmium{'\n'}10. Acetic acid{'\n'}11. Acetone{'\n'}12. Methanol{'\n'}</Text>
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

export default Smoking;