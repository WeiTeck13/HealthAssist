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

import Icon from 'react-native-vector-icons/AntDesign';

//Storage Key for Async Storage
const STORAGE_KEY_TITLE = '@save_title';
const STORAGE_KEY_COMPANY = '@save_company';
const STORAGE_KEY_COST = '@save_cost';
const STORAGE_KEY_NOTE = '@save_note';
const STORAGE_KEY_EFFECTIVE = '@save_effective';
const STORAGE_KEY_EXPIRY = '@save_expiry';

//==========================================================================================
// const begins here
//==========================================================================================

const Insurance = ({ navigation }) => {

  //==========================================================================================
  // storage
  //==========================================================================================

  //Set State for Async Storage
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [cost, setCost] = useState('');
  const [note, setNote] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  /* Save data into Async Storage */
  const saveData = async () => {

    if (!title.trim() && !company.trim() && !note.trim()) {

      alert('Please enter the insurance title, company, and note.')

    } else {

      try {
        await AsyncStorage.setItem(STORAGE_KEY_TITLE, title);
        await AsyncStorage.setItem(STORAGE_KEY_COMPANY, company);
        await AsyncStorage.setItem(STORAGE_KEY_COST, cost);
        await AsyncStorage.setItem(STORAGE_KEY_NOTE, note);
        await AsyncStorage.setItem(STORAGE_KEY_EFFECTIVE, getDate());
        await AsyncStorage.setItem(STORAGE_KEY_EXPIRY, getExpDate());

        alert('Data successfully saved');
      } catch (e) {
        alert('Failed to save the data to the storage');
      }
    }
  };

  /* Read data from Async Storage */
  const readData = async () => {
    try {
      const userTitle = await AsyncStorage.getItem(STORAGE_KEY_TITLE);
      const userCompany = await AsyncStorage.getItem(STORAGE_KEY_COMPANY);
      const userCost = await AsyncStorage.getItem(STORAGE_KEY_COST);
      const userNote = await AsyncStorage.getItem(STORAGE_KEY_NOTE);
      const userEffective = await AsyncStorage.getItem(STORAGE_KEY_EFFECTIVE);
      const userExpiry = await AsyncStorage.getItem(STORAGE_KEY_EXPIRY);

      if (userTitle !== null) {
        setTitle(userTitle);
      }

      if (userCompany !== null) {
        setCompany(userCompany);
      }

      if (userCost !== null) {
        setCost(userCost);
      }

      if (userNote !== null) {
        setNote(userNote);
      }

      if (userEffective !== null) {
        setEffectiveDate(userEffective);
      }

      if (userExpiry !== null) {
        setExpiryDate(userExpiry);
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
      await AsyncStorage.removeItem('@save_title');
      await AsyncStorage.removeItem('@save_company');
      await AsyncStorage.removeItem('@save_cost');
      await AsyncStorage.removeItem('@save_note');
      await AsyncStorage.removeItem('@save_effective');
      await AsyncStorage.removeItem('@save_expiry');

      setTitle('');
      setCompany('');
      setCost('');
      setNote('');
      setEffectiveDate('');
      setExpiryDate('');

      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  const onChangeTextTitle = (userTitle) => setTitle(userTitle);
  const onChangeTextCompany = (userCompany) => setCompany(userCompany);
  const onChangeTextCost = (userCost) => setCost(userCost);
  const onChangeTextNote = (userNote) => setNote(userNote);
  const onChangeTextEffective = (userEffective) => setEffectiveDate(userEffective);
  const onChangeTextExpiry = (userExpiry) => setExpiryDate(userExpiry);

  const onSubmitEditing = () => {
    if (!title && !company && !cost && !note && !effectiveDate && !expiryDate) return;

    saveData(title, company, cost, note, effectiveDate, expiryDate);

    setTitle('');
    setCompany('');
    setCost('');
    setNote('');
    setEffectiveDate('');
    setExpiryDate('');
  };

  //==========================================================================================
  // date and time picker
  //==========================================================================================

  //Date picker for effective date
  const [isEffDatePickerVisible, setEffDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setEffDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setEffDatePickerVisibility(false);
  };

  const handleConfirm = (effectiveDate) => {
    setEffectiveDate(effectiveDate);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = effectiveDate.toString().split(' ');
    return effectiveDate !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  //Date picker for expiry date
  const [isExpDatePickerVisible, setExpDatePickerVisibility] = useState(false);

  const showExpDatePicker = () => {
    setExpDatePickerVisibility(true);
  };

  const hideExpDatePicker = () => {
    setExpDatePickerVisibility(false);
  };

  const handleConfirmII = (expiryD) => {
    setExpiryDate(expiryD);
    hideExpDatePicker();
  };

  const getExpDate = () => {
    let tempDate = expiryDate.toString().split(' ');
    return expiryDate !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  //==========================================================================================
  // return
  //==========================================================================================

  return (

    <ScrollView style={styles.container}>
      <Text style={styles.title3}>Insurance title</Text>
      <TextInput
        style={styles.input}
        placeholder="Insurance title"
        keyboardType="default"
        value={title}
        onChangeText={onChangeTextTitle}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Insurance company</Text>
      <TextInput
        style={styles.input}
        placeholder="Insurance company"
        keyboardType="default"
        value={company}
        onChangeText={onChangeTextCompany}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Cost</Text>
      <TextInput
        style={styles.input}
        placeholder="Cost"
        keyboardType="numeric"
        value={cost}
        onChangeText={onChangeTextCost}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Note</Text>
      <TextInput
        multiline
        style={styles.inputII}
        placeholder="Note"
        keyboardType="default"
        value={note}
        onChangeText={onChangeTextNote}
        onSubmitEditing={onSubmitEditing}
      />

      <Text style={styles.title3}>Effective date</Text>

      <TextInput
        style={styles.input}
        placeholder="Effective date"
        keyboardType="default"
        value={getDate()}
        onChangeText={onChangeTextEffective}
        onSubmitEditing={onSubmitEditing}
        editable={false}
      />

      <TouchableOpacity onPress={showDatePicker} style={styles.iconButton}>
        <Icon name="calendar" size={30} color="white" /><Text style={styles.buttonText}> SELECT DATE</Text>
      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isEffDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.title3}>Expiry date</Text>

      <TextInput
        style={styles.input}
        placeholder="Expiry date"
        keyboardType="default"
        value={getExpDate()}
        onChangeText={onChangeTextExpiry}
        onSubmitEditing={onSubmitEditing}
        editable={false}
      />

      <TouchableOpacity
        onPress={showExpDatePicker}
        style={styles.iconButton}>
        <Icon name="calendar" size={30} color="white" /><Text style={styles.buttonText}> SELECT DATE</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isExpDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmII}
        onCancel={hideExpDatePicker}
      />

      <View
        style={{
          padding: 20,
          borderBottomColor: 'grey',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View
        style={styles.buttonArea}>
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

export default Insurance;