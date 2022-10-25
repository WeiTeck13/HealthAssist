import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Icon from 'react-native-vector-icons/Ionicons';

//Storage Key for Async Storage
const STORAGE_KEY_NAME = '@save_name';
const STORAGE_KEY_DOB = '@save_DOB';
const STORAGE_KEY_BLOOD = '@save_blood';
const STORAGE_KEY_ALLERGY = '@save_allergy';
const STORAGE_KEY_HEALTH = '@save_healthCon';
const STORAGE_KEY_WEIGHT = '@save_weight';
const STORAGE_KEY_HEIGHT = '@save_height';

//==========================================================================================
// const begins here
//==========================================================================================

const Profile = ({ navigation }) => {

  //==========================================================================================
  // storage
  //==========================================================================================

  //Set State for Async Storage
  const [name, setName] = useState('');
  const [dateOB, setDateOB] = useState('');
  const [blood, setBlood] = useState('');
  const [allergy, setAllergy] = useState('');
  const [healthCon, setHealthCon] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  /* Save data into Async Storage */
  const saveData = async () => {
    if (!name.trim()) {

      alert('Please enter name.');

    } else {

      try {
        await AsyncStorage.setItem(STORAGE_KEY_NAME, name);
        await AsyncStorage.setItem(STORAGE_KEY_DOB, getDate());
        await AsyncStorage.setItem(STORAGE_KEY_BLOOD, blood);
        await AsyncStorage.setItem(STORAGE_KEY_ALLERGY, allergy);
        await AsyncStorage.setItem(STORAGE_KEY_HEALTH, healthCon);
        await AsyncStorage.setItem(STORAGE_KEY_WEIGHT, weight);
        await AsyncStorage.setItem(STORAGE_KEY_HEIGHT, height);

        alert('Data successfully saved');

      } catch (e) {
        alert('Failed to save the data to the storage');
      }
    }
  };

  /* Read data from Async Storage */
  const readData = async () => {
    try {
      const userName = await AsyncStorage.getItem(STORAGE_KEY_NAME);
      const userDOB = await AsyncStorage.getItem(STORAGE_KEY_DOB);
      const userBlood = await AsyncStorage.getItem(STORAGE_KEY_BLOOD);
      const userAllergy = await AsyncStorage.getItem(STORAGE_KEY_ALLERGY);
      const userHealth = await AsyncStorage.getItem(STORAGE_KEY_HEALTH);
      const userWeight = await AsyncStorage.getItem(STORAGE_KEY_WEIGHT);
      const userHeight = await AsyncStorage.getItem(STORAGE_KEY_HEIGHT);

      if (userName !== null) {
        setName(userName);
      }

      if (userDOB !== null) {
        setDateOB(userDOB);
      }

      if (userBlood !== null) {
        setBlood(userBlood);
      }

      if (userAllergy !== null) {
        setAllergy(userAllergy);
      }

      if (userHealth !== null) {
        setHealthCon(userHealth);
      }

      if (userWeight !== null) {
        setWeight(userWeight);
      }

      if (userHeight !== null) {
        setHeight(userHeight);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  useEffect(() => {
    readData();
  }, []);

  // Clear data warning
  const clearWarning = () =>
    Alert.alert(
      "Alert",
      "Are you sure you want to delete all your data?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "DELETE", onPress: clearStorage }
      ]
    );

  /* Clear data from Async Storage */
  const clearStorage = async () => {
    try {
      //await AsyncStorage.clear();
      await AsyncStorage.removeItem('@save_name');
      await AsyncStorage.removeItem('@save_DOB');
      await AsyncStorage.removeItem('@save_blood');
      await AsyncStorage.removeItem('@save_allergy');
      await AsyncStorage.removeItem('@save_healthCon');
      await AsyncStorage.removeItem('@save_weight');
      await AsyncStorage.removeItem('@save_height');

      setName('');
      setDateOB('');
      setBlood('');
      setAllergy('');
      setHealthCon('');
      setWeight('');
      setHeight('');

      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  const onChangeTextName = (userName) => setName(userName);
  const onChangeDOB = (userDOB) => setDateOB(userDOB);
  const onChangePickerBlood = (userBlood) => setBlood(userBlood);
  const onChangeTextAllergy = (userAllergy) => setAllergy(userAllergy);
  const onChangeTextHealth = (userHealth) => setHealthCon(userHealth);
  const onChangeTextWeight = (userWeight) => setWeight(userWeight);
  const onChangeTextHeight = (userHeight) => setHeight(userHeight);

  const onSubmitEditing = () => {
    if (
      !name &&
      !dateOB &&
      !blood &&
      !allergy &&
      !healthCon &&
      !weight &&
      !height
    )
      return;

    saveData(name, dateOB, blood, allergy, healthCon, weight, height);

    setName('');
    setDateOB('');
    setBlood('');
    setAllergy('');
    setHealthCon('');
    setWeight('');
    setHeight('');
  };

  //Date picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (dateOB) => {
    setDateOB(dateOB);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = dateOB.toString().split(' ');
    return dateOB !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  //==========================================================================================
  // return
  //==========================================================================================

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title3}>Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        keyboardType="default"
        value={name}
        onChangeText={onChangeTextName}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Date of birth</Text>

      <TouchableOpacity onPress={showDatePicker} style={styles.iconButton1}>
        <Icon name="calendar" size={30} color="#1976D2" /><Text style={styles.buttonText}> | {getDate()}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.title3}>Blood type</Text>

      <Picker
        style={styles.pickerStyle}
        value={blood}
        selectedValue={blood}
        onValueChange={onChangePickerBlood}
        onSubmitEditing={onSubmitEditing}>
        <Picker.Item label="Select blood type" value="NIL" />
        <Picker.Item label="O-" value="o-" />
        <Picker.Item label="O+" value="o+" />
        <Picker.Item label="A-" value="a-" />
        <Picker.Item label="A+" value="a+" />
        <Picker.Item label="B-" value="b-" />
        <Picker.Item label="B+" value="b+" />
        <Picker.Item label="AB-" value="ab-" />
        <Picker.Item label="AB+" value="ab+" />
      </Picker>

      <Text style={styles.title3}>Allergy</Text>
      <TextInput
        multiline
        style={styles.inputII}
        placeholder="Allergy"
        keyboardType="default"
        value={allergy}
        onChangeText={onChangeTextAllergy}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Health condition</Text>
      <TextInput
        multiline
        style={styles.inputII}
        placeholder="Health condition"
        keyboardType="default"
        value={healthCon}
        onChangeText={onChangeTextHealth}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Weight</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight in KG"
        keyboardType="numeric"
        value={weight}
        onChangeText={onChangeTextWeight}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Height</Text>
      <TextInput
        style={styles.input}
        placeholder="Height in CM"
        keyboardType="numeric"
        value={height}
        onChangeText={onChangeTextHeight}
        onSubmitEditing={onSubmitEditing}
      />

      <View style={styles.buttonArea}>

        <TouchableOpacity onPress={clearWarning} style={styles.clearButton}>
          <Text style={styles.buttonText}>CLEAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={saveData} style={styles.startButton}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>

      </View>

      <Text>{"\n"}</Text>

    </ScrollView>
  );
};

export default Profile;