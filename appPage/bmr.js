import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

//AdMob import
import { AdMobBanner } from 'expo-ads-admob';

export default class BMR extends Component {
    //const HealthCalc = ({ navigation }) => {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Classification', 'BMI'],
            tableData: [
                ['Underweight', 'Less than 18.50'],
                ['Normal', '18.50 to 24.99'],
                ['Overweight', '25.00 to 29.99'],
                ['Obese', '30 or more']
            ]
        }
    }

    state = {
        convetval: '',
        selitemval: '',
        userAge: '',
        gender: 0,
        choosenIndex: 0,
        convert: 0,
    };

    handleNum1 = (text) => {
        this.setState({ convetval: text });
    };

    handleNum2 = (text) => {
        this.setState({ selitemval: text });
    };

    handleNumAge = (text) => {
        this.setState({ userAge: text });
    };

    cal = (convetval, selitemval, userAge, gender) => {
        this.setState({
            convert: Math.round(((10 * Number(convetval)) + (6.25 * Number(selitemval)) - (5 * Number(userAge)) + Number(gender))*100)/100,
        });
    };

    render() {

        const state = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        keyboardType="numeric"
                        onChangeText={this.handleNumAge}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Weight in KG"
                        keyboardType="numeric"
                        onChangeText={this.handleNum1}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Height in CM"
                        keyboardType="numeric"
                        onChangeText={this.handleNum2}
                    />

                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.gender}
                        onValueChange={(itemValue, itemPosition) =>
                            this.setState({ gender: itemValue, choosenIndex: itemPosition })
                        }>
                        <Picker.Item label="Male" value="5" />
                        <Picker.Item label="Female" value="-161" />
                    </Picker>

                    <Text style={styles.textStyle}>{`BMR : ${this.state.convert}`}</Text>

                    <TouchableOpacity
                        onPress={() =>
                            this.cal(this.state.convetval, this.state.selitemval, this.state.gender, this.state.userAge)
                        }
                        style={styles.startButton}>
                        <Text style={styles.buttonText}>CALCULATE</Text>
                    </TouchableOpacity>

                    <Table style={{ padding: 10 }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.headText} />
                        <Rows data={state.tableData} style={styles.dataStyle} textStyle={styles.text} />
                    </Table>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#ffe7e7',
        padding: 8,
    },
    startButton: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#ed5e5d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    input: {
        height: 40,
        margin: 12,

        padding: 10,
        backgroundColor: 'white',
    },
    textStyle: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
    },
    pickerStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#344953',
        justifyContent: 'center',
    },
    head: { height: 40, backgroundColor: '#ed5e5d' },
    headText: { margin: 6, color: 'white' },
    text: { margin: 6 },
    dataStyle: { backgroundColor: 'white' },
});