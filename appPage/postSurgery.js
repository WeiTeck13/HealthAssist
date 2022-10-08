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
    ScrollView,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

//==========================================================================================
// const begins here
//==========================================================================================

const PostSurgery = ({ navigation }) => {

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
                    source={require('../assets/images/spicyRamen.jpg')}
                />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={styles.title2}>Spicy food</Text>
                    <Text style={styles.description}>
                        Avoid consuming spicy food after surgery, as it can harm your stomach.
                    </Text>
                </View>
            </View>

            <View style={styles.contentStyle}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/alcohol.jpg')}
                />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={styles.title2}>Alcohol</Text>
                    <Text style={styles.description}>
                        Alcohol should be avoided after surgery as it cannot be mixed with your medicine, and it also causes dehydration. You need hydration for healing quickly.
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
                        Processed food can can cause constipation and it lacks the nutrition that can help your body to heal.
                    </Text>
                </View>
            </View>

            <View style={styles.contentStyle}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/jam.jpg')}
                />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={styles.title2}>Sugary food</Text>
                    <Text style={styles.description}>
                        The blood-sugar level may rise after surgery, so do avoid consuming sugary food.
                    </Text>
                </View>
            </View>

            <View style={styles.contentStyle}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/eggAndBread.jpg')}
                />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={styles.title2}>Foods that might cause constipation</Text>
                    <Text style={styles.description}>
                        Foods such as eggs, high-fat meats, sweets, and dairy products can cause constipation and should be avoided.
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

export default PostSurgery;