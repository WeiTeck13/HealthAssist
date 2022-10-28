import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

import { styles } from "../stylesheetFolder/style";

import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

//Storage Key for Async Storage
const STORAGE_KEY_APDATE = '@save_appDate';
const STORAGE_KEY_APTIME = '@save_appTime';
const STORAGE_KEY_APLOC = '@save_appLoc';
const STORAGE_KEY_DESC = '@save_desc';
const STORAGE_KEY_PREC = '@save_prec';

//==========================================================================================
// const begins here
//==========================================================================================

const HealthAppointment = ({ navigation }) => {

  //==========================================================================================
  // storage
  //==========================================================================================

  //Set State for Async Storage
  const [appDate, setappDate] = useState('');
  const [appTime, setappTime] = useState('');
  const [appLoc, setappLoc] = useState('');
  const [desc, setDesc] = useState('');
  const [prec, setPrec] = useState('');

  /* Save data into Async Storage */
  const saveData = async () => {
    if (!appLoc.trim() && !desc.trim()) {

      alert('Please enter the appointment date, time, location, and description.');

    } else {

      try {
        await AsyncStorage.setItem(STORAGE_KEY_APDATE, getDate());
        await AsyncStorage.setItem(STORAGE_KEY_APTIME, getTime());
        await AsyncStorage.setItem(STORAGE_KEY_APLOC, appLoc);
        await AsyncStorage.setItem(STORAGE_KEY_DESC, desc);
        await AsyncStorage.setItem(STORAGE_KEY_PREC, prec);

        alert('Data successfully saved');
      } catch (e) {
        alert('Failed to save the data to the storage');
      }
    }
  };

  /* Read data from Async Storage */
  const readData = async () => {
    try {
      const userAppDate = await AsyncStorage.getItem(STORAGE_KEY_APDATE);
      const userAppTime = await AsyncStorage.getItem(STORAGE_KEY_APTIME);
      const userAppLoc = await AsyncStorage.getItem(STORAGE_KEY_APLOC);
      const userDesc = await AsyncStorage.getItem(STORAGE_KEY_DESC);
      const userPrec = await AsyncStorage.getItem(STORAGE_KEY_PREC);

      if (userAppDate !== null) {
        setappDate(userAppDate);
      }

      if (userAppTime !== null) {
        setappTime(userAppTime);
      }

      if (userAppLoc !== null) {
        setappLoc(userAppLoc);
      }

      if (userDesc !== null) {
        setDesc(userDesc);
      }

      if (userPrec !== null) {
        setPrec(userPrec);
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
      await AsyncStorage.removeItem('@save_appDate');
      await AsyncStorage.removeItem('@save_appTime');
      await AsyncStorage.removeItem('@save_appLoc');
      await AsyncStorage.removeItem('@save_desc');
      await AsyncStorage.removeItem('@save_prec');

      setappDate('');
      setappTime('');
      setappLoc('');
      setDesc('');
      setPrec('');

      alert('Storage successfully cleared!');

    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  const onChangeTextDate = (userAppDate) => setappDate(userAppDate);
  const onChangeTextTime = (userAppTime) => setappTime(userAppTime);
  const onChangeTextLoc = (userAppLoc) => setappLoc(userAppLoc);
  const onChangeTextDesc = (userDesc) => setDesc(userDesc);
  const onChangeTextPrec = (userPrec) => setPrec(userPrec);

  const onSubmitEditing = () => {
    if (!appDate && !appTime && !appLoc && !desc && !prec) return;

    saveData(appDate, appTime, appLoc, desc, prec);

    setappDate('');
    setappTime('');
    setappLoc('');
    setDesc('');
    setPrec('');
  };

  //==========================================================================================
  // date and time picker
  //==========================================================================================

  //Date picker
  //const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (appDate) => {
    //setDate(date);
    setappDate(appDate);
    hideDatePicker();
  };

  const getDate = () => {

    let tempDate = appDate.toString().split(' ');
    return appDate !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  //Time picker
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (appTime) => {
    setappTime(appTime);
    hideTimePicker();
  };

  const getTime = () => {

    let tempTime = appTime.toString().split(' ');
    return appTime !== ''
      ? `${tempTime[4]}`
      : '';
  };

  //==========================================================================================
  // return
  //==========================================================================================

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title3}>Date</Text>

      <TouchableOpacity onPress={showDatePicker} style={styles.iconButton1}>
        <Icon name="calendar" size={30} color="#1976D2" /><Text style={styles.buttonText}> | {getDate()}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.title3}>Time</Text>

      <TextInput
        style={styles.input}
        placeholder="Time"
        keyboardType="default"
        value={getTime()}
        onChangeText={onChangeTextTime}
        onSubmitEditing={onSubmitEditing}
      />

      {/* <TouchableOpacity onPress={showTimePicker} style={styles.iconButton1}>
          <Icon2 name="clockcircleo" size={30} color='#1976D2' />
        </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      /> */}

      <Text style={styles.title3}>Appointment location</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Appointment location"
        keyboardType="default"
        value={appLoc}
        onChangeText={onChangeTextLoc}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Appointment description</Text>
      <TextInput
        multiline
        style={styles.inputII}
        placeholder="Description"
        keyboardType="default"
        value={desc}
        onChangeText={onChangeTextDesc}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Precaution note</Text>
      <Text style={{ marginLeft: 5, fontSize: 16, color:'black' }}>Your doctor may require you to take note certain precaution before your upcoming appointment.</Text>

      <TextInput
        multiline
        style={styles.inputII}
        placeholder="Precaution note"
        keyboardType="default"
        value={prec}
        onChangeText={onChangeTextPrec}
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

export default HealthAppointment;