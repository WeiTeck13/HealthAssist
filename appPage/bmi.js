import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

//==========================================================================================
// export default class
//==========================================================================================

export default class BMI extends Component {
  //const HealthCalc = ({ navigation }) => {

  //==========================================================================================
  // math
  //==========================================================================================

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
    convert: 0,
  };

  handleNum1 = (text) => {
    this.setState({ convetval: text });
  };

  handleNum2 = (text) => {
    this.setState({ selitemval: text });
  };

  cal = (convetval, selitemval) => {
    this.setState({
      convert: Math.round((Number(convetval) / Math.pow(Number(selitemval) / 100, 2)) * 100) / 100,
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

          <Text style={{ textAlign: 'center', fontSize: 16 }}>{`BMI : ${this.state.convert}`}</Text>

          <TouchableOpacity
            onPress={() =>
              this.cal(this.state.convetval, this.state.selitemval)
            }
            style={styles.startButton2}>
            <Text style={styles.buttonText}>CALCULATE</Text>
          </TouchableOpacity>

          <Table style={{ padding: 10 }}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.headText} />
            <Rows data={state.tableData} style={styles.dataStyle} textStyle={styles.text} />
          </Table>

          <Text>{'\n'}</Text>

        </ScrollView>
      </SafeAreaView>
    );
  }
}