import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

export default class BloodDonation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Blood type', 'Can donate to', 'Can receive'],
            tableData: [
                ['O-', 'All blood types', 'O-'],
                ['O+', 'O+ A+ B+ AB+', 'O+ O-'],
                ['A-', 'A- A+ AB- AB+', 'O- A-'],
                ['A+', 'A+ AB+', 'O- O+ A- A+'],
                ['B-', 'B- B+ AB- AB+', 'O- B-'],
                ['B+', 'B+ AB+', 'O- O+ B- B+'],
                ['AB-', 'AB- AB+', 'O- A- B- AB-'],
                ['AB+', 'AB+', 'All blood types']
            ]
        }
    }

    render() {

        const adUnitId = 'ca-app-pub-3038938528713825/7955729993';

        const state = this.state;

        return (

            <ScrollView style={styles.container}>
                <Text style={styles.title}>Foods to avoid before donation</Text>

                <View style={styles.contentStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/images/alcohol.jpg')}
                    />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.title2}>Alcohol</Text>
                        <Text style={styles.description}>
                            Avoid consuming alcohol 24 hours before you donate blood, as it can cause dehydration.
                        </Text>
                    </View>
                </View>

                <View style={styles.contentStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/images/aspirin.jpg')}
                    />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.title2}>Aspirin</Text>
                        <Text style={styles.description}>
                            Your body must be aspirin-free for 48 hours before donation, if you are donating blood platelets.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title}>Blood type compatibility</Text>

                <Table style={{ padding: 10 }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.headText} />
                    <Rows data={state.tableData} style={styles.dataStyle} textStyle={styles.text} />
                </Table>

                {/* Advertisement banner */}
                <View style={{ alignItems: 'center' }}>

                    <Text>{'\n'}</Text>

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
    }
}