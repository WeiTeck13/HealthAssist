import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

//==========================================================================================
// export default class
//==========================================================================================

export default class BMR extends Component {

    //==========================================================================================
    // math
    //==========================================================================================

    state = {
        weight: '',
        height: '',
        userAge: '',
        male: 0,
        female: 0,
    };

    handleNum1 = (text) => {
        this.setState({ weight: text });
    };

    handleNum2 = (text) => {
        this.setState({ height: text });
    };

    handleNumAge = (text) => {
        this.setState({ userAge: text });
    };

    cal = (weight, height, userAge) => {
        this.setState({
            male: Math.round(((10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(userAge)) + 5) * 100) / 100,
            female: Math.round(((10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(userAge)) - 161) * 100) / 100,
        });
    };

    //==========================================================================================
    // render
    //==========================================================================================

    render() {

        const state = this.state;

        //==========================================================================================
        // return
        //==========================================================================================

        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <Text style={styles.title3}>Age</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        keyboardType="numeric"
                        onChangeText={this.handleNumAge}
                    />

                    <Text style={styles.title3}>Weight</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Weight in KG"
                        keyboardType="numeric"
                        onChangeText={this.handleNum1}
                    />

                    <Text style={styles.title3}>Height</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Height in CM"
                        keyboardType="numeric"
                        onChangeText={this.handleNum2}
                    />

                    <Text style={{ textAlign: 'center', fontSize: 16, color:'black' }}>{`BMR (MALE): ${this.state.male}`}</Text>

                    <Text style={{ textAlign: 'center', fontSize: 16, color:'black' }}>{`BMR (FEMALE): ${this.state.female}`}</Text>

                    <TouchableOpacity
                        onPress={() =>
                            this.cal(this.state.weight, this.state.height, this.state.userAge)
                        }
                        style={styles.startButton2}>
                        <Text style={styles.buttonText}>CALCULATE</Text>
                    </TouchableOpacity>

                    <Text style={styles.title3}>Note</Text>
                    <Text style={{ paddingLeft: 5, fontSize: 16, color:'black' }}>This BMR calculator uses the Harris–Benedict equations revised by Mifflin and St Jeor in 1990.</Text>


                </ScrollView>
            </SafeAreaView>
        );
    }
}